/* KiranaBook Service Worker — Offline-first app shell cache
   Version: v19
   Strategy:
     - App shell (HTML itself) → Cache-first, network fallback
     - Fonts / static assets → Cache-first
     - Supabase API calls → Network-only (never cache auth/data)
     - Everything else → Network-first, cache fallback
*/

var CACHE = 'kiranabook-v19';
var APP_SHELL = [
  './',            /* the HTML file served at root */
  './index.html',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
];

/* ── Install: pre-cache app shell ── */
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(cache){
      return cache.addAll(APP_SHELL);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

/* ── Activate: delete old caches ── */
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

/* ── Fetch: routing strategy ── */
self.addEventListener('fetch', function(e){
  var url = new URL(e.request.url);

  /* Never intercept Supabase API, auth, or Razorpay requests */
  if(url.hostname.includes('supabase.co') ||
     url.hostname.includes('razorpay.com') ||
     url.hostname.includes('checkout.razorpay') ||
     url.pathname.includes('/auth/') ||
     url.pathname.includes('/rest/v1/') ||
     url.pathname.includes('/realtime/')){
    return; /* pass through — browser handles normally */
  }

  /* App shell: cache-first */
  if(e.request.mode === 'navigate' ||
     APP_SHELL.some(function(u){ return e.request.url.endsWith(u.replace('./','')); })){
    e.respondWith(
      caches.match(e.request).then(function(cached){
        var networkFetch = fetch(e.request).then(function(res){
          if(res && res.status === 200){
            var clone = res.clone();
            caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
          }
          return res;
        });
        /* Return cache immediately if available, update in background */
        return cached || networkFetch;
      })
    );
    return;
  }

  /* Fonts & static CDN: cache-first */
  if(url.hostname.includes('fonts.googleapis.com') ||
     url.hostname.includes('fonts.gstatic.com') ||
     url.hostname.includes('cdnjs.cloudflare.com')){
    e.respondWith(
      caches.match(e.request).then(function(cached){
        return cached || fetch(e.request).then(function(res){
          if(res && res.status === 200){
            var clone = res.clone();
            caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
          }
          return res;
        });
      })
    );
    return;
  }

  /* Everything else: network-first, cache fallback */
  e.respondWith(
    fetch(e.request).then(function(res){
      if(res && res.status === 200 && e.request.method === 'GET'){
        var clone = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
      }
      return res;
    }).catch(function(){
      return caches.match(e.request);
    })
  );
});

/* ── Background sync (if supported) ── */
self.addEventListener('sync', function(e){
  if(e.tag === 'kb-sync'){
    /* Notify the page to run flushQueue() */
    e.waitUntil(
      self.clients.matchAll().then(function(clients){
        clients.forEach(function(client){
          client.postMessage({type: 'SW_SYNC'});
        });
      })
    );
  }
});

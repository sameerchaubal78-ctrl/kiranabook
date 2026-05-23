/* KiranaBook Service Worker v1.0 */
const CACHE = 'kiranabook-v1';
const OFFLINE_URL = '/';

/* Cache the app shell on install */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll([OFFLINE_URL]);
    })
  );
  self.skipWaiting();
});

/* Clean up old caches on activate */
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

/* Network-first strategy: try network, fall back to cache */
self.addEventListener('fetch', function(e) {
  /* Only handle GET requests for same-origin or CDN resources */
  if(e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(function(response) {
        /* Cache successful responses */
        if(response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      })
      .catch(function() {
        /* Network failed — serve from cache */
        return caches.match(e.request).then(function(cached) {
          return cached || caches.match(OFFLINE_URL);
        });
      })
  );
});

/* ── error visibility ── */
window.onerror = function(msg,src,line,col,err){
  var b = document.getElementById('js-err-banner');
  if(b){ b.textContent = '⚠️ JS Error: ' + msg + ' (line '+line+')'; b.style.display='block'; }
  return false;
};

(function(){
  console.log('%c KiranaBook v17 loaded ✅', 'background:#E8650A;color:white;padding:4px 8px;border-radius:4px;font-weight:bold;');
  var EMOJIS={'Grains & Dal':'🌾','अनाज और दाल':'🌾','Oil & Ghee':'🫙','तेल और घी':'🫙','Spices':'🌶️','मसाले':'🌶️','Snacks':'🍿','नाश्ता':'🍿','Beverages':'🧃','पेय पदार्थ':'🧃','Dairy':'🥛','डेयरी':'🥛','Cleaning':'🧹','सफाई':'🧹','Other':'📦','अन्य':'📦'};

  /* ══ TRANSLATIONS ══ */
  var TX = {
    en:{
      lang_label:'Choose your language',
      modal_signin_h:'Welcome back', modal_signin_sub:'Sign in to access your store dashboard.',
      tab_phone:'Mobile OTP', tab_wa:'WhatsApp', tab_email:'Email', tab_google:'Google',
      otp_send:'Send OTP', otp_sending:'Sending...', otp_sent:'OTP sent!',
      otp_verify:'Verify', otp_verifying:'Verifying...',
      otp_resend:'Resend OTP', otp_enter:'Enter 6-digit OTP',
      wa_send:'Send via WhatsApp', wa_hint:'We\'ll send a 6-digit OTP to your WhatsApp.',
      wa_note:'Make sure WhatsApp is active on this number.',
      google_note:'Best for users with a Gmail account.',
      otp_timer:'Resend in {n}s',
      err_phone_invalid:'Please enter a valid 10-digit mobile number.',
      err_otp_invalid:'Please enter the 6-digit OTP.',
      err_otp_wrong:'Incorrect OTP. Please try again.',
      err_otp_expired:'OTP expired. Please request a new one.',
      err_too_many_otp:'Too many attempts. Please wait a few minutes.',
      modal_signup_h:'Create your account', modal_signup_sub:'Sign up with Google — data saved securely in the cloud.',
      g_btn:'Continue with Google', why:'Why KiranaBook?',
      pk1:'Your data saved securely in the cloud', pk2:'Access from any phone, anytime',
      pk3:'Private — only you see your data', pk4:'Completely free, forever',
      nl_feat:'Features', nl_how:'How it works', nl_free:'Free forever', nl_pricing:'Pricing',
      nav_signin:'Sign in', nav_start:'Get started free →',
      mosaic_h2:'India\'s kirana owners.<br><em>Powered by KiranaBook.</em>',
      mosaic_sub:'Real store owners, real stores, real results.',
      pr_eyebrow:'Simple kirana-friendly pricing', pr_h2:'Cheaper than<br><em style="font-style:italic;color:var(--saffron)">a cup of chai.</em>',
      pr_sub:'Start free. Upgrade only when you need to. No hidden charges.',
      ptog_mo:'Monthly', ptog_yr:'Annual', pr_save_pill:'🎉 2 Months Free',
      pr_popular:'⭐ Most Popular',
      pc1_plan:'FREE', pc1_plan_hi:'Free', pc1_period:'Free forever',
      pf1_1:'Stock up to 50 items', pf1_2:'Udhar khata (10 customers)',
      pf1_3:'Daily sales recording', pf1_4:'1 month reports',
      pf1_5:'No WhatsApp reminders', pf1_6:'No data export',
      pc1_cta:'Start for free',
      pc2_plan:'DUKANDAAR', pc2_plan_hi:'Shopkeeper',
      pc2_annual_note:'<span>Save ₹389 at ₹799/year</span>',
      pc2_chai:'☕ Less than 3 cups of chai a day',
      pf2_1:'<span class="pf-highlight">Unlimited</span> stock items',
      pf2_2:'<span class="pf-highlight">Unlimited</span> udhar customers',
      pf2_3:'12 months full reports', pf2_4:'WhatsApp udhar reminders',
      pf2_5:'Low stock SMS alerts', pf2_6:'No multi-device',
      pc2_cta:'Start Dukandaar Plan →',
      pc3_plan:'MALIK', pc3_plan_hi:'Owner',
      pc3_annual_note:'<span>Save ₹889 at ₹1,499/year</span>',
      pf3_1:'Everything in Dukandaar',
      pf3_2:'<span class="pf-highlight">3 devices</span> simultaneously',
      pf3_3:'Export data to Excel', pf3_4:'Priority support',
      pf3_5:'New features first', pf3_6:'GST bill generator',
      pc3_cta:'Start Malik Plan',
      pr_foot:'14-day free trial on all paid plans. No credit card required.',
      h_eyebrow:'Built for Indian Kirana Stores',
      h_headline:'Your store,<br><em>smarter</em> &amp;<br><span class="ug">more profitable.</span>',
      h_sub:'Track stock, manage <strong>udhar khata</strong>, record daily sales — all in one beautiful app.',
      h_cta1:'Start Free Today →', h_cta2:'See features',
      h_trust:'<strong>500+</strong> kirana owners using KiranaBook',
      m_badge1:'✅ ₹3,240 earned today', m_badge2:'⚠️ 3 items low on stock',
      m_title:'My Kirana Store', m_date:'Today, 16 May',
      m_s1:'Stock value', m_s2:"Today's sales", m_s3:'Total udhar', m_s4:'Low stock', m_s4v:'3 items',
      m_q1:'45 left', m_q2:'3 left', m_q3:'2 left',
      m_low:'⚠ Low', m_udhar_label:'Latest udhar', m_outstanding:'outstanding',
      f_eyebrow:'Everything you need', f_h2:'Built for the way<br>kirana owners work.',
      f_sub:'No complicated setup. No training needed. Open, sign in, and start managing better from day one.',
      ft1_t:'Smart Inventory Tracker', ft1_d:'Add items, update stock with a tap. Automatic low-stock alerts.',
      ft2_t:'Digital Udhar Khata', ft2_d:'Replace the paper notebook. Track credit per customer, see live balances.',
      ft3_t:'Daily Sales Log', ft3_d:'Record every sale — cash, UPI, or udhar. Know your daily earnings.',
      ft4_t:'WhatsApp Reminders', ft4_d:'Send customers a professional udhar statement on WhatsApp in one tap.',
      ft5_t:'Cloud Sync', ft5_d:'Data saved to cloud under your Google account. Access from any phone.',
      ft6_t:'Free Forever', ft6_d:'No subscriptions. No hidden fees. Free for every kirana owner in India.',
      hw_eyebrow:'How it works', hw_h2:'Up and running<br>in 3 minutes.',
      hs1_t:'Create your free account', hs1_d:'Sign up with Google in one tap. No passwords, no forms.',
      hs2_t:'Add your items & customers', hs2_d:'Enter stock and set up udhar accounts. Faster than a notebook.',
      hs3_t:'Run your store smarter daily', hs3_d:'Track sales, get alerts, send WhatsApp reminders.',
      hw_cta:'Create free account →',
      t_body:'Pehle udhar ka hisaab notebook mein likhta tha. Ab <strong>sab kuch phone mein hai</strong> — kaun kitna deta hai, WhatsApp pe bhi bhej deta hoon.',
      t_loc:'Kirana store owner · Pune, Maharashtra',
      cta_label:'Free forever · Cloud synced · Works on any phone',
      cta_h2:'Your store deserves<br>a <em>smarter</em> system.',
      cta_sub:'Join hundreds of kirana owners who have moved from paper notebooks to digital.',
      cta_btn:'Start Free Today →',
      cta_note:'No credit card · No download · Sign in with Google',
      f_made:'Made with ❤️ for Indian kirana store owners',
      app_signout:'Sign out',
      sync_load:'⏳ Loading...', sync_ok:'☁️ Synced', sync_off:'⚠️ Offline', sync_demo:'📱 Demo', sync_saving:'⏳...', sync_err:'⚠️ Error', sync_pending:'💾 Saved on phone',
      stat_stock:'Stock value', stat_low:'Low stock', stat_udhar:'Total udhar', stat_sales:"Today's sales", items_unit:' items',
      tl_inv:'Inventory', tl_udh:'Udhar Khata', tl_sal:'Sales',
      inv_form:'Add new item to stock', l_iname:'Item name', l_iqty:'Quantity', l_iprice:'Price ₹', l_icat:'Category', l_ilow:'Low stock alert below',
      i_name_ph:'e.g. Tata Salt 1kg', btn_add_item:'➕ Add to inventory', inv_search_ph:'Search items by name...',
      inv_list_label:'Stock list', inv_in_stock:'✓ In stock', inv_low_stock:'⚠ Low stock', inv_per_unit:'per unit', inv_value:'Value',
      inv_empty_t:'No items yet', inv_empty_s:'Add your first item above to get started.',
      cats:['Grains & Dal','Oil & Ghee','Spices','Snacks','Beverages','Dairy','Cleaning','Other'],
      udh_form:'Add udhar entry', l_uname:'Customer name', l_uamt:'Amount ₹', l_utype:'Entry type', l_unote:'Note (optional)',
      u_name_ph:'e.g. Ramesh Sharma', u_note_ph:'e.g. Tata Salt, bread',
      uopt_d:'🔴 Gave on credit', uopt_c:'🟢 Received payment',
      btn_add_udhar:'➕ Add entry', udh_list_label:'Customer balances',
      udh_owes:'Owes', udh_over:'Overpaid', udh_settled:'✓ Settled',
      udh_wa:'WhatsApp', udh_mark:'✓ Mark paid',
      udh_empty_t:'No udhar entries yet', udh_empty_s:'Add your first customer credit entry above.',
      sal_form:'Record a sale', l_sitem:'Item sold', l_sqty:'Quantity', l_spay:'Payment mode',
      btn_add_sale:'🧾 Record sale', sal_list_label:"Today's sales", sal_qty_label:'Qty: ',
      sal_empty_t:'No sales recorded today', sal_empty_s:'Record your first sale above.',
      toast_saved:'☁️ Saved', toast_del:'🗑 Deleted',
      err_name:'⚠️ Enter an item name', err_cust:'⚠️ Enter a customer name',
      err_amt:'⚠️ Enter an amount', err_qty:'⚠️ Select item and enter quantity',
      err_stock:'⚠️ Only {n} in stock!',
      err_item_limit:'⚠️ Free plan limit: 50 items. Upgrade to add more.',
      err_udhar_limit:'⚠️ Free plan limit: 10 customers. Upgrade to add more.',
      err_export_locked:'⚠️ Export is a Malik plan feature. Upgrade to unlock.',
      err_gst_locked:'🔒 GST Bill Generator is a Malik plan feature. Upgrade to unlock.',
      err_gst_fields:'⚠️ Please fill customer name, item name and rate.',
      gst_ok:'✅ GST bill generated!',
      export_ok:'✅ CSV exported successfully!',
    },
    hi:{
      lang_label:'भाषा चुनें / Choose language',
      modal_signin_h:'वापसी पर स्वागत है', modal_signin_sub:'अपने स्टोर डैशबोर्ड तक पहुंचने के लिए साइन इन करें।',
      tab_phone:'मोबाइल OTP', tab_wa:'WhatsApp', tab_email:'ईमेल', tab_google:'Google',
      otp_send:'OTP भेजें', otp_sending:'भेज रहे हैं...', otp_sent:'OTP भेजा गया!',
      otp_verify:'सत्यापित करें', otp_verifying:'जाँच रहे हैं...',
      otp_resend:'OTP दोबारा भेजें', otp_enter:'6-अंक का OTP दर्ज करें',
      wa_send:'WhatsApp पर भेजें', wa_hint:'हम आपके WhatsApp पर 6-अंक का OTP भेजेंगे।',
      wa_note:'सुनिश्चित करें कि इस नंबर पर WhatsApp चालू है।',
      google_note:'Gmail अकाउंट वाले उपयोगकर्ताओं के लिए बेहतर।',
      otp_timer:'{n} सेकंड में दोबारा भेजें',
      err_phone_invalid:'कृपया सही 10-अंक का मोबाइल नंबर दर्ज करें।',
      err_otp_invalid:'कृपया 6-अंक का OTP दर्ज करें।',
      err_otp_wrong:'गलत OTP। कृपया दोबारा कोशिश करें।',
      err_otp_expired:'OTP समाप्त हो गया। नया OTP मांगें।',
      err_too_many_otp:'बहुत अधिक प्रयास। कृपया कुछ मिनट प्रतीक्षा करें।',
      modal_signup_h:'अपना खाता बनाएं', modal_signup_sub:'Google से साइन अप करें — आपका डेटा क्लाउड में सुरक्षित।',
      g_btn:'Google से जारी रखें', why:'KiranaBook क्यों?',
      pk1:'आपका डेटा क्लाउड में सुरक्षित', pk2:'किसी भी फोन से कभी भी एक्सेस',
      pk3:'निजी — केवल आप ही देख सकते हैं', pk4:'पूरी तरह मुफ़्त, हमेशा',
      nl_feat:'सुविधाएं', nl_how:'कैसे काम करता है', nl_free:'हमेशा मुफ़्त', nl_pricing:'कीमत',
      nav_signin:'साइन इन', nav_start:'मुफ़्त शुरू करें →',
      mosaic_h2:'भारत के किराना मालिक।<br><em>KiranaBook से संचालित।</em>',
      mosaic_sub:'असली दुकान मालिक, असली दुकानें, असली नतीजे।',
      pr_eyebrow:'सरल किराना-दोस्त कीमत', pr_h2:'एक चाय से भी<br><em style="font-style:italic;color:var(--saffron)">सस्ता।</em>',
      pr_sub:'शुरू करें मुफ़्त में। जब ज़रूरत हो तभी अपग्रेड करें। कोई छुपा हुआ चार्ज नहीं।',
      ptog_mo:'मासिक', ptog_yr:'सालाना', pr_save_pill:'🎉 2 महीने मुफ़्त',
      pr_popular:'⭐ सबसे लोकप्रिय',
      pc1_plan:'FREE', pc1_plan_hi:'मुफ़्त', pc1_period:'हमेशा के लिए मुफ़्त',
      pf1_1:'50 आइटम तक स्टॉक', pf1_2:'उधार खाता (10 ग्राहक)',
      pf1_3:'रोज़ की बिक्री रिकॉर्ड', pf1_4:'1 महीने की रिपोर्ट',
      pf1_5:'WhatsApp रिमाइंडर नहीं', pf1_6:'डेटा एक्सपोर्ट नहीं',
      pc1_cta:'मुफ़्त शुरू करें',
      pc2_plan:'DUKANDAAR', pc2_plan_hi:'दुकानदार',
      pc2_annual_note:'<span>₹799/साल पर सेव करें ₹389</span>',
      pc2_chai:'☕ 3 चाय से भी सस्ता रोज़',
      pf2_1:'<span class="pf-highlight">असीमित</span> स्टॉक आइटम',
      pf2_2:'<span class="pf-highlight">असीमित</span> उधार ग्राहक',
      pf2_3:'12 महीने की पूरी रिपोर्ट', pf2_4:'WhatsApp उधार रिमाइंडर',
      pf2_5:'कम स्टॉक SMS अलर्ट', pf2_6:'मल्टी-डिवाइस नहीं',
      pc2_cta:'दुकानदार प्लान शुरू करें →',
      pc3_plan:'MALIK', pc3_plan_hi:'मालिक',
      pc3_annual_note:'<span>₹1,499/साल पर सेव करें ₹889</span>',
      pf3_1:'दुकानदार की सब सुविधाएं',
      pf3_2:'<span class="pf-highlight">3 डिवाइस</span> पर एक साथ',
      pf3_3:'Excel में डेटा एक्सपोर्ट', pf3_4:'प्रायोरिटी सपोर्ट',
      pf3_5:'नए फ़ीचर पहले मिलेंगे', pf3_6:'GST बिल जनरेटर',
      pc3_cta:'मालिक प्लान शुरू करें',
      pr_foot:'सभी पेड प्लान में 14 दिन का फ्री ट्रायल। कोई क्रेडिट कार्ड नहीं चाहिए।',
      h_eyebrow:'भारतीय किराना स्टोर के लिए बनाया गया',
      h_headline:'अपना स्टोर,<br><em>स्मार्ट</em> और<br><span class="ug">अधिक लाभदायक।</span>',
      h_sub:'स्टॉक ट्रैक करें, <strong>उधार खाता</strong> मैनेज करें, रोज़ की बिक्री रिकॉर्ड करें — सब एक सुंदर ऐप में।',
      h_cta1:'शुरू करें — मुफ़्त खाता बनाएं →', h_cta2:'सुविधाएं देखें',
      h_trust:'<strong>500+</strong> किराना मालिक KiranaBook इस्तेमाल कर रहे हैं',
      m_badge1:'✅ ₹3,240 आज कमाए', m_badge2:'⚠️ 3 चीज़ें कम स्टॉक में',
      m_title:'मेरा किराना स्टोर', m_date:'आज, 16 मई',
      m_s1:'स्टॉक मूल्य', m_s2:'आज की बिक्री', m_s3:'कुल उधार', m_s4:'कम स्टॉक', m_s4v:'3 आइटम',
      m_q1:'45 बचे', m_q2:'3 बचे', m_q3:'2 बचे',
      m_low:'⚠ कम', m_udhar_label:'ताज़ा उधार', m_outstanding:'बकाया',
      f_eyebrow:'सब कुछ जो आपको चाहिए', f_h2:'किराना मालिकों के<br>काम के हिसाब से बनाया।',
      f_sub:'कोई जटिल सेटअप नहीं। कोई ट्रेनिंग नहीं। बस खोलें, साइन इन करें, और पहले दिन से बेहतर चलाएं।',
      ft1_t:'स्मार्ट इन्वेंटरी ट्रैकर', ft1_d:'सामान जोड़ें, एक टैप से स्टॉक अपडेट करें। कम स्टॉक के लिए अपने आप अलर्ट।',
      ft2_t:'डिजिटल उधार खाता', ft2_d:'कागज़ की नोटबुक बदलें। हर ग्राहक का उधार ट्रैक करें।',
      ft3_t:'रोज़ की बिक्री लॉग', ft3_d:'हर बिक्री — नकद, UPI, या उधार — रिकॉर्ड करें।',
      ft4_t:'WhatsApp रिमाइंडर', ft4_d:'एक टैप में ग्राहक को उनका उधार WhatsApp पर भेजें।',
      ft5_t:'क्लाउड सिंक', ft5_d:'डेटा Google अकाउंट के तहत क्लाउड में सुरक्षित। किसी भी फोन से एक्सेस।',
      ft6_t:'पूरी तरह मुफ़्त', ft6_d:'कोई सदस्यता नहीं। कोई छुपा शुल्क नहीं। हर किराना मालिक के लिए मुफ़्त।',
      hw_eyebrow:'कैसे काम करता है', hw_h2:'3 मिनट में<br>तैयार।',
      hs1_t:'मुफ़्त खाता बनाएं', hs1_d:'एक टैप में Google अकाउंट से साइन अप करें।',
      hs2_t:'सामान और ग्राहक जोड़ें', hs2_d:'अपना स्टॉक और उधार खाते सेट करें।',
      hs3_t:'हर दिन स्मार्ट तरीके से चलाएं', hs3_d:'बिक्री ट्रैक करें, कम स्टॉक अलर्ट पाएं, WhatsApp रिमाइंडर भेजें।',
      hw_cta:'मुफ़्त खाता बनाएं →',
      t_body:'पहले उधार का हिसाब नोटबुक में लिखता था और भूल जाता था। अब <strong>सब कुछ फोन में है</strong> — कौन कितना देता है, WhatsApp पे भी भेज देता हूं।',
      t_loc:'किराना स्टोर मालिक · पुणे, महाराष्ट्र',
      cta_label:'हमेशा मुफ़्त · क्लाउड सिंक · किसी भी फोन पर',
      cta_h2:'आपके स्टोर को मिले<br>एक <em>स्मार्ट</em> सिस्टम।',
      cta_sub:'सैकड़ों किराना मालिकों के साथ जुड़ें जो कागज़ की नोटबुक छोड़ कर डिजिटल हो गए हैं।',
      cta_btn:'शुरू करें — आज मुफ़्त में →',
      cta_note:'कोई क्रेडिट कार्ड नहीं · कोई डाउनलोड नहीं · Google से साइन इन',
      f_made:'भारतीय किराना मालिकों के लिए ❤️ से बनाया',
      app_signout:'साइन आउट',
      sync_load:'⏳ लोड हो रहा है...', sync_ok:'☁️ सिंक हो गया', sync_off:'⚠️ ऑफलाइन', sync_demo:'📱 डेमो', sync_saving:'⏳...', sync_err:'⚠️ त्रुटि',
      stat_stock:'स्टॉक मूल्य', stat_low:'कम स्टॉक', stat_udhar:'कुल उधार', stat_sales:'आज की बिक्री', items_unit:' आइटम',
      tl_inv:'इन्वेंटरी', tl_udh:'उधार खाता', tl_sal:'बिक्री',
      inv_form:'स्टॉक में नया सामान जोड़ें', l_iname:'सामान का नाम', l_iqty:'मात्रा', l_iprice:'कीमत ₹', l_icat:'श्रेणी', l_ilow:'कम स्टॉक अलर्ट',
      i_name_ph:'जैसे: टाटा नमक 1kg', btn_add_item:'➕ इन्वेंटरी में जोड़ें', inv_search_ph:'सामान का नाम खोजें...',
      inv_list_label:'स्टॉक सूची', inv_in_stock:'✓ स्टॉक में है', inv_low_stock:'⚠ कम स्टॉक', inv_per_unit:'प्रति यूनिट', inv_value:'मूल्य',
      inv_empty_t:'अभी कोई सामान नहीं', inv_empty_s:'शुरू करने के लिए ऊपर अपना पहला सामान जोड़ें।',
      cats:['अनाज और दाल','तेल और घी','मसाले','नाश्ता','पेय पदार्थ','डेयरी','सफाई','अन्य'],
      udh_form:'उधार एंट्री जोड़ें', l_uname:'ग्राहक का नाम', l_uamt:'राशि ₹', l_utype:'एंट्री का प्रकार', l_unote:'नोट (वैकल्पिक)',
      u_name_ph:'जैसे: रमेश शर्मा', u_note_ph:'जैसे: नमक, ब्रेड',
      uopt_d:'🔴 उधार दिया', uopt_c:'🟢 पैसे मिले',
      btn_add_udhar:'➕ एंट्री जोड़ें', udh_list_label:'ग्राहक बकाया',
      udh_owes:'बकाया', udh_over:'अधिक दिया', udh_settled:'✓ हिसाब बराबर',
      udh_wa:'WhatsApp', udh_mark:'✓ भुगतान हो गया',
      udh_empty_t:'अभी कोई उधार नहीं', udh_empty_s:'ऊपर अपनी पहली उधार एंट्री जोड़ें।',
      sal_form:'बिक्री दर्ज करें', l_sitem:'बेचा गया सामान', l_sqty:'मात्रा', l_spay:'भुगतान का तरीका',
      btn_add_sale:'🧾 बिक्री दर्ज करें', sal_list_label:'आज की बिक्री', sal_qty_label:'मात्रा: ',
      sal_empty_t:'आज कोई बिक्री दर्ज नहीं', sal_empty_s:'अपनी कमाई ट्रैक करने के लिए ऊपर पहली बिक्री दर्ज करें।',
      toast_saved:'☁️ सेव हो गया', toast_del:'🗑 हटा दिया',
      err_name:'⚠️ सामान का नाम दर्ज करें', err_cust:'⚠️ ग्राहक का नाम दर्ज करें',
      err_amt:'⚠️ राशि दर्ज करें', err_qty:'⚠️ सामान चुनें और मात्रा दर्ज करें',
      err_stock:'⚠️ केवल {n} स्टॉक में बचे हैं!',
      err_item_limit:'⚠️ मुफ़्त प्लान सीमा: 50 आइटम। अधिक जोड़ने के लिए अपग्रेड करें।',
      err_udhar_limit:'⚠️ मुफ़्त प्लान सीमा: 10 ग्राहक। अधिक जोड़ने के लिए अपग्रेड करें।',
      err_export_locked:'🔒 एक्सपोर्ट केवल मालिक प्लान में उपलब्ध है। अपग्रेड करें।',
      err_gst_locked:'🔒 GST बिल जनरेटर केवल मालिक प्लान में उपलब्ध है।',
      err_gst_fields:'⚠️ कृपया ग्राहक का नाम, आइटम और रेट भरें।',
      gst_ok:'✅ GST बिल तैयार हो गया!',
      export_ok:'✅ CSV सफलतापूर्वक एक्सपोर्ट हुई!',
    }
  };

  var lang = localStorage.getItem('kb_lang') || 'en';
  document.documentElement.lang = lang;
  function t(k){ return (TX[lang]&&TX[lang][k]!==undefined ? TX[lang][k] : TX.en[k]) || k; }

  function applyLang(){
    /* Modal */
    var el;
    function s(id,v){ el=document.getElementById(id); if(el)el.textContent=v; }
    function h(id,v){ el=document.getElementById(id); if(el)el.innerHTML=v; }
    function p(id,v){ el=document.getElementById(id); if(el)el.placeholder=v; }
    var _lben=document.getElementById('lb-en'); if(_lben) _lben.className='lang-btn'+(lang==='en'?' on':'');
    var _lbhi=document.getElementById('lb-hi'); if(_lbhi) _lbhi.className='lang-btn'+(lang==='hi'?' on':'');
    var _alhi=document.getElementById('al-hi'); if(_alhi) _alhi.className='app-lang-btn'+(lang==='hi'?' on':'');
    var _alen=document.getElementById('al-en'); if(_alen) _alen.className='app-lang-btn'+(lang==='en'?' on':'');
    var _hlhi=document.getElementById('hl-hi'); if(_hlhi) _hlhi.className='app-lang-btn'+(lang==='hi'?' on':'');
    var _hlen=document.getElementById('hl-en'); if(_hlen) _hlen.className='app-lang-btn'+(lang==='en'?' on':'');
    s('m-lang-label',t('lang_label'));
    s('g-btn-text',t('g_btn'));
    s('m-why',t('why'));
    s('pk1',t('pk1')); s('pk2',t('pk2')); s('pk3',t('pk3')); s('pk4',t('pk4'));
    /* Navbar */
    s('nl-feat',t('nl_feat')); s('nl-how',t('nl_how'));
    h('mosaic-h2',t('mosaic_h2')); s('mosaic-sub',t('mosaic_sub'));
    /* Bottom nav labels */
    var bnavLabels = {inv:'inv',udh:'udh',sal:'sal',rep:'rep',pro:'pro'};
    var bnavEN = {inv:'Inventory',udh:'Udhar',sal:'Sales',rep:'Reports',pro:'Profile'};
    var bnavHI = {inv:'स्टॉक',udh:'उधार',sal:'बिक्री',rep:'रिपोर्ट',pro:'प्रोफाइल'};
    var bnavMap = lang==='hi'?bnavHI:bnavEN;
    Object.keys(bnavMap).forEach(function(k){
      var el=document.getElementById('bnav-'+k+'-lbl'); if(el) el.textContent=bnavMap[k];
    });
    /* PWA install prompt labels */
    var pitEl=document.getElementById('pwa-install-title');
    var pisEl=document.getElementById('pwa-install-sub');
    var pibEl=document.getElementById('pwa-install-btn');
    if(pitEl) pitEl.textContent=lang==='hi'?'KiranaBook इंस्टॉल करें':'Install KiranaBook';
    if(pisEl) pisEl.textContent=lang==='hi'?'होम स्क्रीन पर जोड़ें':'Add to home screen — works offline';
    if(pibEl) pibEl.textContent=lang==='hi'?'इंस्टॉल करें':'Install';
    /* Profile sheet sign out button */
    var psmg=document.getElementById('profile-manage-sub');
    if(psmg) psmg.style.display = (USER_PLAN!=='free') ? 'block' : 'none';
    var psob=document.getElementById('profile-signout-btn');
    if(psob) psob.textContent=lang==='hi'?'साइन आउट':'Sign Out';
    /* Store name edit button, save button, placeholder */
    var sneBtn=document.querySelector('.store-name-edit');
    if(sneBtn) sneBtn.textContent=lang==='hi'?'✏️ नाम बदलें':'✏️ Edit name';
    var snSave=document.querySelector('.store-name-save');
    if(snSave) snSave.textContent=lang==='hi'?'सहेजें':'Save';
    var snInput=document.getElementById('store-name-input');
    if(snInput) snInput.placeholder=lang==='hi'?'अपने स्टोर का नाम लिखें...':'Enter your store name...';
    if(typeof updatePlanBadge==='function') updatePlanBadge();
    if(typeof updateExportButton==='function') updateExportButton();
    if(typeof updateGSTButton==='function') updateGSTButton();

    /* Cookie banner text */
    var cTxt=document.getElementById('cookie-txt');
    if(cTxt) cTxt.innerHTML=lang==='hi'
      ? '🍪 हम आपके अनुभव को बेहतर बनाने के लिए localStorage का उपयोग करते हैं। <a href="#" onclick="showPolicy(\'privacy\');return false;" style="color:var(--saffron);text-decoration:underline;">Privacy Policy</a>'
      : '🍪 We use localStorage to improve your experience. <a href="#" onclick="showPolicy(\'privacy\');return false;" style="color:var(--saffron);text-decoration:underline;">Privacy Policy</a>';
    var cBtn=document.querySelector('#cookie-banner button');
    if(cBtn) cBtn.textContent=lang==='hi'?'समझ गया ✓':'Got it ✓';
    s('nav-signin',t('nav_signin')); s('nav-start',t('nav_start'));
    /* Hero */
    s('h-eyebrow',t('h_eyebrow'));
    h('h-headline',t('h_headline'));
    h('h-sub',t('h_sub'));
    s('h-cta1',t('h_cta1')); s('h-cta2',t('h_cta2'));
    h('h-trust',t('h_trust'));
    /* Mockup card */
    s('m-badge1',t('m_badge1')); s('m-badge2',t('m_badge2'));
    /* Auth tab labels */
    s('tab-phone-lbl',t('tab_phone')); s('tab-wa-lbl',t('tab_wa')); s('tab-email-lbl',t('tab_email')); s('tab-google-lbl',t('tab_google'));
    s('sms-send-txt',t('otp_send')); s('wa-send-txt',t('wa_send'));
    s('sms-verify-txt',t('otp_verify')); s('wa-verify-txt',t('otp_verify'));
    s('sms-resend-txt',t('otp_resend')); s('wa-resend-txt',t('otp_resend'));
    s('wa-hint-txt',t('wa_hint')); s('wa-note-txt',t('wa_note')); s('google-note-txt',t('google_note'));
    var phn=document.getElementById('phone-number'); if(phn) phn.placeholder='9876543210';
    var wan=document.getElementById('wa-number'); if(wan) wan.placeholder='9876543210';
    s('mock-title',t('m_title')); s('m-date',t('m_date'));
    s('m-s1',t('m_s1')); s('m-s2',t('m_s2')); s('m-s3',t('m_s3')); s('m-s4',t('m_s4')); s('m-s4v',t('m_s4v'));
    s('m-q1',t('m_q1')); s('m-q2',t('m_q2')); s('m-q3',t('m_q3'));
    s('m-low1',t('m_low')); s('m-low2',t('m_low'));
    s('m-udhar-label',t('m_udhar_label')); s('m-outstanding',t('m_outstanding'));
    /* Features */
    s('f-eyebrow',t('f_eyebrow')); h('f-h2',t('f_h2')); s('f-sub',t('f_sub'));
    s('ft1-t',t('ft1_t')); s('ft1-d',t('ft1_d'));
    s('ft2-t',t('ft2_t')); s('ft2-d',t('ft2_d'));
    s('ft3-t',t('ft3_t')); s('ft3-d',t('ft3_d'));
    s('ft4-t',t('ft4_t')); s('ft4-d',t('ft4_d'));
    s('ft5-t',t('ft5_t')); s('ft5-d',t('ft5_d'));
    s('ft6-t',t('ft6_t')); s('ft6-d',t('ft6_d'));
    /* How */
    s('hw-eyebrow',t('hw_eyebrow')); h('hw-h2',t('hw_h2'));
    s('hs1-t',t('hs1_t')); s('hs1-d',t('hs1_d'));
    s('hs2-t',t('hs2_t')); s('hs2-d',t('hs2_d'));
    s('hs3-t',t('hs3_t')); s('hs3-d',t('hs3_d'));
    s('hw-cta',t('hw_cta'));
    h('t-body',t('t_body')); s('t-loc',t('t_loc'));
    /* Pricing */
    s('pr-eyebrow',t('pr_eyebrow')); h('pr-h2',t('pr_h2')); s('pr-sub',t('pr_sub'));
    s('ptog-mo-lbl',t('ptog_mo')); s('ptog-yr-lbl',t('ptog_yr')); s('pr-save-pill',t('pr_save_pill'));
    s('pr-popular',t('pr_popular'));
    s('pc1-plan',t('pc1_plan')); s('pc1-plan-hi',t('pc1_plan_hi')); s('pc1-period',t('pc1_period'));
    s('pf1-1',t('pf1_1')); s('pf1-2',t('pf1_2')); s('pf1-3',t('pf1_3'));
    s('pf1-4',t('pf1_4')); s('pf1-5',t('pf1_5')); s('pf1-6',t('pf1_6')); s('pc1-cta',t('pc1_cta'));
    s('pc2-plan',t('pc2_plan')); s('pc2-plan-hi',t('pc2_plan_hi'));
    h('pc2-annual-note',t('pc2_annual_note')); s('pc2-chai',t('pc2_chai'));
    h('pf2-1',t('pf2_1')); h('pf2-2',t('pf2_2')); s('pf2-3',t('pf2_3'));
    s('pf2-4',t('pf2_4')); s('pf2-5',t('pf2_5')); s('pf2-6',t('pf2_6')); s('pc2-cta',t('pc2_cta'));
    s('pc3-plan',t('pc3_plan')); s('pc3-plan-hi',t('pc3_plan_hi'));
    h('pc3-annual-note',t('pc3_annual_note'));
    h('pf3-1',t('pf3_1')); h('pf3-2',t('pf3_2')); s('pf3-3',t('pf3_3'));
    s('pf3-4',t('pf3_4')); s('pf3-5',t('pf3_5')); s('pf3-6',t('pf3_6')); s('pc3-cta',t('pc3_cta'));
    s('pr-foot',t('pr_foot'));
    s('nl-pricing',t('nl_pricing'));
    /* Pricing toggle prices */
    if(window._pCycle==='annual'){
      var pEl=document.getElementById('pc2-price'); if(pEl) pEl.innerHTML='₹<span style="font-size:30px;vertical-align:top;padding-top:12px;display:inline-block;">799</span>';
      var pEl2=document.getElementById('pc3-price'); if(pEl2) pEl2.innerHTML='₹<span style="font-size:30px;vertical-align:top;padding-top:12px;display:inline-block;">1,499</span>';
      var p2p=document.getElementById('pc2-period'); if(p2p) p2p.textContent=lang==='hi'?'/साल':'/year';
      var p3p=document.getElementById('pc3-period'); if(p3p) p3p.textContent=lang==='hi'?'/साल':'/year';
    } else {
      var pEl=document.getElementById('pc2-price'); if(pEl) pEl.textContent='₹99';
      var pEl2=document.getElementById('pc3-price'); if(pEl2) pEl2.textContent='₹199';
      var p2p=document.getElementById('pc2-period'); if(p2p) p2p.textContent=lang==='hi'?'/माह':'/mo';
      var p3p=document.getElementById('pc3-period'); if(p3p) p3p.textContent=lang==='hi'?'/माह':'/mo';
    }
    /* CTA + Footer */
    s('cta-label',t('cta_label')); h('cta-h2',t('cta_h2')); s('cta-sub',t('cta_sub'));
    s('cta-btn',t('cta_btn')); s('cta-note',t('cta_note')); s('f-made',t('f_made'));
    /* App */
    s('app-signout',t('app_signout'));
    s('tl-inv',t('tl_inv')); s('tl-udh',t('tl_udh')); s('tl-sal',t('tl_sal')); s('tl-rep','Reports');
    s('inv-form-title',t('inv_form')); s('l-iname',t('l_iname')); s('l-iqty',t('l_iqty'));
    s('l-iprice',t('l_iprice')); s('l-icat',t('l_icat')); s('l-ilow',t('l_ilow'));
    p('i-name',t('i_name_ph')); s('btn-add-item',t('btn_add_item')); p('i-search',t('inv_search_ph'));
    s('inv-list-label',t('inv_list_label'));
    var cats=t('cats'); var cat=document.getElementById('i-cat');
    if(cat&&cats){for(var i=0;i<cat.options.length&&i<cats.length;i++)cat.options[i].text=cats[i];}
    s('udh-form-title',t('udh_form')); s('l-uname',t('l_uname')); s('l-uamt',t('l_uamt'));
    s('l-utype',t('l_utype')); s('l-unote',t('l_unote'));
    p('u-name',t('u_name_ph')); p('u-note',t('u_note_ph'));
    s('uopt-d',t('uopt_d')); s('uopt-c',t('uopt_c'));
    s('btn-add-udhar',t('btn_add_udhar')); s('udh-list-label',t('udh_list_label'));
    s('sal-form-title',t('sal_form')); s('l-sitem',t('l_sitem')); s('l-sqty',t('l_sqty'));
    s('l-spay',t('l_spay')); s('btn-add-sale',t('btn_add_sale')); s('sal-list-label',t('sal_list_label'));
  }

  /* ── COOKIE CONSENT ── */
  (function(){
    if(!localStorage.getItem('kb_cookie_ok')){
      var b=document.getElementById('cookie-banner');
      if(b) b.style.display='flex';
    }
  })();
  window.acceptCookies=function(){
    localStorage.setItem('kb_cookie_ok','1');
    var b=document.getElementById('cookie-banner');
    if(b) b.style.display='none';
  };
  window.showPolicy=function(type){
    var id=type==='privacy'?'privacy-modal':'terms-modal';
    var el=document.getElementById(id);
    if(el) el.classList.add('open');
    return false;
  };
  window.closePolicy=function(){
    document.getElementById('privacy-modal').classList.remove('open');
    document.getElementById('terms-modal').classList.remove('open');
  };

  /* ── BOTTOM NAV ── */
  window.setBottomNav = function(tab){
    ['inv','udh','sal','rep','pro'].forEach(function(t){
      var btn = document.getElementById('bnav-'+t);
      if(btn) btn.className = 'bnav-btn' + (t===tab?' active':'');
    });
  };

  /* ── MOBILE PROFILE SHEET ── */
  window.showMobileProfile = function(){
    setBottomNav('pro');
    var sheet = document.getElementById('profile-sheet');
    if(!sheet) return;
    if(user){
      var nm = user.user_metadata&&user.user_metadata.full_name ? user.user_metadata.full_name : user.email;
      var initials = nm.trim().split(/\s+/).map(function(w){return w[0];}).join('').toUpperCase().slice(0,2);
      var shAv = document.getElementById('profile-sheet-av');
      /* Copy avatar from nav if it has an image, else show initials */
      var navAv = document.getElementById('user-av');
      var navImg = navAv ? navAv.querySelector('img') : null;
      if(navImg){
        shAv.innerHTML='';
        var img2=document.createElement('img');
        img2.src=navImg.src; img2.alt='';
        img2.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:50%;';
        shAv.appendChild(img2);
      } else {
        shAv.textContent = initials;
      }
      document.getElementById('profile-sheet-name').textContent = nm.split(' ')[0];
      document.getElementById('profile-sheet-email').textContent = user.email;
    }
    /* Sync plan badge */
    var planEl = document.getElementById('profile-sheet-plan');
    var upBtn  = document.getElementById('profile-upgrade-btn');
    if(planEl){
      if(window.USER_PLAN==='malik'){
        planEl.className='plan-badge plan-malik';planEl.textContent='👑 MALIK';
        if(upBtn) upBtn.style.display='none';
      } else if(window.USER_PLAN==='dukandaar'){
        planEl.className='plan-badge plan-dukandaar';planEl.textContent='🏪 DUKANDAAR';
        if(upBtn) upBtn.style.display='none';
      } else {
        planEl.className='plan-badge plan-free';planEl.textContent='🆓 FREE';
        if(upBtn) upBtn.style.display='';
      }
    }
    sheet.classList.add('open');
  };

  /* ── SYNC BOTTOM NAV WITH TAB CLICKS ── */
  /* showTab syncs bottom nav internally */

  /* ── PWA INSTALL PROMPT ── */
  var _deferredInstall = null;
  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    _deferredInstall = e;
    if(!localStorage.getItem('kb_pwa_dismissed')){
      var bar = document.getElementById('pwa-install-bar');
      if(bar) bar.classList.add('show');
    }
  });
  document.getElementById('pwa-install-btn').addEventListener('click', function(){
    if(_deferredInstall){
      _deferredInstall.prompt();
      _deferredInstall.userChoice.then(function(r){
        if(r.outcome==='accepted'){
          var bar=document.getElementById('pwa-install-bar');
          if(bar) bar.classList.remove('show');
        }
        _deferredInstall=null;
      });
    }
  });
  window.dismissInstall = function(){
    localStorage.setItem('kb_pwa_dismissed','1');
    var bar=document.getElementById('pwa-install-bar');
    if(bar) bar.classList.remove('show');
  };

  /* ── APPLY LANG FOR MOBILE ELEMENTS ── */

  window._pCycle = 'monthly';
  window.setPricingCycle = function(cycle){
    window._pricingCycle = cycle; /* used by startPayment() */
    window._pCycle = cycle;
    var moBtn = document.getElementById('ptog-mo');
    var yrBtn = document.getElementById('ptog-yr');
    if(moBtn) moBtn.className = 'ptoggle-btn' + (cycle==='monthly'?' on':'');
    if(yrBtn) yrBtn.className = 'ptoggle-btn' + (cycle==='annual'?' on':'');
    applyLang(); /* re-run to update prices */
  };

  window.setLang=function(l){
    lang=l; localStorage.setItem('kb_lang',l);
    document.documentElement.lang=l;
    document.documentElement.setAttribute('translate','no');
    document.documentElement.setAttribute('data-lang',l);
    applyLang();
    if(document.getElementById('page-app').classList.contains('active')) drawAll();
  };

  /* ══ SUPABASE ══ */
  var sb=null, user=null;
  function initSB(){ if(SUPABASE_URL==='YOUR_SUPABASE_URL')return false; try{sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON,{
      auth:{
        detectSessionInUrl:true,
        persistSession:true,
        autoRefreshToken:true
      }
    });return true;}catch(e){console.error('Supabase init error:',e.message);window._sbInitErr=e.message;return false;} }
  var sbOK = initSB();
  if(!sbOK) console.error('Supabase init failed:', window._sbInitErr);

  /* ══ AUTH ══ */
  var modalMode='signin';
  window.openModal=function(mode){
    modalMode=mode;
    document.getElementById('m-title').textContent=mode==='signup'?t('modal_signup_h'):t('modal_signin_h');
    document.getElementById('m-sub').textContent=mode==='signup'?t('modal_signup_sub'):t('modal_signin_sub');
    document.getElementById('auth-err').style.display='none';
    document.getElementById('auth-modal').classList.add('open');
  };
  window.closeModal=function(){document.getElementById('auth-modal').classList.remove('open');};

  /* ══ OTP AUTH — Mobile SMS + WhatsApp ══ */
  var _otpTimers = { sms: null, wa: null };

  window.switchAuthTab = function(tab){
    document.getElementById('auth-err').style.display='none';
    ['phone','wa','email','google'].forEach(function(t){
      var panel = document.getElementById('panel-'+t);
      var btn   = document.getElementById('tab-'+t);
      if(panel) panel.style.display = (t===tab ? '' : 'none');
      if(btn)   btn.className = 'auth-tab' + (t===tab ? ' on' : '');
    });
    /* Hide setup guide when switching tabs */
    var guide = document.getElementById('phone-setup-guide');
    if(guide) guide.style.display='none';
    /* Focus the right input */
    setTimeout(function(){
      var inp = tab==='phone' ? 'phone-number' : tab==='wa' ? 'wa-number' : 'google-btn';
      var el2 = document.getElementById(inp);
      if(el2) el2.focus();
    }, 100);
  };

  /* Send OTP via SMS (Supabase Phone Auth) or WhatsApp fallback */
  window.sendOTP = async function(channel){
    var isSMS = channel==='sms';
    var inputId = isSMS ? 'phone-number' : 'wa-number';
    var sendBtnId = isSMS ? 'sms-send-btn' : 'wa-send-btn';
    var sendTxtId = isSMS ? 'sms-send-txt' : 'wa-send-txt';
    var verifyRowId = isSMS ? 'sms-verify-row' : 'wa-verify-row';
    var resendRowId = isSMS ? 'sms-resend-row' : 'wa-resend-row';
    var timerTxtId  = isSMS ? 'sms-timer-txt' : 'wa-timer-txt';
    var resendBtnId = isSMS ? 'sms-resend-btn' : 'wa-resend-btn';

    var raw = (document.getElementById(inputId).value || '').replace(/\D/g,'');
    if(raw.length !== 10){ showErr(t('err_phone_invalid')); return; }
    var phone = '+91' + raw;

    var sendBtn = document.getElementById(sendBtnId);
    var sendTxt = document.getElementById(sendTxtId);
    sendBtn.disabled = true;
    sendTxt.textContent = t('otp_sending');
    document.getElementById('auth-err').style.display='none';

    try{
      if(!sbOK) throw new Error('Supabase not initialised');

      if(isSMS){
        /* Supabase native phone OTP via SMS (Twilio/MessageBird configured in Supabase dashboard) */
        var r = await sb.auth.signInWithOtp({ phone: phone });
        if(r.error) throw r.error;
      } else {
        /* WhatsApp OTP: use Supabase phone OTP but channel=whatsapp
           Requires WhatsApp Business API configured in Supabase (via Twilio Verify) */
        var r = await sb.auth.signInWithOtp({
          phone: phone,
          options: { channel: 'whatsapp' }
        });
        if(r.error) throw r.error;
      }

      sendTxt.textContent = t('otp_sent');
      /* Show verify row */
      document.getElementById(verifyRowId).style.display='flex';
      document.getElementById(isSMS ? 'sms-otp-code' : 'wa-otp-code').focus();
      /* Start 30s resend countdown */
      document.getElementById(resendRowId).style.display='flex';
      document.getElementById(resendBtnId).style.display='none';
      _startOTPTimer(channel, 30, timerTxtId, resendBtnId, sendBtn, sendTxt);

    } catch(e){
      sendBtn.disabled = false;
      sendTxt.textContent = isSMS ? t('otp_send') : t('wa_send');
      var msg = e.message || '';
      if(/rate.?limit|too.?many/i.test(msg))        showErr(t('err_too_many_otp'));
      else if(/invalid.*phone|phone.*invalid/i.test(msg)) showErr(t('err_phone_invalid'));
      else if(/unsupported.*phone|phone.*provider|sms.*not.*enabled|provider.*not.*enabled/i.test(msg)){
        showPhoneSetupGuide(channel);
      }
      else showErr(msg.slice(0,120) || 'Could not send OTP. Please try again.');
    }
  };

  function _startOTPTimer(channel, seconds, timerTxtId, resendBtnId, sendBtn, sendTxt){
    if(_otpTimers[channel]) clearInterval(_otpTimers[channel]);
    var remaining = seconds;
    var update = function(){
      remaining--;
      var tmrEl = document.getElementById(timerTxtId);
      if(tmrEl) tmrEl.textContent = t('otp_timer').replace('{n}', remaining);
      if(remaining <= 0){
        clearInterval(_otpTimers[channel]);
        if(tmrEl) tmrEl.textContent='';
        var rb = document.getElementById(resendBtnId);
        if(rb) rb.style.display='inline';
        sendBtn.disabled = false;
        sendTxt.textContent = channel==='sms' ? t('otp_send') : t('wa_send');
      }
    };
    var tmrEl = document.getElementById(timerTxtId);
    if(tmrEl) tmrEl.textContent = t('otp_timer').replace('{n}', remaining);
    _otpTimers[channel] = setInterval(update, 1000);
  }

  /* Verify OTP */
  window.verifyOTP = async function(channel){
    var isSMS = channel==='sms';
    var inputId    = isSMS ? 'phone-number' : 'wa-number';
    var codeId     = isSMS ? 'sms-otp-code' : 'wa-otp-code';
    var verifyBtnId= isSMS ? 'sms-verify-btn' : 'wa-verify-btn';
    var verifyTxtId= isSMS ? 'sms-verify-txt' : 'wa-verify-txt';

    var raw = (document.getElementById(inputId).value||'').replace(/\D/g,'');
    var otp = (document.getElementById(codeId).value||'').replace(/\D/g,'');

    if(raw.length!==10){ showErr(t('err_phone_invalid')); return; }
    if(otp.length!==6){  showErr(t('err_otp_invalid'));   return; }

    var phone = '+91' + raw;
    var vBtn = document.getElementById(verifyBtnId);
    var vTxt = document.getElementById(verifyTxtId);
    vBtn.disabled=true;
    vTxt.textContent = t('otp_verifying');
    document.getElementById('auth-err').style.display='none';

    try{
      var r = await sb.auth.verifyOtp({ phone: phone, token: otp, type: 'sms' });
      if(r.error) throw r.error;
      /* Success — onAuthStateChange will fire and call loadAndShow */
      closeModal();
    } catch(e){
      vBtn.disabled=false;
      vTxt.textContent = t('otp_verify');
      var msg = e.message||'';
      if(/expired/i.test(msg))     showErr(t('err_otp_expired'));
      else if(/invalid.*token|token.*invalid|otp/i.test(msg)) showErr(t('err_otp_wrong'));
      else showErr(msg.slice(0,120)||t('err_otp_wrong'));
    }
  };

  /* Reset OTP UI when modal is closed */
  var _origCloseModal = window.closeModal;
  window.closeModal = function(){
    _origCloseModal && _origCloseModal();
    /* Reset all OTP panels to initial state */
    /* Hide setup guide on close */
    var guide2 = document.getElementById('phone-setup-guide');
    if(guide2) guide2.style.display='none';
    ['sms','wa','email'].forEach(function(ch){
      if(_otpTimers[ch]) clearInterval(_otpTimers[ch]);
      var rows = [ch+'-verify-row', ch+'-resend-row'];
      rows.forEach(function(id){ var el=document.getElementById(id); if(el) el.style.display='none'; });
      var codeInput = document.getElementById(ch==='sms'?'sms-otp-code':'wa-otp-code');
      if(codeInput) codeInput.value='';
      var sendBtn = document.getElementById(ch==='sms'?'sms-send-btn':'wa-send-btn');
      if(sendBtn) sendBtn.disabled=false;
      var sendTxt = document.getElementById(ch==='sms'?'sms-send-txt':'wa-send-txt');
      if(sendTxt) sendTxt.textContent = ch==='sms'?t('otp_send'):t('wa_send');
    });
    var phn = document.getElementById('phone-number'); if(phn) phn.value='';
    var eml = document.getElementById('email-otp-input'); if(eml) eml.value='';
    var wan = document.getElementById('wa-number'); if(wan) wan.value='';
  };


  /* ══ SETUP GUIDE — shown when Twilio not configured ══ */
  function showPhoneSetupGuide(channel){
    var guide = document.getElementById('phone-setup-guide');
    if(guide){ guide.style.display='block'; }
    var chanLabel = channel==='wa' ? 'WhatsApp' : 'SMS';
    showErr('Phone/'+chanLabel+' OTP not yet enabled. See setup guide below, or use Email OTP ↓');
  }

  /* ══ EMAIL OTP — works immediately, no Twilio needed ══ */
  window.sendEmailOTP = async function(){
    var email = (document.getElementById('email-otp-input').value||'').trim().toLowerCase();
    if(!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)){
      showErr('Please enter a valid email address.'); return;
    }
    var btn = document.getElementById('email-otp-send-btn');
    var txt = document.getElementById('email-otp-send-txt');
    btn.disabled=true; txt.textContent='Sending...';
    document.getElementById('auth-err').style.display='none';
    try{
      var r = await sb.auth.signInWithOtp({
        email: email,
        options: { shouldCreateUser: true }
      });
      if(r.error) throw r.error;
      txt.textContent='Email sent!';
      document.getElementById('email-verify-row').style.display='flex';
      document.getElementById('email-otp-code').focus();
      document.getElementById('email-resend-row').style.display='flex';
      _startOTPTimer('email', 30, 'email-timer-txt', 'email-resend-btn', btn, txt);
    } catch(e){
      btn.disabled=false; txt.textContent='Send OTP to Email';
      showErr((e.message||'').slice(0,120)||'Could not send email OTP. Try again.');
    }
  };

  window.verifyEmailOTP = async function(){
    var email = (document.getElementById('email-otp-input').value||'').trim().toLowerCase();
    var otp   = (document.getElementById('email-otp-code').value||'').replace(/\D/g,'');
    if(!email){ showErr('Please enter your email.'); return; }
    if(otp.length!==6){ showErr(t('err_otp_invalid')); return; }
    var btn = document.getElementById('email-verify-btn');
    var txt = document.getElementById('email-verify-txt');
    btn.disabled=true; txt.textContent=t('otp_verifying');
    document.getElementById('auth-err').style.display='none';
    try{
      var r = await sb.auth.verifyOtp({ email: email, token: otp, type: 'email' });
      if(r.error) throw r.error;
      closeModal();
    } catch(e){
      btn.disabled=false; txt.textContent=t('otp_verify');
      var msg = e.message||'';
      if(/expired/i.test(msg))     showErr(t('err_otp_expired'));
      else if(/invalid|otp/i.test(msg)) showErr(t('err_otp_wrong'));
      else showErr(msg.slice(0,120)||t('err_otp_wrong'));
    }
  };

  /* Extend _otpTimers for email channel */
  _otpTimers.email = null;


  window.signInWithGoogle=function(){
    if(!sbOK){
      showErr('Sign-in setup failed: '+(window._sbInitErr||'please refresh the page'));
      return;
    }
    var btn=document.getElementById('google-btn'); btn.disabled=true;
    document.getElementById('g-btn-text').textContent=lang==='hi'?'Google पर जा रहे हैं...':'Redirecting...';
    sb.auth.signInWithOAuth({
      provider:'google',
      options:{
        redirectTo: window.location.origin,
        queryParams: { access_type: 'offline', prompt: 'consent' }
      }
    }).then(function(r){
      if(r.error){
        showErr(r.error.message);
        btn.disabled=false;
        document.getElementById('g-btn-text').textContent=t('g_btn');
      }
      /* If no error, Supabase redirects to Google — no further action needed */
    }).catch(function(e){
      showErr(e.message||'Unexpected error');
      btn.disabled=false;
      document.getElementById('g-btn-text').textContent=t('g_btn');
    });
  };
  function showErr(m){
    var raw=String(m||'').slice(0,300);
    var safe;
    if(/popup|closed|cancelled|cancel/i.test(raw)) safe='Sign-in was cancelled. Please try again.';
    else if(/network|fetch|failed to fetch/i.test(raw)) safe='Network error. Please check your connection.';
    else if(/rate.?limit/i.test(raw)) safe='Too many attempts. Please wait a moment and try again.';
    else if(/redirect/i.test(raw)) safe='Redirect URL mismatch. Please contact support.';
    else if(/oauth/i.test(raw)) safe='Google sign-in error: '+raw.slice(0,80);
    else safe='Sign-in failed: '+raw.slice(0,80);
    var e=document.getElementById('auth-err');e.textContent=safe;e.style.display='block';
  }
  window.signOut=function(){
    if(sb)sb.auth.signOut();
    /* Wipe all in-memory data so next user on shared device sees nothing */
    user=null; items=[]; udhar=[]; sales=[];
    /* Clear user-scoped localStorage entries */
    Object.keys(localStorage).forEach(function(k){
      if(k.startsWith('kb_items_')||k.startsWith('kb_udhar_')||k.startsWith('kb_sales_'))
        localStorage.removeItem(k);
    });
    showPage('home');
  };

  if(sbOK){
    // onAuthStateChange fires for both new logins and restored sessions
    // including when Supabase processes the OAuth hash on redirect back
    /* Auth logging removed - sign-in confirmed working */
    
    

    /* ── MANUAL OAUTH HASH PROCESSING ──
       supabase-js UMD sometimes fails to auto-process #access_token hash.
       We manually extract and set the session to guarantee it works.
    */
    (function(){
      var hash = window.location.hash;
      if(hash && hash.indexOf('access_token') !== -1){
        try {
          var params = {};
          hash.replace(/^#/,'').split('&').forEach(function(pair){
            var parts = pair.split('=');
            params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]||'');
          });
          var access_token  = params['access_token'];
          var refresh_token = params['refresh_token'] || '';
          
          if(access_token){
            sb.auth.setSession({access_token: access_token, refresh_token: refresh_token})
              .then(function(r){
                if(r.error){
                } else if(r.data && r.data.user){
                  user = r.data.user;
                  var ol = document.getElementById('oauth-loading'); if(ol) ol.remove();
                  /* Clear the hash from URL without reload */
                  history.replaceState(null, '', window.location.pathname);
                  loadAndShow(r.data.user);
                } else {
                }
              }).catch(function(e){
              });
          }
        } catch(e) {
        }
      }
    })();

    sb.auth.onAuthStateChange(function(ev, sess){
      
      if(ev === 'SIGNED_IN' && sess && sess.user){
        user = sess.user;
        var ol = document.getElementById('oauth-loading'); if(ol) ol.remove();
        closeModal();
        loadAndShow(sess.user);
      } else if(ev === 'TOKEN_REFRESHED' && sess && sess.user){
        /* Silent token refresh — don't re-render app */
        user = sess.user;
      } else if(ev === 'SIGNED_OUT'){
        var hasToken = window.location.hash && window.location.hash.indexOf('access_token') !== -1;
        
        if(!hasToken && !user){
          items=[]; udhar=[]; sales=[];
          showPage('home');
        } else {
          
        }
      }
    });

    // Check for existing session on page load (for returning users)
    // Use a flag to prevent double-render if onAuthStateChange already fired
    setTimeout(function(){
      
      if(!user){
        sb.auth.getSession().then(function(r){
          if(r.data && r.data.session && r.data.session.user && !user){
            user = r.data.session.user;
            var ol = document.getElementById('oauth-loading'); if(ol) ol.remove();
            loadAndShow(r.data.session.user);
          } else if(!r.data || !r.data.session){
            /* No session - remove loading screen if still showing */
            var ol = document.getElementById('oauth-loading'); if(ol) ol.remove();
          }
        });
      }
    }, 500); /* wait 500ms for onAuthStateChange to fire first */
  }

  /* ══ DATA ══ */
  var items=[],udhar=[],sales=[];
  /* ══════════════════════════════════════════════════════════
     OFFLINE-FIRST STORAGE — IndexedDB + Supabase sync queue
     ══════════════════════════════════════════════════════════
     Architecture:
       1. Every write → IndexedDB first (sync_status:'pending')
       2. Attempt Supabase immediately if online
       3. On reconnect / app focus / 30s timer → flushQueue()
       4. Conflict resolution: server updated_at wins over local
          UNLESS local is still pending (user typed while offline)
       5. Sync badge: 💾 Saved | 🔄 Syncing | ☁️ Synced | ⚠️ Offline
  ══════════════════════════════════════════════════════════ */

  /* ── IndexedDB open ── */
  var _db = null;
  var DB_NAME = 'kiranabook', DB_VER = 1;
  var STORES = ['kb_items','kb_customers','kb_udhar','kb_sales','kb_audit'];
  var DB_VER  = 2; /* bumped for new schema */

  function openDB(){
    return new Promise(function(resolve, reject){
      if(_db){ resolve(_db); return; }
      var req = indexedDB.open(DB_NAME, DB_VER);
      req.onupgradeneeded = function(e){
        var db = e.target.result;
        /* kb_items */
        if(!db.objectStoreNames.contains('kb_items')){
          var s = db.createObjectStore('kb_items',{keyPath:'id'});
          s.createIndex('user_id','user_id',{unique:false});
          s.createIndex('sync_status','sync_status',{unique:false});
          s.createIndex('updated_at','updated_at',{unique:false});
        }
        /* kb_customers — replaces text-only customer field */
        if(!db.objectStoreNames.contains('kb_customers')){
          var c = db.createObjectStore('kb_customers',{keyPath:'id'});
          c.createIndex('user_id','user_id',{unique:false});
          c.createIndex('sync_status','sync_status',{unique:false});
          c.createIndex('name','name',{unique:false});
        }
        /* kb_udhar — now references customer_id */
        if(!db.objectStoreNames.contains('kb_udhar')){
          var u = db.createObjectStore('kb_udhar',{keyPath:'id'});
          u.createIndex('user_id','user_id',{unique:false});
          u.createIndex('customer_id','customer_id',{unique:false});
          u.createIndex('sync_status','sync_status',{unique:false});
          u.createIndex('updated_at','updated_at',{unique:false});
        }
        /* kb_sales — now stores item_id, unit_price_paise, tax_paise, discount_paise */
        if(!db.objectStoreNames.contains('kb_sales')){
          var sa = db.createObjectStore('kb_sales',{keyPath:'id'});
          sa.createIndex('user_id','user_id',{unique:false});
          sa.createIndex('item_id','item_id',{unique:false});
          sa.createIndex('sync_status','sync_status',{unique:false});
          sa.createIndex('updated_at','updated_at',{unique:false});
        }
        /* kb_audit — immutable audit log */
        if(!db.objectStoreNames.contains('kb_audit')){
          var a = db.createObjectStore('kb_audit',{keyPath:'id'});
          a.createIndex('user_id','user_id',{unique:false});
          a.createIndex('entity_type','entity_type',{unique:false});
          a.createIndex('sync_status','sync_status',{unique:false});
        }
      };
      req.onsuccess = function(e){ _db = e.target.result; resolve(_db); };
      req.onerror   = function(e){ reject(e.target.error); };
    });
  }

  /* ── IDB helpers ── */
  function idbGetAll(store, uid){
    return openDB().then(function(db){
      return new Promise(function(resolve, reject){
        var tx = db.transaction(store,'readonly');
        var idx = tx.objectStore(store).index('user_id');
        var req = idx.getAll(uid);
        req.onsuccess = function(){ resolve(req.result || []); };
        req.onerror   = function(){ reject(req.error); };
      });
    });
  }
  function idbPut(store, obj){
    return openDB().then(function(db){
      return new Promise(function(resolve, reject){
        var tx = db.transaction(store,'readwrite');
        var req = tx.objectStore(store).put(obj);
        req.onsuccess = function(){ resolve(); };
        req.onerror   = function(){ reject(req.error); };
      });
    });
  }
  function idbDelete(store, id){
    return openDB().then(function(db){
      return new Promise(function(resolve, reject){
        var tx = db.transaction(store,'readwrite');
        var req = tx.objectStore(store).delete(id);
        req.onsuccess = function(){ resolve(); };
        req.onerror   = function(){ reject(req.error); };
      });
    });
  }
  function idbGetPending(store){
    return openDB().then(function(db){
      return new Promise(function(resolve, reject){
        var tx = db.transaction(store,'readonly');
        var idx = tx.objectStore(store).index('sync_status');
        var req = idx.getAll('pending');
        req.onsuccess = function(){ resolve(req.result || []); };
        req.onerror   = function(){ reject(req.error); };
      });
    });
  }
  function idbGetPendingDeleted(store){
    return openDB().then(function(db){
      return new Promise(function(resolve, reject){
        var tx = db.transaction(store,'readonly');
        var idx = tx.objectStore(store).index('sync_status');
        var req = idx.getAll('deleted');
        req.onsuccess = function(){ resolve(req.result || []); };
        req.onerror   = function(){ reject(req.error); };
      });
    });
  }

  /* ── Deterministic ID: uid_timestamp_random ── */
  function genId(uid){
    return (uid||'anon').slice(-8) + '_' + Date.now() + '_' + Math.random().toString(36).slice(2,7);
  }

  /* ── Sync badge ── */
  var _syncState = 'ok'; /* 'ok'|'saving'|'offline'|'error'|'pending' */
  function syncBadge(k){
    _syncState = k.replace('sync_','');
    var el = document.getElementById('sync-badge');
    if(!el) return;
    var labels = {
      sync_load:    '⏳ '+t('sync_load'),
      sync_ok:      '☁️ '+t('sync_ok'),
      sync_off:     '⚠️ '+t('sync_off'),
      sync_demo:    '📱 '+t('sync_demo'),
      sync_saving:  '🔄 '+t('sync_saving'),
      sync_err:     '⚠️ '+t('sync_err'),
      sync_pending: '💾 '+t('sync_pending'),
    };
    el.textContent = labels[k] || t(k);
    /* Colour cue */
    el.style.color = (k==='sync_ok')  ? 'var(--green)'   :
                     (k==='sync_off'||k==='sync_err') ? '#c0392b' :
                     (k==='sync_pending') ? '#e8650a' : '';
  }

  /* ── Legacy localStorage shims (settings only, not data) ── */
  function lsL(k,fb){try{var r=localStorage.getItem('kb_'+k);return r?JSON.parse(r):fb;}catch(e){return fb;}}
  function lsS(k,v){try{localStorage.setItem('kb_'+k,JSON.stringify(v));}catch(e){}}

  /* ══ ONLINE / OFFLINE detection ══ */
  var _isOnline = navigator.onLine;
  window.addEventListener('online',  function(){ _isOnline=true;  syncBadge('sync_ok');    flushQueue(); });
  window.addEventListener('offline', function(){ _isOnline=false; syncBadge('sync_off'); });
  document.addEventListener('visibilitychange', function(){
    if(document.visibilityState==='visible' && _isOnline) flushQueue();
  });
  setInterval(function(){ if(_isOnline && user && sbOK) flushQueue(); }, 30000);

  /* ══ PLAN MANAGEMENT ══ */
  window.USER_PLAN = 'free'; /* live value set by loadUserPlan() on sign-in */
  window.BILLING_CYCLE = 'monthly'; /* 'monthly' | 'annual' */

  /* Load plan from Supabase kb_subscriptions table */
  async function loadUserPlan(uid){
    if(!sbOK) return;
    try{
      var r = await sb.from('kb_subscriptions')
        .select('plan,billing_cycle,status,expires_at')
        .eq('user_id', uid)
        .eq('status','active')
        .order('created_at',{ascending:false})
        .limit(1)
        .single();
      if(r.data && r.data.plan){
        /* Check expiry */
        var expires = r.data.expires_at ? new Date(r.data.expires_at) : null;
        if(!expires || expires > new Date()){
          window.USER_PLAN = r.data.plan;          /* 'free' | 'dukandaar' | 'malik' */
          window.BILLING_CYCLE = r.data.billing_cycle || 'monthly';
        } else {
          /* Expired — downgrade to free */
          window.USER_PLAN = 'free';
          await sb.from('kb_subscriptions').update({status:'expired'}).eq('user_id',uid).eq('status','active');
        }
      } else {
        window.USER_PLAN = 'free';
      }
    } catch(e){
      /* No subscription row found — free plan */
      window.USER_PLAN = 'free';
    }
    updatePlanBadge();
    if(typeof updateExportButton==='function') updateExportButton();
    if(typeof updateGSTButton==='function') updateGSTButton();
  }

  /* ══ MULTI-DEVICE ENFORCEMENT ══
     Dukandaar = 1 device only. On app load we write a session token to localStorage.
     If another tab already holds an active token (<30s old), we show a block overlay. */
  (function enforceDeviceLimit(){
    if(USER_PLAN==='free') return;
    var MAX_DEVICES = USER_PLAN==='malik' ? 3 : 1;
    var LIST_KEY='kb_device_list', SES_KEY='kb_device_token';
    /* Load + prune stale entries (>30s old) */
    var activeDevices=[];
    try{ activeDevices=JSON.parse(localStorage.getItem(LIST_KEY)||'[]'); }catch(e){}
    activeDevices=activeDevices.filter(function(d){return Date.now()-d.ts<30000;});
    var myTok=sessionStorage.getItem(SES_KEY);
    var alreadyIn=activeDevices.some(function(d){return d.tok===myTok;});
    var overLimit=!alreadyIn&&activeDevices.length>=MAX_DEVICES;
    if(overLimit){
      var ov=document.createElement('div');
      ov.id='multidevice-block';
      ov.style.cssText='position:fixed;inset:0;background:rgba(255,253,249,.97);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;font-family:Plus Jakarta Sans,sans-serif;gap:16px;padding:2rem;text-align:center;';
      var limitText = MAX_DEVICES===1
        ? 'Your Dukandaar plan allows <strong>1 device</strong> at a time. Close the other session first, or upgrade to Malik for multi-device access.'
        : 'Your Malik plan allows <strong>3 devices</strong> at a time. Please close one other session first.';
      var _d1=document.createElement('div');_d1.style.fontSize='48px';_d1.textContent='📱';
      var _d2=document.createElement('div');_d2.style.cssText='font-size:20px;font-weight:700;color:#1A1209;';_d2.textContent='Already open on another device';
      var _d3=document.createElement('div');_d3.style.cssText='font-size:14px;color:#5A4A3A;max-width:320px;line-height:1.6;';_d3.innerHTML=limitText;
      var _b1=document.createElement('button');_b1.style.cssText='padding:12px 24px;background:#E8650A;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:Plus Jakarta Sans,sans-serif;';_b1.textContent='🔄 Retry';_b1.onclick=function(){window.location.reload();};
      var _b2=document.createElement('button');_b2.style.cssText='padding:10px 20px;background:transparent;color:#E8650A;border:1px solid #E8650A;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;font-family:Plus Jakarta Sans,sans-serif;';_b2.textContent='⚡ Upgrade to Malik';_b2.onclick=function(){var el=document.getElementById('multidevice-block');if(el)el.remove();};
      ov.appendChild(_d1);ov.appendChild(_d2);ov.appendChild(_d3);ov.appendChild(_b1);ov.appendChild(_b2);
      document.body.appendChild(ov);
      return;
    }
    /* Register this tab's token */
    var tok = myTok || ('kb_'+Math.random().toString(36).slice(2));
    sessionStorage.setItem(SES_KEY, tok);
    if(!alreadyIn){ activeDevices.push({tok:tok,ts:Date.now()}); }
    else{ activeDevices=activeDevices.map(function(d){return d.tok===tok?{tok:tok,ts:Date.now()}:d;}); }
    localStorage.setItem(LIST_KEY, JSON.stringify(activeDevices));
    /* Heartbeat every 20s */
    setInterval(function(){
      var list=[];
      try{ list=JSON.parse(localStorage.getItem(LIST_KEY)||'[]'); }catch(e){}
      list=list.filter(function(d){return Date.now()-d.ts<30000;});
      var found=list.some(function(d){return d.tok===tok;});
      if(found){ list=list.map(function(d){return d.tok===tok?{tok:tok,ts:Date.now()}:d;}); }
      else if(list.length<MAX_DEVICES){ list.push({tok:tok,ts:Date.now()}); }
      localStorage.setItem(LIST_KEY, JSON.stringify(list));
    },20000);
    /* Clean up on tab close */
    window.addEventListener('beforeunload',function(){
      var list=[];
      try{ list=JSON.parse(localStorage.getItem(LIST_KEY)||'[]'); }catch(e){}
      list=list.filter(function(d){return d.tok!==tok;});
      localStorage.setItem(LIST_KEY, JSON.stringify(list));
    });
  })();

  window.updatePlanBadge = function updatePlanBadge(){
    var badge  = document.getElementById('plan-badge');
    var txt    = document.getElementById('plan-badge-txt');
    var upBtn  = document.getElementById('plan-upgrade-btn');
    if(!badge) return;
    var isHi = lang === 'hi';
    if(USER_PLAN === 'malik'){
      badge.className = 'plan-badge plan-malik';
      badge.textContent = '👑 MALIK';
      txt.textContent = isHi ? 'मालिक प्लान — सभी सुविधाएं' : 'Malik Plan — All features';
      upBtn.style.display = 'none';
      var psBtn=document.getElementById('priority-support-btn');
      if(psBtn) psBtn.style.display='inline-flex';
      var nfBtn=document.getElementById('new-feat-btn');
      if(nfBtn){ nfBtn.style.display='inline-flex'; checkNewFeaturesDot(); }
    } else if(USER_PLAN === 'dukandaar'){
      badge.className = 'plan-badge plan-dukandaar';
      badge.textContent = '🏪 DUKANDAAR';
      txt.textContent = isHi ? 'दुकानदार प्लान' : 'Dukandaar Plan';
      upBtn.style.display = 'none';
      var psBtn3=document.getElementById('priority-support-btn');
      if(psBtn3) psBtn3.style.display='none';
      var nfBtn3=document.getElementById('new-feat-btn');
      if(nfBtn3) nfBtn3.style.display='none';
    } else {
      badge.className = 'plan-badge plan-free';
      badge.textContent = '🆓 FREE';
      txt.textContent = isHi ? 'मुफ़्त प्लान — 50 आइटम तक' : 'Free Plan — up to 50 items';
      upBtn.style.display = 'inline-flex';
      upBtn.textContent = isHi ? '⚡ अपग्रेड करें' : '⚡ Upgrade';
      var psBtn2=document.getElementById('priority-support-btn');
      if(psBtn2) psBtn2.style.display='none';
      var nfBtn2=document.getElementById('new-feat-btn');
      if(nfBtn2) nfBtn2.style.display='none';
    }
  }

  async function loadAndShow(u){
    showPage('app'); applyLang(); updatePlanBadge();
    var nm=u.user_metadata&&u.user_metadata.full_name?u.user_metadata.full_name:u.email;
    document.getElementById('user-nm').textContent=nm.split(' ')[0];
    var av=document.getElementById('user-av');
    if(u.user_metadata&&u.user_metadata.avatar_url){
      var avUrl=String(u.user_metadata.avatar_url||'');
      if(/^https:\/\//i.test(avUrl)){
        var img=document.createElement('img');img.src=avUrl;img.alt='';img.referrerPolicy='no-referrer';img.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;';
        img.onerror=function(){av.innerHTML='';var ini=nm.trim().split(/\s+/).map(function(w){return w[0];}).join('').toUpperCase().slice(0,2);av.textContent=ini;};
        av.innerHTML='';av.appendChild(img);
      } else { var ini=nm.trim().split(/\s+/).map(function(w){return w[0];}).join('').toUpperCase().slice(0,2);av.textContent=ini; }
    } else { var ini=nm.trim().split(/\s+/).map(function(w){return w[0];}).join('').toUpperCase().slice(0,2);av.textContent=ini; }
    await loadUserPlan(u.id); await loadData(u.id); loadStoreName(); drawAll();
  }
  async function loadData(uid){
    syncBadge('sync_load');
    /* Always load from IDB first so UI shows instantly */
    try{
      var[li,lc,lu,ls] = await Promise.all([
        idbGetAll('kb_items',     uid),
        idbGetAll('kb_customers', uid),
        idbGetAll('kb_udhar',     uid),
        idbGetAll('kb_sales',     uid)
      ]);
      customers = lc.filter(function(r){ return !r.deleted_at; });
      /* Filter out locally-deleted records for display */
      items = li.filter(function(r){ return r.sync_status !== 'deleted'; });
      udhar = lu.filter(function(r){ return r.sync_status !== 'deleted'; });
      sales = ls.filter(function(r){ return r.sync_status !== 'deleted'; })
               .sort(function(a,b){ return (b.created_at||'').localeCompare(a.created_at||''); });
    }catch(e){ items=[]; udhar=[]; sales=[]; }

    /* Check if any pending items exist */
    var hasPending = false;
    try{
      var [pi,pu,ps] = await Promise.all([
        idbGetPending('kb_items'), idbGetPending('kb_udhar'), idbGetPending('kb_sales')
      ]);
      hasPending = (pi.length + pu.length + ps.length) > 0;
    }catch(e){}
    syncBadge(hasPending ? 'sync_pending' : (!_isOnline ? 'sync_off' : 'sync_ok'));

    if(!sbOK || !_isOnline){ return; }

    /* Fetch from Supabase and merge: server wins except for local pending */
    try{
      var[a,b,c] = await Promise.all([
        sb.from('kb_items').select('*').eq('user_id',uid).order('created_at'),
        sb.from('kb_udhar').select('*').eq('user_id',uid).order('created_at'),
        sb.from('kb_sales').select('*').eq('user_id',uid).order('created_at',{ascending:false})
      ]);
      await mergeFromServer('kb_items', a.data||[], uid);
      await mergeFromServer('kb_udhar', b.data||[], uid);
      await mergeFromServer('kb_sales', c.data||[], uid);
      /* Reload from IDB after merge */
      var[li2,lu2,ls2] = await Promise.all([
        idbGetAll('kb_items',uid), idbGetAll('kb_udhar',uid), idbGetAll('kb_sales',uid)
      ]);
      items = li2.filter(function(r){ return r.sync_status !== 'deleted'; });
      udhar = lu2.filter(function(r){ return r.sync_status !== 'deleted'; });
      sales = ls2.filter(function(r){ return r.sync_status !== 'deleted'; })
               .sort(function(a,b){ return (b.created_at||'').localeCompare(a.created_at||''); });
      drawAll();
      /* Flush any pending items written while this fetch was in-flight */
      await flushQueue();
      syncBadge('sync_ok');
    }catch(e){ syncBadge(_isOnline ? 'sync_err' : 'sync_off'); }
  }

  /* Merge server records into IDB — server wins unless local is pending */
  async function mergeFromServer(store, serverRows, uid){
    try{
      var existing = await idbGetAll(store, uid);
      var localMap = {};
      existing.forEach(function(r){ localMap[r.id] = r; });
      for(var i=0; i<serverRows.length; i++){
        var srv = serverRows[i];
        var loc = localMap[srv.id];
        if(!loc){
          /* New from server — store with synced status */
          srv.sync_status = 'synced';
          await idbPut(store, srv);
        } else if(loc.sync_status === 'pending'){
          /* Local pending wins — will be pushed in flushQueue */
        } else {
          /* Compare updated_at — server wins if newer or equal */
          var srvTime = srv.updated_at || srv.created_at || '';
          var locTime = loc.updated_at || loc.created_at || '';
          if(srvTime >= locTime){
            srv.sync_status = 'synced';
            await idbPut(store, srv);
          }
        }
        delete localMap[srv.id];
      }
      /* Remaining local records not on server: if synced → delete locally (server is truth) */
      for(var id in localMap){
        var r = localMap[id];
        if(r.sync_status === 'synced') await idbDelete(store, id);
      }
    }catch(e){ console.warn('mergeFromServer error', store, e); }
  }

  var tTimer;
  function toast(k){var el=document.getElementById('toast');el.textContent=t(k);el.style.display='block';clearTimeout(tTimer);tTimer=setTimeout(function(){el.style.display='none';},2000);}

  /* ══ OFFLINE-FIRST WRITE HELPERS ══
     Pattern: write to IDB (sync_status='pending') → show badge → try Supabase → on success mark synced.
     If offline or Supabase fails: record stays pending, flushQueue() will retry.
  ══ */
  var _flushing = false;

  async function flushQueue(){
    if(_flushing || !sbOK || !user || !_isOnline) return;
    _flushing = true;
    var anyPending = false;
    try{
      /* ── Items ── */
      var pendingItems = await idbGetPending('kb_items');
      for(var i=0; i<pendingItems.length; i++){
        var item = pendingItems[i];
        try{
          var now = new Date().toISOString();
          if(item._isNew){
            /* Insert — use item.id as the server id via upsert */
            await sb.from('kb_items').upsert({
              id:item.id, user_id:user.id, name:item.name, qty:item.qty,
              price:item.price, cat:item.cat, low:item.low,
              created_at: item.created_at||now, updated_at: now
            },{onConflict:'id'});
          } else {
            await sb.from('kb_items').update({
              qty:item.qty, name:item.name, price:item.price,
              cat:item.cat, low:item.low, updated_at: now
            }).eq('id',item.id).eq('user_id',user.id);
          }
          item.sync_status = 'synced'; item._isNew = false;
          await idbPut('kb_items', item);
        }catch(e){ anyPending = true; }
      }
      /* ── Deleted items ── */
      var deletedItems = await idbGetPendingDeleted('kb_items');
      for(var i=0; i<deletedItems.length; i++){
        try{
          await sb.from('kb_items').delete().eq('id',deletedItems[i].id).eq('user_id',user.id);
          await idbDelete('kb_items', deletedItems[i].id);
        }catch(e){ anyPending = true; }
      }
      /* ── Udhar ── */
      var pendingUdhar = await idbGetPending('kb_udhar');
      for(var i=0; i<pendingUdhar.length; i++){
        var entry = pendingUdhar[i];
        try{
          var now = new Date().toISOString();
          await sb.from('kb_udhar').upsert({
            id:entry.id, user_id:user.id, customer:entry.customer,
            type:entry.type, amount:entry.amount, note:entry.note, date:entry.date,
            created_at: entry.created_at||now, updated_at: now
          },{onConflict:'id'});
          entry.sync_status = 'synced';
          await idbPut('kb_udhar', entry);
        }catch(e){ anyPending = true; }
      }
      /* ── Sales ── */
      var pendingSales = await idbGetPending('kb_sales');
      for(var i=0; i<pendingSales.length; i++){
        var sale = pendingSales[i];
        try{
          var now = new Date().toISOString();
          await sb.from('kb_sales').upsert({
            id:sale.id, user_id:user.id, name:sale.name, cat:sale.cat,
            qty:sale.qty, total:sale.total, pay:sale.pay, time:sale.time,
            created_at: sale.created_at||now, updated_at: now
          },{onConflict:'id'});
          sale.sync_status = 'synced';
          await idbPut('kb_sales', sale);
        }catch(e){ anyPending = true; }
      }
      /* ── Customers ── */
      var pendingCusts = await idbGetPending('kb_customers');
      for(var i=0; i<pendingCusts.length; i++){
        var cust = pendingCusts[i];
        try{
          var now = new Date().toISOString();
          await sb.from('kb_customers').upsert({
            id: cust.id, user_id: user.id, name: cust.name,
            phone: cust.phone||'',
            created_at: cust.created_at||now, updated_at: now,
            deleted_at: cust.deleted_at||null
          },{onConflict:'id'});
          cust.sync_status='synced';
          await idbPut('kb_customers', cust);
        }catch(e){ anyPending=true; }
      }
      /* ── Audit log ── */
      var pendingAudit = await idbGetPending('kb_audit');
      for(var i=0; i<pendingAudit.length; i++){
        var entry = pendingAudit[i];
        try{
          await sb.from('kb_audit').insert({
            id: entry.id, user_id: user.id,
            action: entry.action, entity_type: entry.entity_type,
            entity_id: entry.entity_id, details: entry.details,
            created_at: entry.created_at, updated_at: entry.updated_at
          });
          entry.sync_status='synced';
          await idbPut('kb_audit', entry);
        }catch(e){ anyPending=true; }
      }
      /* ── Update flushQueue for sales to include new paise fields ── */
      var pendingSalesV2 = await idbGetPending('kb_sales');
      for(var i=0; i<pendingSalesV2.length; i++){
        var sale = pendingSalesV2[i];
        if(sale.sync_status!=='pending') continue;
        try{
          var now = new Date().toISOString();
          await sb.from('kb_sales').upsert({
            id: sale.id, user_id: user.id,
            item_id: sale.item_id||null,
            name: sale.name, cat: sale.cat||'', qty: sale.qty,
            unit_price_paise: sale.unit_price_paise || toPaise(sale.unit_price||sale.total/sale.qty||0),
            tax_paise:        sale.tax_paise        || toPaise(sale.tax||0),
            discount_paise:   sale.discount_paise   || toPaise(sale.discount||0),
            total_paise:      sale.total_paise      || toPaise(sale.total||0),
            pay: sale.pay, time: sale.time,
            created_at: sale.created_at||now, updated_at: now,
            deleted_at: sale.deleted_at||null
          },{onConflict:'id'});
          sale.sync_status='synced';
          await idbPut('kb_sales', sale);
        }catch(e){ anyPending=true; }
      }
      /* ── Update flushQueue for udhar to include new paise + customer_id fields ── */
      var pendingUdharV2 = await idbGetPending('kb_udhar');
      for(var i=0; i<pendingUdharV2.length; i++){
        var uentry = pendingUdharV2[i];
        if(uentry.sync_status!=='pending') continue;
        try{
          var now = new Date().toISOString();
          await sb.from('kb_udhar').upsert({
            id: uentry.id, user_id: user.id,
            customer_id: uentry.customer_id||null,
            customer: uentry.customer,
            type: uentry.type,
            amount_paise: uentry.amount_paise || toPaise(uentry.amount||0),
            note: uentry.note||'', date: uentry.date,
            created_at: uentry.created_at||now, updated_at: now,
            deleted_at: uentry.deleted_at||null
          },{onConflict:'id'});
          uentry.sync_status='synced';
          await idbPut('kb_udhar', uentry);
        }catch(e){ anyPending=true; }
      }
      syncBadge(anyPending ? 'sync_pending' : 'sync_ok');
    }catch(e){ syncBadge('sync_err'); }
    finally{ _flushing = false; }
  }

  async function pItem(item, isNew){
    toast('toast_saved');
    if(!user) return;
    var now = new Date().toISOString();
    /* Assign deterministic ID for new items */
    if(isNew && (!item.id || item.id.startsWith('tmp_'))){
      item.id = genId(user.id);
      item.created_at = now;
    }
    item.updated_at = now;
    item.user_id    = user.id;
    item.sync_status = 'pending';
    item._isNew      = !!isNew;
    await idbPut('kb_items', item);
    syncBadge('sync_pending');
    if(sbOK && _isOnline) flushQueue();
  }

  async function delItem(id){
    var deletedItem = items.find(function(i){ return String(i.id)===String(id); });
    items = items.filter(function(i){ return String(i.id) !== String(id); });
    drawAll();
    toast('toast_del');
    if(!user) return;
    var now = new Date().toISOString();
    /* Mark deleted in IDB with deleted_at timestamp */
    try{
      var existing = await new Promise(function(resolve,reject){
        openDB().then(function(db){
          var req = db.transaction('kb_items','readonly').objectStore('kb_items').get(id);
          req.onsuccess = function(){ resolve(req.result); };
          req.onerror   = function(){ reject(req.error); };
        });
      });
      if(existing){
        existing.sync_status = 'deleted';
        existing.deleted_at  = now;
        existing.updated_at  = now;
        await idbPut('kb_items', existing);
      }
    }catch(e){}
    /* Audit log */
    await auditLog('delete', 'item', id, {
      name:  deletedItem ? deletedItem.name : id,
      qty:   deletedItem ? deletedItem.qty  : null,
      price_paise: deletedItem ? toPaise(deletedItem.price) : null
    });
    syncBadge('sync_pending');
    if(sbOK && _isOnline) flushQueue();
  }

  async function pUdhar(e){
    toast('toast_saved');
    if(!user) return;
    var now = new Date().toISOString();
    /* Ensure customer record exists and link by ID */
    if(!e.customer_id && e.customer){
      var cust = await findOrCreateCustomer(e.customer, user.id);
      e.customer_id = cust.id;
    }
    e.id              = e.id || genId(user.id);
    e.created_at      = e.created_at || now;
    e.updated_at      = now;
    e.deleted_at      = e.deleted_at || null;
    e.user_id         = user.id;
    e.sync_status     = 'pending';
    /* Store amount in paise */
    e.amount_paise    = toPaise(e.amount);
    await idbPut('kb_udhar', e);
    syncBadge('sync_pending');
    if(sbOK && _isOnline) flushQueue();
  }

  async function pSale(s){
    toast('toast_saved');
    if(!user) return;
    var now = new Date().toISOString();
    s.id               = s.id || genId(user.id);
    s.created_at       = s.created_at || now;
    s.updated_at       = now;
    s.deleted_at       = s.deleted_at || null;
    s.user_id          = user.id;
    s.sync_status      = 'pending';
    /* Store all money as paise integers */
    s.unit_price_paise = toPaise(s.unit_price || (s.total/s.qty));
    s.tax_paise        = toPaise(s.tax        || 0);
    s.discount_paise   = toPaise(s.discount   || 0);
    s.total_paise      = toPaise(s.total);
    await idbPut('kb_sales', s);
    syncBadge('sync_pending');
    if(sbOK && _isOnline) flushQueue();
  }

  /* ══ HELPERS ══ */
  function rupee(n){return '₹'+Number(n).toLocaleString('en-IN');}
  function ini(n){return n.trim().split(/\s+/).map(function(w){return w[0];}).join('').toUpperCase().slice(0,2);}
  function udharTotals(){var t={};for(var i=0;i<udhar.length;i++){var e=udhar[i];if(!t[e.customer])t[e.customer]=0;t[e.customer]+=e.type==='debit'?Number(e.amount):-Number(e.amount);}return t;}
  function emojiFor(cat){return EMOJIS[cat]||'📦';}

  /* ── XSS & INPUT SANITISATION HELPERS ── */
  /* ══ AUDIT LOG ══ */
  async function auditLog(action, entityType, entityId, details){
    if(!user) return;
    var now = new Date().toISOString();
    var entry = {
      id:          genId(user.id),
      user_id:     user.id,
      action:      action,        /* 'delete' | 'payment_received' | 'sale' | 'update' */
      entity_type: entityType,    /* 'item' | 'udhar' | 'sale' | 'customer' */
      entity_id:   entityId,
      details:     JSON.stringify(details||{}),
      created_at:  now,
      updated_at:  now,
      deleted_at:  null,
      sync_status: 'pending'
    };
    await idbPut('kb_audit', entry);
    if(sbOK && _isOnline) flushQueue();
  }

  function escapeHtml(s){
    if(s===null||s===undefined)return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#x27;').replace(/\//g,'&#x2F;');
  }
  function safeNum(v,def){var n=Number(v);return(isFinite(n)&&n>=0)?n:(def||0);}
  function safeId(s){return String(s||'').replace(/[^a-zA-Z0-9_\-]/g,'');}

  /* ── Paise/cents helpers — all money stored as integers (paise) ── */
  function toPaise(rupees){ return Math.round(safeNum(rupees,0)*100); }
  function fromPaise(paise){ return safeNum(paise,0)/100; }
  function rupeesFromPaise(paise){ return rupee(fromPaise(paise)); }

  /* ── Customers in-memory array (mirrors kb_customers IDB store) ── */
  var customers = [];

  /* ── Find or create customer, return customer object ── */
  async function findOrCreateCustomer(name, uid){
    var norm = name.trim().slice(0,80);
    var existing = customers.find(function(c){ return c.name.toLowerCase()===norm.toLowerCase(); });
    if(existing) return existing;
    var now = new Date().toISOString();
    var cust = {
      id:          genId(uid),
      user_id:     uid,
      name:        norm,
      phone:       '',
      created_at:  now,
      updated_at:  now,
      deleted_at:  null,
      sync_status: 'pending'
    };
    customers.push(cust);
    await idbPut('kb_customers', cust);
    return cust;
  }

  /* ── Persist customer ── */
  async function pCustomer(cust){
    if(!user) return;
    cust.user_id    = user.id;
    cust.sync_status= 'pending';
    await idbPut('kb_customers', cust);
    if(sbOK && _isOnline) flushQueue();
  }

  /* ══ WHATSAPP ══ */
  function waShare(cust){
    var tot=udharTotals(),bal=tot[cust]||0;
    var ents=udhar.filter(function(e){return e.customer===cust;});
    var today=new Date().toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
    var lines=['🏪 *KiranaBook — Udhar Statement*','📅 Date: '+today,'👤 Customer: *'+cust+'*','─────────────────'];
    ents.slice(-5).forEach(function(e){lines.push((e.type==='debit'?'🔴 Credit given':'🟢 Payment received')+': *'+rupee(e.amount)+'*'+(e.note?' ('+e.note+')':''));});
    lines.push('─────────────────');
    if(bal>0)lines.push('💰 *Total outstanding: '+rupee(bal)+'*','','Kripya jald se jald bhugtaan karen. 🙏');
    else if(bal<0)lines.push('✅ *Overpaid by '+rupee(-bal)+'* — Thank you!');
    else lines.push('✅ *Account settled. Thank you!*');
    window.open('https://wa.me/?text='+encodeURIComponent(lines.join('\n')),'_blank');
  }
  window.waShare=waShare;

  /* ══ DRAW ══ */
  function drawStats(){
    var sv=0,lc=0;
    items.forEach(function(i){sv+=Number(i.qty)*Number(i.price);if(Number(i.qty)<=Number(i.low))lc++;});
    var tot=udharTotals(),ud=0;Object.keys(tot).forEach(function(k){if(tot[k]>0)ud+=tot[k];});
    var sd=0;sales.forEach(function(s){sd+=Number(s.total);});
    var tiles=[
      {icon:'📦',label:t('stat_stock'),val:rupee(sv),cls:'st-ink'},
      {icon:'⚠️',label:t('stat_low'),val:lc+t('items_unit'),cls:'st-o'},
      {icon:'📋',label:t('stat_udhar'),val:rupee(ud),cls:'st-r'},
      {icon:'💰',label:t('stat_sales'),val:rupee(sd),cls:'st-g'}
    ];
    document.getElementById('stats-row').innerHTML=tiles.map(function(s){
      return '<div class="stat-tile '+escapeHtml(s.cls)+'"><div class="stat-icon">'+escapeHtml(s.icon)+'</div><div class="stat-label">'+escapeHtml(s.label)+'</div><div class="stat-val">'+escapeHtml(s.val)+'</div></div>';
    }).join('');
    document.getElementById('tc-inv').textContent=items.length;
    document.getElementById('tc-udh').textContent=[...new Set(udhar.map(function(e){return e.customer;}))].length;
    document.getElementById('tc-sal').textContent=sales.length;
  }

  function drawInv(){
    var q=(document.getElementById('i-search').value||'').toLowerCase();
    var list=items.filter(function(i){return i.name.toLowerCase().indexOf(q)>=0;});
    var el=document.getElementById('inv-list');
    el.innerHTML='';
    if(!list.length){
      var emp=document.createElement('div');emp.className='empty';
      emp.innerHTML='<div class="empty-icon">📦</div><div class="empty-title">'+escapeHtml(t('inv_empty_t'))+'</div><div class="empty-sub">'+escapeHtml(t('inv_empty_s'))+'</div>';
      el.appendChild(emp);return;
    }
    var frag=document.createDocumentFragment();
    list.forEach(function(it){
      var qty=safeNum(it.qty),low=safeNum(it.low),price=safeNum(it.price),isLow=qty<=low;
      var sid=safeId(it.id);
      var card=document.createElement('div');
      card.className='item-card'+(isLow?' low':'');
      card.innerHTML=
        '<div class="item-emoji">'+emojiFor(it.cat)+'</div>'+
        '<div class="item-body"><div class="item-name">'+escapeHtml(it.name)+'</div>'+
        '<div class="item-meta">'+escapeHtml(it.cat)+' · '+rupee(price)+' '+escapeHtml(t('inv_per_unit'))+' · '+escapeHtml(t('inv_value'))+': '+rupee(qty*price)+'</div>'+
        '<span class="stock-badge '+(isLow?'sb-low':'sb-ok')+'">'+(isLow?escapeHtml(t('inv_low_stock')):escapeHtml(t('inv_in_stock')))+'</span></div>'+
        '<div class="item-right"><div class="qty-ctrl">'+
        '<button class="qty-btn" data-id="'+escapeHtml(sid)+'" data-d="-1">−</button>'+
        '<span class="qty-val">'+qty+'</span>'+
        '<button class="qty-btn" data-id="'+escapeHtml(sid)+'" data-d="1">+</button></div>'+
        '<button class="del-btn" data-id="'+escapeHtml(sid)+'">🗑</button></div>';
      card.querySelectorAll('.qty-btn').forEach(function(btn){
        btn.addEventListener('click',function(){chQty(btn.dataset.id,Number(btn.dataset.d));});
      });
      card.querySelector('.del-btn').addEventListener('click',function(){delItem(sid);});
      frag.appendChild(card);
    });
    el.appendChild(frag);
  }

  function drawUdhar(){
    var tot=udharTotals();
    var custs=[...new Set(udhar.map(function(e){return e.customer;}))];
    var el=document.getElementById('udh-list');
    el.innerHTML='';
    if(!custs.length){
      var emp=document.createElement('div');emp.className='empty';
      emp.innerHTML='<div class="empty-icon">📒</div><div class="empty-title">'+escapeHtml(t('udh_empty_t'))+'</div><div class="empty-sub">'+escapeHtml(t('udh_empty_s'))+'</div>';
      el.appendChild(emp);return;
    }
    var WA_SVG='<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
    var frag=document.createDocumentFragment();
    custs.forEach(function(cust){
      var ents=udhar.filter(function(e){return e.customer===cust;});
      var bal=tot[cust]||0,bc=bal>0?'var(--red)':bal<0?'var(--blue)':'var(--green)';
      var bl=bal>0?escapeHtml(t('udh_owes'))+' '+rupee(bal):bal<0?escapeHtml(t('udh_over'))+' '+rupee(-bal):escapeHtml(t('udh_settled'));
      var card=document.createElement('div');card.className='udhar-card';
      var entriesHtml=ents.slice(-4).map(function(en){
        return '<div class="udhar-entry"><div class="entry-meta">'+
          '<span class="entry-dot" style="background:'+(en.type==='debit'?'var(--red)':'var(--green)')+'"></span>'+
          escapeHtml(en.date)+(en.note?' · '+escapeHtml(en.note):'')+
          '</div><span style="font-weight:700;color:'+(en.type==='credit'?'var(--green)':'var(--red)')+'">'+(en.type==='debit'?'−':'+')+rupee(safeNum(en.amount))+'</span></div>';
      }).join('');
      card.innerHTML=
        '<div class="udhar-head">'+
        '<div class="cust-av">'+escapeHtml(ini(cust))+'</div>'+
        '<div style="flex:1"><div class="cust-name">'+escapeHtml(cust)+'</div>'+
        '<div class="cust-bal" style="color:'+bc+'">'+bl+'</div></div>'+
        '<div class="udhar-actions">'+
        '<button class="wa-btn" type="button">'+WA_SVG+' '+escapeHtml(t('udh_wa'))+'</button>'+
        (bal>0?'<button class="mark-paid-btn" type="button">'+escapeHtml(t('udh_mark'))+'</button>':'')+
        '</div></div>'+entriesHtml;
      /* safe event listeners — no inline onclick with raw customer name */
      card.querySelector('.wa-btn').addEventListener('click',(function(c){return function(){waShare(c);};})(cust));
      if(bal>0){var mp=card.querySelector('.mark-paid-btn');if(mp)mp.addEventListener('click',(function(c){return function(){markPaid(c);};})(cust));}
      frag.appendChild(card);
    });
    el.appendChild(frag);
  }

  function drawSales(){
    /* Rebuild item selector safely using DOM — no innerHTML with user data */
    var sel=document.getElementById('s-item');
    sel.innerHTML='';
    items.forEach(function(i){
      var opt=document.createElement('option');
      opt.value=safeId(i.id);
      opt.textContent=i.name; /* textContent auto-escapes */
      sel.appendChild(opt);
    });
    var el=document.getElementById('sal-list');
    el.innerHTML='';
    if(!sales.length){
      var emp=document.createElement('div');emp.className='empty';
      emp.innerHTML='<div class="empty-icon">📊</div><div class="empty-title">'+escapeHtml(t('sal_empty_t'))+'</div><div class="empty-sub">'+escapeHtml(t('sal_empty_s'))+'</div>';
      el.appendChild(emp);return;
    }
    var frag=document.createDocumentFragment();
    sales.forEach(function(s){
      /* Whitelist payment mode — never trust stored value directly */
      var pay=['Cash','UPI','Udhar'].indexOf(s.pay)>=0?s.pay:'Cash';
      var pc=pay==='UPI'?'pay-upi':pay==='Udhar'?'pay-udhar':'pay-cash';
      var card=document.createElement('div');card.className='sale-card';
      card.innerHTML=
        '<div class="item-emoji">'+emojiFor(s.cat)+'</div>'+
        '<div style="flex:1"><div style="font-size:15px;font-weight:700;margin-bottom:3px">'+escapeHtml(s.name)+'</div>'+
        '<div style="font-size:12px;color:var(--ink-3);display:flex;align-items:center;gap:8px">'+
        escapeHtml(t('sal_qty_label'))+safeNum(s.qty)+' · '+escapeHtml(s.time)+
        '<span class="pay-badge '+pc+'">'+escapeHtml(pay)+'</span></div></div>'+
        '<div style="font-family:\'Fraunces\',serif;font-size:20px;font-weight:700;color:var(--green)">'+rupee(safeNum(s.total))+'</div>';
      frag.appendChild(card);
    });
    el.appendChild(frag);
  }

  function drawAll(){drawStats();drawInv();drawUdhar();drawSales();}

  /* ══ NAVIGATION ══ */
  window.showTab=function(name){
    ['inv','udh','sal','rep'].forEach(function(t){
      var p=document.getElementById('panel-'+t);
      if(p) p.className='panel'+(t===name?' on':'');
      var b=document.getElementById('tb-'+t);
      if(b) b.className='tab-btn'+(t===name?' on':'');
    });
    if(name==='rep') drawReports();
    if(typeof window.setBottomNav==='function') window.setBottomNav(name);
  };
  function showPage(name){
    document.getElementById('page-home').className='page'+(name==='home'?' active':'');
    document.getElementById('page-app').className='page'+(name==='app'?' active':'');
    window.scrollTo(0,0);
  }
  window.goHome=function(){showPage('home');};

  /* ══ ACTIONS ══ */
  window.chQty=function(id,d){
    var item=items.find(function(i){return String(i.id)===String(id);});
    if(!item)return; item.qty=Math.max(0,Number(item.qty)+d); drawAll(); pItem(item,false);
  };
  window.delItem=function(id){delItem(id);};
  window.markPaid=async function(cust){
    var tot=udharTotals(), bal=tot[cust]||0;
    if(bal>0){
      var custRec = user ? await findOrCreateCustomer(cust, user.id) : {id: genId('anon'), name: cust};
      var e={
        customer:     cust,
        customer_id:  custRec.id,
        type:         'credit',
        amount:       bal,
        amount_paise: toPaise(bal),
        note:         'Full payment received',
        date:         new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short'})
      };
      udhar.push(e);
      drawAll();
      await pUdhar(e);
      /* Audit: payment received */
      await auditLog('payment_received','udhar', custRec.id, {
        customer: cust, customer_id: custRec.id,
        amount_paise: toPaise(bal), note: 'Full payment received'
      });
    }
  };

  /* ══ LISTENERS ══ */
  document.getElementById('i-search').addEventListener('input',drawInv);

  document.getElementById('btn-add-item').addEventListener('click',function(){
    var name=document.getElementById('i-name').value.trim().slice(0,100);
    var qty=Math.max(0,Math.min(999999,parseInt(document.getElementById('i-qty').value)||0));
    var price=Math.max(0,Math.min(999999,parseFloat(document.getElementById('i-price').value)||0));
    var catEl=document.getElementById('i-cat');
    var validCats=Array.from(catEl.options).map(function(o){return o.value;});
    var cat=validCats.indexOf(catEl.value)>=0?catEl.value:validCats[0];
    var low=Math.max(0,Math.min(99999,parseInt(document.getElementById('i-low').value)||10));
    if(!name){toast('err_name');return;}
    if(USER_PLAN==='free'&&items.length>=50){toast('err_item_limit');return;}
    var item={id:'tmp_'+Date.now(),name:name,qty:qty,price:price,cat:cat,low:low};
    items.push(item);
    document.getElementById('i-name').value='';
    document.getElementById('i-qty').value='';
    document.getElementById('i-price').value='';
    drawAll();pItem(item,true);
  });

  document.getElementById('btn-add-udhar').addEventListener('click',async function(){
    var name    = document.getElementById('u-name').value.trim().slice(0,80);
    var amt     = Math.max(0,Math.min(9999999,parseFloat(document.getElementById('u-amt').value)||0));
    var rawType = document.getElementById('u-type').value;
    var type    = ['debit','credit'].indexOf(rawType)>=0 ? rawType : 'debit';
    var note    = document.getElementById('u-note').value.trim().slice(0,200);
    if(!name){ toast('err_cust'); return; }
    if(!amt){  toast('err_amt');  return; }

    /* Free plan: limit by unique customer count */
    if(USER_PLAN==='free'){
      var existingCusts = new Set(udhar.map(function(e){ return e.customer; }));
      if(!existingCusts.has(name) && existingCusts.size>=10){ toast('err_udhar_limit'); return; }
    }

    /* Find or create customer record */
    var cust = user ? await findOrCreateCustomer(name, user.id) : {id: genId('anon'), name: name};

    var entry = {
      customer:    name,
      customer_id: cust.id,
      type:        type,
      amount:      amt,
      amount_paise: toPaise(amt),
      note:        note,
      date:        new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short'})
    };
    udhar.push(entry);
    document.getElementById('u-name').value='';
    document.getElementById('u-amt').value='';
    document.getElementById('u-note').value='';
    drawUdhar(); drawStats();
    await pUdhar(entry);

    /* Audit log for payment received */
    if(type==='credit'){
      await auditLog('payment_received','udhar', entry.id||cust.id, {
        customer: name, customer_id: cust.id,
        amount_paise: toPaise(amt), note: note
      });
    }
  });

  document.getElementById('btn-add-sale').addEventListener('click',async function(){
    var itemId = document.getElementById('s-item').value;
    var qty    = parseInt(document.getElementById('s-qty').value)||0;
    var pay    = document.getElementById('s-pay').value;
    var taxPct    = parseFloat(document.getElementById('s-tax')&&document.getElementById('s-tax').value||0)||0;
    var discRupee = parseFloat(document.getElementById('s-disc')&&document.getElementById('s-disc').value||0)||0;
    var item = items.find(function(i){ return String(i.id)===String(itemId); });
    if(!item||qty<=0){ toast('err_qty'); return; }
    if(Number(item.qty)<qty){ toast('err_stock'); return; }

    var unitPrice  = Number(item.price);
    var subtotal   = qty * unitPrice;
    var taxAmt     = Math.round(subtotal * taxPct / 100 * 100) / 100;
    var total      = Math.max(0, subtotal + taxAmt - discRupee);
    var now        = new Date();
    var nowISO     = now.toISOString();

    /* ── 1. Update stock locally first (optimistic) ── */
    item.qty = Number(item.qty) - qty;

    var sale = {
      id:            genId(user ? user.id : 'anon'),
      item_id:       item.id,
      name:          item.name,
      cat:           item.cat,
      qty:           qty,
      unit_price:    unitPrice,
      tax:           taxAmt,
      discount:      discRupee,
      total:         total,
      pay:           pay,
      time:          now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}),
      created_at:    nowISO,
      updated_at:    nowISO,
    };
    sales.unshift(sale);
    document.getElementById('s-qty').value='';
    drawAll();

    /* ── 2. Persist both stock and sale — attempt atomic RPC first ── */
    if(sbOK && _isOnline && user){
      try{
        /* Call Supabase RPC: record_sale handles INSERT sale + UPDATE item qty atomically */
        var r = await sb.rpc('record_sale',{
          p_user_id:          user.id,
          p_item_id:          item.id,
          p_sale_id:          sale.id,
          p_qty:              qty,
          p_unit_price_paise: toPaise(unitPrice),
          p_tax_paise:        toPaise(taxAmt),
          p_discount_paise:   toPaise(discRupee),
          p_total_paise:      toPaise(total),
          p_pay_mode:         pay,
          p_sale_time:        sale.time,
          p_created_at:       nowISO
        });
        if(r.error) throw r.error;
        /* Mark both as synced in IDB */
        sale.sync_status = 'synced';
        item.sync_status = 'synced';
        await Promise.all([ idbPut('kb_sales', sale), idbPut('kb_items', item) ]);
        syncBadge('sync_ok');
        return;
      }catch(e){
        /* RPC not set up yet or offline — fall through to queue */
        console.warn('record_sale RPC failed, queuing:', e.message);
      }
    }

    /* ── 3. Offline / RPC unavailable: queue both independently ── */
    await pItem(item, false);
    await pSale(sale);
  });

  /* ══ STORE NAME ══ */
  function loadStoreName(){
    var nm=localStorage.getItem('kb_store_name')||(lang==='hi'?'मेरा किराना स्टोर':'My Kirana Store');
    document.getElementById('store-name-display').textContent=nm;
  }
  window.editStoreName=function(){
    var cur=document.getElementById('store-name-display').textContent;
    document.getElementById('store-name-input').value=cur;
    document.getElementById('store-name-wrap').style.display='none';
    var wrap=document.getElementById('store-name-input-wrap');
    wrap.style.display='flex';
    document.getElementById('store-name-input').focus();
  };
  window.saveStoreName=function(){
    var val=(document.getElementById('store-name-input').value.trim()||'My Kirana Store').slice(0,60);
    localStorage.setItem('kb_store_name',val);
    document.getElementById('store-name-display').textContent=val;
    document.getElementById('store-name-input-wrap').style.display='none';
    document.getElementById('store-name-wrap').style.display='flex';
  };
  document.getElementById('store-name-input').addEventListener('keydown',function(e){
    if(e.key==='Enter') window.saveStoreName();
    if(e.key==='Escape'){ document.getElementById('store-name-input-wrap').style.display='none'; document.getElementById('store-name-wrap').style.display='flex'; }
  });

  /* ══ REPORTS ══ */


  /* ══ WHAT'S NEW — NEW FEATURES FIRST (Malik only) ══ */
  var NEW_FEATURES = [
    { version:'v19', date:'May 2026', title:'Multi-device support (up to 3)', desc:'Malik plan users can now use KiranaBook on up to 3 devices simultaneously — phone, tablet, and desktop.' },
    { version:'v19', date:'May 2026', title:'CSV Export', desc:'Export all your inventory, udhar, and sales data to a CSV file with one click from the Reports tab.' },
    { version:'v19', date:'May 2026', title:'GST-Style Bill Generator', desc:'Generate simple printable bills with CGST/SGST breakdown. Not a full Rule 46 GST invoice.' },
    { version:'v19', date:'May 2026', title:'Priority Support', desc:'Malik plan users now get priority email support at support@kiranabook.app — faster response times guaranteed.' },
  ];
  var SEEN_KEY='kb_seen_features_v19';

  function checkNewFeaturesDot(){
    var dot=document.getElementById('new-feat-dot');
    if(!dot) return;
    var seen=localStorage.getItem(SEEN_KEY);
    dot.style.display=seen?'none':'block';
  }

  window.showNewFeatures = function(){
    if(USER_PLAN!=='malik') return;
    localStorage.setItem(SEEN_KEY,'1');
    var dot=document.getElementById('new-feat-dot');
    if(dot) dot.style.display='none';
    var modal=document.getElementById('new-feat-modal');
    if(modal){ modal.style.display='flex'; }
  };
  window.closeNewFeatModal=function(){ document.getElementById('new-feat-modal').style.display='none'; };

  /* ══ GST BILL GENERATOR (Malik only) ══ */
  window.openGSTModal = function(){
    if(USER_PLAN!=='malik'){ toast('err_gst_locked'); return; }
    document.getElementById('gst-preview').style.display='none';
    document.getElementById('gst-modal').style.display='flex';
  };
  window.closeGSTModal = function(){ document.getElementById('gst-modal').style.display='none'; };

  window.generateAndPrintGSTBill = function(){
    /* All user inputs are treated as plain text — never concatenated into HTML.
       Every field goes through textContent assignment to prevent XSS. */
    var cust     = document.getElementById('gst-cust').value.trim();
    var gstin    = document.getElementById('gst-gstin').value.trim().toUpperCase();
    var itemName = document.getElementById('gst-item').value.trim();
    var qty      = parseInt(document.getElementById('gst-qty').value)||1;
    var rate     = parseFloat(document.getElementById('gst-rate').value)||0;
    var gstPct   = parseFloat(document.getElementById('gst-rate-pct').value);
    if(!cust||!itemName||!rate){ toast('err_gst_fields'); return; }

    /* Sanitise GSTIN: only allow valid GSTIN character set (15 alphanumeric) */
    gstin = gstin.replace(/[^A-Z0-9]/g,'').slice(0,15);

    var storeName = localStorage.getItem('kb_store_name')||'My Kirana Store';
    var billNo    = 'BILL/'+new Date().getFullYear()+'/'+String(Date.now()).slice(-5);
    var baseAmt   = Math.round(qty*rate*100)/100;
    var gstAmt    = Math.round(baseAmt*gstPct)/100;
    var cgst      = Math.round(gstAmt/2*100)/100;
    var sgst      = cgst;
    var total     = Math.round((baseAmt+gstAmt)*100)/100;
    var dateStr   = new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});

    /* ── Build preview entirely with DOM API — no innerHTML with user data ── */
    var prev = document.getElementById('gst-preview');
    prev.innerHTML = ''; /* clear previous — only static structure follows */

    function el(tag, styles, text){
      var node = document.createElement(tag);
      if(styles) node.style.cssText = styles;
      if(text !== undefined) node.textContent = text; /* safe: textContent never interprets HTML */
      return node;
    }
    function row(label, value, bold){
      var d = el('div','display:flex;justify-content:space-between;');
      var l = el('span','',label);
      var v = el('span', bold?'font-weight:700;':'', value);
      d.appendChild(l); d.appendChild(v); return d;
    }
    function divider(dashed){
      return el('div','border-top:1px '+(dashed?'dashed':'solid')+' #ccc;margin:8px 0;');
    }

    var wrap = el('div','font-family:monospace;font-size:12px;line-height:1.8;');

    /* Header */
    wrap.appendChild(el('div','text-align:center;font-weight:700;font-size:13px;margin-bottom:2px;letter-spacing:.5px;','SIMPLE GST-STYLE BILL'));
    wrap.appendChild(el('div','text-align:center;font-size:11px;color:#888;margin-bottom:6px;','(Not a full Rule 46 GST invoice)'));
    wrap.appendChild(el('div','text-align:center;font-size:13px;font-weight:600;',storeName));
    if(gstin){
      wrap.appendChild(el('div','text-align:center;font-size:11px;color:#666;','GSTIN: '+gstin));
    }
    wrap.appendChild(divider(true));

    /* Bill meta */
    var metaRow = el('div','display:flex;justify-content:space-between;');
    var billNoSpan = el('span','');
    billNoSpan.appendChild(el('span','','Bill No: '));
    var billNoB = el('b','',billNo);
    billNoSpan.appendChild(billNoB);
    metaRow.appendChild(billNoSpan);
    metaRow.appendChild(el('span','',dateStr));
    wrap.appendChild(metaRow);

    var custRow = el('div','');
    custRow.appendChild(el('span','','Customer: '));
    var custB = el('b','',cust);
    custRow.appendChild(custB);
    wrap.appendChild(custRow);
    wrap.appendChild(divider(true));

    /* Items table header */
    var thead = el('div','display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:2px;font-size:11px;font-weight:700;');
    ['Item','Qty','Rate','Amt'].forEach(function(h,i){
      thead.appendChild(el('span',i>0?'text-align:right':'',h));
    });
    wrap.appendChild(thead);

    /* Items table row */
    var trow = el('div','display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:2px;font-size:11px;border-top:1px solid #ccc;padding-top:4px;');
    [itemName, String(qty), '₹'+rate, '₹'+baseAmt.toFixed(2)].forEach(function(v,i){
      trow.appendChild(el('span',i>0?'text-align:right':'',v));
    });
    wrap.appendChild(trow);
    wrap.appendChild(divider(true));

    /* Totals */
    wrap.appendChild(row('Sub Total','₹'+baseAmt.toFixed(2)));
    if(gstPct>0){
      wrap.appendChild(row('CGST @ '+gstPct/2+'%','₹'+cgst.toFixed(2)));
      wrap.appendChild(row('SGST @ '+gstPct/2+'%','₹'+sgst.toFixed(2)));
    }
    var totalDiv = el('div','border-top:1px solid #333;margin:8px 0 0;display:flex;justify-content:space-between;font-weight:700;font-size:14px;padding-top:4px;');
    totalDiv.appendChild(el('span','','TOTAL'));
    totalDiv.appendChild(el('span','','₹'+total.toFixed(2)));
    wrap.appendChild(totalDiv);
    wrap.appendChild(el('div','text-align:center;font-size:11px;color:#888;margin-top:8px;','Thank you for your business! 🙏'));
    prev.appendChild(wrap);

    /* Print button — no user data in this element */
    var printBtn = document.createElement('button');
    printBtn.style.cssText = 'width:100%;margin-top:12px;padding:10px;background:#1a3a7a;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:Plus Jakarta Sans,sans-serif;';
    printBtn.textContent = '🖨️ Print Bill';
    printBtn.onclick = function(){ window.print(); };
    prev.appendChild(printBtn);

    prev.style.display='block';
    toast('gst_ok');
  };

  function updateGSTButton(){
    var btnOn=document.getElementById('btn-gst-open');
    var btnOff=document.getElementById('btn-gst-locked');
    if(!btnOn||!btnOff) return;
    if(USER_PLAN==='malik'){ btnOn.style.display=''; btnOff.style.display='none'; }
    else { btnOn.style.display='none'; btnOff.style.display=''; }
  }

  /* ══ EXPORT TO CSV (Malik plan only) ══ */
  function exportCSV(){
    if(USER_PLAN!=='malik'){ toast('err_export_locked'); return; }
    var rows=[['Type','Name/Customer','Category','Qty','Price','Total','Payment','Date/Note']];
    items.forEach(function(i){ rows.push(['Inventory',i.name,i.cat||'',i.qty,i.price,i.qty*i.price,'','']); });
    udhar.forEach(function(e){ rows.push(['Udhar',e.customer,'','',(e.type==='debit'?'+':'-')+e.amount,'','',e.note||'']); });
    sales.forEach(function(s){ rows.push(['Sale',s.name,s.cat||'',s.qty,'',s.total,s.pay,s.time||'']); });
    var csv=rows.map(function(r){ return r.map(function(c){ return '"'+(String(c).replace(/"/g,'""'))+'"'; }).join(','); }).join('\r\n');
    var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a'); a.href=url;
    a.download='KiranaBook_Export_'+new Date().toISOString().slice(0,10)+'.csv';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('export_ok');
  }

  function updateExportButton(){
    var btnOn=document.getElementById('btn-export-csv');
    var btnOff=document.getElementById('btn-export-locked');
    if(!btnOn||!btnOff) return;
    if(USER_PLAN==='malik'){ btnOn.style.display=''; btnOff.style.display='none'; }
    else { btnOn.style.display='none'; btnOff.style.display=''; }
  }


  /* ══ RAZORPAY PAYMENT INTEGRATION ══ */

  /* Called when user clicks "Start Dukandaar Plan" or "Start Malik Plan" */
  window.startPayment = async function(plan){
    var btnId = plan==='dukandaar' ? 'pc2-cta' : 'pc3-cta';
    var btn = document.getElementById(btnId);
    var origTxt = btn ? btn.textContent : '';

    /* Helper to restore button state */
    function restoreBtn(){ if(btn){ btn.textContent=origTxt; btn.disabled=false; } }

    /* Must be signed in first */
    if(!user){
      openModal('signup');
      return;
    }

    /* If Razorpay key is still placeholder, show "coming soon" modal instead */
    if(!RAZORPAY_KEY || RAZORPAY_KEY === 'rzp_test_YOUR_KEY_HERE'){
      document.getElementById('payment-coming-soon-modal').style.display='flex';
      return;
    }

    /* If Razorpay SDK not loaded, show error */
    if(typeof Razorpay === 'undefined'){
      alert('Payment gateway failed to load. Please check your internet connection and try again.');
      return;
    }

    var cycle = window._pricingCycle || 'monthly';
    var priceObj = PLAN_PRICES[plan];
    if(!priceObj){ console.error('Unknown plan:', plan); return; }
    var amount = cycle === 'annual' ? priceObj.annual : priceObj.monthly;
    var planName = cycle === 'annual' ? priceObj.annualName : priceObj.monthlyName;
    var nm = user.user_metadata&&user.user_metadata.full_name ? user.user_metadata.full_name : '';
    var email = user.email || '';

    if(btn){ btn.textContent='⏳ Loading...'; btn.disabled=true; }

    try{
      var options = {
        key: RAZORPAY_KEY,
        amount: amount,
        currency: 'INR',
        name: 'KiranaBook',
        description: planName + ' Plan',
        image: 'https://kiranabook-teal.vercel.app/icon-192.png',
        prefill: { name: nm, email: email },
        theme: { color: '#E8650A' },
        modal: { ondismiss: restoreBtn },
        handler: async function(response){
          if(btn){ btn.textContent='✅ Activating...'; }
          await activatePlan(plan, cycle, response.razorpay_payment_id);
          restoreBtn();
        }
      };
      var rzp = new Razorpay(options);
      rzp.on('payment.failed', function(resp){
        restoreBtn();
        alert('Payment failed: ' + (resp.error&&resp.error.description ? resp.error.description : 'Please try again.'));
      });
      rzp.open();
    } catch(e){
      console.error('Razorpay error:', e);
      restoreBtn();
      alert('Could not open payment. Please try again or contact support@kiranabook.app');
    }
  };

  /* Save subscription row in Supabase after successful payment */
  async function activatePlan(plan, cycle, paymentId){
    if(!sbOK||!user) return;
    /* Calculate expiry: monthly = 31 days, annual = 366 days */
    var days = cycle==='annual' ? 366 : 31;
    var expiresAt = new Date(Date.now() + days*24*60*60*1000).toISOString();
    try{
      /* Deactivate any existing active subscription */
      await sb.from('kb_subscriptions')
        .update({status:'superseded'})
        .eq('user_id', user.id)
        .eq('status','active');
      /* Insert new subscription */
      await sb.from('kb_subscriptions').insert({
        user_id:      user.id,
        plan:         plan,
        billing_cycle: cycle,
        status:       'active',
        payment_id:   paymentId,
        expires_at:   expiresAt,
        created_at:   new Date().toISOString()
      });
      /* Update in-memory plan */
      window.USER_PLAN = plan;
      window.BILLING_CYCLE = cycle;
      updatePlanBadge();
      if(typeof updateExportButton==='function') updateExportButton();
      if(typeof updateGSTButton==='function') updateGSTButton();
      /* Show success */
      showPaymentSuccess(plan);
    } catch(e){
      console.error('Failed to save subscription:', e);
      alert('Payment received but activation failed. Please contact support@kiranabook.app with payment ID: ' + paymentId);
    }
  }

  /* Success modal after payment */
  function showPaymentSuccess(plan){
    var planLabel = plan==='malik' ? 'Malik' : 'Dukandaar';
    var modal = document.getElementById('payment-success-modal');
    if(modal){
      document.getElementById('ps-plan-name').textContent = planLabel;
      modal.style.display='flex';
    } else {
      alert('🎉 Welcome to ' + planLabel + ' plan! All features are now unlocked.');
    }
  }
  window.closePaymentSuccess = function(){
    var m = document.getElementById('payment-success-modal');
    if(m) m.style.display='none';
  };

  /* Manage subscription — cancel or view */
  window.manageSubscription = async function(){
    if(!sbOK||!user) return;
    try{
      var r = await sb.from('kb_subscriptions')
        .select('plan,billing_cycle,status,expires_at,payment_id,created_at')
        .eq('user_id',user.id)
        .order('created_at',{ascending:false})
        .limit(5);
      var subs = r.data||[];
      var modal = document.getElementById('manage-sub-modal');
      var body  = document.getElementById('manage-sub-body');
      if(!modal||!body) return;
      if(!subs.length){
        body.innerHTML='<p style="color:var(--ink-3);font-size:14px;">No subscription history found.</p>';
      } else {
        body.innerHTML = subs.map(function(s){
          var exp = s.expires_at ? new Date(s.expires_at).toLocaleDateString('en-IN') : 'N/A';
          var created = new Date(s.created_at).toLocaleDateString('en-IN');
          var badge = s.status==='active'
            ? '<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">ACTIVE</span>'
            : '<span style="background:#f8d7da;color:#721c24;padding:2px 8px;border-radius:10px;font-size:11px;">'+s.status+'</span>';
          return '<div style="padding:10px 0;border-bottom:1px solid var(--border);">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;">' +
            '<span style="font-weight:600;text-transform:capitalize;">'+s.plan+' — '+s.billing_cycle+'</span>' + badge +
            '</div>' +
            '<div style="font-size:12px;color:var(--ink-3);margin-top:4px;">Started: '+created+' &nbsp;|&nbsp; Expires: '+exp+'</div>' +
            '<div style="font-size:11px;color:var(--ink-3);margin-top:2px;">Payment ID: '+s.payment_id+'</div>' +
            '</div>';
        }).join('');
      }
      modal.style.display='flex';
    } catch(e){ console.error('manage subscription error:', e); }
  };
  window.closeManageSub = function(){
    var m=document.getElementById('manage-sub-modal'); if(m) m.style.display='none';
  };
  window.cancelSubscription = async function(){
    if(!sbOK||!user) return;
    if(!confirm('Cancel your subscription? You will retain access until the current period expires.')) return;
    try{
      await sb.from('kb_subscriptions').update({status:'cancelled'}).eq('user_id',user.id).eq('status','active');
      alert('Subscription cancelled. Access continues until expiry.');
      window.closeManageSub();
    } catch(e){ alert('Could not cancel. Please email support@kiranabook.app'); }
  };

  function drawReports(){
    // Top 5 items by stock value
    var sorted=[].concat(items).sort(function(a,b){return (Number(b.qty)*Number(b.price))-(Number(a.qty)*Number(a.price));}).slice(0,5);
    var maxVal=sorted.length?Number(sorted[0].qty)*Number(sorted[0].price):1;
    var elItems=document.getElementById('rep-top-items');
    if(!sorted.length){elItems.innerHTML='<div class="report-empty">No inventory yet</div>';}
    else{elItems.innerHTML=sorted.map(function(it){
      var v=Number(it.qty)*Number(it.price);
      var pct=maxVal?Math.round(v/maxVal*100):0;
      return '<div class="report-bar-row"><span class="report-bar-label" title="'+escapeHtml(it.name)+'">'+escapeHtml(it.name.slice(0,12))+'</span>'+
        '<div class="report-bar-track"><div class="report-bar-fill" style="width:'+pct+'%"></div></div>'+
        '<span class="report-bar-val">'+rupee(v)+'</span></div>';
    }).join('');}

    // Payment split
    var payTotals={Cash:0,UPI:0,Udhar:0};
    sales.forEach(function(s){payTotals[s.pay]=(payTotals[s.pay]||0)+Number(s.total);});
    var totalSales=payTotals.Cash+payTotals.UPI+payTotals.Udhar;
    var elPay=document.getElementById('rep-pay-split');
    if(!totalSales){elPay.innerHTML='<div class="report-empty">No sales yet</div>';}
    else{var colors={Cash:'#2E7D32',UPI:'#1565C0',Udhar:'#E8650A'};
    elPay.innerHTML=Object.keys(payTotals).map(function(k){
      if(!payTotals[k])return '';
      var pct=Math.round(payTotals[k]/totalSales*100);
      return '<div class="pay-donut-row"><div class="pay-dot" style="background:'+colors[k]+'"></div>'+
        '<span class="pay-donut-label">'+k+' ('+pct+'%)</span>'+
        '<span class="pay-donut-val">'+rupee(payTotals[k])+'</span></div>';
    }).join('');}

    // Top udhar customers
    var tots=udharTotals();
    var custs=Object.keys(tots).filter(function(k){return tots[k]>0;}).sort(function(a,b){return tots[b]-tots[a];}).slice(0,5);
    var maxUdh=custs.length?tots[custs[0]]:1;
    var elUdh=document.getElementById('rep-top-udhar');
    if(!custs.length){elUdh.innerHTML='<div class="report-empty">No outstanding udhar</div>';}
    else{elUdh.innerHTML=custs.map(function(c){
      var pct=Math.round(tots[c]/maxUdh*100);
      return '<div class="report-bar-row"><span class="report-bar-label" title="'+escapeHtml(c)+'">'+escapeHtml(c.slice(0,12))+'</span>'+
        '<div class="report-bar-track"><div class="report-bar-fill" style="width:'+pct+'%;background:var(--red)"></div></div>'+
        '<span class="report-bar-val">'+rupee(tots[c])+'</span></div>';
    }).join('');}

    // Sales by category
    var catTot={};
    sales.forEach(function(s){catTot[s.cat]=(catTot[s.cat]||0)+Number(s.total);});
    var cats=Object.keys(catTot).sort(function(a,b){return catTot[b]-catTot[a];}).slice(0,5);
    var maxCat=cats.length?catTot[cats[0]]:1;
    var elCat=document.getElementById('rep-cat-sales');
    if(!cats.length){elCat.innerHTML='<div class="report-empty">No sales yet</div>';}
    else{elCat.innerHTML=cats.map(function(c){
      var pct=Math.round(catTot[c]/maxCat*100);
      return '<div class="report-bar-row"><span class="report-bar-label">'+emojiFor(c)+' '+c.slice(0,10)+'</span>'+
        '<div class="report-bar-track"><div class="report-bar-fill" style="width:'+pct+'%;background:var(--green)"></div></div>'+
        '<span class="report-bar-val">'+rupee(catTot[c])+'</span></div>';
    }).join('');}
  }

  /* ══ INIT ══ */
  /* If redirected back from OAuth, show processing state */
  if(window.location.hash && window.location.hash.indexOf('access_token')!==-1){
    var loadingEl = document.createElement('div');
    loadingEl.id = 'oauth-loading';
    loadingEl.style.cssText = 'position:fixed;inset:0;background:rgba(255,253,249,.95);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:Plus Jakarta Sans,sans-serif;flex-direction:column;gap:16px;';
    loadingEl.innerHTML = '<div style="width:40px;height:40px;border:3px solid #FDF0E8;border-top-color:#E8650A;border-radius:50%;animation:spin 0.8s linear infinite;"></div><div style="font-size:16px;font-weight:600;color:#1A1209;">Signing you in...</div>';
    document.body.appendChild(loadingEl);
    /* Remove after 5 seconds as fallback */
    setTimeout(function(){ var el=document.getElementById('oauth-loading'); if(el) el.remove(); }, 5000);
  }
  applyLang();
  /* Self-test: if we reach here, JS ran successfully */
  (function(){
    var b = document.getElementById('js-err-banner');
    if(b) b.style.display = 'none';
  })();

})();

/* ── PWA SERVICE WORKER REGISTRATION ── */
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(reg){
      /* Listen for background sync messages from SW */
      navigator.serviceWorker.addEventListener('message', function(e){
        if(e.data && e.data.type === 'SW_SYNC'){
          if(typeof flushQueue === 'function' && window.user && window._isOnline) flushQueue();
        }
      });
      /* Request background sync when going back online */
      window.addEventListener('online', function(){
        if(reg.sync){
          reg.sync.register('kb-sync').catch(function(){});
        }
      });
    }).catch(function(err){
      /* sw.js not found — app still works, just no offline shell caching.
         Deploy sw.js to the root of your domain to enable full offline support. */
      console.info('KiranaBook: sw.js not found — offline app shell caching disabled. Data sync via IndexedDB still works.');
    });
  });
}

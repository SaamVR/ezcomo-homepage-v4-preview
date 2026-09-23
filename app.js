(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  const templates = {
    threads:{name:'Threads',brand:'THREADS',visual:'Built for the city after dark.',eyebrow:'DROP 06 / EDITORIAL',templateVisual:'Objects for everyday movement.',desc:'Editorial apparel with room for campaigns, collections and strong visual identity.',bn:'ক্যাম্পেইন, কালেকশন ও ব্র্যান্ড স্টোরির জন্য তৈরি এডিটোরিয়াল ফ্যাশন স্টোর।'},
    electronics:{name:'Electronics',brand:'NEXUS',visual:'Technology that earns its place.',eyebrow:'FEATURED / PERFORMANCE',templateVisual:'Compare less. Choose better.',desc:'Product-first merchandising for shoppers comparing features and specifications.',bn:'ফিচার ও স্পেসিফিকেশন তুলনা করা ক্রেতাদের জন্য প্রোডাক্ট-কেন্দ্রিক স্টোর।'},
    crafts:{name:'Crafts',brand:'HANDMADE',visual:'Made slowly. Kept for years.',eyebrow:'MAKER / PROCESS',templateVisual:'Every object carries a handprint.',desc:'Maker-led storytelling for handmade products where process and origin matter.',bn:'হ্যান্ডমেড পণ্যে নির্মাতা, প্রক্রিয়া ও গল্পকে সামনে আনে।'},
    food:{name:'Food',brand:'TABLE',visual:'Good food, ready when you are.',eyebrow:'MENU / TODAY',templateVisual:'Fresh picks, easy ordering.',desc:'Menu-first presentation that keeps products easy to browse and order.',bn:'পণ্য দ্রুত দেখা ও অর্ডার করার জন্য মেনু-কেন্দ্রিক স্টোর।'}
  };

  const i18n = {
    en:{
      announcement:'Built for Bangladesh commerce — bKash, Nagad, COD and Pathao workflows.',announcementCta:'Explore storefronts',
      navWhy:'Why EZComo',navFeatures:'Features',navTemplates:'Templates',navIntegrations:'Integrations',navPricing:'Pricing',login:'Log in',startFree:'Start free',
      heroEyebrow:'Commerce built around Bangladesh',heroTitle:'Stop losing sales <em>inside the DMs.</em>',heroLede:'Give customers a branded store they can browse on their own, while products, orders, payments and delivery stay connected behind it.',
      createStore:'Create free store',seeStores:'See storefronts',trustNoCode:'No code required',trustTemplate:'Start from a template',trustLocal:'Local commerce workflows',
      paymentReady:'PAYMENT OPTIONS',configuredIn:'Configured in your workspace',structuredOrder:'STRUCTURED ORDER',readyFulfilment:'Ready for fulfilment',proofIntro:'One storefront. The work behind it, too.',
      bdKicker:'Built for Bangladesh',bdTitle:'Your business shouldn’t need a <em>foreign workaround.</em>',bdCopy:'EZComo is designed around the payment habits, delivery workflows and storefront expectations local merchants already work with.',
      bdPay:'Sell in familiar ways',bdPayCopy:'Offer bKash, Nagad and cash on delivery in the storefront.',bdDeliver:'Move orders into delivery',bdDeliverCopy:'Pathao merchant-API booking is available when configured.',bdBrand:'Own the customer experience',bdBrandCopy:'Use a branded storefront and connect an eligible custom domain.',bdTogether:'Keep operations together',bdTogetherCopy:'Products, orders, store settings and selling setup live in one workspace.',
      painKicker:'The shift',painTitle:'From message chaos to a store customers can use.',painIntro:'Social channels are great for discovery. They become painful when every product question, order detail and delivery update has to be handled manually.',beforeLabel:'BEFORE · DMs',afterLabel:'AFTER · EZCOMO',chat1:'Price please?',chat2:'Which size is available?',chat3:'Do you have COD?',chat4:'Where is my order?',chaosFoot:'Important order details scattered across conversations.',system1:'Product details visible',system2:'Order captured',system3:'Payment method recorded',system4:'Fulfilment workflow',done:'ready',systemFoot:'One structured merchant workflow',
      howKicker:'How it works',howTitle:'Three steps. No blank-canvas anxiety.',howCopy:'Start from something complete, make it yours, then run the business from the same system.',step1:'Pick a storefront',step1Copy:'Choose a starting point shaped for the way your category sells.',step2:'Add your business',step2Copy:'Products, imagery, brand details, payment options and delivery setup.',step3:'Publish and manage',step3Copy:'Receive structured orders and manage the work behind each sale.',
      featuresKicker:'Commerce workspace',featuresTitle:'Beautiful outside. Operational underneath.',featuresCopy:'The storefront is only one surface. The same system keeps the products, orders, payment setup and delivery work that power it.',builderTitle:'Try editing a storefront right here.',builderCopy:'Click the words, rewrite them, drag them anywhere inside the section, or change the section color. No setup and no code.',editorTitle:'Store editor',editorPreview:'Preview',editorLive:'Live changes',editorReset:'Reset demo',editorBlocks:'BLOCKS',editorHero:'Hero',editorProducts:'Products',editorPromo:'Promo',editorTrust:'Trust',editorTry:'Try it',editorTryHint:'Click text → type → drag',editorSelected:'SELECTED',editorTextLayer:'Text layer',editorText:'Text',editorColor:'Section color',editorPosition:'Position',editorHelp:'Drag the handle to place text anywhere inside the selected section.',payTitle:'Payments that make sense locally.',payCopy:'bKash, Nagad and cash-on-delivery options, with automated bKash checkout available when connected.',deliveryTitle:'Orders that move into fulfilment.',deliveryCopy:'Book Pathao from the order workflow when configured, with additional courier setup paths available.',active:'active',workflowLabel:'LIVE ORDER WORKFLOW · SIMULATED',workflowTitle:'See what happens after a customer clicks Order.',workflowCopy:'A short illustrative run from checkout to courier, stock and margin tracking.',workflowRun:'Run order workflow',workflowWaiting:'Waiting',workflowRunning:'Running',workflowComplete:'Complete',placeOrder:'Place order',workflowDisclaimer:'Illustrative demo data',automationRunner:'AUTOMATION RUNNER',stepPayment:'PAYMENT',stepPaymentTitle:'Payment received',stepOrder:'ORDER',stepOrderTitle:'Order received',stepCourier:'FULFILMENT',stepCourierTitle:'Book courier',bookCourier:'Book courier',stepBookedTitle:'Courier booked',stepPickup:'PICKUP',stepPickupTitle:'Courier picked up',collected:'Collected',stepInventory:'INVENTORY',stepInventoryTitle:'Stock updated',stepProfit:'MARGIN',stepProfitTitle:'Profit booked',workflowResult:'Order complete — every next action is visible.',workflowResultNote:'Example margin assumes merchant cost data is configured.',adminTitle:'The next jobs that need attention, together.',adminCopy:'Storefront, store profile, payments and recent orders stay visible in the same operating surface.',domainTitle:'Your own branded domain.',domainCopy:'Eligible paid plans can connect a custom domain after DNS setup and verification.',
      templatesKicker:'Storefront directions',templatesTitle:'Same platform. Different selling personality.',threadsDesc:'Editorial apparel',electronicsDesc:'Specification-led',craftsDesc:'Maker storytelling',foodDesc:'Menu-first commerce',selectedDirection:'SELECTED DIRECTION',openPreview:'Open preview',useTemplate:'Use this template',
      integrationsKicker:'Commerce connections',integrationsTitle:'Know what is active before you depend on it.',integrationsCopy:'EZComo exposes connection state clearly instead of pretending every logo means the same thing.',payments:'PAYMENTS',delivery:'DELIVERY',storefront:'STOREFRONT',autoConnected:'Automated when connected',storeOption:'Storefront option',merchantApi:'Merchant API booking',setupAvailable:'Setup available',customDomain:'Custom domain',eligiblePlans:'Eligible paid plans',responsiveStore:'Responsive store',allScreens:'Phone to desktop',
      calcKicker:'Illustrative cost check',calcTitle:'Use your numbers, not ours.',calcCopy:'Compare the percentage cost you currently enter with an EZComo plan amount you enter. This tool does not assume a competitor fee or promise savings.',calcNote:'Illustrative only — verify real plan and provider charges before deciding.',monthlySales:'Monthly sales',currentCost:'Current platform / manual cost',planInput:'EZComo plan amount to compare',annualDifference:'Illustrative annual difference',
      pricingKicker:'Pricing',pricingTitle:'Start free. Upgrade when the business needs more.',pricingCopy:'Current prices and limits are published on the plans page so you can compare before committing.',comparePlans:'Compare current plans',
      faqTitle:'The questions that matter before you move beyond DMs.',faqStart:'Getting started',faqPayments:'Payments',faqDelivery:'Delivery',faqDomains:'Domains',anotherQuestion:'Have another question?',talkSupport:'Talk to support',
      closingKicker:'Your next storefront',closingTitle:'Let customers shop while you get back to running the business.',closingCopy:'Pick a direction, start free and carry that storefront choice directly into setup.',browseAgain:'Browse storefronts again',
      product:'Product',support:'Support',helpCenter:'Help center',legal:'Legal',privacy:'Privacy',terms:'Terms',billing:'Billing policy',footerTag:'A storefront customers can use. A workspace merchants can run.',previewLabel:'Design preview · no merchant data is changed here.',stickyText:'Ready to give customers somewhere better than the DM inbox?'
    },
    bn:{
      announcement:'বাংলাদেশি কমার্সের জন্য তৈরি — bKash, Nagad, COD ও Pathao ওয়ার্কফ্লো।',announcementCta:'স্টোরফ্রন্ট দেখুন',
      navWhy:'কেন EZComo',navFeatures:'ফিচার',navTemplates:'টেমপ্লেট',navIntegrations:'ইন্টিগ্রেশন',navPricing:'মূল্য',login:'লগ ইন',startFree:'ফ্রি শুরু করুন',
      heroEyebrow:'বাংলাদেশকে কেন্দ্র করে তৈরি কমার্স',heroTitle:'DM-এর ভিড়ে <em>বিক্রি হারাবেন না।</em>',heroLede:'ক্রেতাদের নিজের মতো ব্রাউজ করার জন্য একটি ব্র্যান্ডেড স্টোর দিন, আর পণ্য, অর্ডার, পেমেন্ট ও ডেলিভারির কাজ একই সিস্টেমে রাখুন।',
      createStore:'ফ্রি স্টোর তৈরি করুন',seeStores:'স্টোরফ্রন্ট দেখুন',trustNoCode:'কোড লাগবে না',trustTemplate:'টেমপ্লেট থেকে শুরু',trustLocal:'লোকাল কমার্স ওয়ার্কফ্লো',
      paymentReady:'পেমেন্ট অপশন',configuredIn:'আপনার ওয়ার্কস্পেসে কনফিগার করা',structuredOrder:'গোছানো অর্ডার',readyFulfilment:'ফুলফিলমেন্টের জন্য প্রস্তুত',proofIntro:'একটি স্টোরফ্রন্ট। পিছনের কাজও একই জায়গায়।',
      bdKicker:'বাংলাদেশের জন্য তৈরি',bdTitle:'আপনার ব্যবসার জন্য <em>বিদেশি workaround দরকার হওয়া উচিত নয়।</em>',bdCopy:'EZComo স্থানীয় ব্যবসায়ীদের পরিচিত পেমেন্ট, ডেলিভারি ও স্টোরফ্রন্ট অভ্যাসকে কেন্দ্র করে তৈরি।',
      bdPay:'পরিচিত উপায়ে বিক্রি করুন',bdPayCopy:'স্টোরে bKash, Nagad ও ক্যাশ অন ডেলিভারি দিন।',bdDeliver:'অর্ডার ডেলিভারিতে পাঠান',bdDeliverCopy:'কনফিগার করা থাকলে Pathao merchant API booking ব্যবহার করা যায়।',bdBrand:'কাস্টমার অভিজ্ঞতা নিজের রাখুন',bdBrandCopy:'নিজস্ব ব্র্যান্ডেড স্টোরফ্রন্ট ও যোগ্য প্ল্যানে কাস্টম ডোমেইন ব্যবহার করুন।',bdTogether:'অপারেশন একসাথে রাখুন',bdTogetherCopy:'পণ্য, অর্ডার, স্টোর সেটিং ও সেলিং সেটআপ একই ওয়ার্কস্পেসে।',
      painKicker:'পরিবর্তনটা',painTitle:'মেসেজের বিশৃঙ্খলা থেকে ক্রেতার ব্যবহারযোগ্য স্টোরে।',painIntro:'সোশ্যাল চ্যানেল নতুন ক্রেতা আনে, কিন্তু প্রতিটি দাম, সাইজ, অর্ডার আর ডেলিভারি প্রশ্ন হাতে সামলাতে হলে কাজ জটিল হয়ে যায়।',beforeLabel:'আগে · DM',afterLabel:'পরে · EZCOMO',chat1:'দাম কত?',chat2:'কোন সাইজ আছে?',chat3:'COD আছে?',chat4:'আমার অর্ডার কোথায়?',chaosFoot:'গুরুত্বপূর্ণ অর্ডার তথ্য আলাদা আলাদা কথোপকথনে ছড়িয়ে থাকে।',system1:'পণ্যের তথ্য দৃশ্যমান',system2:'অর্ডার ধরা হয়েছে',system3:'পেমেন্ট পদ্ধতি রেকর্ড',system4:'ফুলফিলমেন্ট ওয়ার্কফ্লো',done:'প্রস্তুত',systemFoot:'একটি গোছানো মার্চেন্ট ওয়ার্কফ্লো',
      howKicker:'কীভাবে কাজ করে',howTitle:'তিন ধাপ। Blank canvas-এর ভয় নেই।',howCopy:'সম্পূর্ণ একটি ডিজাইন থেকে শুরু করুন, নিজের মতো করুন, তারপর একই সিস্টেমে ব্যবসা চালান।',step1:'স্টোরফ্রন্ট বেছে নিন',step1Copy:'আপনার ক্যাটাগরির বিক্রির ধরন অনুযায়ী শুরু করার ডিজাইন বেছে নিন।',step2:'ব্যবসার তথ্য যোগ করুন',step2Copy:'পণ্য, ছবি, ব্র্যান্ড, পেমেন্ট ও ডেলিভারি সেটআপ করুন।',step3:'পাবলিশ ও ম্যানেজ করুন',step3Copy:'গোছানো অর্ডার নিন এবং প্রতিটি বিক্রির পরের কাজ পরিচালনা করুন।',
      featuresKicker:'কমার্স ওয়ার্কস্পেস',featuresTitle:'বাইরে সুন্দর। ভিতরে অপারেশনাল।',featuresCopy:'স্টোরফ্রন্ট শুধু একটি সারফেস। পণ্য, অর্ডার, পেমেন্ট সেটআপ ও ডেলিভারি কাজ একই সিস্টেমে থাকে।',builderTitle:'এখানেই স্টোরফ্রন্ট এডিট করে দেখুন।',builderCopy:'লেখায় ক্লিক করে বদলান, সেকশনের ভেতরে যেকোনো জায়গায় টেনে নিন, অথবা সেকশনের রং পাল্টান। কোনো সেটআপ বা কোড নেই।',editorTitle:'স্টোর এডিটর',editorPreview:'প্রিভিউ',editorLive:'লাইভ পরিবর্তন',editorReset:'ডেমো রিসেট',editorBlocks:'ব্লক',editorHero:'হিরো',editorProducts:'পণ্য',editorPromo:'প্রোমো',editorTrust:'ট্রাস্ট',editorTry:'চেষ্টা করুন',editorTryHint:'লেখায় ক্লিক → টাইপ → ড্র্যাগ',editorSelected:'নির্বাচিত',editorTextLayer:'টেক্সট লেয়ার',editorText:'লেখা',editorColor:'সেকশনের রং',editorPosition:'অবস্থান',editorHelp:'হ্যান্ডেল টেনে নির্বাচিত সেকশনের ভেতরে লেখাটি যেকোনো জায়গায় রাখুন।',payTitle:'লোকাল পেমেন্টের জন্য তৈরি।',payCopy:'bKash, Nagad ও COD; সংযোগ করা থাকলে automated bKash checkout পাওয়া যায়।',deliveryTitle:'অর্ডার থেকে ফুলফিলমেন্টে যান।',deliveryCopy:'কনফিগার করা থাকলে অর্ডার ওয়ার্কফ্লো থেকে Pathao booking করুন।',active:'সক্রিয়',workflowLabel:'লাইভ অর্ডার ওয়ার্কফ্লো · সিমুলেশন',workflowTitle:'ক্রেতা Order চাপার পর কী হয় দেখুন।',workflowCopy:'Checkout থেকে courier, stock এবং margin tracking পর্যন্ত একটি সংক্ষিপ্ত illustrative run।',workflowRun:'অর্ডার ওয়ার্কফ্লো চালান',workflowWaiting:'অপেক্ষায়',workflowRunning:'চলছে',workflowComplete:'সম্পন্ন',placeOrder:'অর্ডার করুন',workflowDisclaimer:'উদাহরণভিত্তিক ডেমো ডেটা',automationRunner:'অটোমেশন রানার',stepPayment:'পেমেন্ট',stepPaymentTitle:'পেমেন্ট পাওয়া গেছে',stepOrder:'অর্ডার',stepOrderTitle:'অর্ডার এসেছে',stepCourier:'ফুলফিলমেন্ট',stepCourierTitle:'কুরিয়ার বুক করুন',bookCourier:'কুরিয়ার বুক করুন',stepBookedTitle:'কুরিয়ার বুক হয়েছে',stepPickup:'পিকআপ',stepPickupTitle:'কুরিয়ার পণ্য নিয়েছে',collected:'সংগ্রহ করা হয়েছে',stepInventory:'ইনভেন্টরি',stepInventoryTitle:'স্টক আপডেট হয়েছে',stepProfit:'মার্জিন',stepProfitTitle:'প্রফিট বুক হয়েছে',workflowResult:'অর্ডার সম্পন্ন — প্রতিটি পরের কাজ দৃশ্যমান।',workflowResultNote:'উদাহরণ মার্জিন ধরে নেয় merchant cost data কনফিগার করা আছে।',adminTitle:'পরের কাজগুলো একসাথে দেখুন।',adminCopy:'স্টোরফ্রন্ট, প্রোফাইল, পেমেন্ট ও সাম্প্রতিক অর্ডার একই অপারেটিং সারফেসে।',domainTitle:'নিজস্ব ব্র্যান্ডেড ডোমেইন।',domainCopy:'যোগ্য paid plan-এ DNS setup ও verification-এর পর custom domain যুক্ত করা যায়।',
      templatesKicker:'স্টোরফ্রন্ট দিক',templatesTitle:'একই প্ল্যাটফর্ম। আলাদা বিক্রির ব্যক্তিত্ব।',threadsDesc:'এডিটোরিয়াল ফ্যাশন',electronicsDesc:'স্পেসিফিকেশন-কেন্দ্রিক',craftsDesc:'নির্মাতার গল্প',foodDesc:'মেনু-কেন্দ্রিক কমার্স',selectedDirection:'নির্বাচিত দিক',openPreview:'প্রিভিউ খুলুন',useTemplate:'এই টেমপ্লেট ব্যবহার করুন',
      integrationsKicker:'কমার্স কানেকশন',integrationsTitle:'নির্ভর করার আগে কোনটা সক্রিয় জানুন।',integrationsCopy:'সব লোগোকে একইভাবে দেখানোর বদলে EZComo বর্তমান connection state পরিষ্কারভাবে দেখায়।',payments:'পেমেন্ট',delivery:'ডেলিভারি',storefront:'স্টোরফ্রন্ট',autoConnected:'কানেক্ট হলে automated',storeOption:'স্টোরফ্রন্ট অপশন',merchantApi:'Merchant API booking',setupAvailable:'Setup available',customDomain:'Custom domain',eligiblePlans:'যোগ্য paid plan',responsiveStore:'Responsive store',allScreens:'ফোন থেকে ডেস্কটপ',
      calcKicker:'উদাহরণভিত্তিক খরচ হিসাব',calcTitle:'আমাদের নয়, আপনার সংখ্যা ব্যবহার করুন।',calcCopy:'আপনি বর্তমানে যে শতাংশ খরচ দেন, সেটার সাথে নিজের দেয়া EZComo plan amount তুলনা করুন। এটি কোনো competitor fee ধরে নেয় না বা savings প্রতিশ্রুতি দেয় না।',calcNote:'শুধু উদাহরণ — সিদ্ধান্তের আগে আসল plan ও provider charge যাচাই করুন।',monthlySales:'মাসিক বিক্রি',currentCost:'বর্তমান platform / manual cost',planInput:'তুলনার জন্য EZComo plan amount',annualDifference:'উদাহরণভিত্তিক বার্ষিক পার্থক্য',
      pricingKicker:'মূল্য',pricingTitle:'ফ্রি শুরু করুন। ব্যবসার প্রয়োজন বাড়লে upgrade করুন।',pricingCopy:'বর্তমান মূল্য ও limit public plans page-এ দেখা যায়, তাই commit করার আগে compare করতে পারবেন।',comparePlans:'বর্তমান plan তুলনা করুন',
      faqTitle:'DM-এর বাইরে যাওয়ার আগে গুরুত্বপূর্ণ প্রশ্নগুলো।',faqStart:'শুরু করা',faqPayments:'পেমেন্ট',faqDelivery:'ডেলিভারি',faqDomains:'ডোমেইন',anotherQuestion:'আরও প্রশ্ন আছে?',talkSupport:'সাপোর্টের সাথে কথা বলুন',
      closingKicker:'আপনার পরের স্টোরফ্রন্ট',closingTitle:'ক্রেতাদের নিজে কেনাকাটা করতে দিন, আপনি ব্যবসা চালাতে ফিরুন।',closingCopy:'একটি দিক বেছে নিন, ফ্রি শুরু করুন, আর সেই স্টোরফ্রন্ট পছন্দ setup-এ সাথে নিয়ে যান।',browseAgain:'আবার স্টোরফ্রন্ট দেখুন',
      product:'প্রোডাক্ট',support:'সাপোর্ট',helpCenter:'হেল্প সেন্টার',legal:'লিগ্যাল',privacy:'প্রাইভেসি',terms:'টার্মস',billing:'বিলিং পলিসি',footerTag:'ক্রেতার ব্যবহারযোগ্য স্টোরফ্রন্ট। মার্চেন্টের চালানোর মতো ওয়ার্কস্পেস।',previewLabel:'ডিজাইন প্রিভিউ · এখানে merchant data পরিবর্তন হয় না।',stickyText:'DM inbox-এর চেয়ে ভালো জায়গা ক্রেতাদের দিতে প্রস্তুত?'
    }
  };

  const faq = {
    en:{
      start:[['Do I need to code?','No. Start from a complete storefront and use visual controls to shape the store.'],['What happens after Start free?','Create your account, name the store, choose its URL, confirm a storefront direction, complete setup, then continue into the merchant workspace.'],['Can I keep selling through social media?','Yes. Social channels can continue to drive discovery while EZComo gives customers a structured storefront and order path.']],
      payments:[['Which payment methods can I offer?','The storefront supports bKash, Nagad and cash on delivery. Automated bKash checkout is available when a supported merchant connection is active.'],['Does EZComo promise zero gateway fees?','No. Gateway or provider fees depend on your merchant arrangement. Check provider terms and current plan details before launch.']],
      delivery:[['Which courier flow is active?','Pathao merchant-API booking is available from the order workflow when configured.'],['What about other couriers?','Steadfast, REDX, eCourier and Paperfly currently have setup flows. Check your store connection state before relying on automation.']],
      domains:[['Can I use my own domain?','Yes, when custom-domain access is enabled for your store and you have an eligible active paid plan. DNS setup and verification are required.'],['Can I change the storefront later?','Yes. You can change visual presentation without recreating the product catalog from zero.']]
    },
    bn:{
      start:[['কোড জানা লাগবে?','না। সম্পূর্ণ একটি storefront থেকে শুরু করে visual control দিয়ে স্টোর নিজের মতো করুন।'],['Start free চাপার পর কী হবে?','Account তৈরি করুন, store name ও URL দিন, storefront direction নিশ্চিত করুন, setup শেষ করে merchant workspace-এ যান।'],['Social media-তে বিক্রি চালিয়ে যেতে পারি?','হ্যাঁ। Social channel discovery আনতে পারে, আর EZComo structured storefront ও order path দেয়।']],
      payments:[['কোন payment method দিতে পারি?','Storefront-এ bKash, Nagad ও cash on delivery support আছে। Supported merchant connection active থাকলে automated bKash checkout পাওয়া যায়।'],['EZComo কি zero gateway fee প্রতিশ্রুতি দেয়?','না। Gateway বা provider fee আপনার merchant arrangement-এর ওপর নির্ভর করে। Launch-এর আগে provider terms ও current plan details দেখুন।']],
      delivery:[['কোন courier flow active?','Configure করা থাকলে order workflow থেকে Pathao merchant-API booking পাওয়া যায়।'],['অন্য courier কী হবে?','Steadfast, REDX, eCourier ও Paperfly-এর setup flow আছে। Automation-এর ওপর নির্ভর করার আগে store connection state দেখুন।']],
      domains:[['নিজের domain ব্যবহার করতে পারি?','হ্যাঁ, যদি custom-domain access enabled থাকে এবং eligible active paid plan থাকে। DNS setup ও verification লাগবে।'],['পরে storefront বদলাতে পারি?','হ্যাঁ। Product catalog নতুন করে না বানিয়ে visual presentation বদলানো যায়।']]
    }
  };

  let lang='en', selected='threads', faqCategory='start';

  function applyLanguage(next){
    lang=next; document.documentElement.lang=lang==='bn'?'bn':'en'; document.body.classList.toggle('bn',lang==='bn');
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18n[lang][key])el.textContent=i18n[lang][key]});
    $$('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;if(i18n[lang][key])el.innerHTML=i18n[lang][key]});
    const toggle=$('#langToggle'); if(toggle){toggle.querySelectorAll('span').forEach((el,i)=>el.classList.toggle('active',(lang==='en'&&i===0)||(lang==='bn'&&i===1))); toggle.querySelectorAll('span').forEach((el,i)=>el.style.color=((lang==='en'&&i===0)||(lang==='bn'&&i===1))?'var(--ink)':'var(--muted)');}
    renderFaq(); updateTemplateText(); window.__syncEditor?.(); window.__syncWorkflowLanguage?.();
  }

  function updateSignup(){
    $$('[data-signup]').forEach(a=>a.href=`https://ezcomo.shop/signup?template=${encodeURIComponent(selected)}`);
    const close=$('#closingSignup'); if(close) close.textContent=lang==='bn'?`${templates[selected].name} দিয়ে শুরু করুন`:`Start with ${templates[selected].name}`;
  }

  function selectTemplate(id,source='full'){
    if(!templates[id]) return; selected=id; const data=templates[id];
    $$('.store-tab').forEach(b=>{const a=b.dataset.template===id;b.classList.toggle('active',a);b.setAttribute('aria-selected',String(a))});
    $$('.template-option').forEach(b=>{const a=b.dataset.templateFull===id;b.classList.toggle('active',a);b.setAttribute('aria-selected',String(a))});
    const heroVisual=$('#heroStoreVisual');
    if(heroVisual){
      heroVisual.dataset.templateVisual=id;
      heroVisual.classList.remove('visual-switch');
      void heroVisual.offsetWidth;
      heroVisual.classList.add('visual-switch');
      setTimeout(()=>heroVisual.classList.remove('visual-switch'),650);
    }
    const title=$('#heroWindowTitle'); if(title) title.textContent=`${data.name} · live preview`;
    if($('#visualHeadline')) $('#visualHeadline').textContent=data.visual;
    const templateVisual=$('#templateVisual');
    if(templateVisual){
      templateVisual.dataset.templateVisual=id;
      templateVisual.classList.remove('visual-switch');
      void templateVisual.offsetWidth;
      templateVisual.classList.add('visual-switch');
      setTimeout(()=>templateVisual.classList.remove('visual-switch'),650);
    }
    if($('#templateBrand')) $('#templateBrand').textContent=data.brand;
    if($('#templateEyebrow')) $('#templateEyebrow').textContent=data.eyebrow;
    if($('#templateVisualTitle')) $('#templateVisualTitle').textContent=data.templateVisual;
    $('#templateTitle').textContent=data.name; $('#templateDescription').textContent=lang==='bn'?data.bn:data.desc; $('#templateLabel').textContent=`${data.name} · template`;
    const index=Object.keys(templates).indexOf(id)+1; $('#templateCount').textContent=String(index).padStart(2,'0');
    $('#templatePreviewLink').href=`https://ecomcms-homepage-preview-production.up.railway.app/template-snapshot/${id}`;
    updateSignup();
  }
  function updateTemplateText(){ const d=templates[selected]; if(d&&$('#templateDescription')) $('#templateDescription').textContent=lang==='bn'?d.bn:d.desc; updateSignup(); }

  $$('.store-tab').forEach(b=>b.addEventListener('click',()=>selectTemplate(b.dataset.template,'hero')));
  $$('.template-option').forEach(b=>b.addEventListener('click',()=>selectTemplate(b.dataset.templateFull,'full')));

  $('#langToggle')?.addEventListener('click',()=>applyLanguage(lang==='en'?'bn':'en'));
  $('#themeToggle')?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;sessionStorage.setItem('ezcomo-v4-theme',next)});
  const rememberedTheme=sessionStorage.getItem('ezcomo-v4-theme'); if(rememberedTheme) document.documentElement.dataset.theme=rememberedTheme;

  const menu=$('#mobileNav'), menuBtn=$('#menuToggle');
  const closeMenu=()=>{menu?.classList.remove('open');menu?.setAttribute('aria-hidden','true');menuBtn?.setAttribute('aria-expanded','false')};
  menuBtn?.addEventListener('click',()=>{const open=menuBtn.getAttribute('aria-expanded')!=='true';menuBtn.setAttribute('aria-expanded',String(open));menu?.classList.toggle('open',open);menu?.setAttribute('aria-hidden',String(!open))});
  $$('#mobileNav a').forEach(a=>a.addEventListener('click',closeMenu)); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

  const ann=$('#announcement'); if(sessionStorage.getItem('ezcomo-v4-announcement')==='1')ann?.classList.add('hide');
  $('#announcementClose')?.addEventListener('click',()=>{ann?.classList.add('hide');sessionStorage.setItem('ezcomo-v4-announcement','1')});

  function renderFaq(){
    const list=$('#faqList'); if(!list)return; $$('.faq-tab').forEach(b=>b.classList.toggle('active',b.dataset.faq===faqCategory));
    list.innerHTML=faq[lang][faqCategory].map((x,i)=>`<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-a-${i}"><span>${x[0]}</span><b aria-hidden="true">+</b></button><div class="faq-answer" id="faq-a-${i}">${x[1]}</div></article>`).join('');
    $$('.faq-question',list).forEach(btn=>btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));btn.querySelector('b').textContent=open?'+':'−'}));
  }
  $$('.faq-tab').forEach(b=>b.addEventListener('click',()=>{faqCategory=b.dataset.faq;renderFaq()}));

  const ranges={sales:$('#salesRange'),cost:$('#costRange'),plan:$('#planRange')};
  const fmt=n=>new Intl.NumberFormat(lang==='bn'?'bn-BD':'en-BD',{maximumFractionDigits:0}).format(n);
  function updateCalc(){
    const sales=Number(ranges.sales?.value||0),pct=Number(ranges.cost?.value||0),plan=Number(ranges.plan?.value||0),current=sales*pct/100*12,ez=plan*12,diff=current-ez;
    $('#salesValue').textContent=fmt(sales);$('#costValue').textContent=pct.toFixed(1);$('#planValue').textContent=fmt(plan);$('#annualValue').textContent=`${diff<0?'−':''}৳${fmt(Math.abs(diff))}`;
    $('#annualDetail').textContent=lang==='bn'?`বর্তমান খরচের হিসাব ৳${fmt(current)}/বছর · EZComo input ৳${fmt(ez)}/বছর`:`Current cost estimate ৳${fmt(current)}/yr · EZComo input ৳${fmt(ez)}/yr`;
  }
  Object.values(ranges).forEach(r=>r?.addEventListener('input',updateCalc));

  // Interactive editor demo: editable text, constrained freeform positioning and color controls.
  const editor=$('#editorDemo');
  if(editor){
    const canvas=$('#editorCanvas');
    const inspectorInput=$('#editorTextInput');
    const positionReadout=$('#positionReadout');
    const inspectorName=$('#inspectorLayerName');
    const labels={
      en:{heroTitle:'Hero headline',productsTitle:'Products heading',promoTitle:'Promo message',trustTitle:'Trust strip'},
      bn:{heroTitle:'হিরো হেডলাইন',productsTitle:'পণ্যের শিরোনাম',promoTitle:'প্রোমো বার্তা',trustTitle:'ট্রাস্ট স্ট্রিপ'}
    };
    const initial={
      heroTitle:{text:'Make the everyday unmistakably yours.',left:'8%',top:'29%'},
      productsTitle:{text:'New this week',left:'7%',top:'14%'},
      promoTitle:{text:'Free delivery over ৳1,500',left:'12%',top:'32%'},
      trustTitle:{text:'bKash · Nagad · COD · Pathao',left:'8%',top:'30%'}
    };
    const sectionColors={heroBlock:'#d8b16c',productsBlock:'#e8e4da',promoBlock:'#36483f',trustBlock:'#6e8d79'};
    let selectedLayer=$('.editable-layer',editor);

    const reactEditor=()=>{
      editor.classList.remove('editor-reacting');
      void editor.offsetWidth;
      editor.classList.add('editor-reacting');
      setTimeout(()=>editor.classList.remove('editor-reacting'),620);
      $('.editor-palette-tip',editor)?.classList.add('used');
    };
    const readableText=hex=>{
      const v=hex.replace('#','');
      const rgb=v.length===3?v.split('').map(x=>parseInt(x+x,16)):[parseInt(v.slice(0,2),16),parseInt(v.slice(2,4),16),parseInt(v.slice(4,6),16)];
      const luminance=(.299*rgb[0]+.587*rgb[1]+.114*rgb[2]);
      return luminance>150?'#171915':'#f3f8f5';
    };
    const syncInspector=()=>{
      if(!selectedLayer) return;
      const text=$('.editable-text',selectedLayer);
      const key=selectedLayer.dataset.editable;
      const section=selectedLayer.closest('.editor-section');
      if(inspectorInput) inspectorInput.value=text?.textContent?.trim()||'';
      if(inspectorName) inspectorName.textContent=labels[lang]?.[key]||(lang==='bn'?'টেক্সট লেয়ার':'Text layer');
      if(positionReadout && section){
        const dx=Number(selectedLayer.dataset.dx||0),dy=Number(selectedLayer.dataset.dy||0);
        const x=(selectedLayer.offsetLeft+dx)/section.clientWidth*100;
        const y=(selectedLayer.offsetTop+dy)/section.clientHeight*100;
        positionReadout.textContent=`X ${Math.round(x)}% · Y ${Math.round(y)}%`;
      }
    };
    window.__syncEditor=syncInspector;
    const selectLayer=layer=>{
      if(!layer) return;
      selectedLayer=layer;
      $$('.editable-layer',editor).forEach(el=>el.classList.toggle('selected',el===layer));
      const section=layer.closest('.editor-section');
      $$('.editor-section',editor).forEach(el=>el.classList.toggle('active',el===section));
      $$('.editor-block-btn',editor).forEach(btn=>btn.classList.toggle('active',btn.dataset.editorTarget===section?.id));
      syncInspector();
    };
    const selectSection=section=>{
      if(!section) return;
      selectLayer($('.editable-layer',section));
      if(canvas){
        const canvasRect=canvas.getBoundingClientRect();
        const sectionRect=section.getBoundingClientRect();
        const target=Math.max(0,canvas.scrollTop+(sectionRect.top-canvasRect.top)-4);
        canvas.scrollTo({top:target,behavior:'auto'});
      }
    };

    $$('.editor-block-btn',editor).forEach(btn=>btn.addEventListener('click',()=>{
      selectSection(document.getElementById(btn.dataset.editorTarget));
      reactEditor();
    }));
    $$('.editor-section',editor).forEach(section=>section.addEventListener('pointerdown',e=>{
      if(e.target.closest('.editable-layer')) return;
      selectSection(section);
    }));
    $$('.editable-layer',editor).forEach(layer=>{
      const text=$('.editable-text',layer);
      layer.addEventListener('pointerdown',()=>selectLayer(layer));
      text?.addEventListener('focus',()=>selectLayer(layer));
      text?.addEventListener('input',()=>{
        selectLayer(layer);
        if(inspectorInput) inspectorInput.value=text.textContent||'';
        reactEditor();
      });
      const handle=$('.drag-handle',layer);
      const beginDrag=(startX,startY,mode)=>{
        selectLayer(layer);
        const section=layer.closest('.editor-section');
        if(!section) return;
        const startDx=Number(layer.dataset.dx||0),startDy=Number(layer.dataset.dy||0);
        const baseLeft=layer.offsetLeft,baseTop=layer.offsetTop;
        layer.classList.add('dragging');
        const apply=(clientX,clientY)=>{
          const minDx=-baseLeft,maxDx=section.clientWidth-layer.offsetWidth-baseLeft-6;
          const minDy=-baseTop,maxDy=section.clientHeight-layer.offsetHeight-baseTop-6;
          const dx=Math.min(maxDx,Math.max(minDx,startDx+clientX-startX));
          const dy=Math.min(maxDy,Math.max(minDy,startDy+clientY-startY));
          layer.dataset.dx=dx.toFixed(1);layer.dataset.dy=dy.toFixed(1);
          layer.style.transform=`translate3d(${dx}px,${dy}px,0)`;
          syncInspector();
        };
        if(mode==='mouse'){
          const move=ev=>apply(ev.clientX,ev.clientY);
          const up=()=>{
            window.removeEventListener('mousemove',move);
            window.removeEventListener('mouseup',up);
            layer.classList.remove('dragging');
            reactEditor();
          };
          window.addEventListener('mousemove',move);
          window.addEventListener('mouseup',up,{once:true});
        }else{
          const move=ev=>{
            ev.preventDefault();
            const t=ev.touches[0];if(t) apply(t.clientX,t.clientY);
          };
          const up=()=>{
            window.removeEventListener('touchmove',move);
            window.removeEventListener('touchend',up);
            window.removeEventListener('touchcancel',up);
            layer.classList.remove('dragging');
            reactEditor();
          };
          window.addEventListener('touchmove',move,{passive:false});
          window.addEventListener('touchend',up,{once:true});
          window.addEventListener('touchcancel',up,{once:true});
        }
      };
      handle?.addEventListener('mousedown',e=>{
        if(e.button!==0) return;
        e.preventDefault();e.stopPropagation();
        beginDrag(e.clientX,e.clientY,'mouse');
      });
      handle?.addEventListener('touchstart',e=>{
        const t=e.touches[0];if(!t) return;
        e.preventDefault();e.stopPropagation();
        beginDrag(t.clientX,t.clientY,'touch');
      },{passive:false});
    });
    inspectorInput?.addEventListener('input',()=>{
      if(!selectedLayer) return;
      const text=$('.editable-text',selectedLayer);
      if(text) text.textContent=inspectorInput.value;
      reactEditor();
    });
    $$('.editor-swatches button',editor).forEach(btn=>btn.addEventListener('click',()=>{
      const section=selectedLayer?.closest('.editor-section');
      if(!section) return;
      const color=btn.dataset.color;
      section.style.background=color;
      section.style.color=readableText(color);
      reactEditor();
    }));
    $('#editorReset')?.addEventListener('click',()=>{
      Object.entries(initial).forEach(([key,state])=>{
        const layer=`[data-editable="${key}"]`;
        const el=$(layer,editor);
        if(!el) return;
        const text=$('.editable-text',el);
        if(text) text.textContent=state.text;
        el.style.left=state.left;el.style.top=state.top;el.style.transform='';el.dataset.dx='0';el.dataset.dy='0';
      });
      Object.entries(sectionColors).forEach(([id,color])=>{
        const section=document.getElementById(id);
        if(section){section.style.background=color;section.style.color=readableText(color);}
      });
      if(canvas) canvas.scrollTop=0;
      selectLayer($('[data-editable="heroTitle"]',editor));
      reactEditor();
    });
    selectLayer(selectedLayer);
  }

  // Commerce workflow proof: auto-runs once on view and is replayable.
  const workflowDemo=$('#workflowDemo');
  const workflowCard=$('#orderWorkflowCard');
  const workflowRun=$('#workflowRun');
  const placeOrderDemo=$('#placeOrderDemo');
  const workflowStatus=$('#workflowStatus');
  let workflowRunning=false,workflowPlayed=false,workflowTimers=[];
  const workflowOrder=['payment','order','courier','booked','pickup','inventory','profit'];
  const clearWorkflowTimers=()=>{workflowTimers.forEach(clearTimeout);workflowTimers=[]};
  const setWorkflowStatus=key=>{if(workflowStatus)workflowStatus.textContent=i18n[lang]?.[key]||key};
  const resetWorkflow=()=>{
    clearWorkflowTimers();
    workflowRunning=false;
    workflowDemo?.classList.remove('running','courier-click','finished');
    $$('.workflow-step',workflowDemo||document).forEach(step=>step.classList.remove('active','done','just-completed'));
    if(workflowRun)workflowRun.disabled=false;
    setWorkflowStatus('workflowWaiting');
  };
  const activateWorkflowStep=name=>{
    const step=$(`.workflow-step[data-step="${name}"]`,workflowDemo||document);
    if(!step)return;
    step.classList.add('active');
  };
  const completeWorkflowStep=name=>{
    const step=$(`.workflow-step[data-step="${name}"]`,workflowDemo||document);
    if(!step)return;
    step.classList.remove('active');
    step.classList.add('done','just-completed');
    setTimeout(()=>step.classList.remove('just-completed'),500);
  };
  const runWorkflow=()=>{
    if(!workflowDemo||workflowRunning)return;
    resetWorkflow();
    workflowRunning=true;
    workflowPlayed=true;
    workflowRun && (workflowRun.disabled=true);
    workflowDemo.classList.add('running');
    setWorkflowStatus('workflowRunning');
    const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
    let t=reduced?0:500;
    workflowOrder.forEach(name=>{
      const hold=reduced?24:(name==='courier'?820:420);
      const gap=reduced?8:110;
      workflowTimers.push(setTimeout(()=>{
        if(name==='courier')workflowDemo.classList.add('courier-click');
        activateWorkflowStep(name);
      },t));
      workflowTimers.push(setTimeout(()=>{
        completeWorkflowStep(name);
        if(name==='courier')workflowDemo.classList.remove('courier-click');
      },t+hold));
      t+=hold+gap;
    });
    workflowTimers.push(setTimeout(()=>{
      workflowDemo.classList.add('finished');
      setWorkflowStatus('workflowComplete');
      workflowRunning=false;
      if(workflowRun)workflowRun.disabled=false;
    },t+100));
  };
  workflowRun?.addEventListener('click',runWorkflow);
  placeOrderDemo?.addEventListener('click',runWorkflow);
  if(workflowCard){
    const workflowObserver=new IntersectionObserver(entries=>{
      if(entries.some(e=>e.isIntersecting)&&!workflowPlayed){
        workflowTimers.push(setTimeout(runWorkflow,450));
        workflowObserver.disconnect();
      }
    },{threshold:.38});
    workflowObserver.observe(workflowCard);
  }
  window.__syncWorkflowLanguage=()=>{
    if(workflowRunning)setWorkflowStatus('workflowRunning');
    else if(workflowDemo?.classList.contains('finished'))setWorkflowStatus('workflowComplete');
    else setWorkflowStatus('workflowWaiting');
  };
  resetWorkflow();

  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
  $$('.reveal').forEach(el=>{if(!el.classList.contains('is-visible'))observer.observe(el)});

  const motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el=entry.target;
    if(el.classList.contains('system-card')) el.classList.add('system-live');
    if(el.classList.contains('builder-ui')||el.classList.contains('admin-ui')) el.classList.add('demo-live');
    motionObserver.unobserve(el);
  }),{threshold:.32,rootMargin:'0px 0px -10% 0px'});
  $$('.system-card,.builder-ui,.admin-ui').forEach(el=>motionObserver.observe(el));

  $$('[data-spotlight]').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${e.clientX-r.left}px`);card.style.setProperty('--my',`${e.clientY-r.top}px`)}));
  const stage=$('#heroStage');
  if(stage && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;stage.style.transform=`translate3d(${x*5}px,${y*4}px,0)`});
    stage.addEventListener('pointerleave',()=>stage.style.transform='');
  }

  const sticky=$('#stickyCta'); let heroVisible=true,conversionVisible=false,dismissed=sessionStorage.getItem('ezcomo-v4-sticky')==='1';
  const refreshSticky=()=>{const visible=!heroVisible&&!conversionVisible&&!dismissed;sticky?.classList.toggle('visible',visible);sticky?.setAttribute('aria-hidden',String(!visible))};
  const heroObs=new IntersectionObserver(es=>{heroVisible=es[0].isIntersecting;refreshSticky()},{threshold:.05}); if($('#hero'))heroObs.observe($('#hero'));
  const conversionNodes=new Set();
  const convObs=new IntersectionObserver(es=>{
    es.forEach(e=>e.isIntersecting?conversionNodes.add(e.target):conversionNodes.delete(e.target));
    conversionVisible=conversionNodes.size>0;
    refreshSticky();
  },{threshold:.08});
  ['#pricing','#closing','#editorDemo','#orderWorkflowCard'].forEach(s=>{const el=$(s);if(el)convObs.observe(el)});
  $('#stickyClose')?.addEventListener('click',()=>{dismissed=true;sessionStorage.setItem('ezcomo-v4-sticky','1');refreshSticky()});

  applyLanguage('en'); selectTemplate('threads'); renderFaq(); updateCalc();
})();

(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  const templates = {
    threads:{
      name:'Threads',brand:'THREADS',visual:'Built for the city after dark.',eyebrow:'NEW DROP 06',
      body:'Everyday pieces with a sharper point of view.',cta:'Shop collection',secondary:'View lookbook →',
      featured:'Featured products',products:[['Studio Tee','৳1,490','tee'],['Canvas Tote','৳990','tote'],['Rib Mug','৳690','mug']],
      templateVisual:'Objects for everyday movement.',desc:'Editorial apparel with room for campaigns, collections and strong visual identity.',bn:'ক্যাম্পেইন, কালেকশন ও ব্র্যান্ড স্টোরির জন্য তৈরি এডিটোরিয়াল ফ্যাশন স্টোর।'
    },
    electronics:{
      name:'Electronics',brand:'NEXUS',visual:'Technology that earns its place.',eyebrow:'FEATURED / PERFORMANCE',
      body:'Clear specifications. Less noise. Better everyday devices.',cta:'Shop devices',secondary:'Compare models →',
      featured:'Popular right now',products:[['Arc Headphones','৳5,990','headphones'],['Nova Phone','৳28,900','phone'],['Key Mini','৳3,490','keyboard']],
      templateVisual:'Compare less. Choose better.',desc:'Product-first merchandising for shoppers comparing features and specifications.',bn:'ফিচার ও স্পেসিফিকেশন তুলনা করা ক্রেতাদের জন্য প্রোডাক্ট-কেন্দ্রিক স্টোর।'
    },
    crafts:{
      name:'Crafts',brand:'HANDMADE',visual:'Made slowly. Kept for years.',eyebrow:'MAKER / PROCESS',
      body:'Useful objects shaped by hand, material and small details.',cta:'Shop handmade',secondary:'Meet the makers →',
      featured:'From the studio',products:[['Clay Vessel','৳1,250','pot'],['Market Tote','৳890','tote'],['Block Print','৳1,690','print']],
      templateVisual:'Every object carries a handprint.',desc:'Maker-led storytelling for handmade products where process and origin matter.',bn:'হ্যান্ডমেড পণ্যে নির্মাতা, প্রক্রিয়া ও গল্পকে সামনে আনে।'
    },
    food:{
      name:'Food',brand:'TABLE',visual:'Good food, ready when you are.',eyebrow:'TODAY / FRESH',
      body:'Fresh picks, clear prices and an ordering path that stays simple.',cta:'Order today',secondary:'See full menu →',
      featured:'Today’s favourites',products:[['Harvest Bowl','৳390','bowl'],['Citrus Drink','৳220','drink'],['Granola Pack','৳480','pack']],
      templateVisual:'Fresh picks, easy ordering.',desc:'Menu-first presentation that keeps products easy to browse and order.',bn:'পণ্য দ্রুত দেখা ও অর্ডার করার জন্য মেনু-কেন্দ্রিক স্টোর।'
    }
  };


  const directions = {
    fashion:{
      name:'Fashion',slug:'fashion',
      desc:'Editorial catalog structure for collections, variants and product-led storytelling.',
      bn:'কালেকশন, ভ্যারিয়েন্ট ও product-led storytelling-এর জন্য editorial catalog structure।',
      model:'Product catalog',flow:'Collection → Product → Cart',blocks:'Hero · Collections · Product grid · Cart'
    },
    booking:{
      name:'Booking',slug:'booking',
      desc:'Service storefront built around service choice, staff, dates and available time slots.',
      bn:'Service, staff, date ও available time slot ঘিরে তৈরি booking storefront structure।',
      model:'Appointment schedule',flow:'Service → Date → Time → Confirm',blocks:'Services · Calendar · Slots · Staff'
    },
    hotel:{
      name:'Hotel',slug:'hotels',
      desc:'Hospitality structure where dates, guests, room inventory and availability drive the journey.',
      bn:'Date, guest, room inventory ও availability-কেন্দ্রিক hospitality storefront structure।',
      model:'Room inventory',flow:'Dates → Room → Guest → Reserve',blocks:'Search · Rooms · Amenities · Availability'
    },
    digital:{
      name:'Digital',slug:'digital-downloads',
      desc:'Digital-product storefront for previews, bundles, licences and post-payment delivery.',
      bn:'Preview, bundle, licence ও payment-এর পর file delivery-এর জন্য digital-product storefront।',
      model:'Digital products',flow:'Preview → Licence → Pay → Download',blocks:'Library · Bundles · Licence · Delivery'
    }
  };

  const i18n = {
    en:{
      announcement:'Built for Bangladesh commerce — bKash, Nagad, COD and Pathao workflows.',announcementCta:'Explore storefronts',
      navWhy:'Product',navFeatures:'Features',navTemplates:'Storefronts',navIntegrations:'Local commerce',navPricing:'Pricing',login:'Log in',startFree:'Start free',
      heroEyebrow:'Commerce built around Bangladesh',heroTitle:'Stop losing sales <em>inside the DMs.</em>',heroLede:'Give customers a branded store they can browse on their own, while products, orders, payments and delivery stay connected behind it.',
      createStore:'Create free store',seeStores:'Try the editor',trustNoCode:'No code required',trustTemplate:'Start from a template',trustLocal:'Local commerce workflows',
      paymentReady:'PAYMENT OPTIONS',configuredIn:'Configured in your workspace',structuredOrder:'STRUCTURED ORDER',readyFulfilment:'Ready for fulfilment',proofLabel:'ONE CONNECTED PATH',proofIntro:'From storefront to fulfilment without losing the thread.',proofStore:'Storefront',proofStoreNote:'Browse and choose',proofCheckout:'Checkout',proofCheckoutNote:'Payment method captured',proofOrder:'Order',proofOrderNote:'Structured in the workspace',proofFulfilment:'Fulfilment',proofFulfilmentNote:'The next action stays visible',
      bdKicker:'Built for Bangladesh',bdTitle:'Your business shouldn’t need a <em>foreign workaround.</em>',bdCopy:'EZComo is designed around the payment habits, delivery workflows and storefront expectations local merchants already work with.',
      bdPay:'Sell in familiar ways',bdPayCopy:'Offer bKash, Nagad and cash on delivery in the storefront.',bdDeliver:'Move orders into delivery',bdDeliverCopy:'Pathao merchant-API booking is available when configured.',bdBrand:'Own the customer experience',bdBrandCopy:'Use a branded storefront and connect an eligible custom domain.',bdTogether:'Keep operations together',bdTogetherCopy:'Products, orders, store settings and selling setup live in one workspace.',
      painKicker:'The shift',painTitle:'From message chaos to a store customers can use.',painIntro:'Social channels are great for discovery. They become painful when every product question, order detail and delivery update has to be handled manually.',beforeLabel:'BEFORE · DMs',afterLabel:'AFTER · EZCOMO',chat1:'Price please?',chat2:'Which size is available?',chat3:'Do you have COD?',chat4:'Where is my order?',chaosFoot:'Important order details scattered across conversations.',system1:'Product details visible',system2:'Order captured',system3:'Payment method recorded',system4:'Fulfilment workflow',done:'ready',systemFoot:'One structured merchant workflow',
      howKicker:'How it works',howTitle:'Three steps. No blank-canvas anxiety.',howCopy:'Start from something complete, make it yours, then run the business from the same system.',step1:'Pick a storefront',step1Copy:'Choose a starting point shaped for the way your category sells.',step2:'Add your business',step2Copy:'Products, imagery, brand details, payment options and delivery setup.',step3:'Publish and manage',step3Copy:'Receive structured orders and manage the work behind each sale.',
      bridgeBefore:'BEFORE',bridgeInbox:'Orders trapped in DMs',bridgeStore:'STOREFRONT',bridgeStoreTitle:'Customers browse and order themselves',bridgeSystem:'EZCOMO',bridgeSystemTitle:'The work behind each sale stays structured',featuresKicker:'Try the CMS',featuresTitle:'Build the store. Then run what happens next.',featuresCopy:'Start with the storefront itself. Edit the page, place an order, then follow the same sale into the operational workflow.',builderLabel:'01 · STOREFRONT EDITOR',builderTitle:'Edit a complete storefront right here.',builderCopy:'Move through a real page structure, rewrite the content, reposition content groups and restyle sections without touching code.',builderHint:'Try changing the hero, then jump to Featured products.',editorTitle:'Store editor',editorPreview:'Preview',editorLive:'Live changes',editorReset:'Reset demo',editorPage:'PAGE',editorAnnouncement:'Announcement',editorHeader:'Header',editorHero:'Hero',editorCategories:'Categories',editorFeatured:'Featured products',editorPromo:'Collection promo',editorNew:'New arrivals',editorStory:'Brand story',editorBenefits:'Store benefits',editorNewsletter:'Newsletter',editorFooter:'Footer',editorTry:'Try it',editorTryHint:'Drag sections → edit → move content',editorSelected:'SELECTED',editorContentGroup:'Content group',editorText:'Focused text',editorColor:'Section color',editorPosition:'Position',editorHelp:'Select any text line to rewrite it. Drag the handle to move the whole content group.',payTitle:'Payments that make sense locally.',payCopy:'bKash, Nagad and cash-on-delivery options, with automated bKash checkout available when connected.',deliveryTitle:'Orders that move into fulfilment.',deliveryCopy:'Book Pathao from the order workflow when configured, with additional courier setup paths available.',active:'active',workflowLabel:'02 · ORDER WORKFLOW · SIMULATED',workflowTitle:'Now watch what happens after a customer clicks Order.',workflowCopy:'The storefront hands the sale into the system: payment, order, fulfilment, inventory and margin tracking become one visible sequence.',workflowRun:'Run order workflow',workflowWaiting:'Waiting',workflowRunning:'Running',workflowComplete:'Complete',placeOrder:'Place order',workflowDisclaimer:'Illustrative demo data',automationRunner:'AUTOMATION RUNNER',stepPayment:'PAYMENT',stepPaymentTitle:'Payment received',stepOrder:'ORDER',stepOrderTitle:'Order received',stepCourier:'FULFILMENT',stepCourierTitle:'Book courier',bookCourier:'Book courier',stepBookedTitle:'Courier booked',stepPickup:'PICKUP',stepPickupTitle:'Courier picked up',collected:'Collected',stepInventory:'INVENTORY',stepInventoryTitle:'Stock updated',stepProfit:'MARGIN',stepProfitTitle:'Profit booked',workflowResult:'Order complete — every next action is visible.',workflowResultNote:'Example margin assumes merchant cost data is configured.',workspaceLabel:'03 · MERCHANT WORKSPACE',workspaceTitle:'The storefront and the work behind it stay connected.',workspaceCopy:'One operating surface for products, orders, payment setup and fulfilment status—shown here with illustrative sample data.',domainTitle:'Your own branded domain.',domainCopy:'Eligible paid plans can connect a custom domain after DNS setup and verification.',
      templatesKicker:'Storefront structures',templatesTitle:'Different businesses need different storefront structures.',templatesCopy:'Switch business models to see how the page architecture, customer flow and primary action change — not just the colors.',fashionDesc:'Catalog + variants',bookingDesc:'Services + time slots',hotelDesc:'Rooms + availability',digitalDesc:'Files + licences',selectedDirection:'SELECTED STRUCTURE',directionNote:'Illustrative demo content — the structure is the point.',openPreview:'Open preview',useTemplate:'Use this structure',
      localKicker:'Built to sell here',localTitle:'Local commerce should feel native, not patched together.',localCopy:'EZComo is designed around the payment habits, delivery workflows and storefront expectations Bangladeshi merchants already work with.',localPayTitle:'Familiar checkout',localPayCopy:'bKash, Nagad and cash on delivery can appear in the storefront.',localDeliveryTitle:'Delivery in the order flow',localDeliveryCopy:'Pathao merchant-API booking is available when configured.',localBrandTitle:'Your storefront, your domain',localBrandCopy:'Eligible paid plans can connect a verified custom domain.',connectionState:'CONNECTION STATE',connectionTitle:'Know what is active before you depend on it.',available:'available',setup:'setup',payments:'PAYMENTS',delivery:'DELIVERY',storefront:'STOREFRONT',autoConnected:'Automated when connected',storeOption:'Storefront option',merchantApi:'Merchant API booking',setupAvailable:'Setup available',customDomain:'Custom domain',eligiblePlans:'Eligible paid plans',responsiveStore:'Responsive store',allScreens:'Phone to desktop',
      calcKicker:'Illustrative cost check',calcTitle:'Use your numbers, not ours.',calcCopy:'Compare the percentage cost you currently enter with an EZComo plan amount you enter. This tool does not assume a competitor fee or promise savings.',calcNote:'Illustrative only — verify real plan and provider charges before deciding.',monthlySales:'Monthly sales',currentCost:'Current platform / manual cost',planInput:'EZComo plan amount to compare',annualDifference:'Illustrative annual difference',
      pricingKicker:'Pricing',pricingTitle:'Start free. Upgrade when the business needs more.',pricingCopy:'Current prices and limits are published on the plans page so you can compare before committing.',comparePlans:'Compare current plans',
      faqTitle:'The questions that matter before you move beyond DMs.',faqStart:'Getting started',faqPayments:'Payments',faqDelivery:'Delivery',faqDomains:'Domains',anotherQuestion:'Have another question?',talkSupport:'Talk to support',
      closingKicker:'Your next storefront',closingTitle:'Let customers shop while you get back to running the business.',closingCopy:'Pick a direction, start free and carry that storefront choice directly into setup.',browseAgain:'Browse storefronts again',
      product:'Product',support:'Support',helpCenter:'Help center',legal:'Legal',privacy:'Privacy',terms:'Terms',billing:'Billing policy',footerTag:'A storefront customers can use. A workspace merchants can run.',previewLabel:'Design preview · no merchant data is changed here.',stickyText:'Ready to give customers somewhere better than the DM inbox?'
    },
    bn:{
      announcement:'বাংলাদেশি কমার্সের জন্য তৈরি — bKash, Nagad, COD ও Pathao ওয়ার্কফ্লো।',announcementCta:'স্টোরফ্রন্ট দেখুন',
      navWhy:'প্রোডাক্ট',navFeatures:'ফিচার',navTemplates:'স্টোরফ্রন্ট',navIntegrations:'লোকাল কমার্স',navPricing:'মূল্য',login:'লগ ইন',startFree:'ফ্রি শুরু করুন',
      heroEyebrow:'বাংলাদেশকে কেন্দ্র করে তৈরি কমার্স',heroTitle:'DM-এর ভিড়ে <em>বিক্রি হারাবেন না।</em>',heroLede:'ক্রেতাদের নিজের মতো ব্রাউজ করার জন্য একটি ব্র্যান্ডেড স্টোর দিন, আর পণ্য, অর্ডার, পেমেন্ট ও ডেলিভারির কাজ একই সিস্টেমে রাখুন।',
      createStore:'ফ্রি স্টোর তৈরি করুন',seeStores:'এডিটর ব্যবহার করে দেখুন',trustNoCode:'কোড লাগবে না',trustTemplate:'টেমপ্লেট থেকে শুরু',trustLocal:'লোকাল কমার্স ওয়ার্কফ্লো',
      paymentReady:'পেমেন্ট অপশন',configuredIn:'আপনার ওয়ার্কস্পেসে কনফিগার করা',structuredOrder:'গোছানো অর্ডার',readyFulfilment:'ফুলফিলমেন্টের জন্য প্রস্তুত',proofLabel:'একটি সংযুক্ত পথ',proofIntro:'স্টোরফ্রন্ট থেকে ফুলফিলমেন্ট—একই ধারায়।',proofStore:'স্টোরফ্রন্ট',proofStoreNote:'দেখুন ও পছন্দ করুন',proofCheckout:'চেকআউট',proofCheckoutNote:'পেমেন্ট পদ্ধতি ধরা থাকে',proofOrder:'অর্ডার',proofOrderNote:'ওয়ার্কস্পেসে গোছানো',proofFulfilment:'ফুলফিলমেন্ট',proofFulfilmentNote:'পরের কাজটি দৃশ্যমান থাকে',
      bdKicker:'বাংলাদেশের জন্য তৈরি',bdTitle:'আপনার ব্যবসার জন্য <em>বিদেশি workaround দরকার হওয়া উচিত নয়।</em>',bdCopy:'EZComo স্থানীয় ব্যবসায়ীদের পরিচিত পেমেন্ট, ডেলিভারি ও স্টোরফ্রন্ট অভ্যাসকে কেন্দ্র করে তৈরি।',
      bdPay:'পরিচিত উপায়ে বিক্রি করুন',bdPayCopy:'স্টোরে bKash, Nagad ও ক্যাশ অন ডেলিভারি দিন।',bdDeliver:'অর্ডার ডেলিভারিতে পাঠান',bdDeliverCopy:'কনফিগার করা থাকলে Pathao merchant API booking ব্যবহার করা যায়।',bdBrand:'কাস্টমার অভিজ্ঞতা নিজের রাখুন',bdBrandCopy:'নিজস্ব ব্র্যান্ডেড স্টোরফ্রন্ট ও যোগ্য প্ল্যানে কাস্টম ডোমেইন ব্যবহার করুন।',bdTogether:'অপারেশন একসাথে রাখুন',bdTogetherCopy:'পণ্য, অর্ডার, স্টোর সেটিং ও সেলিং সেটআপ একই ওয়ার্কস্পেসে।',
      painKicker:'পরিবর্তনটা',painTitle:'মেসেজের বিশৃঙ্খলা থেকে ক্রেতার ব্যবহারযোগ্য স্টোরে।',painIntro:'সোশ্যাল চ্যানেল নতুন ক্রেতা আনে, কিন্তু প্রতিটি দাম, সাইজ, অর্ডার আর ডেলিভারি প্রশ্ন হাতে সামলাতে হলে কাজ জটিল হয়ে যায়।',beforeLabel:'আগে · DM',afterLabel:'পরে · EZCOMO',chat1:'দাম কত?',chat2:'কোন সাইজ আছে?',chat3:'COD আছে?',chat4:'আমার অর্ডার কোথায়?',chaosFoot:'গুরুত্বপূর্ণ অর্ডার তথ্য আলাদা আলাদা কথোপকথনে ছড়িয়ে থাকে।',system1:'পণ্যের তথ্য দৃশ্যমান',system2:'অর্ডার ধরা হয়েছে',system3:'পেমেন্ট পদ্ধতি রেকর্ড',system4:'ফুলফিলমেন্ট ওয়ার্কফ্লো',done:'প্রস্তুত',systemFoot:'একটি গোছানো মার্চেন্ট ওয়ার্কফ্লো',
      howKicker:'কীভাবে কাজ করে',howTitle:'তিন ধাপ। Blank canvas-এর ভয় নেই।',howCopy:'সম্পূর্ণ একটি ডিজাইন থেকে শুরু করুন, নিজের মতো করুন, তারপর একই সিস্টেমে ব্যবসা চালান।',step1:'স্টোরফ্রন্ট বেছে নিন',step1Copy:'আপনার ক্যাটাগরির বিক্রির ধরন অনুযায়ী শুরু করার ডিজাইন বেছে নিন।',step2:'ব্যবসার তথ্য যোগ করুন',step2Copy:'পণ্য, ছবি, ব্র্যান্ড, পেমেন্ট ও ডেলিভারি সেটআপ করুন।',step3:'পাবলিশ ও ম্যানেজ করুন',step3Copy:'গোছানো অর্ডার নিন এবং প্রতিটি বিক্রির পরের কাজ পরিচালনা করুন।',
      bridgeBefore:'আগে',bridgeInbox:'অর্ডার DM-এ আটকে থাকে',bridgeStore:'স্টোরফ্রন্ট',bridgeStoreTitle:'ক্রেতারা নিজেরাই দেখে অর্ডার করে',bridgeSystem:'EZCOMO',bridgeSystemTitle:'প্রতিটি বিক্রির পরের কাজ গোছানো থাকে',featuresKicker:'CMS ব্যবহার করে দেখুন',featuresTitle:'স্টোর বানান। তারপর বিক্রির পরের কাজ চালান।',featuresCopy:'স্টোরফ্রন্ট থেকেই শুরু করুন। পেজ এডিট করুন, একটি অর্ডার দিন, তারপর একই বিক্রিকে operational workflow-এ এগোতে দেখুন।',builderLabel:'০১ · স্টোরফ্রন্ট এডিটর',builderTitle:'এখানেই একটি সম্পূর্ণ storefront এডিট করুন।',builderCopy:'বাস্তব page structure-এর মধ্যে section বদলান, লেখা rewrite করুন, content group সরান এবং section style করুন—কোড ছাড়াই।',builderHint:'Hero বদলে দেখুন, তারপর Featured products-এ যান।',editorTitle:'স্টোর এডিটর',editorPreview:'প্রিভিউ',editorLive:'লাইভ পরিবর্তন',editorReset:'ডেমো রিসেট',editorPage:'পেজ',editorAnnouncement:'অ্যানাউন্সমেন্ট',editorHeader:'হেডার',editorHero:'হিরো',editorCategories:'ক্যাটাগরি',editorFeatured:'ফিচার্ড পণ্য',editorPromo:'কালেকশন প্রোমো',editorNew:'নতুন পণ্য',editorStory:'ব্র্যান্ড স্টোরি',editorBenefits:'স্টোর সুবিধা',editorNewsletter:'নিউজলেটার',editorFooter:'ফুটার',editorTry:'চেষ্টা করুন',editorTryHint:'সেকশন drag করুন → edit করুন → content সরান',editorSelected:'নির্বাচিত',editorContentGroup:'কনটেন্ট গ্রুপ',editorText:'নির্বাচিত লেখা',editorColor:'সেকশনের রং',editorPosition:'অবস্থান',editorHelp:'যেকোনো text line এডিট করুন। হ্যান্ডেল টেনে পুরো content group সরান।',payTitle:'লোকাল পেমেন্টের জন্য তৈরি।',payCopy:'bKash, Nagad ও COD; সংযোগ করা থাকলে automated bKash checkout পাওয়া যায়।',deliveryTitle:'অর্ডার থেকে ফুলফিলমেন্টে যান।',deliveryCopy:'কনফিগার করা থাকলে অর্ডার ওয়ার্কফ্লো থেকে Pathao booking করুন।',active:'সক্রিয়',workflowLabel:'০২ · অর্ডার ওয়ার্কফ্লো · সিমুলেশন',workflowTitle:'এবার দেখুন customer Order চাপার পর কী হয়।',workflowCopy:'Storefront থেকে sale system-এ যায়: payment, order, fulfilment, inventory এবং margin tracking এক দৃশ্যমান sequence হয়।',workflowRun:'অর্ডার ওয়ার্কফ্লো চালান',workflowWaiting:'অপেক্ষায়',workflowRunning:'চলছে',workflowComplete:'সম্পন্ন',placeOrder:'অর্ডার করুন',workflowDisclaimer:'উদাহরণভিত্তিক ডেমো ডেটা',automationRunner:'অটোমেশন রানার',stepPayment:'পেমেন্ট',stepPaymentTitle:'পেমেন্ট পাওয়া গেছে',stepOrder:'অর্ডার',stepOrderTitle:'অর্ডার এসেছে',stepCourier:'ফুলফিলমেন্ট',stepCourierTitle:'কুরিয়ার বুক করুন',bookCourier:'কুরিয়ার বুক করুন',stepBookedTitle:'কুরিয়ার বুক হয়েছে',stepPickup:'পিকআপ',stepPickupTitle:'কুরিয়ার পণ্য নিয়েছে',collected:'সংগ্রহ করা হয়েছে',stepInventory:'ইনভেন্টরি',stepInventoryTitle:'স্টক আপডেট হয়েছে',stepProfit:'মার্জিন',stepProfitTitle:'প্রফিট বুক হয়েছে',workflowResult:'অর্ডার সম্পন্ন — প্রতিটি পরের কাজ দৃশ্যমান।',workflowResultNote:'উদাহরণ মার্জিন ধরে নেয় merchant cost data কনফিগার করা আছে।',workspaceLabel:'০৩ · মার্চেন্ট ওয়ার্কস্পেস',workspaceTitle:'Storefront এবং তার পিছনের কাজ connected থাকে।',workspaceCopy:'Products, orders, payment setup এবং fulfilment status—সব এক operating surface-এ। এখানে illustrative sample data দেখানো হচ্ছে।',domainTitle:'নিজস্ব ব্র্যান্ডেড ডোমেইন।',domainCopy:'যোগ্য paid plan-এ DNS setup ও verification-এর পর custom domain যুক্ত করা যায়।',
      templatesKicker:'স্টোরফ্রন্ট স্ট্রাকচার',templatesTitle:'ভিন্ন ব্যবসার জন্য ভিন্ন storefront structure দরকার।',templatesCopy:'Business model বদলে দেখুন—শুধু রং নয়, page architecture, customer flow এবং primary action-ও বদলায়।',fashionDesc:'Catalog + variants',bookingDesc:'Services + time slots',hotelDesc:'Rooms + availability',digitalDesc:'Files + licences',selectedDirection:'নির্বাচিত স্ট্রাকচার',directionNote:'এগুলো illustrative demo content — মূল বিষয় হলো structure।',openPreview:'প্রিভিউ খুলুন',useTemplate:'এই স্ট্রাকচার ব্যবহার করুন',
      localKicker:'এখানকার বিক্রির জন্য তৈরি',localTitle:'Local commerce যেন native লাগে, patchwork নয়।',localCopy:'EZComo বাংলাদেশের merchants-এর পরিচিত payment habit, delivery workflow এবং storefront expectation ঘিরে তৈরি।',localPayTitle:'পরিচিত checkout',localPayCopy:'Storefront-এ bKash, Nagad এবং cash on delivery দেখানো যায়।',localDeliveryTitle:'Order flow-এর ভেতর delivery',localDeliveryCopy:'Configure করা থাকলে Pathao merchant-API booking পাওয়া যায়।',localBrandTitle:'আপনার storefront, আপনার domain',localBrandCopy:'যোগ্য paid plan verified custom domain connect করতে পারে।',connectionState:'কানেকশন স্টেট',connectionTitle:'নির্ভর করার আগে কোনটা active জানুন।',available:'available',setup:'setup',payments:'পেমেন্ট',delivery:'ডেলিভারি',storefront:'স্টোরফ্রন্ট',autoConnected:'কানেক্ট হলে automated',storeOption:'স্টোরফ্রন্ট অপশন',merchantApi:'Merchant API booking',setupAvailable:'Setup available',customDomain:'Custom domain',eligiblePlans:'যোগ্য paid plan',responsiveStore:'Responsive store',allScreens:'ফোন থেকে ডেস্কটপ',
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

  let lang='en', selected='threads', directionSelected='fashion', faqCategory='start';

  function applyLanguage(next){
    lang=next; document.documentElement.lang=lang==='bn'?'bn':'en'; document.body.classList.toggle('bn',lang==='bn');
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18n[lang][key])el.textContent=i18n[lang][key]});
    $$('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;if(i18n[lang][key])el.innerHTML=i18n[lang][key]});
    const toggle=$('#langToggle'); if(toggle){toggle.querySelectorAll('span').forEach((el,i)=>el.classList.toggle('active',(lang==='en'&&i===0)||(lang==='bn'&&i===1))); toggle.querySelectorAll('span').forEach((el,i)=>el.style.color=((lang==='en'&&i===0)||(lang==='bn'&&i===1))?'var(--ink)':'var(--muted)');}
    renderFaq(); updateTemplateText(); window.__syncEditor?.(); window.__syncWorkflowLanguage?.();
  }

  function updateSignup(){
    const data=directions[selected]||templates[selected]||directions.fashion;
    const slug=data.slug||selected;
    $$('[data-signup]:not(#templateSignup)').forEach(a=>a.href=`https://ezcomo.shop/signup?template=${encodeURIComponent(slug)}`);
    const close=$('#closingSignup'); if(close) close.textContent=lang==='bn'?`${data.name} দিয়ে শুরু করুন`:`Start with ${data.name}`;
    const direction=directions[directionSelected]||directions.fashion;
    const templateSignup=$('#templateSignup');
    if(templateSignup) templateSignup.href=`https://ezcomo.shop/signup?template=${encodeURIComponent(direction.slug)}`;
  }

  function selectTemplate(id){
    if(!templates[id]) return;
    selected=id;
    const data=templates[id];
    $$('.store-tab').forEach(b=>{const a=b.dataset.template===id;b.classList.toggle('active',a);b.setAttribute('aria-selected',String(a))});
    const heroVisual=$('#heroStoreVisual');
    if(heroVisual){
      heroVisual.dataset.templateVisual=id;
      heroVisual.classList.remove('visual-switch');
      void heroVisual.offsetWidth;
      heroVisual.classList.add('visual-switch');
      setTimeout(()=>heroVisual.classList.remove('visual-switch'),650);
    }
    const title=$('#heroWindowTitle'); if(title) title.textContent=data.name;
    if($('#heroStoreBrand')) $('#heroStoreBrand').textContent=data.brand;
    if($('#heroStoreEyebrow')) $('#heroStoreEyebrow').textContent=data.eyebrow;
    if($('#visualHeadline')) $('#visualHeadline').textContent=data.visual;
    if($('#heroStoreBody')) $('#heroStoreBody').textContent=data.body;
    if($('#heroStoreCta')) $('#heroStoreCta').textContent=data.cta;
    const heroSecondary=$('.storefront-cta-row span'); if(heroSecondary) heroSecondary.textContent=data.secondary;
    if($('#heroFeaturedTitle')) $('#heroFeaturedTitle').textContent=data.featured;
    data.products.forEach((product,index)=>{
      const n=index+1;
      const name=$(`#heroProduct${n}Name`),price=$(`#heroProduct${n}Price`);
      const art=$(`.storefront-products article:nth-child(${n}) .flat-product`);
      if(name)name.textContent=product[0];
      if(price)price.textContent=product[1];
      if(art)art.className=`flat-product flat-${product[2]}`;
    });
    updateSignup();
  }

  function selectDirection(id){
    if(!directions[id]) return;
    selected=id;
    directionSelected=id;
    const data=directions[id];
    $$('.template-option').forEach(b=>{const active=b.dataset.templateFull===id;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});
    $$('[data-direction-panel]').forEach(panel=>panel.classList.toggle('active',panel.dataset.directionPanel===id));
    if($('#templateTitle')) $('#templateTitle').textContent=data.name;
    if($('#templateDescription')) $('#templateDescription').textContent=lang==='bn'?data.bn:data.desc;
    if($('#templateLabel')) $('#templateLabel').textContent=`${data.name} · structure`;
    if($('#directionModel')) $('#directionModel').textContent=data.model;
    if($('#directionFlow')) $('#directionFlow').textContent=data.flow;
    if($('#directionBlocks')) $('#directionBlocks').textContent=data.blocks;
    const index=Object.keys(directions).indexOf(id)+1;
    if($('#templateCount')) $('#templateCount').textContent=String(index).padStart(2,'0');
    updateSignup();
  }

  function updateTemplateText(){
    const data=directions[directionSelected]||directions.fashion;
    if($('#templateDescription')) $('#templateDescription').textContent=lang==='bn'?data.bn:data.desc;
    updateSignup();
  }

  $$('.store-tab').forEach(b=>b.addEventListener('click',()=>selectTemplate(b.dataset.template)));
  $$('.template-option').forEach(b=>b.addEventListener('click',()=>selectDirection(b.dataset.templateFull)));

  $('#langToggle')?.addEventListener('click',()=>applyLanguage(lang==='en'?'bn':'en'));
  const themeToggle=$('#themeToggle');
  const navLamp=$('#navLamp');
  const lampPull=$('#lampPull');
  const prefersReducedMotion=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const syncLampState=()=>{
    const light=document.documentElement.dataset.theme==='light';
    themeToggle?.setAttribute('aria-pressed',String(light));
    navLamp?.classList.toggle('is-lit',light);
  };
  const applyTheme=next=>{
    document.documentElement.dataset.theme=next;
    sessionStorage.setItem('ezcomo-v4-theme',next);
    syncLampState();
  };
  const toggleTheme=()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');

  let lampFrame=0,lampAngle=0,lampVelocity=0,lampDragging=false,lampMoved=false;
  const stopLampPhysics=()=>{cancelAnimationFrame(lampFrame);lampFrame=0;lampPull?.classList.remove('physics-active');};
  const settleLamp=(kick=0)=>{
    if(!lampPull||prefersReducedMotion())return;
    stopLampPhysics();
    lampPull.classList.add('physics-active');
    lampVelocity=kick;
    let last=performance.now();
    const tick=now=>{
      const dt=Math.min(32,now-last)/16.667;last=now;
      const accel=(-.018*lampAngle)-(.052*lampVelocity);
      lampVelocity=(lampVelocity+accel*dt)*.987;
      lampAngle+=lampVelocity*dt;
      lampPull.style.transform=`rotate(${lampAngle.toFixed(3)}deg)`;
      if(Math.abs(lampAngle)<.08&&Math.abs(lampVelocity)<.035){
        lampAngle=0;lampVelocity=0;
        lampPull.style.removeProperty('transform');
        lampPull.classList.remove('physics-active');
        lampFrame=0;
        return;
      }
      lampFrame=requestAnimationFrame(tick);
    };
    lampFrame=requestAnimationFrame(tick);
  };
  const reactLamp=()=>{
    if(!navLamp||prefersReducedMotion())return;
    navLamp.classList.remove('lamp-react');
    void navLamp.offsetWidth;
    navLamp.classList.add('lamp-react');
    setTimeout(()=>navLamp.classList.remove('lamp-react'),720);
  };
  const rememberedTheme=sessionStorage.getItem('ezcomo-v4-theme');
  if(rememberedTheme)document.documentElement.dataset.theme=rememberedTheme;
  syncLampState();

  themeToggle?.addEventListener('click',()=>{
    toggleTheme();reactLamp();settleLamp(document.documentElement.dataset.theme==='light'?1.05:-1.05);
  });

  if(lampPull){
    let pointerId=null,pivotX=0,pivotY=0,startX=0,startY=0,lastX=0,lastTime=0;
    lampPull.addEventListener('pointerdown',e=>{
      if(e.button!==undefined&&e.button!==0)return;
      pointerId=e.pointerId;lampDragging=true;lampMoved=false;stopLampPhysics();
      lampPull.classList.add('dragging');
      lampPull.setPointerCapture?.(pointerId);
      const r=lampPull.getBoundingClientRect();
      pivotX=r.left+r.width/2;pivotY=r.top+3;
      startX=e.clientX;startY=e.clientY;lastX=e.clientX;lastTime=performance.now();
      e.preventDefault();
    });
    lampPull.addEventListener('pointermove',e=>{
      if(!lampDragging||e.pointerId!==pointerId)return;
      const dx=e.clientX-pivotX,dy=Math.max(46,e.clientY-pivotY);
      lampAngle=Math.max(-28,Math.min(28,Math.atan2(dx,dy)*180/Math.PI));
      const pull=Math.max(0,Math.min(22,e.clientY-startY));
      lampPull.style.transform=`rotate(${lampAngle.toFixed(2)}deg) translateY(${pull.toFixed(1)}px)`;
      lampPull.style.setProperty('--cord-stretch',String(1+pull/155));
      lampMoved=lampMoved||Math.hypot(e.clientX-startX,e.clientY-startY)>7;
      const now=performance.now(),dt=Math.max(8,now-lastTime);
      lampVelocity=(e.clientX-lastX)/dt*1.1;lastX=e.clientX;lastTime=now;
      e.preventDefault();
    });
    const releaseLamp=e=>{
      if(!lampDragging||e.pointerId!==pointerId)return;
      lampDragging=false;lampPull.classList.remove('dragging');
      lampPull.releasePointerCapture?.(pointerId);
      lampPull.style.removeProperty('--cord-stretch');
      const pullDistance=Math.max(0,e.clientY-startY);
      const shouldToggle=lampMoved&&pullDistance>10;
      lampPull.style.transform=`rotate(${lampAngle.toFixed(2)}deg)`;
      if(shouldToggle){toggleTheme();reactLamp();}
      const kick=Math.max(-2.2,Math.min(2.2,lampVelocity+(e.clientX-startX)*.006));
      settleLamp(kick|| (lampAngle>0?-.55:.55));
      pointerId=null;
      e.preventDefault();
    };
    lampPull.addEventListener('pointerup',releaseLamp);
    lampPull.addEventListener('pointercancel',releaseLamp);
    lampPull.addEventListener('click',e=>{
      if(lampMoved){lampMoved=false;e.preventDefault();return;}
      toggleTheme();reactLamp();settleLamp(document.documentElement.dataset.theme==='light'?1.15:-1.15);
    });
  }

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

  // Interactive full-store editor: section navigation, grouped content, inline editing, alignment, color and constrained drag.
  const editor=$('#editorDemo');
  if(editor){
    const canvas=$('#editorCanvas');
    const inspectorInput=$('#editorTextInput');
    const positionReadout=$('#positionReadout');
    const inspectorName=$('#inspectorLayerName');
    const alignButtons=$$('.inspector-options button',editor);
    const labels={
      en:{announcementText:'Announcement content',heroTitle:'Hero content',categoriesTitle:'Categories content',productsTitle:'Featured products content',promoTitle:'Collection promo content',newTitle:'New arrivals content',storyTitle:'Brand story content',newsletterTitle:'Newsletter content'},
      bn:{announcementText:'অ্যানাউন্সমেন্ট কনটেন্ট',heroTitle:'হিরো কনটেন্ট',categoriesTitle:'ক্যাটাগরি কনটেন্ট',productsTitle:'ফিচার্ড প্রোডাক্ট কনটেন্ট',promoTitle:'কালেকশন প্রোমো কনটেন্ট',newTitle:'নতুন পণ্যের কনটেন্ট',storyTitle:'ব্র্যান্ড স্টোরি কনটেন্ট',newsletterTitle:'নিউজলেটার কনটেন্ট'}
    };
    let selectedLayer=$('[data-editable="heroTitle"]',editor);
    let selectedSection=selectedLayer?.closest('.editor-section')||null;
    let selectedText=$('.editable-title',selectedLayer)||$('.editable-text',selectedLayer);

    const palette=$('.editor-palette',editor);
    const initialSectionOrder=$$('.editor-block-btn',palette).map(btn=>btn.dataset.editorTarget);
    const renumberSectionButtons=()=>{
      $$('.editor-block-btn',palette).forEach((btn,index)=>{
        const number=$('b',btn);
        if(number)number.textContent=String(index+1).padStart(2,'0');
      });
    };
    const syncCanvasOrder=()=>{
      if(!canvas||!palette)return;
      $$('.editor-block-btn',palette).forEach(btn=>{
        const section=document.getElementById(btn.dataset.editorTarget);
        if(section)canvas.appendChild(section);
      });
    };
    const restoreSectionOrder=()=>{
      const tip=$('.editor-palette-tip',palette);
      initialSectionOrder.forEach(id=>{
        const btn=$(`.editor-block-btn[data-editor-target="${id}"]`,palette);
        if(btn)palette.insertBefore(btn,tip);
      });
      syncCanvasOrder();
      renumberSectionButtons();
    };
    const keepReorderedSectionVisible=section=>{
      if(!canvas||!section)return;
      const top=section.offsetTop,bottom=top+section.offsetHeight;
      if(top<canvas.scrollTop+8||bottom>canvas.scrollTop+canvas.clientHeight-8){
        canvas.scrollTop=Math.max(0,top-18);
      }
    };
    const commitSidebarOrder=(draggedBtn,focusPreview=true)=>{
      syncCanvasOrder();
      renumberSectionButtons();
      const section=document.getElementById(draggedBtn.dataset.editorTarget);
      if(section&&focusPreview)keepReorderedSectionVisible(section);
    };

    $$('.editable-text',editor).forEach(el=>el.dataset.initialText=el.textContent||'');
    $$('.editable-layer',editor).forEach(el=>{
      el.dataset.initialLeft=el.style.left||'0%';el.dataset.initialTop=el.style.top||'0%';
      el.dataset.dx='0';el.dataset.dy='0';el.dataset.align='left';
    });

    let editorReactFrame=0,editorReactTimer=0;
    const reactEditor=()=>{
      clearTimeout(editorReactTimer);cancelAnimationFrame(editorReactFrame);
      editor.classList.remove('editor-reacting');
      editorReactFrame=requestAnimationFrame(()=>{
        editor.classList.add('editor-reacting');
        editorReactTimer=setTimeout(()=>editor.classList.remove('editor-reacting'),620);
      });
      $('.editor-palette-tip',editor)?.classList.add('used');
    };
    const readableText=hex=>{
      const v=hex.replace('#','');
      const rgb=v.length===3?v.split('').map(x=>parseInt(x+x,16)):[parseInt(v.slice(0,2),16),parseInt(v.slice(2,4),16),parseInt(v.slice(4,6),16)];
      return (.299*rgb[0]+.587*rgb[1]+.114*rgb[2])>150?'#171915':'#f3f8f5';
    };
    const applyAlignment=(layer,align)=>{
      if(!layer)return;
      const body=$('.editable-group-body',layer);layer.dataset.align=align;
      if(body){body.style.textAlign=align;body.style.alignItems=align==='center'?'center':align==='right'?'flex-end':'flex-start';}
      alignButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.align===align));
    };
    const syncInspector=()=>{
      if(inspectorName)inspectorName.textContent=selectedLayer?(labels[lang]?.[selectedLayer.dataset.editable]||(selectedSection?.dataset.sectionName||'Content')):(selectedSection?.dataset.sectionName||(lang==='bn'?'সেকশন':'Section'));
      if(inspectorInput){inspectorInput.disabled=!selectedText;inspectorInput.value=selectedText?.textContent?.trim()||'';}
      if(positionReadout){
        if(selectedLayer&&selectedSection){
          const dx=Number(selectedLayer.dataset.dx||0),dy=Number(selectedLayer.dataset.dy||0);
          const x=(selectedLayer.offsetLeft+dx)/selectedSection.clientWidth*100,y=(selectedLayer.offsetTop+dy)/selectedSection.clientHeight*100;
          positionReadout.textContent='X '+Math.round(x)+'% · Y '+Math.round(y)+'%';
        }else positionReadout.textContent='—';
      }
      const align=selectedLayer?.dataset.align||'left';
      alignButtons.forEach(btn=>{btn.disabled=!selectedLayer;btn.classList.toggle('active',!!selectedLayer&&btn.dataset.align===align);});
    };
    window.__syncEditor=syncInspector;

    const markSection=section=>{
      selectedSection=section;
      $$('.editor-section',editor).forEach(el=>el.classList.toggle('active',el===section));
      $$$('.editor-block-btn',editor).forEach(btn=>btn.classList.toggle('active',btn.dataset.editorTarget===section?.id));
    };
    const selectLayer=(layer,text=null)=>{
      if(!layer)return;
      selectedLayer=layer;selectedSection=layer.closest('.editor-section');selectedText=text||$('.editable-text',layer);
      $$('.editable-layer',editor).forEach(el=>el.classList.toggle('selected',el===layer));
      markSection(selectedSection);syncInspector();
    };
    const selectSection=section=>{
      if(!section)return;
      markSection(section);
      const layer=$('.editable-layer',section);
      if(layer)selectLayer(layer,$('.editable-text',layer));
      else{selectedLayer=null;selectedText=null;$$('.editable-layer',editor).forEach(el=>el.classList.remove('selected'));syncInspector();}
      if(canvas){
        const cr=canvas.getBoundingClientRect(),sr=section.getBoundingClientRect();
        canvas.scrollTo({top:Math.max(0,canvas.scrollTop+(sr.top-cr.top)-4),behavior:'auto'});
      }
    };

    $('.editor-block-btn',editor).forEach(btn=>{
      btn.addEventListener('click',e=>{
        if(e.target.closest('.section-drag-grip')){e.preventDefault();return;}
        selectSection(document.getElementById(btn.dataset.editorTarget));reactEditor();
      });
      btn.addEventListener('keydown',e=>{
        if(!e.altKey||(e.key!=='ArrowUp'&&e.key!=='ArrowDown'))return;
        const buttons=$$('.editor-block-btn',palette),index=buttons.indexOf(btn);
        const nextIndex=e.key==='ArrowUp'?index-1:index+1;
        if(nextIndex<0||nextIndex>=buttons.length)return;
        e.preventDefault();
        if(e.key==='ArrowUp')buttons[nextIndex].before(btn);else buttons[nextIndex].after(btn);
        commitSidebarOrder(btn);
        selectSection(document.getElementById(btn.dataset.editorTarget));
        btn.focus();reactEditor();
      });
      const grip=$('.section-drag-grip',btn);
      grip?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();});
      grip?.addEventListener('pointerdown',e=>{
        if(e.button!==undefined&&e.button!==0)return;
        e.preventDefault();e.stopPropagation();
        const section=document.getElementById(btn.dataset.editorTarget);
        if(section)selectSection(section);
        btn.classList.add('reordering');palette?.classList.add('is-reordering');
        let lastTarget=null,lastAfter=null,moved=false;
        const horizontal=()=>matchMedia('(max-width:700px)').matches;
        const move=ev=>{
          ev.preventDefault();
          const hit=document.elementFromPoint(ev.clientX,ev.clientY);
          const target=hit?.closest?.('.editor-block-btn');
          if(!target||target===btn||!palette?.contains(target))return;
          const rect=target.getBoundingClientRect();
          const after=horizontal()?ev.clientX>rect.left+rect.width/2:ev.clientY>rect.top+rect.height/2;
          if(target===lastTarget&&after===lastAfter)return;
          if(after)target.after(btn);else target.before(btn);
          commitSidebarOrder(btn);
          lastTarget=target;lastAfter=after;moved=true;
        };
        const finish=()=>{
          window.removeEventListener('pointermove',move);
          window.removeEventListener('pointerup',finish);
          window.removeEventListener('pointercancel',finish);
          btn.classList.remove('reordering');palette?.classList.remove('is-reordering');
          if(moved){
            btn.classList.add('reorder-settled');
            setTimeout(()=>btn.classList.remove('reorder-settled'),420);
            reactEditor();
          }
        };
        window.addEventListener('pointermove',move,{passive:false});
        window.addEventListener('pointerup',finish,{once:true});
        window.addEventListener('pointercancel',finish,{once:true});
      });
    });
    $$('.editor-section',editor).forEach(section=>section.addEventListener('pointerdown',e=>{if(!e.target.closest('.editable-layer'))selectSection(section);}));

    $$('.editable-layer',editor).forEach(layer=>{
      layer.addEventListener('pointerdown',()=>selectLayer(layer,selectedText&&layer.contains(selectedText)?selectedText:$('.editable-text',layer)));
      $$('.editable-text',layer).forEach(text=>{
        const choose=()=>selectLayer(layer,text);
        text.addEventListener('focus',choose);text.addEventListener('pointerdown',choose);
        text.addEventListener('input',()=>{selectLayer(layer,text);if(inspectorInput)inspectorInput.value=text.textContent||'';reactEditor();});
      });
      const handle=$('.drag-handle',layer);
      const beginDrag=(startX,startY,mode)=>{
        selectLayer(layer,selectedText&&layer.contains(selectedText)?selectedText:$('.editable-text',layer));
        const section=layer.closest('.editor-section');if(!section)return;
        const startDx=Number(layer.dataset.dx||0),startDy=Number(layer.dataset.dy||0),baseLeft=layer.offsetLeft,baseTop=layer.offsetTop;
        layer.classList.add('dragging');
        const apply=(clientX,clientY)=>{
          const minDx=-baseLeft,maxDx=section.clientWidth-layer.offsetWidth-baseLeft-6,minDy=-baseTop,maxDy=section.clientHeight-layer.offsetHeight-baseTop-6;
          const dx=Math.min(maxDx,Math.max(minDx,startDx+clientX-startX)),dy=Math.min(maxDy,Math.max(minDy,startDy+clientY-startY));
          layer.dataset.dx=dx.toFixed(1);layer.dataset.dy=dy.toFixed(1);layer.style.transform='translate3d('+dx+'px,'+dy+'px,0)';syncInspector();
        };
        if(mode==='mouse'){
          const move=ev=>apply(ev.clientX,ev.clientY);
          const up=()=>{window.removeEventListener('mousemove',move);layer.classList.remove('dragging');reactEditor();};
          window.addEventListener('mousemove',move);window.addEventListener('mouseup',up,{once:true});
        }else{
          const move=ev=>{ev.preventDefault();const t=ev.touches[0];if(t)apply(t.clientX,t.clientY);};
          const up=()=>{window.removeEventListener('touchmove',move);layer.classList.remove('dragging');reactEditor();};
          window.addEventListener('touchmove',move,{passive:false});window.addEventListener('touchend',up,{once:true});window.addEventListener('touchcancel',up,{once:true});
        }
      };
      handle?.addEventListener('mousedown',e=>{if(e.button!==0)return;e.preventDefault();e.stopPropagation();beginDrag(e.clientX,e.clientY,'mouse');});
      handle?.addEventListener('touchstart',e=>{const t=e.touches[0];if(!t)return;e.preventDefault();e.stopPropagation();beginDrag(t.clientX,t.clientY,'touch');},{passive:false});
    });

    inspectorInput?.addEventListener('input',()=>{if(selectedText){selectedText.textContent=inspectorInput.value;reactEditor();}});
    $$('.editor-swatches button',editor).forEach(btn=>btn.addEventListener('click',()=>{if(selectedSection){const color=btn.dataset.color;selectedSection.style.background=color;selectedSection.style.color=readableText(color);reactEditor();}}));
    alignButtons.forEach(btn=>btn.addEventListener('click',()=>{if(selectedLayer){applyAlignment(selectedLayer,btn.dataset.align);reactEditor();}}));

    $('#editorReset')?.addEventListener('click',()=>{
      $$('.editable-text',editor).forEach(el=>el.textContent=el.dataset.initialText||'');
      $$('.editable-layer',editor).forEach(el=>{el.style.left=el.dataset.initialLeft||'0%';el.style.top=el.dataset.initialTop||'0%';el.style.transform='';el.dataset.dx='0';el.dataset.dy='0';applyAlignment(el,'left');});
      $('.editor-section',editor).forEach(section=>{section.style.removeProperty('background');section.style.removeProperty('color');});
      restoreSectionOrder();
      if(canvas)canvas.scrollTop=0;
      const hero=$('[data-editable="heroTitle"]',editor);selectLayer(hero,$('.editable-title',hero)||$('.editable-text',hero));reactEditor();
    });
    selectLayer(selectedLayer,selectedText);
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
    $('.workflow-step',workflowDemo||document).forEach(step=>{step.classList.remove('active','done','just-completed');step.style.removeProperty('--workflow-hold');});
    if(workflowRun)workflowRun.disabled=false;
    setWorkflowStatus('workflowWaiting');
  };
  const activateWorkflowStep=(name,hold)=>{
    const step=$(`.workflow-step[data-step="${name}"]`,workflowDemo||document);
    if(!step)return;
    if(hold)step.style.setProperty('--workflow-hold',hold+'ms');
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
    // Deliberately paced so visitors can read each operational state instead of watching a flash-by demo.
    const workflowTiming=reduced
      ? {start:0,step:24,courier:48,gap:8,finish:40}
      : {start:1600,step:3600,courier:5200,gap:800,finish:1200};
    let t=workflowTiming.start;
    workflowOrder.forEach(name=>{
      const hold=name==='courier'?workflowTiming.courier:workflowTiming.step;
      const gap=workflowTiming.gap;
      workflowTimers.push(setTimeout(()=>{
        if(name==='courier')workflowDemo.classList.add('courier-click');
        activateWorkflowStep(name,hold);
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
    },t+workflowTiming.finish));
  };
  workflowRun?.addEventListener('click',runWorkflow);
  placeOrderDemo?.addEventListener('click',runWorkflow);
  if(workflowCard){
    const workflowObserver=new IntersectionObserver(entries=>{
      if(entries.some(e=>e.isIntersecting)&&!workflowPlayed){
        workflowTimers.push(setTimeout(runWorkflow,1200));
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
  ['#pricing','#closing','#editorDemo','#orderWorkflowCard','#templates','.hero-store-shell'].forEach(s=>{const el=$(s);if(el)convObs.observe(el)});
  $('#stickyClose')?.addEventListener('click',()=>{dismissed=true;sessionStorage.setItem('ezcomo-v4-sticky','1');refreshSticky()});

  applyLanguage('en'); selectTemplate('threads'); selectDirection('fashion'); renderFaq();
})();

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  TranquiClean — Site Configuration                                  ║
// ║  Update the values below and the site will populate automatically.  ║
// ╚══════════════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── Business Identity ──────────────────────────────────────────────
  businessName: "TranquiClean",
  tagline: "Professional, owner-operated house cleaning in Chicagoland, IL.",

  phone: {
    display: "(224) 321-3302",        // How the number appears on the page
    link:    "+12243213302",           // tel: link format (digits only, with country code)
  },

  email: "hello@tranquiclean.com",
  website: "https://www.tranquiclean.com",
  bookingUrl: "https://tranquiclean.setmore.com",
  homeaglowUrl: "https://www.homeaglow.com/alexsisme",

  // ── Location ───────────────────────────────────────────────────────
  address: {
    locality:   "Woodridge",
    region:     "IL",
    postalCode: "60517",
    country:    "US",
  },

  serviceArea: {
    display: "Chicagoland, IL",                  // shown in contact section
    primary: "Woodridge",                         // main city name used in copy
    county:  "DuPage County",
  },

  // Cities for structured data, FAQ answer, and footer tags
  serviceAreas: [
    "Woodridge", "Naperville", "Downers Grove",
    "Chicago", "Oak Park", "Wheaton",
    "Aurora", "Bolingbrook", "Lisle", "Hinsdale",
  ],

  // Additional neighborhoods shown only in the footer
  footerAreas: [
    "Woodridge", "Naperville", "Downers Grove",
    "Chicago", "Oak Park", "Wheaton",
    "Aurora", "Bolingbrook", "Lisle", "Hinsdale",
  ],

  // ── Hours ──────────────────────────────────────────────────────────
  hours: {
    display: "Mon\u2013Fri 9am\u20134pm",  // shown on page
    weekday:  { opens: "09:00", closes: "16:00" },
  },

  // ── Social Media Links ─────────────────────────────────────────────
  // Set to "" or null to hide the icon entirely
  social: {
    instagram: "",   // e.g. "https://www.instagram.com/tranquiclean"
    facebook:  "",   // e.g. "https://www.facebook.com/tranquiclean"
    nextdoor:  "",   // e.g. "https://nextdoor.com/pages/tranquiclean"
  },

  // ── SEO / Meta Tags ────────────────────────────────────────────────
  seo: {
    title:       "TranquiClean | Professional House Cleaning in Chicagoland, IL",
    description: "TranquiClean offers reliable, owner-operated house cleaning services across Chicagoland, IL. Standard cleaning, deep cleaning, and apartment cleaning. Book today!",
    keywords:    "Chicagoland house cleaning, Woodridge house cleaning, apartment cleaning Chicagoland, deep cleaning Chicagoland, residential cleaning service",
    ogTitle:     "TranquiClean | Professional House Cleaning in Chicagoland, IL",
    ogDescription: "Relax. We\u2019ve got the cleaning covered. Owner-operated, reliable house cleaning across Chicagoland.",
  },

  // ── Hero Section ───────────────────────────────────────────────────
  hero: {
    badge: "Owner-Operated \u2022 Chicagoland",
    stats: {
      homesCleaned: "200+",
      averageRating: "5.0",
    },
  },

  // ── Testimonials ───────────────────────────────────────────────────
  // Real reviews live on Homeaglow (see homeaglowUrl above). Leave empty
  // to hide the in-site testimonials grid and link out to Homeaglow instead.
  testimonials: [],

  // ── Pricing ────────────────────────────────────────────────────────
  pricing: {
    standard: { price: "$100", unit: "/ visit", note: "Starting price for 1BR" },
    deep:     { price: "$150", unit: "/ visit", note: "Starting price for 1BR" },
  },

  // ── About Section ──────────────────────────────────────────────────
  about: {
    heading: "Need cleaning? You came to the right place!",
    paragraphs: [
      "My name is Alexsis, I\u2019m a mom to a toddler, wife and cat owner. Cleaning is my passion! I got my first experience cleaning locker rooms, bathrooms, saunas, and the gym area. Even though I carry a lot of commercial experience, at home I love detailing and cleaning!",
      "I have to clean with shoes on for my own posture support, but I can easily put on shoe covers if your home has a no-shoes policy.",
      "I prefer to keep the heat off and windows open during my cleaning sessions to allow fresh air to circulate. This not only makes the house smell extra fresh but also helps the cleaning products dry faster.",
      "In my spare time, I enjoy going to the gym and catching movies with my husband.",
      "I look forward to making your cleaning goals go from vision to reality!",
    ],
    checklist: [],
  },

  // ── FAQ (service-area answer is auto-generated from serviceAreas) ──
  faq: [
    {
      question: "Do I need to provide cleaning supplies?",
      answer:   "Nope. I bring all my own professional-grade supplies and equipment. If you have specific products you prefer or any allergies, just let me know and I\u2019m happy to accommodate.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer:   "Not at all. Many of my clients provide a key or door code. I\u2019m fully insured and take security seriously. You\u2019ll get a text when I arrive and when I finish.",
    },
    {
      question: "What areas do you serve?",
      answer:   null,  // auto-generated from serviceAreas below
    },
    {
      question: "How do I pay?",
      answer:   "I accept Venmo, Zelle, Cash App, and cash. Payment is due after each cleaning is complete \u2014 simple and straightforward.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer:   "Life happens. I just ask for 24 hours\u2019 notice for cancellations or reschedules. Just text or call and we\u2019ll find a new time. No penalties, no hassle.",
    },
    {
      question: "How long does a typical cleaning take?",
      answer:   "A standard cleaning for a one-bedroom apartment usually takes 1.5 to 2.5 hours. Deep cleans and move-out cleanings take longer depending on the size and condition. I\u2019ll give you an estimate upfront.",
    },
  ],

  // ── Google Calendar Embed URL ──────────────────────────────────────
  // Replace with your real Google Calendar embed URL or Calendly link.
  // Set to "" to hide the calendar section.
  calendarEmbedUrl: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showNav=1&showTitle=0&mode=WEEK&src=en.usa%23holiday%40group.v.calendar.google.com",

  // ── Amazon Affiliate Product Links ─────────────────────────────────
  // Add as many products as you want. They'll be auto-rendered on the page.
  // Categories are used for filter tabs. Use consistent category names.
  // Set image to "" to use a placeholder icon.
  products: [
    {
      name: "OxiClean Odor Blasters Odor & Stain Remover Laundry Power Paks, 24 Ct",
      description: "Powerful laundry paks that tackle tough odors and set-in stains. Just toss one in — no measuring needed.",
      url: "https://www.amazon.com/Arm-Hammer-Blasters-Stain-Remover/dp/B0C8CH7XCG?&linkCode=ll2&tag=tranquiclean-20&linkId=8d24ad8a53ffa4eaf39b7f5762e078c0&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/81s2bNLhOSL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Easy-Off Heavy Duty Oven Cleaner",
      description: "Cuts through tough baked-on grease and grime. Spray on, wipe off — makes oven cleaning effortless.",
      url: "https://www.amazon.com/Easy-Off-Heavy-Cleaner-Regular/dp/B0D14XHGQ5?&linkCode=ll2&tag=tranquiclean-20&linkId=548029100be112993c4c1f0fa0ab1d56&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71NJWsAsFUL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Glad Medium Drawstring Trash Bags with Clorox, 8 Gallon",
      description: "Odor-fighting trash bags with Clorox protection. Perfect size for kitchen and bathroom bins.",
      url: "https://www.amazon.com/Glad-Medium-Drawstring-Clorox-Package/dp/B08L4Q92QG?&linkCode=ll2&tag=tranquiclean-20&linkId=a43155fd066d01a48d41d1535e13e3a6&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71IjGzkODfL._AC_UL640_QL65_.jpg",
      category: "Supplies",
    },
    {
      name: "Guardsman Clean & Polish for Wood Furniture",
      description: "Cleans, shines, and protects wood surfaces in one step. Leaves a streak-free finish without buildup.",
      url: "https://www.amazon.com/Guardsman-Clean-Polish-Wood-Furniture/dp/B084NX7RPN?&linkCode=ll2&tag=tranquiclean-20&linkId=91a2562a8646c1981b0b9123ae8a3584&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71ZlzS+40KL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Clorox ToiletWand Disposable Toilet Cleaning System",
      description: "Disposable scrubbing heads with built-in cleaner. Click, swish, toss — no dirty brush sitting around.",
      url: "https://www.amazon.com/Clorox-ToiletWand-Disposable-Toilet-Cleaning/dp/B0010B5EQS?&linkCode=ll2&tag=tranquiclean-20&linkId=5c24ce5506188187b0b4ba8ec9959ecc&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71Xo5gXlVsL._AC_UL640_QL65_.jpg",
      category: "Tools",
    },
    {
      name: "O-Cedar PACS Hard Floor Cleaner, Crisp Citrus, 3-Pack",
      description: "Just drop a pac in your mop bucket — no measuring, no mess. Crisp citrus scent leaves floors sparkling clean.",
      url: "https://www.amazon.com/Cedar-Floor-Cleaning-Citrus-3-Packs/dp/B0BYZY7YWJ?&linkCode=ll2&tag=tranquiclean-20&linkId=8c40df1ff555bd66a66b9276cb990aef&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/81ihnigOaxL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Bar Keepers Friend Superior Cleanser & Polish, 12 oz",
      description: "A must-have for stainless steel, porcelain, and stubborn stains. Works wonders on sinks, cooktops, and bathtubs.",
      url: "https://www.amazon.com/Bar-Keepers-Friend-Superior-12-Ounces/dp/B000V6YLNA?&linkCode=ll2&tag=tranquiclean-20&linkId=33f113ae58098f7399d145fd95fda7be&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/81Yfj95aJ5L._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "BISSELL CleanView Compact Turbo Upright Vacuum",
      description: "Lightweight, powerful upright vacuum with turbo brush roll for pet hair. Compact design makes storage easy.",
      url: "https://www.amazon.com/Bissell-CleanView-Compact-Upright-3437F/dp/B0B6D6GML1?&linkCode=ll2&tag=tranquiclean-20&linkId=b63605afd9382d3d4070db6fff1d8b6d&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/61tBH8vXk1L._AC_UY436_QL65_.jpg",
      category: "Tools",
    },
    {
      name: "Lysol All Purpose Cleaner Spray, Hawaiian Sunset & Hibiscus",
      description: "Kills 99.9% of germs on hard surfaces while leaving a fresh tropical scent. Great for kitchens, bathrooms, and more.",
      url: "https://www.amazon.com/Lysol-Purpose-Cleaner-Spray-Hibiscus/dp/B07RHTQP68?&linkCode=ll2&tag=tranquiclean-20&linkId=84c14ca44fbc3db1846b517c4c8e40f6&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71+zNz6vPUL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Windex Glass Cleaner No-Drip Aerosol Foam",
      description: "Clings to glass and mirrors for a streak-free shine without dripping. Makes window cleaning quick and easy.",
      url: "https://www.amazon.com/Windex-Cleaner-No-Drip-Aerosol-Cleaning/dp/B0DN3J4ZPG?&linkCode=ll2&tag=tranquiclean-20&linkId=7ce8bd70ece581943a78bb2fcd32e75f&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71HXSvrd7ZL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Pledge Multisurface Allergen Remover Cleaner Spray",
      description: "Cleans and removes up to 90% of allergens from hard surfaces. Works on wood, stainless steel, granite, and more.",
      url: "https://www.amazon.com/Pledge-Allergen-Multisurface-Stainless-Multipurpose/dp/B06XD7BRJG?&linkCode=ll2&tag=tranquiclean-20&linkId=fc1b14bd3b968028c1c56fb229bc9c55&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71FfVVhaBhL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Lysol Bathroom Cleaner Foaming Spray, Hibiscus",
      description: "Foaming action clings to bathroom surfaces to dissolve soap scum and kill 99.9% of germs. Fresh hibiscus scent.",
      url: "https://www.amazon.com/Bathroom-Cleaner-Foaming-Bathrooms-Hibiscus/dp/B0BNP89SYZ?&linkCode=ll2&tag=tranquiclean-20&linkId=e0a06cfc9a3b0135cdf84ce350f0b820&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71rvp1vOO6L._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "O-Cedar EasyWring Spin Mop & Bucket System",
      description: "Hands-free wringing with a foot pedal. Microfiber head tackles hardwood, tile, and laminate like a pro.",
      url: "https://www.amazon.com/Cedar-EasyWring-Microfiber-Bucket-Cleaning/dp/B00WSWGVZQ?&linkCode=ll2&tag=tranquiclean-20&linkId=ef2e48e1193c466efbdbde7b5b7b98ad&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/819wSV5AEEL._AC_UL640_QL65_.jpg",
      category: "Tools",
    },
    {
      name: "Febreze Fabric Refresher Heavy Duty Crisp Clean Air Freshener (1 Count, 500 mL)",
      description: "Eliminates tough odors trapped in fabrics — couches, curtains, carpets, and more. Crisp Clean scent leaves everything smelling fresh.",
      url: "https://www.amazon.com/dp/B00GY5TLBY?&linkCode=ll2&tag=tranquiclean-20&linkId=6a5628841ce39c2b108f048fc0391085&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/61ipSm56uGL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "MyVaky 6Pcs Hard Bristle Crevice Cleaning Brush",
      description: "Slim brushes that reach tight gaps, tracks, and crevices. Perfect for window rails, faucets, and hard-to-reach spots.",
      url: "https://www.amazon.com/Crevice-Cleaning-Brush-Thin-Brush-Household/dp/B0D6JQWKD2?&linkCode=ll2&tag=tranquiclean-20&linkId=51550083bf913fd747c1c691a6223c7f&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71NJ20XOCyL._AC_UL640_QL65_.jpg",
      category: "Tools",
    },
    {
      name: "PUMIE Scouring Stick — Heavy Duty Cleaning Power",
      description: "Pumice stone that removes tough buildup from toilets, grout, and hard surfaces without scratching. A pro cleaning secret.",
      url: "https://www.amazon.com/dp/B018UR7LPG?&linkCode=ll2&tag=tranquiclean-20&linkId=136e6fa108f674b268fdb923f07012a3&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/91K5aFWCGcL._AC_UL640_QL65_.jpg",
      category: "Tools",
    },
    {
      name: "Arm & Hammer Baking Soda, Pure & Natural, 2.7lb Bag",
      description: "The ultimate multi-purpose cleaner. Deodorizes, scrubs, and freshens — from kitchen sinks to carpets. A cleaning staple.",
      url: "https://www.amazon.com/dp/B0CJCXLDSP?&linkCode=ll2&tag=tranquiclean-20&linkId=5819f473df6a5d7d685e8a1b74d658fd&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71ZleeAnK2L._AC_UL640_QL65_.jpg",
      category: "Supplies",
    },
    {
      name: "Method Bathroom Cleaner, Removes Mold + Mildew Stains, Eucalyptus Mint, 28 Fl Oz",
      description: "Plant-based formula that tackles mold and mildew stains without harsh fumes. Fresh eucalyptus mint scent.",
      url: "https://www.amazon.com/dp/B00O33FY4W?&linkCode=ll2&tag=tranquiclean-20&linkId=fe09fcc331018c73b0a5df6f95db8d88&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/61K0X6YsMmS._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Method All-Purpose Cleaner Spray, French Lavender, 28 Fl Oz",
      description: "Plant-based all-purpose spray that works on counters, tiles, and more. Lovely French lavender scent.",
      url: "https://www.amazon.com/dp/B0013FRRMK?&linkCode=ll2&tag=tranquiclean-20&linkId=039921ad7d313c1a92d6c2d4d0c1f321&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/61zvdd3NeYL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "HOTO Wand Cordless Spin Scrubber with 12 Brush Heads",
      description: "Rechargeable electric scrubber that powers through grout, tiles, corners, and crevices. IPX7 waterproof — use it anywhere.",
      url: "https://www.amazon.com/dp/B0F1F98L5S?&linkCode=ll2&tag=tranquiclean-20&linkId=75871e5b6bb937e4bcc833ce027b20fd&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71O3Sm0obKL._AC_UL640_QL65_.jpg",
      category: "Tools",
    },
    {
      name: "365 by Whole Foods Market Baking Soda, 16 Ounce",
      description: "A clean, no-frills baking soda for deodorizing, scrubbing, and freshening. Great budget-friendly staple for everyday cleaning tasks.",
      url: "https://www.amazon.com/365-Everyday-Value-Baking-Powder/dp/B074H7CBXJ?crid=1FLEA9UQXY1MM&dib=eyJ2IjoiMSJ9.4OBLObxd9IUI6WHeiC6uV3AeiStwB1utmF-DUGhYWic-Tq6QMS30dKGYlK67nB_CVBeJ8oGNCz3iXigwF23HuvN0o7tfRAdNmM0XrXVwGW7EkAyatIUg8URa32BpUWX3ncqtGv2YwX13U5Bb8bkPOIc9iVdb7KIhEhYj14cOmkw4fMRUtufpyoum0F8YIN8lww2SfEfV5AVDhjCgjLP05tJ1XkKcDEbE_4L5GNMVFAhFj7OVLbJxUxJCyjgtNXMpoCKFpoAnA76AvapIKtoFu9aN_sW5-w9WcXPttFywKoc.9IChmWab_3jijAlQ-OQQW4517n7tJvbHNV0DY5bQack&dib_tag=se&keywords=365%2Bby%2Bwhole%2Bfoods%2Bmarket%2C%2Bbaking%2Bsoda%2C%2B16%2Bounce&nsdOptOutParam=true&qid=1782691073&sprefix=365%2Bby%2BWhole%2BFoods%2BMarket%2C%2BBaking%2BSoda%2C%2B16%2BOunce%2Caps%2C170&sr=8-1&th=1&linkCode=ll2&tag=tranquiclean-20&linkId=0725715bfbc72c4b492287c26fb15406&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/51BEW4IJkdL._AC_UL640_QL65_.jpg",
      category: "Supplies",
    },
    {
      name: "Mr. Clean Magic Eraser Bathroom Scrubber",
      description: "Powerful melamine scrubber that lifts soap scum, grime, and scuff marks with just water. A go-to for tubs, tile, and stubborn marks on walls.",
      url: "https://www.amazon.com/Mr-Clean-Cleaning-Scrubber-Bathroom/dp/B0FX5J7PYL?crid=383QF206QPGHA&dib=eyJ2IjoiMSJ9.hCKFI5cECXOMCrvjCBrNCftymNeb9b_TzDpmvwgSTEzgOt0zmnfTelT5nvn7pDqwF2obSpjQ5KksmtvVekqAtx5a0_tMe37xAEsN_fZOtX5ehToy63Le2RvsnbyE5ZNI1p0Y41817WbcwXHQ4aeSiPWW2BqLnjOFxA4gBxZms8KXNTxKinMjyMhsiHGzBJcTaOXZAnWIrOeDpsgjYnDm1T8I0Uup_vMttUa39gKjXYJ8hUM33nY3BNvjOTzZ9dnolS3bBPsM79jqcuDHvDlGagzN4UDFOFvmYmuP5UD0sT8.KPxa-mzUaM3cyiWlWPou6R14f5uSlUXTl2C9sIHo9II&dib_tag=se&keywords=amazon%2Bbasics%2Bmagic%2Beraser%2Bsponge&qid=1782691282&sprefix=amazon%2Bbasics%2Bmagic%2Be%2Caps%2C188&sr=8-1&th=1&linkCode=ll2&tag=tranquiclean-20&linkId=1aa6d3c0ba1a156cd2c78dc03c6542a0&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/81C3jjoszjL._AC_UL640_QL65_.jpg",
      category: "Tools",
    },
    {
      name: "Soft Scrub Cleanser with Lemon, 24 oz (2-Pack)",
      description: "Gentle but tough cream cleanser that powers through soap scum, grease, and stains without scratching. Fresh lemon scent leaves surfaces sparkling.",
      url: "https://www.amazon.com/Soft-Scrub-Cleanser-Lemon-oz-2/dp/B00GMO02LA?crid=1N184I8SOMYWF&dib=eyJ2IjoiMSJ9.yHKFuTbdMKUawsYxDIeig46TQ0xZ-UgeFYqGUPdelqqPFj4caDujiCiKT39G8-3m6kvHnEwPLKuAm0VGrXUj1IA2KRhWY_l4O1WBNIyLpFVWqe5z5Bup9pi3uoWC-jreYuZzP7Pp6gyP8BY3Uj9HxqgM_fP5KYS2exnsRjLthbOQGnMYc2zNqUl06tlxRmbIZ2qO_UFeCaQC9ytyyncxy34egRqzBxuDSg7COarEb8cwCKS1lmhJ4k3WqKLkE-Cg-62svszK324vaz_p-o2hoUcY0FZpDH9lLRznC9vCtlM.ycoDUOoLP_U8BF02os4EqLjxksgzEFay8YrNasI-g34&dib_tag=se&keywords=Soft%2BScrub%2BCleanser%2C%2BLemon%2C%2B24%2Boz-2%2Bpk&qid=1782691356&sprefix=soft%2Bscrub%2Bcleanser%2C%2Blemon%2C%2B24%2Boz-2%2Bpk%2Caps%2C220&sr=8-1&th=1&linkCode=ll2&tag=tranquiclean-20&linkId=1278d87e0edd19a43febf54fbc3b3871&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/81pXuytLuRL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Weiman Quartz Countertop Cleaner & Polish, Citrus, 24 oz",
      description: "Cleans, shines, and protects quartz, granite, and marble in one step. UV anti-fade protection keeps stone countertops looking new. Includes microfiber cloth.",
      url: "https://www.amazon.com/Weiman-Quartz-Countertop-Cleaner-Polish/dp/B07T77PVHP?crid=21S3M5KHMV9AU&dib=eyJ2IjoiMSJ9.x3LLI3Tm4OfshjOK4Fwj-rmyWyz1bakzTKJx6S-IEZnBjZuJBrtDpTCJlwtvJHwvpvOOKgLo3LjY5JWNU6mIP4w8B-FNbKyfnZ8N8DG-dUSG4d2bziwlLlIJEcP5DTd5KZjlNKz0-gj3wDJUyiIpi6GzfE9aXbzXgGM4865udIPGuvQAbe7DdkNdrVRJh98FcV64WxgtdyMdZXrtyl-30CPSmAkri01uO3KFl_OAobQKBpXjFjBAWecNvmGjCd025pycp7bJUWpQ3WFwmuLt_B3wEtVTPDSrobz37NqtgJ8.yP8vLYLBMhAyX84TlLACG-4catYB0mkZ6V12-JTYbL4&dib_tag=se&keywords=Weiman+Quartz+Countertop+Cleaner+and+Polish+-+Clean+and+Shine+Your+Granite%2C+Marble+Countertops%2C+Kitchen+Island%2C+and+Stone+Surfaces+with+UV+Anti-Fade+Protection%2C+Citrus%2C+24+Ounce+with+Microfiber+Cloth&nsdOptOutParam=true&qid=1782691398&sprefix=weiman+quartz+countertop+cleaner+and+polish+-+clean+and+shine+your+granite%2C+marble+countertops%2C+kitchen+island%2C+and+stone+surfaces+with+uv+anti-fade+protection%2C+citrus%2C+24+ounce+with+microfiber+cloth%2Caps%2C227&sr=8-5&linkCode=ll2&tag=tranquiclean-20&linkId=e562b62ea0f82431eeab8337a1cec203&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/51WytNySHOL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Weiman Disinfectant Granite Daily Clean & Shine, 24 Fl Oz",
      description: "Disinfects, cleans, and shines granite, marble, and stone countertops in one spray. Kills 99.9% of germs while protecting the natural finish.",
      url: "https://www.amazon.com/Weiman-Disinfectant-Granite-Daily-Clean/dp/B00H341S5C?crid=2XMU02KVCMBXP&dib=eyJ2IjoiMSJ9.pJkdQk_Sw-bpURvz1ocjOxeS3Xp2TfYMGB2hQ65Tk-ZQvHmDh8nKlsb-ywNuMszXBR6tG3_kJIH4QOB9el0LXi0wtkJAWQK9XQQD31w70JzGF_G2fU0uCoYYGGcWDTcyJRMbPBGWNBvtQvm_vz7o2zJhEj6m3jvojSDpQeODCo8_aOR47MQIs1tczYiJ4qWz4OOzLGENIR8k7YQ2-lGo201HM9wm4bWQLjlm4oOX1rMiV6yOQHFw55c287ParbBjDt1tRL835AMy9aGusGX22ak3FXc9uPzzLVCHGTpWiHA.UIWRZoJotSHLztjPE-H2oyCbQMOxUoBwlfH94-u_TWs&dib_tag=se&keywords=Weiman+Disinfectant+Granite+Daily+Clean+%26+Shine%2C+24+Fl+Oz+%28Pack+of+1%29&nsdOptOutParam=true&qid=1782691488&sprefix=weiman+disinfectant+granite+daily+clean+%26+shine%2C+24+fl+oz+pack+of+1+%2Caps%2C192&sr=8-6&linkCode=ll2&tag=tranquiclean-20&linkId=604e6a97d0f7745c3f94fef80500c7b2&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/612aZ5yOh6L._AC_SY300_SX300_QL70_ML2_.jpg",
      category: "Cleaners",
    },
    {
      name: "Weiman Cabinet & Wood Clean & Shine Spray, Fresh Almond",
      description: "Cleans, polishes, and protects wood cabinets, furniture, baseboards, and trim in one step. Fresh almond scent and includes a microfiber cloth.",
      url: "https://www.amazon.com/Weiman-Cleaner-Furniture-Polish-Spray/dp/B08143321B?crid=2ENJ51DZCTDA4&dib=eyJ2IjoiMSJ9.-urABZ2X9zFLz8iPpOcCm8Ns4JrrkGzDuNoIzwJ551M-6zoGiytpIvyUjygqeXpKAmvBLYn_cZ8lDpk0-mLSd1ZmpamYEh7rBlp556J2QIwUf30G-dB6qAwgyD_nB-rOZ7PKOFcKEwq-yRDeAsH3ZdCT0sIF4taWcIRL-Grnf5VQ7VW6tJZjmuNTIfpnayiThXhEGpOamDHhlR8Vi36yyXfsPDG4NuPAb2jV0TMbfaIkB1YetCwrqW-cYrC5DHRIvHZw6YMvCJ7KYcFZEOQXDQN0lHI2p9mfkMqz-FzmP0E.P0Q1WHkgVbZVbimRX-K1zd4ZYmlhXAumUivWMXs6_GA&dib_tag=se&keywords=Weiman%2BCabinet%2B%26%2BWood%2BClean%2B%26%2BShine%2BSpray%2B-%2BFurniture%2C%2BKitchen%2BCabinets%2C%2BBaseboard%2B%26%2BTrim%2C%2BFresh%2BAlmond%2BScent%2C%2BMicrofiber%2BCloth%2BIncluded&nsdOptOutParam=true&qid=1782691533&sprefix=weiman%2Bcabinet%2B%26%2Bwood%2Bclean%2B%26%2Bshine%2Bspray%2B-%2Bfurniture%2C%2Bkitchen%2Bcabinets%2C%2Bbaseboard%2B%26%2Btrim%2C%2Bfresh%2Balmond%2Bscent%2C%2Bmicrofiber%2Bcloth%2Bincluded%2Caps%2C163&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=tranquiclean-20&linkId=40ed00ac348c2dbe25f7bb47e59b2952&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/61xNOOsVFVL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "COZZIVITA Aluminum Gas Stove Burner Covers, 50-Pack",
      description: "Disposable foil liners that catch grease and spills under gas burners. Keeps stovetops clean — just swap them out instead of scrubbing baked-on messes.",
      url: "https://www.amazon.com/COZZIVITA-Aluminum-Burner-Covers-Thicker/dp/B0C49DV6H8?crid=1WVREYIPW1LGM&dib=eyJ2IjoiMSJ9.2On6l75LlHWRowCp6ScKnstRpJA8VbpLv3m2JXWVcf2VKzWXQVz7knP56dpA9dllIK7R2hkEXZaGeDR3HYd5OMWWAU4aOhWcTtvyIw5lf3xf6hMmbqPWTim5qnK6jnN_XRjGGrRVk-V2pRi3qWG681kpEVkrgFuBql5jknc21_SP-W_xAA4yxu-MQvtlE2zDpW03aoKr5WUCbcDivnONk9pw41M_GGlvxLXiXFi63jaN9MraGvIBZyRioU5eSXv6lTA-S1uRTTeqJBlOQGV2NEWwqw38D-OE3K0M_f70BGo.CR-Nez06iCA42baYWT2crP1tjvFoFWwEPN9bhBU2j0I&dib_tag=se&keywords=COZZIVITA%2B50pc%2BAluminum%2BGas%2BStove%2BBurner%2BCovers%2B-Thicker%2BFoil%2BSquare%2BBurner%2BLiners%2B-%2BDisposable%2BGas%2BRange%2BProtectors%2C%2B50%2BPack%EF%BC%88Outer%2Bdiameter%3A%2B8.5%2Bx%2B8.5%2Binch%EF%BC%89&nsdOptOutParam=true&qid=1782691605&sprefix=cozzivita%2B50pc%2Baluminum%2Bgas%2Bstove%2Bburner%2Bcovers%2B-thicker%2Bfoil%2Bsquare%2Bburner%2Bliners%2B-%2Bdisposable%2Bgas%2Brange%2Bprotectors%2C%2B50%2Bpack%2Bouter%2Bdiameter%2B8.5%2Bx%2B8.5%2Binch%2B%2Caps%2C199&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=tranquiclean-20&linkId=f79c1128921e5d856ee2018293ad39c5&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/71OCClEUqUL._AC_UL640_QL65_.jpg",
      category: "Supplies",
    },
    {
      name: "OdoBan No Rinse Neutral pH Floor Cleaner Concentrate, 2 Gallons",
      description: "Pet-safe, no-rinse floor cleaner concentrate that works on hardwood, tile, laminate, and more. Splash O' Citrus scent leaves floors fresh without residue.",
      url: "https://www.amazon.com/OdoBan-Rinse-Neutral-Cleaner-Concentrate/dp/B079JWC7LP?crid=7KDMU9Y8QN5B&dib=eyJ2IjoiMSJ9._lglpp-HuoGwu1U81RGc83gLZNoPj-opBsaJ1-u88CtlDBE05Dx24fOOdMv5eo9WFZWsuXlV2bWoIwfi65K5IGBUKBFdnhCNjz5HETpAaMsMwPz0lBSSxKW2RNvtrDhzYeNqg8u0TYluo0otC1qGR1ifvA3g0X9F5r381ffW_Y9N6EL3W8kNO6e0S5mRDwLap0fAQADJc-pIqgIOWdy6T7hI1hdO47JIjZFDJOtafaj4kUlWY18U_dM3x9_sIknkQtOpPOWiAX858N1sos_AVs5q2aLlBK7GlLmLBnrfEWY.AKG89q6ynrwwJOeJ8JzOEJOkon74mFme9fIc3uVWg-k&dib_tag=se&keywords=OdoBan+Pet+Solutions+No+Rinse+Neutral+pH+Floor+Cleaner+Concentrate%2C+Made+in+the+USA%2C+Splash+O%27+Citrus+Scent%2C+2+Gallons&nsdOptOutParam=true&qid=1782691657&sprefix=odoban+pet+solutions+no+rinse+neutral+ph+floor+cleaner+concentrate%2C+made+in+the+usa%2C+splash+o%27+citrus+scent%2C+2+gallons%2Caps%2C165&sr=8-5&linkCode=ll2&tag=tranquiclean-20&linkId=597cd6fb60214a0276e4cce49a646271&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/8153hrBtuiL._AC_UL640_QL65_.jpg",
      category: "Cleaners",
    },
    {
      name: "Moriko Portable Rechargeable Shower with 5-Gallon Foldable Bucket",
      description: "Cordless, rechargeable shower pump with filtered head and collapsible 5-gallon bucket. Handy for rinsing, pet baths, outdoor cleanup, and hard-to-reach tasks.",
      url: "https://www.amazon.com/Portable-Rechargeable-Filtered-Foldable-Cleaning/dp/B0CZ43KJRS?crid=AKB27NR8AWMP&dib=eyJ2IjoiMSJ9.oIYeHI7qXo-qFvXyvhPIOXX6Jt8uBBf-fC9vBJdj73iv30qb4GhA3VhyjmLHwhqrQMG9BPl2axjHPSyc3o9hOna8M7DQd31zox8iWy5jGl6fhqXfpI-dwIRCqQJqRpsuSuMOWl6FYEBMzWVxCLHUUp2-XNpom6c6Z67fqBFm26Ms4Qt-4V3zyBgMzvU4JKnIuoBUZ4wNRDy-VU6Df_eTqUZ3UNO-A3cODhfeYHrN3IJ7gULNRcajCNCkZDHDASh9Xv7nO_3qOtTBkfXUhsBhVDqoylX15tco9UXZitIt9Uo.-vgTYklj24F8_M8FphF6H_KnUkhcSqJEvNXU8ZWQmMs&dib_tag=se&keywords=Moriko%2BPortable%2BCamping%2BShower%2C%2B6000mAh%2BRechargeable%2BShower%2BPump%2C%2BFiltered%2BShower%2BHead%2B%26%2B5%2BGallons%2BFoldable%2BBucket%2C%2BOutdoor%2BShower%2Bfor%2BHiking%2BBeach%2C%2BTravel%2C%2BPet%2BBath%2C%2BCar%2BWashing%2C%2BSurf%2B%26%2BBoat%2BCleaning&nsdOptOutParam=true&qid=1782691711&sprefix=moriko%2Bportable%2Bcamping%2Bshower%2C%2B6000mah%2Brechargeable%2Bshower%2Bpump%2C%2Bfiltered%2Bshower%2Bhead%2B%26%2B5%2Bgallons%2Bfoldable%2Bbucket%2C%2Boutdoor%2Bshower%2Bfor%2Bhiking%2Bbeach%2C%2Btravel%2C%2Bpet%2Bbath%2C%2Bcar%2Bwashing%2C%2Bsurf%2B%26%2Bboat%2Bcleaning%2Caps%2C235&sr=8-1&th=1&linkCode=ll2&tag=tranquiclean-20&linkId=7e772cabca055b3abc3aed08ad1606c3&language=en_US&ref_=as_li_ss_tl",
      image: "https://m.media-amazon.com/images/I/81QrLxxz7OL._AC_UL640_QL65_.jpg",
      category: "Tools",
    },
    // ── Add more products below — just copy/paste this template: ──
    // {
    //   name: "Product Name",
    //   description: "Short description of the product.",
    //   url: "https://www.amazon.com/dp/YOUR_LINK",
    //   image: "",
    //   category: "Cleaners",  // Cleaners | Tools | Organization | Supplies
    // },
  ],

  // ── Contact Form ───────────────────────────────────────────────────
  // "google"    → Sends email via Google Apps Script (recommended)
  // "mailto"    → Uses mailto: link (requires visitor's email client)
  // "formspree" → Uses Formspree (set formspreeId below)
  contactForm: {
    method:          "google",           // "google" | "mailto" | "formspree"
    googleScriptUrl: "https://script.google.com/macros/s/AKfycbzsixzGoKapPw6K0F0HRm-yAv8LRybx018Mi2zITcWwQFTTl3nczvqo3aMR7GStlyGN/exec",
    formspreeId:     "",                 // e.g. "xrgvabcd" → https://formspree.io/f/xrgvabcd
  },
};

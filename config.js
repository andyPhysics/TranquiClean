// ╔══════════════════════════════════════════════════════════════════════╗
// ║  TranquiClean — Site Configuration                                  ║
// ║  Update the values below and the site will populate automatically.  ║
// ╚══════════════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── Business Identity ──────────────────────────────────────────────
  businessName: "TranquiClean",
  tagline: "Professional, owner-operated house cleaning in Jersey City, NJ.",

  phone: {
    display: "(224) 321-3302",        // How the number appears on the page
    link:    "+12243213302",           // tel: link format (digits only, with country code)
  },

  email: "hello@tranquiclean.com",
  website: "https://www.tranquiclean.com",
  bookingUrl: "https://tranquiclean.setmore.com",

  // ── Location ───────────────────────────────────────────────────────
  address: {
    locality:   "Jersey City",
    region:     "NJ",
    postalCode: "07302",
    country:    "US",
  },

  serviceArea: {
    display: "Jersey City & Hudson County, NJ",   // shown in contact section
    primary: "Jersey City",                         // main city name used in copy
    county:  "Hudson County",
  },

  // Cities for structured data, FAQ answer, and footer tags
  serviceAreas: [
    "Jersey City", "Hoboken", "Bayonne",
    "Weehawken", "Union City", "North Bergen",
  ],

  // Additional neighborhoods shown only in the footer
  footerAreas: [
    "Jersey City", "Hoboken", "Bayonne",
    "Weehawken", "Union City", "North Bergen",
    "The Heights", "Journal Square", "Downtown JC",
    "Newport", "Bergen-Lafayette", "Greenville",
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
    title:       "TranquiClean | Professional House Cleaning in Jersey City, NJ",
    description: "TranquiClean offers reliable, owner-operated house cleaning services in Jersey City, NJ. Standard cleaning, deep cleaning, and apartment cleaning. Book today!",
    keywords:    "Jersey City house cleaning, apartment cleaning Jersey City, deep cleaning Jersey City, residential cleaning service",
    ogTitle:     "TranquiClean | Professional House Cleaning in Jersey City, NJ",
    ogDescription: "Relax. We\u2019ve got the cleaning covered. Owner-operated, reliable house cleaning in Jersey City.",
  },

  // ── Hero Section ───────────────────────────────────────────────────
  hero: {
    badge: "Owner-Operated \u2022 Jersey City",
    stats: {
      homesCleaned: "200+",
      averageRating: "5.0",
    },
  },

  // ── Testimonials ───────────────────────────────────────────────────
  testimonials: [
    {
      quote: "I\u2019ve tried three different cleaning services before TranquiClean. The difference is night and day. My apartment has never looked this good, and it\u2019s the same person every time. That consistency matters.",
      name:     "Maria R.",
      initials: "MR",
      location: "Downtown Jersey City",
    },
    {
      quote: "Booked a move-out cleaning and I got my full security deposit back. Every corner was spotless. Communication was great and everything was on schedule. Highly recommend.",
      name:     "James T.",
      initials: "JT",
      location: "The Heights, Jersey City",
    },
    {
      quote: "As a busy parent, coming home to a clean house is everything. TranquiClean is reliable, thorough, and so easy to work with. It\u2019s like having a weight lifted every two weeks.",
      name:     "Sarah P.",
      initials: "SP",
      location: "Journal Square, Jersey City",
    },
  ],

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
  calendarEmbedUrl: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showNav=1&showTitle=0&mode=WEEK&src=en.usa%23holiday%40group.v.calendar.google.com",

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

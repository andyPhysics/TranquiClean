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
  // Update each URL with your real Amazon affiliate link.
  products: {
    product1: "https://www.amazon.com/dp/example1",
    product2: "https://www.amazon.com/dp/example2",
    product3: "https://www.amazon.com/dp/example3",
    product4: "https://www.amazon.com/dp/example4",
  },

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

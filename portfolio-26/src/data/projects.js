import accessnaija from "../assets/accessLandingPage.png"
import connector from "../assets/connectrApp.png"
import verde from "../assets/verdeHome.png"
//import wireframe from "../assets/accessNaija-wireframe.png"
import routewisefeatured from "../assets/routeFeatured.png"
import hirehubfeatured from "../assets/hirehubFeatured.png"
import ecostitchfeatured from "../assets/ecostitchFeatured.png"


export const uxProjects = [
  {
    id: "accessnaija",
    title: "AccessNaija",
    subtitle: "Accessibility-First Digital Learning for Nigerian Learners",
    category: "UX Case Study",
    tags: ["Accessibility", "EdTech", "UX Research", "Figma"],
    image: accessnaija,
    //wireframe: wireframe,
    type: "ux",
    color: "#0EA5E9",
    bgLight: "#E0F2FE",
    year: "2026",
    duration: "4+ weeks",
    role: "Lead UX Designer",
    tools: "Figma, Miro, FigJam",
    overview: "AccessNaija is an accessibility-first digital learning platform designed for Nigerian learners with visual impairments, dyslexia, and low-bandwidth constraints. The project tackled the gap in inclusive EdTech across sub-Saharan Africa.",
    problem: "Over 29 million Nigerians live with some form of disability, yet most digital learning platforms are designed without consideration for assistive needs, unreliable internet, or localized interaction patterns. Existing platforms lack offline support, local language modes, and WCAG-compliant design for the African context.",
    research: [
      "Conducted 12 user interviews with learners aged 16–34 across Lagos, Abuja, and Kano",
      "Identified 3 primary pain points: navigation complexity, lack of text-to-speech, and bandwidth-heavy interfaces",
      "Created 4 personas: Blind university student, dyslexic secondary school learner, rural low-bandwidth user, sighted learner with focus difficulties",
      "Mapped 5 end-to-end journey maps highlighting emotional friction points in onboarding and lesson reading",
    ],
    designDecisions: [
      "8px grid system for consistent spatial rhythm across all breakpoints",
      "Brand palette passing WCAG AA contrast for all text/background combos",
      "Inter typeface chosen for readability and OpenDyslexic toggle in dyslexia mode",
      "6 accessibility mode states: High Contrast, Dyslexia Mode, Font Scaling, Simple English, TTS Active",
      "Paystack-integrated checkout for local payment familiarity",
    ],
        persona: [
  {
    name: "Amina, 19",
    role: "University Student",
    need: "Good contrast interfaces",
    pain: "Text contrast complexity",
  },

  {
    name: "Tunde, 21",
    role: "University Student",
    need: "Simplified navigation",
    pain: "Overcomplicated interface",
  },

  {
    name: "Fatima, 30",
    role: "Rural Educator",
    need: "Offline-first content",
    pain: "High data usage on mobile",
  },
],    
    outcome: "The prototype passed a 92% task completion rate in usability testing with 8 participants including 2 screen reader users. The design system was documented with annotated Figma components and a full UX case study deck.",
    figmaLink: "https://www.figma.com/design/PXevF0JOhm2FTuF4GsB0Go/AccessNaija?node-id=13-43&t=4rRfHHoU3qvfMvVa-1",
  },
  {
  id: "Verde",
  title: "Verdé",
  subtitle: "Fresh Grocery Delivery Mobile App",
  category: "UX Case Study",
  tags: ["Mobile App", "Grocery Tech", "Design System", "Figma"],
  image: verde,
    //wireframe: wireframe,
  type: "ux",
  color: "#1D6B4E",
  bgLight: "#E3F2EB",
  year: "2025",
  duration: "4 weeks",
  role: "UX Designer & Design System Lead",
  tools: "Figma, FigJam, Phosphor Icons",
  overview:
    "Verdé is a mobile grocery delivery app designed for fast, warm, and trustworthy shopping experiences. Built for everyday users who want fresh produce and pantry staples delivered to their door — with a design language rooted in nature, warmth, and clarity.",
  problem:
    "Existing grocery apps feel clinical, slow, and overwhelming. Users struggle with cluttered interfaces, unclear product information, and a checkout experience that lacks confidence. There is a gap for a grocery app that feels as warm and trustworthy as a local market.",
  research: [
    "Mapped 23 screens across the full user journey: onboarding, auth, browsing, checkout, and order tracking",
    "Identified 3 core user types: Busy Professional, Home Cook, and Weekly Bulk Shopper",
    "Conducted competitive analysis of Instacart, Amazon Fresh, and Jumia Food",
    "Key finding: users abandon carts most often due to unclear delivery time and hidden fees — both addressed in the Verdé checkout flow",
    "Established accessibility standards: minimum 44×44px touch targets, 4.5:1 contrast ratio across all screens",
  ],
  designDecisions: [
    "Forest Green (#1D6B4E) primary palette — natural, fresh, and trustworthy without feeling sterile",
    "Fraunces serif for display text and prices (editorial weight) + DM Sans for UI (clean and readable)",
    "Warm Cream (#FAF8F3) app background instead of pure white — reduces eye strain and feels market-like",
    "Harvest Orange (#E8720C) reserved exclusively for CTAs at high-stakes moments like Place Order",
    "Full 8px spacing grid with 7 defined tokens — XS through 3XL — for rhythm consistency across all 23 screens",
    "Product card designed with selected/in-cart state: green border accent and quantity selector replace the add button",
    "Order Confirmed screen uses full Forest Green background — a deliberate celebratory moment that breaks the neutral pattern",
  ],
  persona: [
  {
    name: "Amaka, 19",
    role: "University Student",
    need: "Good contrast interfaces",
    pain: "Text contrast complexity",
  },

  {
    name: "Gbenga, 21",
    role: "University Student",
    need: "Simplified navigation",
    pain: "Overcomplicated interface",
  },

  {
    name: "Halima, 30",
    role: "Rural Educator",
    need: "Offline-first content",
    pain: "High data usage on mobile",
  },
],
  outcome:
    "Delivered a complete 23-screen mobile app design across splash, onboarding, authentication, home, product detail, explore, category, search, filters, cart, favourites, checkout, order confirmation, error, and account screens. Included a full design system with color styles, text styles, spacing tokens, and a reusable component library covering buttons, product cards, and the add-to-cart interaction.",
  figmaLink: "https://www.figma.com/design/CmonZF7lALftSDuF7mFi8g/Verd%C3%A9---mobile-design?node-id=8-104&t=ze9cb6SJpiX0Cuj4-1",
},
{
  id: "Connectr",
  title: "Connectr",
  subtitle: "Smart Event Networking Mobile App",
  category: "UX Case Study",
  tags: ["Mobile App", "Networking", "Design System", "Figma"],
  image: connector,
    //wireframe: wireframe,
  type: "ux",
  color: "#1E1E1E",
  bgLight: "#EEF0FA",
  year: "2026",
  duration: "4 weeks",
  role: "UX Designer & Design System Lead",
  tools: "Figma, FigJam, Phosphor Icons",
  overview:
    "Connectr is a mobile event networking app designed to help conference attendees network with intention rather than by accident. Built for professionals who want to leave every event with meaningful connections — not just exchanged business cards — with a design language rooted in clarity, trust, and calm.",
  problem:
    "Events fill rooms with valuable people, yet most attendees leave having spoken to only a few, usually by chance. The barrier isn't willingness — it's friction. People don't know who's there, why they should connect, or how to start a conversation without feeling awkward. There is a gap for a networking app that makes every interaction feel purposeful and low-risk.",
  research: [
    "Mapped 9 screens across the complete user journey: onboarding, discovery, profile view, connection request, meetup scheduling, and post-event wrap-up",
    "Identified the primary user type: the Intentional Attendee — a junior-to-mid professional attending to grow their network but lacking a system",
    "Conducted competitive analysis of Lunchclub, Brella, and LinkedIn Events",
    "Key finding: users hesitate to initiate contact not due to disinterest but due to social risk — addressed directly through the structured connection request flow",
    "Established accessibility standards: minimum 44×44px touch targets, WCAG AA contrast across all screens (Navy on white achieves 12.6:1)",
  ],
  designDecisions: [
    "Deep Navy (#0B1437) primary palette — professional, grounding, and trustworthy in a busy conference environment",
    "Syne 800 for display headings and brand logo (bold, confident) + DM Sans for all UI text (clean and readable at small sizes)",
    "Warm off-white (#F8F7F4) app surface instead of pure white — reduces glare under bright venue lighting and feels considered rather than default",
    "Amber (#F4A942) reserved exclusively for CTAs, match scores, and key data points — never decorative",
    "Sage green (#4ECBA3) used exclusively as a live presence indicator — semantic color discipline means users never confuse availability with topic tags",
    "Attendee cards surface match percentage, shared topics, and availability status rather than follower counts — relevance over vanity metrics",
    "Structured connection request flow replaces a blank message field — users select topics and fill a short template, reducing social friction and filtering low-effort requests",
  ],
  persona: [
  {
    name: "Hassan, 19",
    role: "University Student",
    need: "Good contrast interfaces",
    pain: "Text contrast complexity",
  },

  {
    name: "Grace, 21",
    role: "University Student",
    need: "Simplified navigation",
    pain: "Overcomplicated interface",
  },

  {
    name: "Amanda, 30",
    role: "Rural Educator",
    need: "Offline-first content",
    pain: "High data usage on mobile",
  },
],
  outcome:
    "Delivered a complete 9-screen mobile app design covering splash, onboarding, event home dashboard, attendee discovery feed, profile view, connection request, connections manager, meetup scheduler, and post-event wrap-up. Included a full design system with color tokens, typography scale, spacing system, and a reusable component library covering buttons, attendee cards, chips, match indicators, and bottom navigation.",
  figmaLink: "https://www.figma.com/design/WQExkhO83NRi5MPUxWDwP4/Connectr?node-id=0-1&t=gVS0p7smaxEhnoSO-1",
},
];

export const frontendProjects = [
  {
    id: "routewise",
    title: "RouteWise",
    subtitle: "Responsive Travel Planner Web App",
    category: "Frontend Project",
    tags: ["React", "Tailwind CSS", "Amadeus API", "Vite"],
    image: "src/assets/routeWise.png",
    featured: routewisefeatured,
    color: "#3badeb",
    bgLight: "#adddf0",
    year: "2025",
    role: "Full Frontend Developer",
    stack: ["React 18", "React Router v6", "Vite", "Tailwind CSS", "Amadeus API", "Unsplash API"],
    features: [
      "Live city/airport search powered by Amadeus Location API",
      "Flight search results with sorting by price, duration, and stops",
      "Destination detail pages with climate, highlights, and travel tips",
      "Drag-and-drop itinerary builder with export functionality",
      "Country marquee component with smooth infinite scroll",
      "Fully responsive — mobile-first, tested at 375px to 1440px",
    ],
    uxNote: "Every component was built with UX principles guiding the implementation — skeleton loaders instead of spinners, error states with recovery actions, progressive disclosure on flight result cards, and a booking flow that never loses context.",
    liveLink: "https://alx-travel-planner-hutl.vercel.app/",
    githubLink: "https://github.com/Loisyy/alx-travel-planner",
  },
  {
    id: "hirehub",
    title: "HireHub",
    subtitle: "Interactive Job Board SPA with Advanced Filtering",
    category: "Full-Stack Frontend Project",
    tags: ["React", "TypeScript", "Tailwind CSS", "React Router", "Context API"],
    image: "src/assets/hireHub.png",
    featured: hirehubfeatured,
    color: "#4845ff",
    bgLight: "#f0f4ff",
    year: "2025",
    role: "Full-Stack Frontend Developer",
    stack: ["React 18", "TypeScript", "React Router v6", "Context API", "Tailwind CSS v4", "Mock API"],
    features: [
      "Real-time job filtering by category, location, and experience level",
      "Full-text search across job titles and company names",
      "Dynamic job detail pages with company information and links",
      "Modal-based application form with file upload and validation",
      "Featured companies showcase with responsive grid layout",
      "Job listings grid that adapts from 1 to 3 columns across devices",
      "Fully responsive — mobile-first, tested at 320px to 1440px",
      "Smooth scroll-to-top button that appears on scroll",
      "Complete accessibility support (ARIA labels, keyboard navigation, focus management)",
    ],
    uxNote: "Built with HCI principles at every stage — loading skeletons for perceived performance, empty states with helpful messaging, form validation with inline error display, focus trap in modals, ESC key to close dialogs, and a smooth filter experience that updates results in real-time without page reload. Every interaction is thoughtfully designed to create a seamless job-hunting experience.",
    liveLink: "https://alx-job-board-fh9q.vercel.app/",
    githubLink: "https://github.com/Loisyy/alx-job-board",
  },
  {
  id: "ecostitch",
  title: "EcoStitch",
  subtitle: "Sustainable Fashion & Textile Waste Reduction Platform",
  category: "Frontend Project",
  tags: ["React", "Tailwind CSS", "Sustainability", "AI Demo"],
  image: "src/assets/ecoStitch.png",
  featured: ecostitchfeatured,
  color: "#4E8B6B",
  bgLight: "#EEF7F1",
  year: "2025",
  role: "Frontend Developer & UX Designer",
  stack: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "AI Fabric Recognition Demo"],
  features: [
    "Interactive platform promoting sustainable fashion and textile reuse",
    "AI-powered fabric recognition demo for identifying different fabric types",
    "Educational sections highlighting climate awareness and anti-textile dumping advocacy",
    "Community-focused experience with workshops and sustainable craftsmanship resources",
    "Responsive storytelling layout showcasing circular fashion initiatives",
    "Accessible and mobile-first design optimized across devices",
  ],
  uxNote:
    "The platform was designed to emotionally connect users with sustainability through clean storytelling, immersive visual hierarchy, and intuitive navigation. UX decisions focused on accessibility, trust-building, and encouraging conscious fashion habits through engaging educational content and interactive experiences.",
  liveLink: "https://my-projects-zxev.vercel.app/",
  githubLink: "https://github.com/Loisyy/my-projects/tree/main/ecostitch",
},
];

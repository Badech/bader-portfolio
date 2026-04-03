/**
 * Portfolio Project Data
 * 
 * Real concept websites created to demonstrate strategic approach to
 * HVAC and local service business web design.
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  niche: string;
  category: "HVAC" | "Plumbing" | "Electrical";
  liveUrl: string;
  previewImage?: string; // Optional preview image URL or path
  conceptLabel: string;
  summary: string;
  overview: string;
  strategicFocus: string[];
  uxDecisions: string[];
  visualDirection: string;
  brandFeel: string[];
  designedToImprove: string[];
}

export const projects: Project[] = [
  {
    id: "north-peak",
    slug: "north-peak-heating-air",
    title: "North Peak Heating & Air",
    niche: "HVAC Services",
    category: "HVAC",
    liveUrl: "https://northpeakhvac.vercel.app/",
    previewImage: "https://northpeakhvac.vercel.app/", // Will use iframe for live preview
    conceptLabel: "Portfolio Concept",
    summary: "Premium HVAC concept focused on trust, maintenance, financing, and service-driven conversion",
    overview: "A premium HVAC website concept designed to establish trust and credibility for residential heating and cooling services. The site demonstrates how clear service breakdowns, financing transparency, and maintenance-focused messaging can reduce decision friction and improve quote request rates.",
    strategicFocus: [
      "Trust-building through clear service breakdowns and transparent pricing structure",
      "Maintenance plan positioning as a recurring revenue driver",
      "Financing options presented early to reduce sticker-shock abandonment",
      "Emergency service prominence balanced with planned maintenance value",
      "Homeowner education content to establish expertise and authority"
    ],
    uxDecisions: [
      "Dual CTA strategy: emergency calls + online quote requests for planned work",
      "Service pages structured around homeowner problems, not industry jargon",
      "Financing calculator placed strategically to qualify leads early",
      "Mobile-first quote form with minimal friction and smart field progression",
      "Trust indicators (licensing, insurance, warranties) integrated naturally without overwhelming"
    ],
    visualDirection: "Clean, professional, and reassuring. The visual approach emphasizes comfort, reliability, and home safety. Color palette uses calming blues and warm accents to communicate both technical competence and approachability.",
    brandFeel: [
      "Professional but approachable",
      "Trustworthy and established",
      "Technically competent",
      "Homeowner-focused"
    ],
    designedToImprove: [
      "Trust and credibility perception for homeowners making high-ticket decisions",
      "Quote request conversion through reduced friction and clear value communication",
      "Lead quality through self-qualification via financing and service-level options",
      "Mobile conversion rates with streamlined contact and quote flows",
      "Recurring revenue opportunity through maintenance plan visibility"
    ]
  },
  {
    id: "rapidroot",
    slug: "rapidroot-plumbing",
    title: "RapidRoot Plumbing Co.",
    niche: "Plumbing Services",
    category: "Plumbing",
    liveUrl: "https://rapidroot.vercel.app/",
    previewImage: "https://rapidroot.vercel.app/", // Will use iframe for live preview
    conceptLabel: "Strategic Demo Build",
    summary: "Premium plumbing concept focused on urgency, fast response, problem-solving, and homeowner reassurance",
    overview: "A conversion-focused plumbing website concept built around the reality of emergency service demand and mobile-first user behavior. The site demonstrates how urgency-aware design, clear response time promises, and simple mobile conversion paths can capture more emergency and scheduled service leads.",
    strategicFocus: [
      "Emergency-first architecture that prioritizes immediate call conversion",
      "Response time promises and availability transparency to reduce shopping behavior",
      "Problem-based service navigation matching how homeowners search and think",
      "Trust and reassurance messaging for high-stress emergency situations",
      "Clear separation between emergency and scheduled service paths"
    ],
    uxDecisions: [
      "Persistent mobile call button with emergency vs. scheduled service distinction",
      "Service finder by problem type (leaks, clogs, no hot water) instead of technical categories",
      "Upfront pricing ranges to reduce 'quote shopping' call abandonment",
      "Fast-loading mobile experience optimized for users in urgent situations",
      "Social proof positioned strategically to build confidence without slowing decision"
    ],
    visualDirection: "Bold, confident, and action-oriented. The design uses strong contrast and clear hierarchy to support fast decision-making. Visual language emphasizes speed, reliability, and problem resolution.",
    brandFeel: [
      "Fast and responsive",
      "Problem-solver mentality",
      "Confident and capable",
      "Reassuring in emergencies"
    ],
    designedToImprove: [
      "Emergency call conversion rates through urgency-aware design and clear CTAs",
      "Mobile conversion performance with tap-to-call optimization and minimal friction",
      "Lead capture for scheduled work through distinct service paths and clear value props",
      "Trust signals that work in high-stress decision contexts without slowing users down",
      "Service page clarity by organizing around customer problems, not plumber categories"
    ]
  },
  {
    id: "lumavolt",
    slug: "lumavolt-electric",
    title: "LumaVolt Electric",
    niche: "Electrical Services",
    category: "Electrical",
    liveUrl: "https://lumavoltelectric.vercel.app/",
    previewImage: "https://lumavoltelectric.vercel.app/", // Will use iframe for live preview
    conceptLabel: "Concept Website",
    summary: "Premium electrician concept focused on safety, precision, upgrades, and premium authority",
    overview: "A premium electrical services website concept that positions the business as the expert choice for both safety-critical repairs and value-adding upgrades. The site demonstrates how technical authority, safety emphasis, and upgrade-focused messaging can attract higher-value residential and light commercial projects.",
    strategicFocus: [
      "Safety-first messaging that establishes technical authority and trust",
      "Upgrade and modernization services positioned alongside repair work",
      "Clear specialization signals (panel upgrades, EV charging, smart home) to attract premium projects",
      "Licensing and certification prominence to overcome electrical service hesitation",
      "Educational content that demonstrates expertise without overwhelming homeowners"
    ],
    uxDecisions: [
      "Service categorization balancing safety/emergency with upgrade/improvement opportunities",
      "Quote request flow designed for project description and timeline flexibility",
      "Visual emphasis on credentials and safety certifications to reduce anxiety",
      "Distinct paths for emergency service vs. planned project consultations",
      "Portfolio/past work integration to demonstrate upgrade and installation capabilities"
    ],
    visualDirection: "Polished, modern, and technically sophisticated. The design uses precise typography, clean layouts, and professional photography treatment to communicate expertise and attention to detail. Visual language balances technical competence with accessibility.",
    brandFeel: [
      "Technically expert",
      "Safety-conscious",
      "Modern and upgraded",
      "Premium and precise"
    ],
    designedToImprove: [
      "Perceived expertise and technical authority to win higher-value projects",
      "Quote request quality through better project description and service-level matching",
      "Upgrade service visibility to capture improvement projects, not just repairs",
      "Trust and safety perception through credential and certification prominence",
      "Conversion clarity with distinct emergency vs. planned project user paths"
    ]
  }
];

/**
 * Get project by slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

/**
 * Get all project slugs (useful for routing)
 */
export const getProjectSlugs = (): string[] => {
  return projects.map(p => p.slug);
};

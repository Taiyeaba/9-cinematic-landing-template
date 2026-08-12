/**
 * AURORA — CENTRALIZED CONTENT & ASSET CONFIGURATION
 * ==================================================
 * All brand copy, video/image media paths, statistics, colors,
 * navigation items, and contact details are stored here.
 */

const siteConfig = {
  companyName: "AURORA",
  tagline: "AI + MARKETING TECHNOLOGY",
  phone: "+1 (555) 123-4567",
  phoneRaw: "+15551234567",
  email: "hello@aurora-tech.com",
  location: "California, USA",
  copyright: "© 2026 Aurora. All rights reserved.",

  colors: {
    primary: "#050505",
    secondary: "#0A0A0A",
    surface: "#111111",
    textPrimary: "#F5F5F5",
    textSecondary: "#A3A3A3",
    accent: "#C9A96E",
    accentDark: "#8C7A55",
    border: "rgba(255,255,255,0.12)",
    glass: "rgba(10,10,10,0.55)",
    overlay: "rgba(0,0,0,0.48)"
  },

  navigation: [
    { label: "Home", target: "#hero" },
    { label: "Technology", target: "#technology" },
    { label: "Automation", target: "#automation" },
    { label: "Intelligence", target: "#data" },
    { label: "Results", target: "#results" },
    { label: "Solutions", target: "#solutions" },
    { label: "Contact", target: "#contact" }
  ],

  hero: {
    eyebrow: "AI-POWERED MARKETING TECHNOLOGY",
    h1Line1: "Turn Attention",
    h1Line2: "Into Growth.",
    description: "Intelligent technology that helps modern brands connect, automate and grow with confidence.",
    primaryCTA: "Explore Solutions",
    primaryCTATarget: "#solutions",
    secondaryCTA: "Book a Strategy Call",
    secondaryCTATarget: "tel:+15551234567",
    bottomLabel: "BUILT FOR TEAMS THAT MOVE FORWARD.",
    video: "assets/videos/hero.mp4",
    poster: "assets/images/hero.jpg"
  },

  sections: {
    technology: {
      id: "technology",
      eyebrow: "DIGITAL TRANSFORMATION",
      h2Line1: "Transform Complexity",
      h2Line2: "Into Momentum.",
      description: "Modern businesses need technology that moves as fast as their ambitions. Aurora helps teams simplify digital complexity and build experiences designed for measurable growth.",
      cta: "Discover More",
      ctaTarget: "#automation",
      video: "assets/videos/section-1.mp4",
      poster: "assets/images/section-1.jpg"
    },
    automation: {
      id: "automation",
      eyebrow: "SMART AUTOMATION",
      h2Line1: "Automate What",
      h2Line2: "Slows You Down.",
      description: "Connect workflows, reduce repetitive processes and give your team more time to focus on the work that creates real value.",
      cta: "Explore Automation",
      ctaTarget: "#data",
      floatingLabels: ["WORKFLOW", "CONNECTED", "OPTIMIZED"],
      video: "assets/videos/section-2.mp4",
      poster: "assets/images/section-2.jpg"
    },
    data: {
      id: "data",
      eyebrow: "DATA & INTELLIGENCE",
      h2Line1: "Make Every Decision",
      h2Line2: "Smarter.",
      description: "Turn complex data into clear insights that help your team understand opportunities, respond faster and move with confidence.",
      cta: "Explore Intelligence",
      ctaTarget: "#results",
      video: "assets/videos/section-3.mp4",
      poster: "assets/images/section-3.jpg"
    },
    results: {
      id: "results",
      eyebrow: "PROVEN IMPACT",
      h2: "Engineered for <span class=\"gradient-text\">Measurable Impact</span>",
      video: "assets/videos/section-4.mp4",
      poster: "assets/images/section-4.jpg"
    },
    solutions: {
      id: "solutions",
      eyebrow: "OUR SOLUTIONS",
      h2: "Capabilities Built for <span class=\"gradient-text\">Enterprise Scale</span>",
      description: "From intelligent automation to decision intelligence, Aurora connects the core technologies modern enterprises need to scale.",
      cards: [
        {
          icon: "🚀",
          tag: "STRATEGY & GROWTH",
          title: "Digital Transformation",
          description: "Architecting high-conversion digital ecosystems aligned with long-term enterprise goals."
        },
        {
          icon: "⚡",
          tag: "WORKFLOW ENGINE",
          title: "Smart Automation",
          description: "Eliminating friction with autonomous multi-channel workflows and intelligent triggers."
        },
        {
          icon: "📊",
          tag: "DECISION ENGINE",
          title: "Data & Intelligence",
          description: "Converting raw cross-platform data into predictive actionable growth metrics."
        }
      ],
      video: "assets/videos/section-5.mp4",
      poster: "assets/images/section-5.jpg"
    }
  },

  statistics: [
    { value: 240, prefix: "+", suffix: "%", label: "ENGAGEMENT", desc: "Average client campaign lift", decimals: 0 },
    { value: 3.8, prefix: "", suffix: "x", label: "GROWTH", desc: "Outperforming industry standards", decimals: 1 },
    { value: 92, prefix: "", suffix: "%", label: "RETENTION", desc: "Long-term partnership rate", decimals: 0 },
    { value: 24, prefix: "", suffix: "/7", label: "AUTOMATION", desc: "Autonomous intelligent workflows", decimals: 0 }
  ],

  contact: {
    id: "contact",
    h2: "Ready To Move Your Business Forward?",
    description: "Let's build what's next.",
    cta: "Book a Strategy Call",
    phone: "+1 (555) 123-4567",
    phoneRaw: "+15551234567",
    email: "hello@aurora-tech.com",
    location: "California, USA",
    poster: "assets/images/hero.jpg"
  }
};

export interface SubProduct {
  name: string
  url: string
  description: string
  image: { src: string; alt: string }
  capturedOn: string
}

export interface RegistryEntry {
  number: string
  slug: string
  name: string
  category: string
  url: string
  status: "Live"
  summary: string
  facts: string[]
  stack?: string
  pricing?: string
  subProducts?: SubProduct[]
  image: { src: string; alt: string }
  capturedOn: string
}

export const REGISTRY: RegistryEntry[] = [
  {
    number: "001",
    slug: "shelvey-ai",
    name: "ShelVey AI",
    category: "AI Agent Platform",
    url: "https://shelvey.pro",
    status: "Live",
    summary: "An autonomous AI platform that runs a 5-phase business-creation process end to end.",
    facts: [
      "25 specialised agents run a 5-phase business-creation process — research, branding, development, content, marketing — with dual (AI + human) approval at every phase",
      "Ships production React + TypeScript websites with hosting, a custom domain, and Stripe payments live — not templates",
      "Live voice conversations with the AI CEO and agent team via the OpenAI Realtime API and ElevenLabs",
      "52+ connected MCP server integrations spanning development, commerce, trading, and social tooling",
    ],
    stack: "React, TypeScript, OpenAI Realtime API, ElevenLabs, Stripe, 52+ MCP servers",
    image: { src: "/registry/shelvey-ai.png", alt: "ShelVey AI's homepage showing its AI CEO dashboard and 5-phase business-creation process." },
    capturedOn: "19 September 2026",
  },
  {
    number: "002",
    slug: "kenect-ai",
    name: "Kenect AI",
    category: "Vertical AI SaaS",
    url: "https://kenectai.com",
    status: "Live",
    summary: "Agentic operations for automotive dealerships — a coordinated agent workforce, not a chatbot.",
    facts: [
      "Reception, Service, Sales, and Retention agents handle dealership customer conversations end to end",
      "“Sophi AgentOS” is the operating layer: configures what each agent can touch across DMS, CRM, voice, and text, and logs every decision for review",
      "Targets sub-2-second response time with 24/7 coverage, including after-hours and weekend service and sales inquiries",
      "Built with policy-aware boundaries and human oversight by design",
    ],
    stack: "Agent orchestration layer (Sophi AgentOS), DMS/CRM integrations, voice + text channels",
    image: { src: "/registry/kenect-ai.png", alt: "Kenect AI's homepage showing its Sophi AgentOS dealership operations dashboard." },
    capturedOn: "19 September 2026",
  },
  {
    number: "003",
    slug: "amro-agentic-ai",
    name: "Amro Agentic AI",
    category: "AI Agent Product Suite",
    url: "https://amroagentic.com",
    status: "Live",
    summary: "A seven-product agentic AI suite for UK small businesses — sales, support, content, images, meetings, training, and the design system underneath all of it.",
    facts: [
      "Seven independent products, each solving one practical job, adoptable individually or combined",
      "Built for SMBs, consultancies, and trades without a dedicated AI or engineering team",
      "Every product that sends or publishes on a user's behalf sits behind a human-approval gate",
    ],
    subProducts: [
      {
        name: "AmroGen",
        url: "https://amrogen.com",
        description: "AI B2B outreach and prospecting — research, personalised sequences, and follow-up, with every send held for human approval before it goes out. Tiered credit pricing from £599 to £4,999/mo.",
        image: { src: "/registry/amro/amrogen.png", alt: "AmroGen's homepage showing its AI B2B outreach and prospecting workflow." },
        capturedOn: "19 September 2026",
      },
      {
        name: "AmroAgents",
        url: "https://amroagents.com",
        description: "Knowledge-grounded customer chatbots that answer from a company's own docs, handle support queries, and escalate to live chat, a ticket, or an AmroMeet booking when a person is needed. Integrates with Microsoft 365, Google Workspace, Salesforce, HubSpot, and Slack.",
        image: { src: "/registry/amro/amroagents.png", alt: "AmroAgents' homepage showing its knowledge-grounded customer chatbot product." },
        capturedOn: "19 September 2026",
      },
      {
        name: "AmroPilot",
        url: "https://amropilot.com",
        description: "SEO content generation across a four-stage workflow — keyword/SERP research, drafting, AI image generation with quality checks, export to Word/PDF/HTML or a CMS webhook. Credit-based from £500, no subscription required.",
        image: { src: "/registry/amro/amropilot.png", alt: "AmroPilot's homepage showing its four-stage SEO content generation workflow." },
        capturedOn: "19 September 2026",
      },
      {
        name: "AmroMeet",
        url: "https://amromeet.com",
        description: "Instant Google Meet scheduling with no guest account or login required — a “talk now” instant link or a hosted booking page synced to the host's calendar. Embeddable on third-party sites.",
        image: { src: "/registry/amro/amromeet.png", alt: "AmroMeet's homepage showing its no-login-required Google Meet scheduling product." },
        capturedOn: "19 September 2026",
      },
      {
        name: "AmroAcademy",
        url: "https://amroacademy.com",
        description: "Corporate AI training delivered as voice-first, conversational lessons — “a tutor that talks back,” not a video library — with a unified L&D dashboard tracking participation, knowledge checks, and progress.",
        image: { src: "/registry/amro/amroacademy.png", alt: "AmroAcademy's homepage showing its voice-first corporate AI training product." },
        capturedOn: "19 September 2026",
      },
      {
        name: "AmroVisionAI",
        url: "https://amrovisionai.com",
        description: "Marketing-image generation integrating DALL·E, Gemini, and FLUX with automatic provider fallback. Pay-as-you-go credits that never expire; images persist on Google Cloud Storage for long-term reuse.",
        image: { src: "/registry/amro/amrovisionai.png", alt: "AmroVisionAI's homepage showing its multi-provider marketing-image generation product." },
        capturedOn: "19 September 2026",
      },
      {
        name: "AmroUI",
        url: "https://amro-ui.vercel.app",
        description: "The shared component system powering the other six products — 229 production-ready React components across six product-specific collections, distributed as the @amro-ui/react npm package with shadcn-registry installation, open-source on GitHub.",
        image: { src: "/registry/amro/amro-ui.png", alt: "AmroUI's homepage showing its 229-component React design system." },
        capturedOn: "19 September 2026",
      },
    ],
    image: { src: "/registry/amro-agentic-ai.png", alt: "Amro Agentic AI's homepage showing its seven-product suite for UK small businesses." },
    capturedOn: "19 September 2026",
  },
  {
    number: "004",
    slug: "vranceflex",
    name: "VranceFlex",
    category: "AI Agent Platform",
    url: "https://vranceflex.online",
    status: "Live",
    summary: "Agent-led B2B outreach that researches and drafts — but never sends without a human in the loop.",
    facts: [
      "Four purpose-built agents handle distinct pipeline stages: market research, lead discovery and verification, sequence drafting, and reply monitoring",
      "A verification-before-payment model — prospect credits are consumed only when usable, verified contact information is actually returned",
      "Every sequence sits in an approval queue; there is no autopilot setting",
      "Sends execute through the customer's own connected Resend and Twilio accounts, not shared sending infrastructure",
    ],
    stack: "Multi-agent pipeline, Resend, Twilio (customer's own accounts)",
    image: { src: "/registry/vranceflex.png", alt: "VranceFlex's workspace loading screen for its agent-led B2B outreach platform." },
    capturedOn: "19 September 2026",
  },
  {
    number: "005",
    slug: "seoforge",
    name: "SEOForge",
    category: "AI Content/SEO Platform",
    url: "https://seoforge.online",
    status: "Live",
    summary: "Autonomous SEO operations with production-grade guardrails — proposals and diffs, never silent auto-publishing.",
    facts: [
      "Dual-pipeline architecture — Content Growth and Search Optimization — coordinated by a Workflow Supervisor that prevents budget overlap",
      "A “Site Experience Engineer” connects directly to GitHub or WordPress, generating production-ready changes with build, link, and schema validation",
      "Explicitly cannot auto-publish — every change is a diff showing evidence, risk, and a rollback option for a human to approve",
      "A connected evidence loop ties Search Console, GA4, and DataForSEO data directly to production changes; no rank-one guarantees, no invented testimonials",
    ],
    pricing: "From $149/mo, no free trial",
    stack: "GitHub/WordPress integration, Search Console, GA4, DataForSEO",
    image: { src: "/registry/seoforge.png", alt: "SEOForge's homepage showing its dual-pipeline autonomous SEO operations platform." },
    capturedOn: "19 September 2026",
  },
  {
    number: "006",
    slug: "anuime",
    name: "AnUIme",
    category: "Design System / Developer Tooling",
    url: "https://anuime.vercel.app",
    status: "Live",
    summary: "A character-driven React component system where geometry, not color, carries the brand.",
    facts: [
      "Three visual persona systems — Kira, Mochi, Atlas — each with enforceable construction rules (blade traces, orbit systems, HUD assemblies) that survive across themes",
      "51 components plus 12 “expressive moments,” installable via the shadcn CLI registry",
      "Ships an MCP server so coding agents can discover components, validate schemas, and check compliance directly",
      "Fully open-source — inspectable and ownable, not a black-box UI kit",
    ],
    stack: "React, shadcn registry, Model Context Protocol server",
    image: { src: "/registry/anuime.png", alt: "AnUIme's homepage showing its three character-driven React component systems." },
    capturedOn: "19 September 2026",
  },
  {
    number: "007",
    slug: "mirrorfit-ai",
    name: "MirrorFit AI",
    category: "Consumer/Commercial AI App",
    url: "https://mirrorfitai.online",
    status: "Live",
    summary: "AI virtual try-on that turns a garment photo into campaign-ready catalogue imagery.",
    facts: [
      "Builds an “identity pack” from 3-10 model reference photos, then renders garment photos onto that identity across front, side, back, and editorial angles",
      "Preserves seams, prints, and real fabric drape from the source garment photo rather than generating a generic approximation",
      "Category-aware for swimwear, sleepwear, ethnicwear, and shapewear, specifically tuned to avoid over-eager content refusals on these categories",
      "Powered by Gemini 3 Pro Image",
    ],
    pricing: "$49/mo (500 renders, 10 model profiles) to $199/mo (3,000 renders, unlimited profiles, API access)",
    stack: "Gemini 3 Pro Image",
    image: { src: "/registry/mirrorfit-ai.png", alt: "MirrorFit AI's homepage showing its AI virtual try-on catalogue imagery generator." },
    capturedOn: "19 September 2026",
  },
  {
    number: "008",
    slug: "sthuthi-art",
    name: "Sthuthi Art",
    category: "E-Commerce / Creative",
    url: "https://sthuthi.art",
    status: "Live",
    summary: "An online studio and gallery for two painters, built as full e-commerce, not a portfolio site.",
    facts: [
      "45 original paintings across 11 categories — Hindu Spiritual Art, Indian Culture, Botanical, Landscape, Figurative, and more — plus made-to-order architectural commissions (carved wood, brass, moving light and sound)",
      "Represents two painters with deliberately opposite styles: Shalini Tomar's minimalist watercolor and ink work, and Leela Rani's dense, ornamental oil and mixed-medium pieces",
      "Full e-commerce: cart, saved works, accounts, and worldwide insured shipping, priced from $1,715 to $12,050",
      "An “art concierge” feature gives personalised recommendations from a described room, budget, or aesthetic",
    ],
    stack: "E-commerce cart/checkout, account system, worldwide shipping",
    image: { src: "/registry/sthuthi-art.png", alt: "Sthuthi Art's homepage showing original paintings by Shalini Tomar and Leela Rani." },
    capturedOn: "19 September 2026",
  },
]

export function getRegistryEntry(slug: string) {
  return REGISTRY.find((entry) => entry.slug === slug)
}

export function getAdjacentEntries(slug: string) {
  const index = REGISTRY.findIndex((entry) => entry.slug === slug)
  return {
    prev: index > 0 ? REGISTRY[index - 1] : undefined,
    next: index >= 0 && index < REGISTRY.length - 1 ? REGISTRY[index + 1] : undefined,
  }
}

export interface ServiceRow {
  number: string
  title: string
  description: string
  evidence: string[]
}

export const SERVICES: ServiceRow[] = [
  {
    number: "01",
    title: "Agentic Product Engineering",
    description:
      "Multi-agent products where each agent has a defined role, approved tools, and a human-approval gate before anything ships or sends — the pattern behind every agent platform in the registry.",
    evidence: ["shelvey-ai", "vranceflex"],
  },
  {
    number: "02",
    title: "AI Integration & MCP Tooling",
    description:
      "Wiring real AI models and MCP servers into a product's actual workflow — voice APIs, image models, multi-provider fallback, and agent-discoverable tooling.",
    evidence: ["shelvey-ai", "amro-agentic-ai"],
  },
  {
    number: "03",
    title: "Design Systems & Component Libraries",
    description:
      "Component systems built to be owned, not rented — accessible primitives, enforceable construction rules, and registry-based distribution for a team or a product suite to build on.",
    evidence: ["anuime"],
  },
  {
    number: "04",
    title: "Commerce & Content Platforms",
    description:
      "Full-stack commerce and content infrastructure — cart and checkout, production-grade content pipelines with validation gates, and export paths that fit an existing publishing workflow.",
    evidence: ["seoforge", "sthuthi-art"],
  },
]

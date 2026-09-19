export interface TrackDetail {
  slug: string
  tool: string
  logo: string
  focus: string
  levels: string
  format: string
  assessment: string
  summary: string
  whoFor: string[]
  syllabus: { title: string; body: string }[]
}

export const TRACKS: TrackDetail[] = [
  {
    slug: "claude-code",
    tool: "Claude Code",
    logo: "claude-code-logo.png",
    focus: "Agentic coding & repo-scale workflows",
    levels: "Foundations → Practitioner → Expert",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Covers running Claude Code against a real repository: scoping a task, reviewing its diffs, and knowing when to stop it and take over.",
    whoFor: [
      "Engineers who'll run Claude Code against production repositories",
      "Tech leads who need to review AI-authored diffs, not just merge them",
      "Platform teams standardising how the tool is used across a codebase",
    ],
    syllabus: [
      { title: "Task framing", body: "Writing a scope Claude Code can execute without babysitting, and recognising when a task is too ambiguous to hand off." },
      { title: "Diff review discipline", body: "Reading an agent-authored diff for correctness, scope creep, and quietly-introduced dependencies." },
      { title: "Guardrails & permissions", body: "Configuring what the agent can touch — file scope, command execution, network access — before it runs unattended." },
      { title: "Assessment", body: "A live repository task: the candidate directs Claude Code to ship a scoped change and explains their review before it merges." },
    ],
  },
  {
    slug: "codex",
    tool: "Codex",
    logo: "codex-logo.png",
    focus: "OpenAI's coding agent in CI and local flows",
    levels: "Foundations → Practitioner",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Focuses on Codex inside CI pipelines and local terminals — the failure modes are different from a chat-based assistant, and so is the review habit it needs.",
    whoFor: [
      "Engineers wiring Codex into CI or pre-merge checks",
      "Teams evaluating Codex against an existing Copilot or Claude Code workflow",
    ],
    syllabus: [
      { title: "Environment setup", body: "Sandboxing, secrets handling, and network policy for an agent running inside a pipeline." },
      { title: "Failure triage", body: "Reading a failed agent run and deciding whether to retry, narrow the task, or take it back manually." },
      { title: "Assessment", body: "A CI task: get a failing pipeline green using Codex without weakening the tests to pass." },
    ],
  },
  {
    slug: "microsoft-copilot",
    tool: "Microsoft Copilot",
    logo: "copilot-logo.png",
    focus: "Pair-programming inside existing codebases",
    levels: "Foundations",
    format: "Self-paced + live clinic",
    assessment: "Scenario review",
    summary:
      "A shorter track for teams that already have Copilot switched on and want everyone using it the same, deliberate way.",
    whoFor: [
      "Engineering teams standardising on Copilot as the default assistant",
      "New hires being onboarded onto a Copilot-enabled codebase",
    ],
    syllabus: [
      { title: "Context quality", body: "What Copilot needs open, named, and commented to suggest something usable." },
      { title: "Accepting vs. editing", body: "When to take a suggestion as-is, edit it, or reject it outright — with real examples of each." },
      { title: "Assessment", body: "A scenario review: walk an assessor through five real suggestions and justify each call." },
    ],
  },
  {
    slug: "gemini",
    tool: "Gemini",
    logo: "gemini-logo.png",
    focus: "Multimodal assistance across code, docs & data",
    levels: "Foundations → Practitioner",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Covers Gemini's multimodal range — reading a screenshot, a spreadsheet, and a codebase in the same task — which is where most teams under-use it.",
    whoFor: [
      "Cross-functional teams using Gemini across docs, sheets, and code",
      "Analysts and engineers who need to hand the same tool ambiguous, mixed-format input",
    ],
    syllabus: [
      { title: "Multimodal input design", body: "Structuring a prompt that mixes a screenshot, a data file, and a code snippet without confusing the model." },
      { title: "Source-checking output", body: "Verifying a synthesis Gemini produced from multiple documents before it goes in a report." },
      { title: "Assessment", body: "A mixed-input task: turn a screenshot, a CSV, and a ticket into a working fix and a short writeup." },
    ],
  },
  {
    slug: "cursor",
    tool: "Cursor",
    logo: "cursor-logo.png",
    focus: "AI-native editor workflows across a full codebase",
    levels: "Foundations → Practitioner",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Covers working in Cursor's Composer and Agent modes across a multi-file change — where the editor's own context choices matter as much as the model's.",
    whoFor: [
      "Engineers switching their default editor to Cursor",
      "Teams that need a shared standard for when to use Agent mode versus manual edits",
    ],
    syllabus: [
      { title: "Context selection", body: "Choosing what Cursor should index and reference for a given change, and when the default context is wrong." },
      { title: "Composer vs. manual edits", body: "Recognising which changes are safe to hand to Composer end-to-end and which need line-by-line control." },
      { title: "Assessment", body: "A multi-file repository task completed inside Cursor, reviewed for both the diff and the prompts that produced it." },
    ],
  },
]

export interface ClientMeta {
  slug: string
  name: string
  file: string
  url: string
  description: string
  highlights: string[]
  certificateRecipient: string | null
}

export const CLIENTS: ClientMeta[] = [
  {
    slug: "shelvey-ai",
    name: "ShelVey AI",
    file: "shelvey-ai-logo.png",
    url: "https://shelvey.pro",
    description: "An autonomous AI platform that runs sales and business-creation workflows end to end.",
    highlights: [
      "25 specialised AI agents run a 5-phase business-creation process — research, branding, development, content, marketing — with dual approval at every phase",
      "Ships production React + TypeScript websites (Shadcn/UI, 21st.dev components) with hosting, a custom domain, and Stripe payments live, not templates",
      "Live voice conversations with the AI CEO and agent team via the OpenAI Realtime API and ElevenLabs, alongside 52+ connected MCP server integrations",
      "Every agent deliverable requires two-tier approval — the AI CEO reviews first, then the founder signs off — before anything ships",
    ],
    certificateRecipient: "Vikram Varma Sanagaraju",
  },
  {
    slug: "amro-agentic-ai",
    name: "Amro Agentic AI",
    file: "amro-agentic-ai-logo.png",
    url: "https://amroagentic.com",
    description: "A UK-based suite of practical agentic AI products for sales, content, and customer engagement, built for small and growing businesses.",
    highlights: [
      "A modular, seven-product suite covering sales, content, learning, support, images, and meetings — adopted individually or combined",
      "AmroGen automates B2B prospecting: research, personalised outreach, and follow-up sequences without a dedicated SDR",
      "AmroPilot turns keyword research into publish-ready, branded articles for consistent organic content output",
      "AmroAgents deploys customer-service chat agents trained on a company's own documentation, built for regulated industries with no external data exposure",
      "Priced and packaged for SMBs, consultancies, and trades without an in-house AI team",
    ],
    certificateRecipient: "Hemant Joshi",
  },
  {
    slug: "kenect-ai",
    name: "Kenect AI",
    file: "kenect-ai.svg",
    url: "https://kenectai.com",
    description: "Agentic operations software for automotive dealerships, automating day-to-day dealership workflows.",
    highlights: [
      "A coordinated agent workforce — Reception, Service, Sales, and Retention agents — handles dealership customer conversations end to end, not just describes them",
      "Sophi AgentOS is the operating layer: configures what each agent can do, which systems (DMS, CRM, voice, text) they can touch, and logs every decision for review",
      "Targets sub-2-second response time with 24/7 coverage, including after-hours and weekend service and sales inquiries",
      "Built with policy-aware boundaries and human oversight by design — agents act inside approved limits, with staff handling the moments that need judgment",
    ],
    certificateRecipient: "Shaun Sorensen",
  },
  {
    slug: "the-payzon",
    name: "The Payzon",
    file: "the-payzon-logo.png",
    url: "https://thepayzon.com",
    description: "A micro-banking platform offering money transfers, loans, fixed deposits, and multi-currency accounts.",
    highlights: [
      "Multi-currency accounts with competitive exchange rates, plus peer-to-peer money transfers that complete in minutes",
      "Three-tier fixed deposit products at 8-15% interest over 12-36 month terms, with deposits from $10 to $20,000",
      "Student, business, and enterprise loan products ranging from 5-12% interest, up to $100,000",
      "A deposit pension scheme with monthly installment savings and 5-15% returns for long-term planning",
      "Serves 500+ customers across 200+ countries through 5 branch locations, with over 1M transactions processed",
    ],
    certificateRecipient: null,
  },
]

export const LEGAL_UPDATED = "17 September 2026"

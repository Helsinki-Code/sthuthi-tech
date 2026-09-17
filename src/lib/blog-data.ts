export interface BlogFaqItem {
  question: string
  answer: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  pillar: string
  publishedAt: string // ISO date
  readingMinutes: number
  faq?: BlogFaqItem[]
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "vibe-coding-tax",
    title: "The vibe coding tax: what unmeasured AI usage is actually costing engineering teams",
    description:
      "Technical debt is up sharply since AI coding tools went mainstream. Here's what's driving it, and why letting a team loose on Claude Code or Copilot isn't the same as knowing they're good at it.",
    pillar: "The Vibe Coding Tax",
    publishedAt: "2026-09-18",
    readingMinutes: 7,
  },
  {
    slug: "claude-code-certification",
    title: "Is there a Claude Code certification? Here's what actually exists",
    description:
      "Anthropic does have an official Claude certification that covers Claude Code — but it's gated to Claude Partner Network member organizations. Here's what's actually available, and what to test for if you just need your own team checked.",
    pillar: "Tool-Specific Playbooks",
    publishedAt: "2026-09-18",
    readingMinutes: 8,
    faq: [
      {
        question: "Is the Claude Certified Developer exam free?",
        answer:
          "No. Claude Certified Developer – Foundations (CCDV-F) costs $125 USD, proctored through Pearson VUE (OnVUE).",
      },
      {
        question: "Can an individual engineer take it without their company being a partner?",
        answer:
          "Not currently. Registration is open to organizations in the Claude Partner Network, registered through the Anthropic Partner Academy — not to individuals signing up on their own.",
      },
      {
        question: "Does finishing \"Claude Code 101\" on Skilljar count as being certified?",
        answer:
          "No. Anthropic's Skilljar courses, including Claude Code 101 and Claude Code in Action, are free, open, self-paced training — they end in course completion, not a proctored assessment, and don't produce a credential.",
      },
    ],
  },
  {
    slug: "microsoft-copilot-certification",
    title: "Is there a Microsoft Copilot certification? Yes — here's what it actually checks",
    description:
      "Microsoft's Copilot certifications are real and open to the public, unlike some AI vendors' partner-gated programs. But they test IT administration or generic office scenarios, not whether your team handles your actual work well with Copilot.",
    pillar: "Tool-Specific Playbooks",
    publishedAt: "2026-09-18",
    readingMinutes: 7,
    faq: [
      {
        question: "Is there an official Microsoft Copilot certification?",
        answer:
          "Yes. Microsoft 365 Certified: Copilot and Agent Administration Fundamentals (exam AB-900) is a proctored certification, and Microsoft Applied Skills offers lab-based credentials like \"Streamline business workflows with AI chat\" for Microsoft 365 Copilot.",
      },
      {
        question: "Do you need to be a Microsoft partner to take it?",
        answer:
          "No. Unlike some other AI vendors' certification programs, Microsoft's Copilot certifications are open to the public — AB-900 is scheduled through Pearson VUE, and Applied Skills assessments run directly on Microsoft Learn.",
      },
      {
        question: "Does passing AB-900 prove someone can use Copilot well day-to-day?",
        answer:
          "No. AB-900 is scoped to IT administration — supporting, securing, and governing an AI-enabled Microsoft 365 environment — not to whether an employee drafts good documents, emails, or analysis with Copilot in their actual job.",
      },
    ],
  },
  {
    slug: "usage-vs-proficiency",
    title: "AI adoption vs. proficiency: why usage dashboards don't prove anyone can use the tool",
    description:
      "88% of employees use AI tools, but real proficiency data tells a different story. Here's why adoption dashboards from Copilot and Viva can't measure whether anyone's actually good at the tool — and what can.",
    pillar: "Usage Isn't Proficiency",
    publishedAt: "2026-09-18",
    readingMinutes: 6,
    faq: [
      {
        question: "What's the difference between AI adoption and AI proficiency?",
        answer:
          "Adoption measures whether someone used the tool at all — a login, a prompt sent, a suggestion accepted. Proficiency measures whether they used it well — whether they'd catch a bad diff, know when a task is a poor fit for AI, or avoid shipping a plausible-looking mistake. A dashboard can show 100% adoption and zero proficiency data.",
      },
      {
        question: "Do GitHub Copilot's or Microsoft Viva's dashboards measure skill or just usage?",
        answer:
          "Just usage. GitHub's Copilot Metrics API tracks active users, acceptance rate, and PR throughput; Microsoft Viva Insights tracks \"intentional actions\" and adoption rate by team. Neither evaluates code quality, review judgment, or competency — both vendors' own documentation scopes them to activity volume, not skill.",
      },
    ],
  },
  {
    slug: "ai-code-vulnerabilities",
    title: "45% of AI-generated code has an OWASP vulnerability — is anyone checking yours?",
    description:
      "Veracode found 45% of AI-generated code fails OWASP security tests, unchanged in 2026. Here's what the data means for your AI code review process.",
    pillar: "The Vibe Coding Tax",
    publishedAt: "2026-09-18",
    readingMinutes: 8,
  },
  {
    slug: "business-case-for-certification",
    title: "How to build the business case for AI-tool certification",
    description:
      "A practical template for the business case for AI training certification: cost data, pilot sizing, ROI math, and a checklist to justify AI certification budget.",
    pillar: "Building the Business Case",
    publishedAt: "2026-09-18",
    readingMinutes: 8,
    faq: [
      {
        question: "What's the difference between pitching this as \"AI literacy\" versus \"risk reduction\"?",
        answer:
          "\"AI literacy\" asks for budget to run a course and measures success by attendance — it's easy to reject because nobody can define what \"literate\" means or what it prevents. A risk-reduction pitch asks for budget to verify, with evidence, which specific people can already use these tools safely, competing against the cost of the incident it prevents rather than against every other soft training line-item.",
      },
      {
        question: "How much does unmanaged \"shadow AI\" actually cost a company?",
        answer:
          "IBM's 2025 Cost of a Data Breach Report found that breaches involving shadow AI — employees using AI tools the company never approved or governed — added an average of $670,000 to the cost of the breach, and that 63 percent of organizations have no AI governance policy in place at all.",
      },
      {
        question: "How do I calculate ROI for a certification pilot?",
        answer:
          "Use the Phillips ROI Methodology, which extends standard training evaluation with a financial level: ROI (%) = (net benefits of the program ÷ total program costs) × 100. Net benefits are the estimated cost of the incidents or rework the credential is meant to catch, minus the pilot's cost; total costs are the assessment fee, rubric sign-off time, and paid assessment time.",
      },
    ],
  },
  {
    slug: "self-assessment-accuracy",
    title: "Why only 11% of employees can accurately self-assess their AI skills",
    description:
      "A Workera analysis of 22,000+ skills assessments found only 11% of employees rate their own AI ability accurately. Here's the research, and the fix.",
    pillar: "Usage Isn't Proficiency",
    publishedAt: "2026-09-18",
    readingMinutes: 8,
  },
  {
    slug: "custom-certification-cost",
    title: "Custom AI certification cost: what actually drives it (and when not to build one)",
    description:
      "No published pricing exists because it depends on tool novelty, SME time, and cohort size. Here's what drives cost, and when a published track wins instead.",
    pillar: "Building the Business Case",
    publishedAt: "2026-09-18",
    readingMinutes: 7,
  },
  {
    slug: "codex-certification",
    title: "Is there an OpenAI Codex certification? Here's what actually exists",
    description:
      "OpenAI has no official proctored Codex certification. Its one certification program is employer-pilot only and covers general ChatGPT use, not coding.",
    pillar: "Tool-Specific Playbooks",
    publishedAt: "2026-09-18",
    readingMinutes: 5,
    faq: [
      {
        question: "Is there an official OpenAI certification for Codex?",
        answer:
          "No. OpenAI's one certification program, AI Foundations, launched December 9, 2025, but it covers general ChatGPT and office-productivity AI use, not Codex or coding. Access is currently limited to employer and public-sector pilots (Walmart, Accenture, and others) — not open to individual enrollment.",
      },
      {
        question: "Does OpenAI Academy's Codex Bootcamp make you \"Codex certified\"?",
        answer:
          "No. Codex Bootcamp is a free three-session live webinar series (101, 201, 301) with no quiz, assessment, or credential attached — it's training, not a certification.",
      },
      {
        question: "What about the badges from OpenAI Academy's self-paced Codex courses?",
        answer:
          "Those are course-completion badges issued via Accredible after scoring 80% or higher on a self-paced quiz within a pathway like \"Build with AI\" — a real pass bar, but still an open-book quiz on course content, not a proctored assessment of skill against real code.",
      },
    ],
  },
  {
    slug: "cursor-certification",
    title: "Is there a Cursor certification? No — here's what Anysphere actually offers",
    description:
      "Cursor has no official certification for developers. It has free tutorials, workshops, and a product security audit (AIUC-1) — not a competency check.",
    pillar: "Tool-Specific Playbooks",
    publishedAt: "2026-09-18",
    readingMinutes: 5,
    faq: [
      {
        question: "Is there an official Cursor certification for developers?",
        answer:
          "No. Anysphere (Cursor's maker) offers free tutorials (Cursor Learn), live/on-demand workshops, and a community Ambassador program — none of which are proctored, scored, or issue a verifiable credential.",
      },
      {
        question: "What is Cursor's AIUC-1 certification, then?",
        answer:
          "AIUC-1 is a real, independently audited certification — by Schellman — but it certifies Cursor the product's security and reliability controls (secrets protection, MCP security, agent permissions), not the competency of the people using it.",
      },
      {
        question: "Does finishing Cursor Learn or attending a workshop count as being certified?",
        answer:
          "No. Cursor Learn is self-paced reading with no quiz or proctor, and workshops are 30-60 minute live or on-demand sessions with no assessment. Neither ends in a credential.",
      },
    ],
  },
  {
    slug: "gemini-certification",
    title: "Is there a Google Gemini certification? Here's what actually exists",
    description:
      "Google's Generative AI Leader exam is proctored and public but barely touches Gemini. The one exam named after Gemini is a free, unproctored K-12 quiz.",
    pillar: "Tool-Specific Playbooks",
    publishedAt: "2026-09-18",
    readingMinutes: 5,
  },
]

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

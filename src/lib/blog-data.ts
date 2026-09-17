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
]

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

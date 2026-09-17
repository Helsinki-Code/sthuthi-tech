export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  pillar: string
  publishedAt: string // ISO date
  readingMinutes: number
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
]

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

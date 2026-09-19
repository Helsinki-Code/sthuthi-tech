import { Resend } from "resend"

// Minimal local types for Vercel's Node.js function runtime, instead of
// depending on @vercel/node (its type package drags in vulnerable, dev-only
// transitive deps) — the .status()/.json() helpers below are provided by
// Vercel's runtime regardless of which types describe them here.
interface FnRequest {
  method?: string
  body?: unknown
}
interface FnResponse {
  status(code: number): FnResponse
  json(body: unknown): void
}

const PROJECT_TYPES = [
  "agentic-product",
  "ai-integration",
  "design-system",
  "commerce-content",
  "other",
] as const
type ProjectType = (typeof PROJECT_TYPES)[number]

const PROJECT_TYPE_LABEL: Record<ProjectType, string> = {
  "agentic-product": "Agentic product engineering",
  "ai-integration": "AI integration & MCP tooling",
  "design-system": "Design system / component library",
  "commerce-content": "Commerce or content platform",
  other: "Other",
}

function isProjectType(value: unknown): value is ProjectType {
  return typeof value === "string" && (PROJECT_TYPES as readonly string[]).includes(value)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export default async function handler(req: FnRequest, res: FnResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" })
    return
  }

  const body = (req.body ?? {}) as Record<string, unknown>
  const { name, email, company, projectType, message, website } = body as {
    name?: string
    email?: string
    company?: string
    projectType?: string
    message?: string
    website?: string // honeypot — real visitors never fill this in
  }

  // Silently accept-and-drop spam instead of telling a bot what tripped it.
  if (typeof website === "string" && website.trim().length > 0) {
    res.status(200).json({ ok: true })
    return
  }

  if (
    typeof name !== "string" || name.trim().length < 2 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" || message.trim().length < 10 ||
    !isProjectType(projectType)
  ) {
    res.status(400).json({ ok: false, error: "Please fill in all required fields with a valid email." })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL
  const toEmail = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("contact api: missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL env var")
    res.status(500).json({ ok: false, error: "The contact form isn't configured yet. Please email us directly." })
    return
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Sthuthi Web] New entry — ${PROJECT_TYPE_LABEL[projectType]}`,
      html: `
        <p><strong>Project type:</strong> ${escapeHtml(PROJECT_TYPE_LABEL[projectType])}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(String(company))}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("contact api: resend error", error)
      res.status(502).json({ ok: false, error: "Couldn't send that just now — please try again shortly." })
      return
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error("contact api: unexpected error", err)
    res.status(500).json({ ok: false, error: "Something went wrong. Please try again shortly." })
  }
}

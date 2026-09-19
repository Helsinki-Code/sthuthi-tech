import { useState, type FormEvent } from "react"
import { Seo } from "@/lib/seo"
import { PageIntro } from "@/components/site/page-intro"
import { SpecBlock } from "@/components/site/spec-block"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const PROJECT_TYPES = [
  { value: "agentic-product", label: "Agentic product engineering" },
  { value: "ai-integration", label: "AI integration & MCP tooling" },
  { value: "design-system", label: "Design system / component library" },
  { value: "commerce-content", label: "Commerce or content platform" },
  { value: "other", label: "Other" },
]

type Status = "idle" | "pending" | "success" | "error"

export function ContactPage() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("pending")
    setErrorMessage("")

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = (await res.json()) as { ok: boolean; error?: string }
      if (!json.ok) {
        setStatus("error")
        setErrorMessage(json.error ?? "Something went wrong.")
        return
      }
      trackEvent("contact_submit", { project_type: String(data.projectType ?? "") })
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setErrorMessage("Couldn't reach the server — please try again shortly.")
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Start a new entry with Sthuthi Web — tell us what you're building."
        path="/contact"
      />
      <PageIntro
        eyebrow="Entry 009"
        title="Open a new entry."
        description="Tell us what you're building. We'll get back to you within two working days."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            {status === "success" ? (
              <div className="border border-brand-orange/40 bg-accent/40 p-8">
                <p className="font-heading text-lg font-bold">Entry received.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll reply within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Honeypot — hidden from real visitors, catches simple bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" required autoComplete="name" />
                  <Field label="Email" name="email" type="email" required autoComplete="email" />
                </div>
                <Field label="Company" name="company" autoComplete="organization" />

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    Project type
                  </span>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand-orange"
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={6}
                    className="border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand-orange"
                  />
                </label>

                {status === "error" && (
                  <p className="text-sm text-brand-orange">{errorMessage}</p>
                )}

                <Button type="submit" disabled={status === "pending"} className="w-fit">
                  {status === "pending" ? "Sending…" : "Submit entry"}
                </Button>
              </form>
            )}
          </div>

          <div>
            <SpecBlock
              rows={[
                { label: "Direct", value: "web@sthuthi-tech.com" },
                { label: "Response", value: "Within 2 working days" },
                { label: "Studio", value: "Part of Sthuthi Technologies" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand-orange"
      />
    </label>
  )
}

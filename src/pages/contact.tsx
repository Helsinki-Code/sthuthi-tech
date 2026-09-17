import { useState, type FormEvent } from "react"
import { useSearchParams } from "react-router-dom"
import { CheckCircle, WarningCircle } from "@phosphor-icons/react"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { trackEvent } from "@/lib/analytics"

const REASONS = [
  { value: "book-track", label: "Book a published track" },
  { value: "custom-track", label: "Scope a custom certification" },
  { value: "verify-credential", label: "Verify a credential" },
] as const

type Status = "idle" | "submitting" | "success" | "error"

export function ContactPage() {
  const [params] = useSearchParams()
  const initialReason = REASONS.some((r) => r.value === params.get("reason"))
    ? (params.get("reason") as (typeof REASONS)[number]["value"])
    : "book-track"
  const initialTrack = params.get("track") ?? ""

  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const body = (await res.json()) as { ok: boolean; error?: string }

      if (!res.ok || !body.ok) {
        setStatus("error")
        setErrorMessage(body.error ?? "Something went wrong. Please try again shortly.")
        return
      }

      trackEvent("contact_form_submit", { reason: String(data.reason ?? "") })
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setErrorMessage("Couldn't reach the server. Check your connection and try again.")
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Reach Sthuthi Technologies to book a certification track, scope a custom program, or verify a credential."
        path="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE_URL}/contact`,
        }}
      />
      <PageHeader
        kicker="Get in touch"
        title="Tell us why you're writing in."
        description="One form, routed to the right inbox based on what you pick below — you'll hear back within one business day, India Standard Time."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          {status === "success" ? (
            <Reveal className="flex flex-col items-center gap-3 border border-border bg-card px-6 py-16 text-center">
              <CheckCircle weight="fill" className="size-8 text-brand-orange" />
              <p className="font-heading text-lg font-bold">Message sent.</p>
              <p className="max-w-sm text-[14px] text-muted-foreground">
                We reply from a person, not a ticketing system — expect a
                reply within one business day, India Standard Time.
              </p>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-border bg-card p-6 sm:p-8">
                {/* Honeypot — hidden from real visitors, catches simple bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required minLength={2} placeholder="Full name" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Company name" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="reason">Reason for writing in</Label>
                    <NativeSelect id="reason" name="reason" defaultValue={initialReason} className="w-full">
                      {REASONS.map((r) => (
                        <NativeSelectOption key={r.value} value={r.value}>
                          {r.label}
                        </NativeSelectOption>
                      ))}
                    </NativeSelect>
                  </div>
                </div>

                {initialTrack && (
                  <input type="hidden" name="track" value={initialTrack} />
                )}
                {initialTrack && (
                  <p className="-mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    Re: {initialTrack} track
                  </p>
                )}

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder={
                      initialReason === "verify-credential"
                        ? "Include the credential ID you're checking."
                        : "Tool, headcount, and roughly when you're looking to run this."
                    }
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 border border-destructive/30 bg-destructive/10 px-3 py-2 text-[13px] text-destructive">
                    <WarningCircle weight="fill" className="mt-0.5 size-4 shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="h-11 w-fit bg-brand-orange px-6 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}

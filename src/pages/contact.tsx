import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"

const ROUTES = [
  {
    title: "Booking a published track",
    body: "Tell us the tool, the headcount, and roughly when. We'll confirm the next cohort start date or propose a private run for larger groups.",
    to: "programs@sthuthitech.com?subject=Book%20a%20published%20track",
  },
  {
    title: "Scoping a custom certification",
    body: "Bring an engineering lead to the first call — we'll need someone who can describe the internal tool or workflow in detail.",
    to: "programs@sthuthitech.com?subject=Custom%20certification%20scoping",
  },
  {
    title: "Verifying a credential",
    body: "Have a candidate's credential ID ready. We confirm validity, level, and issue date; we don't share assessment scores without the holder's consent.",
    to: "verify@sthuthitech.com?subject=Credential%20verification",
  },
]

export function ContactPage() {
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
        title="Three reasons people write in — pick yours."
        description="Each goes to a different inbox so it reaches someone who can actually answer it on the first reply."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {ROUTES.map((route, i) => (
              <Reveal
                key={route.title}
                delayMs={i * 70}
                className="flex flex-col border border-border bg-card p-6"
              >
                <h2 className="font-heading font-bold">{route.title}</h2>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  {route.body}
                </p>
                <Button
                  variant="outline"
                  className="mt-5 w-fit text-[12px]"
                  nativeButton={false}
                  render={<a href={`mailto:${route.to}`}>{route.to.split("?")[0]}</a>}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={240} className="mt-10 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            Replies land within one business day, India Standard Time.
          </Reveal>
        </div>
      </section>
    </>
  )
}

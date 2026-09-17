import { Link } from "react-router-dom"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { SpotlightMascot } from "@/components/site/spotlight-mascot"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const TIMELINE = [
  {
    n: "Week 1",
    title: "Scoping call",
    body: "An engineering lead walks us through the tool or workflow. We leave with a draft list of tasks a certified person should be able to do.",
  },
  {
    n: "Week 2–3",
    title: "Rubric sign-off",
    body: "We write the assessment rubric and a short pilot curriculum. Your team reviews and edits it before anything is scheduled.",
  },
  {
    n: "Week 4",
    title: "Pilot cohort",
    body: "A small first cohort runs the full training and assessment. We adjust based on what the pilot surfaces.",
  },
  {
    n: "Ongoing",
    title: "Standing track",
    body: "The track runs on your calendar going forward, with the syllabus revisited whenever the underlying tool changes meaningfully.",
  },
]

const EXAMPLES = [
  "An internal LangGraph-based agent framework, certifying the platform team on its guardrails and escalation paths",
  "A proprietary Copilot fork restricted to an air-gapped environment, certified without any data leaving the client's network",
  "A prompt-engineering rubric specific to a legal team's document-review workflow",
]

export function CustomCertificationPage() {
  return (
    <>
      <Seo
        title="Custom AI Certification Programs"
        description="Sthuthi Technologies builds custom AI-tool certification tracks around your internal or proprietary tooling, with a rubric your engineering leads sign off on before it runs."
        path="/custom-certification"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Custom certification", item: `${SITE_URL}/custom-certification` },
          ],
        }}
      />
      <PageHeader
        kicker="Built-to-order"
        title="For the tool that isn't a public track yet."
        description="Internal agents, proprietary copilots, and company-specific workflows don't show up in a vendor's certification catalogue. We build the curriculum and the rubric around them directly, with your engineering leads signing off before it runs."
      >
        <div className="mt-8">
          <Button
            size="lg"
            className="h-11 bg-brand-orange px-5 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
            nativeButton={false}
            onClick={() => trackEvent("cta_click", { location: "custom_certification_page" })}
            render={<Link to="/contact?reason=custom-track">Start a scoping call</Link>}
          />
        </div>
      </PageHeader>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              How a custom track gets built
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
            {TIMELINE.map((step, i) => (
              <Reveal key={step.title} delayMs={i * 60} className="bg-card p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-brand-orange">
                  {step.n}
                </span>
                <h3 className="mt-2 font-heading font-bold">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              What we've built tracks around before
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {EXAMPLES.map((ex) => (
                <li key={ex} className="border-l-2 border-brand-orange py-1 pl-4 text-[14px] leading-relaxed text-muted-foreground">
                  {ex}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
              Details specific enough to identify a client are shared only
              with their consent — ask on the{" "}
              <Link to="/contact" className="text-brand-orange underline underline-offset-4">
                contact page
              </Link>{" "}
              and we'll see what we can share.
            </p>
          </div>

          <Reveal delayMs={100} className="mx-auto w-full max-w-xs">
            <SpotlightMascot
              src="/art/sthuthi-guide-teaching.png"
              alt="Curriculum lead scoping a custom certification on a whiteboard"
              label="Curriculum lead"
              className="aspect-[4/5] w-full rotate-2"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}

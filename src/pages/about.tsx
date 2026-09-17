import { Link } from "react-router-dom"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { SpotlightMascot } from "@/components/site/spotlight-mascot"
import { Reveal } from "@/components/site/reveal"

const PRINCIPLES = [
  {
    title: "The tool changes every quarter. The standard shouldn't.",
    body: "Claude Code, Codex, Copilot and Gemini all ship meaningful updates several times a year. Our syllabi get revised on that cadence; the bar for what counts as 'certified' does not move just because a vendor renamed a feature.",
  },
  {
    title: "An assessor, not an algorithm, signs off",
    body: "Automated grading works for multiple-choice. It doesn't work for judging whether an engineer made a defensible call on an ambiguous diff. Every attempt gets a human reviewer with sign-off responsibility.",
  },
  {
    title: "We'd rather fail someone than dilute the credential",
    body: "A certification that everyone passes stops being useful to the people relying on it — hiring managers, clients, auditors. Pass rates are not a metric we optimise for.",
  },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Sthuthi Technologies runs enterprise training and proctored certification for AI coding and productivity tools. Here's how the credential stays meaningful as the tools change."
        path="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about`,
        }}
      />
      <PageHeader
        kicker="About Sthuthi"
        title="A certification body for tools that ship updates monthly."
        description="Most workplace training was built for software that changes once a year. AI tools don't. Sthuthi Technologies exists to keep the syllabus and the assessment current without turning the credential into a participation certificate."
      />

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="flex flex-col gap-10">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 70}>
                <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={100} className="mx-auto w-full max-w-xs">
            <SpotlightMascot
              src="/art/sthuthi-guide-planning.png"
              alt="Sthuthi Technologies program lead reviewing an upcoming cohort"
              label="Program design"
              className="aspect-[4/5] w-full rotate-[-2deg]"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Where we operate
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Cohorts run remotely by default, with on-site delivery available
              for teams who want the assessment proctored in person. Custom
              tracks are scoped over a call before anything is scheduled —
              see{" "}
              <Link to="/custom-certification" className="text-brand-orange underline underline-offset-4">
                how that works
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

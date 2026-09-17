import { SpotlightMascot } from "@/components/site/spotlight-mascot"
import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

const STEPS = [
  {
    n: "01",
    title: "Scope the roster and the tools",
    body: "You tell us who's being certified and which tools actually matter to their role — Claude Code for the platform team, Copilot for the app engineers, a custom track for data science. We map that to role-specific tasks instead of selling a one-size course.",
    img: "/art/sthuthi-guide-planning.png",
    imgLabel: "Program lead · Scoping call",
  },
  {
    n: "02",
    title: "Run the cohort",
    body: "Live, instructor-led blocks of 90 minutes, capped at 20 seats so the instructor is looking at real code, not reading slides. Async modules cover the parts that genuinely don't need a room.",
    img: "/art/sthuthi-guide-teaching.png",
    imgLabel: "Instructor · Cohort session",
  },
  {
    n: "03",
    title: "Proctor the assessment",
    body: "A closed-book, task-based assessment run inside the actual tool — not a multiple-choice quiz about it. Every attempt gets a human review before a credential is issued, pass or fail.",
    img: "/art/sthuthi-guide-reviewing.png",
    imgLabel: "Assessor · Review pass",
  },
]

export function HowItWorks() {
  return (
    <section id="method" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Training that ends in a test, not a survey.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Four stages, run the same way whether it's fifteen engineers or
            an entire department.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14 sm:mt-16 sm:gap-20">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 60}>
              <div className="grid items-center gap-8 sm:grid-cols-[220px_1fr] sm:gap-12">
                <SpotlightMascot
                  src={step.img}
                  alt={`${step.imgLabel} illustration`}
                  label={step.imgLabel}
                  className={cn(
                    "aspect-[4/5] w-40 sm:w-full",
                    i % 2 === 0 ? "sm:-rotate-2" : "sm:rotate-2"
                  )}
                />
                <div>
                  <span className="font-mono text-xs text-brand-orange">
                    {step.n}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delayMs={180}>
            <div className="grid items-center gap-8 border-t border-border pt-14 sm:grid-cols-[220px_1fr] sm:gap-12">
              <div className="flex aspect-[4/5] w-40 items-center justify-center border border-dashed border-border bg-secondary/40 p-4 sm:w-full">
                <span className="text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  Credential
                  <br />
                  issued
                </span>
              </div>
              <div>
                <span className="font-mono text-xs text-brand-orange">04</span>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-tight sm:text-2xl">
                  Issue the credential
                </h3>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                  Every pass gets a dated certificate with a credential ID
                  your HRIS or a LinkedIn profile can reference, and a
                  verification record an employer can check without emailing
                  us.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

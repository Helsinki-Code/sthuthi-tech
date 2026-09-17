import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/reveal"
import { SpotlightMascot } from "@/components/site/spotlight-mascot"
import { Button } from "@/components/ui/button"

const SPEC = [
  ["Tools covered", "Whatever's actually in your stack — including internal or unreleased tooling under NDA"],
  ["Curriculum", "Written around your codebase and workflows, not a generic vendor deck"],
  ["Rubric", "Pass criteria set with your engineering leads before the first cohort runs"],
  ["Branding", "Your name on the certificate; ours only in the small print if you'd rather not co-brand"],
]

export function CustomCertification() {
  return (
    <section
      id="custom"
      className="relative overflow-hidden border-b border-border bg-brand-navy py-20 text-brand-navy-foreground sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(var(--brand-navy-line) 1px, transparent 1px), linear-gradient(90deg, var(--brand-navy-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-brand-orange">
            Built-to-order
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            No published track covers your stack? We write one.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-navy-foreground/70">
            Some of what we certify never ships as a public track — an
            internal agent framework, a proprietary copilot, a specific way
            your platform team expects AI tools to be used. We build the
            curriculum and the assessment around that directly.
          </p>

          <dl className="mt-8 grid gap-5 border-t border-[var(--brand-navy-border)] pt-8 sm:grid-cols-2">
            {SPEC.map(([term, desc]) => (
              <div key={term}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-orange">
                  {term}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-brand-navy-foreground/70">
                  {desc}
                </dd>
              </div>
            ))}
          </dl>

          <Button
            size="lg"
            className="mt-9 h-11 bg-brand-orange px-5 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
            nativeButton={false}
            render={<Link to="/custom-certification">See how custom tracks work</Link>}
          />
        </Reveal>

        <Reveal delayMs={120} className="mx-auto hidden w-full max-w-xs sm:block">
          <SpotlightMascot
            src="/art/sthuthi-guide-teaching.png"
            alt="Instructor scoping a custom certification track on a whiteboard"
            label="Curriculum lead"
            className="aspect-[4/5] w-full rotate-2"
          />
        </Reveal>
      </div>
    </section>
  )
}

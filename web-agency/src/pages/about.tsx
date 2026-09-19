import { Link } from "react-router-dom"
import { Seo } from "@/lib/seo"
import { PageIntro } from "@/components/site/page-intro"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"

const CHARTER = [
  "Every entry in the registry is a real, live product — not a mockup or a case study written after the fact.",
  "Nothing ships or sends on a client's behalf without a human-approval gate — the same standard we hold every agentic product we build to.",
  "We number and date every piece of work the way an engineering log does — so it can be pointed to, not just described.",
  "We'd rather ship fewer, real things than pad a portfolio with disposable ones.",
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Sthuthi Web is an agentic AI product engineering studio led by CEO Shalini Tomar — real, numbered, verifiable work, not case studies written after the fact."
        path="/about"
      />
      <PageIntro
        eyebrow="The studio"
        title="We build agentic AI products we'd stake our name on."
        description="No slideware, no 'coming soon.' Every entry in our registry is a real, live product you can check yourself."
      />

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal className="dossier text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Every entry in this registry is numbered, dated, and linked to
              the real, live product — the same way an engineering log
              records what actually shipped, not a polished write-up
              produced after the fact. If a claim on this site can't be
              checked against the live thing, it doesn't belong on this page.
            </p>
            <p className="mt-5">
              Shalini Tomar, our CEO, is also one of the two painters behind
              entry{" "}
              <Link to="/work/sthuthi-art" className="text-brand-orange underline underline-offset-4">
                008, Sthuthi Art
              </Link>{" "}
              — a real, direct connection to that one entry specifically. The
              other seven entries in the registry are separate client
              engagements.
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <figure className="border border-border bg-card">
              <img
                src="/ceo/shalini_tomar.png"
                alt="Shalini Tomar, CEO of Sthuthi Web."
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="border-t border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                Shalini Tomar — CEO
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange">
            Charter
          </p>
          <ol className="mt-6 flex flex-col gap-6 border-t border-border pt-6">
            {CHARTER.map((item, i) => (
              <Reveal key={item} delayMs={i * 60} className="flex gap-4">
                <span className="font-mono text-sm text-brand-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-foreground/90">{item}</p>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button nativeButton={false} render={<Link to="/work">See the registry</Link>} />
            <Button variant="outline" nativeButton={false} render={<Link to="/contact">Open a new entry</Link>} />
          </div>
        </div>
      </section>
    </>
  )
}

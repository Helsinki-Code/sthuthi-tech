import { Link } from "react-router-dom"
import { Seo } from "@/lib/seo"
import { PageIntro } from "@/components/site/page-intro"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"

const CHARTER = [
  "Every entry in the registry is a real, live product — not a mockup or a case study written after the fact.",
  "Nothing ships or sends on a client's behalf without a human approval gate — the same discipline Sthuthi Technologies certifies teams on, applied to our own work.",
  "We number our work the way our parent company numbers its credentials — so a piece of work can be pointed to, not just described.",
  "We'd rather ship fewer, real things than pad a portfolio with disposable ones.",
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Sthuthi Web is the product-engineering studio behind Sthuthi Technologies' own client work."
        path="/about"
      />
      <PageIntro
        eyebrow="The studio"
        title="Why a certification company also builds software."
        description="Sthuthi Technologies trains and certifies teams on AI tools. Sthuthi Web is where that same discipline gets applied to actually building with them."
      />

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="dossier text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Sthuthi Technologies issues numbered, verifiable credentials —
              every certificate carries a credential ID and a named human
              assessor. The registry on this site borrows that same logic:
              every piece of work gets a number, a spec sheet, and a link to
              the real, live product, instead of a polished case-study photo
              with no way to check it.
            </p>
            <p className="mt-5">
              Shalini Tomar, a director of Sthuthi Technologies, is also one
              of the two painters behind entry{" "}
              <Link to="/work/sthuthi-art" className="text-brand-orange underline underline-offset-4">
                008, Sthuthi Art
              </Link>{" "}
              — a real, direct connection to that one entry specifically. The
              other seven entries in the registry are separate client
              engagements.
            </p>
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

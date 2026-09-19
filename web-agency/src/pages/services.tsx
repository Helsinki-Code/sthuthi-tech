import { Link } from "react-router-dom"
import { Seo } from "@/lib/seo"
import { Reveal } from "@/components/site/reveal"
import { LedgerAccordion } from "@/components/site/ledger-accordion"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/registry-data"

const SECTIONS = [
  { n: "01", label: "Capabilities" },
  { n: "02", label: "The ledger" },
  { n: "03", label: "Next" },
]

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="What Sthuthi Web actually builds — agentic product engineering, AI integration, design systems, and commerce platforms, evidenced by the registry."
        path="/services"
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <div className="hidden flex-col gap-4 border-r border-border pr-8 lg:flex">
            {SECTIONS.map((s) => (
              <div key={s.n} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-brand-orange">{s.n}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange lg:hidden">
              Capabilities
            </p>
            <h1 className="mt-3 max-w-2xl text-right font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:mt-0 lg:text-left">
              Four capabilities. Every one of them shipped, not pitched.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground lg:text-right lg:ml-auto">
              Each row below expands into scope and links straight to the
              registry entries that prove it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-4 sm:py-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <LedgerAccordion services={SERVICES} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
          <p className="max-w-md font-heading text-xl font-bold tracking-tight">
            This would be entry 009.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button nativeButton={false} render={<Link to="/contact">Open a new entry</Link>} />
            <Button variant="outline" nativeButton={false} render={<Link to="/work">See the registry</Link>} />
          </div>
        </div>
      </section>
    </>
  )
}

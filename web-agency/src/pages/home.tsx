import { Link } from "react-router-dom"
import { Seo, SITE_URL } from "@/lib/seo"
import { Reveal } from "@/components/site/reveal"
import { RegistryRow } from "@/components/site/registry-row"
import { Button } from "@/components/ui/button"
import { REGISTRY, SERVICES } from "@/lib/registry-data"
import { ArrowUpRight } from "@phosphor-icons/react"

const SECTIONS = [
  { n: "01", label: "The studio" },
  { n: "02", label: "Registry excerpt" },
  { n: "03", label: "Capabilities" },
  { n: "04", label: "In production" },
]

const STATS = [
  { value: "8", label: "Entries in the registry" },
  { value: "14", label: "Live products across them" },
  { value: "7", label: "Products in one suite (Amro Agentic AI)" },
  { value: "52+", label: "MCP integrations in one platform (ShelVey AI)" },
]

export function HomePage() {
  return (
    <>
      <Seo
        title="Sthuthi Web — Agentic AI Product Studio"
        description="Sthuthi Web builds agentic AI products, integrations, and design systems — the engineering studio behind Sthuthi Technologies' own client work."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sthuthi Web",
          url: SITE_URL,
          parentOrganization: { "@type": "Organization", name: "Sthuthi Technologies", url: "https://sthuthi-tech.com" },
        }}
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-24 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <div className="hidden flex-col gap-4 border-r border-border pr-8 lg:flex">
            {SECTIONS.map((s) => (
              <div key={s.n} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-brand-orange">{s.n}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
            <a
              href="https://sthuthi-tech.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-brand-orange"
            >
              Part of Sthuthi Technologies
              <ArrowUpRight weight="bold" className="size-3" />
            </a>
          </div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange lg:hidden">
              The studio
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:mt-0">
              We build the AI products our own certification standard would pass.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Sthuthi Web is the engineering arm of Sthuthi Technologies —
              agentic platforms, AI integrations, and design systems, built
              with the same reviewed, human-approved discipline our parent
              company certifies teams on.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button nativeButton={false} render={<Link to="/work">See the registry</Link>} />
              <Button variant="outline" nativeButton={false} render={<Link to="/services">What we build</Link>} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Registry excerpt — entries 001–003
            </p>
            <Link to="/work" className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange">
              All 8 entries →
            </Link>
          </div>
          <div className="mt-2 flex flex-col">
            {REGISTRY.slice(0, 3).map((entry) => (
              <RegistryRow key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Capabilities
            </p>
            <Link to="/services" className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange">
              All capabilities →
            </Link>
          </div>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {SERVICES.slice(0, 2).map((service, i) => (
              <Reveal key={service.number} delayMs={i * 60} className="border-t border-border pt-5">
                <span className="font-mono text-sm text-brand-orange">{service.number}</span>
                <h3 className="mt-2 font-heading text-lg font-bold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            In production
          </p>
          <div className="mt-6 grid gap-8 border-t border-border pt-6 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 50}>
                <span className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  {stat.value}
                </span>
                <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              This would be entry 009.
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Tell us what you're building.
            </p>
            <Button className="mt-8" nativeButton={false} render={<Link to="/contact">Open a new entry</Link>} />
          </Reveal>
        </div>
      </section>
    </>
  )
}

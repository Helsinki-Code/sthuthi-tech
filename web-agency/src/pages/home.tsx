import { Link } from "react-router-dom"
import { Seo, SITE_URL } from "@/lib/seo"
import { Reveal } from "@/components/site/reveal"
import { RegistryRow } from "@/components/site/registry-row"
import { Button } from "@/components/ui/button"
import { REGISTRY, SERVICES } from "@/lib/registry-data"

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
        title="Sthuthi Web — Agentic AI Product Engineering Studio"
        description="Sthuthi Web designs and ships agentic AI platforms, AI-tool integrations, and production design systems. Fourteen live products across eight real engagements — see the registry."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sthuthi Web",
          legalName: "Sthuthi Technologies, LLC",
          url: SITE_URL,
          email: "admin@sthuthi-tech.com",
          telephone: "+91 9950730218",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2810 North Church Street",
            addressLocality: "Wilmington",
            addressRegion: "DE",
            postalCode: "19802",
            addressCountry: "US",
          },
          founder: {
            "@type": "Person",
            name: "Shalini Tomar",
            url: "https://www.linkedin.com/in/shalini-tomar-10-sha/",
            email: "shelly@sthuthi-tech.com",
            image: `${SITE_URL}/ceo/shalini_tomar.png`,
          },
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
          </div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange lg:hidden">
              The studio
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:mt-0">
              Agentic AI products, engineered to actually ship.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Sthuthi Web designs and builds agentic AI platforms, AI-tool
              integrations, and production design systems — fourteen live
              products across eight real engagements, each one dated and
              linked in our registry so you can check it yourself.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button nativeButton={false} render={<Link to="/work">See the registry</Link>} />
              <Button variant="outline" nativeButton={false} render={<Link to="/services">What we build</Link>} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-orange">
            What we do
          </p>
          <div className="dossier mt-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Sthuthi Web is an agentic AI product engineering studio: we
              design, build, and ship multi-agent platforms, AI integrations,
              and the design systems that hold them together. Most "AI
              product" work stalls at a demo — a slick prototype that never
              reaches a real user because nobody solved the boring parts:
              human-approval gates before an agent sends anything, fallback
              handling when a model provider goes down, a component system
              the rest of the team can actually build on. That's the work we
              specialize in.
            </p>
            <p className="mt-5">
              Every product in our registry is live and independently owned —
              agentic sales and outreach platforms, AI customer-support
              agents, SEO and content automation, a component design system
              with its own MCP server, and an AI image-generation product,
              among others. We don't publish case studies we can't back with
              a real, dated link.
            </p>
          </div>
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

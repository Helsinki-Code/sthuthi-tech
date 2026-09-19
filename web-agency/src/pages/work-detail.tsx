import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Seo, SITE_URL } from "@/lib/seo"
import { Reveal } from "@/components/site/reveal"
import { SpecBlock } from "@/components/site/spec-block"
import { EntryNav } from "@/components/site/entry-nav"
import { Button } from "@/components/ui/button"
import { getRegistryEntry, getAdjacentEntries } from "@/lib/registry-data"

export function WorkDetailPage() {
  const { slug } = useParams()
  const entry = slug ? getRegistryEntry(slug) : undefined

  if (!entry) return <Navigate to="/work" replace />

  const { prev, next } = getAdjacentEntries(entry.slug)

  const specRows = [
    { label: "Category", value: entry.category },
    { label: "Status", value: entry.status },
    ...(entry.stack ? [{ label: "Stack", value: entry.stack }] : []),
    ...(entry.pricing ? [{ label: "Pricing", value: entry.pricing }] : []),
    { label: "URL", value: entry.url.replace("https://", "") },
  ]

  return (
    <>
      <Seo
        title={entry.name}
        description={entry.summary}
        path={`/work/${entry.slug}`}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: entry.name,
            description: entry.summary,
            url: entry.url,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Registry", item: `${SITE_URL}/work` },
              { "@type": "ListItem", position: 3, name: entry.name, item: `${SITE_URL}/work/${entry.slug}` },
            ],
          },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="font-mono text-sm text-brand-orange">{entry.number}</span>
                <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
                  {entry.name}
                </h1>
              </div>
              <a
                href={entry.url}
                target="_blank"
                rel="noreferrer"
                className="mb-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange"
              >
                Visit live product
                <ArrowUpRight weight="bold" className="size-3.5" />
              </a>
            </div>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {entry.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Spec
            </p>
            <SpecBlock rows={specRows} className="mt-4" />
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Dossier
            </p>
            {entry.subProducts ? (
              <div className="mt-4 flex flex-col gap-8 border-t border-border pt-6">
                {entry.facts.length > 0 && (
                  <ul className="dossier font-serif text-[16px] leading-relaxed text-foreground/90">
                    {entry.facts.map((fact) => (
                      <li key={fact} className="mb-3 list-disc pl-1 marker:text-brand-orange">
                        {fact}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-col divide-y divide-border border-t border-border">
                  {entry.subProducts.map((sub, i) => (
                    <Reveal key={sub.name} delayMs={i * 40} className="py-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-heading text-base font-bold tracking-tight">
                          {sub.name}
                        </h3>
                        <a
                          href={sub.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-brand-orange"
                        >
                          {sub.url.replace("https://", "")}
                          <ArrowUpRight weight="bold" className="size-3" />
                        </a>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {sub.description}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="dossier mt-4 border-t border-border pt-6 font-serif text-[16px] leading-relaxed text-foreground/90">
                {entry.facts.map((fact) => (
                  <li key={fact} className="mb-4 list-disc pl-1 marker:text-brand-orange">
                    {fact}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <EntryNav prev={prev} next={next} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Button nativeButton={false} render={<Link to="/contact">Start something like this</Link>} />
        </div>
      </section>
    </>
  )
}

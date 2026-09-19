import { useMemo, useState } from "react"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageIntro } from "@/components/site/page-intro"
import { RegistryRow } from "@/components/site/registry-row"
import { REGISTRY } from "@/lib/registry-data"
import { cn } from "@/lib/utils"

export function WorkIndexPage() {
  const categories = useMemo(
    () => Array.from(new Set(REGISTRY.map((entry) => entry.category))),
    []
  )
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? REGISTRY.filter((entry) => entry.category === active) : REGISTRY

  return (
    <>
      <Seo
        title="Registry"
        description="The Sthuthi Web registry — every product we've built, numbered and documented."
        path="/work"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Registry",
          url: `${SITE_URL}/work`,
        }}
      />
      <PageIntro
        eyebrow="Registry — Vol. 1"
        title="Everything we've shipped, numbered."
        description="Eight entries, fourteen live products. Each one shows a real, dated capture and links straight to the live thing itself."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 border-b border-border pb-8">
            <button
              type="button"
              onClick={() => setActive(null)}
              className={cn(
                "border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
                active === null
                  ? "border-brand-orange text-brand-orange"
                  : "border-border text-muted-foreground hover:border-foreground/40"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
                  active === category
                    ? "border-brand-orange text-brand-orange"
                    : "border-border text-muted-foreground hover:border-foreground/40"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col">
            {filtered.map((entry) => (
              <RegistryRow key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

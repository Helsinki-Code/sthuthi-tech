import type { ReactNode } from "react"
import { PageHeader } from "@/components/site/page-header"
import { LEGAL_UPDATED } from "@/lib/site-data"

interface LegalSection {
  title: string
  body: ReactNode
}

export function LegalLayout({
  kicker,
  title,
  sections,
}: {
  kicker: string
  title: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHeader
        kicker={kicker}
        title={title}
        description={`Last updated ${LEGAL_UPDATED}.`}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <div key={section.title} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
                <h2 className="font-heading text-lg font-bold tracking-tight">
                  {String(i + 1).padStart(2, "0")}. {section.title}
                </h2>
                <div className="prose-legal mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

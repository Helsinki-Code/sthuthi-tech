import type { ReactNode } from "react"
import { PageIntro } from "@/components/site/page-intro"

const LEGAL_UPDATED = "19 September 2026"

interface LegalSection {
  title: string
  body: ReactNode
}

export function LegalLayout({
  eyebrow,
  title,
  sections,
}: {
  eyebrow: string
  title: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} description={`Last updated ${LEGAL_UPDATED}.`} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <div key={section.title} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
                <h2 className="font-heading text-lg font-bold tracking-tight">
                  <span className="mr-2 font-mono text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="dossier mt-3 text-[14px] leading-relaxed text-muted-foreground">
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

import type { ReactNode } from "react"
import { Reveal } from "@/components/site/reveal"

interface PageIntroProps {
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

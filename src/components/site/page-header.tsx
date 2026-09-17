import type { ReactNode } from "react"
import { Reveal } from "@/components/site/reveal"

interface PageHeaderProps {
  kicker: string
  title: string
  description?: string
  logo?: ReactNode
  children?: ReactNode
}

export function PageHeader({ kicker, title, description, logo, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <Reveal>
          <div className="mb-5 inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 bg-brand-orange" aria-hidden="true" />
            {kicker}
          </div>
          <div className="flex items-center gap-4">
            {logo}
            <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              {title}
            </h1>
          </div>
          {description && (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

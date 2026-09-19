import { Link } from "react-router-dom"
import { ArrowRight } from "@phosphor-icons/react"
import type { RegistryEntry } from "@/lib/registry-data"
import { cn } from "@/lib/utils"

export function RegistryRow({ entry, className }: { entry: RegistryEntry; className?: string }) {
  return (
    <Link
      to={`/work/${entry.slug}`}
      className={cn(
        "group flex items-center gap-4 border-b border-border py-6 transition-colors hover:bg-accent/40 sm:gap-6",
        className
      )}
    >
      <span className="w-10 shrink-0 font-mono text-sm text-muted-foreground sm:w-12">
        {entry.number}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-heading text-base font-bold tracking-tight sm:text-lg">
            {entry.name}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-orange">
            {entry.category}
          </span>
        </div>
        <p className="mt-1 line-clamp-1 text-[13px] text-muted-foreground sm:text-sm">
          {entry.summary}
        </p>
      </div>
      <ArrowRight
        weight="bold"
        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-orange"
      />
    </Link>
  )
}

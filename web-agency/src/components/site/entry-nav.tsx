import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import type { RegistryEntry } from "@/lib/registry-data"

export function EntryNav({ prev, next }: { prev?: RegistryEntry; next?: RegistryEntry }) {
  if (!prev && !next) return null

  return (
    <div className="flex items-stretch justify-between border-t border-border">
      {prev ? (
        <Link
          to={`/work/${prev.slug}`}
          className="group flex flex-1 items-center gap-3 py-6 pr-4 text-left"
        >
          <ArrowLeft weight="bold" className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-brand-orange" />
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {prev.number}
            </span>
            <span className="font-heading text-sm font-bold">{prev.name}</span>
          </span>
        </Link>
      ) : (
        <span className="flex-1" />
      )}
      {next ? (
        <Link
          to={`/work/${next.slug}`}
          className="group flex flex-1 items-center justify-end gap-3 py-6 pl-4 text-right"
        >
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {next.number}
            </span>
            <span className="font-heading text-sm font-bold">{next.name}</span>
          </span>
          <ArrowRight weight="bold" className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-orange" />
        </Link>
      ) : (
        <span className="flex-1" />
      )}
    </div>
  )
}

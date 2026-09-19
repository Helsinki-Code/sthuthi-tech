import { cn } from "@/lib/utils"

interface SpecRow {
  label: string
  value: string
}

export function SpecBlock({ rows, className }: { rows: SpecRow[]; className?: string }) {
  return (
    <dl className={cn("flex flex-col border-t border-border", className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-3.5 text-sm sm:grid-cols-[8rem_1fr]"
        >
          <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            {row.label}
          </dt>
          <dd className="text-foreground/90">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

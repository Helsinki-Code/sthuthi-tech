import { CLIENTS } from "@/lib/site-data"
import { LogoTile } from "@/components/site/logo-tile"
import { Reveal } from "@/components/site/reveal"

export function ClientsSection() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 shrink-0 bg-brand-orange" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Organisations with a Sthuthi cohort on record
          </p>
        </Reveal>

        <Reveal
          delayMs={80}
          className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4"
        >
          {CLIENTS.map((client) => (
            <LogoTile
              key={client.name}
              src={`/clients/${client.file}`}
              alt={client.name}
              fallback={client.name}
              className="h-24 w-full border-0"
              imgClassName="h-3/5 w-3/5"
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

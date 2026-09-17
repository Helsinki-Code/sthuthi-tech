import { CLIENTS } from "@/lib/site-data"
import { ClientLogo } from "@/components/site/client-logo"
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
          className="mt-8 grid grid-cols-2 divide-x divide-y divide-border border border-border sm:grid-cols-4 sm:divide-y-0"
        >
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex h-24 items-center justify-center px-6"
            >
              <ClientLogo name={client.name} file={client.file} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

import { Seo } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { LogoTile } from "@/components/site/logo-tile"
import { Reveal } from "@/components/site/reveal"
import { ClosingCta } from "@/components/site/closing-cta"
import { CLIENTS } from "@/lib/site-data"

export function ClientsPage() {
  return (
    <>
      <Seo
        title="Clients"
        description="Organisations running an active or completed AI-tool certification cohort with Sthuthi Technologies."
        path="/clients"
      />
      <PageHeader
        kicker="On record"
        title="Who's run a cohort with us."
        description="Listed with the organisation's consent. We don't publish pass rates, headcounts, or internal feedback without separate sign-off."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {CLIENTS.map((client, i) => (
              <Reveal
                key={client.name}
                delayMs={i * 60}
                className="flex items-center gap-5 bg-card px-6 py-8"
              >
                <LogoTile
                  src={`/clients/${client.file}`}
                  alt={client.name}
                  fallback={client.name}
                  className="h-14 w-14 shrink-0"
                  imgClassName="h-3/4 w-3/4"
                />
                <div>
                  <p className="font-heading font-bold">{client.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    Cohort on record
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Want a fuller reference?"
        description="Cohort size, track, or a direct introduction to the team that ran it — ask, and we'll check with the client first."
      />
    </>
  )
}

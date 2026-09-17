import { Link } from "react-router-dom"
import { Seo } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { ClientLogo } from "@/components/site/client-logo"
import { Reveal } from "@/components/site/reveal"
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
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-secondary/40">
                  <ClientLogo name={client.name} file={client.file} />
                </div>
                <div>
                  <p className="font-heading font-bold">{client.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    Cohort on record
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={220} className="mt-10 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
            <p>
              Want a fuller reference — cohort size, track, or a direct
              introduction to the team that ran it? Ask on the{" "}
              <Link to="/contact" className="text-brand-orange underline underline-offset-4">
                contact page
              </Link>{" "}
              and we'll check with the client first.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
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
          <div className="grid gap-6 sm:grid-cols-2">
            {CLIENTS.map((client, i) => (
              <Reveal key={client.name} delayMs={i * 60}>
                <Link
                  to={`/clients/${client.slug}`}
                  className="group flex h-full flex-col gap-5 border border-border bg-card p-6 transition-colors hover:border-brand-orange"
                >
                  <div className="flex items-start justify-between gap-4">
                    <LogoTile
                      src={`/clients/${client.file}`}
                      alt={client.name}
                      fallback={client.name}
                      className="h-14 w-14 shrink-0"
                      imgClassName="h-3/4 w-3/4"
                    />
                    <ArrowUpRight
                      weight="bold"
                      className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-orange"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-heading text-lg font-bold tracking-tight">
                      {client.name}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {client.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="text-brand-orange">View profile & certificate</span>
                    <span>{new URL(client.url).hostname.replace("www.", "")}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={CLIENTS.length * 60} className="mt-10 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
            Company descriptions above are drawn from each organisation's own
            site, not from their engagement with us — we don't publish which
            track a client ran, cohort size, or outcomes without their
            separate sign-off. Ask on the contact page below if you need a
            fuller reference.
          </Reveal>
        </div>
      </section>

      <ClosingCta
        title="Want a fuller reference?"
        description="Cohort size, track, or a direct introduction to the team that ran it — ask, and we'll check with the client first."
      />
    </>
  )
}

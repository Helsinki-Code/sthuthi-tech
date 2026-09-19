import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, CheckCircle } from "@phosphor-icons/react"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { LogoTile } from "@/components/site/logo-tile"
import { ClosingCta } from "@/components/site/closing-cta"
import { Button } from "@/components/ui/button"
import { CLIENTS } from "@/lib/site-data"

export function ClientDetailPage() {
  const { slug } = useParams()
  const client = CLIENTS.find((c) => c.slug === slug)

  if (!client) return <Navigate to="/clients" replace />

  const hostname = new URL(client.url).hostname.replace("www.", "")
  const certificateSrc = `/clients/certificates/${client.slug}.png`
  const certificateAlt = client.certificateRecipient
    ? `Certificate of completion for ${client.certificateRecipient} at ${client.name}, issued by Sthuthi Technologies.`
    : `Certificate of completion for ${client.name}, issued by Sthuthi Technologies.`

  return (
    <>
      <Seo
        title={client.name}
        description={`${client.name}: ${client.description}`}
        path={`/clients/${client.slug}`}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: client.name,
            url: client.url,
            description: client.description,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Clients", item: `${SITE_URL}/clients` },
              { "@type": "ListItem", position: 3, name: client.name, item: `${SITE_URL}/clients/${client.slug}` },
            ],
          },
        ]}
      />

      <PageHeader
        kicker="Cohort on record"
        title={client.name}
        description={client.description}
        logo={
          <LogoTile
            src={`/clients/${client.file}`}
            alt={client.name}
            fallback={client.name}
            className="h-14 w-14 shrink-0"
            imgClassName="h-3/4 w-3/4"
          />
        }
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="h-11 bg-brand-orange px-5 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
            nativeButton={false}
            render={
              <a href={client.url} target="_blank" rel="noreferrer">
                Visit {hostname}
                <ArrowUpRight weight="bold" className="ml-1.5 size-3.5" />
              </a>
            }
          />
          <Button
            variant="outline"
            size="lg"
            className="h-11 px-5 text-[13px] font-semibold"
            nativeButton={false}
            render={
              <Link to="/clients">
                <ArrowLeft weight="bold" className="mr-1.5 size-3.5" />
                All clients
              </Link>
            }
          />
        </div>
      </PageHeader>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              What {client.name} does
            </p>
            <ul className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
              {client.highlights.map((item, i) => (
                <Reveal key={item} delayMs={i * 60} className="flex gap-2.5 text-[14px] leading-relaxed">
                  <CheckCircle weight="fill" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                  <span className="text-muted-foreground">{item}</span>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
              Drawn from {hostname}'s own site, not from {client.name}'s engagement with us — we
              don't publish which track a client ran, cohort size, or outcomes without their
              separate sign-off.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Certificate of completion
            </p>
            <Reveal delayMs={80} className="mt-4 border border-border bg-card p-3">
              <img
                src={certificateSrc}
                alt={certificateAlt}
                width={1536}
                height={1024}
                loading="lazy"
                className="h-full w-full border border-border object-contain"
              />
            </Reveal>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {client.certificateRecipient
                ? `Issued to ${client.certificateRecipient} on behalf of ${client.name}.`
                : `Issued to ${client.name}.`}
            </p>
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

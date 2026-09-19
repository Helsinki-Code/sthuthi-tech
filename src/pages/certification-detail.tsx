import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, CheckCircle } from "@phosphor-icons/react"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { LogoTile } from "@/components/site/logo-tile"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import { TRACKS } from "@/lib/site-data"

export function CertificationDetailPage() {
  const { slug } = useParams()
  const track = TRACKS.find((t) => t.slug === slug)

  if (!track) return <Navigate to="/certifications" replace />

  return (
    <>
      <Seo
        title={track.metaTitle}
        description={track.metaDescription}
        path={`/certifications/${track.slug}`}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: `${track.tool} Certification`,
            description: track.summary,
            provider: {
              "@type": "Organization",
              name: "Sthuthi Technologies",
              sameAs: SITE_URL,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Certification tracks", item: `${SITE_URL}/certifications` },
              { "@type": "ListItem", position: 3, name: track.tool, item: `${SITE_URL}/certifications/${track.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: track.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />

      <PageHeader
        kicker={track.focus}
        title={`${track.tool} certification`}
        description={track.summary}
        logo={<LogoTile src={`/tools/${track.logo}`} alt={track.tool} className="h-14 w-14 shrink-0" />}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="h-11 bg-brand-orange px-5 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
            nativeButton={false}
            onClick={() => trackEvent("cta_click", { location: "certification_detail", track: track.tool })}
            render={
              <Link to={`/contact?reason=book-track&track=${encodeURIComponent(track.tool)}`}>
                Talk to us about a {track.tool} cohort
              </Link>
            }
          />
          <Button
            variant="outline"
            size="lg"
            className="h-11 px-5 text-[13px] font-semibold"
            nativeButton={false}
            render={<Link to="/certifications"><ArrowLeft weight="bold" className="mr-1.5 size-3.5" />All tracks</Link>}
          />
        </div>
      </PageHeader>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <dl className="border border-border">
              {[
                ["Levels", track.levels],
                ["Format", track.format],
                ["Assessment", track.assessment],
              ].map(([term, desc]) => (
                <div key={term} className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 text-[13px] last:border-b-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{term}</dt>
                  <dd className="text-right font-medium">{desc}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Who this is for
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {track.whoFor.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed">
                    <CheckCircle weight="fill" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Syllabus
            </p>
            <ol className="mt-4 flex flex-col gap-6 border-t border-border pt-6">
              {track.syllabus.map((item, i) => (
                <Reveal key={item.title} delayMs={i * 60} className="flex gap-4">
                  <span className="font-mono text-sm text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold">{item.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 border border-dashed border-border p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-orange">
                Certification landscape
              </p>
              <h2 className="mt-3 font-heading text-xl font-bold tracking-tight sm:text-2xl">
                {track.landscape.heading}
              </h2>
              <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-muted-foreground">
                {track.landscape.body}
              </p>
            </div>
            <Link
              to={`/blog/${track.landscape.blogSlug}`}
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-brand-orange"
            >
              Read the full research
              <ArrowUpRight weight="bold" className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-heading text-lg font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            {track.faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-heading text-[15px] font-bold">{item.question}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

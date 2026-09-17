import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { LogoTile } from "@/components/site/logo-tile"
import { ClosingCta } from "@/components/site/closing-cta"
import { TRACKS } from "@/lib/site-data"

export function CertificationsIndexPage() {
  return (
    <>
      <Seo
        title="Certification Tracks"
        description="Published AI-tool certification tracks from Sthuthi Technologies: Claude Code, Codex, GitHub Copilot, Gemini, and Cursor, each with levels, format, and assessment type."
        path="/certifications"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Certification tracks", item: `${SITE_URL}/certifications` },
          ],
        }}
      />
      <PageHeader
        kicker="Published tracks"
        title="Five tools, one assessment standard."
        description="Every track ends the same way: a task-based assessment inside the real tool, reviewed by a human before a credential is issued. What differs is the syllabus underneath."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {TRACKS.map((track, i) => (
              <Reveal key={track.slug} delayMs={i * 60}>
                <Link
                  to={`/certifications/${track.slug}`}
                  className="group flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-brand-orange"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <LogoTile src={`/tools/${track.logo}`} alt={track.tool} className="h-9 w-9 shrink-0" />
                      <h2 className="font-heading text-xl font-bold tracking-tight">
                        {track.tool}
                      </h2>
                    </div>
                    <ArrowUpRight
                      weight="bold"
                      className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-orange"
                    />
                  </div>
                  <p className="mt-2 text-[13px] text-muted-foreground">{track.focus}</p>
                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                    {track.summary}
                  </p>
                  <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                    <div>
                      <dt className="text-brand-orange">Levels</dt>
                      <dd className="mt-1 normal-case tracking-normal text-foreground/80">
                        {track.levels.split(" → ").length}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-brand-orange">Format</dt>
                      <dd className="mt-1 normal-case tracking-normal text-foreground/80">
                        {track.format}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-brand-orange">Assessed</dt>
                      <dd className="mt-1 normal-case tracking-normal text-foreground/80">
                        In-tool
                      </dd>
                    </div>
                  </dl>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal
            delayMs={240}
            className="mt-6 flex flex-col items-start justify-between gap-4 border border-dashed border-border p-6 sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-heading font-bold">
                Running a tool that isn't on this list?
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                We write the curriculum and the rubric around your internal
                or unreleased tooling directly.
              </p>
            </div>
            <Link
              to="/custom-certification"
              className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
            >
              See how custom tracks work
              <ArrowUpRight weight="bold" className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ClosingCta
        title="Not sure which track fits your team?"
        description="Send us the tool and the headcount — we'll tell you which published track applies, or whether this needs a custom one."
      />
    </>
  )
}

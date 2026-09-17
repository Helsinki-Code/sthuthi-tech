import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/site/flip-words"
import { TiltCard } from "@/components/site/tilt-card"
import { SpotlightMascot } from "@/components/site/spotlight-mascot"
import { LogoTile } from "@/components/site/logo-tile"
import { Reveal } from "@/components/site/reveal"
import { TRACKS } from "@/lib/site-data"

const TOOLS = [...TRACKS.map((t) => t.tool), "your own AI stack"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-1.5 w-1.5 bg-brand-orange" aria-hidden="true" />
              Enterprise AI-tool certification
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="font-heading text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-balance sm:text-[3.4rem]">
              Certify what your team can actually do with{" "}
              <FlipWords words={TOOLS} className="font-heading font-extrabold" />.
            </h1>
          </Reveal>

          <Reveal delayMs={160}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              We run the cohort training, proctor the assessment, and issue a
              credential with a verifiable ID — not a certificate for finishing
              a video. Pick a published track or hand us your internal tool
              stack and we'll write the curriculum around it.
            </p>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="h-11 bg-brand-orange px-5 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
                nativeButton={false}
                render={<Link to="/certifications">See the certification tracks</Link>}
              />
              <Button
                variant="outline"
                size="lg"
                className="h-11 px-5 text-[13px] font-semibold"
                nativeButton={false}
                render={<Link to="/contact">Talk to a program lead</Link>}
              />
            </div>
          </Reveal>

          <Reveal delayMs={320}>
            <div className="mt-10 max-w-md border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Live track roster
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {TRACKS.length} tools
                </span>
              </div>
              <ul>
                {TRACKS.map((track) => (
                  <li
                    key={track.slug}
                    className="flex items-center gap-3 border-b border-border px-4 py-2.5 text-[13px] last:border-b-0"
                  >
                    <LogoTile
                      src={`/tools/${track.logo}`}
                      alt={track.tool}
                      className="h-6 w-6 shrink-0"
                    />
                    <span className="font-medium">{track.tool}</span>
                    <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                      {track.levels.split(" → ").length} levels
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={200} className="relative">
          <div className="relative mx-auto w-full max-w-sm">
            <TiltCard className="relative z-10">
              <div className="border border-border bg-card p-2 shadow-[10px_10px_0_var(--brand-paper-shadow)]">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <img
                    src="/art/sthuthi-certificate-template.png"
                    alt="Sample Sthuthi Technologies certificate of completion, showing the credential ID and verification fields"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute bottom-2 right-2 bg-[var(--brand-navy)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-navy-foreground/80">
                    Specimen
                  </span>
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Credential ID
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    ST-CC-2026-00417
                  </span>
                </div>
              </div>
            </TiltCard>

            <SpotlightMascot
              src="/art/sthuthi-guide-laptop.png"
              alt="Sthuthi Technologies program guide working through the assessment platform on a laptop"
              label="Assessor · Cohort 04"
              className="absolute -bottom-12 -left-24 z-0 hidden aspect-[3/4] w-48 rotate-[-3deg] sm:block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

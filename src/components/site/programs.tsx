import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { TRACKS } from "@/lib/site-data"

export function Programs() {
  return (
    <section id="tracks" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Published certification tracks
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Each track is scoped to what the tool is actually used for at
              work, split into levels so a new hire and a five-year engineer
              don't sit through the same room.
            </p>
          </div>
          <Button
            variant="outline"
            className="w-fit"
            nativeButton={false}
            render={<Link to="/custom-certification">Need a tool that isn't listed?</Link>}
          />
        </Reveal>

        <Reveal delayMs={100} className="mt-12 overflow-x-auto border border-border">
          <table className="w-full min-w-[760px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-secondary/60 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                <th className="px-4 py-3 font-medium">Tool</th>
                <th className="px-4 py-3 font-medium">Focus</th>
                <th className="px-4 py-3 font-medium">Levels</th>
                <th className="px-4 py-3 font-medium">Format</th>
                <th className="px-4 py-3 font-medium">Assessment</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {TRACKS.map((track) => (
                <tr
                  key={track.slug}
                  className="group border-b border-border last:border-b-0 hover:bg-secondary/30"
                >
                  <td className="whitespace-nowrap px-4 py-4">
                    <Link
                      to={`/certifications/${track.slug}`}
                      className="font-heading font-bold hover:text-brand-orange"
                    >
                      {track.tool}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">
                    {track.focus}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 font-mono text-[11px] text-muted-foreground">
                    {track.levels}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">
                    {track.format}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">
                    {track.assessment}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right">
                    <Link
                      to={`/certifications/${track.slug}`}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-brand-orange"
                    >
                      Details <ArrowUpRight weight="bold" className="size-3" />
                    </Link>
                  </td>
                </tr>
              ))}
              <tr className="bg-accent/40">
                <td className="whitespace-nowrap px-4 py-4">
                  <Link to="/custom-certification" className="font-heading font-bold text-brand-orange">
                    Custom track
                  </Link>
                </td>
                <td className="px-4 py-4 text-muted-foreground">
                  Your internal tools, agents & workflows
                </td>
                <td className="whitespace-nowrap px-4 py-4 font-mono text-[11px] text-muted-foreground">
                  Scoped with you
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">
                  Built to your calendar
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">
                  Built to your rubric
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}

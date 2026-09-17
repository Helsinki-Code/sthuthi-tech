import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"

export function ClosingCta() {
  return (
    <section id="contact" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="border border-border bg-secondary/40 px-6 py-14 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tell us which tool your team needs to be tested on.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            A 20-minute call is enough for us to tell you whether a published
            track fits, or if this needs a custom one.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-11 bg-brand-orange px-6 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
              nativeButton={false}
              render={
                <a href="mailto:programs@sthuthitech.com?subject=Certification%20program%20review">
                  programs@sthuthitech.com
                </a>
              }
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

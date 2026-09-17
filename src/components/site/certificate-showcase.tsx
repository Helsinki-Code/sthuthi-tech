import { CheckCircle } from "@phosphor-icons/react"
import { Reveal } from "@/components/site/reveal"
import { SpotlightMascot } from "@/components/site/spotlight-mascot"

const CHECKS = [
  {
    title: "A credential ID, not a filename",
    body: "Every certificate carries a unique ID in the format ST-{TOOL}-{YEAR}-{SEQ}. An employer or client can ask for it and check it against our record.",
  },
  {
    title: "A named verifier",
    body: "The assessor who reviewed the attempt signs off on the record — not an automated pass/fail from a quiz engine.",
  },
  {
    title: "A level that means something",
    body: "Foundations, Practitioner, or Expert map to specific tasks the holder can be handed, listed on request for hiring managers who ask.",
  },
]

export function CertificateShowcase() {
  return (
    <section id="credential" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative rotate-[1.5deg] border border-border bg-card p-2 shadow-[10px_10px_0_var(--brand-paper-shadow)]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/art/sthuthi-certificate-template.png"
                alt="Sthuthi Technologies certificate layout with credential ID and verification fields highlighted"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
            </div>
          </div>
          <SpotlightMascot
            src="/art/sthuthi-guide-reviewing.png"
            alt="Assessor reviewing a completed certification attempt on a clipboard"
            label="Assessor sign-off"
            className="absolute -bottom-8 -right-8 hidden aspect-[3/4] w-32 rotate-3 sm:block"
          />
        </Reveal>

        <div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            What actually gets handed over
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            The certificate is the artifact people notice, but the thing an
            HR system or a client actually relies on is what's behind it.
          </p>

          <ul className="mt-8 flex flex-col gap-6">
            {CHECKS.map((check) => (
              <li key={check.title} className="flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="mt-0.5 size-5 shrink-0 text-brand-orange"
                />
                <div>
                  <p className="font-heading font-bold">{check.title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                    {check.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

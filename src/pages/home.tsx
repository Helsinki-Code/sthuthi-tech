import { Seo, SITE_URL } from "@/lib/seo"
import { Hero } from "@/components/site/hero"
import { HowItWorks } from "@/components/site/how-it-works"
import { Programs } from "@/components/site/programs"
import { ClientsSection } from "@/components/site/clients-section"
import { CertificateShowcase } from "@/components/site/certificate-showcase"
import { CustomCertification } from "@/components/site/custom-certification"
import { ClosingCta } from "@/components/site/closing-cta"

export function HomePage() {
  return (
    <>
      <Seo
        title="Sthuthi Technologies — AI Tool Certification for Teams"
        description="Sthuthi Technologies trains and certifies employees on Claude Code, Codex, GitHub Copilot, Gemini, and custom internal AI tools — with a proctored assessment and a verifiable credential."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sthuthi Technologies",
          url: SITE_URL,
          logo: `${SITE_URL}/brand/logo-mark-round.png`,
          description:
            "Enterprise training and certification for AI coding and productivity tools.",
        }}
      />
      <Hero />
      <ClientsSection />
      <HowItWorks />
      <Programs />
      <CertificateShowcase />
      <CustomCertification />
      <ClosingCta
        title="Tell us which tool your team needs to be tested on."
        description="A 20-minute call is enough for us to tell you whether a published track fits, or if this needs a custom one."
      />
    </>
  )
}

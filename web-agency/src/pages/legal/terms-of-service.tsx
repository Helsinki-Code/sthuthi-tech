import { Seo } from "@/lib/seo"
import { LegalLayout } from "@/components/site/legal-layout"

export function TermsOfServicePage() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="Terms governing the use of the Sthuthi Web site and engagements initiated through it."
        path="/legal/terms-of-service"
        noIndex
      />
      <LegalLayout
        eyebrow="Legal"
        title="Terms of Service"
        sections={[
          {
            title: "What this site is",
            body: (
              <p>
                This site is a portfolio and contact point for Sthuthi Web, a
                product-engineering studio operated by Sthuthi Technologies.
                Nothing on this site is a binding offer — scope, timeline, and
                pricing for any engagement are agreed separately, in writing,
                before work begins.
              </p>
            ),
          },
          {
            title: "The registry",
            body: (
              <p>
                Every entry in the registry describes a real, independently
                owned product. Descriptions are drawn from each product's own
                public site at the time of writing and may go out of date as
                those products change — we link to the live product on every
                entry so you can verify current details yourself.
              </p>
            ),
          },
          {
            title: "Use of this site",
            body: (
              <p>
                You may browse and reference this site freely. You may not
                scrape, republish, or represent the registry content as your
                own work, or use the contact form for unsolicited commercial
                outreach.
              </p>
            ),
          },
          {
            title: "No warranty",
            body: (
              <p>
                This site is provided as-is. We make reasonable efforts to
                keep registry information accurate but don't guarantee it's
                current at every moment.
              </p>
            ),
          },
          {
            title: "Contact",
            body: (
              <p>
                Questions about these terms:{" "}
                <a href="mailto:admin@sthuthi-tech.com" className="text-brand-orange underline underline-offset-4">
                  admin@sthuthi-tech.com
                </a>
                .
              </p>
            ),
          },
        ]}
      />
    </>
  )
}

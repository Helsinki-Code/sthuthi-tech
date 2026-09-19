import { Seo } from "@/lib/seo"
import { LegalLayout } from "@/components/site/legal-layout"

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Sthuthi Web collects, uses, and protects information from site visitors and project inquiries."
        path="/legal/privacy-policy"
        noIndex
      />
      <LegalLayout
        eyebrow="Legal"
        title="Privacy Policy"
        sections={[
          {
            title: "What we collect",
            body: (
              <p>
                This site collects only what you submit through the contact
                form — name, email, company, project type, and your message —
                plus standard analytics (page views and outbound clicks) once
                a GA4 property is configured for this domain.
              </p>
            ),
          },
          {
            title: "Why we collect it",
            body: (
              <p>
                Contact-form data is used only to respond to your inquiry.
                Analytics data is used in aggregate to understand which pages
                and case studies get read, so we can improve the site.
              </p>
            ),
          },
          {
            title: "Who we share it with",
            body: (
              <p>
                Contact-form submissions are sent via Resend to our own
                inbox — Resend processes but does not retain the message
                content beyond delivery. Analytics data goes to Google
                Analytics (GA4) once configured. We don't sell data or share
                it with advertisers.
              </p>
            ),
          },
          {
            title: "How long we keep it",
            body: (
              <p>
                Contact-form emails are kept as long as needed to handle the
                inquiry and any resulting engagement, then archived or
                deleted per normal inbox practice.
              </p>
            ),
          },
          {
            title: "Your rights",
            body: (
              <p>
                You can ask what we hold on you or request deletion. Write to{" "}
                <a href="mailto:admin@sthuthi-tech.com" className="text-brand-orange underline underline-offset-4">
                  admin@sthuthi-tech.com
                </a>{" "}
                and we'll respond within 30 days.
              </p>
            ),
          },
          {
            title: "Who operates this site",
            body: (
              <p>
                Sthuthi Web is operated by Sthuthi Technologies, LLC, 2810
                North Church Street, Wilmington, DE 19802, US.
              </p>
            ),
          },
        ]}
      />
    </>
  )
}

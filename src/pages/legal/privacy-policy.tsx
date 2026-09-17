import { Seo } from "@/lib/seo"
import { LegalLayout } from "@/components/site/legal-layout"

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Sthuthi Technologies collects, uses, and protects information from cohort participants, enterprise clients, and site visitors."
        path="/legal/privacy-policy"
        noIndex
      />
      <LegalLayout
        kicker="Legal"
        title="Privacy Policy"
        sections={[
          {
            title: "What we collect",
            body: (
              <p>
                When you enquire, register for a cohort, or take an
                assessment, we collect what's needed to run that process:
                name, work email, employer, the tool and level you're
                enrolling for, and — for assessments — the recording or
                transcript of the proctored session and the assessor's notes.
                We don't collect information unrelated to delivering or
                verifying a certification.
              </p>
            ),
          },
          {
            title: "Why we collect it",
            body: (
              <ul className="list-disc space-y-2 pl-5">
                <li>To schedule and run cohorts and assessments.</li>
                <li>
                  To issue a certificate and maintain the verification record
                  tied to its credential ID.
                </li>
                <li>
                  To respond to a verification request from an employer or
                  client, with the credential holder's underlying assessment
                  data kept confidential unless they consent to share it.
                </li>
                <li>
                  To improve a track's curriculum based on aggregate,
                  de-identified assessment outcomes.
                </li>
              </ul>
            ),
          },
          {
            title: "Who we share it with",
            body: (
              <p>
                Assessment recordings and scores are seen only by the
                assigned assessor and program lead. For enterprise cohorts,
                we share pass/fail status and level with the sponsoring
                employer's designated contact, since that's the reason the
                employer enrolled the participant. We do not sell personal
                data, and we do not share it with advertisers.
              </p>
            ),
          },
          {
            title: "How long we keep it",
            body: (
              <p>
                Certificate records (name, credential ID, tool, level, issue
                date) are kept indefinitely so verification keeps working
                for the life of the credential. Assessment recordings are
                retained for 12 months after issuance to handle disputes or
                re-assessment requests, then deleted.
              </p>
            ),
          },
          {
            title: "Your rights",
            body: (
              <p>
                You can ask us what we hold on you, correct inaccurate
                records, or request deletion of data that isn't needed for
                an active credential's verification record. Write to{" "}
                <a href="mailto:privacy@sthuthi-tech.com" className="text-brand-orange underline underline-offset-4">
                  privacy@sthuthi-tech.com
                </a>{" "}
                and we'll respond within 30 days.
              </p>
            ),
          },
          {
            title: "Where data is stored",
            body: (
              <p>
                Sthuthi Technologies operates from India, and cohort and
                assessment records are stored on infrastructure located in
                India and the EU. If your organisation requires a data
                processing agreement or a specific storage region, tell us
                during onboarding.
              </p>
            ),
          },
        ]}
      />
    </>
  )
}

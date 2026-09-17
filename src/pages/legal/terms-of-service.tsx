import { Seo } from "@/lib/seo"
import { LegalLayout } from "@/components/site/legal-layout"

export function TermsOfServicePage() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="The terms governing enrollment in Sthuthi Technologies training cohorts and the certifications issued on completion."
        path="/legal/terms-of-service"
        noIndex
      />
      <LegalLayout
        kicker="Legal"
        title="Terms of Service"
        sections={[
          {
            title: "What we provide",
            body: (
              <p>
                Sthuthi Technologies provides instructor-led and self-paced
                training on third-party AI tools, followed by a proctored
                assessment. We are not affiliated with Anthropic, OpenAI,
                GitHub, Microsoft, or Google, and our certifications are our
                own independent assessment — not an official vendor
                credential.
              </p>
            ),
          },
          {
            title: "Enrollment and payment",
            body: (
              <p>
                A cohort seat is confirmed once payment or a signed purchase
                order is received. Rescheduling a confirmed seat is free up
                to 5 business days before a cohort starts; after that, a
                one-time transfer to the next available cohort is offered at
                no extra cost. We don't offer refunds once a cohort has
                started.
              </p>
            ),
          },
          {
            title: "Assessment conduct",
            body: (
              <p>
                Assessments are closed-book with respect to outside human
                assistance — using the tool under test is expected and
                required; having someone else complete the task for you is
                not. An assessor who finds evidence of impersonation or
                outside assistance can fail the attempt and bar the
                candidate from re-sitting for 90 days.
              </p>
            ),
          },
          {
            title: "Certificate validity and revocation",
            body: (
              <p>
                A certificate reflects the holder's demonstrated capability
                at the time of assessment, not an ongoing guarantee. We may
                revoke a certificate and remove its verification record if
                we later find the assessment was compromised. Certificates
                do not expire, but a track's syllabus version is noted on
                the record so anyone verifying it can see how current the
                assessed material was.
              </p>
            ),
          },
          {
            title: "Intellectual property",
            body: (
              <p>
                Course materials, assessment tasks, and rubrics remain the
                property of Sthuthi Technologies. Enrollment gives you a
                personal, non-transferable licence to use them for your own
                learning — not to redistribute, resell, or use them to run a
                competing training program.
              </p>
            ),
          },
          {
            title: "Liability",
            body: (
              <p>
                We're not liable for hiring, promotion, or compensation
                decisions your employer or a third party makes based on a
                certification we issue. Our total liability for any claim
                arising from a training engagement is capped at the fees
                paid for that specific cohort.
              </p>
            ),
          },
          {
            title: "Governing law",
            body: (
              <p>
                These terms are governed by the laws of India. Disputes are
                subject to the exclusive jurisdiction of the courts where
                Sthuthi Technologies is registered.
              </p>
            ),
          },
        ]}
      />
    </>
  )
}

import { Seo } from "@/lib/seo"
import { LegalLayout } from "@/components/site/legal-layout"

export function CookiePolicyPage() {
  return (
    <>
      <Seo
        title="Cookie Policy"
        description="What Sthuthi Technologies actually stores in your browser — a short list, because the site doesn't run advertising or tracking cookies."
        path="/legal/cookie-policy"
        noIndex
      />
      <LegalLayout
        kicker="Legal"
        title="Cookie Policy"
        sections={[
          {
            title: "The short version",
            body: (
              <p>
                This site does not run advertising cookies, cross-site
                tracking, or a third-party analytics script. The only thing
                stored in your browser is a single preference, described
                below — so there's no cookie consent banner, because there's
                nothing to consent to.
              </p>
            ),
          },
          {
            title: "Light / dark mode preference",
            body: (
              <p>
                When you switch the theme toggle, we save that choice in
                your browser's <code>localStorage</code> under the key{" "}
                <code>sthuthi-theme</code>. It stays on your device, is
                never sent to our servers, and is only used to remember your
                preference on your next visit. Clearing your browser's site
                data removes it.
              </p>
            ),
          },
          {
            title: "If that changes",
            body: (
              <p>
                If we ever add analytics or a scheduling widget that sets
                its own cookies, this page will be updated first, with a
                specific list of what's added and why — not a blanket
                consent form covering hypothetical future tools.
              </p>
            ),
          },
        ]}
      />
    </>
  )
}

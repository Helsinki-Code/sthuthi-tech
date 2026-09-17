import { Seo } from "@/lib/seo"
import { LegalLayout } from "@/components/site/legal-layout"

export function CookiePolicyPage() {
  return (
    <>
      <Seo
        title="Cookie Policy"
        description="What Sthuthi Technologies actually stores in your browser and tracks with Google Analytics — stated plainly, not as a blanket consent form."
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
                This site runs one analytics tool — Google Analytics — and
                stores one local preference in your browser. It doesn't run
                advertising cookies or sell data to third parties. Both are
                described below in full, not summarised behind a blanket
                "we use cookies to improve your experience" banner.
              </p>
            ),
          },
          {
            title: "Google Analytics",
            body: (
              <p>
                We use Google Analytics (GA4) to see which pages get read
                and which buttons on this site actually get clicked — the
                "Talk to a program lead" and "Book a program review" buttons,
                the certification-track links, and successful contact-form
                submissions, specifically. GA4 sets its own cookies to tell
                repeat visitors apart from new ones and sends page and event
                data to Google. We don't pass it your name, email, or
                anything you type into the contact form — only the fact that
                a page was viewed or a button was clicked. You can opt out
                of Google Analytics tracking sitewide with{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-orange underline underline-offset-4"
                >
                  Google's browser add-on
                </a>
                , or block it with any standard tracker/ad blocker.
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
                If we add another analytics tool, an ad pixel, or a
                scheduling widget that sets its own cookies, this page gets
                updated first, with a specific list of what's added and why
                — not a blanket consent form covering hypothetical future
                tools.
              </p>
            ),
          },
        ]}
      />
    </>
  )
}

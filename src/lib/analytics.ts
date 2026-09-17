declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Falls back to the live Sthuthi Technologies GA4 property so analytics work
// out of the box; override with VITE_GA_MEASUREMENT_ID for a different property.
const DEFAULT_MEASUREMENT_ID = "G-FYNBKLSZ47"
const MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || DEFAULT_MEASUREMENT_ID

let initialized = false

/** No-ops with no network calls when MEASUREMENT_ID can't be resolved. */
export function initAnalytics() {
  if (initialized || !MEASUREMENT_ID || typeof document === "undefined") return
  initialized = true

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag("js", new Date())
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false })
}

export function trackPageview(path: string) {
  if (!MEASUREMENT_ID || !window.gtag) return
  window.gtag("event", "page_view", { page_path: path })
}

export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (!MEASUREMENT_ID || !window.gtag) return
  window.gtag("event", name, params)
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Unlike the parent sthuthi-tech.com site, this does NOT fall back to a
// hardcoded measurement ID — Sthuthi Web is a distinct property and should
// no-op cleanly (no network calls) until its own GA4 ID is configured.
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

let initialized = false

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

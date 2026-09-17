import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { trackPageview } from "@/lib/analytics"

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname, hash])

  useEffect(() => {
    trackPageview(pathname)
  }, [pathname])

  return null
}

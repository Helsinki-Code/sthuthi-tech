import { useEffect } from "react"

const SITE_NAME = "Sthuthi Technologies"
const SITE_URL = "https://sthuthi-tech.com"
const DEFAULT_IMAGE = `${SITE_URL}/brand/logo-horizontal.png`

interface SeoProps {
  title: string
  description: string
  path: string
  /** JSON-LD structured data object(s) for this page */
  structuredData?: object | object[]
  noIndex?: boolean
  image?: string
  imageAlt?: string
  type?: "website" | "article"
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

export function Seo({ title, description, path, structuredData, noIndex, image = DEFAULT_IMAGE, imageAlt = SITE_NAME, type = "website" }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    const canonical = `${SITE_URL}${path}`

    document.title = fullTitle
    setMeta("name", "description", description)
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow")

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }
    link.setAttribute("href", canonical)

    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", canonical)
    setMeta("property", "og:type", type)
    setMeta("property", "og:site_name", SITE_NAME)
    setMeta("property", "og:image", image)
    setMeta("property", "og:image:alt", imageAlt)
    if (type === "article") {
      setMeta("property", "og:image:width", "1200")
      setMeta("property", "og:image:height", "630")
    } else {
      document.head.querySelector('meta[property="og:image:width"]')?.remove()
      document.head.querySelector('meta[property="og:image:height"]')?.remove()
    }
    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", fullTitle)
    setMeta("name", "twitter:description", description)
    setMeta("name", "twitter:image", image)
    setMeta("name", "twitter:image:alt", imageAlt)

    const scripts: HTMLScriptElement[] = []
    if (structuredData) {
      const items = Array.isArray(structuredData) ? structuredData : [structuredData]
      for (const item of items) {
        const script = document.createElement("script")
        script.type = "application/ld+json"
        script.textContent = JSON.stringify(item)
        document.head.appendChild(script)
        scripts.push(script)
      }
    }

    return () => {
      scripts.forEach((s) => s.remove())
    }
  }, [title, description, path, structuredData, noIndex, image, imageAlt, type])

  return null
}

export { SITE_NAME, SITE_URL }

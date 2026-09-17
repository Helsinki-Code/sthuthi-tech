import { Link } from "react-router-dom"
import { LogoMark } from "@/components/site/logo-mark"
import { TRACKS } from "@/lib/site-data"

const COLUMNS = [
  {
    title: "Certification",
    links: [
      ...TRACKS.map((t) => ({ label: `${t.tool} track`, to: `/certifications/${t.slug}` })),
      { label: "Custom programs", to: "/custom-certification" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Clients", to: "/clients" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", to: "/legal/privacy-policy" },
      { label: "Terms of service", to: "/legal/terms-of-service" },
      { label: "Cookie policy", to: "/legal/cookie-policy" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <LogoMark className="h-9 w-9 rounded-full" />
              <span className="font-heading text-[15px] font-bold tracking-tight">
                Sthuthi Technologies
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Enterprise training and certification for the AI tools your
              engineers already have open.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-foreground/80 transition-colors hover:text-brand-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sthuthi Technologies</span>
          <span>Certifications are non-transferable and tied to the assessed individual</span>
        </div>
      </div>
    </footer>
  )
}

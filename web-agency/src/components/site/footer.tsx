import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { LogoMark } from "@/components/site/logo-mark"
import { REGISTRY } from "@/lib/registry-data"

const COLUMNS = [
  {
    title: "Registry",
    links: REGISTRY.slice(0, 4).map((entry) => ({
      label: `${entry.number} · ${entry.name}`,
      to: `/work/${entry.slug}`,
    })),
  },
  {
    title: "Studio",
    links: [
      { label: "Services", to: "/services" },
      { label: "All work", to: "/work" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", to: "/legal/privacy-policy" },
      { label: "Terms of service", to: "/legal/terms-of-service" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 rounded-full" />
              <span className="font-heading text-[15px] font-bold tracking-tight">
                Sthuthi<span className="text-brand-orange">Web</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              The engineering studio behind Sthuthi's own client work — agentic
              products, integrations, and design systems.
            </p>
            <a
              href="https://sthuthi-tech.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-brand-orange"
            >
              Part of Sthuthi Technologies
              <ArrowUpRight weight="bold" className="size-3" />
            </a>
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
          <span>© {new Date().getFullYear()} Sthuthi Web</span>
          <span>Registry entries reflect live, independently owned products</span>
        </div>
      </div>
    </footer>
  )
}

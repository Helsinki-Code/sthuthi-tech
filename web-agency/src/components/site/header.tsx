import { useState } from "react"
import { Link } from "react-router-dom"
import { List, X } from "@phosphor-icons/react"
import { LogoMark } from "@/components/site/logo-mark"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const NAV_ITEMS = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <LogoMark className="h-8 w-8 rounded-full" />
          <span className="font-heading text-[15px] font-bold tracking-tight">
            Sthuthi
            <span className="ml-1 text-brand-orange">Web</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            nativeButton={false}
            onClick={() => trackEvent("cta_click", { location: "header" })}
            render={<Link to="/contact">Open a new entry</Link>}
          />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-8 items-center justify-center border border-border lg:hidden"
          >
            {open ? <X weight="bold" className="size-4" /> : <List weight="bold" className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.12em] text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  setOpen(false)
                  trackEvent("cta_click", { location: "header_mobile" })
                }}
                className="font-mono text-xs uppercase tracking-[0.12em] text-brand-orange"
              >
                Open a new entry
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { List, X } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { LogoMark } from "@/components/site/logo-mark"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { to: "/certifications", label: "Certification tracks" },
  { to: "/custom-certification", label: "Custom programs" },
  { to: "/clients", label: "Clients" },
  { to: "/about", label: "About" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/95",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <LogoMark className="h-9 w-9 rounded-full" />
          <span className="font-heading text-[15px] font-bold tracking-tight">
            Sthuthi
            <span className="ml-1 hidden text-muted-foreground sm:inline">
              Technologies
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            render={<Link to="/contact">Book a program review</Link>}
          />
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X weight="bold" /> : <List weight="bold" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-brand-orange"
              >
                Book a program review
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

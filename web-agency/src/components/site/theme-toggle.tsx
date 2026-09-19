import { Moon, Sun } from "@phosphor-icons/react"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-8 shrink-0 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
    >
      {theme === "dark" ? <Sun weight="bold" className="size-4" /> : <Moon weight="bold" className="size-4" />}
    </button>
  )
}

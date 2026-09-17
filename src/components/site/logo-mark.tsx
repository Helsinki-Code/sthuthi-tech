import { cn } from "@/lib/utils"

/**
 * The mark is fixed-color art (charcoal + orange on transparent) with no
 * dark-mode variant, so it always sits on its own small paper chip rather
 * than directly on the page background — legible in both themes.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-[#f5f3ee] p-[3px] ring-1 ring-black/5",
        className
      )}
    >
      <img src="/brand/logo-mark-round.png" alt="" aria-hidden="true" className="h-full w-full" />
    </span>
  )
}

import { useState } from "react"
import { cn } from "@/lib/utils"

interface LogoTileProps {
  src: string
  alt: string
  fallback?: string
  className?: string
  imgClassName?: string
}

/**
 * Tool and client logos ship with their own baked-in background (white,
 * black, or transparent) rather than a uniform cutout. Rather than fighting
 * that, each one sits in its own bordered tile — like a badge — so mixed
 * backgrounds read as a consistent "spec sheet" instead of clashing.
 */
export function LogoTile({ src, alt, fallback, className, imgClassName }: LogoTileProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={cn(
          "flex items-center justify-center border border-border bg-secondary/40 px-3 font-heading text-sm font-bold text-foreground/70",
          className
        )}
      >
        {fallback ?? alt}
      </span>
    )
  }

  return (
    <span className={cn("flex items-center justify-center overflow-hidden border border-border bg-white", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("h-full w-full object-contain", imgClassName)}
        onError={() => setFailed(true)}
      />
    </span>
  )
}

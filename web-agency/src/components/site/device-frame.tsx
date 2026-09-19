import { cn } from "@/lib/utils"

interface DeviceFrameProps {
  src: string
  alt: string
  domain: string
  capturedOn: string
  className?: string
}

/**
 * A "captured, not live" preview — framed like a spec-sheet exhibit (a URL
 * label + capture date) rather than a glossy device mockup, matching the
 * credentialing-body "verified as of this date" language the parent brand
 * already uses. Deliberately not a live iframe: several registry entries
 * are third-party products that may block framing, and a live embed would
 * load a second site's full JS/fonts on every visit.
 */
export function DeviceFrame({ src, alt, domain, capturedOn, className }: DeviceFrameProps) {
  return (
    <figure className={cn("border border-border bg-card", className)}>
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="size-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
          {domain}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
      <figcaption className="border-t border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
        Captured {capturedOn} — independently owned, live product
      </figcaption>
    </figure>
  )
}

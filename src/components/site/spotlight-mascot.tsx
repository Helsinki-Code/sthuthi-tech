import { cn } from "@/lib/utils"

interface SpotlightMascotProps {
  src: string
  alt: string
  label: string
  className?: string
  imageClassName?: string
}

/**
 * The guide illustrations render on a near-black studio backdrop. Rather than
 * fighting that, every placement sits inside the same dark "verification
 * window" panel — a recurring frame instead of a cutout floating on white.
 */
export function SpotlightMascot({
  src,
  alt,
  label,
  className,
  imageClassName,
}: SpotlightMascotProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-brand-navy ring-1 ring-[var(--brand-navy-border)]",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(var(--brand-navy-line) 1px, transparent 1px), linear-gradient(90deg, var(--brand-navy-line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute left-0 top-0 h-4 w-7 bg-brand-orange"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "relative z-10 h-full w-full object-cover object-top",
          imageClassName
        )}
      />
      <div className="relative z-10 flex items-center justify-between border-t border-[var(--brand-navy-border)] bg-brand-navy px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-navy-foreground/65">
          {label}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
      </div>
    </div>
  )
}

import { useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** max rotation in degrees */
  strength?: number
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

export function TiltCard({ children, className, strength = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * strength * 2
    const rotateX = (0.5 - py) * strength * 2
    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      "--glare-x": `${px * 100}%`,
      "--glare-y": `${py * 100}%`,
    } as React.CSSProperties)
  }

  function handleLeave() {
    setStyle({
      transform:
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    })
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn("[transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform", className)}
      style={style}
    >
      {children}
    </div>
  )
}

import type { ReactNode } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(!visible && "opacity-0", className)}
      style={visible ? { animation: `rise 0.7s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms both` } : undefined}
    >
      {children}
    </div>
  )
}

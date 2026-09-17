import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface FlipWordsProps {
  words: string[]
  className?: string
  intervalMs?: number
}

export function FlipWords({ words, className, intervalMs = 2200 }: FlipWordsProps) {
  const [index, setIndex] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (reduced || words.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [words.length, intervalMs, reduced])

  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "")

  return (
    <span
      className={cn(
        "relative inline-grid align-bottom [perspective:800px]",
        className
      )}
      aria-live="polite"
    >
      {/* invisible sizer keeps layout width stable to the longest word */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {longest}
      </span>
      <span
        key={reduced ? "static" : index}
        className={cn(
          "col-start-1 row-start-1 text-[var(--brand-orange)]",
          !reduced && "animate-flip-word"
        )}
      >
        {words[index]}
      </span>
    </span>
  )
}

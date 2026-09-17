import { useState } from "react"

interface ClientLogoProps {
  name: string
  file: string
}

/**
 * Real logo files for ShelVey AI, Amro Agentic AI and The Payzon still need
 * to be dropped in /public/clients/ (Kenect AI's is already wired from its
 * published logo). Until a file exists at that path, this renders a plain
 * wordmark instead of a broken image — swap the file in and it upgrades
 * automatically, no code change needed.
 */
export function ClientLogo({ name, file }: ClientLogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="font-heading text-base font-bold tracking-tight text-foreground/70">
        {name}
      </span>
    )
  }

  return (
    <img
      src={`/clients/${file}`}
      alt={name}
      className="h-7 w-auto object-contain grayscale transition-all duration-200 hover:grayscale-0 sm:h-8"
      onError={() => setFailed(true)}
    />
  )
}

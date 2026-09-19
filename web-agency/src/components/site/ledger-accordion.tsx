import { Accordion } from "@base-ui/react/accordion"
import { Link } from "react-router-dom"
import { Plus } from "@phosphor-icons/react"
import { REGISTRY, type ServiceRow } from "@/lib/registry-data"

export function LedgerAccordion({ services }: { services: ServiceRow[] }) {
  return (
    <Accordion.Root className="border-t border-border" defaultValue={[services[0]?.number]}>
      {services.map((service) => (
        <Accordion.Item key={service.number} value={service.number} className="border-b border-border">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center gap-5 py-6 text-left">
              <span className="w-8 shrink-0 font-mono text-sm text-brand-orange">{service.number}</span>
              <span className="flex-1 font-heading text-lg font-bold tracking-tight sm:text-xl">
                {service.title}
              </span>
              <Plus
                weight="bold"
                className="size-4 shrink-0 text-muted-foreground transition-transform group-data-[panel-open]:rotate-45"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="overflow-hidden text-sm data-[ending-style]:h-0 data-[starting-style]:h-0">
            <div className="flex flex-col gap-4 pb-6 pl-12">
              <p className="max-w-xl leading-relaxed text-muted-foreground">{service.description}</p>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                <span>Evidence:</span>
                {service.evidence.map((slug, i) => {
                  const entry = REGISTRY.find((r) => r.slug === slug)
                  if (!entry) return null
                  return (
                    <span key={slug} className="flex items-center gap-2">
                      <Link to={`/work/${slug}`} className="text-brand-orange hover:underline">
                        {entry.number} — {entry.name}
                      </Link>
                      {i < service.evidence.length - 1 && <span className="text-border">·</span>}
                    </span>
                  )
                })}
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

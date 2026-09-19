import { Link } from "react-router-dom"
import { Seo } from "@/lib/seo"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <>
      <Seo title="404" description="This entry doesn't exist in the registry." path="/404" noIndex />
      <section className="flex min-h-[60vh] flex-col items-start justify-center px-5 py-24 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <span className="font-mono text-sm text-brand-orange">404</span>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            No entry at this address.
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            Whatever you were looking for isn't in the registry. Start from the top.
          </p>
          <Button className="mt-8" nativeButton={false} render={<Link to="/">Back to entry 000</Link>} />
        </div>
      </section>
    </>
  )
}

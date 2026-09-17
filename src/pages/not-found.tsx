import { Link } from "react-router-dom"
import { Seo } from "@/lib/seo"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="This page doesn't exist on Sthuthi Technologies."
        path="/404"
        noIndex
      />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center">
        <span className="font-mono text-sm text-brand-orange">404</span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          No record at this credential ID.
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          The page you're looking for was moved, renamed, or never existed.
        </p>
        <Button
          size="lg"
          className="mt-8 h-11 bg-brand-orange px-5 text-[13px] font-semibold text-brand-orange-ink hover:bg-brand-orange/90"
          nativeButton={false}
          render={<Link to="/">Back to the homepage</Link>}
        />
      </section>
    </>
  )
}

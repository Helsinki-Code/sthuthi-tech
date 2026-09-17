import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Reveal } from "@/components/site/reveal"
import { BLOG_POSTS, formatPostDate } from "@/lib/blog-data"

export function LatestFromBlog() {
  const [latest] = BLOG_POSTS
  if (!latest) return null

  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Field notes
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Latest from the blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
          >
            All posts
            <ArrowUpRight weight="bold" className="size-3.5" />
          </Link>
        </Reveal>

        <Reveal delayMs={80} className="mt-8">
          <Link
            to={`/blog/${latest.slug}`}
            className="group block border border-border bg-card p-6 transition-colors hover:border-brand-orange sm:p-8"
          >
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              <span className="text-brand-orange">{latest.pillar}</span>
              <span aria-hidden="true">·</span>
              <span>{formatPostDate(latest.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span>{latest.readingMinutes} min read</span>
            </div>
            <h3 className="mt-3 flex items-start justify-between gap-4 font-heading text-xl font-bold tracking-tight sm:text-2xl">
              <span>{latest.title}</span>
              <ArrowUpRight
                weight="bold"
                className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-orange"
              />
            </h3>
            <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
              {latest.description}
            </p>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

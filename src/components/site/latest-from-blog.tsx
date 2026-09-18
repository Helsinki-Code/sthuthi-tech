import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Reveal } from "@/components/site/reveal"
import { BlogImage } from "@/components/site/blog-image"
import { BLOG_POSTS, formatPostDate } from "@/lib/blog-data"

export function LatestFromBlog() {
  const [featured, ...rest] = BLOG_POSTS
  const sidebarPosts = rest.slice(0, 3)
  if (!featured) return null

  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Field notes
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              From the blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
          >
            All {BLOG_POSTS.length} posts
            <ArrowUpRight weight="bold" className="size-3.5" />
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delayMs={80}>
            <Link
              to={`/blog/${featured.slug}`}
              className="group relative block h-full overflow-hidden border border-border bg-brand-navy"
            >
              <BlogImage
                imageKey={`${featured.slug}/featured`}
                featured
                className="!my-0 aspect-[16/10] border-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100 sm:aspect-auto sm:h-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange">
                  <span>{featured.pillar}</span>
                  <span aria-hidden="true" className="text-brand-navy-foreground/50">·</span>
                  <span className="text-brand-navy-foreground/70">{formatPostDate(featured.publishedAt)}</span>
                </div>
                <h3 className="mt-3 max-w-lg font-heading text-xl font-extrabold tracking-tight text-brand-navy-foreground sm:text-2xl">
                  {featured.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
                  Read the piece
                  <ArrowUpRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delayMs={140} className="flex flex-col divide-y divide-border border border-border">
            {sidebarPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-1 items-center gap-4 p-4 transition-colors hover:bg-secondary/40"
              >
                <BlogImage
                  imageKey={`${post.slug}/featured`}
                  className="!my-0 aspect-square w-16 shrink-0"
                />
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-brand-orange">
                    {post.pillar}
                  </span>
                  <p className="mt-1 line-clamp-2 font-heading text-[13px] font-bold leading-snug tracking-tight transition-colors group-hover:text-brand-orange">
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { BlogImage } from "@/components/site/blog-image"
import { BLOG_POSTS, formatPostDate } from "@/lib/blog-data"

export function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <Seo
        title="Blog"
        description="Notes on AI-tool competency, not AI hype — from Sthuthi Technologies."
        path="/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          url: `${SITE_URL}/blog`,
          publisher: { "@type": "Organization", name: "Sthuthi Technologies" },
        }}
      />
      <PageHeader
        kicker="Field notes"
        title="Notes on AI-tool competency, not AI hype."
        description="What the data actually says about AI-assisted engineering, written for the people who have to answer for it."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {featured && (
            <Reveal>
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid gap-6 border border-border bg-card p-3 transition-colors hover:border-brand-orange sm:grid-cols-[1.1fr_1fr] sm:gap-8 sm:p-4"
              >
                <BlogImage imageKey={`${featured.slug}/featured`} featured className="!my-0 sm:h-full" />
                <div className="flex flex-col justify-center py-2 pr-2 sm:py-4">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="text-brand-orange">{featured.pillar}</span>
                    <span aria-hidden="true">·</span>
                    <span>{formatPostDate(featured.publishedAt)}</span>
                  </div>
                  <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
                    Read the piece
                    <ArrowUpRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delayMs={i * 50}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col border border-border bg-card p-3 transition-colors hover:border-brand-orange"
                >
                  <BlogImage imageKey={`${post.slug}/featured`} className="!my-0" />
                  <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      <span className="text-brand-orange">{post.pillar}</span>
                    </div>
                    <h3 className="mt-2 flex items-start justify-between gap-2 font-heading text-[16px] font-bold leading-snug tracking-tight">
                      <span>{post.title}</span>
                      <ArrowUpRight
                        weight="bold"
                        className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-orange"
                      />
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      {formatPostDate(post.publishedAt)} · {post.readingMinutes} min read
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

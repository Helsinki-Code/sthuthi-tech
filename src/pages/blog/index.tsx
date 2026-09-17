import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { BLOG_POSTS, formatPostDate } from "@/lib/blog-data"

export function BlogIndexPage() {
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
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delayMs={i * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 py-8"
                >
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="text-brand-orange">{post.pillar}</span>
                    <span aria-hidden="true">·</span>
                    <span>{formatPostDate(post.publishedAt)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                  <h2 className="flex items-start justify-between gap-4 font-heading text-xl font-bold tracking-tight sm:text-2xl">
                    <span>{post.title}</span>
                    <ArrowUpRight
                      weight="bold"
                      className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-orange"
                    />
                  </h2>
                  <p className="max-w-xl text-[14px] leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

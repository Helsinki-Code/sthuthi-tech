import type { ComponentType } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { ClosingCta } from "@/components/site/closing-cta"
import { Reveal } from "@/components/site/reveal"
import { BLOG_POSTS, formatPostDate } from "@/lib/blog-data"
import { VibeCodingTaxPost } from "@/pages/blog/posts/vibe-coding-tax"

const POST_COMPONENTS: Record<string, ComponentType> = {
  "vibe-coding-tax": VibeCodingTaxPost,
}

export function BlogPostPage() {
  const { slug } = useParams()
  const meta = BLOG_POSTS.find((p) => p.slug === slug)
  const Content = slug ? POST_COMPONENTS[slug] : undefined

  if (!meta || !Content) return <Navigate to="/blog" replace />

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={`/blog/${meta.slug}`}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: meta.title,
            description: meta.description,
            datePublished: meta.publishedAt,
            author: { "@type": "Organization", name: "Sthuthi Technologies" },
            publisher: { "@type": "Organization", name: "Sthuthi Technologies" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: meta.title, item: `${SITE_URL}/blog/${meta.slug}` },
            ],
          },
        ]}
      />

      <PageHeader kicker={meta.pillar} title={meta.title} description={meta.description}>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {formatPostDate(meta.publishedAt)} · {meta.readingMinutes} min read
        </p>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal className="prose-content text-[15px] leading-relaxed text-muted-foreground">
            <Content />
          </Reveal>
        </div>
      </section>

      <ClosingCta
        title="Want your team's AI-tool usage actually checked?"
        description="See the published certification tracks, or tell us about the tool you're worried about."
        buttonLabel="See the certification tracks"
        to="/certifications"
      />
    </>
  )
}

import type { ComponentType } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Seo, SITE_URL } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { ClosingCta } from "@/components/site/closing-cta"
import { Reveal } from "@/components/site/reveal"
import { BLOG_POSTS, formatPostDate } from "@/lib/blog-data"
import { VibeCodingTaxPost } from "@/pages/blog/posts/vibe-coding-tax"
import { ClaudeCodeCertificationPost } from "@/pages/blog/posts/claude-code-certification"
import { MicrosoftCopilotCertificationPost } from "@/pages/blog/posts/microsoft-copilot-certification"
import { UsageVsProficiencyPost } from "@/pages/blog/posts/usage-vs-proficiency"
import { AiCodeVulnerabilitiesPost } from "@/pages/blog/posts/ai-code-vulnerabilities"
import { BusinessCaseForCertificationPost } from "@/pages/blog/posts/business-case-for-certification"
import { SelfAssessmentAccuracyPost } from "@/pages/blog/posts/self-assessment-accuracy"
import { CustomCertificationCostPost } from "@/pages/blog/posts/custom-certification-cost"
import { CodexCertificationPost } from "@/pages/blog/posts/codex-certification"
import { CursorCertificationPost } from "@/pages/blog/posts/cursor-certification"
import { GeminiCertificationPost } from "@/pages/blog/posts/gemini-certification"

const POST_COMPONENTS: Record<string, ComponentType> = {
  "vibe-coding-tax": VibeCodingTaxPost,
  "claude-code-certification": ClaudeCodeCertificationPost,
  "microsoft-copilot-certification": MicrosoftCopilotCertificationPost,
  "usage-vs-proficiency": UsageVsProficiencyPost,
  "ai-code-vulnerabilities": AiCodeVulnerabilitiesPost,
  "business-case-for-certification": BusinessCaseForCertificationPost,
  "codex-certification": CodexCertificationPost,
  "cursor-certification": CursorCertificationPost,
  "gemini-certification": GeminiCertificationPost,
  "self-assessment-accuracy": SelfAssessmentAccuracyPost,
  "custom-certification-cost": CustomCertificationCostPost,
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
          ...(meta.faq
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: meta.faq.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: { "@type": "Answer", text: item.answer },
                  })),
                },
              ]
            : []),
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

          {meta.faq && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="font-heading text-lg font-bold tracking-tight text-foreground">
                Frequently asked questions
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {meta.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-heading text-[15px] font-bold text-foreground">
                      {item.question}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
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

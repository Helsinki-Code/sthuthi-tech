# Content Strategy

**Document version:** v3
**Last updated:** 2026-09-18

Built from `.agents/product-marketing.md` context plus market/competitive
research (see Sources). The site's `/blog` infrastructure exists at
`src/pages/blog/` — adding a post means writing a component in
`src/pages/blog/posts/`, registering it in `POST_COMPONENTS`
(`src/pages/blog/post.tsx`), and adding one entry to `BLOG_POSTS`
(`src/lib/blog-data.ts`).

## Key research findings that shaped this

- **Correction (v2): "Copilot" in Sthuthi's track lineup means Microsoft
  Copilot, not GitHub Copilot.** Site-wide naming (site-data.ts, sitemap,
  meta descriptions) has been corrected accordingly (slug is now
  `microsoft-copilot`). GitHub does have its own Copilot exam (GH-300,
  weighted 31% toward plan-tier trivia) — that's real, but it's a
  different product and no longer the relevant competitive reference for
  this track. The Microsoft Copilot research instead found: Microsoft's
  official Copilot certifications (AB-900 admin exam, Applied Skills labs)
  are openly available with no partner gate, unlike Anthropic's — but
  AB-900 tests IT administration and Applied Skills tests generic office
  scenarios, neither of which checks a specific employee's actual work.
  See the published post for full citations.
- **Correction (v2): Anthropic does have an official Claude Code–relevant
  exam** — Claude Certified Developer – Foundations (CCDV-F), part of the
  four-exam Claude Certification Program launched March 2026. The original
  v1 assumption ("no official Claude Code exam exists — a gap to own") was
  wrong and has been corrected in the published post. The real angle,
  verified via Pearson VUE and Anthropic's own site, is sharper than the
  original: CCDV-F is gated to Claude Partner Network member
  organizations (not available to the general public), and it's scoped
  broadly across the whole Claude platform rather than specifically at
  "can this engineer use Claude Code safely on our repo." Anthropic's free
  Skilljar courses ("Claude Code 101" etc.) are public but are self-paced
  training, not a proctored assessment. See the published post for full
  citations.
- The site's core "usage isn't proficiency" argument is backed by citable
  2026 numbers: Workera found only 13% of enterprise employees have the
  critical skills to work with AI agents; separately, only 11% of
  employees can accurately self-assess their own AI skill level.
- "Vibe coding" technical-debt data is real, recent, and highly citable:
  technical debt up 30–41% post-AI-adoption, code duplication up ~48%,
  refactoring activity down ~60%; Veracode found ~45% of AI-generated code
  samples introduce an OWASP Top 10 vulnerability.

## Content Pillars

1. **Usage Isn't Proficiency** (core, product-led, searchable + shareable) —
   the direct extension of the site's main differentiator.
2. **The Vibe Coding Tax** (shareable, trend-led) — 2026's hottest,
   most citable enterprise-AI narrative; doesn't sell certification
   directly, earns attention and hands off to Pillar 1.
3. **Tool-Specific Playbooks** (searchable, hub-and-spoke off the existing
   `/certifications/[tool]` pages) — long-tail "[persona] + [tool] +
   [use-case]" search terms, directly answers the GH-300 competitive
   question.
4. **Building the Business Case** (decision-stage, audience-led toward the
   economic buyer) — cost of not certifying, custom-track scoping,
   compliance angle (Claude Code SOC 2/HIPAA-ready Enterprise tier;
   Copilot Business IP indemnity + SOC 2).

## Priority Topics

| # | Title | Pillar | Type | Buyer stage | Status |
|---|-------|--------|------|-------------|--------|
| 1 | The vibe coding tax: what unmeasured AI usage is actually costing engineering teams | 2 | Shareable | Awareness | **Published** — `/blog/vibe-coding-tax` |
| 2 | Is there a Claude Code certification? Here's what actually exists | 3 | Searchable | Consideration | **Published** — `/blog/claude-code-certification` |
| 3 | Is there a Microsoft Copilot certification? Yes — here's what it actually checks | 3 | Searchable | Consideration | **Published** — `/blog/microsoft-copilot-certification` |
| 4 | Usage isn't proficiency: why your AI adoption dashboard doesn't prove anyone can use the tool | 1 | Both | Awareness | Not started |
| 5 | 45% of AI-generated code has an OWASP vulnerability — is anyone checking yours? | 2 | Shareable | Awareness | Not started |
| 6 | How to build the business case for AI-tool certification | 4 | Searchable | Decision | Not started |
| 7 | Why only 11% of employees can accurately self-assess their AI skills | 1 | Shareable | Awareness | Not started |
| 8 | What a custom AI certification track costs to build, and when it's worth it | 4 | Searchable | Decision | Not started |

## Topic Cluster Map

```
/certifications (existing hub)
├── /certifications/claude-code → blog #2 (Is there a Claude Code certification?)
├── /certifications/microsoft-copilot → blog #3 (Microsoft Copilot certification)
└── /certifications/cursor, /gemini, /codex → tool-specific playbooks (later wave)

/blog
├── Pillar 1 — Usage Isn't Proficiency
│    ├── #4 "Usage isn't proficiency..." → links to /certifications
│    └── #7 "Why only 11% can self-assess..." → links to #4
├── Pillar 2 — The Vibe Coding Tax
│    ├── #1 "The vibe coding tax..." [PUBLISHED] → links to /certifications
│    └── #5 "45% of AI-generated code..." → links to #6
└── Pillar 4 — Building the Business Case
     ├── #6 "How to build the business case..." → links to /contact
     └── #8 "What a custom track costs..." → links to /custom-certification
```

## Cadence

No known writer/budget commitment yet, so sized conservatively: **2
posts/month for the first quarter**, pairing one shareable post (Pillar 2)
with one searchable post (Pillar 3) per month. Reassess once GA4 shows
which posts actually drive `/contact` traffic (`cta_click` and
`contact_form_submit` events are already tracked) — that matters more
than raw pageviews.

## What's missing (flag honestly, don't fabricate)

No real customer research yet — sales call transcripts, support tickets,
exact prospect language. Everything above is grounded in market/
competitive research, not actual prospects' words. Once real scoping-call
transcripts exist, feed them back into this doc; they're the highest-
value input and will likely sharpen titles or surface a pillar not
guessed at here.

## Sources

- [GitHub Copilot Certification Guide (2026)](https://www.learnzapp.com/blog/github-copilot-certification-guide/)
- [GitHub Copilot Certification (GH-300): Exam Guide (2026)](https://ctaio.dev/en/ai-certifications/github-copilot-certification/)
- [GitHub Copilot vs Claude Code: which one actually fits how you work?](https://daily.dev/blog/github-copilot-vs-claude-code-fits-how-you-work/)
- [Vibe Coding Technical Debt: Enterprise Risk | Exadel](https://exadel.com/news/vibe-coding-technical-debt)
- [Vibe Coding Trends 2026: Adoption, Productivity, and Code Quality Data](https://keyholesoftware.com/vibe-coding-trends-2026/)
- [AI Technical Debt: How Vibe Coding Increases TCO](https://www.baytechconsulting.com/blog/ai-technical-debt-how-vibe-coding-increases-tco-and-how-to-fix-it)
- [Only 13% of Enterprise Employees Possess The Critical Skills To Understand and Work With AI Agents, Workera Report Finds](https://www.prnewswire.com/news-releases/only-13-of-enterprise-employees-possess-the-critical-skills-to-understand-and-work-with-ai-agents-workera-report-finds-302777709.html)
- [How Companies Can Measure AI Literacy and Workforce Skills](https://www.weareamberjack.com/how-to-measure-ai-literacy/)
- [Stop Selling Courses. Start Selling Outcomes (2026)](https://www.aicerts.ai/blog/stop-selling-courses-start-selling-outcomes-the-enterprise-ai-training-approach-that-works-in-2026/)
- [Best Enterprise AI Training Companies in 2026: Top 8 Ranked](https://www.correlation-one.com/blog/best-enterprise-ai-training-companies-in-2026-top-8-ranked)
- [Anthropic: Anthropic invests $100 million into the Claude Partner Network](https://www.anthropic.com/news/claude-partner-network)
- [Pearson VUE: Claude Certification Program by Anthropic](https://www.pearsonvue.com/us/en/anthropic.html)
- [Anthropic Courses (Skilljar)](https://anthropic.skilljar.com/)
- [freeCodeCamp: Claude Certified Architect – Foundations exam guide](https://www.freecodecamp.org/news/claude-certified-architect-foundations-prep-for-anthropic-s-new-certification-exam/)
- [Microsoft Learn: Microsoft 365 Certified – Copilot and Agent Administration Fundamentals (AB-900)](https://learn.microsoft.com/en-us/credentials/certifications/copilot-and-agent-administration-fundamentals/)
- [Microsoft Learn: Applied Skills – Streamline business workflows with AI chat](https://learn.microsoft.com/en-us/credentials/applied-skills/streamline-business-workflows-with-ai-chat/)
- [Microsoft Learn: GitHub Copilot Certifications](https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/) — the GitHub Copilot exam (GH-300); kept for reference only, not used in the Microsoft Copilot post since it's a different product.

## Changelog

*Newest first. One line per revision: what changed and why.*

- v3 (2026-09-18) — User correction: the site's "Copilot" track is
  Microsoft Copilot, not GitHub Copilot. Renamed the slug and all
  references site-wide (`site-data.ts`, sitemap, meta descriptions).
  Rewrote topic #3 around verified Microsoft Copilot certification
  research (AB-900, Applied Skills) instead of the GH-300 comparison, and
  published it.
- v2 (2026-09-18) — Wrote and published topic #2. Fresh research
  (Pearson VUE + Anthropic's own site) found the v1 premise was stale:
  Anthropic does have an official Claude Code–relevant exam (CCDV-F), just
  gated to Claude Partner Network members and scoped broadly. Corrected
  the pillar note and the post itself accordingly rather than publishing
  the outdated "no certification exists" claim.
- v1 (2026-09-18) — Initial strategy, researched and written while
  building the site's `/blog` infrastructure. Topic #1 (the vibe coding
  tax) written and published the same day as a working example.

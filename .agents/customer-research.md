# Customer Research — Sthuthi Technologies

**Document version:** v1
**Last updated:** 2026-09-19
**Mode:** Proxy-source research (Mode 2). Sthuthi has no first-party customer interviews, transcripts, support tickets, or reviews yet (confirmed against `.agents/product-marketing.md`, Customer Language section). Every theme and persona below is sourced from *external* market signal — competitor/adjacent-product reviews, developer and HR communities, industry surveys, and market moves by adjacent players (LinkedIn) — not from Sthuthi's own customers. Treat personas as **provisional** until replaced with real scoping-call and cohort feedback.

---

## Research Goal

Combined pass across all three original goals:
1. Build provisional buyer personas for the three ICPs named in the product-marketing doc
2. Surface language/vocabulary this audience already uses, for copy and content
3. Competitive intel — what buyers say about vendor certifications and generic AI-literacy training

---

## Top Themes (ranked by frequency × intensity)

### Theme 1: The "verification gap" on AI-generated code is real, measured, and getting worse
**Summary:** Developers don't trust AI-generated code, but a large share ship it without reviewing it anyway — and the metrics engineering leaders use to track AI usage (acceptance rate, seat activity) don't detect this at all.
**Confidence:** HIGH — appears consistently across 4 independent industry surveys (Sonar, Cloudsmith, Clutch, a 211M-line code-quality study) plus direct engineering-leader commentary, published across Aug 2025–Apr 2026.
**Representative data points:**
- "96% of developers believe AI-generated code isn't functionally correct, yet only 48% say they always check code generated with AI assistance before committing it." — Sonar State of Code Developer Survey, via [The Register](https://www.theregister.com/2026/01/09/devs_ai_code/) / [IT Pro](https://www.itpro.com/software/development/software-developers-not-checking-ai-generated-code-verification-debt)
- "38% of developers say reviewing AI-generated code requires more effort than reviewing code written by their human colleagues." — Sonar, via IT Pro
- "59% of developers say they use AI-generated code they do not fully understand." — Clutch survey, 800 software professionals, June 2025, via [Clutch.co](https://clutch.co/resources/devs-use-ai-generated-code-they-dont-understand)
- Sonar's CEO: *"While AI has made code generation nearly effortless, it has created a critical trust gap between output and deployment."* — coined as **"verification debt."**
- A 211-million-line codebase analysis found duplicated code blocks grew 4–8× in AI-heavy repos (2020–2024), refactoring rates collapsed 60%, and code churn rose from 3.1% to 5.7%. — cited in [TianPan.co, "Accept Rate Is a Vanity Metric"](https://tianpan.co/blog/2026/04/23/accept-rate-vanity-metric-copilot-roi)
- "Acceptance rate doesn't capture whether accepted code passed review, passed tests, or made it to production... it is a measurement of Copilot's output, not its impact." — same source
**Implications:** This is the single strongest external validation of Sthuthi's core thesis (and of the existing "vibe coding tax" / "usage vs. proficiency" blog posts). Safe to cite directly in content and sales conversations — it's independently sourced, recent, and from a security/code-quality vendor (Sonar) with no relationship to Sthuthi, which makes it more credible than self-published stats.

### Theme 2: "Shadow AI" governance risk is now a named, budgeted enterprise concern
**Summary:** Employees using AI tools outside IT/security approval is treated as a first-class 2026 compliance risk, not a hypothetical — driven by the EU AI Act and a real pattern of proprietary-code and PII leakage incidents.
**Confidence:** HIGH — appears across 6+ independent security/compliance vendors (Vectra, Wiz, Palo Alto Networks, Adaptive Security, Themio, SIMO) publishing dedicated "Shadow AI 2026" content, all pointing to the same underlying dynamic.
**Representative data points:**
- "~60% of knowledge workers use unauthorized AI tools in a professional context; nearly 47% of generative AI users access tools through personal accounts, completely bypassing enterprise controls." — aggregated from [Vectra](https://www.vectra.ai/topics/shadow-ai) / [Wiz](https://www.wiz.io/academy/ai-security/shadow-ai) / [Palo Alto Networks](https://www.paloaltonetworks.com/cyberpedia/what-is-shadow-ai)
- "Only 37% of organizations have AI governance policies." — same cluster
- "The EU AI Act's governance requirements increasingly require organizations to demonstrate they know what AI tools are processing what categories of data — a requirement that's impossible to satisfy when a meaningful share of AI usage is invisible to IT and compliance teams."
- Multiple 2024–2025 incidents cited involving employees pasting proprietary source code, unreleased financials, or customer PII into consumer AI tools.
**Implications:** This is the "Push" force already named in the product-marketing doc's Switching Dynamics, now backed by external sourcing beyond the IBM breach-cost stat already used in the business-case blog post. Useful for the engineering-lead and compliance-adjacent persona: the trigger isn't "we want training," it's "we can no longer certify to auditors/clients that we know who's using what."

### Theme 3: Corporate AI training has a trust and fatigue problem — but the fatigue is about volume and vagueness, not rigor
**Summary:** Employees are exhausted by mandatory AI training, but the complaint is about being over-trained with unclear payoff, not about assessments being too rigorous. This is an important nuance: it does not contradict Sthuthi's harder-assessment positioning — it supports "training that's actually worth the time it costs," which lands differently than "more AI training."
**Confidence:** HIGH — single large-sample source (LinkedIn survey) but corroborated by independent reporting across 5 outlets, plus the completion-certificate credibility problem is a separate, well-established L&D industry topic.
**Representative data points:**
- "Over half of professionals (51%) are so annoyed by AI trainings they say it feels like a second job." — LinkedIn survey, via [Fortune](https://fortune.com/2025/08/28/ai-training-reskilling-annoying-feels-like-second-job-linkedin) / [Allwork.space](https://allwork.space/2025/08/workers-bristle-as-ai-trainings-feel-like-a-second-job-linkedin-finds/)
- "A third (33%) admit they feel embarrassed by how little they understand [AI], and 35% feel nervous talking about AI at work for fear of sounding uninformed." — same survey
- "Employees cited dense training modules, unrealistic deadlines, and a lack of clarity about practical benefits as key sources of dissatisfaction."
- Separately, on the credential-quality side: "Neither [a participation nor completion certificate] automatically proves skill... a certificate of attendance or participation is not a credential because it does not provide proof of learning, or knowledge assessment, prior to being issued." — [Sertifier / SendCertificates industry content](https://sendcertificates.com/blog/participation-vs-completion-certificate/), reflecting a broader, pre-existing L&D consensus, not an AI-specific complaint
**Implications:** For the L&D/People Ops persona, the pitch isn't "more training," it's "training that ends in something that actually counts, so you're not asking people to sit through another session that goes nowhere." Directly supports the existing anti-generic-AI-literacy positioning, but the copy angle should lead with *time-respecting and consequential*, not *rigorous and hard to pass* — the audience is fatigue-averse, and "harder" alone could read as more of the thing they're already burned out on.

### Theme 4: A major market player just built (a version of) Sthuthi's core mechanism — validation, not just competition
**Summary:** LinkedIn launched "Verified AI Skills" in January 2026, automatically validating a person's AI tool proficiency from real usage data (via partnerships with Lovable, Replit, Relay.app, Descript, and soon GitHub, Gamma, Zapier) instead of relying on self-reported resume claims.
**Confidence:** HIGH — direct product-launch reporting from 3+ outlets (Benzinga, Computerworld, Fortune), with a named executive quote.
**Representative data points:**
- LinkedIn's group product manager, Pat Whelan: *"Verifications are definitely a big part of our strategy… We're starting with AI skills because they're very in demand in the labor market."*
- Whelan again, on why: the company is betting "certification of AI skills directly from companies is more trustworthy than when users manually self-report their skills."
- "AI skills" is the single fastest-growing *and* most exaggerated skill on LinkedIn — members adding an AI skill rose 20x in twelve months, while separately, 45% of recent job seekers admit to exaggerating AI skills with tools, a third specifically lying about it on their resume.
- Hiring-manager side: 86% of U.S. hiring managers say AI makes it too easy to exaggerate resume skills; 80% say candidate resumes don't match real-world skills at least sometimes; 60% now want to test, discuss, or see proof of AI ability rather than take resume claims at face value.
**Implications — read this carefully, it's a two-edged finding:**
- **Validates the thesis at the highest level:** the single largest professional network in the world just spent engineering effort building "don't trust the resume claim, verify the real usage" — for individuals. That's Sthuthi's exact insight, applied at enterprise/team level instead.
- **Is not a like-for-like competitor:** LinkedIn verifies individual, ongoing tool usage across consumer/prosumer AI products (Lovable, Replit, Descript) for a public profile badge. Sthuthi issues an enterprise-commissioned, proctored, task-based credential tied to a specific team's actual work context, with a named human assessor. Different buyer (individual profile-builder vs. company commissioning a cohort), different mechanism (passive usage-tracking vs. proctored assessment), different artifact (a LinkedIn badge vs. a verifiable enterprise credential with a credential ID).
- **Real risk to watch, not to react to yet:** if LinkedIn or a tool vendor extends "verified usage" from individual profiles into an enterprise-facing "team certification" product, that would become a direct competitor. Worth a standing watch item, not a repositioning trigger today.
- **Immediate copy opportunity:** "resume claims about AI skills are now assumed false by default" is now an externally-quotable, named-source fact (LinkedIn's own data), stronger than asserting it as Sthuthi's own opinion.

### Theme 5: Existing vendor "certifications" reward exam prep, not job performance
**Summary:** Available secondary signal on the GitHub Copilot Certification (GH-300) supports the product-marketing doc's existing critique — that it's a knowledge exam, not a proctored, task-based assessment of real work.
**Confidence:** MEDIUM — thinner sourcing than the other themes (no first-party candidate reviews found; signal comes from prep-material marketing and salary-correlation claims rather than a large survey), but directionally consistent with the doc's existing position.
**Representative data points:**
- A GH-300 practice-exam app advertises a "94% first-attempt pass rate" as a selling point.
- Certification-prep marketing leads with salary correlation ("certified developers earn up to $203K annually," per Skillsoft) rather than job-task outcomes.
- The exam's own scope (per GitHub's public materials) covers responsible AI, plans & features, prompt engineering, testing with Copilot, privacy & exclusions — knowledge domains, not an in-repo task assessment.
**Implications:** Useful supporting evidence, not a headline stat — a 94% pass rate marketed as a *feature* by prep vendors is a good one-line contrast against Sthuthi's explicit "we don't optimise for pass rates" stance, but this is thinner sourcing (2 data points) and should be flagged as such if used publicly. Needs more sourcing before treating as high-confidence.

---

## Provisional Personas

*All three are proxy-sourced (Section: "When there are no reviews yet" in the customer-research skill). Replace with first-party data as real scoping calls and cohorts accumulate — see Research Gaps below.*

## Persona 1: The Engineering / Platform Lead — "Whoever has to sign off on the diff"

**Profile**
- Title range: Staff/Principal Engineer, Engineering Manager, Platform Lead, VP Engineering
- Company size: Team sizes where AI coding tools are already in daily use — from small agentic-AI product teams (10-30 people) to larger engineering orgs standardizing tool choice across departments
- Reports to: CTO or VP Eng
- Team size managed: Varies; the persona applies as soon as one person is accountable for what an AI-assisted team ships

**Primary Job to Be Done**
Be able to stand behind what the team ships when a meaningful share of it was AI-authored — without personally re-reviewing everything line by line forever.

**Trigger Events**
- A near-miss or actual incident traced to unreviewed AI-generated code (security flaw, broken test coverage, duplicated logic)
- Rolling out a new AI coding tool org-wide and needing a shared review standard instead of ad hoc per-engineer judgment
- A client, auditor, or compliance requirement asking "how do you know your team uses AI tools safely?" and having no good answer

**Top Pains**
1. "Verification debt" — the team doesn't trust AI output, but reviewing it properly costs more time than writing it fresh, so review gets skipped under deadline pressure (Sonar/IT Pro, Theme 1)
2. Usage dashboards (acceptance rate, seat activity) create a false sense of oversight — they show engagement, not whether the code was any good (Theme 1)
3. No consistent standard for what "good AI-assisted review discipline" looks like across a team — everyone's calibration is different

**Desired Outcomes**
- A defensible answer to "how do we know this person reviews AI output correctly" that isn't "I trust them"
- A repeatable onboarding standard for new hires joining an AI-tool-enabled codebase
- Fewer duplicated/unreviewed patterns creeping into the codebase over time

**Objections and Fears**
- Skepticism that a training program can actually simulate real review judgment rather than testing trivia about the tool
- Concern that a proctored assessment adds delivery friction the team can't absorb right now
- "We can just use the vendor's own certification" (already an anticipated objection in product-marketing.md)

**Alternatives They Consider**
- Doing nothing / trusting senior engineers' judgment informally
- The tool vendor's own course-completion badge (GitHub Copilot Certification, Microsoft Applied Skills)
- Generic internal code-review policy documents with no assessment attached

**Key Vocabulary**
- "Verification debt" / "verification gap"
- "Acceptance rate is a vanity metric"
- "Trust, but verify" (widely used framing in dev-focused content on this exact topic)
- "Diff review discipline" (already used in Sthuthi's own Claude Code track copy — corroborated externally)

**How to Reach Them**
- Channels: Hacker News, engineering-leadership newsletters/Substacks (the "Trust, But Verify" and "Accept Rate Is a Vanity Metric" pieces found in this research are exactly the content register this persona reads)
- Content they consume: data-driven engineering-practice essays, not generic "AI transformation" content
- Communities: r/ExperiencedDevs, r/devops (could not pull raw threads directly — Reddit access blocked in this research pass; treat as a gap, not a null result)

---

## Persona 2: The L&D / People Ops Lead — "Whoever has to justify the training budget line"

**Profile**
- Title range: Head of L&D, People Ops Lead, Head of Talent Development
- Company size: Mid-size to enterprise, anywhere with a formal training budget and a mandate to roll out AI tools company-wide
- Reports to: CHRO or COO

**Primary Job to Be Done**
Get the organization measurably better at using AI tools, without spending down goodwill on training that people resent and that produces nothing checkable afterward.

**Trigger Events**
- Leadership mandate to "get everyone AI-fluent" with no clear definition of what that means or how it's verified
- A prior AI-literacy rollout that got poor engagement or visible eye-rolling
- Needing a credential that means something specific for a hiring, promotion, or compliance conversation — not a training-completion badge that HR itself doesn't fully trust

**Top Pains**
1. Employee fatigue and skepticism toward AI training generally — "feels like a second job," seen as low-value busywork (Theme 3)
2. Existing completion/participation certificates are widely understood — including inside L&D itself — not to prove actual skill (Theme 3)
3. No good way to counter the perception that this round of AI training is just checkbox theater like the last one

**Desired Outcomes**
- A credential employees don't roll their eyes at, because it's tied to a real, respected assessment
- A program that costs people time only once and produces something durable and reusable (for hiring, internal mobility, or client-facing proof)
- Defensible reporting to leadership: not "X people attended" but "X people are verified competent, at this level, on this tool"

**Objections and Fears**
- "Will this be seen as punitive if people fail?" (already an anticipated objection in product-marketing.md's Switching Dynamics — now with external corroboration that training fatigue and AI-related workplace insecurity, e.g. the 33% "embarrassed by how little they understand AI" stat, are already live emotional risks to manage)
- Concern that a harder, assessed program will be read as "more of the thing people already hate," not "finally something worth their time" — the framing has to distinguish rigor from volume/friction
- Budget scrutiny: needs a credible ROI case, not just a training-hours metric

**Alternatives They Consider**
- Generic AI-literacy platforms (Coursera for Business, Pluralsight, similar) — the actual G2 review base for these skews toward praising UX and support, not skill verification, suggesting L&D buyers of these tools aren't yet holding them to an assessment-rigor standard, which is itself useful context
- No formal program — relying on self-directed learning and informal team knowledge-sharing
- LinkedIn Learning-style completion certificates

**Key Vocabulary**
- "Checkbox training" (well-established negative framing to avoid triggering)
- "Feels like a second job" (verbatim employee sentiment — useful for empathy framing in sales copy, not for the credential's own marketing)
- "Proof of learning" vs. "proof of attendance" (established L&D industry distinction, maps directly onto Sthuthi's differentiator)

**How to Reach Them**
- Channels: HR/L&D trade press (SHRM-adjacent), LinkedIn (where the fatigue conversation itself is happening)
- Content they consume: workforce-trend reporting (Fortune, LinkedIn's own published research) — this persona is likely to have already seen and internalized the "AI training fatigue" narrative, so content that acknowledges it directly will land better than content that ignores it

---

## Persona 3: The Agentic-AI / Client-Facing Founder — "Whoever has to prove it to someone else's procurement team"

**Profile**
- Title range: Founder/CEO, CTO, or Head of Delivery at a small agentic-AI or AI-enabled product company
- Company size: Small (Sthuthi's four named clients — ShelVey AI, Amro Agentic AI, Kenect AI, The Payzon — are all in this size/category range)
- Context: Building or delivering AI-powered products/services to *their own* enterprise customers

**Primary Job to Be Done**
Convince a skeptical enterprise buyer or partner that the team building/operating their AI product actually knows what it's doing — with something more concrete than "trust us."

**Trigger Events**
- An enterprise prospect's procurement/security review asks how the vendor ensures its own staff uses AI tools responsibly (Theme, AI vendor due-diligence questionnaires now routinely probe this)
- Losing or nearly losing a deal on a credibility/trust objection rather than a product-fit objection
- Wanting a differentiator against other small AI vendors who can't demonstrate the same rigor

**Top Pains**
1. No independent, checkable way to demonstrate team competency to an external buyer — it's their word against a generic "we're AI experts" claim every other small AI vendor also makes
2. AI vendor risk/due-diligence questionnaires are becoming standard in enterprise procurement (76% of enterprises now buying AI at pace per this research's due-diligence sourcing) and increasingly ask about staff training and governance specifically
3. Being a small company competing for enterprise trust against larger, more established vendors with more perceived legitimacy

**Desired Outcomes**
- A credential + verification record they can point to in a sales conversation or security questionnaire, backed by a named third party, not self-asserted
- Something that signals rigor without requiring the founder to build an internal certification program from scratch

**Objections and Fears**
- Cost and time relative to a small team's bandwidth
- Whether an outside certifier "gets" their specific, fast-moving agentic-AI stack well enough to assess it meaningfully (this is exactly what Sthuthi's custom-track/scoping-call model is built to answer)

**Alternatives They Consider**
- Nothing formal — relying on case studies, testimonials, or founder reputation alone
- Generic security/compliance certifications (SOC 2, etc.) that don't actually speak to AI-tool competency specifically

**Key Vocabulary**
- "Due diligence," "vendor risk," "governance" — procurement-side language this persona has to speak fluently even as a small vendor
- "Prove it," "independently verified," "third-party" — trust-transfer language

**How to Reach Them**
- Channels: the same communities where small AI-product founders already are (Indie Hackers, Product Hunt, agentic-AI-focused Twitter/X and LinkedIn) — note: this research pass found abundant *technical* agentic-AI discussion in these channels but did not surface direct "prove our team is competent to a client" threads; this sub-theme is inferred from the due-diligence/procurement data plus Sthuthi's own existing client roster, not from a direct quote, and should be treated as **lower confidence than Personas 1 and 2** until validated with the four named clients directly (they are a ready-made source for this)

---

## Voice-of-Customer / Market Language Quote Bank

Organized by theme, for direct use in copy, content, or sales conversations. All are market/proxy quotes (not Sthuthi customers) — attribute the underlying source, not Sthuthi, if quoting publicly.

**#pain — AI code trust gap**
- "96% of developers believe AI-generated code isn't functionally correct, yet only 48% say they always check code generated with AI assistance before committing it." — Sonar survey
- "Acceptance rate is a vanity metric." — TianPan.co
- "It has created a critical trust gap between output and deployment." — Sonar CEO, on "verification debt"

**#pain — shadow AI / governance**
- "Only 37% of organizations have AI governance policies." — Vectra/Wiz/Palo Alto cluster
- "Nearly 47% of generative AI users access tools through personal accounts, completely bypassing enterprise controls."

**#pain — training fatigue (handle with care — see Theme 3 implications)**
- "Feels like a second job." — LinkedIn survey via Fortune
- "A third feel embarrassed by how little they understand [AI]."

**#language — credential credibility distinction**
- "Proof of learning" vs. "proof of attendance"
- "Certification of AI skills directly from companies is more trustworthy than when users manually self-report their skills." — LinkedIn's Pat Whelan

**#objection — resume/claim skepticism (now externally quotable)**
- "86% of U.S. hiring managers say AI makes it too easy to exaggerate skills on resumes."
- "60% of hiring managers want to test, discuss, or see proof of a candidate's AI abilities rather than take resume claims at face value."

**#competitor — vendor cert critique ammunition**
- A GH-300 (GitHub Copilot Certification) practice-exam app markets a "94% first-attempt pass rate" as a selling point.

---

## Competitive Intelligence Summary

| Player | What they actually do | Where they fall short vs. Sthuthi | Confidence |
|---|---|---|---|
| GitHub Copilot Certification (GH-300) | Proctored knowledge exam (responsible AI, features, prompt engineering, testing, privacy) via Credly badge | Tests tool knowledge, not in-repo task performance; prep vendors market pass rate as a feature | Medium |
| Coursera for Business / Pluralsight (generic AI-skills courses) | Course completion, some skill-level self-assessment (Skill IQ/Role IQ); G2 reviews praise UX/support | Not tool-specific, not proctored, not task-assessed; buyers evaluating these products aren't yet demanding assessment rigor per visible review content | Medium |
| LinkedIn Verified AI Skills (launched Jan 2026) | Passive usage-based verification of individual AI tool proficiency (Lovable, Replit, Relay.app, Descript; GitHub/Gamma/Zapier upcoming), shown as a profile credential | Individual-level, consumer/prosumer-tool-scoped, no proctored task, no enterprise-commissioned credential, no named human assessor — different buyer and mechanism, but validates the exact underlying thesis at massive scale | High (on the fact); interpretation is ours |
| Generic "AI literacy" corporate training (unnamed vendors, broad category) | Training delivery at volume; L&D audience reports fatigue and skepticism toward it | Volume without a rigorous, respected endpoint is actively resented, not just ineffective — reinforces the case for Sthuthi's model but also means the pitch must avoid sounding like "more of that" | High |

**Standing watch item:** if any tool vendor or LinkedIn extends passive usage-verification from individual profiles into an enterprise "team certification" product, re-evaluate this section — that would be a direct, not adjacent, competitor.

---

## Research Gaps and Recommended Next Steps

1. **No first-party data at all yet.** Every theme and persona above is external/proxy. The single highest-value next step is exactly what `.agents/product-marketing.md` already flagged: capture verbatim language from the next 2-3 real scoping calls and cohort assessments.
2. **Reddit access was blocked in this research pass** (safety restriction in the current tool environment) — r/ExperiencedDevs, r/devops, and similar engineering communities almost certainly contain sharper, more specific verbatim language on AI-code-review policy than what surfaced via general web search. Worth a manual pass or a different access path.
3. **Persona 3 (agentic-AI/client-facing founder) is the thinnest** — it's inferred from procurement/due-diligence market data plus Sthuthi's own client roster shape, not from direct quotes from founders in that situation. Sthuthi's four existing named clients (ShelVey AI, Amro Agentic AI, Kenect AI, The Payzon) are a ready-made, high-value source to validate or correct this persona directly — worth a short structured conversation with each about why they pursued certification, framed as product feedback rather than a testimonial ask.
4. **No G2/Capterra presence exists for Sthuthi itself** (too new) — nothing to mine yet; revisit once cohorts have run and reviews are possible.
5. **The GH-300 "94% pass rate" data point is thin (2 sources)** — worth a deeper pass before using publicly as a headline stat; fine as internal directional context for now.

## Changelog
*Newest first.*
- v1 (2026-09-19) — Initial proxy-source research pass (Mode 2): 5 themes, 3 provisional personas, VOC quote bank, competitive intel on GitHub Copilot Certification / generic AI-literacy platforms / LinkedIn Verified AI Skills. No first-party data exists yet — see Research Gaps.

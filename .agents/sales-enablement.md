# Sales Enablement — Sthuthi Technologies

**Document version:** v1
**Last updated:** 2026-09-19
**Built from:** `.agents/product-marketing.md` (positioning, differentiators, existing objections) and `.agents/customer-research.md` (personas, external validation stats, competitive intel). No fabricated numbers appear anywhere in this doc — where Sthuthi doesn't have a public number (pricing, pass rates, client outcomes), that's stated explicitly rather than invented. Replace bracketed placeholders with real figures once you have them to disclose.

**Sales motion context:** No dedicated AE/SDR team exists yet — the "sales rep" using this doc today is almost certainly a founder or program lead taking scoping calls directly. Written for that person; simplify further if a dedicated rep role is hired later.

---

## 1. Objection-Handling Doc

### Quick-reference table (for live calls)

| # | Objection (as you'll hear it) | One-line response | Proof point |
|---|---|---|---|
| 1 | "We can just use [vendor]'s own certification." | "Most vendor certs test knowledge of the tool, not your team's actual judgment on your actual work — and several are exam-only, not proctored against real tasks." | GH-300 prep tools market a 94% first-attempt pass rate as a *feature*; Anthropic's CCDV-F is gated to Partner Network orgs; Cursor and OpenAI have no developer certification at all. |
| 2 | "Our internal tool isn't something anyone certifies." | "That's exactly the custom-track model — we scope the curriculum and rubric with your engineering leads, around your actual tool." | Custom-certification process already built and priced per engagement (see `custom-certification` page). |
| 3 | "How do we know the credential means anything?" | "Every certificate carries a unique credential ID and a named human assessor. We agree pass criteria with your engineering leads before the cohort runs — we're not incentivized to pass everyone." | We explicitly don't publish or optimize for pass rates — ask us why and we'll tell you straight. |
| 4 | "What does this cost?" | "It's scoped per cohort — seat count and tool complexity drive it, so I'd rather give you a real number after a 15-minute scoping call than a misleading range." | [No public pricing exists by design — see Note below before improvising a number on a call.] |
| 5 | "We're too busy for this right now / another training program." | "This isn't more AI training — it's the one that ends in something you can actually cite, instead of another module nobody remembers in a month." | 51% of professionals already say AI training feels like a second job (LinkedIn survey, 2025) — we're not asking for more hours, we're asking the hours you're already spending to end in a real credential. |
| 6 | "Our senior engineers already review AI output informally — this works fine." | "Sure, for the engineers you trust most. This gives you the same confidence about everyone else, in writing." | 96% of developers don't fully trust AI-generated code, yet only 48% always check it before committing — informal trust doesn't scale past the people you already know are careful (Sonar survey, 2026). |
| 7 | "Will people be penalized if they fail?" | "That's a conversation to have before the cohort runs, not after — pass criteria are agreed with your leads up front, and a first attempt that doesn't pass is normally a signal to coach, not a mark against someone." | Pass criteria are set jointly with the client's engineering leads before assessment day. |
| 8 | "I need to check with [budget owner / committee]." | "Makes sense — what would they need to see to say yes? I can put together something specific to bring to them." | Offer the one-pager (Section 2) as the artifact they take into that conversation. |
| 9 | "Does this integrate with / work inside our actual codebase and tools?" | "Yes — the assessment runs inside the real tool against real (or realistic) task conditions, not a sandboxed demo environment." | Every published track's assessment format is explicitly "in-tool" (see track pages). |
| 10 | "We need this to cover [tool with no published track]." | "That's what the custom-track path is for — tell me the tool and we'll scope it." | Redirect to `/custom-certification`. |

**Note on objection #4 (pricing):** Sthuthi deliberately has no public pricing — buyers go through a scoping call. Don't invent a number to fill this gap on a call. If prospects push hard for a range before they'll book a call, that's a signal worth bringing back to whoever owns pricing strategy, not something to freelance an answer to.

### Detailed context (why they actually say it)

**"We can just use the vendor's own certification."**
Real concern: sounds like duplicate spend, or "not invented here" resistance to a third party. Underlying fear is usually budget-owner scrutiny ("why are we paying for this when GitHub/Microsoft already offers something?"). Redirect: ask what they actually need — a marketing-facing badge, or a real answer to "can this specific person handle this specific tool safely." Most vendor certs answer the first question, not the second.

**"How do we know the credential means anything?"**
Real concern: this is really "will this look credible to whoever I show it to" — a hiring manager, an auditor, a client. Don't over-explain the mechanics; lead with the credential ID + named assessor, then stop. Over-selling this one reads as defensive.

**"We're too busy / another training program."**
Real concern: fatigue, not disagreement with the value. This is the L&D/People Ops persona's most common objection per research — the fix is not to argue harder that AI training matters, it's to distinguish this from the trainings they're already burned out on. Lead with "this ends in something," not "this is important."

---

## 2. One-Pager / Leave-Behind

*Layout guidance: single page, front only. Logo + one-line tagline top-left, contact block bottom-right. Generous whitespace — this is a leave-behind, not a brochure. Brand system: paper background, charcoal type, one orange accent rule under the headline. No stock photography.*

---

**[Sthuthi Technologies logo]**

### You rolled out AI tools faster than you can verify anyone's actually good at them.

**The problem.** Engineering and ops teams are using Claude Code, Copilot, Codex, Cursor, and Gemini daily — but adoption dashboards only show usage, not competence. Meanwhile, 96% of developers don't fully trust AI-generated code, and less than half always check it before it ships.¹ "Shadow AI" — unsanctioned tool use outside any governance — is now a named 2026 compliance risk, not a hypothetical.²

**What we do.** Sthuthi runs cohort-based training on a specific AI tool, then proctors a task-based assessment *inside that tool* — reviewed by a named human assessor. A pass issues a dated certificate with a unique, verifiable credential ID. For tools with no published vendor track, we scope and build a custom curriculum directly with your engineering leads.

**Why this, not a vendor badge or a generic AI-literacy course:**
- **Assessed in the real tool, on a real task** — not a multiple-choice quiz about the tool
- **A named human reviews every attempt** — not an automated pass/fail
- **A credential ID your team can actually verify** — checkable by a hiring manager, an auditor, or a client's procurement team
- **We build what doesn't exist yet** — custom tracks for internal or proprietary AI tooling, under NDA if needed

**Who's already run a cohort with us:** ShelVey AI, Amro Agentic AI, Kenect AI, The Payzon — full profiles and certificates at sthuthi-tech.com/clients.

**Next step:** [15-minute scoping call — tell us the tool and the headcount, we'll tell you which published track applies or whether this needs a custom one.]

[Name] · [email] · sthuthi-tech.com

*¹ Sonar State of Code Developer Survey, 2026 · ² Vectra/Wiz/Palo Alto Networks shadow-AI research, 2026 — full citations in `.agents/customer-research.md`*

---

## 3. Persona Cards

### Card 1 — The Engineering / Platform Lead

| Field | Detail |
|---|---|
| **Role / title** | Staff/Principal Engineer, Engineering Manager, Platform Lead, VP Engineering — reports to CTO/VP Eng |
| **Goals** | Be able to stand behind what the team ships when a meaningful share is AI-authored, without personally re-reviewing everything forever |
| **Pains** | "Verification debt" (team doesn't trust AI output but reviewing it costs more than writing fresh); usage dashboards (acceptance rate) create false oversight; no consistent review standard across the team |
| **Top objections** | "This is trivia about the tool, not real review judgment" · "Adds delivery friction we can't absorb right now" · "We can just use the vendor's own cert" |
| **Evaluation criteria** | Whether the assessment simulates real review judgment (diff review, permission boundaries) vs. testing tool trivia; whether it disrupts delivery schedules |
| **Buying process** | Usually the technical evaluator/champion, not the final budget sign-off — needs ammunition to bring to whoever owns training budget |
| **Messaging angle** | "A track built around real review discipline, task framing, and guardrails — assessed in the actual tool." |

### Card 2 — The L&D / People Ops Lead

| Field | Detail |
|---|---|
| **Role / title** | Head of L&D, People Ops Lead, Head of Talent Development — reports to CHRO/COO |
| **Goals** | Get the org measurably better at using AI tools without spending down goodwill on training people resent and that produces nothing checkable |
| **Pains** | Employee fatigue/skepticism toward AI training generally ("feels like a second job"); existing completion certificates are known internally not to prove skill; can't counter "this is checkbox theater like the last one" |
| **Top objections** | "Will this be seen as punitive if people fail?" · "This is just more AI training people are already burned out on" · Budget scrutiny — needs a credible ROI case |
| **Evaluation criteria** | Whether it's distinguishable from generic AI-literacy training people already resent; whether the credential is defensible in a hiring/promotion/compliance conversation |
| **Buying process** | Often the economic buyer or close to it — owns the training budget line and reports outcomes upward |
| **Messaging angle** | "A proctored, human-reviewed assessment and a credential ID that can be verified on request — not another module nobody remembers in a month." |

### Card 3 — The Agentic-AI / Client-Facing Founder

| Field | Detail |
|---|---|
| **Role / title** | Founder/CEO, CTO, or Head of Delivery at a small agentic-AI or AI-enabled product company |
| **Goals** | Convince a skeptical enterprise buyer or partner that the team building/operating their AI product actually knows what it's doing |
| **Pains** | No independent, checkable way to demonstrate team competency to an external buyer; enterprise AI-vendor due-diligence questionnaires increasingly ask about staff training/governance directly; competing for trust against larger, more established vendors |
| **Top objections** | Cost/time relative to a small team's bandwidth · "Will an outside certifier actually understand our fast-moving stack well enough to assess it meaningfully?" |
| **Evaluation criteria** | Whether the certifier can adapt to a fast-moving, non-standard agentic stack (this is what the custom-track/scoping-call model is built to answer) |
| **Buying process** | Usually the sole or dominant decision-maker — founder-led, fast cycle if convinced |
| **Messaging angle** | "A credential + verification record you can point to in a security questionnaire or sales call — backed by a named third party, not self-asserted." *(Lower confidence than Cards 1-2 — validate directly with existing clients; see `.agents/customer-research.md` Research Gaps.)* |

---

## 4. Sales Deck Outline

*10 slides. Story arc: the trust gap is real and measured → here's what's actually available today and why it falls short → here's how Sthuthi is different → here's what it looks like to run → here's the ask. Design for presenting — one idea per slide, minimal text on-screen, detail lives in the speaker notes.*

**Slide 1 — Title**
Headline: "Prove it, don't assume it."
Sub: AI-tool competency certification for teams that can't afford to guess.
*Speaker notes: Set the tone immediately — this is not a training vendor pitch, it's a verification pitch.*

**Slide 2 — Current World Problem**
Headline: "Your team is using AI tools daily. Nobody's checked if they're good at it."
Body: Adoption dashboards (seats, acceptance rate) measure usage, not competence.
*Speaker notes: Ask the room — "if I asked you right now which of your engineers you'd trust to review an AI-authored diff into your payment system unsupervised, could you name them with confidence?" Let it sit.*

**Slide 3 — Cost of the Problem**
Headline: "The gap is measured, and it's not shrinking."
Body (pick 2-3, don't crowd the slide):
- 96% of developers don't fully trust AI-generated code; only 48% always check it before committing (Sonar, 2026)
- Duplicated code blocks grew 4-8x in AI-heavy repos, 2020-2024
- Only 37% of organizations have any AI governance policy at all
*Speaker notes: These are independent, third-party stats — not Sthuthi's own claims. Cite the source out loud; it lands harder than a vendor stat would.*

**Slide 4 — The Shift Happening**
Headline: "The market already knows resume claims about AI skill can't be trusted."
Body: LinkedIn launched "Verified AI Skills" in Jan 2026 — automatically validating real tool usage instead of self-reported claims, because (their words) "certification of AI skills directly from companies is more trustworthy than when users manually self-report."
*Speaker notes: This is the single best external validation available — the largest professional network in the world just built a version of your core insight. Use it to make the pitch feel inevitable, not novel/unproven.*

**Slide 5 — Your Approach**
Headline: "Cohort training, then a proctored assessment inside the real tool."
Body: Train → task-based assessment in-tool → named human assessor review → credential with a verifiable ID.
*Speaker notes: Contrast directly against whatever vendor cert this specific prospect mentioned in discovery — Anthropic's CCDV-F (partner-gated), Microsoft's AB-900 (admin-scoped), OpenAI (no cert exists), Cursor (no cert; AIUC-1 certifies the product not people), Google (nearest exam barely touches Gemini).*

**Slide 6 — Product Walkthrough**
3-4 key moments, not a feature tour:
1. Task framing / scoping a cohort to the client's actual tool and workflows
2. The in-tool assessment itself (show a real example task type from the relevant track page)
3. Human assessor review and sign-off
4. The issued credential (show the certificate format + credential ID)
*Speaker notes: If demoing live, pull up the actual track page for the tool this prospect cares about — it already has the syllabus, FAQ, and landscape section built.*

**Slide 7 — Client Roster**
Headline: "Companies who've run a cohort with us."
Body: ShelVey AI, Amro Agentic AI, Kenect AI, The Payzon — logos + one line each on what they do.
*Speaker notes: Do NOT present this as a case study with outcomes/pass-rates — Sthuthi doesn't publish that without separate client sign-off, and none of it is public. This slide is "who trusts us," not "here's the ROI we delivered." If asked for a fuller reference, offer to check with the client first, same as the site's own Clients page policy.*

**Slide 8 — Implementation / Timeline**
Headline: "From scoping call to issued credential."
Body: [Scoping call] → [curriculum/rubric agreement] → [cohort scheduled, ~20-seat cap] → [live + async training] → [proctored assessment] → [credential issued]
*Speaker notes: Fill in actual week-by-week timing once a standard cadence exists — don't invent specific week numbers if they're not yet fixed internally.*

**Slide 9 — ROI / Value**
Headline: "The Phillips ROI model, applied to certification."
Body: ROI (%) = (net benefits ÷ total program cost) × 100 — net benefits are the estimated cost of the incidents/rework this catches, minus the pilot's cost.
*Speaker notes: Don't present a fake ROI percentage. Walk the prospect through the formula live using their own numbers (their team size, their estimate of incident cost) rather than a canned outcome slide — this also works as an interactive moment rather than a wall of text.*

**Slide 10 — Next Steps**
Headline: "Tell us the tool and the headcount."
Body: [Scoping call CTA] — we'll tell you which published track applies, or whether this needs a custom one.
*Speaker notes: Match the site's own CTA language exactly — "Book a program review" / "Talk to a program lead" — never a generic "Get Started."*

---

## Changelog
*Newest first.*
- v1 (2026-09-19) — Initial build: objection doc, one-pager, 3 persona cards, 10-slide deck outline. Sourced from product-marketing.md and customer-research.md; no pricing or client-outcome numbers invented — flagged explicitly where real figures are still needed.

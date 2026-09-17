# Sthuthi blog image delivery

Generated with the built-in imagegen tool, using the existing mascot, Sthuthi logo and relevant tool PNGs as references. Short explanatory typography follows the updated brief. Logos are generated editorial references based on supplied assets, not guaranteed pixel-identical reproductions or partnership claims.

All final assets are in `public/blog/<slug>/`. Featured PNGs are 1200×630; inline PNGs are 1000×750. Original generations remain in Codex’s generated-images folder. Final prompts, targeted corrections and exact alt text are in `public/blog/image-manifest.json`; the same alt text is wired through `src/lib/blog-images.ts`.

## Per-post decisions

- vibe-coding-tax: 1 — Short, unified argument about unchecked generation and debt; a single review/backlog scene carries it.
- claude-code-certification: 1 — The text already explains exam access and scope; a permissions-and-diff scene illustrates the practical alternative.
- microsoft-copilot-certification: 1 — One administration-versus-application comparison communicates the central distinction.
- usage-vs-proficiency: 1 — The activity-versus-ability contrast is the article’s core idea; extra dashboard images would repeat it.
- ai-code-vulnerabilities: 3 — Security review, input-to-sink tracing, and secret scanning are distinct failure modes worth separate illustrations.
- business-case-for-certification: 2 — A finance discussion establishes the pitch; a pilot-stage flow makes the proposed process concrete.
- self-assessment-accuracy: 1 — Mismatched confidence and capability gauges explain the research without inventing another data chart.
- custom-certification-cost: 2 — Scoping cost drivers and choosing published versus custom tracks are separate decisions.
- codex-certification: 1 — A pipeline-repair scene focuses on the practical assessment, not an unofficial vendor credential.
- cursor-certification: 2 — Product safety versus user skill and prompt/context/diff review are two different checks.
- gemini-certification: 2 — A mixed-input scene establishes the tool’s range; the inline flow explains the assessment inputs and output.

## Exact alt text and assets

- `public/blog/vibe-coding-tax/featured.png`: The Sthuthi guide interrupts rapid AI code generation to review a growing backlog of duplicated code.
- `public/blog/codex-certification/featured.png`: The Sthuthi guide uses Codex to repair a CI pipeline while preserving its tests.
- `public/blog/cursor-certification/featured.png`: A Cursor editor connects multiple files beside separate symbols for product security and developer assessment.
- `public/blog/gemini-certification/featured.png`: The Sthuthi guide combines a screenshot, spreadsheet and code using Gemini for a practical assessment.
- `public/blog/microsoft-copilot-certification/featured.png`: Microsoft Copilot administration controls sit apart from document, email and spreadsheet workflows.
- `public/blog/usage-vs-proficiency/featured.png`: AI activity charts contrast with evidence of code review, testing and verified proficiency.
- `public/blog/ai-code-vulnerabilities/featured.png`: The Sthuthi guide traces unsafe input through an AI-generated diff during a security review.
- `public/blog/business-case-for-certification/featured.png`: The Sthuthi guide presents a scoped AI certification pilot with costs, evidence and verified outcomes.
- `public/blog/self-assessment-accuracy/featured.png`: Self-rated AI confidence differs from observed performance on a practical skills assessment.
- `public/blog/custom-certification-cost/featured.png`: The Sthuthi guide scopes custom certification around tool complexity, expert review and cohort size.
- `public/blog/ai-code-vulnerabilities/01-input-to-sink.png`: A security checkpoint filters user input before it reaches browser output, database queries and logs.
- `public/blog/ai-code-vulnerabilities/02-secrets-review.png`: A secret-scanning checkpoint catches an embedded credential before an AI-assisted commit merges.
- `public/blog/business-case-for-certification/01-pilot-evidence.png`: A certification pilot moves from scope and rubric approval to cohort assessment and a verified credential.
- `public/blog/custom-certification-cost/01-published-or-custom.png`: Published and custom certification paths diverge according to workflow needs and environment constraints.
- `public/blog/gemini-certification/01-mixed-input-assessment.png`: A Gemini assessment turns a screenshot, CSV and ticket into a checked code fix and short writeup.
- `public/blog/cursor-certification/01-context-review.png`: The Sthuthi guide reviews Cursor prompts, selected context and a multi-file diff together.
- `public/blog/claude-code-certification/featured.png`: The Sthuthi guide sets Claude Code permissions and checks a repository change during a practical assessment.

## Verification

- All 17 final PNG headers, dimensions and alt lengths verified.
- Production build passes.
- Lint completes with existing UI/hook warnings.
- Featured images are rendered in articles and used by client-side Open Graph, Twitter and Article JSON-LD metadata. This does not add server prerendering for social crawlers.


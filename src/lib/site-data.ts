export interface TrackFaqItem {
  question: string
  answer: string
}

export interface TrackDetail {
  slug: string
  tool: string
  logo: string
  focus: string
  levels: string
  format: string
  assessment: string
  summary: string
  metaTitle: string
  metaDescription: string
  whoFor: string[]
  syllabus: { title: string; body: string }[]
  landscape: {
    heading: string
    body: string
    blogSlug: string
  }
  faq: TrackFaqItem[]
}

export const TRACKS: TrackDetail[] = [
  {
    slug: "claude-code",
    tool: "Claude Code",
    logo: "claude-code-logo.png",
    focus: "Agentic coding & repo-scale workflows",
    levels: "Foundations → Practitioner → Expert",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Covers running Claude Code against a real repository: scoping a task, reviewing its diffs, and knowing when to stop it and take over.",
    metaTitle: "Claude Code Certification Training for Teams",
    metaDescription:
      "Cohort-based Claude Code certification for engineering teams: task framing, diff review discipline, and permissions, ending in a proctored in-repo assessment with a verifiable credential.",
    whoFor: [
      "Engineers who'll run Claude Code against production repositories",
      "Tech leads who need to review AI-authored diffs, not just merge them",
      "Platform teams standardising how the tool is used across a codebase",
    ],
    syllabus: [
      { title: "Task framing", body: "Writing a scope Claude Code can execute without babysitting, and recognising when a task is too ambiguous to hand off." },
      { title: "Diff review discipline", body: "Reading an agent-authored diff for correctness, scope creep, and quietly-introduced dependencies." },
      { title: "Guardrails & permissions", body: "Configuring what the agent can touch — file scope, command execution, network access — before it runs unattended." },
      { title: "Assessment", body: "A live repository task: the candidate directs Claude Code to ship a scoped change and explains their review before it merges." },
    ],
    landscape: {
      heading: "Where this sits next to Anthropic's own credential",
      body: "Anthropic does run an official Claude Certified Developer – Foundations (CCDV-F) exam, but registration is gated to Claude Partner Network member organisations through the Anthropic Partner Academy — not open to a company that just wants its own engineers checked. Anthropic's free Skilljar courses (Claude Code 101, Claude Code in Action) end in course completion, not a proctored assessment. This track is what most teams actually need: a proctored, in-repo assessment of your own engineers, run on your timeline, independent of partner-network status.",
      blogSlug: "claude-code-certification",
    },
    faq: [
      {
        question: "Is this the same as Anthropic's official Claude certification?",
        answer:
          "No. Anthropic's own Claude Certified Developer – Foundations (CCDV-F) exists, but it's gated to Claude Partner Network organisations via the Anthropic Partner Academy. This track is Sthuthi's independent, proctored assessment of your engineers' actual diff-review and task-framing discipline in Claude Code — not a substitute credential issued by Anthropic.",
      },
      {
        question: "Does completing Anthropic's free Claude Code 101 course count as certification?",
        answer:
          "No — that's self-paced course completion with no proctored assessment. This track adds the piece that's missing: a live, in-repo task reviewed by a human assessor before a credential is issued.",
      },
      {
        question: "What does the assessment actually test?",
        answer:
          "A candidate directs Claude Code through a scoped, live repository task, then walks an assessor through their review of the resulting diff — checking for correctness, scope creep, and permission boundaries, not just whether the code runs.",
      },
      {
        question: "Can new hires and senior engineers go through the same track?",
        answer:
          "The track is leveled Foundations → Practitioner → Expert specifically so a new hire being onboarded onto an AI-enabled codebase and a five-year engineer standardising team practice aren't assessed against the same bar.",
      },
    ],
  },
  {
    slug: "codex",
    tool: "Codex",
    logo: "codex-logo.png",
    focus: "OpenAI's coding agent in CI and local flows",
    levels: "Foundations → Practitioner",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Focuses on Codex inside CI pipelines and local terminals — the failure modes are different from a chat-based assistant, and so is the review habit it needs.",
    metaTitle: "OpenAI Codex Certification Training for Teams",
    metaDescription:
      "Cohort-based Codex certification for engineering teams: environment setup, failure triage, and preserving test integrity, ending in a proctored CI-task assessment with a verifiable credential.",
    whoFor: [
      "Engineers wiring Codex into CI or pre-merge checks",
      "Teams evaluating Codex against an existing Copilot or Claude Code workflow",
    ],
    syllabus: [
      { title: "Environment setup", body: "Sandboxing, secrets handling, and network policy for an agent running inside a pipeline." },
      { title: "Failure triage", body: "Reading a failed agent run and deciding whether to retry, narrow the task, or take it back manually." },
      { title: "Assessment", body: "A CI task: get a failing pipeline green using Codex without weakening the tests to pass." },
    ],
    landscape: {
      heading: "Why there's no OpenAI equivalent to compare this to",
      body: "OpenAI has no official, proctored Codex certification. Its one certification program, AI Foundations (launched December 2025), covers general ChatGPT and office-productivity use — not Codex or coding — and access is currently limited to employer and public-sector pilots rather than open individual enrollment. The free Codex Bootcamp webinar series and OpenAI Academy's self-paced course badges are training and quiz-based completion, not a proctored assessment against real code. This track exists because that gap has no other published fix.",
      blogSlug: "codex-certification",
    },
    faq: [
      {
        question: "Is there an official OpenAI certification this track is based on?",
        answer:
          "No. OpenAI's AI Foundations program covers general ChatGPT and office AI use, not Codex or coding, and isn't open to individual enrollment. This track is Sthuthi's own proctored assessment built specifically around Codex in CI and terminal workflows.",
      },
      {
        question: "Do OpenAI Academy's Codex course badges count as certification?",
        answer:
          "No — those are Accredible completion badges for scoring 80%+ on a self-paced, open-book quiz. This track ends in a live CI task reviewed by a human assessor, not a quiz score.",
      },
      {
        question: "What does the assessment actually test?",
        answer:
          "A candidate is handed a failing CI pipeline and has to get it green using Codex without weakening or deleting the tests to force a pass — the exact failure mode that makes an agent-assisted CI fix look successful when it isn't.",
      },
    ],
  },
  {
    slug: "microsoft-copilot",
    tool: "Microsoft Copilot",
    logo: "copilot-logo.png",
    focus: "Pair-programming inside existing codebases",
    levels: "Foundations",
    format: "Self-paced + live clinic",
    assessment: "Scenario review",
    summary:
      "A shorter track for teams that already have Copilot switched on and want everyone using it the same, deliberate way.",
    metaTitle: "Microsoft Copilot Certification Training for Teams",
    metaDescription:
      "Cohort-based Microsoft Copilot certification for teams: context quality and accept-vs-edit judgment, ending in a scenario-review assessment scored against your own workflows.",
    whoFor: [
      "Engineering teams standardising on Copilot as the default assistant",
      "New hires being onboarded onto a Copilot-enabled codebase",
    ],
    syllabus: [
      { title: "Context quality", body: "What Copilot needs open, named, and commented to suggest something usable." },
      { title: "Accepting vs. editing", body: "When to take a suggestion as-is, edit it, or reject it outright — with real examples of each." },
      { title: "Assessment", body: "A scenario review: walk an assessor through five real suggestions and justify each call." },
    ],
    landscape: {
      heading: "Where this sits next to Microsoft's own exams",
      body: "Microsoft's Copilot certifications are real and genuinely open to the public — unlike some vendors' partner-gated programs — with AB-900 (Microsoft 365 Certified: Copilot and Agent Administration Fundamentals) proctored through Pearson VUE, plus lab-based Microsoft Applied Skills credentials on Microsoft Learn. But AB-900 is scoped to IT administration — supporting, securing, and governing an AI-enabled Microsoft 365 environment — not to whether an employee drafts good documents, emails, or analysis with Copilot in their actual job. This track tests that missing piece directly, against your team's own workflows.",
      blogSlug: "microsoft-copilot-certification",
    },
    faq: [
      {
        question: "Is this the same as Microsoft's AB-900 exam?",
        answer:
          "No. AB-900 is a real, proctored, publicly available exam, but it's scoped to IT administration — supporting and governing Copilot, not day-to-day document, email, or analysis work. This track assesses that day-to-day usage directly, scored against your own company's workflows rather than generic office scenarios.",
      },
      {
        question: "Do Microsoft Applied Skills credentials cover this instead?",
        answer:
          "Applied Skills offers useful lab-based credentials like \"Streamline business workflows with AI chat,\" but they're generic scenarios, not your team's actual documents, emails, and reporting formats. This track adapts the assessment to your company's real work.",
      },
      {
        question: "What does the assessment actually test?",
        answer:
          "A scenario review: the candidate walks an assessor through five real Copilot suggestions from their own work and justifies each call — accept as-is, edit, or reject — against a rubric built around your team's context.",
      },
    ],
  },
  {
    slug: "gemini",
    tool: "Gemini",
    logo: "gemini-logo.png",
    focus: "Multimodal assistance across code, docs & data",
    levels: "Foundations → Practitioner",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Covers Gemini's multimodal range — reading a screenshot, a spreadsheet, and a codebase in the same task — which is where most teams under-use it.",
    metaTitle: "Google Gemini Certification Training for Teams",
    metaDescription:
      "Cohort-based Gemini certification for teams: multimodal input design and source-checking, ending in a proctored mixed-input assessment with a verifiable credential.",
    whoFor: [
      "Cross-functional teams using Gemini across docs, sheets, and code",
      "Analysts and engineers who need to hand the same tool ambiguous, mixed-format input",
    ],
    syllabus: [
      { title: "Multimodal input design", body: "Structuring a prompt that mixes a screenshot, a data file, and a code snippet without confusing the model." },
      { title: "Source-checking output", body: "Verifying a synthesis Gemini produced from multiple documents before it goes in a report." },
      { title: "Assessment", body: "A mixed-input task: turn a screenshot, a CSV, and a ticket into a working fix and a short writeup." },
    ],
    landscape: {
      heading: "Why the closest Google exam still misses the point",
      body: "Google's Generative AI Leader exam is proctored and open to the public, but it barely touches Gemini specifically — it's a broad, vendor-neutral AI-literacy exam. The one exam actually named after Gemini is a free, unproctored K-12 classroom quiz, not a workplace competency check. Neither tests the multimodal skill that actually matters for a working team: taking a screenshot, a spreadsheet, and a codebase together and producing a checked result. This track assesses exactly that.",
      blogSlug: "gemini-certification",
    },
    faq: [
      {
        question: "Is there an official Google Gemini certification this track is based on?",
        answer:
          "Not really. Google's Generative AI Leader exam is proctored and public but barely covers Gemini specifically, and the only exam actually named \"Gemini\" is a free, unproctored K-12 quiz. This track fills that gap with a workplace-specific, proctored assessment.",
      },
      {
        question: "What makes Gemini's assessment different from the other tracks?",
        answer:
          "It's built around Gemini's multimodal range — the assessment hands a candidate a screenshot, a CSV, and a ticket together, and the candidate has to synthesise them into a working fix and a short writeup, which is the exact skill most teams under-use and never get checked on.",
      },
      {
        question: "Who is this track for if my team already uses Gemini daily?",
        answer:
          "Daily use doesn't verify source-checking discipline — teams that use Gemini constantly still don't always catch a synthesis error pulled from conflicting documents. This track specifically tests that verification habit, not just familiarity with the tool.",
      },
    ],
  },
  {
    slug: "cursor",
    tool: "Cursor",
    logo: "cursor-logo.png",
    focus: "AI-native editor workflows across a full codebase",
    levels: "Foundations → Practitioner",
    format: "Cohort + async",
    assessment: "In-IDE task assessment",
    summary:
      "Covers working in Cursor's Composer and Agent modes across a multi-file change — where the editor's own context choices matter as much as the model's.",
    metaTitle: "Cursor Certification Training for Teams",
    metaDescription:
      "Cohort-based Cursor certification for engineering teams: context selection and the Composer-vs-manual boundary, ending in a proctored multi-file repository assessment.",
    whoFor: [
      "Engineers switching their default editor to Cursor",
      "Teams that need a shared standard for when to use Agent mode versus manual edits",
    ],
    syllabus: [
      { title: "Context selection", body: "Choosing what Cursor should index and reference for a given change, and when the default context is wrong." },
      { title: "Composer vs. manual edits", body: "Recognising which changes are safe to hand to Composer end-to-end and which need line-by-line control." },
      { title: "Assessment", body: "A multi-file repository task completed inside Cursor, reviewed for both the diff and the prompts that produced it." },
    ],
    landscape: {
      heading: "Why Anysphere doesn't offer this itself",
      body: "Cursor has no official certification for developers. Anysphere (Cursor's maker) offers free tutorials, live and on-demand workshops, and a community Ambassador program — none proctored, scored, or credentialed. Its one real independent certification, AIUC-1, audits Cursor the product's security and reliability controls, not the people using it. This track is the missing piece: a proctored assessment of how your engineers actually use Composer and Agent mode across a real multi-file change.",
      blogSlug: "cursor-certification",
    },
    faq: [
      {
        question: "Is there an official Cursor certification for developers?",
        answer:
          "No. Anysphere offers free tutorials, workshops, and a community Ambassador program, none of which are proctored or issue a verifiable credential. This track is Sthuthi's independent, proctored assessment.",
      },
      {
        question: "What is Cursor's AIUC-1 certification, and does it cover this?",
        answer:
          "AIUC-1 is a real, independently audited certification — by Schellman — but it certifies Cursor the product's security and reliability controls, not the competency of the people using it. This track is about your engineers, not the product.",
      },
      {
        question: "What does the assessment actually test?",
        answer:
          "A multi-file repository task completed inside Cursor, reviewed for both the resulting diff and the prompts and context choices that produced it — including where Composer was trusted end-to-end and where it should have been overridden.",
      },
    ],
  },
]

export interface ClientMeta {
  slug: string
  name: string
  file: string
  url: string
  description: string
  highlights: string[]
  certificateRecipient: string | null
}

export const CLIENTS: ClientMeta[] = [
  {
    slug: "shelvey-ai",
    name: "ShelVey AI",
    file: "shelvey-ai-logo.png",
    url: "https://shelvey.pro",
    description: "An autonomous AI platform that runs sales and business-creation workflows end to end.",
    highlights: [
      "25 specialised AI agents run a 5-phase business-creation process — research, branding, development, content, marketing — with dual approval at every phase",
      "Ships production React + TypeScript websites (Shadcn/UI, 21st.dev components) with hosting, a custom domain, and Stripe payments live, not templates",
      "Live voice conversations with the AI CEO and agent team via the OpenAI Realtime API and ElevenLabs, alongside 52+ connected MCP server integrations",
      "Every agent deliverable requires two-tier approval — the AI CEO reviews first, then the founder signs off — before anything ships",
    ],
    certificateRecipient: "Vikram Varma Sanagaraju",
  },
  {
    slug: "amro-agentic-ai",
    name: "Amro Agentic AI",
    file: "amro-agentic-ai-logo.png",
    url: "https://amroagentic.com",
    description: "A UK-based suite of practical agentic AI products for sales, content, and customer engagement, built for small and growing businesses.",
    highlights: [
      "A modular, seven-product suite covering sales, content, learning, support, images, and meetings — adopted individually or combined",
      "AmroGen automates B2B prospecting: research, personalised outreach, and follow-up sequences without a dedicated SDR",
      "AmroPilot turns keyword research into publish-ready, branded articles for consistent organic content output",
      "AmroAgents deploys customer-service chat agents trained on a company's own documentation, built for regulated industries with no external data exposure",
      "Priced and packaged for SMBs, consultancies, and trades without an in-house AI team",
    ],
    certificateRecipient: "Hemant Joshi",
  },
  {
    slug: "kenect-ai",
    name: "Kenect AI",
    file: "kenect-ai.svg",
    url: "https://kenectai.com",
    description: "Agentic operations software for automotive dealerships, automating day-to-day dealership workflows.",
    highlights: [
      "A coordinated agent workforce — Reception, Service, Sales, and Retention agents — handles dealership customer conversations end to end, not just describes them",
      "Sophi AgentOS is the operating layer: configures what each agent can do, which systems (DMS, CRM, voice, text) they can touch, and logs every decision for review",
      "Targets sub-2-second response time with 24/7 coverage, including after-hours and weekend service and sales inquiries",
      "Built with policy-aware boundaries and human oversight by design — agents act inside approved limits, with staff handling the moments that need judgment",
    ],
    certificateRecipient: "Shaun Sorensen",
  },
  {
    slug: "the-payzon",
    name: "The Payzon",
    file: "the-payzon-logo.png",
    url: "https://thepayzon.com",
    description: "A micro-banking platform offering money transfers, loans, fixed deposits, and multi-currency accounts.",
    highlights: [
      "Multi-currency accounts with competitive exchange rates, plus peer-to-peer money transfers that complete in minutes",
      "Three-tier fixed deposit products at 8-15% interest over 12-36 month terms, with deposits from $10 to $20,000",
      "Student, business, and enterprise loan products ranging from 5-12% interest, up to $100,000",
      "A deposit pension scheme with monthly installment savings and 5-15% returns for long-term planning",
      "Serves 500+ customers across 200+ countries through 5 branch locations, with over 1M transactions processed",
    ],
    certificateRecipient: null,
  },
]

export const LEGAL_UPDATED = "17 September 2026"

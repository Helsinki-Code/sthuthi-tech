export interface TrackDetail {
  slug: string
  tool: string
  logo: string
  focus: string
  levels: string
  format: string
  assessment: string
  summary: string
  whoFor: string[]
  syllabus: { title: string; body: string }[]
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
    whoFor: [
      "Engineers wiring Codex into CI or pre-merge checks",
      "Teams evaluating Codex against an existing Copilot or Claude Code workflow",
    ],
    syllabus: [
      { title: "Environment setup", body: "Sandboxing, secrets handling, and network policy for an agent running inside a pipeline." },
      { title: "Failure triage", body: "Reading a failed agent run and deciding whether to retry, narrow the task, or take it back manually." },
      { title: "Assessment", body: "A CI task: get a failing pipeline green using Codex without weakening the tests to pass." },
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
    whoFor: [
      "Engineering teams standardising on Copilot as the default assistant",
      "New hires being onboarded onto a Copilot-enabled codebase",
    ],
    syllabus: [
      { title: "Context quality", body: "What Copilot needs open, named, and commented to suggest something usable." },
      { title: "Accepting vs. editing", body: "When to take a suggestion as-is, edit it, or reject it outright — with real examples of each." },
      { title: "Assessment", body: "A scenario review: walk an assessor through five real suggestions and justify each call." },
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
    whoFor: [
      "Cross-functional teams using Gemini across docs, sheets, and code",
      "Analysts and engineers who need to hand the same tool ambiguous, mixed-format input",
    ],
    syllabus: [
      { title: "Multimodal input design", body: "Structuring a prompt that mixes a screenshot, a data file, and a code snippet without confusing the model." },
      { title: "Source-checking output", body: "Verifying a synthesis Gemini produced from multiple documents before it goes in a report." },
      { title: "Assessment", body: "A mixed-input task: turn a screenshot, a CSV, and a ticket into a working fix and a short writeup." },
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
    whoFor: [
      "Engineers switching their default editor to Cursor",
      "Teams that need a shared standard for when to use Agent mode versus manual edits",
    ],
    syllabus: [
      { title: "Context selection", body: "Choosing what Cursor should index and reference for a given change, and when the default context is wrong." },
      { title: "Composer vs. manual edits", body: "Recognising which changes are safe to hand to Composer end-to-end and which need line-by-line control." },
      { title: "Assessment", body: "A multi-file repository task completed inside Cursor, reviewed for both the diff and the prompts that produced it." },
    ],
  },
]

export const CLIENTS = [
  { name: "ShelVey AI", file: "shelvey-ai-logo.png" },
  { name: "Amro Agentic AI", file: "amro-agentic-ai-logo.png" },
  { name: "Kenect AI", file: "kenect-ai.svg" },
  { name: "The Payzon", file: "the-payzon-logo.png" },
]

export const LEGAL_UPDATED = "17 September 2026"

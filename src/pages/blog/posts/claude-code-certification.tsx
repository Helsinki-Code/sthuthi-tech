import { Link } from "react-router-dom"

export function ClaudeCodeCertificationPost() {
  return (
    <>
      <p>
        Yes — Anthropic has an official certification that covers Claude
        Code, called{" "}
        <a
          href="https://www.pearsonvue.com/us/en/anthropic.html"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Claude Certified Developer – Foundations (CCDV-F)
        </a>
        . But before you point your team at it, there's a catch worth
        knowing: it's not open to the public, it isn't specifically about
        Claude Code, and passing it doesn't tell you what most companies
        actually want to know.
      </p>

      <h2>What Anthropic actually offers</h2>
      <p>
        Anthropic launched its Claude Certification Program in March 2026,
        alongside the{" "}
        <a
          href="https://www.anthropic.com/news/claude-partner-network"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Claude Partner Network
        </a>{" "}
        and a $100 million commitment to it. What started as a single
        architect exam has grown into four proctored exams across three
        roles:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Claude Certified Associate – Foundations (CCAO-F)</strong> —
          $99, for consultants and sellers guiding customers toward the
          right Claude use cases.
        </li>
        <li>
          <strong>Claude Certified Developer – Foundations (CCDV-F)</strong> —
          $125, for people building with the Claude API, the Agent SDK,
          Model Context Protocol, and Claude Code specifically.
        </li>
        <li>
          <strong>Claude Certified Architect – Foundations (CCAR-F)</strong> —
          $125, the original exam, launched first back in March.
        </li>
        <li>
          <strong>Claude Certified Architect – Professional (CCAR-P)</strong>{" "}
          — $175, the advanced architect track.
        </li>
      </ul>
      <p>
        The Developer exam is the one that actually names Claude Code in its
        syllabus — alongside API mechanics, building agents and workflows
        with the Agent SDK, model selection and cost management, prompt and
        context engineering, security, and MCP servers. It's a 60-question,
        proctored exam delivered through Pearson VUE's OnVUE system, aimed
        at engineers with one to five years of experience and at least six
        months of hands-on work with Claude or a comparable LLM.
      </p>

      <h2>The catch: it's gated to the Claude Partner Network</h2>
      <p>
        Here's the part that changes whether this is actually useful to
        you. Registration for all four exams is restricted to organizations
        inside the{" "}
        <a
          href="https://www.anthropic.com/news/claude-partner-network"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Claude Partner Network
        </a>
        , booked through the Anthropic Partner Academy — not something an
        individual engineer or an ordinary company signs up for directly.
        Since the March 2026 launch, more than 40,000 firms have applied to
        join the network and over 10,000 consultants have earned a Claude
        certification, but the program is built around consulting and
        implementation partners, not around verifying a software team's
        day-to-day Claude Code habits.
      </p>
      <blockquote>
        The certification exists to validate partners who advise other
        companies on Claude — not to check whether your own engineers use
        Claude Code safely.
      </blockquote>
      <p>
        If your company isn't a Claude Partner Network member — and most
        aren't — this exam isn't currently available to you at any price.
      </p>

      <h2>The free option: Skilljar courses, not an assessment</h2>
      <p>
        Anthropic does publish free, publicly available training on{" "}
        <a
          href="https://anthropic.skilljar.com/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          its Skilljar learning platform
        </a>
        , including "Claude Code 101" and "Claude Code in Action." No
        Anthropic account or partner status is required — just a free
        Skilljar account. These are genuinely useful, well-made courses.
        They are also, by design, self-paced training rather than an
        assessment: nobody proctors them, nobody reviews your work, and
        finishing one produces a completion badge, not a credential anyone
        else can verify.
      </p>

      <h2>What the Developer exam tests, versus what most companies need</h2>
      <p>
        Even ignoring the partner-network gate, CCDV-F is scoped broadly on
        purpose — Anthropic built it to validate the whole Claude ecosystem
        (API, Agent SDK, MCP, cost management, prompt engineering) for
        people who might build any kind of Claude-based product. That's a
        different question from the one most engineering leads are actually
        asking, which is narrower and more specific: <em>can the people on
        my team use Claude Code safely against our repositories, today?</em>
      </p>
      <p>
        That's the same distinction we wrote about in{" "}
        <Link to="/blog/vibe-coding-tax" className="text-brand-orange underline underline-offset-4">
          the vibe coding tax
        </Link>{" "}
        — a broad, ecosystem-level exam doesn't tell you whether a specific
        engineer would catch a scope-creeping diff, know when to take the
        keyboard back from the agent, or handle a task that's a bad fit for
        AI assistance in the first place. Those are role-specific judgment
        calls, not general platform knowledge.
      </p>

      <h2>What to test for instead</h2>
      <p>
        If what you actually need is proof that specific people on your
        team can use Claude Code well — not a partner-network credential
        about the broader Claude platform — the assessment should look
        different from a 60-question multiple-choice exam. It should cover:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Task framing</strong> — writing a scope Claude Code can
          execute without babysitting, and recognizing when a task is too
          ambiguous to hand off.
        </li>
        <li>
          <strong>Diff review discipline</strong> — reading an
          agent-authored diff for correctness, scope creep, and quietly
          introduced dependencies.
        </li>
        <li>
          <strong>Guardrails and permissions</strong> — configuring what the
          agent can touch before it runs unattended: file scope, command
          execution, network access.
        </li>
        <li>
          <strong>A real, live task</strong> — not a question bank. The
          candidate directs Claude Code to ship a scoped change against a
          real repository and explains their review before it merges.
        </li>
      </ul>
      <p>
        That's the model behind{" "}
        <Link to="/certifications/claude-code" className="text-brand-orange underline underline-offset-4">
          our own Claude Code certification track
        </Link>
        : a cohort, a proctored in-repository assessment, and a credential
        with a verifiable ID — open to any company, not gated to a partner
        network, and scoped to the specific judgment calls Claude Code
        actually requires. See the full{" "}
        <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
          list of published tracks
        </Link>{" "}
        if you're weighing this against other tools, or{" "}
        <Link to="/custom-certification" className="text-brand-orange underline underline-offset-4">
          talk to us about a custom track
        </Link>{" "}
        if what you need to certify is more specific than any of the above.
      </p>

      <p className="mt-8 text-[13px] text-muted-foreground">
        Further reading:{" "}
        <a
          href="https://www.freecodecamp.org/news/claude-certified-architect-foundations-prep-for-anthropic-s-new-certification-exam/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          freeCodeCamp's rundown of the Architect exam launch
        </a>{" "}
        and{" "}
        <a
          href="https://medium.com/@roanmonteiro/the-complete-guide-to-anthropics-claude-certifications-the-4-exams-the-prerequisite-that-blocks-4d1f743bc5c4"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          a third-party guide to all four exams and their prerequisites
        </a>
        , if you're evaluating the official program for your consulting or
        implementation partners.
      </p>
    </>
  )
}

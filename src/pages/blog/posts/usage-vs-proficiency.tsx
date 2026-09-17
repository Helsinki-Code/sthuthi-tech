import { Link } from "react-router-dom"

export function UsageVsProficiencyPost() {
  return (
    <>
      <p>
        Adoption is not proficiency. A dashboard showing 88 percent of a
        company's employees "using AI" says nothing about whether any of
        them can use it well — and the gap between those two facts is where
        most of the return on an AI rollout quietly disappears. If your
        primary success metric for Claude Code, Copilot, or Gemini is a
        login count, a seat-utilization percentage, or a prompt-volume
        chart, you are measuring that the tool got switched on. You are not
        measuring whether anyone can actually use it.
      </p>

      <h2>What an adoption dashboard is built to count</h2>
      <p>
        Look at what the market-leading adoption tools actually track.
        GitHub's own{" "}
        <a
          href="https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Copilot usage metrics documentation
        </a>{" "}
        centers on daily and monthly active users, suggestion acceptance
        rate, lines of code suggested versus accepted, and pull request
        counts. In July 2026, GitHub shipped a new{" "}
        <a
          href="https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          usage metrics impact dashboard
        </a>{" "}
        that sorts users into adoption cohorts — Passive, then Phase 1
        through 3 — based on a rolling 28-day window of product usage, and
        reports an "adoption multiplier" comparing PR throughput between
        engaged and passive users. It is a genuine improvement over a flat
        seat count. It is still entirely usage-based: it tells you how much
        code an engaged cohort ships, not whether that code is any good, or
        whether the engineer shipping it would catch a bad diff before it
        merged.
      </p>
      <p>
        Microsoft's Viva Insights Copilot Dashboard runs the same way. It
        defines an "active Copilot user" as someone who performed one
        intentional AI action in a covered app, and in 2025 Microsoft added
        the ability to benchmark that adoption rate across managers, regions,
        and job functions —{" "}
        <a
          href="https://www.theregister.com/2025/10/10/microsoft_copilot_viva_insights/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          effectively a leaderboard for who's logging in
        </a>
        , as one report on the feature put it. Neither of the two most widely
        deployed AI-usage dashboards on the market makes any claim to measure
        skill, judgment, or output quality. They were never built to. They
        were built to answer "is this thing turned on," which is a licensing
        and rollout question, not a competency question.
      </p>

      <h2>The gap between "using AI" and getting value from it is enormous</h2>
      <p>
        The clearest evidence that usage and value are different variables
        comes from OpenAI's own customer data. Its{" "}
        <a
          href="https://venturebeat.com/ai/openai-report-reveals-a-6x-productivity-gap-between-ai-power-users-and"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          State of Enterprise AI 2025 report
        </a>
        , built from usage patterns across more than a million business
        customers, found that "frontier workers" — the 95th percentile of
        adoption intensity — send six times as many messages as the median
        employee at the same company. For coding tasks specifically, that
        gap widens to 17 times. Everyone in the comparison had access to the
        same tool. Access wasn't the variable that mattered.
      </p>
      <p>
        EY's 2025 Work Reimagined survey, covering 15,000 employees and
        1,500 employers across 29 countries, found the same divide from the
        employee side: 88 percent of respondents said they use AI at work to
        some degree, but{" "}
        <a
          href="https://www.ey.com/en_gl/newsroom/2025/11/ey-survey-reveals-companies-are-missing-out-on-up-to-40-percent-of-ai-productivity-gains-due-to-gaps-in-talent-strategy"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          only 5 percent qualified as advanced users
        </a>{" "}
        combining multiple tools into their workflow. Employees who'd
        received more than 81 hours of AI training reported an average
        productivity gain of 14 hours a week, against a median of 8 hours
        for everyone else. An adoption dashboard would show both groups as
        the same green checkmark: "using AI." The actual gap between them is
        a 75 percent difference in reported productivity gain.
      </p>

      <blockquote>
        95% of enterprise generative AI pilots deliver no measurable
        impact on profit and loss.
        <cite>
          MIT NANDA, "The GenAI Divide: State of AI in Business 2025"
        </cite>
      </blockquote>

      <p>
        That MIT finding, drawn from interviews with business leaders,
        employee surveys, and an analysis of hundreds of public AI
        deployments, is usually read as a story about bad tool selection or
        weak integration —{" "}
        <a
          href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Fortune's coverage
        </a>{" "}
        frames it around "the GenAI divide" between the small number of
        deployments that stick and the majority that stall. It's also
        consistent with a simpler explanation: most of those pilots almost
        certainly reported healthy adoption numbers right up until the
        budget review that killed them. Usage was never the thing standing
        between them and P&L impact.
      </p>

      <h2>Even Deloitte's C-suite data points at the same wall</h2>
      <p>
        Deloitte's{" "}
        <a
          href="https://www.deloitte.com/ca/en/issues/generative-ai/state-of-ai-in-enterprise.html"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          State of AI in the Enterprise 2026
        </a>{" "}
        report, based on more than 3,200 director-to-C-suite leaders across
        24 countries, names insufficient worker skills as the single biggest
        barrier to integrating AI into existing workflows — ahead of budget,
        ahead of data readiness, ahead of security concerns. Yet 84 percent
        of organizations in the same survey haven't redesigned a single job
        or workflow around AI capabilities. Those two facts sitting next to
        each other describe most companies' current state exactly: leaders
        already suspect their people aren't skilled enough, and almost none
        of them have changed how work gets structured or verified in
        response.
      </p>
      <p>
        That suspicion is well-founded. Workforce research covered in{" "}
        <Link
          to="/blog/vibe-coding-tax"
          className="text-brand-orange underline underline-offset-4"
        >
          our piece on the vibe coding tax
        </Link>{" "}
        puts the number of enterprise employees with genuinely critical
        AI-agent skills as low as 13 percent, and finds that only 11 percent
        of employees can accurately self-assess their own AI competency in
        either direction. Asking a team whether they're comfortable with a
        tool, the way most companies currently do it, produces answers with
        almost no correlation to whether they actually are.
      </p>

      <h2>Why nobody just measures proficiency directly</h2>
      <p>
        It isn't that engineering and L&D leaders don't want better data —
        it's that adoption metrics are what the vendor tooling exports by
        default, and proficiency isn't something a login event or a token
        count can capture. Telling a good AI-assisted diff from a plausible
        but wrong one, knowing when a task is a bad fit for the tool at all,
        catching scope creep in an agent-authored pull request before it
        merges — none of that shows up in an API log. It only shows up when
        someone is actually put in front of a real task and watched. That's
        an assessment design problem, not a data problem, which is why fixing
        it takes more than adding another chart to the Viva or Copilot
        dashboard.
      </p>

      <h2>What to test instead of what to log</h2>
      <p>
        A usage number can tell you a tool is switched on. It can't tell you
        whether the person using it would catch a scope-creeping diff, know
        when to take the keyboard back, or use their remaining judgment
        instead of the model's confidence. Closing that gap means replacing
        the adoption dashboard — not deleting it, but no longer treating it
        as the finish line — with a real, proctored, task-based check: put
        someone in front of the actual tool, on a task like the ones they'll
        run in production, and see whether their review habits hold up. That
        proctored-assessment model is the basis for every track we run,
        listed at{" "}
        <Link
          to="/certifications"
          className="text-brand-orange underline underline-offset-4"
        >
          our certifications page
        </Link>
        , and if the tool or workflow you need checked isn't one of the
        published tracks,{" "}
        <Link
          to="/contact"
          className="text-brand-orange underline underline-offset-4"
        >
          talk to us about building a custom assessment
        </Link>{" "}
        around it.
      </p>
    </>
  )
}

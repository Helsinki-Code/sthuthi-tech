import { Link } from "react-router-dom"

export function SelfAssessmentAccuracyPost() {
  return (
    <>
      <p>
        Ask a room of employees how good they are with AI tools, and 89
        percent of the answers you get back will be wrong. Not "wrong" in a
        loose, rhetorical sense — wrong against an actual skills test taken by
        the same people who answered the survey question. That number comes
        from the one organization that has run both instruments on the same
        population at scale: a self-report, and a proctored assessment,
        side by side, on tens of thousands of workers. The gap between what
        people say and what they can do is the finding, and it's a lot wider
        than most L&D and engineering leaders assume when they build a
        readiness plan around "just ask the team."
      </p>

      <h2>What the self-assessment research actually found</h2>
      <p>
        The number traces back to{" "}
        <a
          href="https://www.workera.ai/blog/7-out-of-10-employees-dangerously-underestimate-or-overestimate-their-skill-levels-new-analysis-finds"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          a Workera analysis
        </a>{" "}
        of anonymized data from several thousand users who together completed
        more than 22,000 domain assessments through early 2024, spanning
        technical subjects including machine learning, generative AI, and
        communicating about AI. Before taking Workera's computerized adaptive
        test (CAT) — an assessment that adjusts question difficulty in real
        time based on how a person is performing — each user rated their own
        proficiency in that domain on the same 300-point scale the test uses.
        Workera then compared the two numbers. "Accurate" was defined
        generously: a self-rating within 10 points of the test result.
      </p>
      <p>
        Only 11 percent of users landed inside that window. Fifty-six percent
        underestimated their own ability; 32 percent overestimated it. Seven
        in ten people, in other words, couldn't put a number on their own
        skill that came within shouting distance of what a real assessment
        measured — in either direction.
      </p>
      <p>
        The pattern wasn't uniform across domains, and the shape of it is
        useful. In machine learning — a narrow, technical subject with a
        right and wrong answer — 55 percent of users rated themselves
        accurately and only 17 percent underestimated. In "communicating
        about AI," a fuzzier, more socially-inflected skill, accuracy dropped
        to 27 percent and 69 percent of users lowballed themselves. Workera's
        own read on this: the more technical and checkable a skill is, the
        better people are at judging where they stand on it. The vaguer and
        more subjective a skill sounds, the worse the self-rating gets — and
        "how comfortable are you with AI tools" is about as vague and
        subjective a question as a survey can ask.
      </p>
      <p>
        This isn't a one-off finding Workera has quietly moved past either.
        In its{" "}
        <a
          href="https://www.prnewswire.com/news-releases/only-13-of-enterprise-employees-possess-the-critical-skills-to-understand-and-work-with-ai-agents-workera-report-finds-302777709.html"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          2026 AI Skills Enterprise Benchmark Report
        </a>{" "}
        — 88,753 assessments across 32,422 individuals at enterprises
        including Fortune 500 companies and U.S. federal agencies — the same
        11 percent figure resurfaces as live context for a new and more
        specific problem: only 13 percent of employees tested as
        "Accomplished" in agentic AI skills before any upskilling, the lowest
        score of the 14 capability areas the report measured. We covered that
        13 percent stat in{" "}
        <Link to="/blog/vibe-coding-tax" className="text-brand-orange underline underline-offset-4">
          the vibe coding tax
        </Link>
        . What that earlier post didn't get into is the other half of
        Workera's finding, sitting right next to it: 85 percent of L&D
        leaders say they're confident in the self-reported skills data they
        already collect. Confidence in the instrument and accuracy of the
        instrument are apparently unrelated.
      </p>

      <blockquote>
        Only 11% of employees can accurately assess their own skill level —
        yet 85% of L&D leaders are confident in the self-reported data they
        collect.
        <cite>Workera, 2026 AI Skills Enterprise Benchmark Report</cite>
      </blockquote>

      <h2>Why this happens</h2>
      <p>
        Some of this is the classic Dunning-Kruger pattern — people with the
        least ability in a domain lack the exact knowledge needed to notice
        their own gaps. But AI tools appear to produce a variant of the
        effect that runs in a different direction, and it's arguably worse
        for a workplace context: using AI seems to make people's
        self-assessment less accurate, not more, and the effect is strongest
        among people who already think of themselves as AI-savvy.
      </p>
      <p>
        A study out of Aalto University, led by assistant professor Robin
        Welsch with doctoral researcher Daniela da Silva Fernandes,{" "}
        <a
          href="https://www.aalto.fi/en/news/ai-use-makes-us-overestimate-our-cognitive-performance"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          published in Computers in Human Behavior in October 2025
        </a>
        , put roughly 500 participants through logical reasoning tasks drawn
        from the LSAT, half with ChatGPT and half without, then had everyone
        rate their own performance — with a financial incentive for rating
        accurately. Participants who used ChatGPT significantly overestimated
        how well they'd done, and unlike the standard Dunning-Kruger effect,
        the overconfidence wasn't concentrated among the weakest performers —
        it showed up across the board. The researchers also found a reversal
        worth sitting with: participants who considered themselves more
        AI-literate were <em>more</em> overconfident about their results, not
        less. As Welsch put it, "higher AI literacy brings more
        overconfidence" — the people most likely to describe themselves as
        power users on a self-assessment survey are, per this study, the ones
        least equipped to judge their own output accurately.
      </p>
      <p>
        Part of the mechanism is what the researchers call cognitive
        offloading: most participants sent ChatGPT a single prompt per
        question and never circled back to check, double-check, or push on
        the answer. The AI's fluency substitutes for the user's own
        verification step, and fluent output reads as correct output even
        when it isn't — which is a fair description of what a scope-creeping
        diff or a subtly wrong refactor looks like right up until someone
        actually tests it.
      </p>

      <h2>What this means for a company using "ask the team" as a gauge</h2>
      <p>
        If your AI readiness plan runs on a survey — "how comfortable are you
        with Claude Code / Copilot / Cursor, 1 to 5" — the research above
        says that instrument is measuring confidence, not competence, and the
        two are only weakly related. That's not a hypothetical risk. A 2025{" "}
        <a
          href="https://www.digit.fyi/staff-overstate-their-ai-skills/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Skillsoft Global Skills Intelligence Survey
        </a>{" "}
        of 1,000 HR and L&D professionals found that 91 percent of
        organizations say employees routinely overstate their skills, most
        commonly in technical and AI expertise specifically — and that this
        overstatement makes existing skills gaps worse (36 percent of
        respondents), cuts productivity (34 percent), and adds to manager
        stress (31 percent). Skillsoft's separate{" "}
        <a
          href="https://finance.yahoo.com/sectors/technology/articles/only-1-4-employees-feel-120000286.html"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Workforce Readiness Report: AI Edition
        </a>{" "}
        — 2,000 respondents across North America, the UK, and Germany —
        found a 53-point gap between how confident leaders are that their
        organization has set employees up to use AI well (77 percent) and
        how equipped employees actually feel (24 percent), and that only 11
        percent of employees report ever having received a formal skills
        assessment at all. Two different studies, two different "11
        percent" findings, pointing at the same structural gap from opposite
        ends: almost nobody is being tested, and almost nobody can accurately
        report on themselves in the absence of a test.
      </p>
      <p>
        Put a number on what that costs a specific rollout and it looks like
        what we described in{" "}
        <Link to="/blog/vibe-coding-tax" className="text-brand-orange underline underline-offset-4">
          the vibe coding tax
        </Link>{" "}
        — technical debt, duplicated code, and security defects climbing
        alongside adoption, not despite it. A comfort survey can't catch any
        of that in advance, because comfort and capability were never the
        same variable. It also cuts the other way: a chunk of your team is
        underrating itself into skipping training or projects they're
        actually ready for, per the 56 percent underestimation figure above,
        which is its own quiet cost.
      </p>

      <h2>What an actual proficiency check looks like instead</h2>
      <p>
        Every study cited here reaches the same structural conclusion:
        self-report is unreliable specifically because it isn't checked
        against anything. The fix isn't a better-worded survey question — a
        five-point Likert scale on "AI comfort" has the same blind spot at
        any resolution. The fix is replacing the self-report with a task the
        person actually has to complete, observed by someone or something
        that scores the outcome rather than the confidence.
      </p>
      <p>That means, concretely:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>A real task, not a question bank.</strong> Workera's own
          CAT methodology gets closer to reality than a survey by adapting to
          performance in real time, but a live task against a real repository
          or workflow — not a bank of multiple-choice questions about a
          tool — is the harder, more direct version of the same idea.
        </li>
        <li>
          <strong>Proctoring or scored observation.</strong> Unsupervised,
          self-paced "assessments" reintroduce the exact self-report problem
          they're supposed to solve, just with extra steps.
        </li>
        <li>
          <strong>A pass/fail or scaled result tied to the work itself</strong>{" "}
          — did the diff ship clean, was the scope held, was a bad suggestion
          caught — not a self-rated confidence score collected afterward.
        </li>
        <li>
          <strong>Coverage of the judgment calls, not just tool familiarity.</strong>{" "}
          Knowing the keyboard shortcuts in Cursor or the slash commands in
          Claude Code is not the same skill as knowing when to stop trusting
          the agent's output, and a proficiency check that only tests the
          former will pass people who fail at the latter.
        </li>
      </ul>
      <p>
        That's a materially different exercise than reading Workera's or
        Skillsoft's reports and nodding along. It requires an assessment
        built the way those studies were — against real performance, scored
        by something other than the test-taker.
      </p>

      <h2>How Sthuthi builds that check</h2>
      <p>
        This is the entire premise behind how we run certification: a
        proctored, task-based assessment against a real tool and a real
        repository, not a confidence survey and not a self-paced course that
        ends in a completion badge. A candidate doesn't rate how comfortable
        they are with Claude Code, Copilot, Cursor, Codex, or Gemini — they
        use it, on a scoped task, while someone checks whether the result and
        the judgment behind it actually hold up. See{" "}
        <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
          our full list of certification tracks
        </Link>{" "}
        for what that looks like tool by tool, or{" "}
        <Link to="/contact" className="text-brand-orange underline underline-offset-4">
          get in touch
        </Link>{" "}
        if you want to talk through certifying a specific team instead of
        guessing from what they put on a survey.
      </p>

      <p className="mt-8 text-[13px] text-muted-foreground">
        Sources: Workera's{" "}
        <a
          href="https://www.workera.ai/blog/7-out-of-10-employees-dangerously-underestimate-or-overestimate-their-skill-levels-new-analysis-finds"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          2024 self-assessment accuracy analysis
        </a>
        , its{" "}
        <a
          href="https://www.prnewswire.com/news-releases/only-13-of-enterprise-employees-possess-the-critical-skills-to-understand-and-work-with-ai-agents-workera-report-finds-302777709.html"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          2026 AI Skills Enterprise Benchmark Report
        </a>
        , the Aalto University study on AI use and overconfidence in{" "}
        <a
          href="https://www.aalto.fi/en/news/ai-use-makes-us-overestimate-our-cognitive-performance"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Computers in Human Behavior
        </a>
        , and Skillsoft's{" "}
        <a
          href="https://www.digit.fyi/staff-overstate-their-ai-skills/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          2025 Global Skills Intelligence Survey
        </a>{" "}
        and{" "}
        <a
          href="https://finance.yahoo.com/sectors/technology/articles/only-1-4-employees-feel-120000286.html"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Workforce Readiness Report: AI Edition
        </a>
        .
      </p>
    </>
  )
}

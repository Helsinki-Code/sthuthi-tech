import { Link } from "react-router-dom"
import { BlogImage } from "@/components/site/blog-image"

export function AiCodeVulnerabilitiesPost() {
  return (
    <>
      <p>
        Nearly half of AI-generated code introduces a security flaw, and
        that number hasn't moved in two years of model improvements. Veracode
        tested code from over 100 large language models in 2025 and found
        that 45 percent of samples failed basic security tests and
        introduced an OWASP Top 10 vulnerability. It re-ran the same test in
        early 2026, on newer models, and got the same result. If your AI
        governance plan is "we'll wait for the models to get better at
        this," the data says stop waiting.
      </p>

      <h2>What the vulnerability data actually shows</h2>
      <p>
        The source of the 45 percent figure is Veracode's{" "}
        <a
          href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          2025 GenAI Code Security Report
        </a>
        , published July 30, 2025. Veracode had more than 100 LLMs complete
        80-plus coding tasks across Java, Python, C#, and JavaScript, then
        scanned the output for four vulnerability classes mapped to OWASP:
        SQL injection, cross-site scripting, log injection, and insecure
        cryptography. Two findings matter more than the topline number.
        First, the failure rate wasn't evenly spread — Java code failed 72
        percent of the time, versus 38–45 percent for Python, C#, and
        JavaScript. Second, and more damning: scaling up the model didn't
        help. Veracode's own conclusion was that larger, newer models got
        better at writing code that <em>runs</em>, with no corresponding
        improvement in code that's <em>safe</em>.
      </p>
      <p>
        That second finding held up. Veracode's{" "}
        <a
          href="https://www.veracode.com/blog/spring-2026-genai-code-security/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Spring 2026 GenAI Code Security Update
        </a>{" "}
        re-ran the study on the current generation of models and found
        security pass rates "stubbornly stuck at approximately 55 percent" —
        statistically the same failure rate as a year earlier, even as
        syntax correctness climbed above 95 percent. The two categories
        where AI-generated code does worst are also the two most exploitable
        in a typical web app: cross-site scripting passed only 15 percent of
        the time (an 85 percent failure rate) and log injection passed just
        13 percent of the time (87 percent failure) in the Spring 2026 run —
        consistent with the 86 percent and 88 percent failure rates Veracode
        reported for the same two categories in 2025. SQL injection and
        insecure cryptography fared meaningfully better, at 82 and 86
        percent pass rates respectively, which is worth knowing if you're
        deciding where a review process needs to apply the most scrutiny.
      </p>
      <p>
        Veracode isn't the only lab to find this. A widely cited Stanford
        study —{" "}
        <a
          href="https://arxiv.org/abs/2211.03622"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          "Do Users Write More Insecure Code with AI Assistants?"
        </a>{" "}
        by Perry, Srivastava, Kumar, and Boneh, presented at ACM CCS 2023 —
        ran a controlled user study rather than a model benchmark. Developers
        given access to an AI coding assistant wrote measurably less secure
        code than developers without one, across the same set of security-
        relevant programming tasks. The finding that should worry a security
        lead more than the vulnerability rate itself: the AI-assisted group
        was <em>more likely</em> to believe their code was secure than the
        control group. The tool doesn't just introduce flaws — it makes the
        person shipping them more confident, not less.
      </p>

      <h2>Why this keeps happening: review habits break under generation speed</h2>
      <BlogImage imageKey="ai-code-vulnerabilities/01-input-to-sink" />
      <p>
        None of this is really a model-quality problem, which is why scaling
        hasn't fixed it. It's a review problem operating at a new speed. We
        wrote about the broader version of this in{" "}
        <Link to="/blog/vibe-coding-tax" className="text-brand-orange underline underline-offset-4">
          the vibe coding tax
        </Link>{" "}
        — technical debt and code duplication climbing as AI tools make it
        cheap to generate code and expensive, relatively speaking, to clean
        it up. Security is the sharper edge of the same failure. A developer
        reviewing a 15-line function they wrote themselves knows every
        assumption baked into it. A developer reviewing 150 AI-generated
        lines in the same five minutes is pattern-matching for "does this
        look plausible," not verifying that user input gets sanitized before
        it hits a log statement or a query string.
      </p>
      <p>
        Cross-site scripting and log injection are exactly the kind of flaw
        that pattern-matching misses. Both usually require missing a single
        sanitization or escaping step in an otherwise normal-looking block
        of code — the output compiles, runs, and passes a quick glance. A
        reviewer has to specifically ask "where did this input come from,
        and what happens to it here" for every string that touches a log
        line or gets rendered back to a browser. That's a slower, more
        deliberate check than most teams' AI review process asks for, and
        it's precisely the check the Veracode data says AI output needs
        most.
      </p>

      <h2>Secrets are leaking at the same time, for the same reason</h2>
      <BlogImage imageKey="ai-code-vulnerabilities/02-secrets-review" />
      <p>
        The vulnerability-class data lines up with a second, independent
        dataset on credential handling. GitGuardian's{" "}
        <a
          href="https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          State of Secrets Sprawl 2026
        </a>{" "}
        report, published March 17, 2026, scanned public GitHub activity and
        found 28.65 million new hardcoded secrets committed in 2025 alone —
        a 34 percent year-over-year jump and the largest single-year
        increase the report has recorded in its five editions. Within that,
        commits associated with Claude Code leaked secrets at a 3.2 percent
        rate, roughly double the 1.5 percent baseline across all public
        GitHub commits. Secrets tied specifically to AI services — API keys
        for AI providers, among them over 113,000 exposed DeepSeek keys —
        rose 81 percent year over year to more than 1.27 million.
      </p>
      <blockquote>
        Claude Code-assisted commits leaked secrets at roughly double the
        rate of the GitHub-wide baseline — 3.2 percent versus 1.5 percent.
        <cite>GitGuardian, State of Secrets Sprawl 2026</cite>
      </blockquote>
      <p>
        Enterprise-scale data backs this up from a different angle. Apiiro
        analyzed activity across roughly 7,000 developers and 62,000
        repositories at Fortune 50 companies between December 2024 and June
        2025 and found AI-assisted developers committing code at three to
        four times the rate of their peers — while monthly security findings
        in that population rose roughly tenfold over the same six months,
        from about 1,000 to more than 10,000. The composition of those
        findings is the part worth sitting with: trivial syntax errors fell
        76 percent and logic bugs fell more than 60 percent, but privilege-
        escalation paths rose 322 percent and architectural design flaws
        rose 153 percent. AI-assisted developers also exposed cloud
        credentials and access keys at nearly twice the rate of everyone
        else, reported{" "}
        <a
          href="https://www.theregister.com/2025/09/05/ai_code_assistants_security_problems/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          The Register
        </a>{" "}
        and{" "}
        <a
          href="https://siliconangle.com/2025/09/04/apiiro-report-finds-ai-code-assistants-increase-developer-speed-heighten-security-risk/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          SiliconANGLE
        </a>
        , both covering Apiiro's research. Put plainly: AI tools are
        cleaning up the small, easy-to-spot mistakes and increasing the
        large, hard-to-spot ones — the exact inversion of what a fast, low-
        scrutiny review process is built to catch.
      </p>

      <h2>What a real review process would need to catch this</h2>
      <p>
        A linter and a pull-request template don't cover this gap, because
        the failures aren't syntax errors — they're missing judgment calls
        about data flow, trust boundaries, and secrets handling that a
        model has no way to know it's supposed to make. A review process
        built for the actual failure modes in this data needs to check for:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Input-to-sink tracing</strong> — for every user-controlled
          string, can the reviewer say where it's sanitized before it
          reaches a log call, a query, or a rendered page? Given that XSS
          and log injection fail 85–88 percent of the time in benchmark
          testing, this should be the default question, not a special case.
        </li>
        <li>
          <strong>Secret-scanning on every AI-touched commit</strong>,
          treated as more likely to contain a hardcoded credential than a
          human-authored one, not less — the GitGuardian data says the
          opposite assumption is the one that's currently costing companies.
        </li>
        <li>
          <strong>Architecture and privilege review for anything AI-scaffolded
          end-to-end</strong> — the Apiiro data shows the growth is in
          design-level flaws and privilege-escalation paths, not typos. Those
          don't show up in a diff-by-diff read; they show up when someone
          asks whether the new service account, the new endpoint, or the new
          role actually needs the access it was just given.
        </li>
        <li>
          <strong>Language- and category-weighted scrutiny</strong> — a Java
          service or anything writing to logs or rendering user input
          deserves more review time than a Python data script, because the
          failure rates aren't uniform across languages or vulnerability
          classes.
        </li>
        <li>
          <strong>No credit for confidence</strong> — per the Stanford/CCS
          finding, the person who says the code is fine is not more likely
          to be right because they used an AI assistant. If anything, that
          study found the opposite correlation.
        </li>
      </ul>
      <p>
        None of this is exotic. It's a normal, security-conscious code
        review — but calibrated for a source that fails silently and
        confidently, at a volume no team was reviewing at eighteen months
        ago.
      </p>

      <h2>The actual test: can this person catch it, not just prompt for it</h2>
      <p>
        Here's the governance question this data actually raises, and it's
        not "which AI tool is safest" — none of the vendors in Veracode's
        test set were meaningfully better once you controlled for task and
        language. The question is whether the people reviewing AI output on
        your team would catch an unescaped log statement or a scope-creeping
        permission change before it merges. A seat license and a completed
        onboarding video don't answer that. Neither does a self-assessment —
        the Stanford study is direct evidence that developers using AI
        assistants are worse than usual at judging their own code's
        security, not better.
      </p>
      <p>
        The only way to actually know is to test it: put someone in front of
        a real AI-authored diff, with a real vulnerability class planted in
        it — an unsanitized log line, a rendered string that should have
        been escaped, a credential that shouldn't be hardcoded — and watch
        whether they find it and can explain the fix. That's a different
        exercise than a multiple-choice quiz about OWASP categories, and
        it's the difference between a certification that means something to
        a security team and one that means someone sat through a course.
      </p>
      <p>
        That's the model behind{" "}
        <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
          our certification tracks
        </Link>{" "}
        at Sthuthi: proctored, task-based assessments against real
        repositories and real diffs, not question banks. If your review bar
        for AI-generated code is higher than what a general Claude Code,
        Copilot, or Cursor track covers — a compliance requirement, a
        specific internal framework, a security posture you need engineers
        certified against directly — that's exactly what a{" "}
        <Link to="/custom-certification" className="text-brand-orange underline underline-offset-4">
          custom certification track
        </Link>{" "}
        is for. Otherwise,{" "}
        <Link to="/contact" className="text-brand-orange underline underline-offset-4">
          get in touch
        </Link>{" "}
        and we'll help you figure out which track actually matches the risk
        you're trying to close.
      </p>
    </>
  )
}

import { Link } from "react-router-dom"

export function CursorCertificationPost() {
  return (
    <>
      <p>
        No — there is no official certification for Cursor. Anysphere, the
        company that makes it, publishes free tutorials and runs occasional
        workshops, but nothing that proctors a skill, scores a candidate, or
        issues a verifiable credential. The one real certification Cursor
        holds,{" "}
        <a
          href="https://cursor.com/blog/aiuc-1"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          AIUC-1
        </a>
        , doesn't certify people at all — it certifies the product.
      </p>

      <h2>What Cursor actually offers</h2>
      <p>
        Cursor's own site has three things that could be mistaken for a
        certification program, and none of them are one:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>
            <a
              href="https://cursor.com/learn"
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline underline-offset-4"
            >
              Cursor Learn
            </a>
          </strong>{" "}
          — official tutorials on AI foundations, coding with agents, and
          reviewing generated code. It's genuinely useful, self-paced
          reading. It ends in nothing: no quiz, no proctor, no credential.
        </li>
        <li>
          <strong>
            <a
              href="https://cursor.com/workshops"
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline underline-offset-4"
            >
              Cursor Workshops
            </a>
          </strong>{" "}
          — live and on-demand sessions (30–60 minutes, hosted on Luma and
          YouTube) aimed at admins, security teams, mobile developers, and
          other role-specific audiences. Attendance isn't scored, and there's
          nothing to fail.
        </li>
        <li>
          <strong>
            <a
              href="https://cursor.com/ambassadors"
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline underline-offset-4"
            >
              The Ambassador program
            </a>
          </strong>{" "}
          — a community role for active Cursor users who moderate the forum
          and run local meetups, with perks like a comped Ultra plan. It's an
          advocacy program, not an assessment of anyone's ability to use the
          editor well.
        </li>
      </ul>
      <p>
        None of the three involves a proctor, a task, or a pass/fail
        outcome. That puts Cursor closer to "vendor publishes docs" than to
        "vendor runs an exam" — which, for a three-year-old company, isn't
        unusual. It's still worth naming plainly if you're deciding how to
        verify your own team.
      </p>

      <h2>AIUC-1 is real. It just isn't about you.</h2>
      <p>
        The certification Cursor does hold and talk about is{" "}
        <a
          href="https://cursor.com/blog/aiuc-1"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          AIUC-1
        </a>
        , audited by Schellman — the same firm that was the first
        ANAB-accredited ISO 42001 certification body. AIUC-1 combines an
        audit of Anysphere's organizational controls with adversarial
        testing of the Cursor agent itself, across "several thousand
        scenarios" covering secrets protection, secure code generation, MCP
        security, and agent identity and permissions. Cursor has to be
        retested quarterly and fully re-audited every year to keep it.
      </p>
      <p>
        That's a legitimate credential, and it says something real: Cursor
        the product has been independently checked for how it behaves under
        adversarial pressure. It says nothing about whether the engineer
        sitting in front of it knows when to trust Composer with a
        multi-file change versus when to take the keyboard back. AIUC-1
        certifies the tool's safety envelope, not a person's judgment inside
        it — a different question, the same way{" "}
        <Link
          to="/blog/claude-code-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          Anthropic's Claude Certified Developer exam
        </Link>{" "}
        answers a platform-breadth question rather than a
        this-specific-engineer question.
      </p>

      <h2>A company growing faster than anyone is checking competency</h2>
      <p>
        The absence of a skills certification is more notable here than it
        would be for a smaller tool, because Cursor is not a niche product.
        By Anysphere's own numbers,{" "}
        <a
          href="https://cursor.com/enterprise"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          64% of Fortune 500 companies use Cursor
        </a>
        , more than 50,000 enterprises build with it, and it's used to write
        over 100 million lines of enterprise code a day. Anysphere's
        annualized revenue went from roughly $100 million in January 2025 to
        over $500 million by June 2025, then to a $2.3 billion Series D at a
        $29.3 billion valuation that November — and in{" "}
        <a
          href="https://cursor.com/blog/joining-spacex"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          August 2026, Anysphere was acquired outright by SpaceX
        </a>{" "}
        in an all-stock deal, after SpaceX first invested in April.
      </p>
      <p>
        That's an extraordinary growth curve for a code editor to ride in
        under three years, and it's exactly the pattern behind{" "}
        <Link
          to="/blog/vibe-coding-tax"
          className="text-brand-orange underline underline-offset-4"
        >
          the vibe coding tax
        </Link>
        : adoption compounding faster than anyone's verifying what people do
        with it. Tens of thousands of companies rolled Cursor out to their
        engineering orgs while the only "certification" attached to the
        product checks Anysphere's security controls, not whether the
        engineer running Agent mode against your production repo would catch
        a bad diff before it merges.
      </p>

      <h2>What actually needs checking: Composer and Agent mode judgment</h2>
      <p>
        Cursor's failure modes aren't generic "did the AI write bad code"
        failure modes — they're specific to how much control the editor lets
        you hand over, and how much context it decides to use without being
        asked. The judgment calls that separate a team that's good at Cursor
        from a team that's just logged into it:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Context selection</strong> — knowing what Cursor should
          index and reference for a given change, and catching it when the
          editor's default context is wrong for the task at hand.
        </li>
        <li>
          <strong>Composer vs. manual edits</strong> — recognizing which
          changes are safe to hand to Composer end-to-end, across many
          files, and which need line-by-line control because the blast
          radius is too large to delegate.
        </li>
        <li>
          <strong>Reviewing the prompt, not just the diff</strong> — a
          Composer or Agent-mode change is the output of a conversation.
          Reviewing the result without reading what was asked for misses
          half of what could have gone wrong.
        </li>
      </ul>
      <p>
        None of that shows up in a tutorial-completion badge or a workshop
        attendance record. It shows up when someone is put in front of a
        real multi-file task in the actual editor and has to explain the
        calls they made.
      </p>

      <h2>What to test for instead</h2>
      <p>
        If your team already has Cursor turned on — and given the adoption
        numbers above, a large share of engineering orgs do — the honest
        finding here is that nobody is checking whether that rollout
        produced skill or just usage. That's the gap{" "}
        <Link
          to="/certifications/cursor"
          className="text-brand-orange underline underline-offset-4"
        >
          our Cursor certification track
        </Link>{" "}
        is built for: it covers working in Cursor's Composer and Agent modes
        across a multi-file change, where the editor's own context choices
        matter as much as the model's, and it ends in an in-IDE task
        assessment — a real repository change, reviewed for both the diff
        and the prompts that produced it — rather than a quiz. It's a
        similar shape to how we approached{" "}
        <Link
          to="/blog/microsoft-copilot-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          Microsoft Copilot
        </Link>
        , adjusted for the fact that Cursor hands engineers much more
        end-to-end control than a pair-programming suggestion box does. See
        the{" "}
        <Link
          to="/certifications"
          className="text-brand-orange underline underline-offset-4"
        >
          full list of published tracks
        </Link>{" "}
        if Cursor isn't the only tool you need checked, or{" "}
        <Link to="/contact" className="text-brand-orange underline underline-offset-4">
          talk to a program lead
        </Link>{" "}
        if what you need is scoped to your own codebase and rollout.
      </p>

      <p className="mt-8 text-[13px] text-muted-foreground">
        Further reading:{" "}
        <a
          href="https://en.wikipedia.org/wiki/Anysphere"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Wikipedia's summary of Anysphere's funding history and the SpaceX
          acquisition
        </a>{" "}
        and{" "}
        <a
          href="https://forum.cursor.com/t/any-chance-the-cursor-ambassador-program-will-open-again/169995"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Cursor's own community forum on the Ambassador program's status
        </a>
        , if you're weighing the community route against an actual
        assessment for your team.
      </p>
    </>
  )
}

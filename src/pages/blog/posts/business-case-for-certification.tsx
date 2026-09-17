import { Link } from "react-router-dom"
import { BlogImage } from "@/components/site/blog-image"

export function BusinessCaseForCertificationPost() {
  return (
    <>
      <p>
        Most requests for AI-certification budget die in the same meeting,
        for the same reason. Someone on the L&D or People Ops side presents a
        plan to "upskill the team on AI tools," a CFO or VP asks what it
        actually prevents or enables that isn't already happening, and the
        answer is some version of "people will be more comfortable with the
        tools." That's not a business case. It's a hope, and hopes don't
        survive a budget cycle.
      </p>
      <p>
        If you already believe your company needs a real certification
        program — not another course library nobody finishes — the job left
        is narrower than it feels: turn the belief into a document a
        finance-minded person would approve without a follow-up meeting.
        Here's what actually needs to be in it.
      </p>

      <h2>Don't pitch "AI literacy." Pitch risk reduction and capability verification.</h2>
      <p>
        "AI literacy" is a training-completion pitch — it asks for budget to
        run a course and counts success in attendance. It's an easy pitch to
        reject, because nobody can say what "literate" actually means or
        what it would have prevented. A verified-capability pitch is a
        different claim: you're asking to find out, with evidence, which
        specific people can already use these tools safely on real work, and
        which ones need to be stopped before they ship something that costs
        more than the training would have.
      </p>
      <p>
        That reframe matters because it changes what you're asking finance
        to compare. "Upskilling" competes against every other soft
        line-item in the training budget. "Verification that our AI-assisted
        output is safe to ship" competes against the cost of the incident it
        prevents — a comparison that's much easier to win, and the one this
        entire pitch should be built around.
      </p>

      <h2>What actually goes in the cost-of-inaction section</h2>
      <p>
        This is the part most pitches skip, and it's the part that gets
        approved or rejected. Don't write "AI tools carry risk." Write down
        what unmanaged AI tool use is already costing companies that
        haven't checked it, with numbers a CFO can sanity-check against
        their own exposure.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Shadow AI has a line-item cost, and it's documented.</strong>{" "}
          IBM's 2025 Cost of a Data Breach Report found that breaches
          involving "shadow AI" — employees using AI tools the company never
          approved or governed — added an average of $670,000 to the cost of
          the breach, on top of the baseline. The same report found that 63
          percent of organizations have no AI governance policy in place at
          all. If your company can't currently say who's cleared to use
          which AI tool on what kind of work, that 63 percent almost
          certainly includes you.
        </li>
        <li>
          <strong>The skills gap has a price tag attached to it, too.</strong>{" "}
          IDC estimates that AI and technical skills shortages could cost the
          global economy up to $5.5 trillion by 2026 in delayed products,
          missed revenue, and lost competitiveness — and separately, more
          than 90 percent of enterprises expect to face a critical skills
          shortage in that same window. Whatever fraction of that risk maps
          to your headcount is a real number, not a hypothetical one.
        </li>
        <li>
          <strong>Unchecked AI coding usage has its own, separate cost
          curve.</strong>{" "}
          If engineering is any part of the scope, don't re-derive this from
          scratch — we've already written up the technical-debt and
          vulnerability data specific to AI-assisted code in{" "}
          <Link to="/blog/vibe-coding-tax" className="text-brand-orange underline underline-offset-4">
            the vibe coding tax
          </Link>
          . Link that piece directly into your pitch instead of summarizing
          it secondhand — it's built to be handed to exactly this kind of
          audience.
        </li>
      </ul>
      <p>
        The point of this section isn't to scare anyone. It's to establish
        that "do nothing" is not the free option in the comparison —
        it's a specific, documented, growing number. Once that's on the
        table, the cost of a pilot program looks small by comparison, which
        is exactly the comparison you want the reader making.
      </p>

      <blockquote>
        Shadow AI added $670,000 to the average cost of a breach. 63% of
        organizations have no AI governance policy to prevent it.
        <cite>IBM Cost of a Data Breach Report, 2025</cite>
      </blockquote>

      <h2>Size the ask as a pilot, not a program</h2>
      <BlogImage imageKey="business-case-for-certification/01-pilot-evidence" />
      <p>
        A request for "a certification program" reads as open-ended and
        expensive. A request for a scoped pilot with a fixed timeline reads
        as something you can approve this quarter and kill next quarter if
        it doesn't work. Ask for the pilot.
      </p>
      <p>
        If you're certifying a team on a published, off-the-shelf track —
        Claude Code, Codex, Microsoft Copilot, Gemini, or Cursor — the sizing
        question is simple: how many people in the first cohort, and which
        track. Published tracks run as cohort-plus-async programs with an
        in-context assessment (an in-IDE task, a scenario review, or the
        equivalent), so the pilot cost is bounded by cohort size from day
        one — you're not committing to a headcount-wide rollout to find out
        if it works.
      </p>
      <p>
        If what you need to certify is an internal or proprietary tool — a
        custom LLM wrapper, an in-house agent framework, a locked-down
        Copilot fork — the timeline is different but just as boundable. A
        custom track runs on a four-stage clock: a scoping call in week one
        to define what a certified person should actually be able to do, a
        rubric your own engineering leads sign off on in weeks two and
        three, a pilot cohort in week four to stress-test the rubric against
        real people, and only then a standing track on your own calendar.
        Nothing scales past a single pilot cohort until your own people have
        approved the rubric it's scored against. Put that timeline in the
        pitch verbatim — it's the difference between "we're evaluating an
        open-ended vendor engagement" and "we're approving a four-week
        pilot with a defined exit point."
      </p>

      <h2>Present the credential as an asset, not a line-item that disappears after the training ends</h2>
      <p>
        A course-completion certificate is a sunk cost the moment the course
        ends — it has no ongoing use to the business. A verified credential
        is different, and that difference belongs in the pitch: it's an
        HR-referenceable, individually verifiable record that a specific
        person was checked against a specific standard, on a specific date,
        by a proctor — not a badge that only confirms someone watched a
        video to the end.
      </p>
      <p>
        That matters for the ROI case in two concrete ways finance will
        recognize. First, it's an asset that shows up in later decisions —
        staffing a project that touches sensitive code or client data,
        deciding who onboards new hires onto an AI-assisted workflow,
        responding to a customer or auditor who asks how you know your team
        uses these tools safely. Second, it depreciates slowly: a rubric
        gets revisited when the underlying tool changes meaningfully, not
        on an arbitrary annual cycle, so you're not re-buying the same
        credential every year to keep it current.
      </p>

      <h2>Put a number on it: the ROI math to actually show your finance team</h2>
      <p>
        You don't need a novel formula here — using a recognized one makes
        the pitch more credible, not less. The standard approach, the
        Phillips ROI Methodology, extends the familiar four-level training
        evaluation (reaction, learning, application, business impact) with a
        fifth level that isolates the program's financial return:
      </p>
      <blockquote>
        ROI (%) = (net benefits of the program ÷ total program costs) × 100
      </blockquote>
      <p>
        For a certification pilot, "net benefits" is the estimated cost of
        the incidents, rework, or lost time the credential is meant to
        catch or prevent — pull that from the cost-of-inaction section above
        — minus the pilot's cost. "Total program costs" is the pilot
        spend itself: the assessment fee or cohort cost, the time your
        engineering leads spend on rubric sign-off, and the paid time
        candidates spend being assessed. You don't need to model this
        precisely to make the case — a range with your assumptions labeled
        is more credible to a finance reviewer than a single confident
        number with no visible math.
      </p>

      <h2>The one-page version: a checklist to actually draft from</h2>
      <p>
        If you're turning this into an internal document today, it needs
        these six things, in this order, and nothing else:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>The specific claim you can't currently make</strong> — e.g.
          "we don't know which of our 40 engineers would catch a
          scope-creeping diff from Claude Code before it merges."
        </li>
        <li>
          <strong>The cost of not knowing</strong> — your shadow-AI /
          governance exposure, the skills-gap number that applies to your
          headcount, and (if relevant) a link to the AI-coding-specific data
          rather than a rewrite of it.
        </li>
        <li>
          <strong>The pilot scope</strong> — one track, one cohort size, one
          fixed timeline (four weeks for a custom track; a single cohort
          cycle for a published one).
        </li>
        <li>
          <strong>The pilot cost</strong> — the actual number, not "TBD."
        </li>
        <li>
          <strong>The ROI range</strong> — using the Phillips formula above,
          with your assumptions stated, not hidden.
        </li>
        <li>
          <strong>The exit criteria</strong> — what the pilot has to show to
          justify turning it into a standing track, decided before it
          starts, not after.
        </li>
      </ul>
      <p>
        That's a document a CFO can act on in one sitting, because every
        line answers a question they'd otherwise have to ask.
      </p>

      <p>
        If you want to build that pitch around a published track, the{" "}
        <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
          list of current certification tracks
        </Link>{" "}
        has the levels, format, and assessment type for each tool. If
        what you need to certify doesn't exist as a published track yet,{" "}
        <Link to="/custom-certification" className="text-brand-orange underline underline-offset-4">
          the custom certification page
        </Link>{" "}
        walks through the same four-week timeline referenced above in more
        detail. Either way, if you'd rather talk through the pilot scope and
        pricing before you draft the internal pitch,{" "}
        <Link to="/contact" className="text-brand-orange underline underline-offset-4">
          get in touch
        </Link>{" "}
        and we'll help you size it.
      </p>
    </>
  )
}

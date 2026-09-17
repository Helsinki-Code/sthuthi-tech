import { Link } from "react-router-dom"

export function CustomCertificationCostPost() {
  return (
    <>
      <p>
        We don't publish a price for custom AI certification tracks, and
        that's not a sales tactic — it's because the honest answer varies by
        an order of magnitude depending on three things: how novel the tool
        is, how much of your engineering leads' time the rubric needs, and
        how big the first cohort is. Anyone who quotes you a flat number
        before a scoping call is guessing. What we can tell you honestly is
        what actually drives the cost and time, and how to work out for
        yourself whether you need a custom track at all — because for a lot
        of companies asking this question, you don't.
      </p>

      <h2>What actually drives cost and time in a custom build</h2>
      <p>
        Our own process runs on{" "}
        <Link to="/custom-certification" className="text-brand-orange underline underline-offset-4">
          a four-stage timeline
        </Link>
        : a Week 1 scoping call with an engineering lead to draft the task
        list, Week 2–3 spent writing the rubric and pilot curriculum for your
        team to review and edit, a Week 4 pilot cohort that runs the full
        assessment and surfaces what needs adjusting, and then an ongoing
        standing track that gets revisited whenever the underlying tool
        changes meaningfully. That structure is fixed. What moves inside it —
        sometimes by weeks, sometimes by months — is driven by a small number
        of variables:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>How novel or proprietary the tool is.</strong> Certifying
          engineers on an internal LangGraph-based agent framework means
          building the task list from scratch, because there's no public
          documentation or existing best-practice writing to draw on. A
          proprietary Copilot fork running in an air-gapped environment adds
          another layer: nothing about the assessment can touch the public
          internet, which changes how the pilot has to be proctored.
        </li>
        <li>
          <strong>How much subject-matter-expert time the rubric needs.</strong>{" "}
          The Week 2–3 rubric sign-off is only as fast as your engineering
          leads' calendars allow. A legal team's document-review
          prompt-engineering rubric, for example, needs someone who
          understands both the workflow and its failure modes to sit with us
          and argue about edge cases — that's real hours from someone whose
          time is expensive and already spoken for.
        </li>
        <li>
          <strong>Pilot cohort size.</strong> A five-person pilot in Week 4
          surfaces problems with the rubric quickly and cheaply. A
          fifty-person pilot takes longer to schedule, needs more proctoring
          capacity, and generates more edge cases to fold back into the
          rubric before the track goes standing.
        </li>
        <li>
          <strong>Curriculum complexity and interactivity depth.</strong>{" "}
          This one has industry data behind it, even though it comes from
          general corporate e-learning rather than certification
          specifically: a widely-cited Chapman Alliance analysis, reported by
          ATD, found that basic e-learning takes roughly 79 hours of
          production time per finished hour, while advanced work involving
          simulations and branching scenarios can run as high as 716 hours
          per finished hour. A proctored, in-repository assessment isn't
          e-learning, but the same shape of relationship holds: a rubric that
          has to judge live judgment calls against a real tool takes
          meaningfully longer to build than a rubric that checks recall of
          static material.
        </li>
      </ul>
      <blockquote>
        Basic e-learning: ~79 hours of development per finished hour.
        Advanced simulations: up to ~716 hours per finished hour.
        <cite>Chapman Alliance research, via ATD (td.org)</cite>
      </blockquote>
      <p>
        None of this is Sthuthi-specific inflation — it's the same reason any
        vendor building something bespoke around your internal tooling needs
        a real conversation before naming a number. The variables above are
        also, not coincidentally, exactly what a good scoping call is
        designed to pin down in the first week rather than the fourth.
      </p>

      <h2>Published track vs. custom: a decision framework</h2>
      <p>
        Before you start a scoping call, it's worth running your situation
        through a short checklist. None of this is unique to certification —
        it's the same build-vs-buy logic L&D teams have used for years on
        training content generally, adapted to what a credential actually
        needs to prove.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Is the tool covered by a track that's actually open to
          you?</strong> Check whether a{" "}
          <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
            published track
          </Link>{" "}
          already exists for the mainstream tool you're using — Claude Code,
          Codex, Microsoft Copilot, Gemini, Cursor — and whether it's open to
          any company or gated behind a partner network you're not in. A
          gated program isn't really an option; an open one usually beats
          building your own.
        </li>
        <li>
          <strong>Does public best-practice material exist for this
          workflow?</strong> If engineers elsewhere have written about how to
          use the tool well, a published or lightly-adapted track can draw on
          that. If the workflow only exists inside your company, there's
          nothing for a published track to be built on top of.
        </li>
        <li>
          <strong>Is the thing you're certifying an internal tool or a
          company-specific process?</strong> An internal agent framework, a
          fork of a vendor tool, or a workflow rubric scoped to one team's
          domain (legal document review, a specific compliance process) has
          no vendor certification to buy — custom is the only option that
          actually tests it.
        </li>
        <li>
          <strong>Does the environment have hard constraints a vendor exam
          can't accommodate?</strong> Air-gapped networks, no data leaving
          the building, or tooling that can't be described to a third party
          in detail rule out most off-the-shelf options by default.
        </li>
        <li>
          <strong>Is this a one-time check or a standing pipeline?</strong> If
          you need to certify five people once, the fixed cost of a custom
          rubric is hard to justify next to a published track's per-seat
          cost. If you're certifying every new hire on the same internal
          tool indefinitely, a standing custom track amortizes that fixed
          cost over years of cohorts instead.
        </li>
      </ul>
      <p>
        If your honest answers land mostly on the first two points, a
        published track is very likely the faster, cheaper, and equally
        rigorous choice — building a custom rubric to test the same thing an
        existing proctored exam already covers is wasted scoping time, not
        thoroughness. Custom only earns its cost once the tool itself, not
        just your preference for control, is what's forcing the issue.
      </p>

      <h2>What to bring to a scoping call to make it efficient</h2>
      <p>
        The biggest lever you have over how long Weeks 1–3 take isn't
        anything we do — it's how much of the groundwork is already sitting
        in your own docs before the call happens. Bring:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          A rough list, even an informal one, of the tasks someone certified
          on this tool should be able to do. It doesn't need to be a
          finished rubric — that's Week 2–3's job — but a blank page costs
          more time than an imperfect draft.
        </li>
        <li>
          A named engineering lead who can actually hold time across the
          scoping call and the rubric sign-off, not just attend the first
          meeting. The rubric review in Week 2–3 is where most of the real
          back-and-forth happens.
        </li>
        <li>
          Any existing internal documentation, wikis, or onboarding material
          for the tool. Every page that already exists is a page we don't
          have to reconstruct from an interview.
        </li>
        <li>
          A realistic pilot cohort size and who's in it. "Whoever's
          available" produces a slower, messier pilot than five named
          engineers who've agreed to the Week 4 slot in advance.
        </li>
        <li>
          Any hard constraints up front — air-gapped environment, no
          external network access, data that can't leave the building. These
          change how the assessment has to be proctored, and they're much
          cheaper to design around from the start than to retrofit after
          Week 2.
        </li>
      </ul>
      <p>
        If you've worked through the checklist above and landed on custom,
        the next step is{" "}
        <Link to="/custom-certification" className="text-brand-orange underline underline-offset-4">
          the fuller custom-certification page
        </Link>{" "}
        for the details of how we run that process, or{" "}
        <Link to="/contact?reason=custom-track" className="text-brand-orange underline underline-offset-4">
          start a scoping call
        </Link>{" "}
        directly. If you landed on a published track instead, the{" "}
        <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
          full list of tracks
        </Link>{" "}
        covers Claude Code, Codex, Microsoft Copilot, Gemini, and Cursor —
        and either way, if you're still not sure which side of the line
        you're on,{" "}
        <Link to="/contact" className="text-brand-orange underline underline-offset-4">
          ask us
        </Link>{" "}
        before committing to either.
      </p>
    </>
  )
}

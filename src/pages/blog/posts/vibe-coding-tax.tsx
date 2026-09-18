import { Link } from "react-router-dom"
import { BlogImage } from "@/components/site/blog-image"

export function VibeCodingTaxPost() {
  return (
    <>
      <p>
        Most companies measure their AI coding rollout by adoption: how many
        engineers have Claude Code or Copilot turned on, how many prompts get
        sent a week, how the number trends month over month. None of that
        tells you whether the code coming out the other end is any good — and
        the industry data on what's actually happening once "the team is
        using AI now" becomes true is not encouraging.
      </p>

      <h2>The debt is real, and it's landing fast</h2>
      <p>
        Across teams that adopted AI coding tools, technical debt has risen
        somewhere between 30 and 41 percent, code duplication is up roughly
        48 percent, and time spent on refactoring has dropped about 60
        percent — the tools make it faster to add code and slower, relatively
        speaking, to clean it up. Analysts have started calling 2026 the year
        technical debt caught up with AI adoption, specifically because of
        this pattern.
      </p>
      <blockquote>
        Code duplication up ~48%. Refactoring activity down ~60%.
        <cite>Industry AI-adoption research, 2026</cite>
      </blockquote>

      <h2>It's not just messier — it's less secure</h2>
      <p>
        Security research has found that close to half of AI-generated code
        samples introduce at least one OWASP Top 10 vulnerability, with the
        overwhelming majority failing basic defenses against cross-site
        scripting and log injection specifically. Separately, secret-scanning
        research found AI-assisted commits leaking hardcoded credentials at
        roughly double the rate of commits without AI involvement. Neither of
        these is a tooling failure — Claude Code, Copilot, Codex, and Gemini
        can all produce clean, defensible code. They're a review-habit
        failure: nobody was checking closely enough, at the speed the code
        was arriving.
      </p>

      <h2>The tell isn't the tool. It's the review habit.</h2>
      <BlogImage imageKey="vibe-coding-tax/01-review-before-ship" />
      <p>
        Engineers who get real value out of AI coding tools tend to share a
        few habits: they know which tasks are a good fit for the tool
        (boilerplate, exploration, a scoped refactor) and which aren't
        (nuanced domain logic, anything security-sensitive), they write
        specific prompts instead of vague ones, and — critically — they still
        read and understand what came back before it ships. The failure mode
        with a name for it now, "vibe coding," is what happens when that last
        habit disappears: prompts go in, code goes out, and nobody who
        touched it could explain why it's structured the way it is.
      </p>
      <p>
        That's a hard thing to see from an adoption dashboard. Login counts
        and prompt volume tell you the tool is switched on. They don't tell
        you whether the person using it would catch the difference between a
        safe refactor and one that quietly reintroduces a vulnerability
        they'd already fixed once.
      </p>

      <h2>What a usage number can't tell you</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Whether someone can tell a good AI suggestion from a plausible-looking bad one</li>
        <li>Whether they'd catch a scope-creeping diff before it merges</li>
        <li>Whether they know when to take the keyboard back from the agent entirely</li>
        <li>Whether "reviewed" meant read carefully, or clicked approve</li>
      </ul>
      <p>
        Separate workforce research backs this up from the other direction:
        only a small fraction of enterprise employees — by one estimate, as
        low as 13 percent — have the skills to actually work with AI agents
        well, and most people are bad at self-rating their own AI competency
        in either direction. Asking a team "are you comfortable with Claude
        Code?" produces answers with almost no relationship to whether they
        are.
      </p>

      <h2>The alternative to a policy memo</h2>
      <BlogImage imageKey="vibe-coding-tax/02-maintenance-task" />
      <p>
        None of this gets fixed by writing an AI usage policy and asking
        people to read it, and it doesn't get fixed by a course that ends in
        a certificate for finishing the video. It gets fixed by actually
        testing the thing you're worried about — putting someone in front of
        the real tool, on a real task, and watching whether their review
        habits hold up. That's the entire premise behind{" "}
        <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
          how we run certification
        </Link>{" "}
        at Sthuthi: a credential that means someone was actually checked, not
        just logged in.
      </p>
    </>
  )
}

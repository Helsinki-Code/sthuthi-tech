import { Link } from "react-router-dom"
import { BlogImage } from "@/components/site/blog-image"

export function CodexCertificationPost() {
  return (
    <>
      <p>
        No — as of September 2026, OpenAI does not have an official,
        proctored certification for Codex, its coding agent. There's free
        official training (live bootcamps and self-paced courses with
        quizzes), and there's a brand-new "OpenAI Certification" program —
        but that program isn't about Codex or coding at all, and it isn't
        open to the public yet either. If you've seen a "Codex
        certification" being sold anywhere, it's coming from a third party
        with no connection to OpenAI.
      </p>

      <h2>What OpenAI actually offers</h2>
      <p>
        OpenAI announced its first{" "}
        <a
          href="https://openai.com/index/openai-certificate-courses/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          OpenAI Certifications
        </a>{" "}
        on December 9, 2025, starting with a course called AI Foundations.
        It's a hands-on credential completed entirely inside ChatGPT —
        learners work through scenario-based tasks and get feedback in the
        product itself, not a timed, question-bank exam. OpenAI built the
        psychometrics behind it with{" "}
        <a
          href="https://www.artificialintelligence-news.com/news/openai-targets-ai-skills-gap-with-new-certification-standards/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Coursera, ETS (the organization behind the GRE and TOEFL), and
          Credly by Pearson
        </a>
        , which is a real credentialing pedigree — but two things matter
        more for anyone evaluating it against Codex specifically.
      </p>
      <p>
        First, AI Foundations is scoped to general ChatGPT and
        office-productivity AI use, not coding or Codex. Second, it isn't
        self-enrollment: access currently runs through employer and
        public-sector pilots — Walmart, John Deere, Lowe's, Boston
        Consulting Group, Accenture, and the Office of the Governor of
        Delaware among them — with OpenAI stating broader public access
        will expand "through 2026" as it incorporates pilot feedback. An
        individual engineer, or a company that isn't one of those pilot
        partners, can't sit this exam today at any price.
      </p>

      <h2>Codex has free training — but nothing that certifies you</h2>
      <BlogImage imageKey="codex-certification/02-learning-and-assessment" />
      <p>
        Separately from the AI Foundations program, OpenAI Academy runs
        actual Codex-specific training, and it's worth knowing what shape
        that takes because none of it produces a certification either.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Codex Bootcamp</strong> — a free, three-part{" "}
          <a
            href="https://academy.openai.com/public/clubs/builders-etkn1/resources/codex-bootcamp-2026-07-18"
            target="_blank"
            rel="noreferrer"
            className="text-brand-orange underline underline-offset-4"
          >
            live webinar series
          </a>{" "}
          (101: Agentic Coding, 201: Team Workflows, 301: Advanced
          Automation) with live demos and Q&A. There's no quiz, no
          assessment, and no credential attached — you show up, you watch,
          you leave.
        </li>
        <li>
          <strong>Self-paced Academy pathways</strong> — courses like{" "}
          <a
            href="https://academy.openai.com/pages/courses"
            target="_blank"
            rel="noreferrer"
            className="text-brand-orange underline underline-offset-4"
          >
            "Build with AI," which covers Codex alongside the OpenAI API
          </a>
          , do include a scored quiz, and passing at 80% or higher earns a
          digital badge issued through Accredible. That's a real step up
          from a plain completion certificate — there's at least a pass
          bar — but it's still an open-book, self-administered quiz on
          general course content, not a proctored assessment of whether you
          can run Codex against a real, messy codebase.
        </li>
      </ul>
      <p>
        This is the same shape Anthropic's free Skilljar courses take for
        Claude Code, which we covered in{" "}
        <Link
          to="/blog/claude-code-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          our piece on the Claude Code certification landscape
        </Link>
        : good, free, official training that ends in a badge nobody
        proctored, rather than a credential that verifies skill.
      </p>

      <h2>Nobody at OpenAI has answered the question directly</h2>
      <p>
        It isn't just that a Codex certification doesn't exist — it's that
        the question is openly unresolved even among OpenAI's own
        developer community. A thread on the{" "}
        <a
          href="https://community.openai.com/t/codex-certification-question/1381017"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          OpenAI Developer Community forum
        </a>{" "}
        asked outright whether OpenAI planned to pair Codex Bootcamp with a
        real, proctored exam. No OpenAI staff member answered. That's a
        useful data point on its own: for a coding agent OpenAI is actively
        pushing into CI pipelines and enterprise workflows, there's no
        public roadmap — official or unofficial — toward a credential that
        verifies who's actually good at using it.
      </p>
      <p>
        That gap has already created an opening for unaffiliated training
        vendors to sell their own "Codex certifications" — course
        providers with names like DevCerts and igmGuru advertise Codex
        certificates with no OpenAI backing whatsoever. If you see "Codex
        certified" on a resume or a training vendor's page, check who
        actually issued it before assuming it means anything close to what
        an OpenAI credential would.
      </p>

      <h2>A different shape of gap than Claude or Copilot</h2>
      <p>
        We've now looked at three vendors and found three different
        problems. Anthropic has an exam that actually names Claude Code in
        its syllabus, but{" "}
        <Link
          to="/blog/claude-code-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          it's gated to Claude Partner Network member organizations
        </Link>
        . Microsoft's Copilot exams are{" "}
        <Link
          to="/blog/microsoft-copilot-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          open to anyone, but scoped to IT administration or generic office
          scenarios
        </Link>
        . OpenAI is the odd one out: there's no Codex-specific credential
        at all, official or gated, and the closest thing to an "OpenAI
        certification" is about general ChatGPT use in the office — not
        about writing, reviewing, or shipping code with an agent.
      </p>
      <p>
        In every case, though, the practical answer to the question
        companies actually care about is the same: none of these programs
        tell you whether a specific engineer on your team can direct Codex
        against your repositories, catch a bad diff, or know when a task
        is a poor fit for an agent to run unsupervised.
      </p>

      <h2>What to test for instead</h2>
      <BlogImage imageKey="codex-certification/01-failure-decisions" />
      <p>
        If you're evaluating Codex for your engineering team, what you
        need isn't a credential about the OpenAI platform in general — it's
        evidence that specific people can run Codex well against your own
        code, in the environments it actually runs in: CI pipelines, local
        terminals, and pre-merge checks, where the failure modes look
        nothing like a chat-based assistant's.
      </p>
      <p>
        That's the model behind{" "}
        <Link
          to="/certifications/codex"
          className="text-brand-orange underline underline-offset-4"
        >
          our own Codex certification track
        </Link>
        , which focuses on OpenAI's coding agent in CI and local flows —
        environment setup and sandboxing, reading a failed agent run and
        deciding whether to retry, narrow the task, or take it back
        manually, and a proctored, in-IDE assessment where the candidate
        has to get a failing pipeline green using Codex without weakening
        the tests to pass. It's built across two levels, Foundations
        through Practitioner, delivered as a cohort plus async work. See
        the{" "}
        <Link
          to="/certifications"
          className="text-brand-orange underline underline-offset-4"
        >
          full list of published tracks
        </Link>{" "}
        if you're comparing Codex against Claude Code or Copilot, or{" "}
        <Link
          to="/contact"
          className="text-brand-orange underline underline-offset-4"
        >
          talk to a program lead
        </Link>{" "}
        about scoping something specific to how your team actually uses
        it.
      </p>
      <BlogImage imageKey="codex-certification/03-preserve-tests" />
    </>
  )
}

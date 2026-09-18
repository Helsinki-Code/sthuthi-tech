import { Link } from "react-router-dom"
import { BlogImage } from "@/components/site/blog-image"

export function GeminiCertificationPost() {
  return (
    <>
      <p>
        Sort of — Google has a real, proctored, public certification called{" "}
        <a
          href="https://cloud.google.com/learn/certification/generative-ai-leader"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Google Cloud Certified: Generative AI Leader
        </a>
        , and Gemini is part of what it covers. But there's no exam that
        certifies Gemini specifically, and nothing at all that certifies
        whether someone can use Gemini well on a real coding or multimodal
        task. What exists is either too broad (a business-strategy exam
        about generative AI generally) or too narrow and unproctored (a
        free K-12 educator badge).
      </p>

      <h2>The one real proctored exam: Generative AI Leader (GAIL)</h2>
      <p>
        Google Cloud's{" "}
        <a
          href="https://cloud.google.com/learn/certification/generative-ai-leader"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Generative AI Leader certification
        </a>{" "}
        is a genuine, proctored, publicly available exam — no partner
        network, no reseller status, no organizational sign-off required.
        Anyone can register. It's delivered through Pearson VUE, either
        online with remote proctoring (OnVUE) or at a test center, runs 90
        minutes, and costs $99. The exam guide and study materials are{" "}
        <a
          href="https://services.google.com/fh/files/misc/generative_ai_leader_exam_guide_english.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          published directly by Google
        </a>
        .
      </p>
      <p>
        Here's the catch: GAIL is 50-60 multiple-choice questions split
        across four domains — gen AI fundamentals, Google Cloud's gen AI
        product lineup, techniques for improving model output, and business
        strategy for adopting gen AI. Gemini shows up as one product among
        Google's broader generative AI stack (alongside Vertex AI, model
        tuning, and Google Cloud's AI infrastructure), not as the subject of
        the exam. There is no coding, no hands-on tool use, and no
        multiple-choice question that could tell you whether someone
        drafts a usable doc or catches a bad code suggestion. It's built
        for "managers, strategists and leaders" evaluating whether to adopt
        gen AI at all — a decision-maker's exam, not a user's.
      </p>

      <h2>The free option: training paths and badges, not exams</h2>
      <p>
        Google also publishes free, self-paced material specifically about
        using Gemini day to day —{" "}
        <a
          href="https://www.skills.google/paths/249"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          "Google Workspace with Gemini" on Google Skills
        </a>{" "}
        walks through Gemini inside Gmail, Docs, Sheets, and Slides and
        awards a completion badge. It's a genuinely useful primer. It is
        also, by design, not an assessment: there's no proctor, no scored
        exam, and no verification that the person clicking through the
        modules could actually apply any of it — the same gap we found
        looking at{" "}
        <Link
          to="/blog/claude-code-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          Anthropic's free Skilljar courses
        </Link>{" "}
        for Claude Code. A completion badge and a credential are different
        things, and Google is careful enough not to call this one a
        certification.
      </p>

      <h2>The other Gemini exam that exists — and who it's actually for</h2>
      <p>
        There is one exam that puts "Gemini" directly in its name and is
        open to the public:{" "}
        <a
          href="https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Gemini Certified Educator
        </a>
        , announced through{" "}
        <a
          href="https://blog.google/products-and-platforms/products/education/gemini-certifications-education/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          Google for Education
        </a>
        . It's free, anyone with a Google account can register, and it's
        37 multiple-choice and scenario questions on Gemini and NotebookLM.
        But look at the delivery: it's unsupervised and untimed, completed
        online within a 14-day registration window with no proctor watching
        — closer to an open-book quiz than an assessment. And it's scoped
        entirely to K-12 and higher-ed classroom use — lesson planning,
        student support, Google Workspace for Education. It tells a school
        district nothing about whether a software engineer or an analyst
        can use Gemini well on production code or a client deliverable,
        and it wasn't built to.
      </p>
      <p>
        We also looked for a Gemini Code Assist–specific certification,
        since that's the product actually aimed at engineering teams.
        Google doesn't offer one directly. What you'll find instead are
        third-party training vendors —{" "}
        <a
          href="https://www.springpeople.com/gemini-code-assist-essentials"
          target="_blank"
          rel="noreferrer"
          className="text-brand-orange underline underline-offset-4"
        >
          SpringPeople's "Gemini Code Assist Essentials"
        </a>{" "}
        is one example — selling their own training-plus-completion-certificate
        package as an "authorized course." That's a vendor's certificate,
        not a Google-administered exam, and it's worth checking who
        actually issues a credential before a company puts it in a
        compliance binder.
      </p>

      <h2>The pattern, a third time</h2>
      <BlogImage imageKey="gemini-certification/02-coverage-map" />
      <p>
        This is the same split we've now found in every major AI coding
        and productivity tool.{" "}
        <Link
          to="/blog/claude-code-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          Anthropic's Claude certification
        </Link>{" "}
        is narrow and relevant but gated to Claude Partner Network
        members.{" "}
        <Link
          to="/blog/microsoft-copilot-certification"
          className="text-brand-orange underline underline-offset-4"
        >
          Microsoft's Copilot certifications
        </Link>{" "}
        are open to the public but scoped to IT administration or generic
        office scenarios. Google's version is open to the public too, but
        splits the difference in a different way: the one exam broad
        enough to matter (GAIL) barely touches Gemini as a working tool,
        and the one exam actually named after Gemini is built for
        classrooms, not companies. None of the three tells you whether the
        specific person in front of you can take a screenshot, a
        spreadsheet, and a half-written function and turn them into
        something correct.
      </p>

      <h2>What Gemini-specific proficiency actually requires testing</h2>
      <BlogImage imageKey="gemini-certification/01-mixed-input-assessment" />
      <p>
        Gemini's real differentiator isn't chat quality — it's range. The
        same assistant is expected to read a screenshot, reconcile it
        against a spreadsheet, and write the code that closes the gap, in
        one task. None of the certifications above test that combination,
        because none of them are built around a specific company's mixed
        inputs. That's the model behind{" "}
        <Link
          to="/certifications/gemini"
          className="text-brand-orange underline underline-offset-4"
        >
          our own Gemini certification track
        </Link>
        : it covers Gemini's multimodal range — reading a screenshot, a
        spreadsheet, and a codebase in the same task — which is exactly
        where most teams under-use it. The assessment is a mixed-input
        task: turn a screenshot, a CSV, and a ticket into a working fix and
        a short writeup, reviewed against how your team actually works, not
        a fixed answer key.
      </p>
      <BlogImage imageKey="gemini-certification/03-conflicting-evidence" />
      <p>
        If Gemini isn't the tool you're evaluating, see the{" "}
        <Link
          to="/certifications"
          className="text-brand-orange underline underline-offset-4"
        >
          full list of published tracks
        </Link>{" "}
        — Claude Code, Codex, Microsoft Copilot, and Cursor are covered the
        same way — or{" "}
        <Link
          to="/contact"
          className="text-brand-orange underline underline-offset-4"
        >
          talk to a program lead
        </Link>{" "}
        about a custom track scoped to your team's actual workflows.
      </p>

      <p className="mt-8 text-[13px] text-muted-foreground">
        Further reading:{" "}
        <a
          href="https://services.google.com/fh/files/misc/generative_ai_leader_study_guide_english.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Google's own Generative AI Leader study guide
        </a>{" "}
        and{" "}
        <a
          href="https://support.google.com/googleforeducation/answer/16561655?hl=en"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          the official FAQ for Gemini Certified Educator
        </a>
        , if you're evaluating either program directly.
      </p>
    </>
  )
}

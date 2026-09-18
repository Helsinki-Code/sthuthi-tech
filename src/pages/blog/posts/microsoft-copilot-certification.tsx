import { Link } from "react-router-dom"
import { BlogImage } from "@/components/site/blog-image"

export function MicrosoftCopilotCertificationPost() {
  return (
    <>
      <p>
        Yes — Microsoft has real, official Copilot certifications, and
        unlike some AI vendors, you don't need to belong to a partner
        program to take them. The catch is different: the exams that exist
        either check IT administration skills or generic office-productivity
        scenarios, not whether a specific employee handles your company's
        actual work well with Copilot.
      </p>

      <h2>What Microsoft actually offers</h2>
      <BlogImage imageKey="microsoft-copilot-certification/01-open-credential-paths" />
      <p>
        Microsoft introduced a wave of new Copilot-related credentials in
        February 2026. The two most relevant are:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/copilot-and-agent-administration-fundamentals/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline underline-offset-4"
            >
              Microsoft 365 Certified: Copilot and Agent Administration
              Fundamentals (AB-900)
            </a>
          </strong>{" "}
          — a 45-minute, proctored, beginner-level exam scheduled through
          Pearson VUE. It certifies that you can support, secure, and
          govern an AI-enabled Microsoft 365 environment.
        </li>
        <li>
          <strong>
            <a
              href="https://learn.microsoft.com/en-us/credentials/applied-skills/streamline-business-workflows-with-ai-chat/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline underline-offset-4"
            >
              Microsoft Applied Skills: Streamline business workflows with
              AI chat
            </a>
          </strong>{" "}
          — a lab-based, hands-on assessment (your mouse movements and text
          entry are recorded during the lab) covering Microsoft 365
          Copilot in Word, PowerPoint, Outlook, and Excel.
        </li>
      </ul>
      <p>
        Both are administered directly by Microsoft through Microsoft Learn
        and Pearson VUE — no partner network, reseller status, or
        organizational sign-off required to register.
      </p>

      <h2>AB-900 tests administration, not usage</h2>
      <p>
        Look closely at what AB-900 actually assesses: identifying core
        Microsoft 365 objects and services, data protection and governance
        for Copilot and agents, and "basic administrative tasks for
        Copilot and agents." That's an IT-admin exam — the target candidate
        already knows Microsoft 365 admin centers, Entra, Purview, and
        conditional access policies. It certifies someone can{" "}
        <em>govern</em> a Copilot rollout. It says nothing about whether the
        marketing team down the hall is actually any good at using Copilot
        to draft a brief.
      </p>

      <h2>Applied Skills tests generic scenarios, not your work</h2>
      <BlogImage imageKey="microsoft-copilot-certification/02-company-workflows" />
      <p>
        The Applied Skills lab is a genuine practical assessment — a real
        lab environment, not a multiple-choice quiz, which is more than
        most vendor "certifications" offer. But look at what it evaluates:
        drafting documents in Word, presentations in PowerPoint, email
        replies in Outlook, and data exploration in Excel — canned,
        generic productivity scenarios designed to work the same way for
        every test-taker everywhere.
      </p>
      <p>
        That's useful as a baseline. It's not the same question as: can
        this specific person on my team use Copilot well against{" "}
        <em>our</em> documents, <em>our</em> client communications, and{" "}
        <em>our</em> actual reporting formats — the things that determine
        whether Copilot is actually saving anyone time or just producing
        plausible-looking drafts someone still has to rewrite.
      </p>

      <h2>The pattern, again</h2>
      <p>
        This is the same gap we found looking at{" "}
        <Link to="/blog/claude-code-certification" className="text-brand-orange underline underline-offset-4">
          Anthropic's Claude certification program
        </Link>
        , just shaped differently. Anthropic's exam is narrow but
        gate-kept to partner organizations. Microsoft's exams are open to
        anyone but scoped to administration or generic scenarios rather
        than a specific team's specific work. Neither one answers the
        question most companies actually have: "can the person in front of
        me use this tool well, on the work we actually do?"
      </p>

      <h2>What to test for instead</h2>
      <BlogImage imageKey="microsoft-copilot-certification/03-contextual-rubric" />
      <p>
        If what you need is proof that specific employees can use Copilot
        well in your business — not an admin credential, not a generic lab
        scenario — the assessment needs to be built around your own
        workflows and reviewed by someone who knows what a good result
        looks like for your business, not a fixed answer key. That's the
        model behind{" "}
        <Link to="/certifications/microsoft-copilot" className="text-brand-orange underline underline-offset-4">
          our Microsoft Copilot certification track
        </Link>
        : scenario-based review scored against how your team actually
        works, not a generic script. If Copilot isn't the tool in question,
        see the{" "}
        <Link to="/certifications" className="text-brand-orange underline underline-offset-4">
          full list of published tracks
        </Link>
        , or{" "}
        <Link to="/contact" className="text-brand-orange underline underline-offset-4">
          talk to a program lead
        </Link>{" "}
        about scoping something specific to your workflows.
      </p>
    </>
  )
}

import WorkflowDiagram from "../ui/WorkflowDiagram";
import Reveal from "../ui/Reveal";

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 md:py-28 px-5 sm:px-8 bg-bg">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-ember" />
            <span className="text-sm text-ember-deep font-medium">
              Watch one run
            </span>
          </div>

          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl text-ink mb-5 text-balance">
              This is what &quot;automated&quot; actually looks like.
            </h2>
            <p className="text-ink-soft leading-relaxed">
              A lead-to-close flow I built as a working demo. It&apos;s my own
              asset, running on dummy data. A lead comes in, lands in the CRM, gets
              assigned, gets a text, gets a follow-up. Nobody touched anything.
            </p>
          </div>

          <WorkflowDiagram />

          <div className="grid md:grid-cols-3 gap-x-10 gap-y-6 mt-10">
            {[
              {
                title: "Fires the moment a lead arrives",
                description:
                  "Form fill, phone call, or referral: the flow starts before anyone's seen the notification.",
              },
              {
                title: "Branches on real conditions",
                description:
                  "Won, not ready, no-show: each path gets its own next step instead of falling into a pile.",
              },
              {
                title: "Everything stays in sync",
                description:
                  "CRM, calendar, email, books. One entry, everywhere it needs to be. No copy-paste.",
              },
            ].map((h) => (
              <div key={h.title} className="border-t border-bg-border pt-5">
                <div className="text-sm text-ink font-medium mb-2">
                  {h.title}
                </div>
                <div className="text-sm text-ink-muted leading-relaxed">
                  {h.description}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

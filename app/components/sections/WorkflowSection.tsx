import WorkflowDiagram from "../ui/WorkflowDiagram";

export default function WorkflowSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
            See It in Action
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-4">
            Real automation workflows
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Here&apos;s a real example: a fully automated lead-to-close pipeline.
            Every step—from the first inquiry to deal closed—happens
            automatically, with zero manual work.
          </p>
        </div>

        {/* Workflow diagram */}
        <div className="relative">
          {/* Floating badge */}
          <div className="absolute -top-4 right-6 z-10 bg-accent-warm text-white px-4 py-2 rounded-card shadow-soft-warm text-xs font-semibold tracking-wider uppercase">
            Live Workflow
          </div>
          <WorkflowDiagram />
        </div>

        {/* Supporting callouts */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              accent: "primary",
              title: "Triggered Instantly",
              description:
                "The moment a lead fills out a form, calls, or is entered into your CRM—the workflow fires.",
            },
            {
              accent: "warm",
              title: "Conditional Logic",
              description:
                "Workflows branch based on real data—won deals, lost deals, no-shows—each gets the right response.",
            },
            {
              accent: "bright",
              title: "Fully Connected",
              description:
                "Your CRM, email, calendar, and accounting tools all stay in sync—no copy-pasting, ever.",
            },
          ].map((h) => (
            <div
              key={h.title}
              className={`bg-bg-elevated rounded-card p-5 border-t-2 ${
                h.accent === "primary"
                  ? "border-primary"
                  : h.accent === "warm"
                    ? "border-accent-warm"
                    : "border-accent-bright"
              }`}
            >
              <div
                className={`font-display font-semibold text-sm mb-2 ${
                  h.accent === "primary"
                    ? "text-primary"
                    : h.accent === "warm"
                      ? "text-accent-warm"
                      : "text-accent-bright-dark"
                }`}
              >
                {h.title}
              </div>
              <div className="text-sm text-slate-500 leading-relaxed">
                {h.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

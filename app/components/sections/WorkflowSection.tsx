import Image from "next/image";

const highlights = [
  {
    accent: "primary",
    title: "Multi-Step Process",
    description:
      "Workflows handle complex logic with conditional branching and error handling.",
  },
  {
    accent: "warm",
    title: "Platform Integration",
    description:
      "Connect CRMs, databases, APIs, and communication tools seamlessly.",
  },
  {
    accent: "bright",
    title: "Real-Time Execution",
    description:
      "Triggers run instantly when events occur in your systems—no delays.",
  },
];

const accentClasses: Record<string, string> = {
  primary: "text-primary border-t-2 border-primary/30",
  warm: "text-accent-warm border-t-2 border-accent-warm/30",
  bright: "text-accent-bright-dark border-t-2 border-accent-bright/30",
};

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
            Here&apos;s a real example of one of our automation workflows. Each
            workflow connects your tools, processes data, and executes
            tasks automatically—no manual work required.
          </p>
        </div>

        {/* Workflow display */}
        <div className="relative">
          <div className="bg-bg-elevated rounded-card p-8 shadow-float overflow-hidden">
            {/* Floating badge */}
            <div className="absolute top-6 right-6 z-10 bg-accent-warm text-white px-4 py-2 rounded-card shadow-soft-warm text-xs font-semibold tracking-wider uppercase">
              Real Workflow
            </div>

            {/* Image */}
            <div className="relative w-full h-72 md:h-96 rounded-card overflow-hidden bg-bg-secondary">
              <Image
                src="/images/workflow-dashboard.png"
                alt="Real automation workflow example showing complex integrations"
                fill
                className="object-contain object-center"
                style={{ filter: "brightness(1.05) contrast(1.02)" }}
              />
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className={`bg-bg-paper rounded-card p-5 ${accentClasses[h.accent]}`}
                >
                  <div
                    className={`font-display font-semibold text-sm mb-2 ${h.accent === "bright" ? "text-accent-bright-dark" : h.accent === "warm" ? "text-accent-warm" : "text-primary"}`}
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
        </div>
      </div>
    </section>
  );
}

import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const primaryPoints = [
  {
    title: "Connect the systems you already have",
    body: "Your CRM, your spreadsheets, your accounting software, your field tools, all talking to each other, so a job entered once shows up everywhere it needs to.",
  },
  {
    title: "Automate the busywork between them",
    body: "New lead comes in? It's in the CRM, assigned, and the first text is out before anyone touches a keyboard. Quote sent? Follow-ups happen on schedule without you remembering.",
  },
  {
    title: "Keep it running",
    body: "Automations break quietly when a tool changes. I build things that tell me when they fail, and I stick around to fix them.",
  },
];

const alsoBuild = [
  "Simple internal tools and dashboards when a spreadsheet stops being enough",
  "A website that actually captures and routes leads (this one's mine)",
  "An AI phone answerer. I've built a working prototype, happy to talk about whether it fits",
];

export default function WhatIDoSection() {
  return (
    <section id="what-i-do" className="py-20 md:py-28 px-5 sm:px-8 bg-bg">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-ember" />
            <span className="text-sm text-ember-bright font-medium">
              What I do
            </span>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: the offer */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl text-cream mb-6 text-balance">
                One job: make your systems work like one system.
              </h2>
              <p className="text-ink-soft leading-relaxed mb-8">
                Systems integration and ops automation for trades companies.
                That&apos;s the whole offer. Not a platform, not a subscription.
                Just me, building the connections your business is missing.
              </p>
              <Button
                variant="primary"
                size="md"
                href="https://cal.com/luke-pauga-hlurq5/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-min call
              </Button>
            </div>

            {/* Right: what that means */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {primaryPoints.map((point) => (
                  <div
                    key={point.title}
                    className="border-t border-bg-border pt-6"
                  >
                    <h3 className="text-lg text-cream mb-2">{point.title}</h3>
                    <p className="text-ink-soft text-sm leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Secondary capabilities, deliberately quiet */}
              <div className="mt-12 bg-bg-raised border border-bg-border rounded-lg p-6">
                <div className="text-sm text-cream mb-3 font-medium">
                  Things I can also build, if the job calls for it
                </div>
                <ul className="space-y-2">
                  {alsoBuild.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-ink-muted leading-relaxed flex gap-3"
                    >
                      <span className="text-bg-border mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

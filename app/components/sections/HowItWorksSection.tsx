import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const steps = [
  {
    number: "01",
    title: "We talk for 30 minutes",
    body: "You walk me through how a job moves through your business, from first call to final invoice, and where things slip. If I can't help, I'll say so on the call.",
  },
  {
    number: "02",
    title: "I map it and build the fix",
    body: "I find the one connection worth the most and quote it at a fixed price. Then I build it, usually in a few weeks, not months. You'll see it working on your real jobs before you pay the balance.",
  },
  {
    number: "03",
    title: "You run it, I keep it running",
    body: "You get a plain-English walkthrough of what's connected and how. When a tool updates and something breaks, I hear about it before you do, and I fix it.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-5 sm:px-8 bg-bg">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="rule-heavy pb-2 mb-8">
            <span className="eyebrow">How it works</span>
          </div>

          <h2 className="text-3xl md:text-4xl text-ink mb-14 max-w-2xl text-balance">
            No discovery phases. No retainers you forgot you&apos;re paying.
          </h2>

          <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-rule pt-6">
                <div className="font-display text-3xl text-deep mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl text-ink mb-3">{step.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Button
              variant="primary"
              size="lg"
              href="https://cal.com/luke-pauga-hlurq5/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start with the 30-min call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

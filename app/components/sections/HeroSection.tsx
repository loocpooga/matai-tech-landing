import Button from "../ui/Button";

const verticals = ["Roofing", "Solar", "HVAC", "Windows", "Pools"];

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-5 sm:px-8 bg-bg overflow-hidden">
      {/* Ambient: faint blueprint grid + warm ember glow */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div
        className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(192,90,43,0.14) 0%, transparent 65%)",
        }}
      />
      <div className="max-w-content mx-auto relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7 animate-fade-up">
            <span className="w-8 h-px bg-ember" />
            <span className="text-sm text-ember-bright font-medium">
              Automation for trades businesses
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl text-cream mb-7 text-balance animate-fade-up delay-100">
            Your team is doing work your software should be doing.
          </h1>

          <p className="text-lg md:text-xl text-ink-soft mb-10 leading-relaxed max-w-2xl animate-fade-up delay-200">
            I&apos;m Luke. I connect the CRMs, spreadsheets, and tools your
            business already runs, so leads stop slipping and nobody&apos;s
            retyping the same job into three places.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-14 animate-fade-up delay-300">
            <Button
              variant="primary"
              size="lg"
              href="https://cal.com/luke-pauga-hlurq5/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 30-min call
            </Button>
            <Button variant="ghost" size="lg" href="#workflow">
              See a live workflow
            </Button>
          </div>

          {/* Verticals served */}
          <div className="flex items-center gap-x-4 gap-y-2 flex-wrap animate-fade-up delay-400">
            <span className="text-xs text-ink-muted">Built for</span>
            {verticals.map((v, i) => (
              <span key={v} className="flex items-center gap-4">
                <span className="text-sm text-ink-soft">{v}</span>
                {i < verticals.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-bg-border" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

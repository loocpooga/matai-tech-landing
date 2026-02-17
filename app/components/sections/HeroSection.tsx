"use client";

import Button from "../ui/Button";
import StatCard from "../ui/StatCard";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-paper overflow-hidden">
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      {/* Decorative circle - top right */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
      {/* Decorative circle - bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-warm/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 animate-fade-up">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border border-primary/15">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Business Automation & Data Engineering
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-text-primary mb-6 leading-[1.05]">
              Save Time &amp; Money with{" "}
              <span className="relative inline-block">
                <span className="text-primary">Intelligent</span>
              </span>{" "}
              Automation
            </h1>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl delay-200 animate-fade-up">
              We help business owners automate tedious tasks, gain data
              visibility, and eliminate inefficiencies—so you can focus on what
              matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 delay-400 animate-fade-up">
              <Button
                variant="primary"
                size="lg"
                href="https://cal.com/luke-pauga-hlurq5/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
              <Button variant="outline" size="lg" href="#services">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Floating accent tag */}
              <div className="absolute -top-4 -right-4 z-10 bg-accent-warm text-white px-4 py-2 rounded-card shadow-soft-warm text-xs font-semibold tracking-wider uppercase rotate-2">
                Proven Results
              </div>

              <div className="bg-bg-secondary rounded-card p-6 shadow-float border border-slate-100">
                <div className="space-y-4">
                  <StatCard
                    value="15+"
                    label="Hours Saved Every Week"
                    accent="primary"
                    size="lg"
                    animate
                    delay={0}
                  />
                  <StatCard
                    value="90%"
                    label="Reduction in Manual Errors"
                    accent="warm"
                    size="lg"
                    animate
                    delay={200}
                  />
                  <StatCard
                    value="50+"
                    label="Platform Integrations"
                    accent="bright"
                    size="lg"
                    animate
                    delay={400}
                  />
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xs text-slate-400 font-mono">
                    Real metrics from client engagements
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { useInView } from "../../hooks/useInView";
import Badge from "../ui/Badge";

const techTagClass =
  "px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-xs font-medium rounded-badge hover:bg-slate-100 transition-colors";

export default function CaseStudiesSection() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: cardsRef, isInView: cardsInView } = useInView(0.1);

  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 ${headerInView ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-4">
            Real results for real businesses
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            See how we&apos;ve helped businesses transform their operations.
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className={`space-y-8 ${cardsInView ? "animate-fade-up delay-200" : "opacity-0"}`}
        >
          {/* Case Study 1 - Featured */}
          <div className="bg-bg-elevated rounded-card p-8 md:p-10 shadow-float relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-warm" />

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="warm" className="mb-5">
                  Pool Construction
                </Badge>

                {/* Metric highlight */}
                <div className="mb-6">
                  <div className="font-mono text-5xl font-bold text-primary mb-1">
                    10+ Hours
                  </div>
                  <div className="text-lg text-text-primary font-semibold">
                    Saved Every Week
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold text-text-primary mb-4">
                  Custom Project Tracker for Marquis Pools
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Built a custom web application to manage estimates and
                  construction projects. Automated pipeline tracking, reminders,
                  and status updates replaced manual spreadsheets, eliminating
                  double-entry and missed follow-ups.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Automation"].map((tag) => (
                    <span key={tag} className={techTagClass}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project visual placeholder */}
              <div className="bg-bg-secondary rounded-card h-56 flex items-center justify-center border border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
                <div className="text-center relative z-10">
                  <div className="text-4xl mb-3">📊</div>
                  <div className="text-slate-500 font-medium text-sm">
                    Project Dashboard
                  </div>
                  <div className="font-mono text-xs text-slate-400 mt-1">
                    Custom Web App
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies 2 & 3 */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Case Study 2 - Larger */}
            <div className="lg:col-span-3 bg-bg-elevated rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20" />

              <Badge variant="primary" className="mb-5">
                Operations
              </Badge>

              <div className="mb-5">
                <div className="font-mono text-4xl font-bold text-primary mb-1">
                  15+ Hours
                </div>
                <div className="text-base text-text-primary font-semibold">
                  Saved per Week
                </div>
              </div>

              <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
                Monday.com Integration Eliminates Manual Data Entry
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Connected Monday.com project boards to accounting software and
                customer database. 90% reduction in errors.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Monday.com", "APIs", "Database"].map((tag) => (
                  <span key={tag} className={techTagClass}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study 3 - Smaller */}
            <div className="lg:col-span-2 bg-bg-elevated rounded-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-warm/30" />

              <Badge variant="warm" className="mb-5">
                Sales
              </Badge>

              <div className="mb-4">
                <div className="font-mono text-4xl font-bold text-accent-warm mb-1">
                  40%
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  More Deals Closed
                </div>
              </div>

              <h3 className="text-base font-display font-semibold text-text-primary mb-3">
                Salesforce Integration
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Automated lead assignment and follow-ups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

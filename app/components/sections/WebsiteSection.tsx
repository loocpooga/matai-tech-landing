"use client";

import React from "react";
import { useInView } from "../../hooks/useInView";
import Button from "../ui/Button";

const features = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: "Lead capture forms wired directly to your CRM",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    label: "Local SEO optimized for your service area",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    label: "Mobile-first, fast-loading on every device",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Triggers your automation workflows automatically",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "Built-in analytics and conversion tracking",
  },
];

const recentLeads = [
  { name: "James R.", service: "Roof Inspection", time: "2m ago" },
  { name: "Maria S.", service: "Free Estimate", time: "11m ago" },
  { name: "Tom W.", service: "Emergency Repair", time: "34m ago" },
];

export default function WebsiteSection() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: contentRef, isInView: contentInView } = useInView(0.1);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-elevated overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 ${headerInView ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
            Web Design
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-4">
            Websites built to turn visitors into customers
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Most contractor websites look fine but do nothing. We build sites
            designed from the ground up to capture leads—and plug them straight
            into your CRM and automation workflows.
          </p>
        </div>

        {/* Content grid */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-2 gap-16 items-center ${contentInView ? "animate-fade-up delay-200" : "opacity-0"}`}
        >
          {/* Left: Features */}
          <div>
            <ul className="space-y-4 mb-10">
              {features.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-card bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <span className="text-slate-600 text-sm leading-relaxed pt-1.5">
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stat callouts */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-bg-paper rounded-card p-5 border border-slate-100">
                <div className="font-mono text-2xl font-bold text-primary mb-1">3×</div>
                <div className="text-xs text-slate-500 leading-snug">
                  More leads vs. typical contractor sites
                </div>
              </div>
              <div className="bg-bg-paper rounded-card p-5 border border-slate-100">
                <div className="font-mono text-2xl font-bold text-accent-warm mb-1">&lt; 2s</div>
                <div className="text-xs text-slate-500 leading-snug">
                  Load time on mobile (matters for SEO)
                </div>
              </div>
            </div>

            <Button variant="primary" size="md" href="#contact">
              Get a free site audit
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>

          {/* Right: Browser mockup */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-card blur-2xl pointer-events-none" />

            <div className="relative bg-bg-paper rounded-card shadow-float border border-slate-200 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded border border-slate-200 px-3 py-1 text-xs font-mono text-slate-400 text-center">
                  yourcompany.com
                </div>
              </div>

              {/* Simulated website */}
              <div className="p-6 space-y-4">
                {/* Site hero bar */}
                <div className="bg-primary rounded-card p-5 text-white">
                  <div className="text-xs font-mono uppercase tracking-widest text-primary-light opacity-70 mb-1">
                    Roofing &amp; Exterior
                  </div>
                  <div className="text-lg font-display font-semibold leading-snug mb-3">
                    Get a Free Roof Inspection Today
                  </div>
                  <div className="h-8 bg-accent-warm rounded-card flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">
                      Request a Free Quote →
                    </span>
                  </div>
                </div>

                {/* Lead form */}
                <div className="bg-bg-elevated border border-slate-100 rounded-card p-4 space-y-2">
                  <div className="text-xs font-semibold text-text-primary mb-3">
                    Quick Contact Form
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-7 bg-slate-100 rounded border border-slate-200" />
                    <div className="h-7 bg-slate-100 rounded border border-slate-200" />
                  </div>
                  <div className="h-7 bg-slate-100 rounded border border-slate-200 w-full" />
                  <div className="h-7 bg-slate-100 rounded border border-slate-200 w-full" />
                  <div className="h-8 bg-primary rounded flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Send My Request</span>
                  </div>
                </div>

                {/* Live leads panel */}
                <div className="border border-slate-100 rounded-card overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 flex items-center justify-between border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-600">
                      Recent Leads
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-mono text-[10px] text-green-600">LIVE</span>
                    </div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {recentLeads.map((lead) => (
                      <div key={lead.name} className="px-4 py-2.5 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-semibold text-text-primary">
                            {lead.name}
                          </div>
                          <div className="text-[10px] text-slate-400">{lead.service}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-400">
                            {lead.time}
                          </span>
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-50 border-t border-green-100 px-4 py-2 text-[10px] text-green-700 font-mono">
                    ✓ All leads synced to CRM automatically
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { useInView } from "../../hooks/useInView";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const services = [
  {
    id: "analytics",
    title: "Data Visibility & Analytics",
    description:
      "Transform scattered data into actionable insights with custom dashboards and real-time reporting.",
    accent: "primary" as const,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    id: "integration",
    title: "System Integration",
    description:
      "Connect your existing tools and platforms for seamless, efficient workflows across your business.",
    accent: "warm" as const,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
];

const iconBg = {
  primary: "bg-primary/10 text-primary",
  warm: "bg-accent-warm/10 text-accent-warm",
};

export default function ServicesSection() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: gridRef, isInView: gridInView } = useInView(0.1);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 ${headerInView ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-4">
            Automation solutions built for your business
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Comprehensive automation tailored to your specific workflow—not
            off-the-shelf templates.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-12 gap-8 ${gridInView ? "animate-fade-up delay-200" : "opacity-0"}`}
        >
          {/* Featured service */}
          <div className="lg:col-span-7 bg-bg-elevated rounded-card p-10 shadow-float relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-warm" />

            <div className="flex items-start gap-4 mb-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-card flex items-center justify-center flex-shrink-0 text-primary">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <Badge variant="bright" className="mb-3">
                  Most Popular
                </Badge>
                <h3 className="text-2xl font-display font-semibold text-text-primary">
                  Process Automation
                </h3>
              </div>
            </div>

            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Eliminate repetitive manual tasks with intelligent automation
              workflows. From data entry to report generation, we build
              solutions that work 24/7.
            </p>

            {/* Stat highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/5 rounded-card p-4 border border-primary/10">
                <div className="font-mono text-2xl font-bold text-primary mb-1">
                  15 hrs
                </div>
                <div className="text-sm text-slate-500">
                  Avg. time saved per week
                </div>
              </div>
              <div className="bg-accent-warm/5 rounded-card p-4 border border-accent-warm/10">
                <div className="font-mono text-2xl font-bold text-accent-warm mb-1">
                  90%
                </div>
                <div className="text-sm text-slate-500">
                  Reduction in manual errors
                </div>
              </div>
            </div>

            <Button variant="outline" size="md" href="#contact">
              Learn more about automation
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>

          {/* Secondary services */}
          <div className="lg:col-span-5 space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-bg-elevated rounded-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-card flex items-center justify-center ${iconBg[service.accent]}`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

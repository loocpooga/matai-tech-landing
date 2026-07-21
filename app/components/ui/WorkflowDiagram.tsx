"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView";

const steps = [
  { id: "trigger", label: "New lead", sublabel: "Form, call, or referral" },
  { id: "crm", label: "CRM contact", sublabel: "Created automatically" },
  { id: "assign", label: "Rep assigned", sublabel: "Round-robin + notified" },
  { id: "text", label: "First text out", sublabel: "Under 30 seconds" },
  { id: "followup", label: "Follow-up set", sublabel: "Scheduled +3 days" },
];

const outcomes = [
  { id: "won", label: "Deal won", detail: "Contract sent, deposit tracked" },
  { id: "later", label: "Not ready", detail: "Re-engagement flow starts" },
];

// One full run: steps 0..4, then the branch (index 5), then hold and restart
const BRANCH_INDEX = steps.length;
const HOLD_TICKS = 2;

export default function WorkflowDiagram() {
  const { ref, isInView } = useInView(0.3);
  const [tick, setTick] = useState(-1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isInView) return;
    intervalRef.current = setInterval(() => {
      setTick((t) => {
        const next = t + 1;
        return next > BRANCH_INDEX + HOLD_TICKS ? 0 : next;
      });
    }, 1100);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView]);

  const activeStep = Math.min(tick, BRANCH_INDEX);
  const branchReached = tick >= BRANCH_INDEX;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-ink rounded-lg p-6 md:p-8 overflow-x-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 min-w-max md:min-w-0 gap-6">
        <div className="flex items-center gap-3">
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isInView ? "bg-ember animate-pulse" : "bg-on-dark-border"
            }`}
          />
          <span className="text-xs text-on-dark-soft">
            Lead-to-close workflow. Demo run, dummy data
          </span>
        </div>
        <span className="font-mono text-[10px] text-on-dark-soft/70">
          runs 24/7 · 0 manual steps
        </span>
      </div>

      {/* Main flow */}
      <div className="flex items-stretch min-w-max mb-8">
        {steps.map((step, i) => {
          const isDone = activeStep > i;
          const isActive = activeStep === i;
          return (
            <div key={step.id} className="flex items-center">
              {/* Node */}
              <div
                className={`flex flex-col rounded-md px-3.5 py-3 border min-w-[118px] transition-all duration-500 ${
                  isActive
                    ? "border-ember bg-ember/10"
                    : isDone
                      ? "border-on-dark-border bg-ink-deep"
                      : "border-on-dark-border/60 bg-transparent"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                      isActive
                        ? "bg-ember"
                        : isDone
                          ? "bg-on-dark-soft"
                          : "bg-on-dark-border"
                    }`}
                  />
                  <span
                    className={`text-[11px] font-medium leading-tight transition-colors duration-500 ${
                      isActive
                        ? "text-on-dark"
                        : isDone
                          ? "text-on-dark"
                          : "text-on-dark-soft"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                <span className="text-[9px] text-on-dark-soft leading-tight pl-3.5">
                  {step.sublabel}
                </span>
              </div>

              {/* Connector */}
              {i < steps.length && (
                <div className="w-7 h-px relative flex-shrink-0 bg-on-dark-border">
                  <div
                    className="absolute inset-y-0 left-0 bg-ember transition-all duration-700"
                    style={{ width: activeStep > i ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* Branch outcomes */}
        <div className="flex flex-col justify-center gap-2">
          {outcomes.map((out, i) => {
            const litUp = branchReached;
            const isWon = out.id === "won";
            return (
              <div key={out.id} className="flex items-center">
                <div
                  className={`w-4 h-px flex-shrink-0 transition-colors duration-700 ${
                    litUp ? "bg-ember" : "bg-on-dark-border"
                  } ${i === 0 ? "-rotate-12" : "rotate-12"}`}
                />
                <div
                  className={`flex flex-col rounded-md px-3.5 py-2.5 border min-w-[150px] transition-all duration-500 ${
                    litUp && isWon
                      ? "border-ember bg-ember/10"
                      : litUp
                        ? "border-on-dark-border bg-ink-deep"
                        : "border-on-dark-border/60"
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium transition-colors duration-500 ${
                      litUp ? "text-on-dark" : "text-on-dark-soft"
                    }`}
                  >
                    {out.label}
                  </span>
                  <span className="text-[9px] text-on-dark-soft leading-tight">
                    {out.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats bar */}
      <div className="pt-5 border-t border-on-dark-border flex items-center gap-x-6 gap-y-2 flex-wrap min-w-max md:min-w-0">
        {[
          { label: "First response", value: "< 30 sec" },
          { label: "Steps automated", value: "7" },
          { label: "Typing required", value: "none" },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-on-dark-soft">
              {stat.label}:
            </span>
            <span className="font-mono text-[11px] text-ember font-semibold">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
      className="bg-paper rounded border border-rule p-6 md:p-8 overflow-x-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 min-w-max md:min-w-0 gap-6 rule-heavy pb-2">
        <div className="flex items-center gap-3">
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isInView ? "bg-deep animate-pulse" : "bg-rule"
            }`}
          />
          <span className="eyebrow">Lead-to-close workflow</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.09em] uppercase text-ink-soft">
          Demo run · dummy data · 24/7
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
                className={`flex flex-col rounded px-3.5 py-3 border min-w-[122px] transition-all duration-500 ${
                  isActive
                    ? "border-deep bg-deep"
                    : isDone
                      ? "border-rule bg-band"
                      : "border-rule bg-transparent"
                }`}
              >
                <span
                  className={`text-[11px] font-medium leading-tight transition-colors duration-500 ${
                    isActive ? "text-paper" : isDone ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {step.label}
                </span>
                <span
                  className={`font-mono text-[9px] leading-tight mt-1 transition-colors duration-500 ${
                    isActive ? "text-paper/70" : "text-ink-soft"
                  }`}
                >
                  {step.sublabel}
                </span>
              </div>

              {/* Connector */}
              <div className="w-7 h-px relative flex-shrink-0 bg-rule">
                <div
                  className="absolute inset-y-0 left-0 bg-deep transition-all duration-700"
                  style={{ width: activeStep > i ? "100%" : "0%" }}
                />
              </div>
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
                    litUp ? "bg-deep" : "bg-rule"
                  } ${i === 0 ? "-rotate-12" : "rotate-12"}`}
                />
                <div
                  className={`flex flex-col rounded px-3.5 py-2.5 border min-w-[160px] transition-all duration-500 ${
                    litUp && isWon
                      ? "border-deep bg-deep"
                      : litUp
                        ? "border-rule bg-band"
                        : "border-rule"
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium transition-colors duration-500 ${
                      litUp && isWon
                        ? "text-paper"
                        : litUp
                          ? "text-ink"
                          : "text-ink-soft"
                    }`}
                  >
                    {out.label}
                  </span>
                  <span
                    className={`font-mono text-[9px] leading-tight mt-0.5 ${
                      litUp && isWon ? "text-paper/70" : "text-ink-soft"
                    }`}
                  >
                    {out.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats bar */}
      <div className="pt-5 border-t border-rule flex items-center gap-x-6 gap-y-2 flex-wrap min-w-max md:min-w-0">
        {[
          { label: "First response", value: "< 30 sec" },
          { label: "Steps automated", value: "7" },
          { label: "Typing required", value: "none" },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.09em] uppercase text-ink-soft">
              {stat.label}:
            </span>
            <span className="font-mono text-[11px] text-deep font-semibold">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

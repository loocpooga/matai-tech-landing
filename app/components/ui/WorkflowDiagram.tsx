const steps = [
  {
    id: "trigger",
    type: "trigger",
    icon: "⚡",
    label: "New Lead",
    sublabel: "Webhook trigger",
    color: "#0A6E6E",
    bg: "#0A6E6E12",
  },
  {
    id: "crm",
    type: "action",
    icon: "👤",
    label: "CRM Contact",
    sublabel: "Auto-created",
    color: "#3B82F6",
    bg: "#3B82F612",
  },
  {
    id: "assign",
    type: "action",
    icon: "📋",
    label: "Sales Rep",
    sublabel: "Assigned + notified",
    color: "#8B5CF6",
    bg: "#8B5CF612",
  },
  {
    id: "email",
    type: "action",
    icon: "✉️",
    label: "Welcome Email",
    sublabel: "Sent instantly",
    color: "#F59E0B",
    bg: "#F59E0B12",
  },
  {
    id: "followup",
    type: "action",
    icon: "🔔",
    label: "Follow-Up",
    sublabel: "Scheduled +3 days",
    color: "#EC4899",
    bg: "#EC489912",
  },
];

const outcomes = [
  {
    id: "won",
    icon: "✅",
    label: "Deal Won",
    detail: "Contract sent, deposit tracked",
    color: "#10B981",
    bg: "#10B98112",
  },
  {
    id: "lost",
    icon: "🔄",
    label: "Not Ready",
    detail: "Re-engagement flow starts",
    color: "#64748B",
    bg: "#64748B12",
  },
];

function Arrow({ color = "#CBD5E1" }: { color?: string }) {
  return (
    <div className="flex items-center flex-shrink-0">
      <div className="w-6 h-px" style={{ backgroundColor: color }} />
      <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
        <path d="M0 0L6 4L0 8V0Z" fill={color} />
      </svg>
    </div>
  );
}

export default function WorkflowDiagram() {
  return (
    <div className="bg-bg-dark rounded-card p-6 md:p-8 overflow-x-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 min-w-max md:min-w-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            Lead-to-Close Automation
          </span>
        </div>
        <div className="flex items-center gap-2 ml-6">
          <span className="font-mono text-[10px] text-slate-600">runs 24/7</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="font-mono text-[10px] text-slate-600">0 manual steps</span>
        </div>
      </div>

      {/* Main flow */}
      <div className="flex items-center gap-0 mb-6 min-w-max">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center">
            {/* Node */}
            <div
              className="flex flex-col items-center rounded-card px-3 py-2.5 border min-w-[80px]"
              style={{
                backgroundColor: step.bg,
                borderColor: `${step.color}30`,
              }}
            >
              <span className="text-lg mb-1">{step.icon}</span>
              <span
                className="text-[10px] font-semibold leading-tight text-center"
                style={{ color: step.color }}
              >
                {step.label}
              </span>
              <span className="text-[9px] text-slate-500 text-center mt-0.5 leading-tight">
                {step.sublabel}
              </span>
            </div>

            {/* Arrow (not after last) */}
            {i < steps.length - 1 && <Arrow />}
          </div>
        ))}

        {/* Branch indicator */}
        <div className="flex items-center ml-0">
          <Arrow />
          <div className="flex flex-col items-center gap-1 ml-0">
            <div
              className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded border border-slate-700"
              style={{ fontSize: "9px" }}
            >
              IF / ELSE
            </div>
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div className="flex items-start gap-4 ml-[calc(80px*5+24px*5+32px)] min-w-max">
        {outcomes.map((out, i) => (
          <div key={out.id} className="flex flex-col items-center">
            {/* Branch line */}
            <div className="flex items-center mb-1">
              <div className="w-px h-3 bg-slate-700" />
            </div>
            <div
              className="flex flex-col items-center rounded-card px-3 py-2.5 border min-w-[100px]"
              style={{
                backgroundColor: out.bg,
                borderColor: `${out.color}30`,
              }}
            >
              <span className="text-base mb-1">{out.icon}</span>
              <span
                className="text-[10px] font-semibold text-center"
                style={{ color: out.color }}
              >
                {out.label}
              </span>
              <span className="text-[9px] text-slate-500 text-center mt-0.5 leading-tight">
                {out.detail}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-6 flex-wrap">
        {[
          { label: "Avg. response time", value: "< 30 sec" },
          { label: "Steps automated", value: "7 actions" },
          { label: "Manual work replaced", value: "~45 min/lead" },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span className="font-mono text-xs text-slate-400">{stat.label}:</span>
            <span className="font-mono text-xs text-primary font-bold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const columns = [
  {
    label: "Contract Deposit",
    color: "#3B82F6",
    count: 0,
    cards: [],
  },
  {
    label: "Pre-Construction",
    color: "#A855F7",
    count: 1,
    cards: [
      {
        name: "S. Mitchell",
        type: "New Build",
        amount: "$182,315",
        payments: "1/1 paid",
        daysOpen: 12,
      },
    ],
  },
  {
    label: "In Progress",
    color: "#F59E0B",
    count: 4,
    cards: [
      {
        name: "J. Reynolds",
        type: "Remodel",
        amount: "$46,896",
        payments: "1/1 paid",
        daysOpen: 8,
      },
      {
        name: "D. Kaufman",
        type: "Remodel",
        amount: "$30,325",
        payments: "1/1 paid",
        daysOpen: 14,
      },
      {
        name: "Coastal Properties LLC",
        type: "New Build",
        amount: "$113,329",
        payments: "4/4 paid",
        daysOpen: 5,
      },
      {
        name: "M. Torres",
        type: "Remodel",
        amount: "$89,599",
        payments: "6/6 paid",
        daysOpen: 19,
      },
    ],
  },
  {
    label: "Final Invoice Sent",
    color: "#64748B",
    count: 0,
    cards: [],
  },
];

export default function ProjectPipeline() {
  return (
    <div className="bg-bg-secondary rounded-card overflow-hidden border border-slate-200 select-none">
      {/* App header */}
      <div className="bg-bg-elevated border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="font-mono text-xs text-slate-400 ml-2">
            project-pipeline.app
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-5 bg-slate-100 rounded" />
          <div className="w-20 h-5 bg-primary/15 rounded" />
        </div>
      </div>

      {/* Dashboard header */}
      <div className="px-5 pt-4 pb-3 bg-bg-elevated border-b border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-display font-semibold text-sm text-text-primary">
              Project Pipeline
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Track active projects from deposit to completion
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 border border-slate-200 rounded text-xs text-slate-500 bg-bg-paper font-medium">
              View Archived
            </div>
            <div className="px-3 py-1 bg-primary text-white rounded text-xs font-medium">
              + New Project
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
            Stalled (14+ days)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
            Awaiting Payment
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
            Invoice Needed
          </span>
          <span className="ml-auto text-slate-300">Total projects: 5</span>
        </div>
      </div>

      {/* Kanban columns */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-3">
          {columns.map((col) => (
            <div key={col.label} className="min-w-0">
              {/* Column header */}
              <div
                className="flex items-center justify-between px-3 py-2 rounded-t mb-2"
                style={{ backgroundColor: `${col.color}18`, borderTop: `2px solid ${col.color}` }}
              >
                <span className="text-[10px] font-semibold text-slate-600 truncate">
                  {col.label}
                </span>
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white flex-shrink-0"
                  style={{ backgroundColor: col.color }}
                >
                  {col.count}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-2">
                {col.cards.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-6 text-slate-300">
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <span className="text-[10px]">No projects in this stage</span>
                  </div>
                ) : (
                  col.cards.map((card) => (
                    <div
                      key={card.name}
                      className="bg-bg-elevated rounded p-2.5 border border-slate-100 shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-text-primary leading-tight">
                          {card.name}
                        </span>
                        {card.daysOpen >= 14 ? (
                          <span className="text-[9px] bg-red-50 text-red-500 px-1.5 py-0.5 rounded font-medium flex-shrink-0 ml-1">
                            {card.daysOpen}d
                          </span>
                        ) : (
                          <span className="text-[9px] bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded font-medium flex-shrink-0 ml-1">
                            {card.daysOpen}d
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 mb-1.5">{card.type}</div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-text-primary">
                          {card.amount}
                        </span>
                        <span className="text-[9px] text-slate-400">{card.payments}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

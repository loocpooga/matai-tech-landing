const columns = [
  {
    label: "Contract deposit",
    count: 0,
    cards: [],
  },
  {
    label: "Pre-construction",
    count: 1,
    cards: [
      {
        name: "S. Mitchell",
        type: "New build",
        amount: "$182,315",
        payments: "1/1 paid",
        daysOpen: 12,
      },
    ],
  },
  {
    label: "In progress",
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
        type: "New build",
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
    label: "Final invoice sent",
    count: 0,
    cards: [],
  },
];

export default function ProjectPipeline() {
  return (
    <div className="bg-bg-raised rounded-lg overflow-hidden border border-bg-border select-none">
      {/* App header */}
      <div className="bg-bg border-b border-bg-border px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-bg-border" />
          </div>
          <span className="font-mono text-xs text-ink-muted ml-2">
            project-pipeline.app
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-5 bg-bg-border/50 rounded" />
          <div className="w-20 h-5 bg-ember/15 rounded" />
        </div>
      </div>

      {/* Dashboard header */}
      <div className="px-5 pt-4 pb-3 border-b border-bg-border">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-sm text-cream font-medium">Project pipeline</h4>
            <p className="text-xs text-ink-muted mt-0.5">
              Every job from deposit to final invoice
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="px-3 py-1 border border-bg-border rounded text-xs text-ink-muted bg-bg">
              View archived
            </div>
            <div className="px-3 py-1 bg-ember text-white rounded text-xs font-medium">
              + New project
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-[10px] text-ink-muted flex-wrap">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-ember inline-block" />
            Stalled (14+ days)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-muted inline-block" />
            Awaiting payment
          </span>
          <span className="ml-auto hidden sm:inline">Total projects: 5</span>
        </div>
      </div>

      {/* Kanban columns */}
      <div className="p-4 overflow-x-auto">
        <div className="grid grid-cols-4 gap-3 min-w-[560px]">
          {columns.map((col) => (
            <div key={col.label} className="min-w-0">
              {/* Column header */}
              <div className="flex items-center justify-between px-3 py-2 mb-2 border-t-2 border-ink/20 bg-bg rounded-b">
                <span className="text-[10px] font-medium text-ink-soft truncate">
                  {col.label}
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-ink/10 text-ink-soft flex-shrink-0">
                  {col.count}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-2">
                {col.cards.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-6 text-bg-border">
                    <svg
                      className="w-6 h-6 mb-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span className="text-[10px] text-ink-muted">
                      Nothing in this stage
                    </span>
                  </div>
                ) : (
                  col.cards.map((card) => (
                    <div
                      key={card.name}
                      className="bg-bg rounded p-2.5 border border-bg-border"
                    >
                      <div className="flex items-start justify-between mb-1.5">
                        <span className="text-[11px] font-medium text-cream leading-tight">
                          {card.name}
                        </span>
                        {card.daysOpen >= 14 ? (
                          <span className="text-[9px] bg-ember/10 text-ember-bright px-1.5 py-0.5 rounded font-medium flex-shrink-0 ml-1">
                            {card.daysOpen}d
                          </span>
                        ) : (
                          <span className="text-[9px] bg-bg-border/40 text-ink-muted px-1.5 py-0.5 rounded font-medium flex-shrink-0 ml-1">
                            {card.daysOpen}d
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-ink-muted mb-1.5">
                        {card.type}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold text-cream">
                          {card.amount}
                        </span>
                        <span className="text-[9px] text-ink-muted">
                          {card.payments}
                        </span>
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

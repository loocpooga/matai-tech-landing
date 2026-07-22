import ProjectPipeline from "../ui/ProjectPipeline";
import Reveal from "../ui/Reveal";

export default function CaseStudySection() {
  return (
    <section id="proof" className="py-20 md:py-28 px-5 sm:px-8 bg-bg">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-ember" />
            <span className="text-sm text-ember-bright font-medium">
              Client work
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs text-ink-muted mb-3">
                Marquis Pools · pool construction
              </div>
              <h2 className="text-3xl md:text-4xl text-cream mb-6 text-balance">
                A pool builder&apos;s pipeline, out of the spreadsheet.
              </h2>
              <div className="space-y-4 text-ink-soft leading-relaxed">
                <p>
                  Marquis was running estimates and active builds out of
                  spreadsheets. Statuses went stale, payment milestones got
                  chased by memory, and every update meant retyping.
                </p>
                <p>
                  I built them a custom project tracker: every job moves from
                  deposit to final invoice on one board, payment milestones
                  update themselves, and stalled projects flag themselves before
                  they become problems.
                </p>
              </div>

              <div className="mt-8 border-t border-bg-border pt-6 flex items-baseline gap-3">
                <span className="font-display text-4xl text-ember-bright">
                  10+ hours
                </span>
                <span className="text-ink-soft text-sm">
                  of admin handed back to the team, every week
                </span>
              </div>
            </div>

            {/* Project pipeline mockup */}
            <div>
              <ProjectPipeline />
              <p className="text-xs text-ink-muted mt-3 text-center">
                The actual tracker, with example data
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "../ui/Reveal";

const pains = [
  {
    title: "Leads die in the inbox.",
    body: "Someone fills out your form on Friday afternoon. Nobody calls until Tuesday. By then they've booked with whoever answered first.",
  },
  {
    title: "The same job gets typed in three times.",
    body: "Once into the CRM, once into the schedule, once into the books. Three chances to fat-finger a number, every single job.",
  },
  {
    title: "Quotes go out and nothing follows.",
    body: "You send the estimate and hope. No reminder, no follow-up, no idea which quotes are still alive unless someone remembers to check.",
  },
  {
    title: "You're doing admin on Sunday night.",
    body: "Invoices, job statuses, chasing paperwork — the stuff that keeps the business running but nobody's paying you for.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 px-5 sm:px-8 bg-ink">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-ember" />
            <span className="text-sm text-on-dark-soft font-medium">
              Sound familiar?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl text-on-dark mb-14 max-w-2xl text-balance">
            The work is good. The systems around it are leaking.
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {pains.map((pain, i) => (
              <div
                key={pain.title}
                className="border-t border-on-dark-border pt-6"
              >
                <div className="text-xs text-on-dark-soft mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl text-on-dark mb-3">{pain.title}</h3>
                <p className="text-on-dark-soft text-sm leading-relaxed">
                  {pain.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

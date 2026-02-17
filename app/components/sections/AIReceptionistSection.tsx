import Button from "../ui/Button";

const callFlow = [
  { step: "01", label: "Call Received", detail: "Any time, any day" },
  { step: "02", label: "AI Answers", detail: "Natural conversation" },
  { step: "03", label: "Lead Qualified", detail: "Smart questions asked" },
  { step: "04", label: "Appointment Booked", detail: "Direct to calendar" },
  { step: "05", label: "CRM Updated", detail: "Zero manual entry" },
];

const techStack = ["Vapi", "n8n", "Supabase"];

export default function AIReceptionistSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-mesh-dark opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-bright/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-bright/10 text-accent-bright border border-accent-bright/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-accent-bright rounded-full animate-pulse" />
              New — AI Voice Receptionist
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 leading-[1.05]">
              Your business answers calls{" "}
              <span className="text-accent-bright">24/7</span>
              —without lifting a finger
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We&apos;ve built an AI-powered voice receptionist that handles
              inbound calls, qualifies leads, books appointments, and logs
              everything automatically. No voicemail. No missed opportunities.
              No extra staff.
            </p>

            {/* Key benefits */}
            <ul className="space-y-3 mb-10">
              {[
                "Speaks smoothly and naturally in conversation",
                "Books appointments directly into your calendar",
                "Logs every call and lead to your CRM automatically",
                "Sends SMS confirmations and follow-up reminders",
                "Escalates to a human when needed",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent-bright/15 text-accent-bright flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">
                Built on
              </span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button variant="secondary" size="lg" href="#contact">
              Get a Demo
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>

          {/* Right: Call flow visual */}
          <div>
            <div className="bg-slate-900 rounded-card p-6 border border-slate-800">
              {/* Phone UI header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-bright/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Incoming Call</div>
                    <div className="text-slate-500 text-xs font-mono">+1 (555) 000-0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-xs text-green-400">LIVE</span>
                </div>
              </div>

              {/* Call flow steps */}
              <div className="space-y-0">
                {callFlow.map((item, i) => (
                  <div key={item.step} className="flex items-start gap-4">
                    {/* Step indicator + line */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent-bright/15 border border-accent-bright/30 flex items-center justify-center">
                        <span className="font-mono text-[10px] font-bold text-accent-bright">
                          {item.step}
                        </span>
                      </div>
                      {i < callFlow.length - 1 && (
                        <div className="w-px h-8 bg-slate-800 mt-1" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-6">
                      <div className="text-white text-sm font-semibold leading-tight">
                        {item.label}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="mt-2 p-4 bg-green-500/10 rounded-card border border-green-500/20">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-green-400 text-sm font-semibold">
                    Lead captured &amp; appointment booked
                  </span>
                </div>
                <p className="text-slate-500 text-xs mt-1 ml-6">
                  All in under 3 minutes. No human involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

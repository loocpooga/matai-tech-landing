import Button from "../ui/Button";
import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-paper relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh-dark opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-4">
            Ready to transform your business?
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent-warm rounded-full mx-auto mb-6" />
          <p className="text-lg text-slate-500 mb-8">
            Let&apos;s discuss how automation can save you time and money.
          </p>

          <Button
            variant="primary"
            size="lg"
            href="https://cal.com/luke-pauga-hlurq5/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Call
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Button>

          <div className="flex items-center gap-4 justify-center mt-6">
            <div className="h-px w-16 bg-slate-200" />
            <span className="text-sm text-slate-400 font-medium">
              or send a message
            </span>
            <div className="h-px w-16 bg-slate-200" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-bg-elevated rounded-card p-8 md:p-12 shadow-float">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import Button from "../ui/Button";
import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-5 sm:px-8 bg-band border-t border-rule"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block rule-heavy pb-2 mb-8">
            <span className="eyebrow">Get in touch</span>
          </div>

          <h2 className="text-3xl md:text-4xl text-ink mb-5 text-balance">
            Tell me where the hours are going.
          </h2>
          <p className="text-ink-soft mb-8 max-w-xl mx-auto">
            The easiest way is a 30-minute call. You talk, I ask questions,
            and you&apos;ll leave knowing whether this is worth doing.
          </p>

          <Button
            variant="primary"
            size="lg"
            href="https://cal.com/luke-pauga-hlurq5/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 30-min call
          </Button>

          <div className="flex items-center gap-4 justify-center mt-8">
            <div className="h-px w-16 bg-rule" />
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-soft">
              or send a message
            </span>
            <div className="h-px w-16 bg-rule" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-paper rounded-lg p-6 sm:p-10 border border-rule">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

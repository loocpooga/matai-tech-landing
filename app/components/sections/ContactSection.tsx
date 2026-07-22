import Button from "../ui/Button";
import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-5 sm:px-8 bg-ink">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 mb-7 justify-center">
            <span className="w-8 h-px bg-ember" />
            <span className="text-sm text-ember-bright font-medium">
              Get in touch
            </span>
            <span className="w-8 h-px bg-ember" />
          </div>

          <h2 className="text-3xl md:text-4xl text-on-dark mb-5 text-balance">
            Tell me where the hours are going.
          </h2>
          <p className="text-on-dark-soft mb-8 max-w-xl mx-auto">
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
            <div className="h-px w-16 bg-on-dark-border" />
            <span className="text-sm text-on-dark-soft">
              or send a message
            </span>
            <div className="h-px w-16 bg-on-dark-border" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-bg-raised rounded-lg p-6 sm:p-10 border border-bg-border">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

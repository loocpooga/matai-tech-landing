import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-5 sm:px-8 bg-bg">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Photo */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-lg overflow-hidden border border-bg-border">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Luke Pauga, founder of Matai Tech, with his wife"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-8 h-px bg-ember" />
                <span className="text-sm text-ember-bright font-medium">
                  About
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl text-cream mb-6 text-balance">
                Hi, I&apos;m Luke. Matai Tech is just me. That&apos;s the
                point.
              </h2>

              <div className="space-y-4 text-ink-soft leading-relaxed">
                <p>
                  I&apos;m a data engineer by trade. I&apos;ve spent years
                  building CRM integrations and data systems for trades
                  companies (roofing, solar, home services) and I kept seeing
                  the same thing: good crews, good work, and an office drowning
                  in retyping, chasing, and Sunday-night admin.
                </p>
                <p>
                  Matai Tech is where I do that work directly for owners. No
                  account managers, no handoffs, no junior dev you&apos;ve never
                  met. The person on the first call is the person writing the
                  code and the person answering when something breaks.
                </p>
                <p>
                  If you&apos;d rather talk to the person who actually does the
                  work, that&apos;s the whole pitch.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

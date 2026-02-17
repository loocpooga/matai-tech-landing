import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="bg-bg-elevated rounded-card p-8 md:p-12 shadow-float">
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
            {/* Photo */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-card overflow-hidden shadow-float-lg">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Luke and his wife - Founders of Matai Tech"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              {/* Section label */}
              <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
                Our Story
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-semibold text-text-primary mb-6">
                Built by a Data Engineer Who&apos;s Seen the Problem Firsthand
              </h2>

              <div className="space-y-4 text-base text-slate-500 leading-relaxed">
                <p>
                  My name is Luke, and as a data engineer working with
                  operations-heavy industries, I&apos;ve witnessed the same
                  pattern repeatedly:{" "}
                  <span className="font-semibold text-text-primary">
                    far too much manual work and disconnected tools
                  </span>{" "}
                  costing businesses thousands in lost time and productivity.
                </p>
                <p>
                  Companies struggle with data trapped in silos, teams manually
                  transferring information between systems, and leaders lacking
                  visibility into where inefficiencies lie. These aren&apos;t
                  just minor inconveniences—they&apos;re{" "}
                  <span className="font-semibold text-text-primary">
                    massive drains on resources that directly impact your bottom
                    line
                  </span>
                  .
                </p>

                {/* Callout */}
                <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-card mt-6">
                  <p className="text-text-primary font-medium leading-relaxed">
                    That&apos;s why I founded Matai Tech: to bring real-world
                    data engineering expertise to businesses that need it most,
                    creating custom automation solutions that actually solve
                    operational problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

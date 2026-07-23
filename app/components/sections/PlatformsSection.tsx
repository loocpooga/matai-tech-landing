import Image from "next/image";
import Reveal from "../ui/Reveal";

const groups = [
  {
    label: "CRMs",
    platforms: [
      { name: "Salesforce", logo: "/logos/salesforce.svg" },
      { name: "HubSpot", logo: "/logos/hubspot.jpeg" },
      { name: "Pipedrive", logo: "/logos/pipedrive.svg" },
      { name: "GoHighLevel", logo: "/logos/gohighlevel-2.png" },
    ],
  },
  {
    label: "Field & trade tools",
    platforms: [
      { name: "JobNimbus", logo: "/logos/jobnimbus.jpeg" },
      { name: "AccuLynx", logo: "/logos/acculynx.jpeg" },
      { name: "Leap", logo: "/logos/leap.png" },
      { name: "Housecall Pro", logo: "/logos/housecallpro.jpeg" },
      { name: "Enerflo", logo: "/logos/enerflo.png" },
      { name: "SubcontractorHub", logo: "/logos/subcontractor-hub.jpeg" },
    ],
  },
  {
    label: "Accounting & everything else",
    platforms: [
      { name: "Google Sheets", logo: "/logos/google-sheets.png" },
      { name: "Monday.com", logo: "/logos/monday.com.svg" },
      { name: "Zapier", logo: "/logos/zapier.jpeg" },
    ],
  },
];

export default function PlatformsSection() {
  return (
    <section
      id="platforms"
      className="py-20 md:py-28 px-5 sm:px-8 bg-paper border-y border-rule"
    >
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="rule-heavy pb-2 mb-8">
            <span className="eyebrow">Tools I work with</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: context */}
            <div>
              <h2 className="text-3xl md:text-4xl text-ink mb-5 text-balance">
                Your software probably isn&apos;t the problem.
              </h2>
              <p className="text-ink-soft leading-relaxed mb-6 text-sm">
                These are platforms I&apos;ve actually built in, not a logo
                wall. The tools are usually fine. It&apos;s the gaps between
                them where leads and hours go missing.
              </p>
              <p className="text-sm text-ink-soft">
                Don&apos;t see yours?{" "}
                <a
                  href="#contact"
                  className="text-ink underline decoration-deep decoration-1 underline-offset-4 hover:text-deep transition-colors"
                >
                  Ask me
                </a>
                . If it has an API, or even just exports a spreadsheet, I can
                probably work with it.
              </p>
            </div>

            {/* Right: grouped grid */}
            <div className="lg:col-span-2 space-y-8">
              {groups.map((group) => (
                <div key={group.label}>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-soft mb-3 pb-2 border-b border-rule">
                    {group.label}
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                    {group.platforms.map((platform) => (
                      <div
                        key={platform.name}
                        className="bg-paper rounded-md p-3 border border-rule hover:border-deep transition-colors duration-300 flex flex-col items-center justify-center gap-2 aspect-square"
                      >
                        <div className="relative w-9 h-9">
                          <Image
                            src={platform.logo}
                            alt={`${platform.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[10px] text-ink-soft text-center font-medium leading-tight">
                          {platform.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

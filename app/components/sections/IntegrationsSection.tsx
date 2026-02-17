import Image from "next/image";

const integrations = [
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.jpeg" },
  { name: "Zapier", logo: "/logos/zapier.jpeg" },
  { name: "Monday.com", logo: "/logos/monday.com.svg" },
  { name: "Pipedrive", logo: "/logos/pipedrive.svg" },
  { name: "Google Sheets", logo: "/logos/google-sheets.png" },
  { name: "GoHighLevel", logo: "/logos/gohighlevel-2.png" },
  { name: "JobNimbus", logo: "/logos/jobnimbus.jpeg" },
  { name: "Housecall Pro", logo: "/logos/housecallpro.jpeg" },
  { name: "Acculynx", logo: "/logos/acculynx.jpeg" },
  { name: "Enerflo", logo: "/logos/enerflo.png" },
  { name: "Subcontractor Hub", logo: "/logos/subcontractor-hub.jpeg" },
];

export default function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Context */}
          <div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
              Integrations
            </div>
            <h2 className="text-4xl font-display font-semibold text-text-primary mb-4">
              Works with your existing tools
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-accent-warm rounded-full mb-6" />
            <p className="text-base text-slate-500 mb-8 leading-relaxed">
              We have deep experience with industry-leading platforms and can
              connect virtually any system.
            </p>

            {/* Stat callout */}
            <div className="bg-primary/5 rounded-card p-6 border border-primary/10 mb-6">
              <div className="font-mono text-4xl font-bold text-primary mb-1">
                50+
              </div>
              <div className="text-sm text-slate-500 font-medium">
                Platforms Integrated
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Don&apos;t see your software?{" "}
              <a
                href="#contact"
                className="text-primary font-semibold hover:underline transition-colors"
              >
                Contact us
              </a>{" "}
              — we can integrate with virtually any platform.
            </p>
          </div>

          {/* Right: Logo grid */}
          <div className="lg:col-span-2">
            {/* Grid header */}
            <div className="mb-5 pb-3 border-b border-slate-100 flex justify-between items-center">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wide">
                Platform Catalog
              </span>
              <span className="font-mono text-xs text-slate-400">
                12 of 50+ shown
              </span>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {integrations.map((software, index) => (
                <div
                  key={software.name}
                  className="relative bg-bg-elevated rounded-card p-4 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-primary/20 border border-transparent transition-all duration-300 flex flex-col items-center justify-center gap-2 aspect-square group"
                >
                  {/* Catalog number */}
                  <div className="absolute top-1.5 left-2 font-mono text-[9px] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative w-10 h-10">
                    <Image
                      src={software.logo}
                      alt={`${software.name} logo`}
                      fill
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 text-center font-medium group-hover:text-slate-600 transition-colors leading-tight">
                    {software.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

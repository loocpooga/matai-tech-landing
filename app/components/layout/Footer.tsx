const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#integrations", label: "Integrations" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-semibold text-white mb-1">
              Matai<span className="text-primary-light">.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Professional automation and data engineering solutions for modern
              businesses. Save time, reduce costs, and gain visibility into your
              operations.
            </p>
            {/* Accent bar */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent-warm rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-light text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:luke@mataitech.co"
                  className="text-slate-400 hover:text-primary-light text-sm transition-colors duration-200"
                >
                  luke@mataitech.co
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/luke-pauga-hlurq5/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-light text-sm transition-colors duration-200"
                >
                  Schedule a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Matai Tech LLC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs text-slate-700">
            <span>EST. 2024</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span>BUILT WITH PURPOSE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

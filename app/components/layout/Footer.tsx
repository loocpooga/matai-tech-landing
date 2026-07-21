const footerLinks = [
  { href: "#what-i-do", label: "What I do" },
  { href: "#proof", label: "Proof" },
  { href: "#platforms", label: "Platforms" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-on-dark py-16 px-5 sm:px-8">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-semibold text-on-dark mb-3">
              Matai Tech<span className="text-ember">.</span>
            </div>
            <p className="text-on-dark-soft text-sm leading-relaxed max-w-sm">
              Systems and automation for trades businesses. One person, doing
              the work directly — connecting the tools you already run so leads
              stop slipping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-on-dark mb-4">
              On this page
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-on-dark-soft hover:text-on-dark text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-on-dark mb-4">Reach me</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:luke@mataitech.co"
                  className="text-on-dark-soft hover:text-on-dark text-sm transition-colors duration-200"
                >
                  luke@mataitech.co
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/luke-pauga-hlurq5/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-dark-soft hover:text-on-dark text-sm transition-colors duration-200"
                >
                  Book a 30-min call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-on-dark-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-dark-soft">
            &copy; {new Date().getFullYear()} Matai Tech LLC. All rights
            reserved.
          </p>
          <p className="text-xs text-on-dark-soft">
            Built and run by one person, on purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

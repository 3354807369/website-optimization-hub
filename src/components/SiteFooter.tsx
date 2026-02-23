import { Link } from "react-router-dom";

const EMAIL = "Contact@starlooptech.com";
const year = new Date().getFullYear();

const footerNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground relative">
      {/* Top accent gradient */}
      <div
        className="h-[3px] w-full"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="section-wrap py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_0.8fr] gap-8 pb-6">
          {/* Brand */}
          <div>
            <h4 className="font-display text-lg font-extrabold tracking-wide text-primary-foreground mb-2">
              StarLoop
            </h4>
            <p className="text-primary-foreground/65 text-sm leading-relaxed max-w-[42ch]">
              Data-driven quant trading bots, modern websites, and blockchain
              engineering for the next generation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-display font-bold text-primary-foreground/90 mb-3 text-sm uppercase tracking-wider">
              Navigate
            </h5>
            <ul className="list-none p-0 m-0 grid gap-2">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-200 no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-display font-bold text-primary-foreground/90 mb-3 text-sm uppercase tracking-wider">
              Contact
            </h5>
            <code className="inline-block px-3 py-1.5 bg-primary-foreground/10 border border-primary-foreground/15 rounded-lg font-mono text-primary-foreground/80 text-sm mb-3">
              {EMAIL}
            </code>
            <ul className="list-none p-0 m-0 grid gap-1.5 text-primary-foreground/50 text-xs">
              <li>Remote-first · APAC / EU hours</li>
              <li>Non-custodial by default</li>
            </ul>
          </div>

          {/* Assurances */}
          <div>
            <h5 className="font-display font-bold text-primary-foreground/90 mb-3 text-sm uppercase tracking-wider">
              Trust
            </h5>
            <ul className="list-none p-0 m-0 grid gap-1.5 text-primary-foreground/50 text-xs">
              <li>Versioned code & configs</li>
              <li>Encrypted secrets</li>
              <li>Launch support</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-3 flex-wrap border-t border-primary-foreground/10 pt-5 text-xs text-primary-foreground/40">
          <span>© {year} StarLoop. All rights reserved.</span>
          <span className="opacity-40">·</span>
          <span>Nothing here is investment advice.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

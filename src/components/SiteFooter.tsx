const EMAIL = "Contact@starlooptech.com";
const year = new Date().getFullYear();

const SiteFooter = () => {
  return (
    <footer className="bg-card border-t border-border relative">
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />

      <div className="section-wrap py-7">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-7 pb-3">
          {/* Brand */}
          <div className="text-left">
            <div className="flex items-center gap-2.5">
              <h4 className="font-display text-base font-extrabold tracking-wide text-foreground m-0">
                StarLoop
              </h4>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[46ch]">
              Data-driven quant trading bots, fast modern websites, and blockchain engineering.
            </p>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h5 className="font-display font-bold text-foreground mb-2 text-sm">Contact</h5>
            <code className="inline-block px-3 py-2 bg-secondary border border-border rounded-lg font-mono text-foreground text-sm mb-2.5">
              {EMAIL}
            </code>
            <ul className="list-none p-0 m-0 grid gap-1.5 text-muted-foreground text-sm">
              <li>Remote-first · APAC / EU hours</li>
              <li>Non-custodial by default</li>
              <li>Nothing here is investment advice.</li>
            </ul>
          </div>

          {/* Assurances */}
          <div className="text-left">
            <h5 className="font-display font-bold text-foreground mb-2 text-sm">Assurances</h5>
            <ul className="list-none p-0 m-0 grid gap-1.5 text-muted-foreground text-sm">
              <li>Versioned code & configs</li>
              <li>Encrypted secrets & access control</li>
              <li>Launch support & monitoring</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-2.5 flex-wrap border-t border-dashed border-border mt-4 pt-3 text-xs text-muted-foreground">
          <span>© {year} StarLoop. All rights reserved.</span>
          <span className="opacity-50">•</span>
          <span>Built remotely · APAC / EU friendly</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

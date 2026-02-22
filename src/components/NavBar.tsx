import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 bg-card/95 backdrop-blur-md border-b border-border transition-shadow duration-200 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="section-wrap h-full grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} className="text-foreground" /> : <Menu size={22} className="text-foreground" />}
          </button>
          <div className="hidden md:block" />

          {/* Center logo */}
          <Link to="/" className="justify-self-center flex items-center gap-2.5 no-underline">
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              STAR LOOP
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="justify-self-end hidden md:inline-flex gap-1" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors duration-200 ${
                  location.pathname === item.to
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-transparent"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.16 }}
              className="absolute top-14 left-3 w-56 p-2 rounded-xl bg-card border border-border shadow-xl grid gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3 py-2.5 rounded-lg text-sm no-underline transition-colors ${
                    location.pathname === item.to
                      ? "bg-secondary text-foreground"
                      : "text-foreground hover:bg-secondary/60"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;

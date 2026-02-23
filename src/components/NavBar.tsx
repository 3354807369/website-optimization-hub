import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle, t } = useLang();
  const isHome = location.pathname === "/";

  const nav = [
    { label: t("Home", "首页"), to: "/" },
    { label: t("About Us", "关于我们"), to: "/about" },
    { label: t("Services", "服务"), to: "/services" },
    { label: t("Contact Us", "联系我们"), to: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent border-b border-transparent"
            : "bg-card/80 backdrop-blur-xl border-b border-border shadow-lg"
        }`}
      >
        <div className="section-wrap h-full grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={22} className={isTransparent ? "text-primary-foreground" : "text-foreground"} />
            ) : (
              <Menu size={22} className={isTransparent ? "text-primary-foreground" : "text-foreground"} />
            )}
          </button>
          <div className="hidden md:block" />

          {/* Center logo */}
          <Link to="/" className="justify-self-center flex items-center gap-2.5 no-underline">
            <img
              src={logo}
              alt="StarLoop Logo"
              className={`h-14 max-w-[240px] w-auto object-contain transition-all duration-500 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop nav + lang toggle */}
          <nav className="justify-self-end hidden md:inline-flex items-center gap-1" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-300 ${
                  isTransparent
                    ? location.pathname === item.to
                      ? "text-primary-foreground bg-white/15"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                    : location.pathname === item.to
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggle}
              className={`ml-1 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer border-none bg-transparent ${
                isTransparent
                  ? "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
              aria-label="Switch language"
            >
              <Globe size={15} />
              {lang === "en" ? "中文" : "EN"}
            </button>
          </nav>

          {/* Mobile lang toggle */}
          <button
            onClick={toggle}
            className={`md:hidden justify-self-end inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer border-none bg-transparent ${
              isTransparent
                ? "text-primary-foreground/80 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Switch language"
          >
            <Globe size={14} />
            {lang === "en" ? "中文" : "EN"}
          </button>
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

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, LineChart, Bot, Globe2, Boxes } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const { lang, toggle, t } = useLang();
  const isHome = location.pathname === "/";

  const services = [
    {
      to: "/services/web-development",
      label: t("Web Development", "网站开发"),
      desc: t("Modern sites & landing pages", "现代网站与落地页"),
      icon: Globe2,
    },
    {
      to: "/services/it-services",
      label: t("Enterprise IT Services", "企业 IT 服务"),
      desc: t("Cloud, security & managed IT", "云、安全与托管 IT"),
      icon: Boxes,
    },
    {
      to: "/services/ai-agents",
      label: t("AI Agents", "AI 智能代理"),
      desc: t("Custom assistants & automation", "定制助手与自动化"),
      icon: Bot,
    },
    {
      to: "/services/quant-trading",
      label: t("Quant Trading", "量化交易"),
      desc: t("Non-custodial trading bots", "非托管交易机器人"),
      icon: LineChart,
    },
  ];

  const nav = [
    { label: t("Home", "首页"), to: "/" },
    { label: t("About Us", "关于我们"), to: "/about" },
    { label: t("Services", "服务"), to: "/services", hasDropdown: true },
    { label: t("Contact Us", "联系我们"), to: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isTransparent = isHome && !scrolled;
  const isServicesActive = location.pathname.startsWith("/services");

  const openDropdown = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

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
            {nav.map((item) => {
              if (item.hasDropdown) {
                const active = isServicesActive;
                return (
                  <div key={item.to} className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
                    <Link
                      to={item.to}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-300 ${
                        isTransparent
                          ? active || servicesOpen
                            ? "text-primary-foreground bg-white/20 ring-1 ring-white/25"
                            : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                          : active || servicesOpen
                            ? "text-primary bg-primary/10 ring-1 ring-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute right-0 top-full pt-2 w-[320px]"
                        >
                          <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden p-2">
                            {services.map((s) => {
                              const Icon = s.icon;
                              const isActive = location.pathname === s.to;
                              return (
                                <Link
                                  key={s.to}
                                  to={s.to}
                                  className={`group flex items-start gap-3 px-3 py-2.5 rounded-xl no-underline transition-colors ${
                                    isActive ? "bg-secondary" : "hover:bg-secondary/60"
                                  }`}
                                >
                                  <div className="shrink-0 grid place-items-center w-9 h-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                                    <Icon size={16} />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-sm font-semibold text-foreground leading-tight">{s.label}</div>
                                    <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{s.desc}</div>
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="mt-1 pt-2 border-t border-border">
                              <Link
                                to="/services"
                                className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/60 no-underline transition-colors"
                              >
                                {t("View all services", "查看全部服务")}
                                <span aria-hidden>→</span>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-300 ${
                    isTransparent
                      ? location.pathname === item.to
                        ? "text-primary-foreground bg-white/20 ring-1 ring-white/25"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                      : location.pathname === item.to
                        ? "text-primary bg-primary/10 ring-1 ring-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={toggle}
              className={`ml-1 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer border-none bg-transparent ${
                isTransparent
                  ? "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
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
              className="absolute top-14 left-3 w-64 p-2 rounded-xl bg-card border border-border shadow-xl grid gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {nav.map((item) => (
                <div key={item.to}>
                  <Link
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
                  {item.hasDropdown && (
                    <div className="mt-1 ml-2 pl-2 border-l border-border grid gap-0.5">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.to}
                            to={s.to}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] no-underline transition-colors ${
                              location.pathname === s.to
                                ? "bg-secondary text-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                            }`}
                          >
                            <Icon size={14} className="shrink-0" />
                            {s.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;

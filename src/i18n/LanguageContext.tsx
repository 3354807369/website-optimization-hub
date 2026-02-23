import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Lang = "en" | "zh";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (en: string, zh: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("starloop-lang");
      return saved === "zh" ? "zh" : "en";
    } catch {
      return "en";
    }
  });

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "zh" : "en";
      try { localStorage.setItem("starloop-lang", next); } catch {}
      return next;
    });
  }, []);

  const t = useCallback((en: string, zh: string) => (lang === "zh" ? zh : en), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

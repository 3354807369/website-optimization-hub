import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

const EMAIL = "Contact@starlooptech.com";
const year = new Date().getFullYear();

const SiteFooter = () => {
  const { t } = useLang();

  const footerNav = [
    { label: t("Home", "首页"), to: "/" },
    { label: t("About", "关于"), to: "/about" },
    { label: t("Services", "服务"), to: "/services" },
    { label: t("Contact", "联系"), to: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground relative">
      <div className="h-[3px] w-full" style={{ background: "var(--gradient-accent)" }} />
      <div className="section-wrap py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_0.8fr] gap-8 pb-6">
          <div>
            <h4 className="font-display text-lg font-extrabold tracking-wide text-primary-foreground mb-2">StarLoop</h4>
            <p className="text-primary-foreground/65 text-sm leading-relaxed max-w-[42ch]">
              {t("Data-driven quant trading bots, modern websites, and blockchain engineering for the next generation.", "数据驱动的量化交易机器人、现代网站和区块链工程。")}
            </p>
          </div>
          <div>
            <h5 className="font-display font-bold text-primary-foreground/90 mb-3 text-sm uppercase tracking-wider">{t("Navigate", "导航")}</h5>
            <ul className="list-none p-0 m-0 grid gap-2">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-200 no-underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display font-bold text-primary-foreground/90 mb-3 text-sm uppercase tracking-wider">{t("Contact", "联系")}</h5>
            <code className="inline-block px-3 py-1.5 bg-primary-foreground/10 border border-primary-foreground/15 rounded-lg font-mono text-primary-foreground/80 text-sm mb-3">{EMAIL}</code>
            <ul className="list-none p-0 m-0 grid gap-1.5 text-primary-foreground/50 text-xs">
              <li>{t("Remote-first · APAC / EU hours", "远程优先 · 亚太/欧洲时区")}</li>
              <li>{t("Non-custodial by default", "默认非托管")}</li>
            </ul>
          </div>
          <div>
            <h5 className="font-display font-bold text-primary-foreground/90 mb-3 text-sm uppercase tracking-wider">{t("Trust", "信任")}</h5>
            <ul className="list-none p-0 m-0 grid gap-1.5 text-primary-foreground/50 text-xs">
              <li>{t("Versioned code & configs", "版本化代码与配置")}</li>
              <li>{t("Encrypted secrets", "加密密钥管理")}</li>
              <li>{t("Launch support", "上线支持")}</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap border-t border-primary-foreground/10 pt-5 text-xs text-primary-foreground/40">
          <span>© {year} StarLoop. {t("All rights reserved.", "保留所有权利。")}</span>
          <span className="opacity-40">·</span>
          <span>{t("Nothing here is investment advice.", "本站内容不构成投资建议。")}</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  /** Optional schema type. "Organization" is added on home automatically. */
  schema?: "Organization" | "Service" | "WebSite" | "AboutPage" | "ContactPage";
  /** When schema = "Service", provide a service name (e.g. "Quant Trading Automation") */
  serviceName?: string;
}

const SITE_NAME = "StarLoop";
const BASE_URL = "https://starlooptech.com";
const DEFAULT_DESC =
  "StarLoop is a full-stack IT engineering team building production-grade quant trading automation, AI agents, modern web products, and blockchain infrastructure.";
const KEYWORDS =
  "quant trading automation, AI agents, LLM engineering, web development, blockchain engineering, IT solutions, software engineering team, full-stack development";

const SEO = ({
  title,
  description = DEFAULT_DESC,
  path = "/",
  image = "/og-image.png",
  schema,
  serviceName,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Full-Stack IT Engineering Team`;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  // Build JSON-LD blocks
  const jsonLdBlocks: Record<string, unknown>[] = [];

  // Organization always present (helps brand search)
  jsonLdBlocks.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: DEFAULT_DESC,
    foundingDate: "2023",
    slogan: "Full-stack IT engineering team",
    knowsAbout: [
      "Quantitative Trading Automation",
      "Algorithmic Trading",
      "AI Agents",
      "Large Language Models",
      "Web Development",
      "Blockchain Engineering",
      "Smart Contracts",
      "DevOps",
      "Cloud Infrastructure",
    ],
    areaServed: "Worldwide",
    sameAs: [],
  });

  // Page-specific
  if (schema === "WebSite" || path === "/") {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
    });
  }
  if (schema === "Service" && serviceName) {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      description,
      url,
    });
  }
  if (schema === "AboutPage") {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      url,
      name: fullTitle,
    });
  }
  if (schema === "ContactPage") {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      url,
      name: fullTitle,
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD structured data */}
      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

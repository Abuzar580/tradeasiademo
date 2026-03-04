import { HeaderOne } from "@/components/header/HeaderOne";
import { FooterOne } from "@/components/shared/FooterOne";
import { defaultLanguages } from "@/constants/languages";
import type { HeaderConfig } from "@/types/header";

const headerOneConfig: HeaderConfig = {
  logo: {
    src: "/logo.svg",
    alt: "ChemTradeAsia",
    href: "/",
  },
  nav: [
    {
      label: "Company",
      href: "/company",
      children: [
        { label: "About Us", href: "/company/about" },
        { label: "Our Locations", href: "/company/locations" },
        { label: "Market Spread", href: "/company/market-spread" },
      ],
    },
    {
      label: "Products",
      href: "/products",
      children: [{ label: "View all", href: "/products" }],
    },
    { label: "Market Insights", href: "/market-insights" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Careers", href: "/careers" },
  ],
  actions: [
    {
      type: "signIn",
      label: "Sign In",
      href: "/sign-in",
    },
  ],
  explore: [
    {
      label: "Country",
      href: "/country",
      children: defaultLanguages.map((l) => ({
        label: l.name,
        href: "#",
        flagSrc: l.flagSrc ?? "/flag.svg",
      })),
    },
    {
      label: "Industry",
      href: "/industry",
      children: [
        { label: "Chemicals", href: "/industry/chemicals" },
        { label: "Pharma", href: "/industry/pharma" },
      ],
    },
    {
      label: "Origin",
      href: "/origin",
      children: [
        { label: "Asia", href: "/origin/asia" },
        { label: "Europe", href: "/origin/europe" },
      ],
    },
    {
      label: "Business Vertical",
      href: "/vertical",
      children: [
        { label: "B2B", href: "/vertical/b2b" },
        { label: "B2C", href: "/vertical/b2c" },
      ],
    },
  ],
  languages: defaultLanguages,
};

export function LayoutOne({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <HeaderOne config={headerOneConfig} />
      <main className="flex-1 pt-24 md:pt-32">{children}</main>
      <FooterOne />
    </div>
  );
}

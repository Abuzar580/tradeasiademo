import { HeaderOne } from "@/components/shared/HeaderOne";
import { FooterOne } from "@/components/shared/FooterOne";
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

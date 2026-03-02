import type { Metadata } from "next";
import "./globals.css";
import { LayoutOne } from "@/layouts/layout-one";
import { getTenantId } from "@/lib/tenant";
import { fetchTenantBootstrap } from "@/lib/api";

/**
 * Dynamic metadata — title and description are driven by the tenant bootstrap
 * config instead of a hardcoded static export.
 *
 * fetchTenantBootstrap is wrapped with React cache(), so this call and the
 * one inside RootLayout share a single network request per render.
 */
export async function generateMetadata(): Promise<Metadata> {
  const tenantId = await getTenantId();
  const { seo } = await fetchTenantBootstrap(tenantId);

  return {
    title: seo.titleTemplate
      ? { default: seo.title, template: seo.titleTemplate }
      : seo.title,
    description: seo.description,
    ...(seo.keywords?.length && { keywords: seo.keywords }),
    ...(seo.ogImage && {
      openGraph: { images: [seo.ogImage] },
    }),
  };
}

/**
 * Root layout — async Server Component.
 *
 * Fetches the tenant bootstrap config on every cold render (ISR-cached for
 * 1 hour at the Next.js layer). The config is available here and ready to be
 * forwarded to child layout components in Phase 1 when HeaderOne, FooterOne,
 * and LayoutOne accept TenantConfig props.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tenantId = await getTenantId();
  // Phase 1: pass tenantConfig to LayoutOne (and through it to HeaderOne / FooterOne).
  // The variable is intentionally kept here so the plumbing is in place.
  const tenantConfig = await fetchTenantBootstrap(tenantId);

  return (
    <html lang={tenantConfig.locales.defaultLocale}>
      <body className="antialiased">
        <LayoutOne>{children}</LayoutOne>
      </body>
    </html>
  );
}

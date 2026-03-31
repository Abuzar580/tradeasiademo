import type { Metadata } from "next";
import "./globals.css";
import { LayoutShell } from "@/layouts/layout-shell";
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
 * forwarded to global shell components in a later phase (e.g. header/footer
 * variants driven by site config).
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tenantId = await getTenantId();
  const tenantConfig = await fetchTenantBootstrap(tenantId);

  const cssVars = Object.fromEntries(
    Object.entries(tenantConfig.styleguide?.vars ?? {}).map(([key, value]) => [
      `--${key}`,
      value,
    ]),
  ) as React.CSSProperties;

  return (
    <html lang={tenantConfig.locales.defaultLocale} style={cssVars}>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

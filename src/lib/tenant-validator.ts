/**
 * Runtime validator for tenant bootstrap config.
 *
 * Phase 1: Full TenantConfig validation. Fail-fast. Explicit type guards.
 * Structure integrity only — no deep recursion into arrays.
 */

import type {
  TenantConfig,
  BrandingConfig,
  NavigationConfig,
  FooterConfig,
  SeoConfig,
  LocaleConfig,
  AuthProvider,
  StyleguideConfig,
} from "@/types/tenant";

function fail(input: unknown, reason: string): TenantConfig {
  console.error({
    source: "tenant-validator",
    reason,
    received: input,
  });
  return getSafeFallbackTenantConfig();
}

/**
 * Returns a complete TenantConfig when validation fails.
 * Defined internally to avoid circular dependencies with api.ts.
 */
function getSafeFallbackTenantConfig(): TenantConfig {
  return {
    tenantId: "default",
    headerVariant: "header-one",
    footerVariant: "footer-one",

    styleguide: {
      vars: {},
    },

    branding: {
      colors: {
        primary: "#123C69",
        primaryHover: "#14568E",
        primaryDeep: "#052E59",
        secondary: "#1ba2ca",
      },
      logo: {
        src: "/logo.svg",
        alt: "ChemTradeAsia",
        href: "/",
      },
    },

    navigation: {
      items: [
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
      actions: [{ type: "signIn", label: "Sign In", href: "/sign-in" }],
    },

    footer: {
      sections: [
        {
          title: "Company",
          links: [
            { label: "About Us", href: "/company/about" },
            { label: "Our Locations", href: "/company/locations" },
            { label: "Careers", href: "/careers" },
          ],
        },
        {
          title: "Products",
          links: [
            { label: "View all", href: "/products" },
            { label: "Categories", href: "/products/categories" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Contact", href: "/contact" },
            { label: "Newsletter", href: "/newsletter" },
          ],
        },
      ],
      copyrightName: "ChemTradeAsia",
    },

    seo: {
      title: "ChemTradeAsia",
      titleTemplate: "%s | ChemTradeAsia",
      description: "ChemTradeAsia — Your global chemicals trading partner.",
    },

    locales: {
      defaultLocale: "en",
      supportedLocales: ["en"],
    },

    authProviders: [{ type: "credentials" }],
  };
}

/**
 * Validates unknown input against the full TenantConfig contract.
 * Fail-fast. Explicit type guards for nested objects. Structure only.
 */
export function validateTenantConfig(input: unknown): TenantConfig {
  // 1. input is non-null object
  if (typeof input !== "object" || input === null) {
    return fail(input, "input must be a non-null object");
  }
  const obj = input as Record<string, unknown>;

  // 2. tenantId exists, is string, non-empty
  if (typeof obj.tenantId !== "string" || obj.tenantId.trim() === "") {
    return fail(input, "tenantId must be a non-empty string");
  }

  // 3. optional headerVariant/footerVariant
  if (
    obj.headerVariant !== undefined &&
    typeof obj.headerVariant !== "string"
  ) {
    return fail(input, "headerVariant must be a string when provided");
  }
  if (
    obj.footerVariant !== undefined &&
    typeof obj.footerVariant !== "string"
  ) {
    return fail(input, "footerVariant must be a string when provided");
  }

  // 4. branding exists with logo and colors (explicit type guards)
  if (typeof obj.branding !== "object" || obj.branding === null) {
    return fail(input, "branding must be a non-null object");
  }
  const branding = obj.branding as Record<string, unknown>;
  if (
    typeof branding.logo !== "object" ||
    branding.logo === null ||
    typeof (branding.logo as Record<string, unknown>).src !== "string"
  ) {
    return fail(input, "branding.logo must be object with src (string)");
  }
  const colors = branding.colors as Record<string, unknown> | undefined;
  if (
    typeof colors !== "object" ||
    colors === null ||
    typeof colors.primary !== "string" ||
    typeof colors.primaryHover !== "string" ||
    typeof colors.primaryDeep !== "string" ||
    typeof colors.secondary !== "string"
  ) {
    return fail(
      input,
      "branding.colors must be object with primary, primaryHover, primaryDeep, secondary (strings)",
    );
  }

  // 5. navigation exists with items and actions arrays
  if (typeof obj.navigation !== "object" || obj.navigation === null) {
    return fail(input, "navigation must be a non-null object");
  }
  const navigation = obj.navigation as Record<string, unknown>;
  if (!Array.isArray(navigation.items) || !Array.isArray(navigation.actions)) {
    return fail(input, "navigation must have items (array) and actions (array)");
  }

  // 6. footer exists with sections and copyrightName
  if (typeof obj.footer !== "object" || obj.footer === null) {
    return fail(input, "footer must be a non-null object");
  }
  const footer = obj.footer as Record<string, unknown>;
  if (
    !Array.isArray(footer.sections) ||
    typeof footer.copyrightName !== "string"
  ) {
    return fail(
      input,
      "footer must have sections (array) and copyrightName (string)",
    );
  }

  // 7. seo exists with title and description
  if (typeof obj.seo !== "object" || obj.seo === null) {
    return fail(input, "seo must be a non-null object");
  }
  const seo = obj.seo as Record<string, unknown>;
  if (typeof seo.title !== "string" || typeof seo.description !== "string") {
    return fail(input, "seo must have title (string) and description (string)");
  }

  // 8. locales exists with defaultLocale and supportedLocales
  if (typeof obj.locales !== "object" || obj.locales === null) {
    return fail(input, "locales must be a non-null object");
  }
  const locales = obj.locales as Record<string, unknown>;
  if (
    typeof locales.defaultLocale !== "string" ||
    !Array.isArray(locales.supportedLocales)
  ) {
    return fail(
      input,
      "locales must have defaultLocale (string) and supportedLocales (array)",
    );
  }

  // 9. authProviders is array
  if (!Array.isArray(obj.authProviders)) {
    return fail(input, "authProviders must be an array");
  }

  // All checks passed — return validated input as TenantConfig
  return {
    tenantId: obj.tenantId as string,
    headerVariant: obj.headerVariant as string | undefined,
    footerVariant: obj.footerVariant as string | undefined,
    branding: obj.branding as BrandingConfig,
    navigation: obj.navigation as NavigationConfig,
    footer: obj.footer as FooterConfig,
    styleguide: obj.styleguide as StyleguideConfig | undefined,
    seo: obj.seo as SeoConfig,
    locales: obj.locales as LocaleConfig,
    authProviders: obj.authProviders as AuthProvider[],
  };
}

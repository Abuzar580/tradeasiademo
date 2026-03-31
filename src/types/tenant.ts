// ─── Branding ─────────────────────────────────────────────────────────────────

/**
 * Core brand color palette for a tenant.
 * These values map 1-to-1 to the CSS custom properties in globals.css
 * (--brand-primary, --brand-primary-hover, etc.) and will be injected
 * as inline styles on <html> in Phase 1.
 */
export type BrandColors = {
  primary: string;
  primaryHover: string;
  primaryDeep: string;
  secondary: string;
};

export type LogoConfig = {
  /** Absolute URL (CDN) or root-relative path for the logo image. */
  src: string;
  alt: string;
  /** The href the logo links to — usually "/" but can be a locale-prefixed path. */
  href: string;
};

export type BrandingConfig = {
  colors: BrandColors;
  logo: LogoConfig;
  /** Optional override for the primary font family. Defaults to Poppins. */
  fontFamily?: string;
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/** Maps to the variant prop on the shared <Button> component. */
export type NavActionType = "primary" | "outlined" | "signIn";

export type NavAction = {
  type: NavActionType;
  label: string;
  href: string;
};

export type NavigationConfig = {
  items: NavItem[];
  actions: NavAction[];
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FooterConfig = {
  sections: FooterSection[];
  /** Legal name used in the copyright notice, e.g. "ChemTradeAsia Pte. Ltd." */
  copyrightName: string;
};

// ─── SEO ──────────────────────────────────────────────────────────────────────

export type SeoConfig = {
  /** Default <title> for the tenant's root page. */
  title: string;
  /**
   * Optional printf-style template applied to per-page titles.
   * Example: "%s | ChemTradeAsia"
   */
  titleTemplate?: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
  /** Used to build canonical URLs, e.g. "https://chemtradeasia.com". */
  canonicalBase?: string;
};

// ─── i18n / Locales ───────────────────────────────────────────────────────────

export type LocaleConfig = {
  /** IETF language tag, e.g. "en", "id", "zh-Hans". */
  defaultLocale: string;
  supportedLocales: string[];
  /** Locales that require right-to-left layout, e.g. ["ar", "he"]. */
  rtlLocales?: string[];
};

// ─── Auth ─────────────────────────────────────────────────────────────────────

export type AuthProviderType = "credentials" | "google" | "github" | "custom";

export type AuthProvider = {
  type: AuthProviderType;
  /** Display label shown on the sign-in page button. */
  label?: string;
  /**
   * For "custom" providers: the full URL of the tenant's auth endpoint.
   * For OAuth providers: overrides the default callback URL if needed.
   */
  loginUrl?: string;
};

// ─── Styleguide ───────────────────────────────────────────────────────────────

/**
 * Global CSS variable overrides applied to the <html> element.
 * Keys are CSS custom property names without the leading "--".
 * Example: { "brand-primary": "#e63946" } → style="--brand-primary:#e63946"
 *
 * These sit at level 2 in the 3-level style hierarchy:
 *   1. Component-level override (per-section, future)
 *   2. Global styleguide override  ← this
 *   3. Local default (globals.css :root)
 */
export type StyleguideConfig = {
  vars?: Record<string, string>;
};

// ─── Root Tenant Config ───────────────────────────────────────────────────────

/**
 * The complete bootstrap configuration returned by the tenant API.
 * This is the single source of truth for all tenant-specific behaviour:
 * layout selection, branding, navigation, footer, SEO, i18n, and auth.
 *
 * API endpoint (future): GET /api/v1/tenants/:tenantId/bootstrap
 */
export type TenantConfig = {
  /** Stable identifier for the tenant, e.g. "chemtradeasia", "chemtradeasia-id". */
  tenantId: string;
  /**
   * Global header component variant for the site.
   * Provided by API later; for now comes from fallback/mock config.
   */
  headerVariant?: string;
  /**
   * Global footer component variant for the site.
   * Provided by API later; for now comes from fallback/mock config.
   */
  footerVariant?: string;
  branding: BrandingConfig;
  navigation: NavigationConfig;
  footer: FooterConfig;
  /** Global CSS variable overrides. Applied to <html> on every render. */
  styleguide?: StyleguideConfig;
  seo: SeoConfig;
  locales: LocaleConfig;
  authProviders: AuthProvider[];
};

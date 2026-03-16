/**
 * Centralized API fetch utility for the ChemTradeAsia storefront.
 *
 * Responsibilities:
 *  - Single entry point for all server-side HTTP calls to the Laravel API.
 *  - Typed error surface via ApiError.
 *  - ISR / on-demand revalidation via Next.js fetch extensions.
 *  - Graceful fallback to hardcoded defaults while the API is not yet available.
 *
 * Environment variables:
 *  API_BASE_URL  — Base URL of the Laravel API, e.g. "https://api.chemtradeasia.com"
 *                  Leave unset (or empty) during pre-alpha to use fallback config.
 */

import { cache } from "react";
import type { TenantConfig } from "@/types/tenant";
import { validateTenantConfig } from "./tenant-validator";

const API_BASE_URL = process.env.API_BASE_URL ?? "";

// ─── Error ────────────────────────────────────────────────────────────────────

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    message?: string,
  ) {
    super(message ?? `API error ${status}: ${statusText}`);
    this.name = "ApiError";
  }
}

// ─── Core fetch utility ───────────────────────────────────────────────────────

/**
 * Options accepted by apiFetch.
 * `revalidate` and `tags` map to Next.js's `fetch({ next: { ... } })` extension
 * and are kept at the top level for a cleaner call-site.
 */
type ApiFetchOptions = RequestInit & {
  /** Seconds before the cached response is considered stale. `false` = no cache. */
  revalidate?: number | false;
  /** Cache tags for on-demand revalidation via `revalidateTag()`. */
  tags?: string[];
};

/**
 * Typed wrapper around `fetch` that:
 *  - Prefixes relative paths with API_BASE_URL.
 *  - Throws ApiError for non-2xx responses.
 *  - Forwards ISR / revalidation options to Next.js's extended fetch.
 */
export async function apiFetch<T>(
  endpoint: string,
  options: ApiFetchOptions = {},
): Promise<T> {
  const { revalidate, tags, ...init } = options;

  const nextOptions: { revalidate?: number | false; tags?: string[] } = {};
  if (revalidate !== undefined) nextOptions.revalidate = revalidate;
  if (tags?.length) nextOptions.tags = tags;

  const url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...init,
    ...(Object.keys(nextOptions).length > 0 && { next: nextOptions }),
  });

  if (!response.ok) {
    throw new ApiError(
      response.status,
      response.statusText,
      `[apiFetch] ${response.status} ${response.statusText} — ${url}`,
    );
  }

  return response.json() as Promise<T>;
}

// ─── Fallback tenant config ───────────────────────────────────────────────────

/**
 * Returns a complete TenantConfig built from the data that is currently
 * hardcoded across the codebase (HeaderOne config, FooterOne links, etc.).
 *
 * This is the single authoritative fallback used when:
 *  a) API_BASE_URL is not configured (pre-alpha / local dev), or
 *  b) The bootstrap API call fails (network error, 5xx, etc.).
 *
 * Once the Laravel API is available, this function becomes the definition of
 * "what a valid default config looks like" and can be removed or repurposed as
 * a mock for tests.
 */
function getFallbackTenantConfig(tenantId: string): TenantConfig {
  return {
    tenantId,
    layoutVariant: "layout-one",

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
      actions: [
        { type: "signIn", label: "Sign In", href: "/sign-in" },
      ],
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

// ─── Bootstrap API ────────────────────────────────────────────────────────────

/**
 * Fetches the full tenant configuration from the bootstrap API endpoint.
 *
 * Wrapped with React's `cache()` so multiple calls with the same tenantId
 * within a single render tree are deduplicated — only one network request
 * is made regardless of how many Server Components call this function.
 *
 * ISR: the response is cached for 1 hour (3600 s) at the Next.js layer.
 * Use `revalidateTag("bootstrap")` or `revalidateTag("tenant-<id>")` from
 * a Route Handler to invalidate on content change (webhook from Laravel CMS).
 *
 * Future endpoint: GET /api/v1/tenants/:tenantId/bootstrap
 */
export const fetchTenantBootstrap = cache(
  async (tenantId: string): Promise<TenantConfig> => {
    if (!API_BASE_URL) {
      return validateTenantConfig(getFallbackTenantConfig(tenantId));
    }

    try {
      const raw = await apiFetch<unknown>(
        `/api/v1/tenants/${tenantId}/bootstrap`,
        {
          revalidate: 3600,
          tags: [`tenant-${tenantId}`, "bootstrap"],
        },
      );
      return validateTenantConfig(raw);
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[fetchTenantBootstrap] API unavailable for tenant "${tenantId}". Using fallback config.\n`,
          error instanceof ApiError
            ? `${error.status} ${error.statusText}`
            : String(error),
        );
      }
      return validateTenantConfig(getFallbackTenantConfig(tenantId));
    }
  },
);

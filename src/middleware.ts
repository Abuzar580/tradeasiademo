/**
 * Next.js Edge Middleware — Tenant Resolution
 *
 * Runs on every request (except static assets) before any Server Component
 * or Route Handler executes.
 *
 * Responsibilities:
 *  1. Read the `host` header from the incoming request.
 *  2. Map the hostname to an internal tenant identifier.
 *  3. Inject the resolved `x-tenant-id` header so Server Components can
 *     call getTenantId() (lib/tenant.ts) without re-parsing the host.
 *
 * Scaling the domain map:
 *  Today: hardcoded in DOMAIN_TENANT_MAP below.
 *  Phase 1+: replace with a Vercel Edge Config read, a KV store lookup, or
 *  a pattern-extraction rule (e.g. strip ".chemtradeasia.com" suffix for
 *  country subdomains) so 90+ domains don't require code changes.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Domain → Tenant ID mapping ───────────────────────────────────────────────
//
// Keys are lowercase hostnames as received in the `host` header.
// Include both bare-domain and www variants.
// Include localhost variants so local development resolves correctly.

const DOMAIN_TENANT_MAP: Record<string, string> = {
  // ── Global / main brand ──────────────────────────────────────────────────
  "chemtradeasia.com": "chemtradeasia",
  "www.chemtradeasia.com": "chemtradeasia",

  // ── Country-specific domains ─────────────────────────────────────────────
  // Add each new tenant domain here as they are onboarded.
  // The tenant ID should match the identifier used in the Laravel API.
  "chemtradeasia.co.id": "chemtradeasia-id",
  "www.chemtradeasia.co.id": "chemtradeasia-id",
  "chemtradeasia.in": "chemtradeasia-in",
  "www.chemtradeasia.in": "chemtradeasia-in",
  "chemtradeasia.com.ph": "chemtradeasia-ph",
  "www.chemtradeasia.com.ph": "chemtradeasia-ph",

  // ── Local development ────────────────────────────────────────────────────
  localhost: "chemtradeasia",
  "localhost:3000": "chemtradeasia",
  "127.0.0.1": "chemtradeasia",
  "127.0.0.1:3000": "chemtradeasia",
};

const DEFAULT_TENANT_ID = "chemtradeasia";

function resolveTenantId(host: string): string {
  return DOMAIN_TENANT_MAP[host.toLowerCase()] ?? DEFAULT_TENANT_ID;
}

// ─── Middleware handler ───────────────────────────────────────────────────────

export function middleware(request: NextRequest): NextResponse {
  const host = request.headers.get("host") ?? "";
  const tenantId = resolveTenantId(host);

  // Clone request headers and attach the resolved tenant ID.
  // Downstream Server Components read this via getTenantId() in lib/tenant.ts.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tenant-id", tenantId);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

// ─── Matcher ──────────────────────────────────────────────────────────────────
//
// Run middleware on every path EXCEPT:
//  - _next/static  : compiled client assets (JS, CSS, fonts)
//  - _next/image   : Next.js Image Optimization API
//  - favicon.ico   : browser favicon request
//  - Static file extensions served from /public

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|eot)$).*)",
  ],
};

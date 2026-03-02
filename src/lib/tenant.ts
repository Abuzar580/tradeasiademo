/**
 * Server-only tenant identity utilities.
 *
 * This module reads the `x-tenant-id` request header that is injected by
 * middleware.ts on every incoming request. It must only be called from:
 *   - Server Components (async components in the App Router)
 *   - Route Handlers  (app/api/any/route.ts)
 *   - Server Actions  (functions marked with "use server")
 *
 * Calling getTenantId() from a Client Component ("use client") will throw at runtime
 * because `next/headers` is not available in the browser.
 */

import { headers } from "next/headers";

/** Fallback used when no `x-tenant-id` header is present (e.g. direct server access). */
const DEFAULT_TENANT_ID = "chemtradeasia";

/**
 * Returns the tenant identifier for the current request.
 *
 * The value is set by middleware.ts based on the incoming `host` header,
 * so it is always available by the time any Server Component renders.
 *
 * @example
 * // In a Server Component or Route Handler:
 * const tenantId = await getTenantId();
 * const config   = await fetchTenantBootstrap(tenantId);
 */
export async function getTenantId(): Promise<string> {
  const headersList = await headers();
  return headersList.get("x-tenant-id") ?? DEFAULT_TENANT_ID;
}

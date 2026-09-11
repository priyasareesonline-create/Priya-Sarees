/**
 * Browser PUT CORS for Priya Sarees storefronts only.
 * Unknown origins get no Access-Control-Allow-Origin (no `*` fallback).
 */

const EXACT_ORIGINS = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://localhost",
  "http://localhost",
  "capacitor://localhost",
  "https://priya-sarees.vercel.app",
]);

const PREVIEW_ORIGIN_PATTERNS = [
  /^https:\/\/priya-sarees(-[\w]+)*\.vercel\.app$/i,
];

export function isAllowedCorsOrigin(origin: string): boolean {
  if (!origin) return false;
  if (EXACT_ORIGINS.has(origin)) return true;
  return PREVIEW_ORIGIN_PATTERNS.some((pattern) => pattern.test(origin));
}

export function corsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get("origin") ?? "";
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
  if (isAllowedCorsOrigin(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

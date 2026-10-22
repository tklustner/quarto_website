// CARTO raster tile proxy for timklustner.com.
// The browser asks tiles.timklustner.com/<style>/<z>/<x>/<y>.png; the Worker adds
// the CARTO key (a Worker secret) on the server, so the key never reaches a page
// or the repo. Only CARTO raster paths, and only from the site or localhost.

const TILE_PATH = /^\/((?:rastertiles\/)?[a-z_]+)\/\d{1,2}\/\d{1,7}\/\d{1,7}(?:@2x)?\.png$/;
const ALLOWED_ORIGIN = /^https?:\/\/(?:(?:www\.)?timklustner\.com|localhost|127\.0\.0\.1)(?::\d+)?$/;
const ONE_MONTH_S = 2592000;

export default {
  async fetch(request, env) {
    if (request.method !== "GET") return new Response("method not allowed", { status: 405 });
    const url = new URL(request.url);
    if (!TILE_PATH.test(url.pathname)) return new Response("not found", { status: 404 });
    const referer = request.headers.get("Referer");
    if (!referer || !ALLOWED_ORIGIN.test(new URL(referer).origin)) {
      return new Response("forbidden", { status: 403 });
    }
    const upstream = await fetch(
      `https://a.basemaps.cartocdn.com${url.pathname}?key=${env.CARTO_API_KEY}`,
      { cf: { cacheEverything: true, cacheTtl: ONE_MONTH_S } },
    );
    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("Content-Type") ?? "image/png",
        "Cache-Control": "public, max-age=604800",
      },
    });
  },
};

const CACHE_NAME = "latindance-static-v3";
const NETWORK_NO_CACHE_HEADER = "no-store, no-cache, must-revalidate";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./index-en.html",
  "./assets/css/style.css?v=102",
  "./assets/js/main.js?v=9",
  "./assets/js/constants.js?v=1",
  "./assets/js/utils/filter-utils.js?v=1",
  "./assets/js/venues.js?v=3",
  "./assets/js/structured-data.js?v=2",
  "./assets/js/data/seoul.js?v=1",
  "./assets/js/data/daegu.js?v=1",
  "./assets/js/data/gyeongsangbukdo.js?v=1",
  "./assets/js/data/gyeongsangnamdo.js?v=1",
  "./assets/js/data/busan.js?v=1",
  "./assets/js/data/ulsan.js?v=1"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return undefined;
        })
      )
    ).then(() => self.clients.claim())
  );
});

const applyNoCacheHeaders = (response) => {
  if (!response || response.type === "opaque") {
    return response;
  }
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", NETWORK_NO_CACHE_HEADER);
  headers.set("Pragma", "no-cache");
  headers.set("Expires", "0");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(request, { cache: "no-store" })
      .then((networkResponse) => {
        if (!networkResponse || networkResponse.type === "opaque") {
          return networkResponse;
        }

        const responseForReturn = applyNoCacheHeaders(networkResponse.clone());

        if (networkResponse.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, networkResponse.clone());
          });
        }

        return responseForReturn;
      })
      .catch(() => {
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return undefined;
        });
      })
  );
});

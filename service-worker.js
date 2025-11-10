const CACHE_NAME = "latindance-static-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./index-en.html",
  "./assets/css/style.css?v=101",
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
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type === "opaque"
          ) {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => {
          if (request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return undefined;
        });
    })
  );
});

(() => {
  "use strict";

  const version = "v0.0.2";
  const OFFLINE_URL = "/offline";

  const offlinePages = [
    "/",
    "/projects",
    "/about",
    "/cv",
    "/contact",
    "/privacy-policy",
    "/projects/portfolio-project",
    "/projects/candidate-project",
    "/projects/lineup-project",
    "/projects/book-space-project",
    "/projects/stickersmash-project",
    "/projects/group-app-project",
    "/projects/project-idle-project",
    "/blog/javascript",
    OFFLINE_URL,
  ];

  const staticAssets = [
    "/favicon.png",
    "/favicon.webp",
    "/assets/image/Jimmi.webp",
    "/assets/image/HERO.webp",
    "/assets/image/nature.webp",
    "/assets/image/projectimage/portfolio-img.webp",
    "/assets/image/projectimage/lineup-img.svg",
    "/assets/image/projectimage/book-space-img.svg",
    "/assets/image/PortfolioDB.svg",
    "/assets/files/cv/CV-2026.pdf",
  ];

  const cacheName = (key) => `${version}-${key}`;

  const isSameOriginGet = (request) =>
    request.method === "GET" && new URL(request.url).origin === self.location.origin;

  const shouldCacheAsset = (request, response) => {
    if (!response || response.status !== 200 || response.type !== "basic") {
      return false;
    }

    const destination = request.destination;
    return ["font", "image", "script", "style", "worker"].includes(destination);
  };

  const putInCache = async (cacheKey, request, response) => {
    const responseCopy = response.clone();
    const cache = await caches.open(cacheName(cacheKey));
    await cache.put(request, responseCopy);
  };

  const cacheHtmlResponse = async (request, response, pathname) => {
    if (!response || response.status !== 200 || response.type !== "basic") {
      return response;
    }

    const cacheKey = offlinePages.includes(pathname) ? "static" : "pages";
    await putInCache(cacheKey, request, response);
    return response;
  };

  self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
      caches.open(cacheName("static")).then((cache) => cache.addAll([...offlinePages, ...staticAssets]))
    );
  });

  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches
        .keys()
        .then((keyList) =>
          Promise.all(
            keyList
              .filter((key) => !key.startsWith(version))
              .map((key) => caches.delete(key))
          )
        )
        .then(() => self.clients.claim())
    );
  });

  self.addEventListener("fetch", (event) => {
    const { request } = event;

    if (!isSameOriginGet(request)) {
      return;
    }

    const url = new URL(request.url);
    const acceptHeader = request.headers.get("Accept") || "";
    const isHtmlRequest = request.mode === "navigate" || acceptHeader.includes("text/html");

    if (isHtmlRequest) {
      event.respondWith(
        fetch(request)
          .then((response) => cacheHtmlResponse(request, response, url.pathname))
          .catch(() =>
            caches.match(request).then((cachedResponse) => cachedResponse || caches.match(OFFLINE_URL))
          )
      );
      return;
    }

    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          if (shouldCacheAsset(request, response)) {
            event.waitUntil(putInCache("static", request, response));
          }

          return response;
        });
      })
    );
  });
})();

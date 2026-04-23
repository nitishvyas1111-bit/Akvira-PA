const CACHE_NAME = 'akvira-v5-cache';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Service Worker Install karna
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Network requests ko handle karna
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});


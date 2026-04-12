const cacheName = 'pswq-v1';
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', async el => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', el => {
  el.respondWith(fetch(el.request));
});

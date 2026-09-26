/* CNA Prep - offline shell */
const CACHE = "cna-prep-v2";
const ASSETS = ["./","index.html","manifest.json",
  "icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png",
  "icons/apple-touch-icon.png","icons/logo.png",
  "favicon.ico","icons/favicon-32.png","icons/favicon-16.png","404.html"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // let fonts and anything else go to the network
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("index.html")))
  );
});

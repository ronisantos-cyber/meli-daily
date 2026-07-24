// Service worker mínimo — só habilita instalação do PWA.
// Network-first sem cache persistente, pra sempre pegar a versão nova do GitHub.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => { e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))); });

const CACHE_NAME = 'luna-leo-tetris-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  
  // Audio tracks
  '/assets/audio/Adventures in Adventureland.mp3',
  '/assets/audio/artblock.ogg',
  '/assets/audio/Bruno_Belotti_-_Nel_giardino_dello_Zar__Polka_Loop.mp3',
  '/assets/audio/Ether Vox.mp3',
  '/assets/audio/Galactic Rap.mp3',
  '/assets/audio/gods_of_trance.mid',
  '/assets/audio/invention4-1loop.wav',
  '/assets/audio/Limit 70.mp3',
  '/assets/audio/Mesmerizing Galaxy Loop.mp3',
  '/assets/audio/Paradise_Found.mp3',
  '/assets/audio/the return.ogg',
  
  // Sound effects
  '/assets/audio/fx/321104__nsstudios__blip2.wav',
  '/assets/audio/fx/bip_01.webm',
  '/assets/audio/fx/click_touch.webm',
  '/assets/audio/fx/explosion 3.webm',
  '/assets/audio/fx/game-over-ok.webm',
  '/assets/audio/fx/row_cleared01.webm',
  '/assets/audio/fx/row_cleared02.webm',
  '/assets/audio/fx/sfx1.webm',
  '/assets/audio/fx/squaremotif1.webm',
  
  // External resources
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&display=swap'
];

// Install event - cache all resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Files cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error caching files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated successfully');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          console.log('Service Worker: Serving from cache:', event.request.url);
          return response;
        }
        
        console.log('Service Worker: Fetching from network:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            // Cache the new response
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
                console.log('Service Worker: Cached new resource:', event.request.url);
              });
            
            return response;
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed:', error);
            
            // Return offline page for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
            
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Background sync for future features
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync triggered:', event.tag);
});

// Push notifications for future features
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  // Future implementation for game notifications
});

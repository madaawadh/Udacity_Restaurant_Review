self.addEventListener('install', function(event){
   
  event.waitUntil(
caches.open('witter-static-v1').then(function(cache) {
  return cache.addAll(
    [ '/',
    '/index.html',
    '/restaurant.html?id=',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/css/styles.css',
    '/data/restaurants.json',
     '/img']
     );
    })
  );
});
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response) return response;
             return fetch(event.request); 
        })

    );
});
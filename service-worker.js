"use strict";var precacheConfig=[["/React-Match-Match-Game/index.html","a179b348ae2d5d665fd8a581363843a1"],["/React-Match-Match-Game/static/css/main.3cf97c1c.css","986256abd375bcda7e50c0435c58483a"],["/React-Match-Match-Game/static/js/main.742c74b0.js","fb202a9123c3012deaee598b7df63817"],["/React-Match-Match-Game/static/media/Qarmic_sans_Abridged.6c400671.ttf","6c400671a04db2306d95cf4847b91fa8"],["/React-Match-Match-Game/static/media/pair1.b7ea1c5e.png","b7ea1c5e284ad4ebfcdfb6ad84190ac5"],["/React-Match-Match-Game/static/media/pair2.84795bcf.png","84795bcf8395176fffdb016109a578cc"],["/React-Match-Match-Game/static/media/pair3.bc7d2319.png","bc7d2319154b4437cfb97ad37629d316"],["/React-Match-Match-Game/static/media/pair4.30768971.png","30768971ff2f3a62d7a0f329fc367123"],["/React-Match-Match-Game/static/media/pair5.5f89fded.png","5f89fdededc49fcd20069c346b7f4486"],["/React-Match-Match-Game/static/media/skirt1.abf11232.png","abf112322862daf4bde917d1d287bc0f"],["/React-Match-Match-Game/static/media/skirt2.bec6aa02.png","bec6aa02033a590e244de7853a8f1fc7"],["/React-Match-Match-Game/static/media/skirt3.7d11ebe1.png","7d11ebe126a305a680a3fcd5ca278dd0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/React-Match-Match-Game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
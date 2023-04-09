'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c1a12b63b88dc433baf9f00ed489b862",
"assets/FontManifest.json": "10404673236b8dbf38450ddb3832f8f9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/arkakol.jpg": "8835eb468735d985c60dd82da0d6b1c7",
"assets/images/arkakolhareketleri/benchdip.jpeg": "8f5387e27c42c74416f3f6eea87ef56b",
"assets/images/arkakolhareketleri/Cablepushdown.jpeg": "51b891f02eadcf3642c8a59b46e7e018",
"assets/images/arkakolhareketleri/dambilkickback.jpeg": "7411d33dae14bdf96ae642b47c20a657",
"assets/images/arkakolhareketleri/lying.jpeg": "fe8aa8264c742f74bc06cdffa4402e40",
"assets/images/arkakolhareketleri/overhead.jpeg": "c50c1877fece7af0bb9e7c41c92e2d71",
"assets/images/bacak.jpg": "e5d83b9da70b3003552d3b3a0f22e0da",
"assets/images/bacakhareketleri/legcurl.jpeg": "0849608425220841506aa9c5d3bbab52",
"assets/images/bacakhareketleri/legextension.jpeg": "50348b5305b4e313fe1423301fe902d3",
"assets/images/bacakhareketleri/legpress.jpeg": "858a60a0918b687ad6d31545dd379bf4",
"assets/images/bacakhareketleri/squat.jpeg": "0e2263afa4b4b36a17bc4dd9bf1b0209",
"assets/images/bacakhareketleri/stepup.jpeg": "1d59de953944d79e374a7fe9e15a44c7",
"assets/images/fitness.jpeg": "a168742b69250c0f799e2f507673408d",
"assets/images/gogus.jpeg": "7d608523b026d819081656ab5354cf1c",
"assets/images/gogushareketleri/bench.jpeg": "dbf6452495a04a76885102267fd3dcdc",
"assets/images/gogushareketleri/cable.jpeg": "dd193b82e7e23b75fa43a7825557bcfc",
"assets/images/gogushareketleri/dambilfly.jpeg": "272490effc96519769648f7f1da7f188",
"assets/images/gogushareketleri/decline.png": "bcabffc2b5cc8984e5fae6e1f86b4497",
"assets/images/gogushareketleri/fly.jpeg": "8a11619af148335f916d5b365b52ef15",
"assets/images/omuz.jpg": "adf3ebb3e1c57c08725095816c232e5b",
"assets/images/omuzhareketleri/barbel.jpeg": "ac46b85eefb16379b5f756707c732867",
"assets/images/omuzhareketleri/bentover.jpeg": "ae8e60e20258439aab0ebf526f5e1cdc",
"assets/images/omuzhareketleri/dambilfront.jpeg": "aeedeb56e9059e78abd404dff3af63b0",
"assets/images/omuzhareketleri/lateries.jpeg": "745140c41870820d85c11885f0bdbb91",
"assets/images/omuzhareketleri/shoulderpress.jpeg": "2bf5c738336ed0676529d5dd1d862d49",
"assets/images/onkol.jpg": "7808b052058ddefdd5947ece24a2ceb1",
"assets/images/onkolhareketleri/cablecurl.jpeg": "ccfe258c70c1e051344580b2b5a598d1",
"assets/images/onkolhareketleri/concentration.jpeg": "156e2b9ce087a39a465e70933cf3918b",
"assets/images/onkolhareketleri/dambilpreacher.jpeg": "f9201e3e3af2626c12a50eab4fe3af87",
"assets/images/onkolhareketleri/ezbarreverse.jpeg": "46f303294f77f3245eb4494594e1f1fe",
"assets/images/onkolhareketleri/hummercurl.jpeg": "e2075442410a18649c75b3060b056747",
"assets/images/sirt.jpg": "609849dd8292e55838dadfcfc05d0773",
"assets/images/sirtHareketleri/barfix.jpg": "75582559b9b6ba038331dc27bed3f51b",
"assets/images/sirtHareketleri/deadlift.jpg": "f127f609251037abd71c49fc09009130",
"assets/images/sirtHareketleri/dumbellrow.jpg": "e8af638822d4275b5d123d843c01eb10",
"assets/images/sirtHareketleri/latpuldown.gif": "01630a218204372dee4852b8733b7f5b",
"assets/images/sirtHareketleri/Standing%2520T-Bar%2520Row.jpg": "680a6b042f7933ff70670943f8a3df94",
"assets/lib/font/GentiumBookBasic-Regular.ttf": "58b14ba866f518794c820e89131201ff",
"assets/NOTICES": "941e674d1040df31fa9a35c11cf7437b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "422cb4988ef929fb42c7487b58cd9f08",
"/": "422cb4988ef929fb42c7487b58cd9f08",
"main.dart.js": "4ad69fddea29dcf98c5481ab9c251223",
"manifest.json": "c568b17f4d502688e8bcdb6b1cc45db9",
"version.json": "8026fbccb43318c4a23022a27066c647"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

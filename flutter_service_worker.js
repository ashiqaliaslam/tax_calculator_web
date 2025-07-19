'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9931706a6857176b64cf0c007f42e31c",
"version.json": "c97156288533cc1c147bff4190d74bfd",
"index.html": "61b1317a408fd593f44850386b88370d",
"/": "61b1317a408fd593f44850386b88370d",
"main.dart.js": "86bcb117dadf25c006d3f175d2235ab7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "c5f3228eb20a944f1ac1a1c03bfafc02",
"icons/Icon-192.png": "7d5d541db61ba9f848146403882dbad8",
"icons/Icon-maskable-192.png": "7d5d541db61ba9f848146403882dbad8",
"icons/Icon-maskable-512.png": "bb40973c133a7c28aef6fa091da28027",
"icons/Icon-512.png": "bb40973c133a7c28aef6fa091da28027",
"manifest.json": "7066f6629cfc0b719832e54a0dc36b1c",
".git/config": "988d3baabbf3cf945c14f0d39138c11e",
".git/objects/92/9116680f3b750072b932504a1a89e8e03d7a50": "1d657975a6eb5c9900e85d9f15739ba7",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/87550888a9ec6b966b9663a1c0ae2a5d2d4728": "72135665fe3df252ef53d49060a0248b",
".git/objects/3c/88fda9b88fbb6d0978fc5d2018121cb009b013": "dd23593345e66ec11f56cf968b02c762",
".git/objects/56/9121966a0a1348cf96b902f2ecaf939671794d": "9affbb0b7d261fc9301bc8457637282d",
".git/objects/94/d75fe705e19adaa1585244cce5f8a80ea5b495": "5aa1b5904335f4a3a5a928af235e68ed",
".git/objects/5f/0d133c6ece9871873605b4d2653a25d7bb31aa": "fc9458de3ac6396443b2290612b3e8f9",
".git/objects/33/1d3df09bac8cf8a451fa3ced501652e9dad6d3": "6f210663f39a1f3da7fd44b955922257",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/e47dac8e73bc36a8b4bfd789711be2a6320bdf": "9e1ba13b210e69a644bcab822a95cf19",
".git/objects/d0/0442e99e5566df2331406b45e6f31750dd2c6a": "47e5274a7b5017f670505024433cc520",
".git/objects/df/696f1b19ea76d334a539c9053ba0c368b186fa": "406b7b777000494eabaca5c73c0cfc78",
".git/objects/ae/bb9c6b500dbdfa884fc5697dc9a2e512806639": "563b101c45e775bca8fac14daabac8e7",
".git/objects/d8/01521d9db172949d4e02828692877f3edf6141": "902c67f0da35b7fbaa18b0076a4a04a0",
".git/objects/f3/758bc27b78e37a962e0cb9462c6979f6776cea": "5d852a570384e84271b49be326c0dd13",
".git/objects/c7/1dcb1e7c7a0c7fb0aafbdc9073c01bca64b8c5": "9bbcd4bc4b2158aff1fa508e90027c02",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fd/6abded7ff3aba975b19239ccc8a5c02bb53db9": "41177e99c17e78425c2f5d84b437902d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/755b2c2ceec6621e8c17ac8d5f5f33648ad51b": "633ebc85e76cf7a32c666a2d24e792ff",
".git/objects/ca/a8c45534af92365af1dcfb6825f435a6ba3449": "3ed9f9acd368a796d623ab8fa714d588",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c1/6cd4541919e5a642a92d7f354dc51daea4eb9b": "13194cb652fc9dc3b238c32bb12be5ab",
".git/objects/c6/9a743d5d587e41d1f550e5f12ef449abcbf86b": "6d1770e7f8c6d3defefcc6da174a94bd",
".git/objects/4b/e69edfcdc9f368d701c7e88a31c58dce9b32f2": "38fea3e68563fef01c713c1514ac1c87",
".git/objects/45/5ee7b8599a12b48313501d90da4a399c1c0575": "0233cda23c0da5afb3dfe3f1bb0c50f7",
".git/objects/1f/2c349e89842fd567b9232b9308d8134c0b30b7": "3d57cfdaa69a2b457823fa687bb7991c",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/d2fa3c653d81b586f640ab1541f6d8dd3b375c": "c99d08298e995e302c277c2c4175a461",
".git/objects/28/f1716bfd79c0693aae18874e238c85db6f108a": "93513178af12ad220f68a1c837733718",
".git/objects/17/37fdf346934799d3c8229afe5c91f1711bb94d": "7e9075b456a9140c8ec0e39df50918bb",
".git/objects/8f/57e04f3ee81e18f1e24c88b2b76281fcc4170d": "f44d4f1baebf27a930c3d67a9c07e768",
".git/objects/75/fba03ca12589752c3066d1d1811ccf2109b5cc": "0622551543c5e0d69e8ec27dfd22f155",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/98/559d00ce6157a3503b114acc4aee5e1a5aa7a2": "0d1cca402523a7370edbcbbf70cb19b6",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/06/c045740baa00fd525e61b4c081bd0f5cb99133": "ac70f4607367dbbc94c4e59fda632475",
".git/objects/63/f7e7add7e8c2b013143daa19e288207dfdb417": "e41a1bcb70c08aefb9d431002c7ad50a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/ceba0305f932279a0ff8f098722a390385c29d": "44a97b330274c48c41f23d5435157161",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b7/789b92cb648099e94ca278d2d49af0b024cc2f": "afe43625f3d9832ba177ffed5f9a9936",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/a9768a9ca2f9ff716f8afe6ad730eb9b64026f": "34031c499f2e28021c4c14330092c40b",
".git/objects/e8/8f5c05af8a8a07ff1cddd22ff411c609d95ebb": "ae3b224a8a994505d25909fc5d5f8be7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/ce0413bc12bf3f93e306a693e223a0d3e2c993": "fd4d059b855c0c6d269c167e55c1963c",
".git/objects/e0/ad6d388402b49cd5e2f7d2da42a8acda411063": "1e03834563731b24a6e828e89a7c70f8",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/4f/bcb1017d6e38c48e773fa781c7345e51564fd6": "bc8e628effb1cfcce5ec99ee361dda0b",
".git/objects/4f/7412ef2e2ea641c2b3f37acbe434f917b49ac4": "47ab7c66a55d4fc93452d7dd4ce167f4",
".git/objects/14/63a9791593cecf1b68e4049092ca1699c4569b": "393e4258efc46d1e80cb4b34579e1060",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "30bb6a28edd4be72ccc1f1fa5ca12e74",
".git/logs/refs/heads/main": "7df6f3d6f40824c7ea938350d15c68db",
".git/logs/refs/remotes/origin/main": "7f702535219ead9783fbe930a44c1fab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "844be99ac131490f72153cf26e62036b",
".git/refs/remotes/origin/main": "844be99ac131490f72153cf26e62036b",
".git/index": "765ae15bfceaf748edacee14cfb251a1",
".git/COMMIT_EDITMSG": "ca286aca9b50e86f90dd4c7291af2aae",
"assets/AssetManifest.json": "bceea5ae11657fe1c1e558e12e4c44df",
"assets/NOTICES": "958915caa6576746c952c194501a5200",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c265f9e0734d160c1f1b990c066a5c37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "90218e6428bfe1c55712c2d460b08669",
"assets/fonts/MaterialIcons-Regular.otf": "0d2a4d791f60ea7fe5ac540f2a971c86",
"assets/assets/tax_slabs.json": "8b18fe43116442eb116be103825a19a4",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

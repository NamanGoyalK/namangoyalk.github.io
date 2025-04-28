'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e2cc51984ca81806512c5590e7402218",
".git/config": "273813f3cd9a30bd7bf735c2020e74c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2625be89577b027c0f0c8051822d8bf3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81347126be991cf0eba25a08d00ba799",
".git/logs/refs/heads/main": "aea669f2d75623862b3ebad792c6ba86",
".git/logs/refs/remotes/origin/main": "6fe7119f78619cba665ebf52afc4f48b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/cf4b526f67f2ba19c0ed25bb2deb9390882377": "ea70e021e78cfe6b3d8b1897fd1ff037",
".git/objects/08/9d50abc3309c159daab4115fb185b94b8633c2": "deb69ca8d6cedbc3c3af0dd033259543",
".git/objects/18/24bf6574d83048986a31dd5e5ce279327d1c94": "2cd6bc7ef677893aed7a936db303e992",
".git/objects/1b/402923554aff654910ce4bccc1f2c74e0ecda5": "d7ba7bf9ec201f6ecfee1d018e91e5a6",
".git/objects/23/2688158572a76afc4dd3ae5b843e38fd56a5f3": "c12ccbb3a5ba5c57abb8bf1325d7d573",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/d160fb665aa98cd5014b21820c2eb69a233eb6": "e2835bca9fb7248c5b1b9e5df1f3c708",
".git/objects/2e/0b190588e02bff174b6c35d17b53747e273701": "532cf0bf6de835fb4338cf62913568b6",
".git/objects/31/485c52b70b5b8845a4ece350b3b938175c9797": "b7ccfbe97ad198f374fba3c4b0a26b7a",
".git/objects/35/bcc2bf5d020878ff641de366ded2e4c8a4b2e4": "b3bc3d86b68b27fde8c0d4858296e617",
".git/objects/3d/6981bf28c1f2e56454c904527123d93331c6f9": "6b89238b1e1a03ed568047f5212f06f8",
".git/objects/43/1498200b40184defe5cd6a61a9d60e15c6e074": "41f65fabfc84664d3d87e074c32d149b",
".git/objects/46/f0e75bdc4cd43633ca4b6c902e698189e5bde5": "2a2288d980181f5c4ab8ca4a141b6b90",
".git/objects/51/6c59ffa00248215a5f36ca80c0f1799141e6ad": "21ce8197e1ba978bef538e4de7a90501",
".git/objects/57/c6a23cab6a7d137b411fbb6daa4494722ae7b2": "b59165742803dd28333a8b0b6d70a1ad",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/63/3b7d65fc88721c1d05cba55bbcbd0a725839c6": "b40e6b93a2fbf6ae0e5b3de5f54dca16",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6a/effc529d1491c2e718aeaa3797f48d89c120d2": "1c4276a61f59185c8f5128df5a9df2ae",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/79/32108e6e60f428ea00446833843b738d1f42fd": "b9acbf3a13640042b62c2bcbdb8d4930",
".git/objects/79/51f7fc6a68b9fcbea711110a9e0784a13c546a": "465bb39d2e7a8525f78e84e19a367668",
".git/objects/7e/bed562ee161356ea562e476c2f540e16159533": "c8e03308accd337c8c8aa5998d46d911",
".git/objects/80/72a0e0fdbbbd329a651b4a1f4fc1b8efbd4af6": "95c0bdec264b571d6932ef6fa07fd5b4",
".git/objects/83/b72c12e9740ab5c1b4dc4a2858d8159bb1debd": "068c29461d6d6d575739f31f6ef58a89",
".git/objects/84/a58dcb5fb610044ca2b79ddefd78956d0a6c54": "790c72f55ed16bf512e37c4850c04ffc",
".git/objects/84/d15581f16b38d6e2746b01c1b7806057cb142c": "6ba6d52b9f9329121d62b01b7d6cd1a7",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/8f880e48ebec7fb5c4503b8e56641d82328615": "afd2c7b7b01cb3c1ab57f26df989ddce",
".git/objects/95/16b113af30be8ec4dd69512f00103b325796b3": "ef867d762af3fb8ebcc3bc4b65504fb8",
".git/objects/95/4258e1b1e0375d5accce57ea5dc4c29e0f72dd": "4d7be58a2bfef57b8975e1ab322736c6",
".git/objects/97/650e95f93eda49bf64910c769ba581f74644e3": "8dde890984fa03b329ec95e8e431aca5",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/d66523982061752c465fae8560c2196b93c19f": "d0f869495a0e6a80ff3391c62ab79b4c",
".git/objects/9a/53b970436efefa63e76cbf3e44963b620a5400": "00a01d80a34966e9a0a71a8fcde02777",
".git/objects/9a/9271d2706179cb5183dbaf3a9b8af4fe257db5": "a4c7ee225e346aa30b3d6c35e3f1a674",
".git/objects/9f/dac991ed287f0dcb18e726a0b9c17963aa3a6a": "bc4abc764c06519fb107cc5ddb422bae",
".git/objects/a0/0a7338c208185d661031e1f3438763c0248c25": "1a354476fa154a5138615894c79573a9",
".git/objects/a0/fc85133df1fe285d72126e4c32a0fd19f61b95": "c2df826c0a8620f9f7d872f0e101d239",
".git/objects/a9/232224527d0d437da3c2eeb5d973f4f65da20e": "d72c1d7da0707398a40660cc58e205d1",
".git/objects/a9/363e9640a0b8ced17043455a810ac218f6bd12": "55ae0fe4052a1ab4fb8b6d46ade8395a",
".git/objects/ac/d2ab3ffe82c63e3376192d1946ed3b9e9f303d": "ac7edbf159043103820e8da00c4f1c6f",
".git/objects/ae/ddc8f0b3d34455d1cff5b7f3c0d3077e5f790c": "3bb1c9ed4a49cd27c1c715d46cc57a03",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/fbec59e10669ab433973b4a825efdfa4c69b1c": "5ef32f3624c21b49c5fe808867952a96",
".git/objects/b9/d8d9b99bc5770712eafb4f313960507bf24a7d": "29cc04f4fb97186ec950561f7c9bcf96",
".git/objects/be/d8faed2c8356ecbc7c98cc30e4869a200ba132": "5dc2fb439b891acdb4f3077d6a677528",
".git/objects/bf/69ee7e1c656f2194162d311b47f43ab6ccf430": "51d6e5026dce051961538665974c57ce",
".git/objects/c1/35211165ca9de83a3c045e174ea9d44cd96257": "651c8214d8f3a2ac1ff2e8df7bcd18b8",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/b3132c2fcc89f7abaa69263a1371c10298ca1f": "d94a5322803f035bbf92c5e8b6f40db1",
".git/objects/c5/4d3b94ae564998d3f83e77591c23d3a34a2e60": "ae8049fcf4ab9f51c25b69bc1bf57560",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/a783465e78ff5a6937a35484e2a587e85a79db": "05c2d9b596b2f60960706d7947dfc4a8",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/dc/7f0c5eecf8933af6374d4558ec6099ce4aa8fd": "ba04d3be7f2c8e28a3dbde0887d64bbc",
".git/objects/df/96c98205fd02124fd3f65d09a5495777f27a2d": "d75a6e131f07b11cb16dbb68424085a5",
".git/objects/e5/2e4b4a3fb425a4885fe952786fd51bab9a841d": "d84c69befefb0d61f8006c68e56db2cc",
".git/objects/ea/d4e5b13aa2eb4832bd08a488fcc07616fa9af5": "0ac2eb3d80afa7617d01f8f643c57f6f",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/a59232982662883c34edacb47be7e3f666d79c": "ffcd924b513ccb538ad27219fd50a96a",
".git/objects/f0/351911ed425e9dc2061b36c972342fe980ddcd": "ebf23b7599532fe336303f66b1f15401",
".git/objects/f1/2bc64858a0acbfce8218ed3d4ad91e94313315": "e7868d0daa66bbd3f9222cdea6340f98",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/ad00826f8a8692f2902f67ef1f4662032681c2": "d3f20f6276c7f0c31da2abd57d5011d8",
".git/ORIG_HEAD": "584a64d2abedf0b9bde7fb54f1cd8201",
".git/refs/heads/main": "007f901a61be2e34438b0d776a29f624",
".git/refs/remotes/origin/main": "007f901a61be2e34438b0d776a29f624",
"app-ads.txt": "5d72a856519be785e92304ee281cfc39",
"assets/AssetManifest.bin": "02969561337fb4cb6b0001ef156b2a27",
"assets/AssetManifest.bin.json": "031a0a7aac61c4a62b2854f60192e5e7",
"assets/AssetManifest.json": "52286a729ca42be81a490e89baf63bff",
"assets/assets/icons/portfolio.png": "12326cbeb8fa6beae877b0381a8103ce",
"assets/assets/icons/suitcase.png": "e6d02eefa6455858b0fd70745e94063a",
"assets/assets/images/PFPsq.jpg": "32c1be569294e7fa5a1d73ca7cfb84f9",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "4cc42b5aeae51562da8d49a28d664c67",
"assets/NOTICES": "ea95d3b810580c259482b2f313595ca5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "78e4cc609072333fbcdae6490d841451",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "854ab52e0bb810735689fba8f56a0f23",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "1fa5bca977063cba2eaa2d9a86aa65e3",
"google158e16b1cf0f6f61.html": "b38e4fd34efc0774f3c700aa4d5a038f",
"icons/Icon-192.png": "031cc85ddf815dfceb4ba95771109581",
"icons/Icon-512.png": "e5646a1ad5e9c5941a7b6d88021e70fc",
"icons/Icon-maskable-192.png": "031cc85ddf815dfceb4ba95771109581",
"icons/Icon-maskable-512.png": "e5646a1ad5e9c5941a7b6d88021e70fc",
"index.html": "ff9bd5c5c5f962d16f9b046315717ce5",
"/": "ff9bd5c5c5f962d16f9b046315717ce5",
"main.dart.js": "09aaf5d04a61cee2c3b9249a42189e2a",
"manifest.json": "ec177d1723d8d5ffe8bd1fbe27e7e41e",
"social-preview.png": "a50530ccd79f0216fe6519ac59ee3e43",
"version.json": "8649596933215ccdb13e3c4ed0113226"};
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

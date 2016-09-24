/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","df7848e8df60dfc3ddaef86845914e37"],["/bower_components/app-layout/app-drawer/app-drawer.html","5f00d3d4ef46df22c5c3dc6e361ab15d"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","893a47cb8cb722eebdc22c4cc8007d05"],["/bower_components/app-layout/app-header/app-header.html","e5b01aeb8a13089154a3e5b340868086"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","350fc37d1d1c7044c213567b6039da09"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","21886b073d93530ccaf667163fccf8ba"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","e78249dd83abc97d40411e4032250c77"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","a21d6a2fc019eb59d10586aada74313e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bf8d516030e7d6a31d8b7fc4a7c22051"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-route/app-location.html","52b3d8b5ecbb838b41bd9bd0ae556cca"],["/bower_components/app-route/app-route-converter-behavior.html","0e5b36ae9988a88bb30729fdb99a5d94"],["/bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/google-apis/google-maps-api.html","e4eb1641cec251f631cec2f569e8a551"],["/bower_components/google-map/google-map-marker.html","d4432d8c2b75325d455c0f975d76107a"],["/bower_components/google-map/google-map.html","f8b665c2abb72b7b661a5e465146aac7"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9a8e766d0ab03a5d13e275754ec3d54"],["/bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["/bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["/bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","d4e3d1fbafdabe66a7b95e1048b711ce"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-collapse/iron-collapse.html","40fee0299a9e09d752c6ac91a97d9f24"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","c5f139fb0f3ab12c584fa79302a9922f"],["/bower_components/iron-dropdown/iron-dropdown.html","60a45cf71d0893d16b8c29d063dec959"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","90471c0acb830c41b01e02a2507bed3c"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-form/iron-form.html","d567cf610fac57ae3c30af80c5400750"],["/bower_components/iron-icon/iron-icon.html","23fe3af4b80a767dc9ec5e2e0ac5ab42"],["/bower_components/iron-icons/image-icons.html","30ef0224c9cf6acd66c506818396ccf7"],["/bower_components/iron-icons/iron-icons.html","c8f9154ae89b94e658e4a52eee690a16"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-image/iron-image.html","bde5467573acb26172d1049ab2fca607"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","2278dab473da8287511ea8f8eb30144d"],["/bower_components/iron-location/iron-location.html","a3d62625e52efc55488804fb47c58474"],["/bower_components/iron-location/iron-query-params.html","4939f7b89ff899694a27bd1563543184"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","8c4fc9ccbb28f3bf68c621ebc3859fb7"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","3d22bc0675145cda7ca42168bce673ab"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","51191fe7de42d8a6a31503eab8ada83b"],["/bower_components/iron-pages/iron-pages.html","32b7cf66e67894263a2c5f6026597298"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/l2t-paper-slider/l2t-paper-slider.html","22021208a33b75208b9240e22421e923"],["/bower_components/neon-animation/animations/cascaded-animation.html","3a5a8c22afe014a904557b66938c44ba"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/hero-animation.html","4feaf331f46d411ce9ad465da1dbb65e"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/animations/reverse-ripple-animation.html","1e08f758cb172f8fb19fabffc163a180"],["/bower_components/neon-animation/animations/ripple-animation.html","4d33252f387c84d0702efaaf510990b0"],["/bower_components/neon-animation/animations/scale-down-animation.html","e9cedffa151b388200cb2a610b2252fc"],["/bower_components/neon-animation/animations/scale-up-animation.html","20059304b9b7e9377379ad75110ef2fc"],["/bower_components/neon-animation/animations/slide-down-animation.html","31286bfe0b2cb6f28ef5e1f9d181f641"],["/bower_components/neon-animation/animations/slide-from-bottom-animation.html","12eea18013bf5b89c642fde725469a62"],["/bower_components/neon-animation/animations/slide-from-left-animation.html","cb18058340412077b0b0a8a7228a79a6"],["/bower_components/neon-animation/animations/slide-from-right-animation.html","79f28e3d4580cef016e6ae8c63384e98"],["/bower_components/neon-animation/animations/slide-from-top-animation.html","565391366846573f1725585d15b9baad"],["/bower_components/neon-animation/animations/slide-left-animation.html","a44c677c010daf7872b77f53bcd86e58"],["/bower_components/neon-animation/animations/slide-right-animation.html","b9908b67414ba0dfc7442eb1207d05fc"],["/bower_components/neon-animation/animations/slide-up-animation.html","bee63970c6ffc2706419533c9b2bd65e"],["/bower_components/neon-animation/animations/transform-animation.html","c64feaff2d50eb6f6633c644063c6aa3"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/neon-animations.html","3b6524b3cc95f27b4b6d7821a7097137"],["/bower_components/neon-animation/neon-shared-element-animation-behavior.html","59b343c52eef4ff93901a3cba99577d6"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","babcc1f776831ddfab647db31d97ee05"],["/bower_components/paper-card/paper-card.html","4280e5e8e53955a21fdad7f42fe18028"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","8fb5282b6149bc429b6baef5c077a285"],["/bower_components/paper-dialog/paper-dialog.html","7a8d86ed89c215baf8cc42e4d7335271"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","d309383cfdcf6733d4e6827c3b877c72"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-light.html","8074203395bef6c38a4ee77780d04621"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","7bf40756c7cdf1557c25d16a54575b75"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu.html","d131534fc398f4e531a1eaa6c990410a"],["/bower_components/paper-fab/paper-fab.html","b3ad1553b61ad0996a0371b94efe2164"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","e3c61b8a6e35b134c99c09381ef48067"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","af49d89517ad735bfbd551b5194dce17"],["/bower_components/paper-input/paper-textarea.html","ffba68b77ff1d646eeffb3d0c4cac99f"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-listbox/paper-listbox.html","bfbc631d72b3e7b2b611c9a32430e3c6"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","47301784c93c3d9989abfbab68ec9859"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","328142b62de76860bca169b4a2d12342"],["/bower_components/paper-menu/paper-menu-shared-styles.html","9b2ae6e8b26011a37194ea3b4bdd043d"],["/bower_components/paper-menu/paper-menu.html","5270d7b4b603d9fdfcfdb079c750a3cd"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","7fd97f2613eb356e1bb901e37c3e8980"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","395fdc6be051eb7218b1c77a94eff726"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","2bf908cedd6ff6e67c18dbf337787bcc"],["/bower_components/parallax-container/parallax-container.html","0cd3cab681cb06a9660501232d4d7e4c"],["/bower_components/parallax-container/parallax-group.html","de5eb22b9e75d62ce9301b87c6d99ea1"],["/bower_components/parallax-container/parallax-layer.html","1103553bb71332f35dd4f97f9df1ed31"],["/bower_components/polymer/polymer-micro.html","ecf1ad808ec62a7adcec68e28cf3ffad"],["/bower_components/polymer/polymer-mini.html","e48d322a1d599c9db40523f050fbef23"],["/bower_components/polymer/polymer.html","837764153a0347c0e906b48d554941a0"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","607006febe5750df440a89ccd00660d7"],["/index.html","7e38d9e6b054744177302905060e8cc1"],["/src/admissions-open.html","9743584a4be090c78f73efbfc7e42c64"],["/src/card-container.html","134fffe970fba7793a18412f86c0360f"],["/src/faq-paper.html","e6f0c31536bbc81643ab4e9ac56ed8e4"],["/src/flex-layer-imagination.html","008ae2b223121eef5069762f07b78cbe"],["/src/flex-layer-montessori.html","fdb99416f167ec01c93d662696936dc4"],["/src/flex-layer.html","ea68c962dfb4f4af0eb8dd89e7310617"],["/src/honourable-people.html","b01b7ee44f3de1dd5e30e51c19317b26"],["/src/img_gallery/gallery-jquery.js","a7c877afa7152750c7c0371ec609ca85"],["/src/my-about-us.html","7c4d04a23fba5a8f9d8ab9a9654967db"],["/src/my-app.html","99ae9445bd54f3a361d4720c046cfdc5"],["/src/my-contact-us.html","7b1e3ddda04375d5b7f0881f92269e6b"],["/src/my-faqs-colaps.html","630cfb2a03b18a1abbaa0334bd6922fd"],["/src/my-gallery.html","b08de91c2c58da57f83f3d35f68bc0ac"],["/src/my-home.html","67295226d4624b3b3c1f8a93996c9b97"],["/src/my-icons.html","d957def570bfda7fffb60e6caa896006"],["/src/my-maria-montessori.html","7b91defe26c5544a99a09ff13a6c6e7c"],["/src/my-mission.html","9e32bf4c165b8982a82fb2402d90f4cf"],["/src/my-our-programs.html","849fdb71b6fb4d9fb64ec0c8c5536238"],["/src/my-parents.html","eba3f63916dacebb29f37a1cb90897d2"],["/src/notifications-bottom.html","5d5e88811bea811313cd3e32d8310171"],["/src/program-kid.html","7e5a4527eadcdc573337afcc094292d2"],["/src/program-layer.html","9b3d051f24a8073c9022fb1c941b4bab"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});





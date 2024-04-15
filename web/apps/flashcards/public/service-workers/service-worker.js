// /// <reference lib="WebWorker" />
// import { skipWaiting, clientsClaim } from "workbox-core"
// import { precacheAndRoute } from "workbox-precaching";

// importScripts(
//   'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
// );


// declare const self: ServiceWorkerGlobalScope

// precacheAndRoute(self.__WB_MANIFEST);
// skipWaiting();
// clientsClaim();


self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  // Here, you can add caching strategies
});
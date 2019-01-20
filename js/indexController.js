
if(!navigator.serviceWorker) return;
window.addEventListener('load', () => {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('ServiceWorker registration was successful!');
  }).catch(err => {
    console.log('ServiceWorker registration failed: ', err);
  });
});
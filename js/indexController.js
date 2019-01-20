
if(!navigator.serviceWorker) return;
window.addEventListener('load', () => {
  navigator.serviceWorker.register('/serviceWorker.js').then(() => {
    console.log('ServiceWorker registration was successful!');
  }).catch(err => {
    console.log('ServiceWorker registration failed: ', err);
  });
});

if(navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('js/serviceWorker.js').then(() => {
      console.log('ServiceWorker registration was successful!');
    }).catch(err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const NetworkFetch = require('./NetworkFetch')

console.log(NetworkFetch.fetchFromNetwork('./app.js'))  // Here everytime data is fetched from Network

// In Soln we are going to create a cache which will read from network if not preesent in cache

const NetworkFetch = require('./NetworkProxy')

const proxiedNetworkFetch = NetworkFetch.fetchFromNetwork()
console.log(proxiedNetworkFetch('./app.js'))
console.log(proxiedNetworkFetch('./app.js'))
console.log(proxiedNetworkFetch('./app.js'))

const NetworkFetch = require('./NetworkFetch')

class NetworkProxy {
  constructor () {
    this.cache = []
  }

  fetchFromNetwork (url) {
    var self = this
    return new Proxy(NetworkFetch.fetchFromNetwork, {
      apply (target, thisArg, args) {
        const urlParam = args[0]
        if (self.cache.includes(urlParam)) {
          return `${urlParam} - Response from cache`
        } else {
          self.cache.push(urlParam)
          return Reflect.apply(target, thisArg, args)
        }
      }
    })
  }
}
module.exports = new NetworkProxy()

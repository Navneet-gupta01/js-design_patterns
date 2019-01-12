class NetworkFetch {
  fetchFromNetwork (url) {
    return `${url} - Response Fetched From Network`
  }
}

module.exports = new NetworkFetch()

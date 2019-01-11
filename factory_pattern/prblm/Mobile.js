class Mobile {
  constructor (type = 'unnamed Device') {
    this.type = type
  }

  toString () {
    return JSON.stringify(this)
  }
}

module.exports = Mobile

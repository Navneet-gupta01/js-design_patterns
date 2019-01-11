class Mobile {
  constructor (builder) {
    this.type = builder.type || 'FEATURE_MOBILE'
    this.brand = builder.brand
    this.modelNumber = builder.modelNumber
    this.touchScreen = builder.touchScreen || false
    this.ram = builder.ram || 0.256
    this.memory = builder.memory || 0.512
  }
  toString () {
    return JSON.stringify(this)
  }
}

module.exports = Mobile

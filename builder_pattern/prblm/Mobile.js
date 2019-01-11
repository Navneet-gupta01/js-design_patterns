class Mobile {
  constructor (type = 'FEATURE_MOBILE', brand, modelNumber, touchScreen = false, ram = 0.5, memory = 1) {
    this.type = type
    this.brand = brand
    this.modelNumber = modelNumber
    this.touchScreen = touchScreen
    this.ram = ram
    this.memory = memory
  }
  toString () {
    return JSON.stringify(this)
  }
}

module.exports = Mobile

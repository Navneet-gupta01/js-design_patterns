const Mobile = require('./Mobile')

class MobileBuilder {
  constructor (brand, modelNumber) {
    this.brand = brand
    this.modelNumber = modelNumber
  }

  makeSmartPhone () {
    this.type = 'SMART_MOBILE'
    this.touchScreen = true
    return this
  }
  makeFeaturePhone () {
    this.type = 'FEATURE_MOBILE'
    this.touchScreen = false
    return this
  }
  assignRam (ram) {
    this.ram = ram
    return this
  }
  assignMemory (memory) {
    this.memory = memory
    return this
  }
  build () {
    return new Mobile(this)
  }
}

module.exports = MobileBuilder

const Mobile = require('./Mobile')

class SmartMobile extends Mobile {
  constructor (modelNumber, brand) {
    super('SMART_MOBILE')
    this.modelNumber = modelNumber
    this.brand = brand
    this.touchScreen = true
  }
}

module.exports = SmartMobile

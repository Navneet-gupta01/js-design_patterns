const Mobile = require('./Mobile')

class FeatureMobile extends Mobile {
  constructor (modelNumber, brand) {
    super('FEATURE_MOBILE')
    this.modelNumber = modelNumber
    this.brand = brand
    this.touchScreen = false
  }
}

module.exports = FeatureMobile

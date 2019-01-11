const FeatureMobile = require('./FeatureMobile')
const SmartMobile = require('./SmartMobile')

class MobileFactory {
  createMobile (modelNumber, brand, type) {
    if (type.toUpperCase() === 'SMART_MOBILE') {
      return new SmartMobile(modelNumber, brand)
    } else {
      return new FeatureMobile(modelNumber, brand)
    }
  }
}
module.exports = new MobileFactory()

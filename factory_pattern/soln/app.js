const mobileFactory = require('./MobileFactory')

const smasungSmartPhone = mobileFactory.createMobile('Galaxy S9', 'Samsung', 'SMART_MOBILE')
const nokiaFeaturePhone = mobileFactory.createMobile('1100', 'Nokia', 'FEATURE_MOBILE')

console.log(smasungSmartPhone.toString())
console.log(nokiaFeaturePhone.toString())

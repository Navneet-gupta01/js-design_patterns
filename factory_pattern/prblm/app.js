const FeatureMobile = require('./FeatureMobile')
const SmartMobile = require('./SmartMobile')

const smasungSmartPhone = new SmartMobile('Galaxy S9', 'Samsung')
const nokiaFeaturePhone = new FeatureMobile('1100', 'Nokia')

console.log(smasungSmartPhone.toString())
console.log(nokiaFeaturePhone.toString())

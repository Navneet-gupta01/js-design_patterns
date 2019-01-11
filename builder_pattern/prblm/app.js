const Mobile = require('./Mobile')

const smasungSmartPhone = new Mobile('SMART_MOBILE', 'Smasung', 'Galazxy s6', true, 4, 64)
const samsungFeaturePhone = new Mobile('FEATURE_MOBILE', 'Smasung', 'Guru E1200')

console.log(smasungSmartPhone.toString())
console.log(samsungFeaturePhone.toString())

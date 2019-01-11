const MobileBuilder = require('./MobileBuilder')

const smasungSmartPhone = new MobileBuilder('Smasung', 'Galazxy s6').makeSmartPhone().assignRam(4).assignMemory(128).build()
const samsungFeaturePhone = new MobileBuilder('Smasung', 'Guru E1200').makeFeaturePhone().build()

console.log(smasungSmartPhone.toString())
console.log(samsungFeaturePhone.toString())

const orderProto = require('./order_proto')

var order1 = orderProto.clone()
order1.mobileNo = '234567891'
order1.addItemToOrder('item5')

var order2 = orderProto.clone()
order1.mobileNo = '345678912'
order2.addItemToOrder('item6')

console.log(`${order1.mobileNo}: ${order1.itemsOrdered}`)
console.log(`${order2.mobileNo}: ${order2.itemsOrdered}`)

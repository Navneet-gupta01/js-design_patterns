const Order = require('./order')

var order1 = new Order('234567890\'s Order')
order1.addItemToOrder('item1') // Duplicate in order 2 also
order1.addItemToOrder('item2')// Duplicate in order 2 also
order1.addItemToOrder('item3')// Duplicate in order 2 also
order1.addItemToOrder('item4')// Duplicate in order 2 also
order1.addItemToOrder('item5')

var order2 = new Order('345678912\'s Order')
order2.addItemToOrder('item1')// Duplicate in order 1 also
order2.addItemToOrder('item2')// Duplicate in order 1 also
order2.addItemToOrder('item3')// Duplicate in order 1 also
order2.addItemToOrder('item4')// Duplicate in order 1 also
order2.addItemToOrder('item6')

console.log(`${order1.mobileNo}: ${order1.itemsOrdered}`)
console.log(`${order2.mobileNo}: ${order2.itemsOrdered}`)

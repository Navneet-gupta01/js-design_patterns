const Order = require('./order')

var proto = new Order()
proto.addItemToOrder('item1') // refactored Common Item
proto.addItemToOrder('item2') // refactored Common Item
proto.addItemToOrder('item3') // refactored Common Item
proto.addItemToOrder('item4') // refactored Common Item

module.exports = proto

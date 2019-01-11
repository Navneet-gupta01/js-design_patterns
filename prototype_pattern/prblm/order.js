class Order {
  constructor (mobileNo = '123456789') {
    this._mobileNo = mobileNo
    this._itemsOrdered = []
  }

  set mobileNo (mobileNo) {
    this._mobileNo = mobileNo
  }
  get mobileNo () {
    return this._mobileNo
  }

  addItemToOrder (item) {
    this._itemsOrdered.push(item)
  }

  get itemsOrdered () {
    this._itemsOrdered.join(', ')
  }
}

module.exports = Order

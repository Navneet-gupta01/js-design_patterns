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
    return this._itemsOrdered.join(', ')
  }

  clone () {
    var proto = Object.getPrototypeOf(this)
    var cloned = Object.create(proto)
    cloned._mobileNo = this._mobileNo
    cloned._itemsOrdered = [...this._itemsOrdered]

    return cloned
  }
}

module.exports = Order

const SMSClient = require('./client')

const client = new SMSClient().getInstance()

class Order {
  constructor (itemDetails, mobileNumber) {
    this.mobileNo = mobileNumber
    this.itemsOrdered = itemDetails
    client.sendSms('Order created Successfully', mobileNumber)
  }
}
module.exports = Order

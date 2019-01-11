const client = require('./client')

// const client = new SMSClient().getInstance()

class Registration {
  constructor () {
    this.registrations = []
  }

  get registeredUsers () {
    this.registrations.map(x => x.email)
  }

  register (name, email, mobileNumber) {
    this.registrations.push({ name: name, email: email, mobileNo: mobileNumber })
    client.sendSms(`Congrats You have successfully Registered using ${mobileNumber}`, mobileNumber)
  }
}
module.exports = Registration

const SMSClient = require('./client')
const Order = require('./order')
const Registration = require('./registration')

const client = new SMSClient()
const registration = new Registration()


registration.register('Navneet Gupta', 'navneet_gupta@navneet.com', '123456789')
registration.register('Navneet Kumar', 'navneet_kumar@navneet.com', '234567891')
registration.register('Navneet', 'navneet@navneet.com', '345678912')


const navneetGuptaOrder = new Order([
  {
    item: 'First',
    unitPrice: 50,
    unit: 10
  },
  {
    item: 'Second',
    unitPrice: 1000,
    unit: 1
  }], '123456789')
const navneetKumarOrder = new Order([
  {
    item: 'First',
    unitPrice: 50,
    unit: 5
  },
  {
    item: 'Second',
    unitPrice: 1000,
    unit: 2
  }
], '234567891')
const navneetOrder = new Order([
  {
    item: 'First',
    unitPrice: 50,
    unit: 20
  },
  {
    item: 'Second',
    unitPrice: 1000,
    unit: 1
  }
], '345678912')

client.sendSms('3-order created', '1212121212')

// Issue with the solution is it should show total number of SMS Sent but it is showing only 1 instead of 7. so we will be using Singleton pattern for client to improve on the solution.
console.log(`total SMS Sent: ${client.noOfSmsSent}`)

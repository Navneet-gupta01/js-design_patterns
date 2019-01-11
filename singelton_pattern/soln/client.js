class SMSClient {
  constructor () {
    this.messages = []
  }

  get noOfSmsSent () {
    return this.messages.length
  }

  sendSms (message, number) {
    const timeStamp = new Date().toISOString()
    this.messages.push(`${timeStamp}- ${number}- ${message}`)
    console.log(`Message Sent : ${timeStamp}- ${number}- ${message}`)
  }
}

// class SingletonClient {
//   constructor () {
//     if (!SingletonClient.instance) {
//       SingletonClient.instance = new SMSClient()
//     }
//   }
//   getInstance () {
//     return SingletonClient.instance
//   }
// }

module.exports = new SMSClient() // Nodejs will create instance and cache the instance to be used at differernt module importing it.

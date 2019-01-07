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

module.exports = SMSClient

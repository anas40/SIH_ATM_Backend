const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

const sendSMS = async (phoneNumber,message)=>{
    try{
        const res = await client.messages.create({
        body: message,
        from: '+19388887057',
        to: phoneNumber
        })
        console.log(res.sid)
    }
    catch(e){
        console.log('error sending the message')
    }
    
}
module.exports = sendSMS
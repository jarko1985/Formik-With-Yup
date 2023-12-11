const twilio = require('twilio')(accountSid, authToken)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;






export const sendOTP = async (phoneNumber, otp) => {
    try {
      const message = await client.messages.create({
        body: `Your OTP is: ${otp}`,
        from: '+18722446249',
        to: phoneNumber,
      });
      console.log(message.sid); // Logging the message SID for reference
      return message.sid;
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw error;
    }
  };
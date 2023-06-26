// import express from 'express';
// import User from '../Model/User.js';
// import dotenv from 'dotenv';
// import twilio from 'twilio';

// dotenv.config();

// const client = twilio(process.env.accountSid, process.env.authToken);

// function recieveOtp() {
//     client.messages
//         .create({
//             body: 'Hello from twilio-node',
//             to: '+917488723379', // Text your number
//             from: '+13613155856', // From a valid Twilio number
//         })
//         .then((message) => console.log(message.sid));
// }

// const login = async (req, res) => {

//     try {
//         recieveOtp();
//     }
//     catch (err) {
//         console.log(err);
//     }
// };

// export default login;
import express from 'express';
import User from '../Model/User.js';
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = +13613155856;

const client = twilio(accountSid, authToken);

function sendOTP(recipient) {
    const otp = 1234; // Replace this with your OTP generation logic

    const message = `Your OTP is: ${otp}`;

    client.messages
        .create({
            body: message,
            to: recipient,
            from: twilioNumber,
        })
        .then((message) => console.log(`OTP sent. Message SID: ${message.sid}`))
        .catch((error) => console.error(`Error sending OTP: ${error.message}`));
}
const recipientNumber = '+917488723379'; // Replace with the recipient's phone number
export const login = (req, res) => {

    try {
        sendOTP(recipientNumber);
        res.status(200).json("otp");
    }
    catch (err) {
        console.log(err);
    }
};



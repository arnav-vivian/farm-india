import express from 'express';
import User from '../Model/User.js';
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = '+13613155856';

const client = twilio(accountSid, authToken);
let globalOtp = null; // Variable to store the generated OTP
let otpTimestamp = null; // Variable to store the OTP generation timestamp

function generateOTP() {
    const otpLength = 4;
    const min = Math.pow(10, otpLength - 1);
    const max = Math.pow(10, otpLength) - 1;
    const otp = Math.floor(Math.random() * (max - min + 1) + min);
    const otpString = otp.toString();
    return otpString;
}

function sendOTP(recipient) {
    const newOtp = generateOTP();
    globalOtp = newOtp; // Store the generated OTP
    otpTimestamp = Date.now(); // Record the OTP generation timestamp

    const message = `Your OTP is: ${newOtp}`;

    client.messages
        .create({
            body: message,
            to: recipient,
            from: twilioNumber,
        })
        .then((message) =>
            console.log(`OTP sent. Message SID: ${message.sid}`)
        )
        .catch((error) => console.error(`Error sending OTP: ${error.message}`));
}

export const login = (req, res) => {
    console.log("login")
    try {
        const recipientNumber = req.body.phone;
        sendOTP(recipientNumber);
        res.status(200).json('OTP Sent Successfully');
    } catch (err) {
        console.log(err);
        res.status(500).json('Something went wrong');
    }
};

export const verify = (req, res) => {
    try {
        const otp = req.body.otp;
        // Check if OTP has expired (5 minutes)
        const currentTime = Date.now();
        const otpExpiration = 2 * 60 * 1000; // 5 minutes in milliseconds
        const isExpired = otpTimestamp + otpExpiration < currentTime;

        if (otp == globalOtp && !isExpired) {
            // Compare the entered OTP with the global OTP and check for expiration
            res.status(200).json('OTP verified');

            // Reset the global OTP
            globalOtp = null;
            otpTimestamp = null;

            // Perform further actions after successful OTP verification
            // Check if the mobile number already exists in the database
            const existingUser = User.findOne({ phone: recipientNumber });
            // if (!existingUser) {
            //     //   return res.status(400).json('Mobile number already exists');
            //     const newUser = new User({
            //         name: req.body.name,
            //         aadhar: req.body.aadhar,
            //         phone: req.body.phone,
            //         age: req.body.age,
            //         pincode: req.body.pincode,
            //         address: req.body.address,
            //         familySize: req.body.familySize,
            //         income: req.body.income,
            //         dist: req.body.dist,
            //         state: req.body.state,
            //     });
            //     newUser.save();
            console.log("User created");
            //}

        }
        else {
            res.status(202).json('OTP not verified');
            //console.log("kya dikkat h bhai");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Something went wrong');
    }
};

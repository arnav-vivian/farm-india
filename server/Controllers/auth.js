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
        const otpExpiration = 5 * 60 * 1000; // 5 minutes in milliseconds
        const isExpired = otpTimestamp + otpExpiration < currentTime;

        if (otp == globalOtp && !isExpired) {
            // Compare the entered OTP with the global OTP and check for expiration
            res.status(200).json('OTP verified');

        } else {
            res.status(202).json('OTP not verified');
            console.log("kya dikkat h bhai");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Something went wrong');
    }
};

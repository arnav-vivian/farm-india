import React, { useState } from "react";

function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };

    const handleSubmitPhoneNumber = (event) => {
        event.preventDefault();
        // Simulate sending OTP
        setTimeout(() => {
            setIsOtpSent(true);
        }, 2000);
    };

    const handleSubmitOtp = (event) => {
        event.preventDefault();
        // Simulate OTP verification
        setTimeout(() => {
            setIsVerified(true);
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {!isOtpSent && !isVerified && (
                        <div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="phone-number"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="phone-number"
                                    type="text"
                                    placeholder="Enter your phone number"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={handleSubmitPhoneNumber}
                                >
                                    Send OTP
                                </button>
                            </div>
                        </div>
                    )}

                    {isOtpSent && !isVerified && (
                        <div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="otp"
                                >
                                    OTP
                                </label>
                                <input
                                    id="otp"
                                    type="text"
                                    placeholder="Enter the OTP"
                                    value={otp}
                                    onChange={handleOtpChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={handleSubmitOtp}
                                >
                                    Verify OTP
                                </button>
                            </div>
                        </div>
                    )}

                    {isVerified && (
                        <div className="flex items-center justify-center">
                            <p className="text-green-500 font-bold">
                                You have successfully logged in!
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;

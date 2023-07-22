// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        LastName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);


        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            .then(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
            })
            .catch((error) => {
                setIsSubmitting(false);
                console.error('Error submitting form:', error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Farmer Registration</h1>
            {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-semibold">Success!</strong>
                    <span className="block sm:inline"> Registration is successful.</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="FirstName" className="block font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="FirstName"
                            value={formData.FirstName}
                            onChange={handleChange}
                            required
                            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="LastName" className="block font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                            required
                            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="Age" className="block font-medium text-gray-700">Age</label>
                        <input
                            type="Number"
                            name="Age"
                            value={formData.Age}
                            onChange={handleChange}
                            required
                            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="FamilySize" className="block font-medium text-gray-700">First Name</label>
                        <input
                            type="Number"
                            name="FamilySize"
                            value={formData.FamilySize}
                            onChange={handleChange}
                            required
                            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="State" className="block font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            name="State"
                            value={formData.State}
                            onChange={handleChange}
                            required
                            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="ZipCode" className="block font-medium text-gray-700">ZipCode</label>
                        <input
                            type="Number"
                            name="ZipCode"
                            value={formData.ZipCode}
                            onChange={handleChange}
                            required
                            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            )}
        </div>
    );
}

export default Register;

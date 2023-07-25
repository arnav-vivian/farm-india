// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

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
    };

    const { data, error, loading } = useFetch("http://localhost:8800/crops/allcrops");
    console.log(data);
    return (
      
         <div className="container mx-auto px-4 py-8 bg-green-50 rounded-lg shadow-lg">  
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Farmer Registration</h1>
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8" role="alert">
          <strong className="font-semibold">Success!</strong>
          <span className="block sm:inline"> Registration is successful.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div>
            <label htmlFor="firstName" className="block text-lg font-semibold text-green-800">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-lg font-semibold text-green-800">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-green-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-lg font-semibold text-green-800">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-semibold text-green-800">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-lg font-semibold text-green-800">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-lg font-semibold text-green-800">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-lg font-semibold text-green-800">
              ZipCode
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg border border-green-400 focus:outline-none focus:border-green-600"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`col-span-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
}

export default Register;
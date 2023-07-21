import React, { useState } from "react";
import SmallChange from "./SmallChange";
//import GoogleTranslate from '../language/GoogleTranslate';
// import { Button } from '@material-tailwind/react';
//import SmallChangeScene from "./SmallChangescene";
//import Example from "./Header";
function FarmerPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
   
      {/* <nav className="bg-gray-300 top-0 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="">Logo</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 w-full bg-gray-300">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav> */}

      <div className="flex md:flex-row flex-col justify-center md:gap-4 md:p-4 p-2">
        <div className="w-full lg:w-2/3 md:w-full sm:w-full">
          <div className="  justify-center m-6 md:p-10 p-0 mt-4  overflow-y-auto max-h-full">
            <h2 className=" flex lg:flex-row text-2xl font-bold justify-center mt-10 mb-5 italic">
              Agriculture is our wisest pursuit, because it will in the end
              contribute most to real wealth, good morals, and happiness!
            </h2>
            <h3 className="text-xl flex justify-start lg:flex-row font-semibold justify-center mt-10 italic">
              Enter the mobile number
            </h3>

            <div className="p-4 flex lg:flex-row justify-center m-4 mb-0 mt-6">
              <input
                type="tel"
                placeholder="XXX-XXX-XXXX"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                className=" border-gray-300 border-solid px-5 rounded-md focus:outline-none focus:ring-2 italic focus:ring-yellow-500 mb-2 cursor-pointer"
              />

              <button class="bg-transparent hover:bg-gray-500 text-black m-4 font-semibold hover:text-white py-2 px-4 border  border-gray-500 hover:border-transparent rounded-xl">
                Submit
              </button>
            </div>
            <div className=" flex lg:flex-row justify-center ">
              <p className=" font-semibold text-xs  italic">
                *A 6 digit OTP has been sent on your number
              </p>
            </div>
            <div className=" flex lg:flex-row justify-center "></div>
            <div className="p-4 flex lg:flex-row justify-center m-4">
              <input
                type="text"
                pattern="[0-9]{6}"
                maxLength="6"
                placeholder="Enter your 6-digit OTP"
                required
                className=" border-gray-300 border-solid px-5 rounded-md focus:outline-none focus:ring-2 italic focus:ring-yellow-500 mb-2 cursor-pointer"
              />
              <button class="bg-transparent hover:bg-gray-500 text-black m-4 font-semibold hover:text-white py-2 px-4 border  border-gray-500 hover:border-transparent rounded-xl">
                Verify
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 md:w-full sm:w-full">
          <div className=" flex justify-center m-6 md:p-10 p-0 mt-4  overflow-y-auto max-h-full">
            {/* Content for the right section */}
            <div className="w-full h-full flex items-center justify-center">
              {/* <img
                src="https://raw.githubusercontent.com/tusharnankani/VocalForLocal/7e186d6c31427b348bc8523c1c51d6088a443633/static/images/img1.svg"
                alt="Crop Areas India"
                className="max-h-full max-w-full object-contain"
              /> */}
            <SmallChange/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="flex flex-col items-center justify-center text-center py-4">
          <h3 className=" font-bold">FEATURES EXPLORED</h3>
          <h6 className="text-gray-700 mt-4">Take a look at our features</h6>
        </div>

        <div className="py-4 px_6 flex justify-center">
          <img src="https://krashak-ai.netlify.app/static/media/feature.7d18655f2cf50addaae8.jpeg" alt="Crop Areas India" className="max-h-full max-w-full object-contain" />
        </div>
      </div>


    </div>
  );
}

export default FarmerPage;

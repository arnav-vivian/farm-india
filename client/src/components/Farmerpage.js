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

      <div className="flex md:flex-row flex-col justify-center md:gap-4 md:p-4 p-2">
        <div className="w-full lg:w-2/3 md:w-full sm:w-full  justify-center  md:p-10  mt-4  overflow-y-auto max-h-full">

          <h2 className=" flex lg:flex-col text-2xl font-bold justify-center mt-10 mb-5 italic">
            Agriculture is our wisest pursuit, because it will in the end
            contribute most to real wealth, good morals, and happiness!
          </h2>
          <h3 className="text-xl flex lg:ml-8  lg:flex-col font-semibold justify-center italic">
            Enter the mobile number
          </h3>

          <div className="p-4 flex flex-col justify-center align-middle -mt-8 max-w-xl">
            <input
              type="tel"
              placeholder="XXX-XXX-XXXX"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              className=" border-gray-300 border-solid px-5 rounded-md focus:outline-none focus:ring-2 italic focus:ring-yellow-500 mb-2 cursor-pointer h-16"
            />

            <button class="bg-orange-400 rounded-xl h-10 text-white hover:bg-orange-600 mt-2">
              Submit
            </button>
          </div>
          <p className="flex flex-row justify-start font-semibold text-xs  italic pl-8 mt-8">
            *A 6 digit OTP has been sent on your number
          </p>

          <div className="p-4 flex flex-col justify-center max-w-xl -mt-8">
            <input
              type="text"
              pattern="[0-9]{6}"
              maxLength="6"
              placeholder="Enter your 6-digit OTP"
              required
              className=" border-gray-300 border-solid px-5 rounded-md focus:outline-none focus:ring-2 italic focus:ring-yellow-500  cursor-pointer h-16"
            />
            <button class="bg-orange-400 rounded-xl h-10 text-white hover:bg-orange-600 mt-2">
              Verify
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/3 md:w-full sm:w-full">
          <div className=" flex justify-center md:p-10 p-0 mt-4  overflow-y-auto max-h-full">
            {/* Content for the right section */}
            <div className="w-full h-full flex items-center justify-center">
              {/* <img
                src="https://raw.githubusercontent.com/tusharnankani/VocalForLocal/7e186d6c31427b348bc8523c1c51d6088a443633/static/images/img1.svg"
                alt="Crop Areas India"
                className="max-h-full max-w-full object-contain"
              /> */}
              <SmallChange />
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

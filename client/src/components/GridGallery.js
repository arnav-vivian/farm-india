import React from 'react';
import { useState } from 'react';
const GridGallery = () => {
  // Replace this data with your actual images and names
  const data = [
    { id: 1, name: 'PM KISAN', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/PM-KISAN.png' },
    { id: 2, name: 'Fertilizers', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/fertilizer.png' },
    { id: 3, name: 'Kisan Rath', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/KisanRath.png' },
    { id: 4, name: 'Crop Insurance', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/healthcare-covid19-coronavirus-hand-hearth.png' },
    { id: 5, name: 'Agriculture and marketing', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/beneficiary.png' },
    { id: 6, name: 'KVK', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/kvk_portal_logo.JPG' },
    { id: 7, name: 'Organic Farming', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/soil-2.png' },
    { id: 8, name: 'Seeds', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/Seeds.png' },
    { id: 9, name: 'Horticulture', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/Horticulture.png' },
    { id: 10, name: 'Farm Machinery', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/tractor.png' },
    { id: 11, name: 'Training and extension services', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/online-communication.png' },
    { id: 12, name: 'Govt Schemes', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/Govt-Scheme.png' },
    { id: 13, name: 'Directory Services', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/Folder.png' },
    { id: 14, name: 'Advisory Services', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/Discousing.png' },
    { id: 15, name: 'DD KSIAN', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/10.png' },
    { id: 16, name: 'ICAR', imageUrl: 'https://kisansuvidha.gov.in/assets/images/fwdicons/PM-KMY.png' },
    // Add more data to create additional rows
  ];
  const [selectedButton, setSelectedButton] = useState("Agriculture");

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };
  return (
    <div>
      <div className="flex  gap-2 m-4">
        <button
          className={`px-6 py-4 rounded-lg text-lg focus:outline-none ${selectedButton === "Agriculture"
            ? "bg-amber-500 text-amber-800 font-bold rounded-[32px] text-2xl"
            : "border-2 border-amber-800 text-white-500 font-bold text-2xl rounded-[32px]"
            }`}
          onClick={() => handleButtonClick("Agriculture")}
        >
          Agriculture
        </button>
        <button
          className={`px-6 py-4 rounded-lg focus:outline-4 ${selectedButton === "Animal Husbandry"
            ? "bg-amber-500 text-amber-800 font-bold rounded-[32px] text-2xl"
            : "border-2 border-amber-800 text-white-500 font-bold text-2xl rounded-[32px]"
            }`}
          onClick={() => handleButtonClick("Animal Husbandry")}
        >
          Animal Husbandry
        </button>
        <p className='flex justify-end p-4 pt-10  text-xl text-amber-600 '>An initiative of <span className="text-amber-700 pl-2 font-bold"> National Informatics Centre, MeitY</span>
        </p>
      </div>

      <div className="flex flex-wrap mx-4 mt-8 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full  sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8 flex flex-col items-center"
          >
            <div className="relative group hover:cursor-pointer hover:transition-all">
              <div className="bg-gray-200 p-4 mt-4  rounded-full group-hover:opacity-75 transition-opacity ">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover  rounded-full mb-2"
                />

              </div>
              <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div className="text-center text-xl mt-4 hover:underline hover:cursor-pointer"><b>{item.name}</b></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGallery;
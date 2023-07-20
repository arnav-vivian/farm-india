import React from "react";
import "./preheader.css";

const Preheader = () => {
    const width = window.innerWidth;
    console.log(width);
    return (
        <div className="bg-[#219653] px-6 py-2 w-full my-0">
            <div className="flex justify-between items-center ml-6">
                <div className="flex justify-center items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                        className="logo"
                        alt=""
                    />
                    <p className="font-semibold text-white text-md pt-5 px-6 sm:text-sm ml-1">
                        Ministry of agriculture and farmer's welfare
                    </p>
                </div>
                <div className="">
                    <div className="" id="google_element"></div>
                </div>
            </div>
        </div>
    );
};

export default Preheader;

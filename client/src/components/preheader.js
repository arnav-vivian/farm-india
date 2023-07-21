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
                    <p className="sm:hidden md:inline-flex">
                        Ministry of agriculture and farmer's welfare
                    </p>

                </div>
                <div className="rounded-2xl ">
                    <div className="" id="google_element"></div>
                </div>
                <div>
                    <img className="max-h-24" src='https://kisansuvidha.gov.in/assets/images/kisan-logo.png' />
                </div>
            </div>
        </div>
    );
};

export default Preheader;

import React, { useState, useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";

export default function ChangeScene() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://agricoop.nic.in/public/banner/slider-5.jpg",
    "https://agricoop.nic.in/public/banner/G20_banner.jpg",
    "https://agricoop.nic.in/public/banner/PM_Banner.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex md:flex-row flex-col justify-center ">

      <Carousel className="rounded-xl w-full">
        <div className="relative h-full w-full ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-full  w-full  object-cover  ${index === currentImageIndex ? '' : 'hidden'}`}
            >
              <img
                src={image}
                alt={`image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Carousel>
    </div>


  );
}

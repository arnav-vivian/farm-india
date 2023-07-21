
import React, { useState, useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";

function SmallChange() {
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      "https://live.staticflickr.com/65535/53060503647_6ba4e96c6f_n.jpg",
      "https://live.staticflickr.com/65535/53061085696_c845cafce2_n.jpg",
      "https://live.staticflickr.com/65535/53060503642_43e94d7530_n.jpg",
      "https://live.staticflickr.com/65535/53061474240_22b11fe3f6_n.jpg"
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
  )
}

export default SmallChange
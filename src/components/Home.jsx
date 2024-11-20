import React, { useState, useEffect } from "react";

const Home = () => {
  const images = [
    "https://i.ibb.co/hBfG1yG/6ca4d3df-bbc9-4ebc-93db-379c637bc20b.jpg",
    "https://i.ibb.co/8Yq1Xq8/2468fd75-c094-4e1d-b3ed-0fefec22b17b.jpg",
    "https://i.ibb.co/qM06y3q/00f45303-4ee4-466b-bae3-747b1fd673c3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <h1 className="text-center font-bold text-xl text-[#08ABE9]">
          Learn With Lingo Bingo
        </h1>
      </div>
      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover flex-shrink-0 aspect-[16/5]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

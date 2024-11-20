import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const images = [
    "https://i.ibb.co/hBfG1yG/6ca4d3df-bbc9-4ebc-93db-379c637bc20b.jpg",
    "https://i.ibb.co/8Yq1Xq8/2468fd75-c094-4e1d-b3ed-0fefec22b17b.jpg",
    "https://i.ibb.co/qM06y3q/00f45303-4ee4-466b-bae3-747b1fd673c3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleJoinNowClick = () => {
    if (user) {
      navigate("/start-learning");
    } else {
      navigate("/login");
    }
  };

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

      <div className="flex flex-col lg:text-lg items-center text-center gap-2">
        <h1 className="font-bold text-xl text-[#08ABE9]">About Lingo Bingo</h1>
        <p className="lg:w-1/2 md:w-2/3 w-full">
          At Lingo Bingo, our mission is to make language learning fun,
          engaging, and accessible for everyone. We understand that learning a
          new language, especially mastering its vocabulary, can often feel
          overwhelming. That’s why we’ve created an interactive platform to
          simplify and energize your learning experience.
        </p>
      </div>

      {/* Achievement Section Start */}
      <div className="flex flex-col items-center bg-gray-100 py-8 px-4 mt-8 w-full">
        <h2 className="text-2xl font-bold mb-4 text-[#08ABE9]">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg lg:p-6 lg:w-60 py-3 px-4 w-30">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#08ABE9]">
              <CountUp end={5000} duration={3} separator="," />
            </h3>
            <p className="text-gray-700 mt-2 text-center">Satisfied Users</p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg lg:p-6 lg:w-60 py-3 px-4 w-30">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#08ABE9]">
              <CountUp end={120} duration={3} />
            </h3>
            <p className="text-gray-700 mt-2 text-center">Lessons Created</p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg lg:p-6 lg:w-60 py-3 px-4 w-30">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#08ABE9]">
              <CountUp end={15000} duration={3} separator="," />
            </h3>
            <p className="text-gray-700 mt-2 text-center">Vocabularies Added</p>
          </div>

          <div className="flex py-3 px-4 w-30 flex-col items-center bg-white shadow-lg rounded-lg  lg:p-6 lg:w-60 ">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#08ABE9]">
              <CountUp end={50} duration={3} />+
            </h3>
            <p className="text-gray-700 mt-2"> Tutorials</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-blue-50 py-8 px-4 mt-8 w-full">
        <h2 className="text-2xl font-bold mb-4 text-[#08ABE9]">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
            <p className="italic text-gray-600">
              "Lingo Bingo has transformed the way I learn languages. It's fun
              and interactive, making it easier to retain vocabulary!"
            </p>
            <h4 className="font-bold text-right mt-4 text-green-500">
              - Ekramul Hoque
            </h4>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
            <p className="italic text-gray-600">
              "The gamified experience keeps me engaged and coming back for
              more. Highly recommend it!"
            </p>
            <h4 className="font-bold text-right mt-4 text-green-500">- Ridoy</h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#08ABE9] text-white py-12 px-6 mt-8 w-full">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-center max-w-xl">
          Join thousands of learners worldwide and unlock your language
          potential with Lingo Bingo. Sign up now and take the first step
          towards mastering new languages!
        </p>
        <button
          onClick={handleJoinNowClick}
          className="mt-6 px-6 py-3 bg-[#08ABE9] text-white rounded-lg font-bold text-lg hover:bg-green-600 border"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;

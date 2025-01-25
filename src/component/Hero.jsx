import React from "react";
import heroimg from "../assets/hero.avif";
import heroimg2 from "../assets/hero2.avif";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[40vh]">
        <img
          src={heroimg}
          alt="Hero Image"
          className="w-full h-full object-cover "
        />

        {/* Overlay Text */}
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-shadow-md">
            Virtual Assistant At Your Service
          </h1>
          <p className="text-lg sm:text-2xl capitalize font-medium mb-5">
            I’m a title. Click here to edit me.
          </p>
          <button className="px-6 py-3 bg-[#ad954f] text-white font-semibold rounded-md text-sm sm:text-lg transition-all duration-300 hover:bg-[#8f7a3a] focus:outline-none active:bg-white active:text-black">
            See Services
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="w-full p-4 flex items-center justify-center ">
        <div className="w-full max-w-4xl  rounded-lg overflow-hidden flex flex-col sm:flex-row">
          {/* Left Side (Image) */}
          <div className="w-full sm:w-1/2">
            <img
              src={heroimg2}
              alt="About Image"
              className="w-full h-auto sm:h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        
          {/* Right Side (Text and Button) */}
          <div className="w-full sm:w-1/2 p-6 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-[#ad954f] mb-4 text">About Us</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              We are dedicated to providing innovative solutions to help you
              achieve your goals. Our team is driven by a commitment to
              excellence and success.
            </p>
            <p className="text-lg text-gray-600 mb-4 text-center">
              Whether you need assistance with planning, organization, or
              problem-solving, we are here to guide you through every step of
              the way.
            </p>
            <button className="px-6 w-40 py-3 bg-[#ad954f] text-white font-semibold rounded-md text-sm sm:text-lg transition-all duration-300 hover:bg-[#8f7a3a] focus:outline-none active:bg-white active:text-black">
            Read more
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

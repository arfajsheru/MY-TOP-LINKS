import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footerbg text-black py-10 w-full">
    <div className="w-full px-4 grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto">
      {/* Home info section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-1xl font-nav-font font-bold md:text-3xl">Envento Market</h2>
        <p className="text-[12px] md:text-[16px] font-mono hover:scale-x-95 transition-transform duration-700">
          Thank you so much for your valuable time
        </p>
        <div className="flex gap-1">
          <FaFacebookSquare className="text-2xl sm:text-3xl icon" />
          <FaSquareInstagram className="text-2xl sm:text-3xl icon" />
          <IoLogoLinkedin className="text-2xl sm:text-3xl icon" />
          <FaSquareXTwitter className="text-2xl sm:text-3xl icon" />
        </div>
      </div>
  
      {/* Contact Info */}
      <div className="flex flex-col gap-6 ">
        <h2 className="text-1xl font-nav-font font-bold md:text-3xl">Contact Us</h2>
        <div className="text-[12px] flex flex-col gap-2">
          <p className="flex gap-1 md:gap-2 items-center hover:scale-x-95 transition-transform duration-700 md:text-[16px]">
            <IoCallSharp />+91 9913690041
          </p>
          <p className="flex gap-1 md:gap-2 items-center hover:scale-x-95 transition-transform duration-700 md:text-[16px]">
            <SiGmail />enventmarket@gmail.com
          </p>
          <p className="flex gap-1 md:gap-2 items-center hover:scale-x-95 transition-transform duration-700 md:text-[16px]">
            <FaLocationArrow />India, West Street - +91
          </p>
        </div>
      </div>
  
      {/* Explore */}
      <div className="flex flex-col gap-6">
        <h2 className="text-1xl font-nav-font font-bold md:text-3xl">Explore</h2>
        <ul className="flex flex-col gap-2">
          <li><a className="flex text-[12px] md:text-[16px] font-mono items-center hover:scale-x-95 transition-transform duration-700 gap-1" to=""><FaArrowRight />Home</a></li>
          <li><a className="flex text-[12px] md:text-[16px] font-mono items-center hover:scale-x-95 transition-transform duration-700 gap-1" to=""><FaArrowRight />About Us</a></li>
          <li><a className="flex text-[12px] md:text-[16px] font-mono items-center hover:scale-x-95 transition-transform duration-700 gap-1" to=""><FaArrowRight />Collection</a></li>
          <li><a className="flex text-[12px] md:text-[16px] font-mono items-center hover:scale-x-95 transition-transform duration-700 gap-1" to=""><FaArrowRight />Bran</a></li>
          <li><a className="flex text-[12px] md:text-[16px] font-mono items-center hover:scale-x-95 transition-transform duration-700 gap-1" to=""><FaArrowRight />Contact-us</a></li>
          <li><a className="flex text-[12px] md:text-[16px] font-mono items-center hover:scale-x-95 transition-transform duration-700 gap-1" to=""><FaArrowRight />Customer Review</a></li>
        </ul>
      </div>
  
      {/* Subscribe */}
      <div className="flex flex-col gap-6">
        <h2 className="text-1xl font-nav-font font-bold md:text-3xl ">Subscribe Us</h2>
        <p className="font-mono text-[12px] md:text-[16px] hover:scale-x-95 transition-transform duration-700">
          Subscribe for latest updates
        </p>
        <div className="flex flex-col gap-2">
          <input type="text" className="bg-white outline-none border-none h-8 w-full px-2 rounded-sm text-[12px] text-black" placeholder="Enter your Email" />
          <button className="bg-black rounded w-full py-1 border text-white border-white hover:bg-[#ad954f]  transition-colors duration-1000">Subscribe</button>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
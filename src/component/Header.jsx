import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import logo from "../assets/logo.svg";
import MobileNavbar from "./MobileNavbar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // State for search bar visibility

  // Toggle the sidebar menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle the search bar visibility
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      {/* Header Main */}
      <div className="bg-[#ad954f] flex justify-between items-center w-full p-4 text-2xl relative">
        {/* Logo */}
        <img src={logo} className="w-[40%] max-w-[150px]" alt="logo img" />

        {/* Icons */}
        <div className="flex items-center gap-6 text-white text-lg">
          <IoSearch
            className="cursor-pointer text-2xl hover:text-gray-200"
            onClick={toggleSearch} // Toggle the search bar visibility
          />
          <MdOutlineLocalGroceryStore className="cursor-pointer text-2xl hover:text-gray-200" />
          <AiOutlineMenu
            className="cursor-pointer text-2xl hover:text-gray-200"
            onClick={toggleMenu} // Toggle the sidebar menu
          />
        </div>
      </div>

      <SearchBar
        searchOpen={searchOpen}
        toggleSearch={toggleSearch}
      />

      {/* Sidebar Menu (Slides in from the right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[50%] md:w-[30%] lg:w-[25%] bg-white shadow-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        {/* Menu Header Section */}
        <div className="flex justify-between items-center p-5 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800">Menu</h2>
          <IoClose
            className="cursor-pointer text-3xl text-gray-800 hover:text-[#ad954f] transition-colors duration-300"
            onClick={toggleMenu} // Close the sidebar menu
          />
        </div>

        {/* Menu Options */}
        <ul className="flex flex-col gap-6 p-6 text-gray-700 text-lg">
          <Link to={"/"} onClick={toggleMenu} className="cursor-pointer hover:text-[#ad954f] transition-transform duration-300 hover:translate-x-2">
            Home
          </Link>
          <Link to={"/collection"} onClick={toggleMenu} className="cursor-pointer hover:text-[#ad954f] transition-transform duration-300 hover:translate-x-2">
            Collection
          </Link>
          <Link to={"brand"} onClick={toggleMenu} className="cursor-pointer hover:text-[#ad954f] transition-transform duration-300 hover:translate-x-2">
            Brands
          </Link>
          <Link to={"about"} onClick={toggleMenu} className="cursor-pointer hover:text-[#ad954f] transition-transform duration-300 hover:translate-x-2">
            About
          </Link>
          <Link to={"contactus"} onClick={toggleMenu} className="cursor-pointer hover:text-[#ad954f] transition-transform duration-300 hover:translate-x-2">
            Contact Us
          </Link>
        </ul>

        {/* Footer Section */}
        <div className="absolute bottom-4 w-full px-6">
          <p className="text-sm text-gray-500">
            © 2025 envento marketing. All rights reserved.
          </p>
        </div>
      </div>

      {/* Overlay for Sidebar (to close the sidebar when clicking outside) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={toggleMenu} // Close the sidebar if clicked outside
        ></div>
      )}

      <MobileNavbar />
    </div>
  );
};

export default Header;

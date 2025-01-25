import React from 'react'
import { IoClose } from 'react-icons/io5'

const SearchBar = ({searchOpen, toggleSearch}) => {
  return (
    <div
  className={`fixed top-0 left-0 w-full h-full bg-white p-4 shadow-xl transform ${
    searchOpen ? "translate-y-0" : "-translate-y-full"
  } transition-transform duration-500 ease-in-out z-50`}
>
  <div className="flex justify-between items-center">
    {/* Close Button for Search Bar */}
    <IoClose
      className="cursor-pointer text-3xl text-gray-800 hover:text-[#ad954f] transition-colors duration-300"
      onClick={toggleSearch} // Close the search bar
    />
  </div>

  {/* Title */}
  <div className="text-center mt-4 text-xl font-semibold text-gray-800">
    Search our store
  </div>

  {/* Search Input */}
  <div className="mt-4">
    <input
      type="text"
      className="w-full p-1 border rounded-sm ring-2 ring-[#ad954f] focus:ring-1 focus:ring-[#ad954f] transition-all duration-300 shadow-sm focus:shadow-md text-md pl-3 placeholder-gray-500 focus:outline-none"
      placeholder="Search products..."
      autoFocus
    />
  </div>

  {/* Popular Searches */}
  <div className="mt-6">
    <div className="text-sm font-semibold text-gray-700 mb-2">Popular Searches</div>
    <div className="flex flex-wrap gap-2">
      <button className="bg-[#ad954f] text-white px-4 py-1 rounded-full text-sm hover:bg-[#9b8040] transition-colors duration-300">
        Shoes
      </button>
      <button className="bg-[#ad954f] text-white px-4 py-1 rounded-full text-sm hover:bg-[#9b8040] transition-colors duration-300">
        Watches
      </button>
      <button className="bg-[#ad954f] text-white px-4 py-1 rounded-full text-sm hover:bg-[#9b8040] transition-colors duration-300">
        Mobiles
      </button>
      <button className="bg-[#ad954f] text-white px-4 py-1 rounded-full text-sm hover:bg-[#9b8040] transition-colors duration-300">
        Laptops
      </button>
      <button className="bg-[#ad954f] text-white px-4 py-1 rounded-full text-sm hover:bg-[#9b8040] transition-colors duration-300">
        Accessories
      </button>
    </div>
  </div>
</div>

  )
}

export default SearchBar
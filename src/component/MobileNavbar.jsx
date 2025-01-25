import React from 'react'
import { GiBoxUnpacking } from "react-icons/gi";
import {
    MdOutlineFavoriteBorder,
    MdOutlineLocalGroceryStore,
  } from "react-icons/md";
  import { IoMdHome } from "react-icons/io";
const MobileNavbar = () => {
  return (
    <div className="w-full fixed px-2 py-3 bg-[#ad954f] bottom-0">
      <ul className="flex justify-around items-center">
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500 hover:text-black">
          <IoMdHome className="text-2xl hover:text-black" />
          <span className="text-xs">Home</span>
        </li>
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500 hover:text-black">
          <GiBoxUnpacking className="text-2xl hover:text-black" />
          <span className="text-xs">Collection</span>
        </li>
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500 hover:text-black">
          <MdOutlineFavoriteBorder className="text-2xl hover:text-black" />
          <span className="text-xs">Brands</span>
        </li>
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500 hover:text-black">
          <MdOutlineLocalGroceryStore className="text-2xl hover:text-black" />
          <span className="text-xs">About</span>
        </li>
      </ul>
    </div>
  )
}

export default MobileNavbar
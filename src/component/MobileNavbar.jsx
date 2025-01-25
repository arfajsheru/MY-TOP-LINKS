import React from 'react';
import { GiBoxUnpacking } from "react-icons/gi";
import {
  MdOutlineFavoriteBorder,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';  // Import Link

const MobileNavbar = () => {
  return (
    <div className="w-full fixed px-2 py-3 bg-[#ad954f] bottom-0">
      <ul className="flex justify-around items-center">
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500">
          <Link to="/"> {/* Home route */}
            <IoMdHome className="text-2xl" />
            <span className="text-xs">Home</span>
          </Link>
        </li>
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500">
          <Link to="/order"> {/* Order route */}
            <GiBoxUnpacking className="text-2xl" />
            <span className="text-xs">Order</span>
          </Link>
        </li>
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500 relative">
          <Link to="/store"> {/* Store route */}
            <MdOutlineLocalGroceryStore className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            <span className="text-xs">Store</span>
          </Link>
        </li>
        <li className="cursor-pointer text-white flex flex-col items-center gap-1 duration-500 relative">
          <Link to="/favorites"> {/* Favourite route */}
            <MdOutlineFavoriteBorder className="text-2xl" />
            <span className="absolute -top-1 right-4 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
            <span className="text-xs">Favourite</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;

import React from "react";

const OfferLine = () => {
  return (
    <div className="w-full bg-gray-200 py-2">
      <div className="overflow-hidden">
        <div className="offer-content flex whitespace-nowrap animate-marquee">
          <span className="mx-6 text-xs font-semibold text-black hover:text-[#ad954f] transition-all duration-300">
            50% off on all products - Limited time offer!
          </span>
          <span className="mx-6 text-xs font-semibold text-black hover:text-[#ad954f] transition-all duration-300">
            Free shipping on orders above $50 - Grab it now!
          </span>
          <span className="mx-6 text-xs font-semibold text-black hover:text-[#ad954f] transition-all duration-300">
            Buy 1 Get 1 Free on select items - Only today!
          </span>
          {/* Duplicating content for infinite scroll */}
          <span className="mx-6 text-xs font-semibold text-black hover:text-[#ad954f] transition-all duration-300">
            50% off on all products - Limited time offer!
          </span>
          <span className="mx-6 text-xs font-semibold text-black hover:text-[#ad954f] transition-all duration-300">
            Free shipping on orders above $50 - Grab it now!
          </span>
          <span className="mx-6 text-xs font-semibold text-black hover:text-[#ad954f] transition-all duration-300">
            Buy 1 Get 1 Free on select items - Only today!
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfferLine;

import React from "react";
import data from "../data/data";

const SocialLink = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 drop-shadow-lg">
        My Top Links
      </h1>
      {/* Description paragraph */}
      <p className="text-sm text-gray-700 text-center max-w-80 md:max-w-96">
        Here are my most frequently used social media and important links. Feel
        free to connect with me!
      </p>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => {
          return (
            <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            >
              <div
                className="box-color flex gap-3 bg-white rounded-full py-1 px-10 items-center"
              >
                <img src={item.icon} alt="" />
                <span className="text-[14px] font-bold text-gray-800">{item.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLink;

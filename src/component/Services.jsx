import React from "react";
import { MdFileCopy } from "react-icons/md";
import { FcSupport } from "react-icons/fc";
import { VscProject } from "react-icons/vsc";
import { RiMobileDownloadFill } from "react-icons/ri";
import { TbDatabaseSearch } from "react-icons/tb";
import { GrRestroomWomen } from "react-icons/gr";

const Services = () => {
    const data = [
        {
          logo: <MdFileCopy />,
          name: "Administrative Support",
          des: "Efficient administrative tasks like scheduling and document management to keep your workflow smooth.",
        },
        {
          logo: <FcSupport />,
          name: "Customer Support",
          des: "Providing excellent customer support to ensure satisfaction and build long-lasting relationships.",
        },
        {
          logo: <VscProject />,
          name: "Project Management",
          des: "Manage your projects effectively with our structured approach for on-time and successful delivery.",
        },
        {
          logo: <RiMobileDownloadFill />,
          name: "Social Media Management",
          des: "Enhance your brand’s online presence with expert social media management and content creation.",
        },
        {
          logo: <TbDatabaseSearch />,
          name: "Data & Research",
          des: "Get valuable insights through data analysis and research tailored to your business needs.",
        },
        {
          logo: <GrRestroomWomen />,
          name: "Personal Assistant",
          des: "Boost your productivity with a personal assistant who handles day-to-day tasks and scheduling.",
        },
      ];
      

  return (
    <div className="w-full py-6">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-[#ad954f] mb-6">
          What Can I Do For You?
        </h2>

        {/* Paragraph */}
        <p className="text-xs sm:text-xl text-gray-700 mb-6">
          I'm a paragraph. Click here to add your own text and edit me.
        </p>
      </div>

      {/* Service items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-4">
        {data.map((item, index) => (
          <div key={index} className="p-2 bg-white shadow-lg rounded-lg">
            <div className="text-3xl text-[#ad954f] mb-4">{item.logo}</div>
            <h3 className="text-sm font-medium capitalize mb-2">{item.name}</h3>
            <p className="text-xs sm:text-sm text-gray-700 text-justify">{item.des}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
      <button className="px-6 py-3 bg-[#ad954f] text-white font-semibold rounded-md text-sm sm:text-lg transition-all duration-300 hover:bg-[#8f7a3a] focus:outline-none active:bg-white active:text-black">
           Explore All Services
          </button>
      </div>
    </div>
  );
};

export default Services;

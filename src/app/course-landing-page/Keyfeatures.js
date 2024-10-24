import React from "react";
import { BsUnlock } from "react-icons/bs";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { RiFile4Fill } from "react-icons/ri";
import { TbCalendarClock } from "react-icons/tb";

const Keyfeatures = ({ course_benefits }) => {
  // Map through the course_benefits and dynamically assign icons
  const iconMap = {
    "Trial Session": <BsUnlock className="w-auto h-full aspect-square" />,
    "Trial Scholarship": <FaGoogleScholar className="w-auto h-full aspect-square" />,
    "Duration": <TbCalendarClock className="w-auto h-full aspect-square" />,
    "Career services": <IoBriefcase className="w-auto h-full aspect-square" />,
    "Externships with real tech companies": <RiFile4Fill className="w-auto h-full aspect-square" />,
    "DS, Algo and System Design curriculum": <RiFile4Fill className="w-auto h-full aspect-square" />,
  };

  return (
    <div className="container">
      <div className="w-full flex flex-col gap-5 rounded-lg bg-[#525FE1] px-[5%] py-[10%] md:py-[5%]">
        {/* Top section for the first four benefits */}
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
          {course_benefits.slice(0, 4).map((benefit, ) => (
            <div key={benefit._id} className="p-[3%] bg-white bg-opacity-30 rounded-lg flex text-white gap-2">
              {iconMap[benefit.title]} {/* Dynamic icon */}
              <div className="w-full flex flex-col gap-1">
                <p className="text-base md:text-lg text-gray-700">{benefit.title}</p>
                <p className="text-sm md:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section for the remaining benefits */}
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          {course_benefits.slice(4).map((benefit, ) => (
            <div key={benefit._id} className="flex gap-2 items-center">
              {iconMap[benefit.title]} {/* Dynamic icon */}
              <p>{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyfeatures;

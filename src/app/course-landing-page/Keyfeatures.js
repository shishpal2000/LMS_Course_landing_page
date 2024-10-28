import React from "react";
import { BsUnlock } from "react-icons/bs";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { RiFile4Fill } from "react-icons/ri";
import { TbCalendarClock } from "react-icons/tb";

// Array of icons to cycle through
const icons = [
  <BsUnlock className="w-auto h-full aspect-square" />,
  <FaGoogleScholar className="w-auto h-full aspect-square" />,
  <TbCalendarClock className="w-auto h-full aspect-square" />,
  <IoBriefcase className="w-auto h-full aspect-square" />,
  <RiFile4Fill className="w-auto h-full aspect-square" />,
];

const Keyfeatures = ({ course_benefits, course_benefits_title }) => {
  return (
    <div className="container">
      <div className="w-full flex flex-col gap-5 rounded-lg bg-[#525FE1] px-[5%] py-[10%] md:py-[5%]">
        {/* Top section for course benefits */}
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
          {course_benefits?.map((benefit, index) => (
            <div key={benefit._id} className="p-[3%] bg-white bg-opacity-30 rounded-lg flex text-white gap-2">
              {/* Cycle through icons using index */}
              {icons[index % icons.length]}
              <div className="w-full flex flex-col gap-1">
                <p className="text-base md:text-lg text-gray-700">{benefit.title}</p>
                <p className="text-sm md:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section for course benefits titles */}
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          {course_benefits_title?.map((benefit, ) => (
            <div key={benefit._id} className="flex gap-2 items-center">
              {/* {icons[index % icons.length]} */}
              <p>{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyfeatures;

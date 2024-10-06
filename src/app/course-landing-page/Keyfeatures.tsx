import React from "react";
import { BsUnlock } from "react-icons/bs";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { RiFile4Fill } from "react-icons/ri";
import { TbCalendarClock } from "react-icons/tb";

const Keyfeatures = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col gap-5 rounded-lg bg-primary px-[5%] py-[10%] md:py-[5%]">
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-[3%] bg-white bg-opacity-30 rounded-lg flex text-white gap-2">
            <BsUnlock className="w-auto h-full aspect-square" />
            <div className="w-full flex flex-col gap-1">
              <p className="text-base md:text-lg">Trial Session</p>
              <p className="text-sm md:text-base">Free</p>
            </div>
          </div>
          <div className="p-[3%] bg-white bg-opacity-30 rounded-lg flex text-white gap-2">
            <FaGoogleScholar className="w-auto h-full aspect-square" />
            <div className="w-full flex flex-col gap-1">
              <p className="text-base md:text-lg">Scholarship</p>
              <p className="text-sm md:text-base">Assured Scholarship</p>
            </div>
          </div>
          <div className="p-[3%] bg-white bg-opacity-30 rounded-lg flex text-white gap-2">
            <TbCalendarClock className="w-auto h-full aspect-square" />
            <div className="w-full flex flex-col gap-1">
              <p className="text-base md:text-lg">Duration</p>
              <p className="text-sm md:text-base">9 Months</p>
            </div>
          </div>
          <div className="p-[3%] bg-white bg-opacity-30 rounded-lg flex text-white gap-2">
            <IoBriefcase className="w-auto h-full aspect-square" />
            <div className="w-full flex flex-col gap-1">
              <p className="text-base md:text-lg">Career Services</p>
              <p className="text-sm md:text-base">Assured Referals</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
            <div className="flex gap-2 items-center">
                <RiFile4Fill />
                <p>Externships with real tech companies</p>
            </div>
            <div className="flex gap-2 items-center">
                <RiFile4Fill />
                <p>DS, Algo and System Design curriculum</p>
            </div>
            <div className="flex gap-2 items-center">
                <RiFile4Fill />
                <p>Assured referals in top dev roles</p>
            </div>
            <div className="flex gap-2 items-center">
                <RiFile4Fill />
                <p>Assured referals in top dev roles</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Keyfeatures;

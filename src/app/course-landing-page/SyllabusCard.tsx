"use client";
import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { RxCross2, RxPlus } from "react-icons/rx";

const SyllabusCard = ({ section }: { section: (string | string[][])[] }) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div className="w-full flex flex-col gap-5 col-span-1 bg-white p-[5%] h-fit rounded-lg">
      <div className="w-full flex justify-between items-center">
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
          {section[0]}
        </p>
        <div
          className="p-1 text-xl bg-purple-100 rounded-lg cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          {expand ? <RxCross2 /> : <RxPlus />}
        </div>
      </div>
      {expand &&
        typeof section[1] !== "string" &&
        section[1].map((topic, index) => (
          <div className="w-full flex justify-between items-center border border-gray-400 rounded-md p-[3%]" key={index}>
            <div className="w-fit flex flex-col gap-1">
              <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-medium w-fit">
                {topic[0]}
              </p>
              <p className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-ligh w-fit">
                {topic[1]}
              </p>
            </div>
            <div className="w-fit flex p-2 rounded-md gap-2 items-center bg-gray-100">
              <MdOutlineWatchLater />
              <p className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-light">
                {topic[2]}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SyllabusCard;

"use client";
import React, { useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { RxCross2, RxPlus } from "react-icons/rx";

const SyllabusCard = ({ section }) => {
  const [expand, setExpand] = useState(false);
  
  // Destructure section data
  const { title, heading } = section;

  return (
    <div className="w-full flex flex-col gap-5 col-span-1 bg-white p-[5%] h-fit rounded-lg">
      <div className="w-full flex justify-between items-center">
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
          {title}
        </p>
        <div
          className="p-1 text-xl bg-purple-100 rounded-lg cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          {expand ? <RxCross2 /> : <RxPlus />}
        </div>
      </div>

      {/* Only display the lesson details if expanded */}
      {expand &&
        heading?.map((lesson, index) => (
          <div
            className="w-full flex justify-between items-center border border-gray-400 rounded-md p-[3%]"
            key={lesson._id || index}
          >
            <div className="w-fit flex flex-col gap-1">
              <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-medium w-fit">
                {lesson.title}
              </p>
              <p className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-light w-fit">
                Lesson {lesson.lesson_no}
              </p>
            </div>
            <div className="w-fit flex p-2 rounded-md gap-2 items-center bg-gray-100">
              <MdOutlineWatchLater />
              <p className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-light">
                {lesson.time}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SyllabusCard;

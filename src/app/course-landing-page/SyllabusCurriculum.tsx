import React from "react";
import SyllabusCard from "./SyllabusCard";

const SyllabusCurriculum = () => {
  const syllabus = [
    [
      "Getting Started",
      [
        ["Understanding UI/UX Design Principles", "Lesson 01", "45 Minutes"],
        ["Importance of User-Centered Design", "Lesson 02", "1 Hour"],
        [
          "The Role of UI/UX Design in Product Development",
          "Lesson 03",
          "45 Minutes",
        ],
      ],
    ],
    [
      "Practice Design Like an Artist",
      [
        ["Understanding UI/UX Design Principles", "Lesson 01", "45 Minutes"],
        ["Importance of User-Centered Design", "Lesson 02", "1 Hour"],
        [
          "The Role of UI/UX Design in Product Development",
          "Lesson 03",
          "45 Minutes",
        ],
      ],
    ],
    [
      "Secrets of Making Money Freelancing",
      [
        ["Understanding UI/UX Design Principles", "Lesson 01", "45 Minutes"],
        ["Importance of User-Centered Design", "Lesson 02", "1 Hour"],
        [
          "The Role of UI/UX Design in Product Development",
          "Lesson 03",
          "45 Minutes",
        ],
      ],
    ],
    [
      "Secret of Good Design",
      [
        ["Understanding UI/UX Design Principles", "Lesson 01", "45 Minutes"],
        ["Importance of User-Centered Design", "Lesson 02", "1 Hour"],
        [
          "The Role of UI/UX Design in Product Development",
          "Lesson 03",
          "45 Minutes",
        ],
      ],
    ],
    [
      "Web Development (Webflow)",
      [
        ["Understanding UI/UX Design Principles", "Lesson 01", "45 Minutes"],
        ["Importance of User-Centered Design", "Lesson 02", "1 Hour"],
        [
          "The Role of UI/UX Design in Product Development",
          "Lesson 03",
          "45 Minutes",
        ],
      ],
    ],
    [
      "Advanced",
      [
        ["Understanding UI/UX Design Principles", "Lesson 01", "45 Minutes"],
        ["Importance of User-Centered Design", "Lesson 02", "1 Hour"],
        [
          "The Role of UI/UX Design in Product Development",
          "Lesson 03",
          "45 Minutes",
        ],
      ],
    ],
  ];

  return (
    <div className="w-full p-[5%] bg-gradient-to-tr from-purple-100 via-orange-100 to-purple-100 flex flex-col items-center gap-5 mt-5 pt-8 pb-[10%] rounded-2xl">
      <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
        Curriculum
      </p>
      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 text-center md:w-[60%] lg:w-[50%]">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {syllabus.map((section, index) => (
          <SyllabusCard section={section} key={index} />
        ))}
      </div>
      <button className="w-fit bg-[#525FE1] text-white  rounded py-3 px-5 mt-3">
        Download Syllabus
      </button>
    </div>
  );
};

export default SyllabusCurriculum;

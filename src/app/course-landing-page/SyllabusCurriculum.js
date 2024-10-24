import React from "react";
import SyllabusCard from "./SyllabusCard";

const SyllabusCurriculum = ({ syllabus, download_syllabus_link_text, download_syllabus_link }) => {
  const { title, detailed_description, description } = syllabus;

  return (
    <div className="container">
      <div className="w-full bg-gradient-to-tr from-purple-100 via-orange-100 to-purple-100 flex flex-col items-center gap-5 rounded-2xl px-[5%] py-[10%] md:py-[5%]">
        <p className="text-gray-700 text-3xl lg:text-4xl xl:text-5xl font-semibold">
          {title}
        </p>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 text-center md:w-[60%] lg:w-[50%]">
          {description}
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {detailed_description?.map((section, index) => (
            <SyllabusCard section={section} key={section._id || index} />
          ))}
        </div>
        <a href={download_syllabus_link} download>
          <button className="w-fit bg-[#525FE1] text-white rounded py-3 px-5 mt-3">
            {download_syllabus_link_text}
          </button>
        </a>
      </div>
    </div>
  );
};

export default SyllabusCurriculum;

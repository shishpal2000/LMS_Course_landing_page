import Image from "next/image";
import React from "react";
import banner from "../../../public/Rectangle 160.png";
import icon1 from "../../../public/highlights-icon1.png";
import icon2 from "../../../public/highlights-icon2.png";
import icon3 from "../../../public/highlights-icon3.png";
import icon4 from "../../../public/highlights-icon4.png";

const Highlights = ({ course_highlights }) => {
  // Define the static icons in an array
  const icons = [icon1, icon2, icon3, icon4];

  return (
    <div className="container">
      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-gray-700 text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start">
            {course_highlights.title}
          </p>
          <p className="text-gray-700 font-light text-xs md:text-sm lg:text-base xl:text-lg text-center md:text-start">
            {course_highlights.description}
          </p>
          <Image src={banner} alt="Program banner" className="w-full" />
        </div>

        {/* Right Section - Highlights */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 md:gap-0">
          {course_highlights.points?.map((highlight, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-xl bg-[#525FE1] p-3 flex items-center">
                {/* Use static icons based on index */}
                <Image
                  src={icons[index % icons.length]} // Use modulo to loop through static icons
                  alt={`Highlight Icon ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-0 md:gap-2">
                <p className="text-gray-700 text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-extralight">
                  {highlight.title}
                </p>
                <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;

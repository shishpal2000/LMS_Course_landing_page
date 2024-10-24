import Image from "next/image";
import React from "react";
import arrow1 from "../../../public/Screenshot_2024-09-24_at_3.20.18_PM-removebg-preview copy.png";
import arrow2 from "../../../public/Screenshot_2024-09-24_at_3.20.18_PM-removebg-preview.png";
import icon1 from "../../../public/SVG.png";
import icon2 from "../../../public/SVG (1).png";
import icon3 from "../../../public/SVG (2).png";

const FlowChart = ({ section_working }) => {
  // Static icons array
  const staticIcons = [icon1, icon2, icon3];

  return (
    <div className="container">
      <div className="w-full flex flex-col gap-10 bg-gradient-to-br from-purple-100 via-orange-100 to-purple-100 items-center rounded-2xl px-[5%] py-[10%] md:py-[5%]">
        <p className="text-gray-700 text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start">
          {section_working.title}
        </p>
        <p className="text-gray-700 font-light text-xs md:text-sm lg:text-base xl:text-lg text-center md:w-[60%] lg:w-[50%]">
          {section_working.sub_title}
        </p>
        <div className="w-full flex flex-col items-center md:flex-row">
          {section_working.description?.map((step, index) => (
            <React.Fragment key={index}>
              <div className="w-[75%] md:w-[20%] flex flex-col justify-between items-center">
                {/* Using static icons based on the index */}
                <Image
                  src={staticIcons[index % staticIcons.length]} // Cycle through static icons
                  alt="Icon"
                  className="w-[10%] md:w-[25%] object-cover"
                />
                <p className="text-base xl:text-lg 2xl:text-xl font-medium text-center">
                  {step.title}
                </p>
                <p className="text-xs xl:text-sm 2xl:text-base text-gray-400 font-light text-center">
                  {step.short_description}
                </p>
              </div>
              {/* Add arrow between steps except after the last step */}
              {index < section_working.description.length - 1 && (
                <Image
                  src={index % 2 === 0 ? arrow1 : arrow2} // Alternate arrows between steps
                  alt="Arrow"
                  className="w-[10%] md:w-[6.66%] object-contain rotate-90 md:rotate-0 my-4 md:my-0"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowChart;

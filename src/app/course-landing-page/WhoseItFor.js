import React from "react";
import { FaFileInvoice } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi2";
import ReasonCard from "./ReasonCard";

const WhoseItFor = ({ for_whom }) => {
  const { title, content, description } = for_whom;

  // Define icons (you can assign specific icons based on the index or type of content)
  const icons = [<FaFileInvoice key={1} />, <SlCalender key={2} />, <HiUserGroup key={3} />];

  return (
    <div className="container">
      <div className="w-full bg-white flex flex-col gap-5 items-center  text-gray-700">
        {/* Use dynamic title */}
        <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
          {title || "Who is this workshop for?"}
        </p>
        {/* Use dynamic description */}
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 text-center md:w-[50%]">
          {description || "Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office."}
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:gap-y-16 xl:gap-y-[72px] mt-5">
          {/* Map over the API content */}
          {content?.map((item, index) => (
            <ReasonCard
              heading={item.title}
              info={item.description}
              icon={icons[index % icons.length]} 
              key={item._id || index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoseItFor;

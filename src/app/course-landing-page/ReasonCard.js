import React from "react";

const ReasonCard = ({ icon, heading, info }) => {
  return (
    <div className="w-full relative pb-5 pt-10 px-10 flex flex-col gap-5 items-center bg-white  shadow-lg">
      <div className="bg-[#525FE1] p-2 absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full text-white text-xl">
        {icon}
      </div>
      <p className="text-base xl:text-lg 2xl:text-2xl">{heading}</p>
      <p className="text-xs xl:text-sm 2xl:text-base text-gray-400 text-center">
        {info}
      </p>
    </div>
  );
};

export default ReasonCard;

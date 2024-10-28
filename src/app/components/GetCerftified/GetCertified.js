// import Image from "next/image";
import React from "react";
import { TiStarburst } from "react-icons/ti";
import { IoArrowRedoSharp, IoPerson } from "react-icons/io5";
// import certificate from "../../../../public/certfifcate.png";

const icons = [
  <TiStarburst key="icon-1" />,
  <IoArrowRedoSharp key="icon-2" />,
  <IoPerson key="icon-3" />,
];

const GetCertified = ({ certification_heading, certification_title, certification_details ,certificate_image
}) => {
  return (
    <div className="container">
      <div className="w-full flex flex-col items-center gap-5 md:py-0 text-gray-700">
        <p className="text-2xl md:text-4xl lg:text-6xl font-semibold ">
          {certification_title || "Get Certified"}
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-center">
          {certification_heading || "Yes! You will be certified for this workshop after you submit your assignment."}
        </p>
        <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row-reverse md:justify-between">
          <div className="w-full md:w-[45%]">
            <img src={certificate_image} alt="Certificate" className="w-full object-cover" />
          </div>
          <div className="w-full md:w-[45%] flex flex-col gap-3 justify-center">
            {certification_details?.map((detail, index) => {
              const iconIndex = index % icons.length; // This will repeat the icons
              return (
                <div key={index} className="w-full flex gap-2">
                  <div className="w-fit p-1 bg-blue-700 bg-opacity-40 text-primary text-2xl md:text-3xl lg:text-4xl h-fit rounded-md">
                    {icons[iconIndex]} {/* Use the icon based on the index */}
                  </div>
                  <div className="w-full flex flex-col">
                    <p className="text-xl font-medium text-primary">
                      {detail.title || "Official and Verified:"}
                    </p>
                    <p>
                      {detail.description || "Receive an instructor signed certificate with the institution's logo to verify your achievements and increase your job prospects."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCertified;

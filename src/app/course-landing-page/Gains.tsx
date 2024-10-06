import Image from "next/image";
import React from "react";
import placeholder1 from "../../../public/Placeholder.png";
import placeholder2 from "../../../public/Placeholder (1).png";
import placeholder3 from "../../../public/Placeholder (2).png";
import placeholder4 from "../../../public/Placeholder (3).png";

const Gains = () => {
  return (
    <div className="container">
      <div className="w-full ">
        <div className="w-full flex flex-col items-center gap-8">
          <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
            What Do You Gain From <br /> This Program?
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg md:w-[60%] lg:w-[50%]  text-gray-400 text-center">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-4 xl:gap-6 2xl:gap-8">
            <div className="flex-1 flex flex-col p-6 bg-gray-100 gap-6 w-full">
              <div className="flex flex-row md:flex-col gap-4">
                <Image
                  src={placeholder1}
                  alt=""
                  className="w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 aspect-square object-cover"
                />
                <p className="text-xl xl:text-2xl 2xl:text-3xl font-medium">
                  Course <br /> Certificate
                </p>
              </div>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
                We reply at record-breaking speed. Most companies take an
                average of 12 hours to reply. Not ours!
              </p>
            </div>
            <div className="flex-1 flex flex-col p-6 bg-gray-100 gap-6">
              <div className="flex flex-row md:flex-col gap-4">
                <Image
                  src={placeholder4}
                  alt=""
                  className="w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 aspect-auto object-cover"
                />
                <p className="text-xl xl:text-2xl 2xl:text-3xl font-medium">
                  Placement <br /> Guidance
                </p>
              </div>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
                We reply at record-breaking speed. Most companies take an
                average of 12 hours to reply. Not ours!
              </p>
            </div>
            <div className="flex-1 flex flex-col p-6 bg-gray-100 gap-6">
              <div className="flex flex-row md:flex-col gap-4">
                <Image
                  src={placeholder2}
                  alt=""
                  className="w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 aspect-auto object-cover"
                />
                <p className="text-xl xl:text-2xl 2xl:text-3xl font-medium">
                  Additional <br /> Resources
                </p>
              </div>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
                We reply at record-breaking speed. Most companies take an
                average of 12 hours to reply. Not ours!
              </p>
            </div>
            <div className="flex-1 flex flex-col p-6 bg-gray-100 gap-6">
              <div className="flex flex-row md:flex-col gap-4">
                <Image
                  src={placeholder3}
                  alt=""
                  className="w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 aspect-auto object-cover"
                />
                <p className="text-xl xl:text-2xl 2xl:text-3xl font-medium">
                  Chance to work on <br /> real projects
                </p>
              </div>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
                We reply at record-breaking speed. Most companies take an
                average of 12 hours to reply. Not ours!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gains;

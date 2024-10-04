import Image from "next/image";
import React from "react";
import banner from "../../../public/Rectangle 160.png";
import icon1 from "../../../public/highlights-icon1.png";
import icon2 from "../../../public/highlights-icon2.png";
import icon3 from "../../../public/highlights-icon3.png";
import icon4 from "../../../public/highlights-icon4.png";

const Highlights = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-[10%] md:p-[5%] gap-10 mt-5">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start">
          Program Highlights
        </p>
        <p className="text-gray-700 font-light text-xs md:text-sm lg:text-base xl:text-lg text-center md:text-start">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </p>
        <Image src={banner} alt="" className="w-full" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 md:gap-0">
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-xl bg-[#525FE1] p-3 flex items-center">
            <Image src={icon1} alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
            <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-extralight">
              20+ Hours Live Sessions
            </p>
            <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
              We meet with you to learn about your business, your goals, and
              your target audience.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-xl bg-[#525FE1] p-3 flex items-center">
            <Image src={icon2} alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
            <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-extralight">
              Portfolio Building Project
            </p>
            <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
              We execute our strategy using the latest digital marketing tools
              and techniques.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-xl bg-[#525FE1] p-3 flex items-center">
            <Image src={icon3} alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
            <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-extralight">
              30+ Hours Live Practice
            </p>
            <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
              We develop a customized marketing strategy that is based on your
              unique needs and goals.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-xl bg-[#525FE1] p-3  flex items-center">
            <Image src={icon4} alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
            <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-extralight">
              20+ Core Design Concept
            </p>
            <p className="text-sm xl:text-base 2xl:text-lg text-gray-400">
              We track the results of our campaigns so that we can make
              adjustments as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

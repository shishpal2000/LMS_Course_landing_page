import Image from "next/image";
import React from "react";
import arrow1 from "../../../public/Screenshot_2024-09-24_at_3.20.18_PM-removebg-preview copy.png";
import arrow2 from "../../../public/Screenshot_2024-09-24_at_3.20.18_PM-removebg-preview.png";
import icon1 from "../../../public/SVG.png";
import icon2 from "../../../public/SVG (1).png";
import icon3 from "../../../public/SVG (2).png";

const FlowChart = () => {
  return (
    <div className="w-full flex flex-col p-[5%] gap-10 bg-gradient-to-br from-purple-100 via-orange-100 to-purple-100 items-center pt-8">
      <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start mt-2">
        How does our UI/UX course work?
      </p>
      <p className="text-gray-700 font-light text-xs md:text-sm lg:text-base xl:text-lg text-center md:w-[60%] lg:w-[50%]">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>
      <div className="w-full flex flex-col items-center md:flex-row">
        <div className="w-[75%] md:w-[20%] flex flex-col justify-between items-center">
          <Image
            src={icon3}
            alt=""
            className="w-[10%] md:w-[25%] object-cover"
          />
          <p className="text-base xl:text-lg 2xl:text-xl font-medium text-center">
            Join Prebootcamp (Refundable Demo Class)
          </p>
          <p className="text-xs xl:text-sm 2xl:text-base text-gray-400 font-light text-center">
            Etiam porta malesuada magna mollis euismod consectetur leo elit.
          </p>
        </div>
        <Image
          src={arrow1}
          alt=""
          className="w-[10%] md:w-[6.66%] object-contain rotate-90 md:rotate-0 my-4 md:my-0"
        />
        <div className="w-[75%] md:w-[20%] flex flex-col justify-between items-center">
          <Image
            src={icon1}
            alt=""
            className="w-[10%] md:w-[25%] object-cover"
          />
          <p className="text-base xl:text-lg 2xl:text-xl font-medium text-center">
            Proceed to Mainbootcamp
          </p>
          <p className="text-xs xl:text-sm 2xl:text-base text-gray-400 font-light text-center">
            Etiam porta malesuada magna mollis euismod consectetur leo elit.
          </p>
        </div>
        <Image
          src={arrow2}
          alt=""
          className="w-[10%] md:w-[6.66%] object-contain rotate-90 md:rotate-0 my-4 md:my-0"
        />
        <div className="w-[75%] md:w-[20%] flex flex-col justify-between items-center">
          <Image
            src={icon2}
            alt=""
            className="w-[10%] md:w-[25%] object-cover"
          />
          <p className="text-base xl:text-lg 2xl:text-xl font-medium text-center">
            Complete the Program
          </p>
          <p className="text-xs xl:text-sm 2xl:text-base text-gray-400 font-light text-center">
            Etiam porta malesuada magna mollis euismod consectetur leo elit.
          </p>
        </div>
        <Image
          src={arrow1}
          alt=""
          className="w-[10%] md:w-[6.66%] object-contain rotate-90 md:rotate-0 my-4 md:my-0"
        />
        <div className="w-[75%] md:w-[20%] flex flex-col justify-between items-center">
          <Image
            src={icon1}
            alt=""
            className="w-[10%] md:w-[25%] object-cover"
          />
          <p className="text-base xl:text-lg 2xl:text-xl font-medium text-center">
            Get Placement Guidance
          </p>
          <p className="text-xs xl:text-sm 2xl:text-base text-gray-400 font-light text-center">
            Etiam porta malesuada magna mollis euismod consectetur leo elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;

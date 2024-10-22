import Image from "next/image";
import React from "react";
import banner from "../../../public/courselandingpagebanner.png";
import heroImage from "../../../public/courselandingpagebanneromage.png";
import logo from "../../../public/NavbarBrand.png";
import group from "../../../public/Group.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="w-full relative">
        <Image
          src={banner}
          alt=""
          className="w-full h-96 md:h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 flex pb-[10%]">
          <div className="w-full md:w-[56%] flex flex-col px-[5%] py-[2%] items-center md:items-start pt-[7%] mm:pt-[5%] md:pt-0 justify-center">
            <Image
              src={logo}
              alt=""
              className="w-[180px] md:w-[80px] lg:w-[100px] xl:w-[150px] object-cover"
            />
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold mb-0 mt-[6%] text-center md:text-start">
              Start Your UX Design Journey With Industry Mentors
            </p>
            <Image
              src={group}
              alt=""
              className="w-6 md:w-10 lg:w-16 xl:w-28 object-cover mt-[2%]"
            />
            <div className="md:hidden text-xl mt-[3%] font-semibold text-center md:text-start flex flex-col gap-2 ">
              <p className="bg-[#525FE1] rounded-md text-white p-2">
                16-Week Online Program
              </p>
              <p className="bg-[#525FE1] rounded-md text-white p-2">
                No Design Experience Required
              </p>
            </div>
            <p className="hidden md:block text-gray-700 text-[11px] mm:Text-xs md:text-sm lg:text-base xl:text-xl mt-[3%] font-semibold text-center md:text-start">
              16-Week Online Program | No Design Experience Required
            </p>
          </div>
          <div className="hidden md:block absolute bottom-0 left-0 w-full p-[5%]">
            <div className="w-full bg-[#525FE1] flex px-[5%] py-[2%] lg:rounded-2xl xl:rounded-[32px] 2xl:rounded-[48px] justify-between items-center">
              <div className="w-fit h-fit flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-start md:items-center">
                <div className="w-fit flex flex-col lg:gap-4 xl:gap-5 2xl:gap-6">
                  <p className="text-white text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium">
                    24 September, 2024
                  </p>
                  <p className="text-gray-300 text-[8px] md:text-sm lg:text-base xl:text-xl 2xl:text-xl">
                    Application Deadline
                  </p>
                </div>
                {/* <hr className="border-2 border-solid border-white rotate-90"/> */}
                {/* <div className="w-0.5 h-[100%] bg-white"></div> */}
                <div className="w-fit flex flex-col lg:gap-4 xl:gap-5 2xl:gap-6">
                  <p className="text-white text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium">
                    14 October, 2024
                  </p>
                  <p className="text-gray-300 text-[8px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                    Batch Starts
                  </p>
                </div>
              </div>
              <button className="w-fit h-fit p-1.5 md:p-2 lg:p-2.5 xl:p-3 gap-3 md:gap-4 lg:gap-5 xl:gap-6 flex items-center rounded-full bg-white text-black justify-between">
                <p className="ml-2 text-xs lg:text-base xl:text-xl 2xl:text-3xl font-medium">
                  Enroll Now
                </p>
                <MdKeyboardArrowRight className="lg:w-10 xl:w-12 2xl:w-14 lg:h-10 xl:h-12 2xl:h-14 bg-black text-white lg:p-2 xl:p-3 2xl:p-4 rounded-full" />
              </button>
            </div>
          </div>
          <div className="hidden md:block w-[44%] overflow-hidden">
            <Image
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import HeroSection from "./HeroSection";
import Gains from "./Gains";
import SyllabusCurriculum from "./SyllabusCurriculum";
import WhoseItFor from "./WhoseItFor";
import FAQs from "./FAQs";
import ElementaSchool from "./ElementaSchool";
import Highlights from "./Highlights";
import FlowChart from "./FlowChart";
import GetCertified from "../components/GetCerftified/GetCertified";
import Tools from "../components/Tools/Tools";
import Keyfeatures from "./Keyfeatures";
import Skills from "./Skills";

const Page = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col relative pb-[100px] gap-10 md:gap-14 xl:gap-16 mb-[60px] md:mb-0">
        <HeroSection />
        <Highlights />
        <Keyfeatures/>
        <Skills/>
        <Gains />
        <SyllabusCurriculum />
        <WhoseItFor />
        <FlowChart />
        <GetCertified />
        <Tools />
        <ElementaSchool />
        <FAQs />
        <div className="fixed bottom-0 left-0 w-full h-fit bg-gradient-to-tr from-purple-100 via-orange-100 to-purple-100 flex md:hidden p-[5%] items-center">
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-base font-medium">24th September, 2024</p>
              <p className="text-xs">Application Deadline</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base font-medium">14th October, 2024</p>
              <p className="text-xs">Batch Starts</p>
            </div>
          </div>
          <div className="w-1/2">
            <button className="bg-[#525FE1] text-white text-sm w-full py-4 rounded-md">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

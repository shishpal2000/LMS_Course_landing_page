"use client"
import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { getData } from "../apiCollection/apiCalling";
import Loder from "../loder/Loder";

// Dynamically import components without specifying `loading` since `Suspense` is used
const HeroSection1 = dynamic(() => import("./HeroSection1"), { ssr: true });
const Highlights = dynamic(() => import("./Highlights"), { ssr: false });
const Keyfeatures = dynamic(() => import("./Keyfeatures"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const Gains = dynamic(() => import("./Gains"), { ssr: false });
const SyllabusCurriculum = dynamic(() => import("./SyllabusCurriculum"), { ssr: false });
const WhoseItFor = dynamic(() => import("./WhoseItFor"), { ssr: false });
const FlowChart = dynamic(() => import("./FlowChart"), { ssr: false });
const GetCertified = dynamic(() => import("../components/GetCerftified/GetCertified"), { ssr: false });
const Tools = dynamic(() => import("../components/Tools/Tools"), { ssr: false });
const ElementaSchool = dynamic(() => import("./ElementaSchool"), { ssr: false });
const FAQs = dynamic(() => import("./FAQs"), { ssr: false });

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobData = async () => {
    setLoading(true);
    try {
      const response = await getData({ endpoint: `landing-page/course/` });
      const courseData = response?.data;

      if (courseData) {
        setData(courseData);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loding-component">
        <Loder />
      </div>
      ) : (
        <Suspense fallback={<div className="loding-component">
          <Loder />
        </div>}>
          <div className="w-full flex flex-col relative pb-[100px] gap-10 md:gap-14 xl:gap-16 mb-[60px] md:mb-0">
            <HeroSection1 data={data} />
            <Highlights data={data} />
            <Keyfeatures data={data} />
            <Skills data={data} />
            <Gains data={data} />
            <SyllabusCurriculum data={data} />
            <WhoseItFor data={data} />
            <FlowChart data={data} />
            <GetCertified data={data} />
            <Tools data={data} />
            <ElementaSchool data={data} />
            <FAQs data={data} />
            {/* Bottom fixed section */}
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
        </Suspense>
      )}
    </div>
  );
};

export default Page;



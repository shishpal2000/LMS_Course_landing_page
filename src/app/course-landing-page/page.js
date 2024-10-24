"use client";
import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { getData } from "../apiCollection/apiCalling";
import Loader  from "../loder/Loder";

// Dynamically import components
const HeroSection1 = dynamic(() => import("./HeroSection1"), { ssr: false });
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
      const response = await getData(`landing-page/course/?is_active=true`);
      const courseData = response?.data;
      console.log("response data =====>", courseData);

      if (courseData) {
        setData(courseData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const eventDate = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long", // or "short" for abbreviated month
      day: "numeric",
    }).format(eventDate);
  };
  useEffect(() => {
    fetchJobData();
  }, []);

  // Check if data exists and has elements before destructuring
  if (data.length === 0) return null;

  const {
    title,
    tag_line,
    logo,
    image,
    skills_learning,
    faq,
    tools,
    for_whom,
    course_highlights,
    syllabus,
    feedbacks,
    application_deadline_text,
    application_deadline,
    batch_start_date,
    batch_start_date_text,
    section_working,
    course_benefits,
    user_learning,
    download_syllabus_link,
    download_syllabus_link_text,
    certification_details,
    certification_heading,
    certification_title,
    course_id,
    instructor_intro_text,
    instructor_name


  } = data?.[0];
  console.log("course_id",course_id._id

  )

  return (
    <div className="container">
      {loading ? (
        <div className="loading-component text">
          <Loader />
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="loading-component">
              <Loader />
            </div>
          }
        >
          <div className="w-full flex flex-col relative pb-[100px] gap-10 md:gap-14 xl:gap-16 mb-[60px] md:mb-0">
            {/* Passing specific props to HeroSection1 */}
            <HeroSection1 
              instructor_name={instructor_name}
              instructor_intro_text={instructor_intro_text}
              title={title} 
              course_id={course_id}
              batch_start_date_text=  {batch_start_date_text}
              batch_start_date={batch_start_date}           
               application_deadline_text={application_deadline_text}
              application_deadline={application_deadline}
              tag_line={tag_line} 
              logos={logo} 
              image={image} 
            />
            <Highlights course_highlights={course_highlights} />
            <Keyfeatures course_benefits={course_benefits} />
            <Skills skillsData={skills_learning} />
            <Gains user_learning={user_learning} />
            <SyllabusCurriculum syllabus={syllabus} download_syllabus_link={download_syllabus_link} download_syllabus_link_text={download_syllabus_link_text}/>
            <WhoseItFor for_whom={for_whom} />
            <FlowChart section_working={section_working} />
            <GetCertified certification_details={certification_details} certification_title={certification_title} certification_heading={certification_heading} />
            <Tools tools={tools} />
            <ElementaSchool feedbacks={feedbacks} />
            <FAQs faq={faq} />

            {/* Bottom fixed section */}
            <div className="fixed bottom-0 left-0 w-full h-fit bg-gradient-to-tr from-purple-100 via-orange-100 to-purple-100 flex md:hidden p-[5%] items-center">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col">
                  <p className="text-base font-medium text-black">                  
                    {formatDate(application_deadline)}
                  </p>
                  <p className="text-xs text-black">                  
                    {application_deadline_text}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-medium text-black">                 
                     {formatDate(batch_start_date)}
                  </p>
                  <p className="text-xs text-black">                 
                     {batch_start_date_text}
                  </p>
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

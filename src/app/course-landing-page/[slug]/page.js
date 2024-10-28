"use client";
import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { getData } from "../../apiCollection/apiCalling";
import Loader from "../../loder/Loder";
import Link from "next/link";


// Dynamically import components
const HeroSection1 = dynamic(() => import("../HeroSection1"), { ssr: false });
const Highlights = dynamic(() => import("../Highlights"), { ssr: false });
const Keyfeatures = dynamic(() => import("../Keyfeatures"), { ssr: false });
const Skills = dynamic(() => import("../Skills"), { ssr: false });
const Gains = dynamic(() => import("../Gains"), { ssr: false });
const SyllabusCurriculum = dynamic(() => import("../SyllabusCurriculum"), { ssr: false });
const WhoseItFor = dynamic(() => import("../WhoseItFor"), { ssr: false });
const FlowChart = dynamic(() => import("../FlowChart"), { ssr: false });
const GetCertified = dynamic(() => import("../../components/GetCerftified/GetCertified"), { ssr: false });
const Tools = dynamic(() => import("../../components/Tools/Tools"), { ssr: false });
const ElementaSchool = dynamic(() => import("../ElementaSchool"), { ssr: false });
const FAQs = dynamic(() => import("../FAQs"), { ssr: false });

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobData = async () => {
    setLoading(true);
    try {
      const response = await getData(`landing-page/course/full-stack-web-development-bootcamp`);
      console.log("Complete Response:", response); // Log entire response
      const apiResponse = response.data;
      console.log("apiResponse:", apiResponse); // Log apiResponse separately

      if (apiResponse) {
        setData(apiResponse);
        console.log("Full API Response:", apiResponse);
      } else {
        console.error("Data structure is not as expected");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A"; // Return "N/A" or any default text if dateString is not valid

    const eventDate = new Date(dateString);
    if (isNaN(eventDate)) return "Invalid Date"; // Handle cases where date parsing fails

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(eventDate);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Adjust data extraction based on response structure
  const dataSource = data?.courseDetails?.[0] || {}; // Adjust 'data' based on actual response structure
  const eventDetailsSource = data?.details || {}; // Adjust 'eventDetails' based on actual structure

  if (!dataSource && !eventDetailsSource) {
    return <div>No data available</div>;
  }

  console.log("Data source:", dataSource);
  console.log("Event Details Source:", eventDetailsSource);

  // Merge data fields from both dataSource and eventDetailsSource, with eventDetailsSource taking priority if available
  const {
    faq = eventDetailsSource.faq || dataSource.faq,
    course_id = eventDetailsSource.course_id || dataSource.course_id,
    section_working = eventDetailsSource.section_working || dataSource.section_working,
    certificate = eventDetailsSource.certificate || dataSource.certificate,
    course_benefits_title = eventDetailsSource.course_benefits_title || dataSource.course_benefits_title,
    tools = eventDetailsSource.tools || dataSource.tools,
    hero_section = eventDetailsSource.hero_section || dataSource.hero_section,
    for_whom = eventDetailsSource.for_whom || dataSource.for_whom,
    course_highlights= eventDetailsSource.course_highlights|| dataSource.course_highlights
 ,
 course_benefits = eventDetailsSource.course_benefits || dataSource.course_benefits,
    user_learning= eventDetailsSource.user_learning
 || dataSource.user_learning
 ,
 skills_learning = eventDetailsSource.skills_learning || dataSource.skills_learning,
    syllabus = eventDetailsSource.syllabus || dataSource.syllabus,
    feedbacks = eventDetailsSource.feedbacks || dataSource.feedbacks,
    // instructor_details = eventDetailsSource.instructor_details || dataSource.instructor_details,
  } = { ...dataSource, ...eventDetailsSource }; // Spreading both sources allows for easier fallback assignment

  return (
    <div className="container">
      {loading ? (
        <div className="loading-component text">
          <Loader />
        </div>
      ) : (
        <Suspense fallback={<div className="loading-component"><Loader /></div>}>
          <div className="w-full flex flex-col relative pb-[100px] gap-10 md:gap-14 xl:gap-16 mb-[60px] md:mb-0">
            <HeroSection1 
              data={hero_section} course_id={course_id}
            />
            <Highlights course_highlights={course_highlights} />
            <Keyfeatures course_benefits={course_benefits}  course_benefits_title={course_benefits_title}/>
            <Skills skillsData={skills_learning} />
            <Gains user_learning={user_learning} />
            <SyllabusCurriculum syllabus={syllabus}   />
            <WhoseItFor for_whom={for_whom} />
            <FlowChart section_working={section_working} />
            <GetCertified certification_details={certificate?.certification_details} certificate_image={certificate?.certificate_image} certification_title={certificate?.certification_title} certification_heading={certificate?.certification_heading} /> 
            <Tools tools={tools} />
            <ElementaSchool feedbacks={feedbacks} />
            <FAQs faq={faq} /> 

            {/* Bottom fixed section */}
            <div className="fixed bottom-0 text-gray-700 left-0 w-full h-fit bg-gradient-to-tr from-purple-100 via-orange-100 to-purple-100 flex md:hidden p-[5%] items-center">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col">
                  <p className="text-base font-medium">
                    {" "}
                    {formatDate(hero_section?.application_deadline_date)}
                  </p>
                  <p className="text-xs">
                    {" "}
                    {hero_section?.application_deadline_text}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-medium">
                    {" "}
                    {formatDate(hero_section?.date)}
                  </p>
                  <p className="text-xs"> {hero_section?.time}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-medium">
                    {" "}
                    {hero_section.instructor_intro_text}
                  </p>
                  <p className="text-xs"> {hero_section.instructor_name}</p>
                </div>
              </div>
              <div className="w-1/2">
                <Link
                  href={`/loginpage?event_id=${hero_section.event_id?._id}&price=${hero_section.event_id?.price?.amount}&is_paid=${hero_section.event_id?.is_paid}&icon_url=${hero_section.logo_image}`}
                >
                  <button className="bg-[#525FE1] text-white text-sm w-full py-4 rounded-md">
                    Enroll now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default Page;

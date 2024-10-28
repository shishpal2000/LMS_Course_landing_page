import Image from "next/image";
import React from "react";
import banner from "../../../public/courselandingpagebanner.png";
// import heroImage from "../../../public/courselandingpagebanneromage.png";
// import logo from "../../../public/NavbarBrand.png";
import group from "../../../public/Group.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";


const HeroSection1 = ({ data,course_id
}) => {

  console.log(data);

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
  return (
    <div className="container ">
    <div className="w-full relative ">
      <Image
        src={banner}
        alt=""
        className="w-full h-96 md:h-full object-cover"
      />
      <div className="w-full h-full absolute top-0 left-0 flex pb-[10%]">
      <div className="w-full md:w-[56%] flex flex-col px-[5%] py-[2%] items-center md:items-start pt-[7%] mm:pt-[5%] md:pt-0 justify-center">
                  <img
                    src={data?.logo_image}
                    alt=""
                    className="w-[140px] md:w-[80px] lg:w-[100px] xl:w-[130px] object-cover"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold mb-0 mt-[6%] text-center md:text-start">
                    {data?.title}
                  </p>
                  <Image
                    src={group}
                    alt=""
                    className="w-6 md:w-10 lg:w-16 xl:w-28 object-cover mt-[2%]"
                  />

                  <p className=" text-gray-700 text-[11px] mm:text-xs md:text-sm lg:text-base xl:text-xl mt-[3%] font-semibold text-center md:text-start lg:pb-16 xl:pb-20">
                    {data?.tag_line}
                    <br />
                    <p className="text-xl mb-2">
                      ₹ {course_id?.hasSpecialPrice===true?course_id.special_price:course_id.price || "N/A"}
                    </p>
                  </p>
                </div>
        <div className="hidden md:block absolute bottom-0 left-0 w-full p-[45px]">
          <div className="w-full bg-[#525FE1] flex px-[5%] py-[2%] lg:rounded-2xl xl:rounded-[32px] 2xl:rounded-[48px] 2xl:mt-10 justify-between items-center">
            <div className="w-fit h-fit flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-8 xl:gap-6 items-start md:items-center">
              <div className="w-fit flex flex-col lg:gap-2 xl:gap-3 2xl:gap-5 px-4 md:px-6 lg:px-8 xl:pl-4 border-r-2 border-white">
                <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-medium">
                  {/* 24 September, 2024 */}
                  {formatDate(data?.application_deadline_date)}
                </p>
                <p className="text-gray-300 text-[8px] md:text-sm lg:text-base xl:text-xl 2xl:text-xl">
                  {/* Application Deadline */}
                  {data?.application_deadline_text
                  }
                </p>
              </div>
              {/* <hr className="border-2 border-solid border-white rotate-90"/> */}
              {/* <div className="w-0.5 h-[100%] bg-white"></div> */}
              <div className="w-fit flex flex-col lg:gap-2 xl:gap-3 2xl:gap-5 px-4 md:px-6 lg:px-8 xl:pl-1 border-r-2 border-white">
                <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-medium">
                  {/* 14 October, 2024 */}
                  {formatDate(data?.batch_start_date)}
                </p>
                <p className="text-gray-300 text-[8px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                  {/* Batch Starts */}
                  {data?.batch_start_date_text}
                </p>
              </div>
              <div className="w-fit flex flex-col lg:gap-2 xl:gap-3 2xl:gap-5">
                <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-medium">
                  {/* 14 October, 2024 */}
                  {data?.instructor_intro_text }
                </p>
                <p className="text-gray-300 text-[8px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                  {/* Batch Starts */}
                  {/* vinay */}
                  {
                    data?.instructor_name
                  }
                </p>
              </div>
            </div>
            <Link
            href={""}
                      // href={`/loginpage?course_id=${course_id
                      //   ?._id}&price=${course_id?.price?.amount}&is_paid=${course_id?.is_paid}&icon_url=${logo_image}`}
                      className="w-fit h-fit p-1.5 md:p-2 lg:p-2.5 xl:p-3 gap-3 md:gap-4 lg:gap-5 xl:gap-6 flex items-center rounded-full bg-white text-black justify-between"
                    >
                      <p className="ml-2 text-xs lg:text-base xl:text-xl 2xl:text-3xl font-medium">
                        Book Now
                      </p>
                      <MdKeyboardArrowRight className="lg:w-10 xl:w-12 2xl:w-14 lg:h-10 xl:h-12 2xl:h-14 bg-black text-white lg:p-2 xl:p-3 2xl:p-4 rounded-full" />
                    </Link>
          </div>
        </div>
        <div className="hidden md:block w-[44%] overflow-hidden">
          <img
            src={data?.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroSection1;

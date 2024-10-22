import React from "react";

const ElementaSchool = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col md:grid grid-cols-3 gap-4 bg-gradient-to-br from-purple-100 via-orange-100 to-purple-100 rounded-2xl px-[5%] py-[10%] md:py-[5%]">
        <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-5">
          <p className="text-3xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-start">
            What Do They Say About Elementa Academy?
          </p>
          <p className="text-gray-700 font-light text-xs lg:text-sm xl:text-base w-[80%] md:w-full text-center md:text-start">
            {
              "Don't hesitate to join Elementa and experience a different chemistry learning experience!"
            }
          </p>
          <button className="bg-[#525FE1] w-fit px-4 py-1.5 text-white lg:text-xs xl:text-sm rounded-md">
            Join Now
          </button>
        </div>
        <div className="w-full h-full flex flex-col pt-6 gap-3">
          <div className="w-full h-fit p-[5%] overflow-hidden rounded-lg bg-white flex flex-col gap-2">
            <p className="text-sm lg:text-base xl:text-lg font-medium">Ana</p>
            <p className="text-[10px] lg:text-xs xl:text-sm font-light text-gray-700">
              {
                "'Elementa really helped me understand chemistry concepts easily. The learning videos were very interesting and informative, and the exercises really helped to test my understanding.'"
              }
            </p>
          </div>
          <div className="w-full h-fit p-[5%] rounded-lg bg-white flex flex-col gap-2">
            <p className="text-sm lg:text-base xl:text-lg font-medium">Budi</p>
            <p className="text-[10px] lg:text-xs xl:text-sm font-light text-gray-700">
              {
                '"The teachers at Elementa are very experienced and patient. They are always ready to help and answer my questions."'
              }
            </p>
          </div>
          <div className="w-full h-fit p-[5%] rounded-lg bg-white flex flex-col gap-2">
            <p className="text-sm lg:text-base xl:text-lg font-medium">Ana</p>
            <p className="text-[10px] lg:text-xs xl:text-sm font-light text-gray-700">
              {
                '"The learning community at Elementa is very active and positive. I enjoy being able to study together with other students who have the same interests as me."'
              }
            </p>
          </div>
        </div>
        <div className="hidden w-full h-full md:flex md:flex-col pb-6 overflow-hidden gap-3">
          <div className="w-full h-fit p-[5%] rounded-lg bg-white flex flex-col gap-2">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg font-medium">
              Cici
            </p>
            <p className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-light text-gray-700">
              {
                '"The learning community at Elementa is very active and positive. I enjoy being able to study together with other students who have the same interests as me."'
              }
            </p>
          </div>
          <div className="w-full h-fit p-[5%] rounded-lg bg-white flex flex-col gap-2">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg font-medium">
              Aseep
            </p>
            <p className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-light text-gray-700">
              {
                '"The Olympiad Chemistry class provides complete material and lots of practice questions. I feel very prepared to face the chemistry exam after taking this class."'
              }
            </p>
          </div>
          <div className="w-full h-fit p-[5%] rounded-lg bg-white flex flex-col gap-2">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg font-medium">
              Budi
            </p>
            <p className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-light text-gray-700">
              {
                '"The teachers at Elementa are very experienced and patient. They are always ready to help and answer my questions."'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementaSchool;

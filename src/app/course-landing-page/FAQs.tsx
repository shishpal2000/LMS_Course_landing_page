"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";

const FAQs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [openFAQ, setOpenFAQ] = useState<number>(5);
  return (
    <div className="w-full flex flex-col py-[10%] md:p-[5%] items-center gap-5">
      <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start">
        Frequently Asked Questions
      </p>
      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 text-center md:w-[50%]">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>
      <div className="w-full flex flex-col md:flex-row gap-5 mt-5">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <div className="w-full p-[5%] bg-gray-100 rounded-md flex justify-between">
            <div className="w-[80%] flex flex-col gap-5">
              <p className="text-sm lg:text-base xl:text-xl">
                How long does it take to complete a web development project?
              </p>
              {openFAQ === 0 && (
                <p className="text-gray-400 text-[10px] lg:text-xs xl:text-sm">
                  {
                    "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
                  }
                </p>
              )}
            </div>
            <div
              className={`lg:text-xl xl:text-2xl p-1 h-fit rounded-full ${
                openFAQ === 0 ? "bg-[#525FE1] text-white" : "bg-purple-100"
              }`}
              onClick={() => setOpenFAQ(openFAQ === 0 ? 5 : 0)}
            >
              {openFAQ === 0 ? <GoPlus /> : <HiMinusSmall />}
            </div>
          </div>
          <div className="w-full p-[5%] bg-gray-100 rounded-md flex justify-between">
            <div className="w-[80%] flex flex-col gap-5">
              <p className="text-sm lg:text-base xl:text-xl">
                Can you handle large-scale mobile app development projects?
              </p>
              {openFAQ === 1 && (
                <p className="text-gray-400 text-[10px] lg:text-xs xl:text-sm">
                  {
                    "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
                  }
                </p>
              )}
            </div>
            <div
              className={`lg:text-xl xl:text-2xl p-1 h-fit rounded-full ${
                openFAQ === 1 ? "bg-[#525FE1] text-white" : "bg-purple-100"
              }`}
              onClick={() => setOpenFAQ(openFAQ === 1 ? 5 : 1)}
            >
              {openFAQ === 1 ? <GoPlus /> : <HiMinusSmall />}
            </div>
          </div>
          <div className="w-full p-[5%] bg-gray-100 rounded-md flex justify-between">
            <div className="w-[80%] flex flex-col gap-5">
              <p className="text-sm lg:text-base xl:text-xl">
                Can you integrate third-party APIs into our mobile app?
              </p>
              {openFAQ === 2 && (
                <p className="text-gray-400 text-[10px] lg:text-xs xl:text-sm">
                  {
                    "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
                  }
                </p>
              )}
            </div>
            <div
              className={`lg:text-xl xl:text-2xl p-1 h-fit rounded-full ${
                openFAQ === 2 ? "bg-[#525FE1] text-white" : "bg-purple-100"
              }`}
              onClick={() => setOpenFAQ(openFAQ === 2 ? 5 : 2)}
            >
              {openFAQ === 2 ? <GoPlus /> : <HiMinusSmall />}
            </div>
          </div>
          <div className="w-full p-[5%] bg-gray-100 rounded-md flex justify-between">
            <div className="w-[80%] flex flex-col gap-5">
              <p className="text-sm lg:text-base xl:text-xl">
                How do you ensure cross-platform compatibility for mobile apps?
              </p>
              {openFAQ === 3 && (
                <p className="text-gray-400 text-[10px] lg:text-xs xl:text-sm">
                  {
                    "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
                  }
                </p>
              )}
            </div>
            <div
              className={`lg:text-xl xl:text-2xl p-1 h-fit rounded-full ${
                openFAQ === 3 ? "bg-[#525FE1] text-white" : "bg-purple-100"
              }`}
              onClick={() => setOpenFAQ(openFAQ === 3 ? 5 : 3)}
            >
              {openFAQ === 3 ? <GoPlus /> : <HiMinusSmall />}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-[3%] gap-3 bg-gray-100 rounded-md h-fit">
          <p className="font-semibold text-base xl:text-xl">
            ASK YOUR QUESTION
          </p>
          <hr />
          <div className="w-full flex flex-col">
            <p className="text-xs lg:text-sm xl:text-base">Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name ..."
              className="p-3 text-[10px] lg:text-xs xl:text-sm"
            />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-xs lg:text-xs xl:text-sm">Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email ..."
              className="p-3 text-[10px] lg:text-xs xl:text-sm"
            />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-xs lg:text-xs xl:text-sm">Question</p>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question here ..."
              rows={3}
              className="p-3 text-[10px] lg:text-xs xl:text-sm"
            ></textarea>
          </div>
          <button className="w-full rounded bg-[#525FE1] text-white py-2 xl:py-3 text-xs mt-1">
            SEND YOUR MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

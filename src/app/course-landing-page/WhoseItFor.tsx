import React from "react";
import { FaFileInvoice } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi2";
import ReasonCard from "./ReasonCard";

const WhoseItFor = () => {
  const reasons = [
    [
      <FaFileInvoice key={1} />,
      "Aspiring entrepreneurs",
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
    ],
    [
      <SlCalender key={2} />,
      "Students and graduates",
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    ],
    [
      <HiUserGroup key={3} />,
      "Small business owners",
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    ],
    [
      <FaFileInvoice key={4} />,
      "Aspiring entrepreneurs",
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
    ],
    [
      <SlCalender key={5} />,
      "Students and graduates",
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    ],
    [
      <HiUserGroup key={6} />,
      "Small business owners",
      "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization ",
    ],
  ];
  return (
    <div className="w-full bg-white py-[15%] md:p-[5%] flex flex-col gap-5 items-center">
      <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
        Who is this workshop for?
      </p>
      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 text-center md:w-[50%]">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:gap-y-16 xl:gap-y-[72px] mt-5">
        {reasons.map((reason, index) => (
          <ReasonCard
            heading={reason[1]}
            info={reason[2]}
            icon={reason[0]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoseItFor;

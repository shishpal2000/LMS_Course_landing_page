import Image from "next/image";
import React from "react";
import tool1 from "../../../../public/image(2)copy.png";
import tool2 from "../../../../public/image(2)copy2.png";
import tool3 from "../../../../public/image(2)copy3.png";
import tool4 from "../../../../public/image(2)copy4.png";
import tool5 from "../../../../public/image(2)copy5.png";
import tool6 from "../../../../public/image(2)copy6.png";
import tool7 from "../../../../public/image(2)copy7.png";
import tool8 from "../../../../public/image(2)copy8.png";
import tool9 from "../../../../public/image(2)copy9.png";

const Tools = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col gap-5  items-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">Tools you will learn</p>
        <div className="w-full flex gap-8 flex-wrap">
          <Image src={tool1} alt="" className="w-[100px] h-auto object-cover "  />
          <Image src={tool2} alt="" className="w-[100px] h-auto  object-cover" />
          <Image src={tool3} alt="" className="w-[100px] h-auto  object-cover" />
          <Image src={tool4} alt="" className="w-[100px] h-auto  object-cover" />
          <Image src={tool5} alt="" className="w-[100px] h-auto object-cover" />
          <Image src={tool6} alt="" className="w-[100px] h-auto object-cover" />
          <Image src={tool7} alt="" className="w-[100px] h-auto object-cover" />
          <Image src={tool8} alt="" className="w-[100px] h-auto object-cover" />
          <Image src={tool9} alt="" className="w-[100px] h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Tools;

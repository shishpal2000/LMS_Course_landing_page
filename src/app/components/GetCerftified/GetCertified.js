import Image from "next/image";
import React from "react";
import { TiStarburst } from "react-icons/ti";
import certificate from "../../../../public/certfifcate.png";
import { IoArrowRedoSharp, IoPerson } from "react-icons/io5";

const GetCertified = () => {
  return (
    <div className="container">
    <div className="w-full flex flex-col items-center gap-5  md:py-0">
      <p className="text-2xl md:text-4xl lg:text-6xl font-semibold">
        Get Certified
      </p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-center">
        Yes! You will be <span className="text-primary">certified</span> for
        this workshop after you submit your assignmemnt.
      </p>
      <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row-reverse md:justify-between">
        <div className="w-full md:w-[45%]">
          <Image src={certificate} alt="" className="w-full object-cover" />
        </div>
        <div className="w-full md:w-[45%] flex flex-col gap-3 justify-center">
          <div className="w-full flex gap-2">
            <div className="w-fit p-1 bg-primary bg-opacity-40 text-primary text-2xl md:text-3xl lg:text-4xl h-fit rounded-md">
              <TiStarburst />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl  font-medium text-primary">
                Official and Verified:
              </p>
              <p>
                Recieve an instructor signed certificate with the institutions
                logo to verify your achievements and increase your job
                prospets.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-fit p-1 bg-primary bg-opacity-40 text-primary text-2xl md:text-3xl lg:text-4xl h-fit rounded-md">
              <IoArrowRedoSharp />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl  font-medium text-primary">
                Easily Shareable:
              </p>
              <p>
                Add the certificate to your CV or your resume or post it
                directly on Linkedin. You can even post it on instagram and
                twitter..
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-fit p-1 bg-primary bg-opacity-40 text-primary text-2xl md:text-3xl lg:text-4xl h-fit rounded-md">
              <IoPerson />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl  font-medium text-primary">
                Enhances Credibility:
              </p>
              <p>
                Use your certificate to enhance your professional credibility
                and stand out among your peers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GetCertified;

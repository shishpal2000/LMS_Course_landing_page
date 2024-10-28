import React from "react";

const Skills = ({ skillsData }) => {
  // const { title, tags } = skillsData;

  return (
    <div className="container">
      <div className="w-full flex flex-col items-center gap-5">
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-700">
          {skillsData?.title || "Skills you learn"} {/* Use title from API or fallback */}
        </p>
        <div className="flex flex-wrap w-full gap-2 justify-center">
          {skillsData?.tags && skillsData?.tags.length > 0 ? (
            skillsData?.tags?.map((skill, index) => (
              <p
                key={index}
                className="py-2 md:py-3 px-4 md:px-8 bg-[#525FE1] bg-opacity-20 rounded-md text-base font-semibold"
              >
                {skill}
              </p>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;

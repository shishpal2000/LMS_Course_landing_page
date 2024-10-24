import React from "react";

const ElementaSchool = ({ feedbacks }) => {
  const { title, description, feedback, join_now_text, join_now_url } = feedbacks;

  return (
    <div className="container">
      <div className="w-full flex flex-col md:grid grid-cols-3 gap-4 bg-gradient-to-br from-purple-100 via-orange-100 to-purple-100 rounded-2xl px-[5%] py-[10%] md:py-[5%]">
        <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-5">
          <p className="text-gray-700 text-3xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-start">
            {title || "What Do They Say About Elementa Academy?"}
          </p>
          <p className="text-gray-700 font-light text-xs lg:text-sm xl:text-base w-[80%] md:w-full text-center md:text-start">
            {description || "Don't hesitate to join Elementa and experience a different chemistry learning experience!"}
          </p>
          <a href={join_now_url} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#525FE1] w-fit px-4 py-1.5 text-white lg:text-xs xl:text-sm rounded-md">
              {join_now_text || "Join Now"}
            </button>
          </a>
        </div>
        <div className="w-full h-full flex flex-col pt-6 gap-3">
          {feedback.length > 0 ? (
            feedback.map((item, index) => (
              <div key={index} className="w-full h-fit p-[5%] rounded-lg bg-white flex flex-col gap-2">
                <p className="text-gray-700 text-sm lg:text-base xl:text-lg font-medium">{item.name || "Anonymous"}</p>
                <p className="text-[10px] lg:text-xs xl:text-sm font-light text-gray-700">
                  {item.feedback || "No feedback provided."}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No feedback available.</p> // Fallback if no feedback is available
          )}
        </div>
        {/* Optional: Place for additional content or feedback */}
        <div className="hidden w-full h-full md:flex md:flex-col pb-6 overflow-hidden gap-3">
          {/* Add additional feedback or other content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default ElementaSchool;

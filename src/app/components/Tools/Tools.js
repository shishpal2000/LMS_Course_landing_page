import Image from "next/image";
import React from "react";

const Tools = ({ tools }) => {
  const { title, image } = tools; // Destructure tools data

  return (
    <div className="container">
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-700" >
          {title || "Tools you will learn"} {/* Use API title or fallback */}
        </p>
        <div className="w-full flex gap-8 flex-wrap justify-center">
          {image && image.length > 0 ? (
            image.map((tool, index) => (
              <Image
                key={index}
                src={tool.image_icon
                } // Assuming API provides the image URL
                alt={tool.name || `Tool ${index + 1}`} // Provide alt text
                width={100}
                height={100}
                className="w-[100px] h-auto object-cover"
              />
            ))
          ) : (
            <p>No tools available</p> // Fallback if no images
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;

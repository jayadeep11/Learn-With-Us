import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ image, content, imagePosition = "left" }) => {
  const navigate = useNavigate();

  // Conditional classes to change order based on image position
  const imageFirst =
    imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse";

  // Handle button click to navigate
  const handleNavigation = () => {
    navigate(content.link);
  };

  return (
    <div
      className={`flex flex-col ${imageFirst} justify-center items-center bg-[#171717] shadow-lg rounded-xl max-w-auto md:mx-48`}
    >
      {/* Image side */}
      <div className="md:w-1/2 p-10 bg-gradient-to-b from-neutral-100 to-neutral-800 rounded-lg">
        <img
          src={image}
          alt="Card Image"
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Content side */}
      <div className="md:w-1/2 p-10 flex flex-col gap-3 justify-center items-center text-white">
        <h2 className="acorn text-xl md:text-3xl lg:text-4xl font-bold mb-2">
          {content.title}
        </h2>
        <p className="text-sm md:text-base text-center lg:text-lg text-neutral-400 mb-4">
          {content.description}
        </p>
        <button
          onClick={handleNavigation}
          className="bg-neutral-800 text-gray-300 text-sm md:text-base lg:text-lg px-4 py-2 w-48 arch text-center rounded-3xl hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out"
        >
          {content.linkText || "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Card;


import React from "react";
import { Link } from "react-router-dom";

const HeroCards = ({ content, rightBig }) => {
  return (
    <div className="flex flex-col w-full lg:gap-32 gap-16 mt-16 border border-black p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 w-full">
        {/* Conditionally render the left or right div bigger with shadows */}
        <div
          className={`${
            rightBig ? "lg:col-span-8" : "lg:col-span-2"
          } sm:col-span-1 bg-[#7092e2] rounded-[3rem] lg:h-[34rem] h-[24rem] p-10 text-violet-400
 flex flex-col items-end relative overflow-hidden shadow-lg`}
        >
          <Link
            to={content.left.link}
            className="text-[3.4rem] font-extrabold text-black"
          >
            {content.left.title}
          </Link>
          <img
            src={content.left.image}
            alt={content.left.alt}
            className="md:w-[90%] w-full absolute top-36 left-10 lg:left-16 lg:top-32 lg:w-auto lg:h-[90%] h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:translate-y-6"
          />
        </div>

        <div
          className={`${
            rightBig ? "lg:col-span-2" : "lg:col-span-8"
          } sm:col-span-1 bg-[#7092e2] rounded-[3rem] lg:h-[34rem] h-[24rem] p-10 text-violet-400
 flex flex-col items-end relative overflow-hidden shadow-lg`}
        >
          <Link
            to={content.right.link}
            className="text-[3.4rem] font-extrabold text-black"
          >
            {content.right.title}
          </Link>
          <img
            src={content.right.image}
            alt={content.right.alt}
            className="md:w-[90%] w-full absolute top-36 left-10 lg:left-16 lg:top-32 lg:w-auto lg:h-[90%] h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:translate-y-6"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroCards;

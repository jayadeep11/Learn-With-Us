import React from "react";
import Title from "./Title";
import { FaArrowDown } from "react-icons/fa"; // Importing arrow down icon

export default function Hero() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-0 bg-black">
      {/* Hero Title and Description */}
      <div className="flex flex-col items-center text-center">
        <Title />
        <p className="text-base text-sm text-gray-300 lg:text-lg max-w-md lg:max-w-lg">
          A guide to getting started with Neovim, the powerful text editor
          that's extensible and highly configurable.
        </p>
        <button className="border border-gray-400 text-white text-xl lg:text-xl mt-10 px-4 py-2 rounded-3xl shadow-lg hover:bg-gray-500  transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}

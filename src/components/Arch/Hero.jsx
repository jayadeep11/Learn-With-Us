import React from "react";
import { FaArrowDown } from "react-icons/fa"; // Importing arrow down icon

export default function Hero() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-0 bg-black">
      {/* Hero Title and Description */}
      <div className="flex flex-col items-center text-center ">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h1 className="arch text-7xl md:text-7xl lg:text-[13rem] bg-gradient-to-b from-white to-black bg-clip-text text-transparent transition-all duration-300 ease-in-out">
            Arch Linux
          </h1>
        </div>
        <p className="text-base text-sm text-gray-300 lg:text-lg max-w-md lg:max-w-lg">
          Arch Linux is a simple and lightweight operating system that gives you
          full control over your setup.
        </p>
        <button className="border border-gray-400 text-white text-xl lg:text-xl mt-10 px-4 py-2 rounded-3xl shadow-lg hover:bg-gray-500  transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}

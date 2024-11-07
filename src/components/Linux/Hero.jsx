import React from "react";

export default function Hero() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-0 bg-black">
      <div className="flex flex-col items-center text-center ">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h1 className="arch text-7xl md:text-7xl lg:text-[13rem] bg-gradient-to-b from-white to-black bg-clip-text text-transparent transition-all duration-300 ease-in-out">
            Linux
          </h1>
        </div>
        <p className="text-base text-sm text-gray-300 lg:text-lg max-w-md lg:max-w-lg">
          Linux is a free, open-source operating system that has become a popular choice for developers, tech enthusiasts, and businesses due to its flexibility, security, and high level of customization.
        </p>
        <button className="border border-gray-400 text-white text-xl lg:text-xl mt-10 px-4 py-2 rounded-3xl shadow-lg hover:bg-gray-500 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}


import React, { useEffect, useState } from "react";

const gradients = [
  "from-blue-400 to-teal-500",
];

const Title = () => {
  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 11000); // Change every 11 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <h1
        className={`arch text-5xl md:text-7xl lg:text-[11rem] bg-gradient-to-r ${gradients[currentGradient]} bg-clip-text text-transparent transition-all duration-300 ease-in-out`}
        style={{ 
          backgroundSize: '200% 200%', 
          animation: 'gradient-animation 15s ease infinite' // Increased duration
        }}
      >
        Hello, Nerds!
      </h1>
      <p className="mt-5 text-3xl md:text-3xl lg:text-3xl text-[#D4EDE4]">
        Welcome
      </p>
      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%; // Midway point for smooth transition
          }
          100% {
            background-position: 0% 50%; // Return to start
          }
        }
      `}</style>
    </div>
  );
};

export default Title;


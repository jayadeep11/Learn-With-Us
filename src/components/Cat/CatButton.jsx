import React, { useState, useEffect } from 'react';
import { FaCat } from 'react-icons/fa';
import Box from './Box';

const CatButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage div visibility
  const [rotation, setRotation] = useState(0); // State to manage rotation

  const toggleDiv = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      // Use requestAnimationFrame to optimize updates
      animationFrameId = requestAnimationFrame(() => {
        setRotation(window.scrollY); // Update rotation based on scroll position
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId); // Clean up animation frame
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-20">
      <button
        onClick={toggleDiv}
        className="bg-neutral-800 hover:bg-gray-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }} // Smooth rotation
      >
        <FaCat size={24} />
      </button>

      {isOpen && (
        <Box />
      )}
    </div>
  );
};

export default CatButton;


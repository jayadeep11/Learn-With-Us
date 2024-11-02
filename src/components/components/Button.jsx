
import React from 'react';

const Button = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

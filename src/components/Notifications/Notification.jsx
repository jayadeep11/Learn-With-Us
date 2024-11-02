import React from 'react';

export const ThemeNotification = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 border border-violet-600 bg-transparent text-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <span className="text-sm">{message}</span>
      <button 
        onClick={onClose} 
        className="text-violet-600 font-bold text-lg ml-4"
      >
        &times;
      </button>
      <div className="relative w-4 h-4">
        <div className="absolute top-0 right-0 transform rotate-45 bg-transparent border border-violet-600 w-4 h-4"></div>
      </div>
    </div>
  );
};






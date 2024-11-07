import React from "react";

const TableOfContents = ({ sections, readStatus, toggleReadStatus, scrollToSection }) => {
  return (
    <aside className="w-1/4 p-4 border-l border-gray-600 sticky top-20 h-screen hidden lg:block">
      <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2 text-gray-300">
        {sections.map((section, index) => (
          <li key={index} className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection(index)}
              className="hover:text-white transition-colors duration-200"
            >
              {section.title}
            </button>

            <input
              type="checkbox"
              checked={readStatus[index]}
              onChange={() => toggleReadStatus(index)}
              className="cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;


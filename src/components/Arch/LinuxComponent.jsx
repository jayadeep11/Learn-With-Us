import React, { useRef, useState, useEffect } from "react";
import { linuxSections } from "./content"; 
import TableOfContents from "./TableOfContents"; 
import ContentSections from "./ContentSections"; 

const LinuxComponent = () => {

  const [readStatus, setReadStatus] = useState(
    JSON.parse(localStorage.getItem("readStatus")) || Array(linuxSections.length).fill(false)
  );

  const sectionRefs = linuxSections.map(() => useRef(null));

  const scrollToSection = (index) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleReadStatus = (index) => {
    const updatedStatus = [...readStatus];
    updatedStatus[index] = !updatedStatus[index];
    setReadStatus(updatedStatus);
    localStorage.setItem("readStatus", JSON.stringify(updatedStatus));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-white">
      <ContentSections sections={linuxSections} sectionRefs={sectionRefs} />

      <TableOfContents
        sections={linuxSections}
        readStatus={readStatus}
        toggleReadStatus={toggleReadStatus}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default LinuxComponent;


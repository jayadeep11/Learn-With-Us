import React from 'react';

const ContentSections = ({ sections, sectionRefs }) => {
  return (
    <main className="lg:w-3/4 w-full p-8 space-y-10 overflow-y-auto">
      {sections.map((section, index) => (
        <section key={index} ref={sectionRefs[index]} className="space-y-4 p-32">
          <h1 className="text-5xl arch font-bold">{section.title}</h1>
          <div className="text-xl">{section.content}</div> 
        </section>
      ))}
    </main>
  );
};

export default ContentSections;


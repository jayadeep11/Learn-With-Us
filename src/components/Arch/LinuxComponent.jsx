import React, { useRef, useState, useEffect } from "react";
import { linuxSections } from "./content";
import TableOfContents from "./TableOfContents";
import ContentSections from "./ContentSections";
import { db } from "../auth/firebaseConfig";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const LinuxComponent = () => {
  // Ensure readStatusA has a default value that is never undefined
  const [readStatusA, setReadStatusA] = useState(
    Array(linuxSections.length).fill(false)
  );

  const auth = getAuth();
  const [user, setUser] = useState(null);

  // Fetch user progress on login
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        loadProgress(currentUser.uid);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Load user progress from Firestore
  const loadProgress = async (userid) => {
    try {
      const userProgressRef = doc(db, "progress", userid);
      const progressDoc = await getDoc(userProgressRef);
      if (progressDoc.exists()) {
        const progress = progressDoc.data();
        setReadStatusA(progress.linux || Array(linuxSections.length).fill(false));
      } else {
        console.log("No progress found for this user, initializing...");
      }
    } catch (error) {
      console.error("Error loading progress:", error);
    }
  };

  // Save user progress to Firestore
  const saveProgress = async (userId, updatedStatus) => {
    try {
      const userProgressRef = doc(db, "progress", userId);
      await setDoc(userProgressRef, { linux: updatedStatus }, { merge: true });
      console.log("Progress saved successfully!");
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  // Section refs for scrolling
  const sectionRefs = linuxSections.map(() => useRef(null));

  // Scroll to a section
  const scrollToSection = (index) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  // Toggle read status and save progress
  const toggleReadStatus = (index) => {
    const updatedStatus = [...readStatusA];
    updatedStatus[index] = !updatedStatus[index];
    setReadStatusA(updatedStatus);

    if (user) {
      saveProgress(user.uid, updatedStatus);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-white">
      <ContentSections sections={linuxSections} sectionRefs={sectionRefs} />
      <TableOfContents
        sections={linuxSections}
        readStatusA={readStatus || Array(linuxSections.length).fill(false)}
        toggleReadStatus={toggleReadStatus}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default LinuxComponent;


import React, { useRef, useState, useEffect } from "react";
import { linuxSections } from "./content";
import TableOfContents from "./TableOfContents";
import ContentSections from "./ContentSections";
import { db } from "../auth/firebaseConfig";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore"; // Import missing Firestore functions

const LinuxComponent = () => {
  const [readStatus, setReadStatus] = useState(
    Array(linuxSections.length).fill(false) // Start with default false status
  );

  const auth = getAuth();
  const [user, setUser] = useState(null);

  // Fetch user progress on login
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        loadProgress(currentUser.uid);  // Load progress from Firestore on login
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);

  const loadProgress = async (userid) => {
    try {
      const userProgressRef = doc(db, "progress", userid);
      const progressDoc = await getDoc(userProgressRef);
      if (progressDoc.exists()) {
        const progress = progressDoc.data();
        setReadStatus(progress.linux || Array(linuxSections.length).fill(false));  // Default if not found
      }
    } catch (error) {
      console.error("Error loading progress:", error);
    }
  };

  const saveProgress = async (userId, updatedStatus) => {
    try {
      const userProgressRef = doc(db, "progress", userId);
      await setDoc(userProgressRef, { linux: updatedStatus }, { merge: true });
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  const sectionRefs = linuxSections.map(() => useRef(null));

  const scrollToSection = (index) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleReadStatus = (index) => {
    const updatedStatus = [...readStatus];
    updatedStatus[index] = !updatedStatus[index];
    setReadStatus(updatedStatus);

    if (user) {
      saveProgress(user.uid, updatedStatus);  // Save to Firebase
    }
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


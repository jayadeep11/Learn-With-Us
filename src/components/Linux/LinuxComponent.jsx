import React, { useRef, useState, useEffect } from "react";
import { linuxSections } from "./content";
import TableOfContents from "./TableOfContents";
import ContentSections from "./ContentSections";
import { db } from "../auth/firebaseConfig";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore"; 

const LinuxComponent = () => {
  const [readStatus, setReadStatus] = useState(
    Array(linuxSections.length).fill(false) // Initialize with all sections marked as unread
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
        setReadStatus(Array(linuxSections.length).fill(false)); // Reset if no user
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);

  // Load user progress from Firestore
  const loadProgress = async (userid) => {
    try {
      const userProgressRef = doc(db, "progress", userid);
      const progressDoc = await getDoc(userProgressRef);
      if (progressDoc.exists()) {
        const progress = progressDoc.data();
        setReadStatus(progress.linux || Array(linuxSections.length).fill(false));  // Default if not found
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

  // Section refs to scroll to specific sections
  const sectionRefs = linuxSections.map(() => useRef(null));

  // Scroll to a specific section
  const scrollToSection = (index) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  // Toggle read status and save progress if user is logged in
  const toggleReadStatus = (index) => {
    const updatedStatus = [...readStatus];
    updatedStatus[index] = !updatedStatus[index];
    setReadStatus(updatedStatus);

    if (user) {
      saveProgress(user.uid, updatedStatus);  // Save to Firebase if the user is logged in
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


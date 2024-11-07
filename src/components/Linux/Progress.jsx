
import { db } from "../auth/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Fetch user progress from Firestore
const loadProgress = async (userid, setReadStatus) => {
  if (!userid) return;

  try {
    const userProgressRef = doc(db, "progress", userid);
    const progressDoc = await getDoc(userProgressRef);

    if (progressDoc.exists()) {
      const progress = progressDoc.data();
      setReadStatus(progress.linux || Array(10).fill(false)); // Default to all sections unread
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


export { loadProgress, saveProgress };

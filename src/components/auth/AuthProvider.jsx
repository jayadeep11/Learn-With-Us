import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();  // Creating a context to store user info
const provider = new GoogleAuthProvider();  // Creating a provider for Google

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Store user info here

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));  // Track if user is logged in or out
  }, []);

  const login = () => signInWithPopup(auth, provider); // Log in with Google
  const logout = () => signOut(auth);                  // Log out

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} 
    </AuthContext.Provider>
  );
};

// Custom hook to access the Auth Context data (user, login, logout)
export const useAuth = () => useContext(AuthContext);

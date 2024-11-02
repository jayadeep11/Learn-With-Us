import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";

const Login = () => {
    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("User Info:", result.user); // Access user info here
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("User signed out.");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div>
            <button className="bg-white" onClick={handleSignIn}>
                Sign in with Google
            </button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Login;

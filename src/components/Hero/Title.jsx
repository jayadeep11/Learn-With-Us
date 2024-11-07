import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Title = () => {
  const [userName, setUserName] = useState("Nerds");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const firstName = user.displayName.split(" ")[0]; 
        setUserName(firstName);
      } else {
        setUserName("Nerds");
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <h1 className="arch text-center text-7xl md:text-7xl lg:text-[11rem] bg-gradient-to-b from-white to-black bg-clip-text text-transparent transition-all duration-300 ease-in-out">
        Hello, {userName}!
      </h1>
      <p className="mt-5 text-xl md:text-3xl lg:text-3xl text-[#D4EDE4]">
        Welcome
      </p>
    </div>
  );
};

export default Title;


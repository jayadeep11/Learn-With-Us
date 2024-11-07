import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Hero() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-0 bg-black">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h1 className="arch text-7xl md:text-7xl lg:text-[13rem] bg-gradient-to-b from-white to-black bg-clip-text text-transparent transition-all duration-300 ease-in-out">
            {user?.displayName || "Linux"}
          </h1>
          {user && (
            <div className="mt-6 flex flex-col items-center">
              <img
                src={user.photoURL}
                alt="User profile"
                className="w-24 h-24 rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


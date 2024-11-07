import React, { useState, useEffect } from 'react';
import NavItem from './NavItem'; // Assumes NavItem is a component that renders each navigation link
import { auth } from '../auth/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error logging in:', error.code, error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error.code, error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  const handleScroll = () => {
    if (window.scrollY > scrollY) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const items = [
    { name: 'Home', path: '/' },
    { name: 'Linux', path: '/linux' },
    { name: 'Arch', path: '/arch' },
    { name: 'Neovim', path: '/neovim' },
  ];

  return (
    <nav
      className={`border-zinc-900 border-b text-gray-300 p-4 sm:px-10 md:px-24 lg:px-52 shadow-lg flex justify-around items-center transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } fixed left-0 top-0 w-full z-10`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <h1 className="text-3xl font-bold">Learn With Us</h1>
      </div>

      {/* Navigation Links & Profile on Right */}
      <div className="flex items-center gap-6 ml-auto"> {/* Adjusted to right-align */}
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6">
          {items.map((item, index) => (
            <NavItem key={index} name={item.name} path={item.path} />
          ))}
        </div>

        {/* Profile Section */}
        <div className="relative">
          {user ? (
            <div>
              <img
                src={user?.photoURL || 'https://via.placeholder.com/150'} // Safe access using optional chaining
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={toggleDropdown} // Toggle dropdown on click
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg">
                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false); // Close dropdown on logout
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false); // Close dropdown on logout
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={handleLogin} className="text-sm text-blue-500">
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={toggleMobileMenu}>
        ☰
      </button>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-zinc-800 md:hidden">
          {items.map((item, index) => (
            <NavItem key={index} name={item.name} path={item.path} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


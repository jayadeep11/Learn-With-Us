import React, { useState, useEffect } from 'react';
import NavItem from './NavItem'; // NavItem now only accepts name and path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
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
    { name: 'Arch', path: '/arch' },
    { name: 'Neovim', path: '/neovim' },
    { name: 'GitHub', path: 'https://github.com/jayadeep11/learn-with-us' },
  ];

  return (
    <nav className={`border-zinc-900 border-b text-gray-300 p-4 px-5 shadow-lg flex justify-around items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} fixed left-0 top-0 w-full z-10`}>
      <div className="text-2xl w-52 font-bold arch">
        <h1 className="text-3xl font-bold ">Learn With Us</h1>
      </div>
      <div className="hidden md:flex gap-6">
        {items.map((item, index) => (
          <NavItem key={index} name={item.name} path={item.path} />
        ))}
      </div>
      <button className="md:hidden text-3xl" onClick={toggleMobileMenu}>
        ☰
      </button>
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


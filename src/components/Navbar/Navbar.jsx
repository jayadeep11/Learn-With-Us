import React, { useState, useEffect } from 'react';
import { LuInfinity } from 'react-icons/lu';
import { FaNoteSticky } from 'react-icons/fa6';
import { GrArchlinux } from 'react-icons/gr';
import { SiNeovim } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import NavItem from './NavItem';
import logo from "../../assets/LoopLogo.png"

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
    { icon: <LuInfinity />, name: 'Home', path: '/' },
    { icon: <GrArchlinux />, name: 'Arch', path: '/arch' },
    { icon: <SiNeovim />, name: 'Neovim', path: '/neovim' },
    { icon: <FaNoteSticky />, name: 'Problems', path: '/problems' },
    { icon: <AiOutlineGithub />, name: 'GitHub', path: 'https://github.com' },
  ];

  return (
    <nav className={`border-zinc-900 border-b text-gray-300 p-4 px-5  shadow-lg flex justify-between items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} fixed left-0 top-0 w-full z-10`}>
      <div className="text-2xl  w-52 font-bold arch">
        <h1>Learn With Us</h1>
    </div>
      <div className="hidden md:flex gap-6">
        {items.map((item, index) => (
          <NavItem key={index} icon={item.icon} name={item.name} path={item.path} />
        ))}
      </div>
      <button className="md:hidden text-3xl" onClick={toggleMobileMenu}>
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-zinc-800 md:hidden">
          {items.map((item, index) => (
            <NavItem key={index} icon={item.icon} name={item.name} path={item.path} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


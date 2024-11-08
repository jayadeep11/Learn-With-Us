
import React from 'react';
import { FaGithub, FaDiscord, FaTwitter, FaGamepad } from 'react-icons/fa';
import logo from "../../assets/LoopLogo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-0 mt-52 w-full">
      <div className="max-w-auto mx-auto flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 px-6 md:px-12">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-6">
            {/* Replace with your logo */}
            <span className="text-lg font-semibold arch">Learn with us</span>
          </div>
          <div className="flex space-x-6 text-2xl text-neutral-400 ">
            <a className='hover:text-white' href='https://github.com/jayadeep11/Learn-with-us'><FaGithub /></a>
            <FaGamepad />
            <FaDiscord />
            <FaTwitter />
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2   md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-sm text-neutral-100  font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white">Arch Linux</a></li>
              <li><a href="#" className="hover:text-white">Neovim</a></li>
              <li><a href="#" className="hover:text-white">Draw</a></li>
              <li><a href="#" className="hover:text-white">Problems</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white">API Docs</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Release Notes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contribute</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">Open Issues</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-around items-center px-6 md:px-12">
        <p className="text-sm text-neutral-300">Learn@2024 </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './footer/Footer';
import { AuthProvider } from './auth/AuthProvider'; // Import AuthProvider
import CatButton from './Cat/CatButton'; // Import CatButton

const Layout = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-black">
        {/* Top Bar */}
        <div className="w-full fixed top-0 left-0 z-10 p-10 bg-transparent">
          <Navbar />
        </div>
        {/* Main content area */}
        <div className="flex-grow mt-16 p-4 text-gray-300">
          <Outlet /> {/* Renders the route’s component */}
          <Footer />
        </div>
        {/* Cat Button */}
        <CatButton />
      </div>
    </AuthProvider>
  );
};

export default Layout;


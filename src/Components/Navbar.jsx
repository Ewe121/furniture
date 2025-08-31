import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-5 sm:px-8 lg:px-[100px] py-4 mx-auto">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left Links */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-800 font-medium hover:text-indigo-600">Cards</a>
            <a href="#" className="text-gray-800 font-medium hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-800 font-medium hover:text-indigo-600">App</a>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <img src={logo} alt="Halal_Lab" className="w-6 h-6 mr-2" />
            <span className="text-gray-800 font-bold">Halal_Lab</span>
          </div>

          {/* Right CTA */}
          <div>
            <button className="bg-[#ED653B] text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
              <span>Check delivery area</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Halal_Lab" className="w-6 h-6 mr-2" />
            <span className="text-gray-800 font-bold">Halal_Lab</span>
          </div>
          
          {/* Search Button (simpler for mobile) */}
          <button className="bg-[#ED653B] text-white p-2 rounded-md flex items-center">
            <img src={searchIcon} alt="Search" className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-gray-50 rounded-md p-4 shadow">
            <a href="#" className="block text-gray-800 font-medium hover:text-indigo-600">Cards</a>
            <a href="#" className="block text-gray-800 font-medium hover:text-indigo-600">About</a>
            <a href="#" className="block text-gray-800 font-medium hover:text-indigo-600">App</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

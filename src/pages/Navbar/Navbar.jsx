import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);  // For the mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle menu for mobile view
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-center -mt-10 items-center">
        
        {/* Navlist for Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-500 font-bold">Essentials</Link>
          </li>
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-500 font-bold">Spices</Link>
          </li>
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-500 font-bold">Ready Meals</Link>
          </li>
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-500 font-bold">Rice & Flour</Link>
          </li>
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-500 font-bold">Halal Meat & Dairy</Link>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex justify-center w-full">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide-in when open */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 pt-8">
          <li className="text-white text-xl font-bold">
            <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Essentials</Link>
          </li>
          <li className="text-white text-xl font-bold">
            <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Spices</Link>
          </li>
          <li className="text-white text-xl font-bold">
            <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Ready Meals</Link>
          </li>
          <li className="text-white text-xl font-bold">
            <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Rice & Flour</Link>
          </li>
          <li className="text-white text-xl font-bold">
            <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Halal Meat & Dairy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

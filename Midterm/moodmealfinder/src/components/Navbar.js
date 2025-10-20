import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const baseClass = 'text-white hover:text-orange-100 transition-colors';
  const activeClass = 'text-white border-b-4 border-white font-bold pb-1';

  return (
    <nav className="bg-orange-400 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Mood Meal Finder</h1>
            <p className="text-sm text-white opacity-90">Find meals based on your mood</p>
          </div>
          
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({isActive}) => isActive ? activeClass : baseClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => isActive ? activeClass : baseClass}
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
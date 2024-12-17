import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuBriefcase } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const navItems = [
    { to: '/', text: 'Home', Icon: FiHome },
    { to: '/about', text: 'About', Icon: IoIosInformationCircleOutline },
    { to: '/portfolio', text: 'Portfolio', Icon: LuBriefcase },
    { to: '/contact', text: 'Contact', Icon: FiPhone },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            {navItems.map(({ to, text, Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200
                  ${isActive ? 'text-blue-600 font-semibold' : ''}`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{text}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
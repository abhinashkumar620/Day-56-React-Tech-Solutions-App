import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaToggleOn, FaToggleOff } from "react-icons/fa"; // Toggle icons
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import logo from "../assets/finl.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-dark  text-white font-poppins  p-4 shadow-xl  uppercase sticky z-50 top-0 left-0">
      <div className="flex justify-between items-center w-[90%] m-auto">
        {/* Logo */}
        <div className="w-[160px]">
          <Link to="/">
            <img src={logo} alt="CloudYatra Logo" className="w-full" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-sm font-medium items-center space-x-4">
          <Link
            to="/"
            className="hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <span
              className="cursor-pointer flex items-center hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              Solutions
              <span
                className={`ml-1 transform transition-transform duration-300 ${showDropdown ? "rotate-180" : "rotate-0"
                  }`}
              >
                ▼
              </span>
            </span>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 z-50">
                <DropdownMenu onItemClick={() => setShowDropdown(false)} />
              </div>
            )}
          </div>

          <Link
            to="/tech-studio"
            className="hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Tech Studio
          </Link>
          <Link
            to="/contect"
            className="hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Contact
          </Link>
          <Link
            to="/resource"
            className="hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Resource
          </Link>

        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center space-x-4">

          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu toggle={() => setMobileOpen(false)} />}
    </nav>
  );
};

export default Navbar;

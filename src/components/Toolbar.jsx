import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaHome,
  FaSearch,
  FaUser,
  FaCog,
  FaBell,
  FaEnvelope,
} from "react-icons/fa";

const ResponsiveToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toolbarItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaSearch />, label: "Search" },
    { icon: <FaUser />, label: "Profile" },
    { icon: <FaCog />, label: "Settings" },
    { icon: <FaBell />, label: "Notifications" },
    { icon: <FaEnvelope />, label: "Messages" },
  ];

  return (
    <div className="bg-white shadow-md">
      {isMobile ? (
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="p-4 w-full flex items-center justify-between text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle toolbar menu"
          >
            <span className="text-lg font-semibold">Toolbar</span>
            <FaBars className="text-xl" />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md z-10 transition-all duration-300 ease-in-out">
              {toolbarItems.map((item, index) => (
                <button
                  key={index}
                  className="p-4 w-full flex items-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={item.label}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-between items-center px-6 py-3">
          <span className="text-lg font-semibold text-gray-700">Toolbar</span>
          <div className="flex space-x-4">
            {toolbarItems.map((item, index) => (
              <button
                key={index}
                className="p-2 text-gray-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full transition-colors duration-200"
                aria-label={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveToolbar;


// 2 codigo

import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiSearch, FiSettings, FiUser, FiHelpCircle } from "react-icons/fi";

const FeatureRichToolbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [theme, setTheme] = useState("light");

  const toolbarItems = [
    { icon: <FiHome />, label: "Home" },
    { icon: <FiSearch />, label: "Search" },
    { icon: <FiSettings />, label: "Settings" },
    { icon: <FiUser />, label: "Profile" },
    { icon: <FiHelpCircle />, label: "Help" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`w-full ${isSticky ? "fixed top-0 left-0" : ""} ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-md transition-all duration-300 ease-in-out z-50`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {toolbarItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                } transition duration-150 ease-in-out`}
                aria-label={item.label}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDropdown}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                theme === "dark"
                  ? "hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  : "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              }`}
              aria-expanded={isDropdownOpen}
              aria-label="Toggle mobile menu"
            >
              {isDropdownOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full ${
              theme === "dark"
                ? "bg-gray-600 hover:bg-gray-500"
                : "bg-gray-200 hover:bg-gray-300"
            } transition duration-150 ease-in-out`}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } md:hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {toolbarItems.map((item, index) => (
              <button
                key={index}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  theme === "dark"
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                } transition duration-150 ease-in-out`}
                aria-label={item.label}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FeatureRichToolbar;

// 3 codigo

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaSearch, FaBell, FaUser, FaCog } from "react-icons/fa";

const ResponsiveToolbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAction = (action) => {
    // Simulating an action with potential error
    const success = Math.random() > 0.2;
    if (success) {
      setError("");
      console.log(`Action ${action} executed successfully`);
    } else {
      setError(`Failed to execute ${action}. Please try again.`);
    }
  };

  const toolbarItems = [
    { icon: <FaHome />, label: "Home", action: "home" },
    { icon: <FaSearch />, label: "Search", action: "search" },
    { icon: <FaBell />, label: "Notifications", action: "notifications" },
    { icon: <FaUser />, label: "Profile", action: "profile" },
    { icon: <FaCog />, label: "Settings", action: "settings" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4" role="navigation" aria-label="Main toolbar">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          ) : (
            <div className="flex space-x-4">
              {toolbarItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(item.action)}
                  className="flex items-center space-x-1 hover:bg-gray-700 px-3 py-2 rounded transition duration-300"
                  aria-label={item.label}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        {isMobile && (
          <div
            id="mobile-menu"
            className={`mt-4 ${isMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
          >
            {toolbarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleAction(item.action)}
                className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-300"
                aria-label={item.label}
              >
                <span className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              </button>
            ))}
          </div>
        )}
        {error && (
          <div className="mt-4 bg-red-500 text-white p-2 rounded" role="alert">
            {error}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ResponsiveToolbar;

import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaEnvelope,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    { name: "Home", icon: FaHome, subSections: ["Dashboard", "Analytics"] },
    { name: "About", icon: FaInfoCircle, subSections: ["Company", "Team"] },
    {
      name: "Services",
      icon: FaCog,
      subSections: ["Web Design", "Development", "Marketing"],
    },
    {
      name: "Contact",
      icon: FaEnvelope,
      subSections: ["Email", "Phone", "Location"],
    },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSection = (sectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-blue-500 to-purple-600 text-white transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      } overflow-hidden shadow-lg`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && (
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white bg-opacity-20 rounded-md py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Search"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white opacity-70" />
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-1"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <FaBars />
        </button>
      </div>
      <nav className="mt-4">
        {sections.map((section) => (
          <div key={section.name} className="mb-2">
            <button
              onClick={() => {
                setActiveSection(section.name);
                toggleSection(section.name);
              }}
              className={`w-full flex items-center justify-between p-3 hover:bg-white hover:bg-opacity-10 transition-colors duration-200 ${
                activeSection === section.name ? "bg-white bg-opacity-20" : ""
              }`}
              aria-expanded={expandedSection === section.name}
              aria-controls={`${section.name}-submenu`}
            >
              <div className="flex items-center">
                <section.icon className="mr-3" />
                {isOpen && <span>{section.name}</span>}
              </div>
              {isOpen &&
                (expandedSection === section.name ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                ))}
            </button>
            {isOpen && expandedSection === section.name && (
              <div
                id={`${section.name}-submenu`}
                className="ml-6 mt-1 space-y-1 animate-fadeIn"
              >
                {section.subSections.map((subSection) => (
                  <a
                    key={subSection}
                    href={`#${subSection.toLowerCase().replace(" ", "-")}`}
                    className="block py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200"
                  >
                    {subSection}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;


// 2 codigo

import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaCog, FaEnvelope, FaSearch, FaChevronDown, FaChevronUp, FaArrowUp } from "react-icons/fa";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [expandedSections, setExpandedSections] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      name: "Home",
      icon: <FaHome />,
      subItems: ["Dashboard", "Analytics", "Reports"]
    },
    {
      name: "About",
      icon: <FaInfoCircle />,
      subItems: ["Company", "Team", "History"]
    },
    {
      name: "Services",
      icon: <FaCog />,
      subItems: ["Web Development", "Mobile Apps", "Consulting"]
    },
    {
      name: "Contact",
      icon: <FaEnvelope />,
      subItems: ["Email", "Phone", "Location"]
    }
  ];

  const toggleSection = (sectionName) => {
    setExpandedSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((name) => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto transition-all duration-300 ease-in-out">
      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        {sections.map((section) => (
          <div key={section.name} className="mb-2">
            <button
              onClick={() => toggleSection(section.name)}
              className={`flex items-center justify-between w-full py-2 px-3 rounded-md transition-colors duration-200 ${
                activeSection === section.name
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
              aria-expanded={expandedSections.includes(section.name)}
            >
              <span className="flex items-center">
                {section.icon}
                <span className="ml-2">{section.name}</span>
              </span>
              {expandedSections.includes(section.name) ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>
            {expandedSections.includes(section.name) && (
              <ul className="ml-6 mt-1 space-y-1">
                {section.subItems.map((subItem) => (
                  <li key={subItem}>
                    <a
                      href="#"
                      className="block py-1 px-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                    >
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </nav>
  );
};

export default Sidebar;

// 3 codigo

import React, { useState } from "react";
import { FiSun, FiMoon, FiUser, FiSettings, FiBell, FiMessageSquare, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { icon: FiUser, label: "Dashboard", tooltip: "View your dashboard", notifications: 0 },
    { icon: FiSettings, label: "Settings", tooltip: "Manage your account settings", notifications: 0 },
    { icon: FiBell, label: "Notifications", tooltip: "Check your notifications", notifications: 3 },
    { icon: FiMessageSquare, label: "Messages", tooltip: "View your messages", notifications: 5 },
    { icon: FiLogOut, label: "Logout", tooltip: "Sign out of your account", notifications: 0 },
  ];

  return (
    <div
      className={`h-screen transition-all duration-300 ease-in-out ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } ${isOpen ? "w-64" : "w-20"}`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            ☰
          </button>
          <button
            onClick={toggleTheme}
            className="text-2xl focus:outline-none"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <div className="flex flex-col items-center p-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="User profile"
            className="w-20 h-20 rounded-full mb-2"
          />
          {isOpen && (
            <div className="text-center">
              <h2 className="font-bold text-lg">Jane Doe</h2>
              <p className="text-sm">Web Developer</p>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-lg ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-colors duration-200 group relative`}
                >
                  <item.icon className="text-xl" />
                  {isOpen && (
                    <span className="ml-3">{item.label}</span>
                  )}
                  {item.notifications > 0 && (
                    <span
                      className="absolute right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      aria-label={`${item.notifications} unread notifications`}
                    >
                      {item.notifications}
                    </span>
                  )}
                  <span
                    className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ pointerEvents: "none" }}
                  >
                    {item.tooltip}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

// 4 codigo

import React, { useState } from "react";
import { FiHome, FiSettings, FiBell, FiMessageSquare, FiLogOut, FiMoon, FiSun } from "react-icons/fi";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const user = {
    name: "John Doe",
    bio: "Passionate developer & tech enthusiast",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };

  const navItems = [
    { name: "Dashboard", icon: FiHome, notifications: 0 },
    { name: "Settings", icon: FiSettings, notifications: 0 },
    { name: "Notifications", icon: FiBell, notifications: 3 },
    { name: "Messages", icon: FiMessageSquare, notifications: 5 },
    { name: "Logout", icon: FiLogOut, notifications: 0 }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`h-screen w-64 flex flex-col justify-between p-4 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div>
        <div className="flex items-center space-x-4 mb-6">
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.bio}</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveSection(item.name)}
                  className={`w-full flex items-center justify-between p-2 rounded-md transition-colors duration-200 ${activeSection === item.name ? (darkMode ? "bg-gray-700" : "bg-gray-200") : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                  aria-label={item.name}
                  title={item.name}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-3" />
                    <span>{item.name}</span>
                  </div>
                  {item.notifications > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.notifications}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <span className="text-sm">{darkMode ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </div>
  );
};

export default Sidebar;
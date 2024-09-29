import React, { useState } from "react";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiBarChart2,
  FiCalendar,
  FiMessageSquare,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ActionPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const performanceData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-indigo-700 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul>
            <SidebarItem icon={<FiHome />} text="Dashboard" />
            <SidebarItem icon={<FiUser />} text="Profile" />
            <SidebarItem icon={<FiSettings />} text="Settings" />
            <SidebarItem icon={<FiBarChart2 />} text="Analytics" />
            <SidebarItem icon={<FiCalendar />} text="Calendar" />
            <SidebarItem icon={<FiMessageSquare />} text="Messages" />
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2ODM2Mzg5NDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              alt="Company Logo"
              className="h-8 w-auto mr-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">Action Panel</h1>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">John Doe</span>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODM2Mzg5NDc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              alt="User Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Recent Activities
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">
                    Updated project timeline
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Completed task #1234</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">New comment on project</span>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200">
                  Create Task
                </button>
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors duration-200">
                  Start Timer
                </button>
                <button className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition-colors duration-200">
                  Schedule Meeting
                </button>
                <button className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors duration-200">
                  Generate Report
                </button>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-full lg:col-span-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Performance Metrics
              </h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* User Tasks */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                User Tasks
              </h2>
              <div className="space-y-4">
                <Task title="Design new landing page" progress={75} />
                <Task title="Implement user authentication" progress={30} />
                <Task title="Write API documentation" progress={90} />
                <Task title="Optimize database queries" progress={50} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <li className="mb-4">
    <a
      href="#"
      className="flex items-center p-2 rounded hover:bg-indigo-600 transition-colors duration-200"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  </li>
);

const Task = ({ title, progress }) => (
  <div className="bg-gray-100 p-4 rounded">
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium text-gray-700">{title}</span>
      <span className="text-sm text-gray-500">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

export default ActionPanel;


// 2 codigo

import React, { useState } from "react";
import { FiHome, FiSettings, FiUsers, FiBarChart2, FiCalendar, FiCheckSquare } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ActionPanel = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales",
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-indigo-800 text-white transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {sidebarCollapsed ? "≡" : "×"}
          </button>
        </div>
        <nav className="mt-8">
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-300 hover:bg-indigo-700"
          >
            <FiHome className="mr-3" />
            {!sidebarCollapsed && <span>Dashboard</span>}
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-300 hover:bg-indigo-700"
          >
            <FiUsers className="mr-3" />
            {!sidebarCollapsed && <span>Users</span>}
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-300 hover:bg-indigo-700"
          >
            <FiBarChart2 className="mr-3" />
            {!sidebarCollapsed && <span>Analytics</span>}
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-300 hover:bg-indigo-700"
          >
            <FiCalendar className="mr-3" />
            {!sidebarCollapsed && <span>Projects</span>}
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-300 hover:bg-indigo-700"
          >
            <FiSettings className="mr-3" />
            {!sidebarCollapsed && <span>Settings</span>}
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="h-8 w-auto mr-4"
                src="https://images.unsplash.com/photo-1636213668465-dd5e87ac4982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Company logo"
              />
              <h1 className="text-2xl font-semibold text-gray-900">Action Panel</h1>
            </div>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
                alt="User avatar"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Recent Activities */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activities</h3>
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FiCheckSquare className="h-6 w-6 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Task completed</p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FiUsers className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">New team member added</p>
                        <p className="text-sm text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
                  <div className="mt-5 space-y-4">
                    <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Create New Task
                    </button>
                    <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>

              {/* Detailed Analytics */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Detailed Analytics</h3>
                  <div className="mt-5">
                    <Line data={chartData} options={chartOptions} />
                  </div>
                </div>
              </div>

              {/* User Tasks */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">User Tasks</h3>
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="task1"
                          name="task1"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="task1" className="ml-3 block text-sm font-medium text-gray-700">
                          Complete project proposal
                        </label>
                      </div>
                      <span className="text-sm text-gray-500">Due today</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="task2"
                          name="task2"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="task2" className="ml-3 block text-sm font-medium text-gray-700">
                          Review client feedback
                        </label>
                      </div>
                      <span className="text-sm text-gray-500">Due tomorrow</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Timelines */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Project Timelines</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Website Redesign</span>
                        <span className="text-sm text-gray-500">75%</span>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                        <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Mobile App Development</span>
                        <span className="text-sm text-gray-500">45%</span>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                        <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Performance Metrics</h3>
                  <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
                    <div className="text-center">
                      <span className="text-3xl font-semibold text-indigo-600">98%</span>
                      <p className="mt-1 text-sm text-gray-500">Customer Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-semibold text-indigo-600">12</span>
                      <p className="mt-1 text-sm text-gray-500">New Clients</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-semibold text-indigo-600">$1.2M</span>
                      <p className="mt-1 text-sm text-gray-500">Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActionPanel;


// 3 codigo

  import React, { useState } from "react";
import { FaHome, FaChartBar, FaTasks, FaUserCircle, FaCog, FaBell, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ActionPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", id: "dashboard" },
    { icon: <FaChartBar />, label: "Analytics", id: "analytics" },
    { icon: <FaTasks />, label: "Tasks", id: "tasks" },
    { icon: <FaUserCircle />, label: "Profile", id: "profile" },
    { icon: <FaCog />, label: "Settings", id: "settings" },
  ];

  const recentActivities = [
    { id: 1, text: "Updated project timeline", time: "2 hours ago" },
    { id: 2, text: "Completed task: Design review", time: "4 hours ago" },
    { id: 3, text: "Added new team member", time: "Yesterday" },
  ];

  const quickActions = [
    { id: 1, text: "Create New Task", icon: <FaTasks /> },
    { id: 2, text: "Schedule Meeting", icon: <FaUserCircle /> },
    { id: 3, text: "Generate Report", icon: <FaChartBar /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        className={`bg-indigo-700 text-white w-64 min-h-screen p-4 ${isMenuOpen ? "block" : "hidden"} md:block`}
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex items-center justify-between mb-6">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?fit=crop&w=100&h=50" alt="Company Logo" className="h-8" />
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <motion.li
                key={item.id}
                className={`mb-4 ${activeSection === item.id ? "bg-indigo-800" : ""}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  aria-label={item.label}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={toggleMenu} className="md:hidden mr-4 text-gray-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-semibold text-gray-800">Action Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Search">
                <FaSearch />
              </button>
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Notifications">
                <FaBell />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none" aria-label="User menu">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden md:inline-block text-sm font-medium text-gray-700">John Doe</span>
                </button>
                {/* Dropdown menu for user profile */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 hidden">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="flex justify-between items-center">
                    <span className="text-gray-700">{activity.text}</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    className="flex items-center justify-center p-4 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition duration-300"
                  >
                    {action.icon}
                    <span className="ml-2">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Users</span>
                  <span className="font-semibold">10,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Revenue</span>
                  <span className="font-semibold">$54,321</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Active Projects</span>
                  <span className="font-semibold">23</span>
                </div>
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                  <span className="ml-3 text-gray-700">Complete project proposal</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                  <span className="ml-3 text-gray-700">Review team performance</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                  <span className="ml-3 text-gray-700">Update client meeting notes</span>
                </li>
              </ul>
            </div>

            {/* Project Timeline */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Project Kickoff</span>
                  <span className="ml-auto text-sm text-gray-500">Completed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Design Phase</span>
                  <span className="ml-auto text-sm text-gray-500">In Progress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-700">Development</span>
                  <span className="ml-auto text-sm text-gray-500">Upcoming</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">Productivity</span>
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActionPanel;


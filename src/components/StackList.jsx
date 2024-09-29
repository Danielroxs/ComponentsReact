import React from "react";
import {
  FaCalendar,
  FaTag,
  FaCheckCircle,
  FaExclamationCircle,
  FaEllipsisH,
} from "react-icons/fa";

const ListItem = ({ title, description, date, category, status }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <div className="flex justify-between items-start mb-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
        aria-label="More options"
      >
        <FaEllipsisH />
      </button>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex items-center text-sm text-gray-500 mb-2 sm:mb-0">
        <FaCalendar className="mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-sm font-medium mb-2 sm:mb-0">
        <FaTag className="mr-2 text-blue-500" />
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="flex items-center text-sm font-medium">
        {status === "completed" ? (
          <>
            <FaCheckCircle className="mr-2 text-green-500" />
            <span className="text-green-800">Completed</span>
          </>
        ) : (
          <>
            <FaExclamationCircle className="mr-2 text-yellow-500" />
            <span className="text-yellow-800">Pending</span>
          </>
        )}
      </div>
    </div>
  </div>
);

const FeatureRichList = () => {
  const listItems = [
    {
      title: "Implement New User Authentication System",
      description:
        "Develop and integrate a robust user authentication system to enhance security and user management capabilities.",
      date: "2023-06-15",
      category: "Development",
      status: "completed",
    },
    {
      title: "Design Marketing Campaign for Q3",
      description:
        "Create a comprehensive marketing strategy for the upcoming quarter, focusing on product launches and brand awareness.",
      date: "2023-07-01",
      category: "Marketing",
      status: "pending",
    },
    {
      title: "Optimize Database Performance",
      description:
        "Analyze and improve database queries and indexing to enhance overall system performance and reduce response times.",
      date: "2023-06-22",
      category: "DevOps",
      status: "completed",
    },
    {
      title: "Conduct User Experience Research",
      description:
        "Gather and analyze user feedback to identify pain points and opportunities for improving the product's usability.",
      date: "2023-07-10",
      category: "UX Research",
      status: "pending",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Project Tasks</h1>
      <div className="space-y-6">
        {listItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureRichList;


// 2 codigo

import React, { useState } from "react";
import { FaCalendarAlt, FaCheckCircle, FaClock, FaEdit, FaFolder, FaTrash } from "react-icons/fa";
import { MdTitle, MdDescription } from "react-icons/md";

const StackedListPage = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      description: "Finalize the project proposal for the upcoming client meeting",
      date: "2023-05-15",
      category: "Work",
      status: "pending"
    },
    {
      id: 2,
      title: "Schedule team meeting",
      description: "Arrange a team meeting to discuss the new product launch",
      date: "2023-05-16",
      category: "Management",
      status: "completed"
    },
    {
      id: 3,
      title: "Review marketing strategy",
      description: "Analyze and update the current marketing strategy for Q3",
      date: "2023-05-17",
      category: "Marketing",
      status: "pending"
    }
  ]);

  const getStatusColor = (status) => {
    return status === "completed" ? "bg-green-500" : "bg-yellow-500";
  };

  const getCategoryColor = (category) => {
    const colors = {
      Work: "bg-blue-500",
      Management: "bg-purple-500",
      Marketing: "bg-pink-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Feature-Rich Stacked List</h1>
        <ul className="space-y-6">
          {listItems.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus-within:ring-2 focus-within:ring-indigo-500"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <MdTitle className="mr-2 text-indigo-600" />
                    {item.title}
                  </h2>
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors duration-300"
                      aria-label="Edit item"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors duration-300"
                      aria-label="Delete item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex items-start">
                  <MdDescription className="mr-2 mt-1 flex-shrink-0 text-indigo-600" />
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <FaCalendarAlt className="mr-2 text-indigo-600" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center mb-2 sm:mb-0">
                    <FaFolder className="mr-2 text-indigo-600" />
                    <span
                      className={`${getCategoryColor(
                        item.category
                      )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {item.status === "completed" ? (
                      <FaCheckCircle className="mr-2 text-green-500" />
                    ) : (
                      <FaClock className="mr-2 text-yellow-500" />
                    )}
                    <span
                      className={`${getStatusColor(
                        item.status
                      )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 px-6 py-4">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Take Action
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StackedListPage;

// 3 codigo

import React from "react";
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";

const StackedListPage = () => {
  const lists = [
    {
      title: "Technology Trends",
      items: [
        {
          id: 1,
          title: "Artificial Intelligence Advancements",
          description: "Exploring the latest breakthroughs in AI and machine learning technologies.",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          icon: <FaTag />,
          category: "AI",
          date: "2023-06-15"
        },
        {
          id: 2,
          title: "Quantum Computing Progress",
          description: "Unveiling recent developments in quantum computing and its potential applications.",
          image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          icon: <FaTag />,
          category: "Computing",
          date: "2023-06-14"
        },
        {
          id: 3,
          title: "Blockchain in Finance",
          description: "Analyzing the impact of blockchain technology on modern financial systems.",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          icon: <FaTag />,
          category: "Blockchain",
          date: "2023-06-13"
        }
      ]
    },
    {
      title: "Environmental Initiatives",
      items: [
        {
          id: 4,
          title: "Renewable Energy Solutions",
          description: "Highlighting innovative approaches to sustainable energy production.",
          image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          icon: <FaTag />,
          category: "Energy",
          date: "2023-06-12"
        },
        {
          id: 5,
          title: "Ocean Cleanup Initiatives",
          description: "Showcasing global efforts to reduce plastic pollution in our oceans.",
          image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          icon: <FaTag />,
          category: "Conservation",
          date: "2023-06-11"
        },
        {
          id: 6,
          title: "Urban Reforestation Projects",
          description: "Examining successful urban forestry programs and their environmental impact.",
          image: "https://images.unsplash.com/photo-1601040204691-8a9df8d96ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          icon: <FaTag />,
          category: "Urban Planning",
          date: "2023-06-10"
        }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Featured Lists</h1>
        {lists.map((list, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">{list.title}</h2>
            <div className="space-y-6">
              {list.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  aria-labelledby={`item-title-${item.id}`}
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:w-48"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
                        {item.category}
                      </div>
                      <h3
                        id={`item-title-${item.id}`}
                        className="text-2xl font-bold text-gray-900 mb-2"
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                      <div className="mt-4 flex items-center text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedListPage;

// 4 codigo

import React, { useState } from "react";
import { FaBook, FaLaptop, FaGraduationCap, FaChartLine, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const StackedListPage = () => {
  const [activeList, setActiveList] = useState(null);

  const lists = [
    {
      id: 1,
      title: "Popular Books",
      description: "Explore our curated collection of bestselling books",
      icon: <FaBook />,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      items: [
        { name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { name: "To Kill a Mockingbird", author: "Harper Lee" },
        { name: "1984", author: "George Orwell" },
      ],
    },
    {
      id: 2,
      title: "Tech Gadgets",
      description: "Discover the latest and most innovative tech gadgets",
      icon: <FaLaptop />,
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      items: [
        { name: "Smart Watch", brand: "Apple" },
        { name: "Wireless Earbuds", brand: "Sony" },
        { name: "Foldable Phone", brand: "Samsung" },
      ],
    },
    {
      id: 3,
      title: "Online Courses",
      description: "Enhance your skills with our selection of online courses",
      icon: <FaGraduationCap />,
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      items: [
        { name: "Web Development Bootcamp", instructor: "Dr. Angela Yu" },
        { name: "Machine Learning A-Z", instructor: "Kirill Eremenko" },
        { name: "Digital Marketing Masterclass", instructor: "Seth Godin" },
      ],
    },
    {
      id: 4,
      title: "Business Trends",
      description: "Stay updated with the latest business trends and insights",
      icon: <FaChartLine />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      items: [
        { name: "AI in Business", category: "Technology" },
        { name: "Sustainable Practices", category: "Environment" },
        { name: "Remote Work Culture", category: "Management" },
      ],
    },
    {
      id: 5,
      title: "Networking Events",
      description: "Connect with professionals at our upcoming networking events",
      icon: <FaUsers />,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      items: [
        { name: "Tech Startup Mixer", date: "June 15, 2023" },
        { name: "Women in Leadership Summit", date: "July 22, 2023" },
        { name: "Green Energy Conference", date: "August 10, 2023" },
      ],
    },
  ];

  const handleListClick = (id) => {
    setActiveList(activeList === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">Stacked List Page</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {lists.map((list) => (
          <motion.div
            key={list.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex items-center p-6 cursor-pointer"
              onClick={() => handleListClick(list.id)}
            >
              <div className="flex-shrink-0 mr-4 text-3xl text-indigo-600">{list.icon}</div>
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800">{list.title}</h2>
                <p className="text-gray-600">{list.description}</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <svg
                  className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${
                    activeList === list.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {activeList === list.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 bg-indigo-50">
                  <img
                    src={list.image}
                    alt={list.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <ul className="space-y-4">
                    {list.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">
                          {Object.values(item).find(
                            (value) => value !== item.name
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StackedListPage;

// 5 codigo

import React from "react";
import { FaCheck, FaInfoCircle, FaExclamationTriangle, FaBell } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const StackedListPage = () => {
  const listItems = [
    {
      id: 1,
      icon: <FaCheck className="text-green-500" />,
      title: "Task Completed",
      description: "Congratulations! You've successfully finished the project ahead of schedule. Your dedication and efficiency have set a new benchmark for the team.",
      buttonText: "View Details",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      icon: <FaInfoCircle className="text-blue-500" />,
      title: "New Feature Update",
      description: "We've just rolled out an exciting new feature that enhances user experience. Explore the latest additions and discover how they can streamline your workflow.",
      buttonText: "Explore Now",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      icon: <FaExclamationTriangle className="text-yellow-500" />,
      title: "System Maintenance",
      description: "Our systems will undergo routine maintenance on Saturday, 10 PM - 2 AM EST. Please save your work and expect brief service interruptions during this period.",
      buttonText: "Learn More",
      bgColor: "bg-yellow-100",
    },
    {
      id: 4,
      icon: <FaBell className="text-purple-500" />,
      title: "Upcoming Event",
      description: "Don't miss our annual conference next month! Join industry experts for insightful talks, networking opportunities, and a glimpse into the future of technology.",
      buttonText: "Register Now",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Feature-Rich Stacked List</h1>
        <div className="space-y-6">
          {listItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-inner">
                      {item.icon}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label={`${item.buttonText} for ${item.title}`}
                  >
                    {item.buttonText}
                  </button>
                  <button
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    aria-label={`More details about ${item.title}`}
                  >
                    <MdArrowForward className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedListPage;

// 6 codigo

import React from "react";
import { FaUser, FaCog, FaEnvelope, FaArrowRight } from "react-icons/fa";

const StackedListPage = () => {
  const listItems = [
    {
      icon: <FaUser className="text-blue-500 text-2xl" />,
      title: "User Profile",
      description: "Manage your personal information and account settings. Keep your profile up-to-date to enhance your experience on our platform.",
      buttonText: "Update Profile"
    },
    {
      icon: <FaCog className="text-green-500 text-2xl" />,
      title: "System Settings",
      description: "Configure system preferences, notifications, and security options. Customize the application to suit your needs and workflow.",
      buttonText: "Adjust Settings"
    },
    {
      icon: <FaEnvelope className="text-purple-500 text-2xl" />,
      title: "Messages",
      description: "Access your inbox, read and send messages to other users. Stay connected and communicate effectively within the platform.",
      buttonText: "View Messages"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Feature-Rich Stacked List</h1>
        <ul className="space-y-4">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label={`${item.buttonText} for ${item.title}`}
                >
                  {item.buttonText}
                  <FaArrowRight className="inline-block ml-2" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StackedListPage;
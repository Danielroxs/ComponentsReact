import React, { useState, useEffect } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2023-05-01",
      category: "Groceries",
      amount: 150.5,
      remarks: "Weekly shopping",
    },
    {
      id: 2,
      date: "2023-05-03",
      category: "Utilities",
      amount: 80.0,
      remarks: "Electricity bill",
    },
    {
      id: 3,
      date: "2023-05-05",
      category: "Entertainment",
      amount: 45.99,
      remarks: "Movie tickets",
    },
    {
      id: 4,
      date: "2023-05-07",
      category: "Dining",
      amount: 65.75,
      remarks: "Dinner with friends",
    },
    {
      id: 5,
      date: "2023-05-10",
      category: "Transportation",
      amount: 30.0,
      remarks: "Fuel",
    },
    {
      id: 6,
      date: "2023-05-12",
      category: "Shopping",
      amount: 120.25,
      remarks: "New clothes",
    },
    {
      id: 7,
      date: "2023-05-15",
      category: "Healthcare",
      amount: 200.0,
      remarks: "Doctor's appointment",
    },
    {
      id: 8,
      date: "2023-05-18",
      category: "Education",
      amount: 50.0,
      remarks: "Online course",
    },
    {
      id: 9,
      date: "2023-05-20",
      category: "Home",
      amount: 75.5,
      remarks: "Home repairs",
    },
    {
      id: 10,
      date: "2023-05-22",
      category: "Gifts",
      amount: 40.0,
      remarks: "Birthday present",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortBy = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setTransactions(sortedTransactions);
  }, [sortConfig]);

  const getSortIcon = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === "ascending" ? (
        <FaSortUp />
      ) : (
        <FaSortDown />
      );
    }
    return <FaSort />;
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {["Date", "Category", "Amount", "Remarks"].map((columnName) => (
              <th
                key={columnName}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => sortBy(columnName.toLowerCase())}
              >
                <div className="flex items-center">
                  {columnName}
                  <span className="ml-2">
                    {getSortIcon(columnName.toLowerCase())}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <tr
              key={transaction.id}
              className="hover:bg-gray-50 focus-within:bg-gray-50 outline-none"
              tabIndex="0"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.remarks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;


// 2 codigo

import React from "react";
import { FaUser, FaEye } from "react-icons/fa";

const EventManagementTable = () => {
  const events = [
    {
      id: 1,
      userName: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Event Organizer",
      poster: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      status: "Active",
    },
    {
      id: 2,
      userName: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Venue Manager",
      poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      status: "Pending",
    },
    {
      id: 3,
      userName: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Catering Coordinator",
      poster: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      status: "Completed",
    },
    {
      id: 4,
      userName: "Emily Brown",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Marketing Manager",
      poster: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      status: "Active",
    },
    {
      id: 5,
      userName: "Alex Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Technical Support",
      poster: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                User
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Event Poster
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Status
              </th>
              <th
                scope="col"
                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
              >
                <span className="sr-only">View Details</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {events.map((event) => (
              <tr
                key={event.id}
                className="transition duration-300 ease-in-out hover:bg-gray-50"
              >
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={event.avatar}
                        alt={event.userName}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {event.userName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {event.role}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="h-16 w-24 overflow-hidden rounded-lg">
                    <img
                      src={event.poster}
                      alt="Event Poster"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                      event.status
                    )}`}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center transition duration-150 ease-in-out"
                    aria-label={`View details for ${event.userName}'s event`}
                  >
                    <FaEye className="mr-1" />
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventManagementTable;


// 3 codigo con search info

import React, { useState, useEffect } from "react";
import { FiSearch, FiEye } from "react-icons/fi";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer", contact: "john@example.com", department: "Engineering" },
    { id: 2, name: "Jane Smith", role: "Product Manager", contact: "jane@example.com", department: "Product" },
    { id: 3, name: "Mike Johnson", role: "UX Designer", contact: "mike@example.com", department: "Design" },
    { id: 4, name: "Sarah Brown", role: "Data Analyst", contact: "sarah@example.com", department: "Analytics" },
    { id: 5, name: "Chris Lee", role: "Marketing Specialist", contact: "chris@example.com", department: "Marketing" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    const results = employees.filter((employee) =>
      Object.values(employee).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredEmployees(results);
  }, [searchTerm, employees]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewProfile = (id) => {
    console.log(`View profile for employee with ID: ${id}`);
    // Implement modal or redirection logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Employee Data</h1>
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" aria-label="Employee ID">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" aria-label="Employee Name">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" aria-label="Employee Role">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" aria-label="Employee Contact">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" aria-label="Employee Department">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" aria-label="View Profile">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleViewProfile(employee.id)}
                      className="text-blue-400 hover:text-blue-300 focus:outline-none focus:text-blue-300 transition duration-300 ease-in-out"
                      aria-label={`View profile of ${employee.name}`}
                    >
                      <FiEye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;


// 4 codigo

import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const ProjectTimelineTable = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const projectData = [
    {
      phase: "Planning",
      startDate: "2023-06-01",
      endDate: "2023-06-15",
      status: "Completed"
    },
    {
      phase: "Development",
      startDate: "2023-06-16",
      endDate: "2023-07-31",
      status: "In Progress"
    },
    {
      phase: "Testing",
      startDate: "2023-08-01",
      endDate: "2023-08-15",
      status: "Pending"
    },
    {
      phase: "Deployment",
      startDate: "2023-08-16",
      endDate: "2023-08-31",
      status: "Pending"
    }
  ];

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = [...projectData].sort((a, b) => {
    if (sortColumn) {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const getSortIcon = (column) => {
    if (sortColumn === column) {
      return sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("phase")}>
                Phase {getSortIcon("phase")}
              </th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("startDate")}>
                Start Date {getSortIcon("startDate")}
              </th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("endDate")}>
                End Date {getSortIcon("endDate")}
              </th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("status")}>
                Status {getSortIcon("status")}
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {sortedData.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.phase}</td>
                <td className="py-3 px-6 text-left">{item.startDate}</td>
                <td className="py-3 px-6 text-left">{item.endDate}</td>
                <td className="py-3 px-6 text-left">
                  <span
                    className={`${item.status === "Completed"
                        ? "bg-green-200 text-green-600"
                        : item.status === "In Progress"
                          ? "bg-yellow-200 text-yellow-600"
                          : "bg-red-200 text-red-600"
                      } py-1 px-3 rounded-full text-xs`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTimelineTable;


import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ question, answer, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className={`flex items-center justify-between w-full p-4 text-left bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
          isOpen ? "shadow-lg" : "shadow"
        }`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? (
          <FaMinus className="text-xl" />
        ) : (
          <FaPlus className="text-xl" />
        )}
      </button>
      {isOpen && (
        <div
          className="p-4 bg-white rounded-b-lg shadow-inner transition-all duration-300"
          role="region"
        >
          <p className="text-gray-700">{answer}</p>
          {subItems && subItems.length > 0 && (
            <div className="mt-4">
              {subItems.map((subItem, index) => (
                <AccordionItem
                  key={index}
                  question={subItem.question}
                  answer={subItem.answer}
                  subItems={subItem.subItems}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const FAQAccordion = ({ faqData }) => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            subItems={item.subItems}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const faqData = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components.",
      subItems: [
        {
          question: "What are React Hooks?",
          answer:
            "React Hooks are functions that let you use state and other React features in functional components.",
        },
        {
          question: "What is JSX?",
          answer:
            "JSX is a syntax extension for JavaScript, recommended for use with React to describe what the UI should look like.",
        },
      ],
    },
    {
      question: "How do I install React?",
      answer:
        "You can create a new React project using Create React App. Run 'npx create-react-app my-app' in your terminal.",
    },
    {
      question: "What is state in React?",
      answer:
        "State is an object that holds data that may change over time and affects the component's rendering.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <FAQAccordion faqData={faqData} />
    </div>
  );
};

export default App;

// codigo



import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer support team to initiate a return.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Additional fees and customs charges may apply.",
      subItems: [
        {
          question: "Which countries do you ship to?",
          answer: "We ship to over 100 countries worldwide. Please check our shipping page for a complete list of destinations.",
        },
        {
          question: "How are customs fees handled?",
          answer: "Customs fees are the responsibility of the recipient. These charges vary by country and are not included in our shipping costs.",
        },
      ],
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay for your convenience.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
    },
  ];

  const renderAccordionItem = (item, index, level = 0) => {
    const isOpen = openItems.includes(index);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
      <div
        key={index}
        className={`mb-4 ${level > 0 ? "ml-6" : ""}`}
        style={{ marginLeft: `${level * 1.5}rem` }}
      >
        <button
          className={`w-full text-left p-4 flex justify-between items-center ${isOpen ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100"} rounded-lg shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => toggleItem(index)}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${index}`}
        >
          <span className="font-semibold">{item.question}</span>
          {isOpen ? (
            <FaChevronUp className="text-xl" />
          ) : (
            <FaChevronDown className="text-xl" />
          )}
        </button>
        {isOpen && (
          <div
            id={`accordion-content-${index}`}
            className="p-4 bg-white rounded-b-lg shadow-inner animate-fadeIn"
          >
            <p className="mb-4">{item.answer}</p>
            {hasSubItems && (
              <div className="mt-4">
                {item.subItems.map((subItem, subIndex) =>
                  renderAccordionItem(subItem, `${index}-${subIndex}`, level + 1)
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => renderAccordionItem(item, index))}
      </div>
    </div>
  );
};

export default FAQAccordion;

// codigo
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-1/2 lg:pr-8">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex items-center justify-between w-full text-left text-gray-800 bg-white rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-purple-500" />
                  ) : (
                    <FaChevronDown className="text-purple-500" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="mt-2 px-4 py-3 bg-white rounded-lg shadow-inner">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Team discussing frequently asked questions"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;


// 2 codigo

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows you to return items within 30 days of purchase for a full refund. Items must be in their original condition with tags attached."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay for your convenience."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToFAQ = (index) => {
    const element = document.getElementById(`faq-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:w-1/2 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              id={`faq-${index}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                onClick={() => {
                  handleToggle(index);
                  scrollToFAQ(index);
                }}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-700">{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-4 pb-4 ${
                  activeIndex === index ? "block" : "hidden"
                } transition-all duration-300 ease-in-out`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 bg-blue-500 flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-md overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Customer support"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x600?text=Image+Not+Available";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6">
            <h2 className="text-white text-2xl font-bold text-center">We're Here to Help</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;

// 3 codigo

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay for secure and convenient transactions."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email to monitor your package's progress."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="md:w-1/2 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-indigo-500" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 py-4 bg-indigo-50 transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 p-8 flex items-center justify-center bg-indigo-600">
        <div className="relative w-full h-full max-w-md">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Customer support team working together"
            className="rounded-lg shadow-2xl object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-50 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-2xl font-bold mb-2">We're Here to Help</h2>
            <p className="text-sm">Our dedicated support team is always ready to assist you with any questions or concerns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;


import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlans = () => {
  const plans = [
    {
      name: "Intro",
      price: "$19",
      description: "Perfect for individuals starting out",
      features: [
        "5GB Storage",
        "Basic Support",
        "2 Integrations",
        "1 User",
        "Email Support",
        "Basic Analytics",
        "Limited API Access",
        "1 Project",
        "Weekly Backups",
        "Community Access",
      ],
    },
    {
      name: "Base",
      price: "$39",
      description: "Great for small teams",
      features: [
        "20GB Storage",
        "Priority Support",
        "5 Integrations",
        "5 Users",
        "24/7 Email & Chat Support",
        "Advanced Analytics",
        "Full API Access",
        "5 Projects",
        "Daily Backups",
        "Team Collaboration Tools",
      ],
    },
    {
      name: "Popular",
      price: "$79",
      description: "Best value for growing businesses",
      features: [
        "100GB Storage",
        "Premium Support",
        "Unlimited Integrations",
        "20 Users",
        "24/7 Phone, Email & Chat Support",
        "Custom Analytics",
        "Developer API Access",
        "Unlimited Projects",
        "Hourly Backups",
        "Advanced Security Features",
      ],
    },
    {
      name: "Premium",
      price: "$199",
      description: "For large enterprises with advanced needs",
      features: [
        "Unlimited Storage",
        "White-glove Support",
        "Custom Integrations",
        "Unlimited Users",
        "Dedicated Account Manager",
        "AI-Powered Analytics",
        "Custom API Development",
        "Global CDN Access",
        "Real-time Backups",
        "Enterprise-grade Security",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Get an attractive price here
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Whether you're just starting
            out or running a large enterprise, we have you covered.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-xl font-medium">/month</span>
                </p>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheckCircle
                          className="h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-8 bg-gray-50 border-t-2 border-gray-100">
                <button
                  aria-label={`Choose ${plan.name} plan`}
                  className="block w-full bg-indigo-600 border border-transparent rounded-md shadow py-3 px-6 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;

// 2 codigo

import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const PricingPlans = () => {
  const plans = [
    {
      name: "Intro",
      price: 19,
      description: "Perfect for individuals starting their journey",
      features: [
        "5GB Storage",
        "Basic Support",
        "2 Integrations",
        "Limited Analytics",
        "1 User",
        "Basic Templates",
        "Email Support",
        "1 Project",
        "Basic Security",
        "Weekly Backups"
      ]
    },
    {
      name: "Base",
      price: 39,
      description: "Great for small teams and growing businesses",
      features: [
        "20GB Storage",
        "Priority Support",
        "5 Integrations",
        "Advanced Analytics",
        "3 Users",
        "Premium Templates",
        "24/7 Email Support",
        "5 Projects",
        "Enhanced Security",
        "Daily Backups"
      ]
    },
    {
      name: "Popular",
      price: 79,
      description: "Ideal for medium-sized companies and teams",
      features: [
        "100GB Storage",
        "24/7 Priority Support",
        "Unlimited Integrations",
        "Advanced Analytics & Reporting",
        "10 Users",
        "Custom Templates",
        "Phone & Email Support",
        "Unlimited Projects",
        "Advanced Security",
        "Real-time Backups"
      ]
    },
    {
      name: "Premium",
      price: 129,
      description: "For large enterprises with advanced needs",
      features: [
        "Unlimited Storage",
        "White-glove Support",
        "Custom Integrations",
        "AI-powered Analytics",
        "Unlimited Users",
        "Custom Branding",
        "Dedicated Account Manager",
        "Unlimited Projects",
        "Enterprise-grade Security",
        "Continuous Backups"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get an attractive price here
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                    id={`${plan.name.toLowerCase()}-plan`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                  ${plan.price}
                  <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>
                </div>
                <p className="mt-5 text-lg text-gray-500">{plan.description}</p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50 sm:px-10 sm:pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheck className="h-6 w-6 text-green-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label={`Choose ${plan.name} plan`}
                  >
                    Choose Plan
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;

// 3 codigo

import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const PricingPlans = () => {
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: "Intro",
      price: 19,
      description: "Perfect for individuals just starting out",
      features: [
        "5GB Storage",
        "Basic Support",
        "1 User",
        "1 Project",
        "Basic Analytics",
        "24/7 Customer Support",
        "Email Integration",
        "Basic Security",
        "1 Domain",
        "Updates Included"
      ]
    },
    {
      name: "Base",
      price: 39,
      description: "Great for small teams and growing businesses",
      features: [
        "20GB Storage",
        "Priority Support",
        "5 Users",
        "5 Projects",
        "Advanced Analytics",
        "24/7 Customer Support",
        "Email and Slack Integration",
        "Enhanced Security",
        "3 Domains",
        "Updates Included"
      ]
    },
    {
      name: "Popular",
      price: 79,
      description: "Ideal for medium-sized companies",
      features: [
        "100GB Storage",
        "Priority Support",
        "Unlimited Users",
        "20 Projects",
        "Advanced Analytics",
        "24/7 Priority Customer Support",
        "All Integrations",
        "Advanced Security",
        "10 Domains",
        "Updates and Premium Features"
      ]
    },
    {
      name: "Premium",
      price: 129,
      description: "For large enterprises with advanced needs",
      features: [
        "Unlimited Storage",
        "Dedicated Support Team",
        "Unlimited Users",
        "Unlimited Projects",
        "Custom Analytics",
        "24/7 VIP Customer Support",
        "Custom Integrations",
        "Enterprise-grade Security",
        "Unlimited Domains",
        "Updates, Premium Features, and Custom Development"
      ]
    }
  ];

  const handleChoosePlan = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get an attractive price here
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Unlock powerful features and take your project to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 ${index === 2 ? 'ring-4 ring-blue-500' : ''}`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-xl font-medium text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheck className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-8 py-6">
                <button
                  onClick={handleChoosePlan}
                  disabled={loading}
                  aria-label={`Choose ${plan.name} plan`}
                  className="w-full bg-blue-600 text-white rounded-md px-4 py-3 font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  {loading ? (
                    <BsLightningCharge className="animate-spin h-6 w-6 mx-auto" />
                  ) : (
                    'Choose Plan'
                  )}
                </button>
              </div>
              {index === 2 && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  Popular
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

// 3 codigo

import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const PricingPlanSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Build Your Website Today</h1>
        
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Testimonial */}
          <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "This website builder exceeded my expectations. It's intuitive, powerful, and the support team is incredibly helpful. I was able to create a stunning website for my business in no time!"
            </p>
          </div>
          
          {/* Pricing Plan */}
          <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Single Pack Plan</h2>
            <p className="text-4xl font-bold mb-6">$49<span className="text-xl font-normal">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                1 Domain License
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                Premium Support
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                Unlimited Pages
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                Advanced SEO Tools
              </li>
            </ul>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Get full access to Single Pack Plan"
            >
              Get Full Access
            </button>
            <p className="text-center mt-4 text-sm text-gray-400">
              14 Days Moneyback Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanSection;

// 4 codigo

import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingComponent = () => {
  const features = [
    "Unlimited members",
    "Unlimited storage",
    "24/7 customer support",
    "Advanced analytics",
    "Custom branding",
    "API access",
    "Integration with popular tools",
    "Priority updates"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          All features for one price. Try <span className="text-indigo-400">CompanyName</span> for free!
        </h1>

        <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-indigo-500/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaCheck className="text-indigo-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-5xl font-bold mb-4">$19<span className="text-2xl">/month</span></p>
              <button
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Get started now"
              >
                Get started now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              alt="Testimonial author"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-xl italic mb-4">
              "This platform has revolutionized our workflow. The features are comprehensive, and the pricing is unbeatable. It's been a game-changer for our team's productivity."
            </p>
            <p className="font-semibold">Jane Doe, CEO of TechInnovators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;

// 5 codigo

import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingComponent = () => {
  const features = [
    "Unlimited projects",
    "24/7 customer support",
    "Advanced analytics",
    "Custom integrations",
    "Team collaboration",
    "Cloud storage",
    "API access",
    "Priority updates"
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            All features for one price. Try Company Name for free!
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white mb-8 md:mb-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center md:text-right">
              <div className="text-5xl font-bold text-white mb-2">$19</div>
              <div className="text-gray-400 mb-4">per month</div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                aria-label="Get started now"
              >
                Get started now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 p-8">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
              alt="Testimonial author"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-white italic text-lg mb-2">
                "This product has revolutionized our workflow. The features are comprehensive and the support is unparalleled. It's been a game-changer for our team."
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Sarah Johnson</span> - CEO, TechInnovate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;

// 6 codigo

import React, { useState } from "react";
import { FaCheck, FaQuoteLeft } from "react-icons/fa";

const PricingComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    "Unlimited members",
    "Unlimited storage",
    "24/7 support",
    "Custom domain",
    "Analytics dashboard",
    "Team collaboration",
    "API access",
    "Security features"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          All features for one price. Try Company Name for free!
        </h1>

        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8 p-8">
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheck className="text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:border-l md:border-gray-700 md:pl-8 flex flex-col justify-center items-center">
              <div className="text-4xl font-bold mb-4">$19/month</div>
              <button
                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isHovered ? 'animate-pulse' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Get started now"
              >
                Get started now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Testimonial author"
              />
            </div>
            <div>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-3 text-gray-600 text-xl" />
                <p className="text-lg font-medium mb-4 pl-6">
                  This platform has revolutionized our team's workflow. The features are comprehensive, and the pricing is unbeatable. It's been a game-changer for our business.
                </p>
              </div>
              <div className="font-semibold">Sarah Thompson</div>
              <div className="text-gray-400">CEO, Innovate Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;

// 7 codigp

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "$19",
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"]
      },
      {
        name: "Pro",
        price: "$49",
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support", "Advanced Analytics"]
      },
      {
        name: "Enterprise",
        price: "$99",
        features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Solutions"]
      }
    ],
    annually: [
      {
        name: "Basic",
        price: "$190",
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"]
      },
      {
        name: "Pro",
        price: "$490",
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support", "Advanced Analytics"]
      },
      {
        name: "Enterprise",
        price: "$990",
        features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Solutions"]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8" role="tablist">
          <button
            className={`px-6 py-2 text-sm font-medium rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeTab === "monthly"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("monthly")}
            role="tab"
            aria-selected={activeTab === "monthly"}
            aria-controls="monthly-tab"
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeTab === "annually"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("annually")}
            role="tab"
            aria-selected={activeTab === "annually"}
            aria-controls="annually-tab"
          >
            Annually
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8" id={`${activeTab}-tab`} role="tabpanel">
          {plans[activeTab].map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-blue-500 mb-6">{plan.price}<span className="text-gray-500 text-base font-normal">/{activeTab === "monthly" ? "mo" : "yr"}</span></p>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button
                  className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                  aria-label={`Choose ${plan.name} plan`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeTab === "annually" && (
          <p className="text-center mt-8 text-green-600 font-medium">
            Save up to 20% with annual billing!
          </p>
        )}
      </div>
    </div>
  );
};

export default PricingPlan;

// 8 codigo

import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "$19",
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"],
      },
      {
        name: "Pro",
        price: "$49",
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support"],
      },
      {
        name: "Enterprise",
        price: "$99",
        features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support"],
      },
    ],
    annually: [
      {
        name: "Basic",
        price: "$190",
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"],
      },
      {
        name: "Pro",
        price: "$490",
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support"],
      },
      {
        name: "Enterprise",
        price: "$990",
        features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support"],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${
            activeTab === "monthly"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("monthly")}
          aria-label="Monthly plans"
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${
            activeTab === "annually"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("annually")}
          aria-label="Annual plans"
        >
          Annually
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans[activeTab].map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}<span className="text-lg font-normal text-gray-600">/{activeTab === "monthly" ? "mo" : "yr"}</span></p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <FiCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50">
              <button className="w-full bg-blue-600 text-white rounded-md py-3 font-medium hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;

// 8 codigo

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "$19",
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"]
      },
      {
        name: "Pro",
        price: "$49",
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support"]
      },
      {
        name: "Enterprise",
        price: "$99",
        features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support"]
      }
    ],
    annual: [
      {
        name: "Basic",
        price: "$190",
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"]
      },
      {
        name: "Pro",
        price: "$490",
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support"]
      },
      {
        name: "Enterprise",
        price: "$990",
        features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support"]
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Pricing plan tabs">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 ${
              activeTab === "monthly"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("monthly")}
            aria-pressed={activeTab === "monthly"}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 ${
              activeTab === "annual"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("annual")}
            aria-pressed={activeTab === "annual"}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans[activeTab].map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}<span className="text-gray-500 text-base font-normal">/{activeTab === "monthly" ? "mo" : "yr"}</span></p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-8 pb-8">
              <button
                className="w-full bg-blue-600 text-white rounded-md py-3 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                aria-label={`Choose ${plan.name} plan`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;

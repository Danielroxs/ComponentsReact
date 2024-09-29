import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      // Handle subscription logic here
      console.log("Subscribed:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4">Stay updated with our latest news and offers!</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="bg-white text-gray-800 px-4 py-2 rounded-l-md flex-grow mb-2 sm:mb-0"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-4 py-2 rounded-r-md transition-colors duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          {error && <p className="text-red-300 mt-2">{error}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2ODcyODczMzc&ixlib=rb-4.0.3&q=80&w=200"
              alt="Company Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm">
              Empowering businesses with innovative solutions
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Downloads</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  User Manual
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Product Catalog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  White Papers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="#"
              aria-label="Facebook"
              className="text-2xl hover:text-yellow-400 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-2xl hover:text-yellow-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-2xl hover:text-yellow-400 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-2xl hover:text-yellow-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm">
            &copy; 2023 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// 2 codigo

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <a href="/" className="inline-block">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2ODQ3NjA3Njg&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Company Logo"
                className="h-12 w-auto mb-4"
              />
            </a>
            <p className="text-gray-400 text-sm mb-6">Empowering innovation through technology</p>
            <form onSubmit={handleSubscribe} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-r-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-green-500 text-sm mt-2 animate-pulse">Thank you for subscribing!</p>
            )}
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul className="space-y-2">
              <li><a href="/features" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
              <li><a href="/integrations" className="text-gray-400 hover:text-white transition duration-300">Integrations</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
              <li><a href="/press" className="text-gray-400 hover:text-white transition duration-300">Press</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
              <li><a href="/help-center" className="text-gray-400 hover:text-white transition duration-300">Help Center</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-white transition duration-300">Community</a></li>
              <li><a href="/status" className="text-gray-400 hover:text-white transition duration-300">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">&copy; 2023 Your Company. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-gray-400 hover:text-white text-2xl transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-gray-400 hover:text-white text-2xl transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-gray-400 hover:text-white text-2xl transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-gray-400 hover:text-white text-2xl transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// 3 codigo

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2ODg2NTk1NDc&ixlib=rb-4.0.3&q=80&w=200"
              alt="Company Logo"
              className="h-12 w-auto mb-2"
            />
            <p className="text-sm font-medium">Innovate. Create. Inspire.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers!</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Tutorial</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Releases</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Press</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Community</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Downloads</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition duration-300">iOS App</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Android App</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Windows App</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-300">Mac App</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm mb-4 md:mb-0">&copy; 2023 Your Company Name. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300" aria-label="Facebook">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition duration-300" aria-label="Twitter">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 transition duration-300" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700 transition duration-300" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
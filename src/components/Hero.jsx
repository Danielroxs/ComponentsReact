import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1
                data-aos="fade-up"
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline">Discover Your</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Dream Destination
                </span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Embark on a journey of a lifetime with our curated travel
                experiences. From exotic beaches to majestic mountains, we've
                got your next adventure covered.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <a
                    href="#explore"
                    onClick={handleScroll}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Explore Now
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Scenic view of a tropical beach with palm trees and crystal clear water"
        />
      </div>
      <div id="explore" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["Bali", "Paris", "New York"].map((city, index) => (
              <div
                key={city}
                data-aos="fade-up"
                data-aos-delay={200 * (index + 1)}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={`https://images.unsplash.com/photo-${
                    index + 1
                  }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                  alt={`Scenic view of ${city}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {city}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Experience the magic of {city} with our exclusive travel
                    packages.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


// 2 codigo

import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
        role="img"
        aria-label="Hero background image of a beautiful landscape"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Discover Your Adventure
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl text-white mb-8 max-w-3xl animate-fade-in-up"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
        >
          Embark on a journey of a lifetime and create unforgettable memories
        </p>
        <button
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 animate-bounce"
          aria-label="Explore Now"
        >
          Explore Now <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;


// codigo

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
          transform: `translateY(${offset * 0.5}px)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4 animate-fade-in-down">
          Discover Your Paradise
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white text-center mb-8 max-w-3xl animate-fade-in-up">
          Explore breathtaking destinations and create unforgettable memories
        </p>
        <button
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          aria-label="Start your journey"
        >
          Start Your Journey
          <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
        <button
          className="text-white animate-bounce focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Scroll down"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

// Custom animations
const styles = `
  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-down {
    animation: fade-in-down 1s ease-out;
  }
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


import React, { useState } from "react";
import { FaSpotify, FaApple, FaMusic, FaInfoCircle } from "react-icons/fa";

const MusicStreamingFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      name: "Spotify",
      description:
        "Discover personalized playlists and podcasts tailored to your taste.",
      image:
        "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      icon: <FaSpotify />,
      color: "bg-green-500",
    },
    {
      name: "Apple Music",
      description:
        "Enjoy lossless audio and spatial sound for an immersive listening experience.",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      icon: <FaApple />,
      color: "bg-red-500",
    },
    {
      name: "Tidal",
      description:
        "Access high-fidelity sound quality and exclusive artist content.",
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      icon: <FaMusic />,
      color: "bg-blue-500",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (name) => {
    console.log(`Redirecting to ${name} for more information or download.`);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Music Streaming Apps
        </h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(feature.name)}
                >
                  <img
                    src={feature.image}
                    alt={`${feature.name} interface`}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                    }}
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                      <FaInfoCircle className="text-white text-4xl" />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  className={`${feature.color} text-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(feature.name)}
                >
                  <div className="flex items-center mb-4">
                    {React.cloneElement(feature.icon, {
                      className: "text-4xl mr-4",
                    })}
                    <h3 className="text-2xl font-bold">{feature.name}</h3>
                  </div>
                  <p className="text-lg">{feature.description}</p>
                  <button className="mt-4 bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicStreamingFeatures;


// 2 codigo

import React, { useState } from "react";
import { FaPlayCircle, FaHeart, FaShare, FaRandom, FaHeadphones } from "react-icons/fa";

const MusicStreamingFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Personalized Playlists",
      description: "Discover new music tailored to your taste with AI-powered recommendations.",
      icon: <FaPlayCircle className="text-4xl text-indigo-600" />,
      image: "images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Offline Listening",
      description: "Download your favorite tracks and listen offline, anywhere, anytime.",
      icon: <FaHeadphones className="text-4xl text-indigo-600" />,
      image: "images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      title: "Social Sharing",
      description: "Share your favorite songs and playlists with friends on social media.",
      icon: <FaShare className="text-4xl text-indigo-600" />,
      image: "images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
    },
    {
      title: "Shuffle Play",
      description: "Mix up your music experience with our intelligent shuffle algorithm.",
      icon: <FaRandom className="text-4xl text-indigo-600" />,
      image: "images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
    },
    {
      title: "Favorites Collection",
      description: "Easily save and access your favorite tracks in one place.",
      icon: <FaHeart className="text-4xl text-indigo-600" />,
      image: "images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Discover Our Amazing Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-white shadow-lg scale-105"
                    : "hover:bg-white hover:shadow-md"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105">
            <img
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {features[activeFeature].title}
              </h3>
              <p className="text-sm">{features[activeFeature].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicStreamingFeatures;

// 3 codigo

import React from "react";
import { FaSpotify, FaApple, FaAmazon } from "react-icons/fa";
import { SiYoutubemusic, SiTidal } from "react-icons/si";

const FeatureSection = () => {
  const features = [
    {
      name: "Spotify",
      description: "Discover weekly personalized playlists",
      icon: FaSpotify,
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      name: "Apple Music",
      description: "Seamless integration with Apple devices",
      icon: FaApple,
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Amazon Music",
      description: "Lyrics sync with X-Ray feature",
      icon: FaAmazon,
      image: "https://images.unsplash.com/photo-1632800704140-6ab3c80ba0c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "YouTube Music",
      description: "Seamless transition between audio and video",
      icon: SiYoutubemusic,
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Tidal",
      description: "High-fidelity audio streaming",
      icon: SiTidal,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Discover Our Features</h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={`${feature.name} feature`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  <feature.icon className="text-5xl mb-4 text-blue-600" />
                  <h3 className="text-2xl font-semibold mb-2">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

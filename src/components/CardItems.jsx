import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const ProductCatalog = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Wireless Earbuds",
            price: 99.99,
            description: "High-quality wireless earbuds with noise cancellation",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 199.99,
            description: "Feature-packed smartwatch with health monitoring",
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 3,
            name: "Portable Speaker",
            price: 79.99,
            description: "Compact and powerful portable Bluetooth speaker",
            rating: 4.0,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
    ];

    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
                {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                    <BsStarFill key={index} className="text-gray-300" />
                ))}
                <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
            </div>
        );
    };

    const ProductCard = ({ product }) => {
        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden group">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                            onClick={() => setSelectedProduct(product)}
                            className="bg-white text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Quick View
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                        <StarRating rating={product.rating} />
                    </div>
                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                    >
                        View Details
                    </button>
                </div>
            </div>
        );
    };

    const Modal = ({ product, onClose }) => {
        if (!product) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden">
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                            <StarRating rating={product.rating} />
                        </div>
                        <button className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Product Catalog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
    );
};

export default ProductCatalog;

// 2 codigo

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";

const ProductCatalog = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Elegant Watch",
            price: 199.99,
            description: "A stylish timepiece for any occasion",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },
        {
            id: 2,
            name: "Wireless Earbuds",
            price: 129.99,
            description: "High-quality sound with long battery life",
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
        },
        {
            id: 3,
            name: "Smart Home Hub",
            price: 89.99,
            description: "Control your home with voice commands",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126"
        },
        {
            id: 4,
            name: "Fitness Tracker",
            price: 79.99,
            description: "Monitor your health and activity levels",
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b5"
        }
    ];

    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
            </div>
        );
    };

    const ProductCard = ({ product }) => {
        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                        <StarRating rating={product.rating} />
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={() => setSelectedProduct(product)}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                            aria-label={`Quick view ${product.name}`}
                        >
                            <BsEyeFill className="mr-2" /> Quick View
                        </button>
                        <button
                            className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors duration-300"
                            aria-label={`View details of ${product.name}`}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const QuickViewModal = ({ product, onClose }) => {
        if (!product) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                        <StarRating rating={product.rating} />
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 w-full"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Product Catalog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <QuickViewModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};

export default ProductCatalog;

// 3 codigo

import React, { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductCatalog = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Premium Leather Wallet",
            price: 79.99,
            description: "Handcrafted genuine leather wallet with multiple card slots and a coin pocket.",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        },
        {
            id: 2,
            name: "Wireless Bluetooth Headphones",
            price: 129.99,
            description: "High-quality wireless headphones with noise-cancellation and long battery life.",
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 3,
            name: "Smart Fitness Tracker",
            price: 89.99,
            description: "Advanced fitness tracker with heart rate monitoring and sleep analysis features.",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
        }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const StarRating = ({ rating }) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
                <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
            </div>
        );
    };

    const ProductCard = ({ product }) => (
        <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative overflow-hidden">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                    <StarRating rating={product.rating} />
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => openModal(product)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        aria-label={`Quick view ${product.name}`}
                    >
                        Quick View
                    </button>
                    <button
                        className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        aria-label={`View details of ${product.name}`}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );

    const Modal = ({ product, onClose }) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                        aria-label="Close modal"
                    >
                        <FaTimes className="w-6 h-6" />
                    </button>
                </div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                    <StarRating rating={product.rating} />
                </div>
                <button
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    aria-label={`Add ${product.name} to cart`}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Product Catalog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </div>
    );
};

export default ProductCatalog;

// 4 codigo

import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
    {
        id: 1,
        name: "Emily Johnson",
        title: "Senior Frontend Developer",
        bio: "Passionate about creating intuitive user interfaces and optimizing web performance.",
        skills: ["React", "TypeScript", "TailwindCSS"],
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        socials: {
            linkedin: "https://linkedin.com/in/emily-johnson",
            twitter: "https://twitter.com/emilyjohnson",
            github: "https://github.com/emilyjohnson"
        }
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "UX Designer",
        bio: "Dedicated to creating user-centered designs that balance aesthetics and functionality.",
        skills: ["UI/UX Design", "Figma", "User Research"],
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        socials: {
            linkedin: "https://linkedin.com/in/michael-chen",
            twitter: "https://twitter.com/michaelchen",
            github: "https://github.com/michaelchen"
        }
    },
    {
        id: 3,
        name: "Sarah Rodriguez",
        title: "Backend Engineer",
        bio: "Experienced in building scalable and efficient server-side applications.",
        skills: ["Node.js", "Python", "AWS"],
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        socials: {
            linkedin: "https://linkedin.com/in/sarah-rodriguez",
            twitter: "https://twitter.com/sarahrodriguez",
            github: "https://github.com/sarahrodriguez"
        }
    }
];

const TeamMemberCard = ({ member }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={member.image}
                alt={`${member.name}'s profile picture`}
                className="w-full h-48 object-cover object-center sm:h-56 md:h-64 lg:h-72"
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h2>
                <p className="text-sm font-medium text-indigo-600 mb-4">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Skills:</h3>
                    <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn profile`}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s Twitter profile`}
                        className="text-blue-400 hover:text-blue-600"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s GitHub profile`}
                        className="text-gray-800 hover:text-gray-600"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

const TeamMemberList = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
};

export default TeamMemberList;


// 5 codigo 

import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, image, feedback, jobTitle, company, rating }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
                <img
                    src={image}
                    alt={`${name}'s profile picture`}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-600">{jobTitle} at {company}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{feedback}</p>
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`${index < rating ? "text-yellow-400" : "text-gray-300"} text-xl mr-1`}
                    />
                ))}
            </div>
        </div>
    );
};

const TestimonialCardList = () => {
    const testimonials = [
        {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            feedback: "This product has completely transformed our workflow. Highly recommended!",
            jobTitle: "Senior Manager",
            company: "Tech Solutions Inc.",
            rating: 5
        },
        {
            name: "Jane Smith",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            feedback: "Exceptional service and outstanding results. We couldn't be happier!",
            jobTitle: "Marketing Director",
            company: "Global Innovations",
            rating: 4
        },
        {
            name: "Mike Johnson",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
            feedback: "The team's expertise and dedication are truly impressive. Great job!",
            jobTitle: "CTO",
            company: "Future Systems",
            rating: 5
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCardList;

// 6 codigo


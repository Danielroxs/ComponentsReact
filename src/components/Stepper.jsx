import React, { useState } from "react";
import {
  FaCheck,
  FaCreditCard,
  FaInfoCircle,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";

const StepperComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const steps = [
    { number: 1, title: "Personal Info", icon: <FaUser /> },
    { number: 2, title: "Payment Details", icon: <FaCreditCard /> },
    { number: 3, title: "Confirmation", icon: <FaCheck /> },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Payment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Card Number"
                  className="w-full p-2 border rounded"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaCreditCard className="text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaInfoCircle className="text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="CVV"
                  className="w-full p-2 border rounded"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
              </div>
              <input
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleInputChange}
                placeholder="Billing Address"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-semibold mb-2">Payment Options</h3>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="paymentType" className="mr-2" />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentType" className="mr-2" />
                  PayPal
                </label>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Confirmation</h2>
            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Product:</span> Example Product
                </p>
                <p>
                  <span className="font-medium">Quantity:</span> 1
                </p>
                <p>
                  <span className="font-medium">Total:</span> $99.99
                </p>
              </div>
            </div>
            <div className="bg-green-100 border-l-4 border-green-500 p-4">
              <p className="text-green-700">
                Your payment information is secure. We use industry-standard
                encryption to protect your data.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col items-center ${
                currentStep === step.number ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === step.number
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.icon}
              </div>
              <p className="mt-2 text-sm">{step.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 h-2 bg-gray-200 rounded">
          <motion.div
            className="h-full bg-blue-600 rounded"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderStepContent()}
      </motion.div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handlePreviousStep}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={currentStep === steps.length}
          className={`px-4 py-2 rounded ${
            currentStep === steps.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {currentStep === steps.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default StepperComponent;


// 2 codigo

import React, { useState } from "react";
import { FaCheckCircle, FaCreditCard, FaInfoCircle, FaLock, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PaymentStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    name: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const steps = [
    { title: "Personal Info", icon: <FaUser /> },
    { title: "Payment Details", icon: <FaCreditCard /> },
    { title: "Confirmation", icon: <FaCheckCircle /> },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "cardNumber":
        errorMessage = value.length !== 16 ? "Card number must be 16 digits" : "";
        break;
      case "expirationDate":
        errorMessage = !/^\d{2}\/\d{2}$/.test(value) ? "Invalid expiration date (MM/YY)" : "";
        break;
      case "cvv":
        errorMessage = value.length !== 3 ? "CVV must be 3 digits" : "";
        break;
      default:
        errorMessage = value.trim() === "" ? "This field is required" : "";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-2">Why we need your information</h3>
              <p className="text-sm text-gray-600">
                We collect your personal information to ensure a smooth delivery process and to keep you informed about your order status. Rest assured, your data is securely handled and never shared with third parties.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
              </div>
              <div>
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.expirationDate && <p className="text-red-500 text-xs mt-1">{errors.expirationDate}</p>}
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mt-6 flex items-start">
              <FaLock className="text-blue-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Secure Payment</h3>
                <p className="text-sm text-blue-600">
                  Your payment information is encrypted and securely processed. We do not store your full card details on our servers.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Order Summary</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Product:</span>
                  <span>Premium Package</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Quantity:</span>
                  <span>1</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Price:</span>
                  <span>$99.99</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Tax:</span>
                  <span>$10.00</span>
                </p>
                <div className="border-t border-green-200 my-2 pt-2">
                  <p className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>$109.99</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <button
                onClick={() => alert("Order placed successfully!")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Confirm and Pay
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep > index + 1 ? "bg-indigo-600" : currentStep === index + 1 ? "bg-indigo-500" : "bg-gray-300"} transition-colors duration-200`}
              >
                <span className="text-white">{step.icon}</span>
              </div>
              <div className="ml-4 hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{step.title}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-full bg-gray-200 h-0.5 flex-1 mx-4">
                  <div
                    className={`h-0.5 ${currentStep > index + 1 ? "bg-indigo-600" : "bg-gray-200"} transition-all duration-200`}
                    style={{ width: currentStep > index + 1 ? "100%" : "0%" }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">{renderStepContent()}</div>

      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`flex items-center px-4 py-2 border border-gray-300 rounded-md ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"}`}
        >
          <MdKeyboardArrowLeft className="mr-2" />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className={`flex items-center px-4 py-2 border border-transparent rounded-md ${currentStep === steps.length ? "opacity-50 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
        >
          {currentStep === steps.length ? "Complete" : "Next"}
          <MdKeyboardArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PaymentStepper;


// 3 codigo

import React, { useState } from "react";
import { FaUser, FaCreditCard, FaShoppingCart, FaInfoCircle, FaPaypal } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const PaymentStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Billing Information", "Payment Method", "Order Summary"];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </form>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Why We Need This Information</h4>
              <p className="text-gray-600 mb-4">
                We collect your billing information to ensure accurate order processing and delivery. Your data is
                securely stored and never shared with third parties.
              </p>
              <div className="flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer">
                <FaInfoCircle className="mr-2" />
                <span>Learn more about our privacy policy</span>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition duration-150">
                  <FaCreditCard className="text-2xl text-indigo-600 mr-4" />
                  <span>Credit/Debit Card</span>
                </div>
                <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition duration-150">
                  <FaPaypal className="text-2xl text-indigo-600 mr-4" />
                  <span>PayPal</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Secure Payments</h4>
              <p className="text-gray-600 mb-4">
                All our payment methods are secure and encrypted. We use industry-standard security measures to protect
                your financial information.
              </p>
              <div className="flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer">
                <FaInfoCircle className="mr-2" />
                <span>View our security certifications</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Product</span>
                    <span className="font-medium">Total</span>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Product 1</span>
                    <span>$99.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Product 2</span>
                    <span>$49.99</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold pt-2 border-t">
                    <span>Total</span>
                    <span>$149.98</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Order Confirmation</h4>
              <p className="text-gray-600 mb-4">
                Please review your order details carefully. Once confirmed, your payment will be processed, and your
                order will be on its way!
              </p>
              <div className="flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer">
                <FaInfoCircle className="mr-2" />
                <span>Learn about our return policy</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${index <= currentStep ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  {index === 0 && <FaUser />}
                  {index === 1 && <FaCreditCard />}
                  {index === 2 && <FaShoppingCart />}
                </div>
                <span className="mt-2 text-sm font-medium">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-200 mx-4">
                  <div
                    className={`h-full ${index < currentStep ? "bg-indigo-600" : "bg-gray-200"}`}
                    style={{ width: index < currentStep ? "100%" : "0%" }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mb-8">{renderStepContent()}</div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded ${currentStep === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center"
        >
          {currentStep === steps.length - 1 ? "Confirm Order" : "Next"}
          <MdKeyboardArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PaymentStepper;

import React, { useState } from "react";
import { Phone, Mail, User, MessageSquare, X, AlertCircle, Check } from "lucide-react";

const InquiryModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const validateForm = () => {
    const newErrors = {};
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    // Phone Number validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Must be 10 digits and start with 6-9";
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
          setIsSubmitted(false);
          closeModal();
        }, 2000);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden transform transition-all">
        {/* Modal Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 relative">
          <h3 className="text-lg font-semibold text-gray-800">Contact RTDJ Legal</h3>
          <button 
            onClick={closeModal}
            className="absolute top-4 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="px-6 py-4">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check size={32} className="text-green-600" />
                </div>
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">Thank You!</h4>
              <p className="text-gray-600">
                Your inquiry has been received. We will get back to you soon.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Fill out the form below and Adv. Mr. Ashok Kumar's office will contact you shortly.
              </p>
              
              {/* Full Name */}
              <div>
                <label htmlFor="modal-fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="modal-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.fullName ? "border-red-500 bg-red-50" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.fullName}
                  </p>
                )}
              </div>
              
              {/* Phone Number */}
              <div>
                <label htmlFor="modal-phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="modal-phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.phoneNumber ? "border-red-500 bg-red-50" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.phoneNumber}
                  </p>
                )}
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute top-2 left-3 pointer-events-none">
                    <MessageSquare size={16} className="text-gray-400" />
                  </div>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.message ? "border-red-500 bg-red-50" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.message}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Modal Footer */}
        {!isSubmitted && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 rounded-md text-white font-medium flex items-center justify-center min-w-24 transition-all"
              style={{ backgroundColor: isSubmitting ? "#f0c387" : "#ebb661" }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Mail size={16} className="mr-2" />
                  Send
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage component that includes the modal
const ExamplePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">RTDJ Legal Services</h1>
        <p className="text-gray-600 mb-4">
          Welcome to the official website of RTDJ Adv. Mr. Ashok Kumar. We provide expert legal consultation
          and representation in various areas of law including civil, criminal, corporate, and family law.
        </p>
        <p className="text-gray-600 mb-4">
          Our team of experienced legal professionals is dedicated to providing the highest quality legal
          services to our clients with integrity and commitment.
        </p>
        <p className="text-gray-600">
          Need legal assistance? Click the inquiry button in the bottom-right corner to get in touch with us.
        </p>
      </div>
      
      {/* Include the inquiry modal */}
      <InquiryModal />
    </div>
  );
};

export default InquiryModal;
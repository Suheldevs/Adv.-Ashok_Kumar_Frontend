import React, { useState } from "react";
import { Phone, Mail, User, MessageSquare, X, AlertCircle, Check } from "lucide-react";
import axios from 'axios';
const InquiryModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const backend_url = import.meta.env.VITE_BACKEND_URL

const newErrors = {};
  const validateForm = () => {
    
    // Full Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    // Phone Number validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Must be 10 digits and start with 6-9";
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

  const handleSubmit = async() => {
    if (validateForm()) {
      setIsSubmitting(true);
      setError(null)
      try{
        const response  = await axios.post(`${backend_url}/inquiry/save`,formData)
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          setIsSubmitted(false);
          closeModal();})
      }
      catch(err){
        setError('Someting went wrorg');
      }
      finally{
         setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={closeModal}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden transform transition-all">
        {/* Modal Header */}
        <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 relative">
          <h3 className="text-lg font-semibold text-neutral-800">Contact Retd. Judge Ashok Kumar</h3>
          <button 
            onClick={closeModal}
            className="absolute top-4 right-6 text-neutral-400 hover:text-neutral-600 transition-colors"
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
              <h4 className="text-xl font-medium text-neutral-800 mb-2">Thank You!</h4>
              <p className="text-neutral-600">
                Your inquiry has been received. We will get back to you soon.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-neutral-600 mb-4">
                Fill out the form below and Adv. Mr. Ashok Kumar's office will contact you shortly.
              </p>
              {error && (
 <p className="text-red-600 mb-4">
                Something Went Wrong! Please Try Later.
              </p>
              )}
             
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User size={16} className="text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.name ? "border-red-500 bg-red-50" : "border-neutral-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.name}
                  </p>
                )}
              </div>
              
              {/* Phone Number */}
              <div>
                <label htmlFor="modal-phoneNumber" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone size={16} className="text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    id="modal-phoneNumber"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.phone ? "border-red-500 bg-red-50" : "border-neutral-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.phone}
                  </p>
                )}
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail size={16} className="text-neutral-400" />
                  </div>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.email ? "border-red-500 bg-red-50" : "border-neutral-300"
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
                <label htmlFor="modal-message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute top-2 left-3 pointer-events-none">
                    <MessageSquare size={16} className="text-neutral-400" />
                  </div>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                      errors.message ? "border-red-500 bg-red-50" : "border-neutral-300"
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
          <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200 flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-md mr-2 hover:bg-neutral-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 rounded-md text-black font-medium flex items-center justify-center min-w-24 transition-all"
              style={{ backgroundColor: isSubmitting ? "#f0c387" : "#ebb661" }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
    <div className="min-h-screen bg-neutral-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-neutral-800 mb-4">RTDJ Legal Services</h1>
        <p className="text-neutral-600 mb-4">
          Welcome to the official website of RTDJ Adv. Mr. Ashok Kumar. We provide expert legal consultation
          and representation in various areas of law including civil, criminal, corporate, and family law.
        </p>
        <p className="text-neutral-600 mb-4">
          Our team of experienced legal professionals is dedicated to providing the highest quality legal
          services to our clients with integrity and commitment.
        </p>
        <p className="text-neutral-600">
          Need legal assistance? Click the inquiry button in the bottom-right corner to get in touch with us.
        </p>
      </div>
      
      {/* Include the inquiry modal */}
      <InquiryModal />
    </div>
  );
};

export default InquiryModal;
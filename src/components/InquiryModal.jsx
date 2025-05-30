import React, { useState } from "react";
import {
  Phone,
  Mail,
  User,
  MessageSquare,
  X,
  AlertCircle,
  Check,
  PenTool,
  Tornado,
} from "lucide-react";
import axios from "axios";
import serviceData from "../Data/ServiceData";

const InquiryModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const validateForm = () => {
    const newErrors = {};
    
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

    if (!formData.service.trim()) {
      newErrors.service = "Please Select a Service";
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
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    if (validateForm()) {
      setIsSubmitting(true);
      setError(null);
      try {
        const response = await axios.post(
          `${backend_url}/inquiry/save`,
          formData
        );

        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
            service: "",
          });
          closeModal();
          setIsSubmitted(false);
        }, 2000);
      } catch (err) {
        setError("Something went wrong! Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={closeModal}
      ></div>

      {/* Modal */}
      <div className="relative max-h-[98vh] overflow-y-auto bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 overflow-hidden transform transition-all">
        {/* Modal Header */}
        <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 relative">
          <h3 className="text-lg font-semibold text-neutral-800">
            Contact Retd. Judge Ashok Kumar
          </h3>
          <button
            aria-label="Close modal"
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
              <h4 className="text-xl font-medium text-neutral-800 mb-2">
                Thank You!
              </h4>
              <p className="text-neutral-600">
                Your inquiry has been received. We will get back to you soon.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {error && (
                <p className="text-red-600 mb-4">
                  {error}
                </p>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
                    <div className="lg:w-1/2 w-full">
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User size={18} className="text-neutral-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                            errors.name
                              ? "border-red-500"
                              : "border-neutral-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="lg:w-1/2 w-full">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone size={18} className="text-neutral-400" />
                        </div>
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                            errors.phone
                              ? "border-red-500"
                              : "border-neutral-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center gap-4">
                    <div className="lg:w-1/2 w-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail size={18} className="text-neutral-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                            errors.email
                              ? "border-red-500"
                              : "border-neutral-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Enter your email address"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div className="lg:w-1/2 w-full">
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Services *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Tornado size={18} className="text-neutral-400" />
                        </div>
                        <select
                          name="service"
                          onChange={handleChange}
                          value={formData.service}
                          className={`w-full pl-10 pr-8 py-2 border bg-white rounded-md appearance-none cursor-pointer ${
                            errors.service
                              ? "border-red-500"
                              : "border-neutral-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        >
                          <option value="" selected>
                            --Select Service--
                          </option>
                          {serviceData.map((service, index) => (
                            <option className="bg-neutral-800 text-[#ebb661] border focus:text-black" key={index} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare
                          size={18}
                          className="text-neutral-400"
                        />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                          errors.message
                            ? "border-red-500"
                            : "border-neutral-300"
                        } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 disabled:cursor-not-allowed text-black font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
                      style={{ backgroundColor: isSubmitting ? "#f0c387" : "#ebb661" }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail size={16} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

      
      </div>
    </div>
  );
};

export default InquiryModal;
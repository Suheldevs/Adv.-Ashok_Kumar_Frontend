import React, { useState } from "react";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";



const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      newErrors.phoneNumber = "Phone number must be 10 digits and start with 6-9";
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic would go here
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Contact Us"
        items={[
          { label: "Home", link: "/" },
          { label: "Contact Us", link: "/contact" },
        ]}
      />

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Feel free to contact us for any legal assistance or inquiries
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <div className="rounded-lg p-6 bg-white shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4 border-gray-200">
                  Contact Information
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-amber-100">
                      <User size={20} className="text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-700">Advocate</h4>
                      <p className="text-gray-600">Mr. Ashok Kumar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-amber-100">
                      <Phone size={20} className="text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-700">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-amber-100">
                      <Mail size={20} className="text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-700">Email</h4>
                      <p className="text-gray-600">ashok.kumar@rtdjlegal.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-amber-100">
                      <MapPin size={20} className="text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-700">Address</h4>
                      <p className="text-gray-600">
                        123 Legal Avenue, High Court Road
                        <br />
                        New Delhi, 110001
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-700 mb-4">Working Hours</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full md:w-2/3">
              <div className="rounded-lg p-8 bg-white shadow-md border-t-4 border-amber-500">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Send us a Message
                </h3>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-6">
                    <p>Thank you for your message! We will get back to you soon.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                            errors.fullName ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                            errors.phoneNumber ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Enter your email address"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare size={18} className="text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                            errors.message ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
                        style={{ backgroundColor: "#ebb661" }}
                      >
                        <Mail size={18} className="mr-2" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="w-full py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">Map placeholder - Google Maps would be integrated here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
    </div>
  );
};

export default ContactUs;
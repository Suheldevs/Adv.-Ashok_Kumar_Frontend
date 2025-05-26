import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  Check,
  Youtube,
  Linkedin,
  Facebook,
  PenTool,
  Tornado,
} from "lucide-react";
import {} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import serviceData from "../Data/ServiceData";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      newErrors.phone = "Phone number must be 10 digits and start with 6-9";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setError(null);
      try {
        const response = await axios.post(
          `${backend_url}/inquiry/save`,
          formData
        );

        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          setIsSubmitted(true);
        });
      } catch (err) {
        setError("Someting went wrorg");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50/95">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Contact Us"
        items={[
          { label: "Home", link: "/" },
          { label: "Contact Us", link: "/contact" },
        ]}
      />

      {/* Contact Section */}
      <div className="container mx-auto lg:px-4 px-2 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row lg:gap-12 gap-6">
            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <div className="rounded-lg lg:p-6 p-3 bg-white shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-neutral-800 border-b pb-4 border-neutral-200">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-amber-100">
                      <Phone size={20} className="text-[#ebb661]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-neutral-700">Phone</h4>
                      <a
                        href="tel:7844830212"
                        target="_blank"
                        className="text-neutral-600"
                      >
                        +91-7844830212
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-amber-100">
                      <Mail size={20} className="text-[#ebb661]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-neutral-700">Email</h4>
                      <a
                        target="_blank"
                        href="mailto:justiceforallindia25@gmail.com"
                        className="text-neutral-600"
                      >
                        justiceforallindia25@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-amber-100">
                      <MapPin size={20} className="text-[#ebb661]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-neutral-700">
                        Address
                      </h4>
                      <a
                        href="https://maps.app.goo.gl/iv7kN1KGFdnksnV66"
                        className="text-neutral-600"
                      >
                        3/141, Vibhav Khand -3, Vibhav Khand, Gomti Nagar,
                        Lucknow, Uttar Pradesh 226010
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/RetdJudge-Ashok-Kumar/pfbid0L8V9WY5cwsKtLfKzB6xhNS3f6iwRZqsu3m8FL5ZwZCWwUXEoeoXroEdW8TdYR6ZTl/?sk=about"
                      className=" text-amber-600 flex-shrink-0 p-3 rounded-full bg-amber-100"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      target="_blank"
                      href="https://x.com/RetdJudgeAshokK"
                      className="text-amber-600 flex-shrink-0 p-3 rounded-full bg-amber-100"
                    >
                      <FaXTwitter size={18} />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/retd-judge-ashok-kumar-advocate-high-court-882621258/"
                      className="text-amber-600 flex-shrink-0 p-3 rounded-full bg-amber-100"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UChYcMgKaKiYQPtOCSADyKUQ"
                      className="text-amber-600 flex-shrink-0 p-3 rounded-full bg-amber-100"
                    >
                      <Youtube size={18} />
                    </a>
                  </div>

                  {/* <div className="flex space-x-3 mt-3">
              <a
                target="_blank"
                href="https://www.facebook.com/people/RetdJudge-Ashok-Kumar/pfbid0L8V9WY5cwsKtLfKzB6xhNS3f6iwRZqsu3m8FL5ZwZCWwUXEoeoXroEdW8TdYR6ZTl/?sk=about"
                className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
              >
                <Facebook size={18} />
              </a>
              <a
                target="_blank"
                href="https://x.com/RetdJudgeAshokK"
                className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/retd-judge-ashok-kumar-advocate-high-court-882621258/"
                className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
              >
                <Linkedin size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UChYcMgKaKiYQPtOCSADyKUQ"
                className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
              >
                <Youtube size={18} />
              </a>
            </div> */}
                </div>
                <div className="pt-4 border-neutral-100">
                  <h4 className="font-semibold text-neutral-700 mb-4">
                    Working Hours
                  </h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex justify-between">
                      <span>Monday - Sunday:</span>
                      <span>8:00 AM - 11:30 PM</span>
                    </li>
{/* 
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-2/3">
              <div className="rounded-lg lg:p-8 p-4 bg-white shadow-md border-t-4 border-amber-500">
                <h3 className="text-2xl font-bold mb-6 text-neutral-800">
                  Send us a Message
                </h3>
                {error && (
                  <p className="text-red-600 mb-4">
                    Something Went Wrong! Please Try Later.
                  </p>
                )}

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
                      Your inquiry has been received. We will get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <form>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center gap-4">
                        <div className='w-1/2'>
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

                        <div className='w-1/2'>
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
                        <div className='w-1/2'>
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
                        <div className='w-1/2'>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-700 mb-1"
                          >
                            Services *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Tornado size={18} className="text-neutral-400" />
                            </div>
                            <select
                              className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-neutral-300"
                              } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                            >
                              <option disabled selected>--Select Service--</option>
                              {serviceData.map((service) => (
                                <option>{service.title}</option>
                              ))}
                            </select>
                          </div>
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.email}
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
                            rows="4"
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
                          onClick={handleSubmit}
                          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
                          style={{ backgroundColor: "#ebb661" }}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full py-10 bg-neutral-100">
        <div className="container mx-auto lg:px-4 px-2">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="bg-neutral-200 h-64 rounded flex items-center justify-center">
                <iframe
                  className="h-full w-full"
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1779.6247460399977!2d81.0196432!3d26.8638133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b1668345a3%3A0xafe19173615e503d!2sRetd%20Judge%20Ashok%20Kumar%2C%20Advocate%20Highcourt%20And%20District%20Court%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1747898940602!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

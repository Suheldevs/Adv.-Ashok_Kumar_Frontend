import React, { useState } from "react";
import { 
  Search,
  Phone
} from "lucide-react";
import pattern from '../assets/p5.jpg'
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/ServiceCard";
// Service data with all required fields
import services from "../Data/ServiceData";




// Main Services Page Component
const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   const goldTheme = "#ebb661";

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Our Legal Services"
        items={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
        ]}
      />

      {/* Hero Section
      <div className="relative bg-neutral-800 text-white">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Expert Legal Services</h2>
            <p className="text-lg text-neutral-300 mb-8">
              RTDJ Adv. Mr. Ashok Kumar provides comprehensive legal solutions 
              to individuals and businesses across a wide range of practice areas.
            </p>
            <div className="flex justify-center">
              <a 
                href="#service-list" 
                className="px-6 py-3 rounded-md font-medium text-white transition-colors duration-300"
                style={{ backgroundColor: "#ebb661" }}
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">
            Comprehensive Legal Solutions
          </h2>
          {/* <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#ebb661" }}></div> */}
          <p className="text-neutral-600">
            With over 33 years of experience, our law firm offers a wide range of legal services
            tailored to meet your specific needs. Our team of dedicated lawyers is committed to
            providing personalized attention and effective legal representation.
          </p>
        </div>
      </div>
      
      {/* Services List Section */}
      <div id="service-list" className="container mx-auto px-4 pb-10">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search for services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4 text-neutral-400">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">No services found</h3>
            <p className="text-neutral-500">Try adjusting your search term or browse all services.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-4 py-2 border border-neutral-300 rounded-md text-neutral-600 hover:bg-neutral-50"
            >
              View All Services
            </button>
          </div>
        )}
      </div>
       <section className="relative py-10 lg:py-16 px-4 md:px-8 bg-neutral-950/90 text-white">
        <div
              className="absolute inset-0 z-0 bg-cover bg-center "
              style={{ backgroundImage: `url('${pattern}')`, zIndex: -1, opacity: 1 }}
            ></div>
      
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                  <span style={{ color: goldTheme }}>Get a Free Consultation</span>
                </h2>
                <p className="text-lg mb-10 max-w-2xl mx-auto">
                  For any legal query or to schedule a consultation, feel free to contact us anytime. We're here to help with your legal needs.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                  <div className="flex items-center">
                    <Phone size={34} style={{ color: goldTheme }} />
                    <div className="ml-3 text-left">
                      {/* <p className=" text-neutral-400">Call Us</p> */}
                      <a href='tel:7844830212' className="font-medium text-2xl hover:underline">+91-7844830212</a>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-center">
                    <Mail size={24} style={{ color: goldTheme }} />
                    <div className="ml-3 text-left">
                      <p className="text-sm text-neutral-400">Email Us</p>
                      <a href='emailto:justiceforallindia25@gmail.com' className="font-medium">justiceforallindia25@gmail.com</a>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
            <div className='h-1 w-full bg-white'></div>
     
    </div>
  );
};

export default ServicesPage;
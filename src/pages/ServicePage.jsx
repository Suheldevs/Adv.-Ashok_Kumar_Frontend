import React, { useState } from "react";
import { 
  Scale, 
  Heart, 
  ScrollText, 
  Home, 
  Briefcase, 
  ShoppingBag, 
  FileText, 
  Users,
  ChevronRight,
  Search,
  Phone
} from "lucide-react";
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
            With over 20 years of experience, our law firm offers a wide range of legal services
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      
      {/* Call to Action */}
      <div className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">Need Legal Assistance?</h3>
                <p className="text-neutral-600 mb-6">
                  Our experienced team is ready to assist you with any legal matters.
                  Schedule a consultation today and let us help you find the right solution.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <a 
                    href="/contact" 
                    className="px-5 py-3 rounded-md font-medium text-white transition-colors duration-300 flex items-center justify-center"
                    style={{ backgroundColor: "#ebb661" }}
                  >
                    <Phone size={18} className="mr-2" />
                    Contact Us
                  </a>
                  <a 
                    href="/about" 
                    className="px-5 py-3 border rounded-md font-medium text-neutral-700 hover:bg-neutral-50 transition-colors duration-300 flex items-center justify-center"
                  >
                    Learn About Us
                  </a>
                </div>
              </div>
              <div className="w-1/2"
              >
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

export default ServicesPage;
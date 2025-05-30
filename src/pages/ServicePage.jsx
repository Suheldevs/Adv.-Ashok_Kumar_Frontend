import React, { useState } from "react";
import { 
  Search,
  Phone
} from "lucide-react";
import pattern from '../assets/p5.jpg'
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/ServiceCard2";
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

      <div id="service-list" className="container lg:py-14 xl:py-16 py-10 mx-auto px-4 ">
       
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        
      </div>
      <section className="relative z-10 py-10 lg:py-16 xl:py-20 px-4 md:px-8  text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${pattern})`, opacity: 1,backgroundPosition:'top'  }}
        ></div>
      
        <div className='absolute z-[-1] inset-0 bg-neutral-950/70'></div>
      
              <div className="max-w-6xl  mx-auto text-center">
                <h2 className="lg:text-4xl text-2xl font-bold mb-4">
                  <span style={{ color: goldTheme }}>Get a Free Consultation</span>
                </h2>
                <p className="lg:text-lg text-base mb-10 max-w-2xl mx-auto">
                  For any legal query or to schedule a consultation, feel free to contact us anytime. We're here to help with your legal needs.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                  <div className="ml-3 text-left">
                               {/* <p className=" text-neutral-400">Call Us</p> */}
                               <a
                                 href="tel:7844830212"
                                 className="font-medium text-2xl flex items-center gap-2 tracking-wide border border-[#ebb661] rounded-xl px-4 py-2 shadow-md hover:shadow-lg hover:border-[#fdff9f] transition"
                               >
                                 <Phone size={34} style={{ color: goldTheme }} /> +91-7844830212
                               </a>
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
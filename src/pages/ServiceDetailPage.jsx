import React, {useState} from "react";
import { 
  ArrowLeft, 
  Check, 
  ChevronRight, 
  Phone, 
  Calendar, 
  Clock, 
  Mail,
} from "lucide-react";
import { useParams,Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import services from "../Data/ServiceData";
import InquiryModal from '../components/InquiryModal'

// Component to display service features
const FeatureList = ({ features }) => {
  return (
    <div className=" grid lg:grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <div key={index} className="bg-amber-50/50 rounded-lg p-4 border border-amber-100">
          <div className="flex items-start">
            <div className="bg-amber-100 flex justify-center itesm-center  rounded-full p-2 mr-3 h-12 w-12 mt-1 flex-shrink-0">
              {/* <Check size={16} className="text-amber-600" /> */}
              <div className="">{feature.icon}</div>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800 mb-2">{feature.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{feature.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


//whychose

const WhyChoose = ({items})=>{
  return(
<div>
  {items.map((item)=>(
    <div>
      <div className="flex items-center mt-1">
            <div className="bg-amber-100 rounded-full p-1 mr-3  flex-shrink-0">
              <Check size={16} className="text-amber-600" />
            </div>
            <div>
              <p className="text-neutral-600  leading-relaxed">{item}</p>
            </div>
          </div>
      </div>
  ))}
  </div>
  )
}


// Component to display FAQ items
const FAQSection = ({ faqs }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="mt-12">
      <h3 className="text-3xl play font-bold mb-6 text-neutral-800">Frequently Asked Questions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border-l-2 border-l-amber-600 self-start rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
            <button 
              onClick={() => toggleItem(index)}
              className="w-full p-6 text-left hover:bg-amber-50/50 transition-colors duration-200 flex justify-between items-center"
            >
              <h4 className="text-lg font-semibold text-neutral-800 pr-4">{faq.question}</h4>
              <ChevronRight 
                size={20} 
                className={`text-amber-600 transition-transform duration-200 flex-shrink-0 ${
                  openItems[index] ? 'rotate-90' : ''
                }`} 
              />
            </button>
            {openItems[index] && (
              <div className="px-6 py-3 bg-gray-50">
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Main ServiceDetail Component
const ServiceDetail = () => {
  const { slug } = useParams();
const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Find the service by slug
  const service = services.find(s => s.slug === slug);

  // If service is not found or page is loading
  if (!service) {
    return (
      <div className="min-h-screen bg-neutral-50/95 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 border-4 border-t-amber-500 border-neutral-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading service details...</p>
        </div>
      </div>
    );
  }
  
  return (
    
    <>
    <InquiryModal isOpen={isModalOpen} closeModal={closeModal} />
     <Breadcrumb
        title={service.title}
        items={[
          { label: "Home", link: "/" },
          { label: `Services`, link: `/services` },
        ]}
      />
    <div className="min-h-screen bg-neutral-50/95">
      

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
         <Link 
                to="/services"
                className="flex items-center  mb-6 hover:underline transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Services
              </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
             
              <div className="text-neutral-800  my-2 leading-relaxed play font-semibold text-lg lg:text-[1.4rem]">{service.icon2} {service.slog}</div>
              {/* <h2 className="text-3xl font-semibold play pt-2 pb-2 text-neutral-800">Overview</h2> */}
              <p className="text-neutral-600  leading-relaxed">
                {service.fullDescription}
              </p>
               <div className="">
                <img src={service.image} alt='service image' className="lg:h-80 h-52 my-6 rounded-2xl w-full object-cover"/>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-neutral-800">Our Services Include</h3>
              <FeatureList features={service.features} />
                 <h3 className="text-xl font-semibold mb-4 mt-6 text-neutral-800">Why Clients Trust Retd. Judge Ashok Kumar
</h3>
           {/* Why Choose  */}
<WhyChoose items={service.whyChoose}/>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-neutral-800">Need Assistance?</h3>
              <p className="text-neutral-600 mb-6">
                Our legal experts are ready to help you with your case. Schedule a consultation today.
              </p>
              <Link 
                to="/contact" 
                className="block w-full py-3 px-4 rounded-md font-medium text-white text-center transition-colors duration-300 mb-4"
                style={{ backgroundColor: "#ebb661" }}
              >
                Contact Us
              </Link>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Phone size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Call us at</p>
                    <a target="_blank" href='tel:7844830212' className="font-medium text-neutral-800">+91-7844830212</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Mail size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Email us at</p>
                    <a target="_blank" href='mailto:justiceforallindia25@gmail.com' className="font-medium text-neutral-800">justiceforallindia25@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Clock size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Business Hours</p>
                    <p className="font-medium text-neutral-800">Mon-Sun: 8:00 AM - 11:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4 text-neutral-800">Related Services</h3>
              <div className="space-y-4">
                {services
                  .filter(s => s.id !== service.id)
                  .map(relatedService => (
                    <div key={relatedService.id} className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                      <Link 
                      aria-label="Services"
                        to={`/services/${relatedService.slug}`}
                        className="flex items-center group"
                      >
                        <div className="bg-amber-50 p-2 rounded-full mr-3">
                          <div className="text-amber-600">
                            {relatedService.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-neutral-800 group-hover:text-amber-600 transition-colors">
                            {relatedService.title}
                          </h4>
                          <p className="text-sm text-neutral-500 line-clamp-1">
                            {relatedService.fullDescription.substring(0, 60)}...
                          </p>
                        </div>
                        <ChevronRight size={18} className="text-neutral-400 group-hover:text-amber-600 transition-colors" />
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Appointment Card */}
            <div className="bg-amber-50 rounded-xl shadow-sm p-8 mt-8 border border-amber-100">
              <div className="text-center">
                <Calendar size={32} className="mx-auto text-amber-600 mb-3" />
                <h3 className="text-xl font-bold mb-2 text-neutral-800">Book Free a Consultation</h3>
                <p className="text-neutral-600 mb-4">
                  Schedule a meeting with our experienced attorneys to discuss your legal needs.
                </p>
                <button
                 onClick={openModal}  
                  className="block w-full py-3 px-4 rounded-md font-medium text-white text-center transition-colors duration-300"
                  style={{ backgroundColor: "#ebb661" }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
           {/* FAQ Section */}
            <FAQSection faqs={service.faqs} />
        </div>
      </div>

     
    </div>
    </>
  );
};

export default ServiceDetail;
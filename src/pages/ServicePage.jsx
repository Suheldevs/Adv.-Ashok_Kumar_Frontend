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

// Service data with all required fields
const services = [
  {
    id: 1,
    title: "Criminal to Civil Cases",
    slug: "criminal-civil-cases",
    icon: <Scale size={24} />,
    description: "Expert legal representation for both criminal and civil cases, ensuring your rights are protected through every step of the legal process.",
    image: "/api/placeholder/600/400",
    features: ["Criminal defense", "Civil litigation", "Court representation", "Legal consultation", "Case evaluation"]
  },
  {
    id: 2,
    title: "Domestic Violence to Family Matters",
    slug: "domestic-violence-family-matters",
    icon: <Heart size={24} />,
    description: "Compassionate legal support for sensitive family issues including domestic violence cases, child custody, and other family law matters.",
    image: "/api/placeholder/600/400",
    features: ["Restraining orders", "Child custody", "Alimony cases", "Family counseling", "Legal protection"]
  },
  {
    id: 3,
    title: "Service Matter to Writ Petition",
    slug: "service-matter-writ-petition",
    icon: <ScrollText size={24} />,
    description: "Specialized expertise in service matters and writ petitions, helping you navigate complex administrative and constitutional legal challenges.",
    image: "/api/placeholder/600/400",
    features: ["Writ petitions", "Constitutional matters", "Service disputes", "Government appeals", "Administrative law"]
  },
  {
    id: 4,
    title: "Property Disputes & Documentation",
    slug: "property-disputes-documentation",
    icon: <Home size={24} />,
    description: "Comprehensive legal services for property-related disputes, transactions, and documentation to protect your real estate investments.",
    image: "/api/placeholder/600/400",
    features: ["Property litigation", "Title verification", "Real estate contracts", "Boundary disputes", "Property documentation"]
  },
  {
    id: 5,
    title: "Employment Law & Labor Rights",
    slug: "employment-law-labor-rights",
    icon: <Briefcase size={24} />,
    description: "Dedicated advocacy for employment law matters and labor rights, representing both employers and employees in workplace legal issues.",
    image: "/api/placeholder/600/400",
    features: ["Unfair dismissal", "Workplace discrimination", "Wage disputes", "Labor contracts", "Workplace safety"]
  },
  {
    id: 6,
    title: "Consumer Protection Cases",
    slug: "consumer-protection-cases",
    icon: <ShoppingBag size={24} />,
    description: "Zealous representation for consumer rights violations, helping clients seek compensation for defective products and services.",
    image: "/api/placeholder/600/400",
    features: ["Product liability", "Service complaints", "Compensation claims", "False advertising", "Consumer counseling"]
  },
  {
    id: 7,
    title: "Legal Documentation & Contracts",
    slug: "legal-documentation-contracts",
    icon: <FileText size={24} />,
    description: "Professional drafting and review of legal documents and contracts to ensure your interests are protected in all agreements.",
    image: "/api/placeholder/600/400",
    features: ["Contract drafting", "Document review", "Legal agreements", "Terms and conditions", "Legal compliance"]
  },
  {
    id: 8,
    title: "Court Marriage & Divorce Cases",
    slug: "court-marriage-divorce-cases",
    icon: <Users size={24} />,
    description: "Supportive legal guidance through court marriages and divorce proceedings, ensuring fair outcomes in marital disputes.",
    image: "/api/placeholder/600/400",
    features: ["Court marriage", "Divorce proceedings", "Asset division", "Mutual consent", "Contested divorces"]
  }
];


// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-4 bg-amber-50 p-2 rounded-full border-2" style={{ borderColor: "#ebb661" }}>
          <div className="text-amber-600">
            {service.icon}
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{service.title}</h3>
        <div className="mt-auto pt-4 flex justify-between items-center">
          <a 
            href={`/services/${service.slug}`} 
            className="flex items-center text-sm font-medium transition-colors duration-300"
            style={{ color: "#ebb661" }}
          >
            Learn More
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Services Page Component
const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Our Legal Services"
        items={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
        ]}
      />

      {/* Hero Section
      <div className="relative bg-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Expert Legal Services</h2>
            <p className="text-lg text-gray-300 mb-8">
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Comprehensive Legal Solutions
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#ebb661" }}></div>
          <p className="text-gray-600">
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
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
            <div className="mb-4 text-gray-400">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search term or browse all services.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
            >
              View All Services
            </button>
          </div>
        )}
      </div>
      
      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Need Legal Assistance?</h3>
                <p className="text-gray-600 mb-6">
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
                    className="px-5 py-3 border rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                  >
                    Learn About Us
                  </a>
                </div>
              </div>
              <div 
                className="md:w-1/2 bg-gray-800" 
                style={{ 
                  backgroundImage: "url('/api/placeholder/800/600')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
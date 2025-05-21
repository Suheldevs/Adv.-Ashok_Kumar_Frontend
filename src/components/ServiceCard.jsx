import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 text-neutral-800">{service.title}</h3>
        <div className="mt-auto  flex justify-between items-center">
          <Link
            href={`/services/${service.slug}`} 
            className="flex items-center text-sm font-medium transition-colors duration-300"
            style={{ color: "#ebb661" }}
          >
            Learn More
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard
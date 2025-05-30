import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center mb-3">
          <div className="bg-amber-50 p-2 rounded-full mr-3">
            <div className="text-amber-600">
              {service.icon}
            </div>
          </div>
          <h3 className="lg:text-xl text-lg font-semibold text-neutral-800 group-hover:text-amber-600 transition-colors duration-200">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-neutral-600 mb-6 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Button */}
        <Link 
          to={`/services/${service.slug}`}
          className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 group-hover:shadow-md"
          style={{ backgroundColor: "#ebb661" }}
        >
          Learn More
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
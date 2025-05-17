import { ArrowRight, MapPin, Globe, Phone, Award, CheckCircle, Users } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const goldColor = "#ebb661";
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Small About Us label */}
        <div className="mb-2">
          <span style={{ color: goldColor }} className="text-sm font-medium uppercase tracking-wider">About Us</span>
        </div>
        
        {/* Main Headline */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            More Than Just Lawyers
            <span className="block">—Your Legal Partners</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We're your legal partners, with a deep commitment to justice and a client-first
            approach, we guide individuals, families, and businesses.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Stats Column */}
          <div className="lg:col-span-3">
            <div className="space-y-12">
              {/* Stat 1 */}
              <div>
                <h3 className="text-6xl font-bold mb-2" style={{ color: goldColor }}>25+</h3>
                <div className="w-20 h-1 bg-gray-300 mb-3"></div>
                <p className="text-gray-700 font-medium">Years of Legal Experience</p>
              </div>
              
              {/* Stat 2 */}
              <div>
                <h3 className="text-6xl font-bold mb-2" style={{ color: goldColor }}>250+</h3>
                <div className="w-20 h-1 bg-gray-300 mb-3"></div>
                <p className="text-gray-700 font-medium">Completed Legal Matters</p>
              </div>
              
              {/* Stat 3 */}
              <div>
                <h3 className="text-6xl font-bold mb-2" style={{ color: goldColor }}>96%</h3>
                <div className="w-20 h-1 bg-gray-300 mb-3"></div>
                <p className="text-gray-700 font-medium">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
          
          {/* Center Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://picsum.photos/600/400?random=1" 
                  alt="Legal consultation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating image */}
              <div className="absolute -bottom-12 -right-12 w-64 h-56 rounded-lg overflow-hidden shadow-xl hidden md:block">
                <img 
                  src="https://picsum.photos/300/250?random=2" 
                  alt="Legal consultation" 
                  className="w-full h-full object-cover"
                />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
                    style={{ backgroundColor: goldColor }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <svg 
                      className={`w-6 h-6 text-white transition-transform duration-300 ${isHovered ? 'transform translate-x-0.5' : ''}`} 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Badge */}
              <div 
                className="absolute -top-6 -left-6 w-32 h-32 rounded-full lg:flex items-center justify-center shadow-xl text-center p-4 hidden md:flex"
                style={{ backgroundColor: goldColor }}
              >
                <div>
                  <Award className="w-8 h-8 text-gray-900 mx-auto mb-1" />
                  <p className="text-gray-900 font-bold text-sm">Top Rated Advocate</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Contact/Features Column */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Features */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <CheckCircle size={20} style={{ color: goldColor }} className="mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Expert Legal Advice</p>
                </div>
                <div className="flex items-start mb-4">
                  <CheckCircle size={20} style={{ color: goldColor }} className="mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Personalized Attention</p>
                </div>
                <div className="flex items-start mb-4">
                  <CheckCircle size={20} style={{ color: goldColor }} className="mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Transparent Communication</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} style={{ color: goldColor }} className="mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Result-Oriented Approach</p>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-start mb-4">
                  <MapPin size={20} style={{ color: goldColor }} className="mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">KLLG St. No.99, Pku City, ID 28289</p>
                </div>
                <div className="flex items-start mb-4">
                  <Globe size={20} style={{ color: goldColor }} className="mr-2 mt-1 flex-shrink-0" />
                  <a href="#" className="text-gray-700 hover:text-gray-900">www.ashok-kumar-advocate.com</a>
                </div>
                <div className="flex items-start">
                  <Phone size={20} style={{ color: goldColor }} className="mr-2 mt-1 flex-shrink-0" />
                  <a href="tel:+910761852398" className="text-gray-700 hover:text-gray-900">0761-8523-398</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Discover More Button */}
        <div className="mt-16 flex justify-end">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-md text-white font-medium transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "#1d1d35" }}
          >
            Discover more
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
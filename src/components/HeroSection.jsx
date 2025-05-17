import { Play, Facebook, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="bg-gray-900 h-screen flex flex-row justify-center items-center text-white relative overflow-hidden">
      <div className="container pt-20 mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Content Area */}
        <div className="lg:w-1/2 z-10 mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span style={{ color: "#ebb661" }}>Smart Legal</span> <br />
            <span style={{ color: "#ebb661" }}>Solutions</span> for <br />
            Work and Life
          </h1>
          
          <p className="text-gray-300 text-lg max-w-lg mb-8">
            We provide reliable legal support for both your personal
            and professional needs. We stand by your side with trusted
            guidance.
          </p>
          
          <button style={{ backgroundColor: "#ebb661" }} className="hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-md flex items-center transition duration-300">
            Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        {/* Right Image Area */}
        <div className="lg:w-1/2 relative z-10">
          <div className="relative">
            {/* Blurred background circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-gray-800 blur-2xl opacity-50"></div>
            
            <img 
              src="https://kits.rometheme.net/protego/wp-content/uploads/sites/47/2025/05/image-1.webp" 
              alt="Mr. Ashok Kumar" 
              className="rounded-md mx-auto h-96 relative z-10"
            />
            
            {/* Experience Badge */}
            <div className="absolute -right-4 top-1/4 z-20" style={{ backgroundColor: "#ebb661" }}>
              <div className="text-gray-900 p-4 rounded-md shadow-lg">
                <div className="text-6xl font-bold">15+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      
      {/* Social media icons */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300">
          <Facebook size={20} />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300">
          <Twitter size={20} />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300">
          <Youtube size={20} />
        </a>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent opacity-90"></div>
    </div>
  );
}
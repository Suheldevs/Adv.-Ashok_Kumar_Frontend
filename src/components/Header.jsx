import { Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const goldColor = "#ebb661";
  
const navItem = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Services', link: '/services' },
  { label: 'Gallery', link: '/gallery' },
  { label: 'Blog', link: '/blog' },
  { label: 'Contact Us', link: '/contact' }
];

  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 bg-opacity-95' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12 border-2 flex items-center justify-center mr-2" style={{ borderColor: goldColor }}>
              <span className="text-white font-bold text-xl">AK</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Ashok Kumar</h1>
              <p className="text-sm" style={{ color: goldColor }}>ADVOCATE & RETIRED JUDGE</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItem.map((item) => (
                <li key={item}>
                  <Link 
                    to={item.link} 
                    className="text-white text-sm font-medium uppercase tracking-wider hover:text-opacity-70 transition-all duration-300 hover:border-b-2 pb-1"
                    style={{ hoverBorderColor: goldColor }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Right Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+919876543210" className="flex items-center text-white group">
              <div className="p-2 rounded-full mr-2 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: goldColor }}>
                <Phone size={16} className="text-gray-900" />
              </div>
              <div>
                <p className="text-xs opacity-70">Call us now</p>
                <p className="font-bold">+91 9876 543 210</p>
              </div>
            </a>
            
            <button 
              className="px-6 py-2 text-gray-900 font-semibold rounded-md"
              style={{ backgroundColor: goldColor }}
            >
              BOOK CONSULTATION
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Hidden by default */}
      <div className="hidden md:hidden bg-gray-900 bg-opacity-95">
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-white font-medium py-2 border-b border-gray-800 hover:text-opacity-70"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 flex flex-col space-y-4">
            <a href="tel:+919876543210" className="flex items-center text-white">
              <Phone size={16} className="mr-2" style={{ color: goldColor }} />
              <span>+91 9876 543 210</span>
            </a>
            
            <button 
              className="w-full px-4 py-2 text-center text-gray-900 font-semibold rounded-md"
              style={{ backgroundColor: goldColor }}
            >
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
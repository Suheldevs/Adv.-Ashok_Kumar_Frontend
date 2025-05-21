import { Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// InquiryModal is imported in the original but not shown here
// We'll assume it exists and works as expected
function InquiryModal({ isOpen, closeModal }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Book Consultation</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="tel" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full border rounded p-2 h-24"></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={closeModal} className="px-4 py-2 bg-neutral-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-yellow-600 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
  
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Blog', link: '/blog' },
    { label: 'Contact Us', link: '/contact' }
  ];

  return (
    <>
      <InquiryModal isOpen={isModalOpen} closeModal={closeModal} />
      
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/95' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-10 w-10 md:h-12 md:w-12 border-2 flex items-center justify-center mr-2" style={{ borderColor: goldColor }}>
                <span className="text-white font-bold text-lg md:text-xl">AK</span>
              </div>
              <div>
                <h1 className="text-white text-lg md:text-xl font-bold">Ashok Kumar</h1>
                <p className="text-xs md:text-sm" style={{ color: goldColor }}>ADVOCATE & RETIRED JUDGE</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex space-x-4 lg:space-x-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.link} 
                      className="text-white text-sm font-medium uppercase tracking-wider hover:text-opacity-70 transition-all duration-300 hover:border-b-2 pb-1"
                      style={{ borderColor: goldColor }}
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
                <div className="p-2 rounded-full mr-2 group-hover:text-neutral-900 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: goldColor }}>
                  <Phone size={16} className="text-neutral-900" />
                </div>
                <div>
                  <p className="text-xs opacity-70">Call us now</p>
                  <p className="font-bold">+91 9876 543 210</p>
                </div>
              </a>
              
              <button 
                className="px-6 py-2 text-neutral-900 font-semibold rounded-md"
                onClick={openModal}
                style={{ backgroundColor: goldColor }}
              >
                BOOK CONSULTATION
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="p-2 text-white focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation - Toggleable */}
        <div className={`md:hidden bg-neutral-900 bg-opacity-95 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link}
                    className="block text-white font-medium py-2 border-b border-neutral-800 hover:text-opacity-70"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 flex flex-col space-y-4">
              <a href="tel:+919876543210" className="flex items-center text-white">
                <Phone size={16} className="mr-2" style={{ color: goldColor }} />
                <span>+91 9876 543 210</span>
              </a>
              
              <button 
                className="w-full px-4 py-2 text-center text-neutral-900 font-semibold rounded-md"
                style={{ backgroundColor: goldColor }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
              >
                BOOK CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
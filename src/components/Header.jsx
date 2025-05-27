import { Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo(2).png'
import InquiryModal from './InquiryModal'
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
    { label: 'About Us', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Blog', link: '/blog' },
    { label: 'Contact Us', link: '/contact' }
  ];

  return (
    <>
      <InquiryModal isOpen={isModalOpen} closeModal={closeModal} />
      
      <header className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/95' : 'lg:bg-transparent bg-neutral-950/95'}`}>
        <div className="container mx-auto px-4 ">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex relative items-center">
              <Link to='/' className=" absolute lg:mt-14  h-14 w-14 md:h-24 md:w-24 border p-1 rounded-2xl border-neutral-500 backdrop-blur-2xl bg-neutral-950  flex items-center justify-center mr-2" style={{ borderColor: goldColor }}>
               <img src={logo} alt='Logo'/>
              </Link>
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
              <a href="tel:7844830212" className="flex items-center text-white group">
                <div className="p-2 rounded-full mr-2 group-hover:text-neutral-900 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: goldColor }}>
                  <Phone size={16} className="text-neutral-900" />
                </div>
                <div>
                  <p className="text-xs opacity-70">Call us now</p>
                  <p className="font-bold">+91-7844830212</p>
                </div>
              </a>
              
              <button 
              aria-label="Book Consultation"
                className="px-6 py-2 cursor-pointer text-neutral-900 font-semibold rounded-md"
                onClick={openModal}
                style={{ backgroundColor: goldColor }}
              >
                BOOK CONSULTATION
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
              aria-level="menu"
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
              <a href="tel:7844830212" className="flex items-center text-white">
                <Phone size={16} className="mr-2" style={{ color: goldColor }} />
                <span>+91 7844830212</span>
              </a>
              
              <button 
              aria-label="Book Consultation"
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
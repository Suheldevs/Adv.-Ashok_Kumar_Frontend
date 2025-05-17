import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ashok Kumar</h3>
            <div className="h-1 w-12 bg-amber-600 mb-4"></div>
            <p className="text-gray-400 mb-4">
              With over 30 years of judicial experience and legal expertise, 
              Judge Ashok Kumar provides comprehensive legal consultation and 
              representation services across various practice areas.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-gray-800 hover:bg-amber-600 transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Practice Areas</h3>
            <div className="h-1 w-12 bg-amber-600 mb-4"></div>
            <ul className="space-y-2">
              {[
                "Corporate Law",
                "Civil Litigation",
                "Family Law",
                "Criminal Defense",
                "Property Law",
                "Constitutional Matters",
                "Arbitration & Mediation"
              ].map((area, index) => (
                <li key={index} className="flex items-center group">
                  <ArrowRight size={16} className="text-amber-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{area}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="h-1 w-12 bg-amber-600 mb-4"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Supreme Court Complex, 
                  <br />Tilak Marg, New Delhi - 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-amber-500 mr-3 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-amber-500 mr-3 flex-shrink-0" />
                <a href="mailto:contact@ashokumar.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@ashokumar.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal Updates</h3>
            <div className="h-1 w-12 bg-amber-600 mb-4"></div>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest legal updates and insights.
            </p>
            <div className="mt-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  onClick={() => alert('Subscription functionality would go here')}
                  className="bg-amber-600 hover:bg-amber-700 transition-colors text-white p-3 rounded-md font-medium flex items-center justify-center"
                >
                  <span>Subscribe</span>
                  <Send size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Judge Ashok Kumar. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
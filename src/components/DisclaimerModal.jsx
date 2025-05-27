import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import logo from '../assets/logo(2).png'
const DisclaimerModal = () => {
  const [showModal, setShowModal] = useState(true);
useEffect(() => {
  const hasAgreed = localStorage.getItem('isclaimerAgreed');
  if (hasAgreed === 'true') {
    setShowModal(false);
  }
}, []);

  const handleAgree = () => {
     localStorage.setItem('disclaimerAgreed', 'true');
    setShowModal(false);
    console.log("User agreed to disclaimer"); 
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  if (!showModal) {
    return null ;
  }

  return (
    <div className="fixed  inset-0 bg-black/80 backdrop-blur-[5px] flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="bg-neutral-950 lg:max-h-[100vh] max-h-[95vh] overflow-y-auto  border border-white/60 max-w-[45rem] w-full lg:mx-4 mx-2 lg:p-6 p-2 relative">
        
        {/* Logo and Title */}
        <div className="text-center mb-2">
          {/* Logo - Golden scales of justice */}
          <div className="flex justify-center mb-2">
            <img src={logo} alt="Logo" className="h-24 border p-2 rounded-full border-[#ebb661] "/>
          </div>

          <h3 className="text-[#ebb661] text-4xl font-bold mb-4">Disclaimer</h3>
        </div>

        {/* Content */}
        <div className="text-white/80 text-sm leading-relaxed space-y-4 mb-4">
          <p className="mb-2">
            The Bar Council of India does not permit the solicitation of work and advertising by legal practitioners/advocates. By accessing our website, the user acknowledges that:
          </p>
          
          <div className="space-y-2 pl-4">
            <div className="flex items-start">
              <span className="text-[#ebb661] mr-3 mt-1 text-lg font-bold">1.</span>
              <p>The user wishes to gain more information about us for his/her information and use. He/she also acknowledges that there has been no attempt by us to advertise or solicit work.</p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#ebb661] mr-3 mt-1 text-lg font-bold">2.</span>
              <p>Any information obtained or downloaded from our website does not lead to the creation of the Advocate – Client relationship between our Law Firm and the User.</p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#ebb661] mr-3 mt-1 text-lg font-bold">3.</span>
              <p>None of the information contained in our website amounts to any form of legal opinion or legal advice.</p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#ebb661] mr-3 mt-1 text-lg font-bold">4.</span>
              <p>Our website uses cookies to improve your user experience. By using our site, you agree to our use of cookies. To find out more, please see our Cookies Policy & Privacy Policy.</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button aria-label="Agree"
            onClick={handleAgree}
            className="bg-transparent border border-[#ebb661] text-[#ebb661] px-8 py-3 hover:bg-[#ebb661] hover:text-black transition-all duration-300 flex items-center space-x-2 font-medium"
          >
            <span>I AGREE</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
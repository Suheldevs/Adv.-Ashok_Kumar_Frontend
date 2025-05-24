import { useState, useEffect } from "react";
import { Shield, AlertTriangle, Check, X, Scale } from "lucide-react";

const DisclaimerModal = () => {
  const [showModal, setShowModal] = useState(true);
  const goldTheme = "#ebb661";

  const handleAgree = () => {
    setShowModal(false); // Proceed to website
  };

  const handleCancel = () => {
    window.history.back(); // Go back
  };

  useEffect(() => {
    // Optional: prevent scrolling when modal is open
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-black/50"></div>
      
      {/* Modal */}
      <div className="relative bg-white/95 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl max-w-lg w-full mx-4 text-center space-y-6 transform animate-in">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-t-3xl"></div>
        
        {/* Icon */}
        <div className="relative">
          <div 
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-lg relative"
            style={{ backgroundColor: goldTheme }}
          >
            <Scale size={40} className="text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <AlertTriangle size={16} className="text-amber-600" />
          </div>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-neutral-800">Legal Disclaimer</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: goldTheme }}></div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="bg-neutral-50/80 backdrop-blur-sm p-4 rounded-xl border border-neutral-200/50">
            <div className="flex items-start space-x-3">
              <Shield size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-neutral-700 leading-relaxed">
                  This website is dedicated to <span className="font-semibold" style={{ color: goldTheme }}>Retired Judge Ashok Kumar</span> and serves as a professional legal services platform.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-neutral-600 space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
              <span>Content is for informational purposes only</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
              <span>Professional legal consultation and services available</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
              <span>By proceeding, you acknowledge these terms</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
          <button
            onClick={handleAgree}
            className="group relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
            style={{ backgroundColor: goldTheme }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Check size={18} className="relative z-10" />
            <span className="relative z-10">I Understand & Proceed</span>
          </button>
          
          <button
            onClick={handleCancel}
            className="group relative overflow-hidden bg-neutral-200 hover:bg-neutral-300 text-neutral-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <X size={18} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Footer note */}
        <div className="pt-4 border-t border-neutral-200/50">
          <p className="text-xs text-neutral-500">
            Professional legal services • Confidential consultation • Experienced representation
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
import React from 'react';
import { ArrowLeft, Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
     <div className='h-32 bg-neutral-950 w-full'></div>
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
      <div className="max-w-lg w-full">
        <div className="text-center">
          {/* Animated Error Icon */}
          <div className="mb-6 inline-flex">
            <AlertCircle size={48} className="text-[#ebb661] animate-pulse" />
          </div>
          
          {/* 404 Text */}
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#ebb661] to-[#ebb661] bg-clip-text text-transparent mb-2">
            404
          </h1>
          
          <h2 className="text-2xl font-semibold text-neutral-700 mb-3">
            Page Not Found
          </h2>
          
          <p className="text-neutral-500 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="flex items-center justify-center gap-2 bg-[#ebb661] hover:bg-[#ebb961] text-white py-3 px-6 rounded-lg font-medium shadow-lg shadow-[#ebb661]/20 transition-all duration-200 w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
            
            <Link 
            to='/'
              className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#ebb661] border border-neutral-200 py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
             
            >
              <Home size={20} />
              Home Page
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-[#ebb661] to-red-300 rounded-full" />
        </div>
      </div>
    </div>
    </>
  );
};

export default PageNotFound;
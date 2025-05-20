import React from 'react';
// import breadcrumbBg from '../assets/Home/breadcrum.png';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import bread from '../assets/bread.webp'
function Breadcrumb({ title, items }) {
  return (
    <div
      className="relative lg:h-[400px] h-[300px] w-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bread})` }}
    >
      {/* Overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div>
      
      {/* Bottom Left Content */}
      <div className="absolute bottom-10 left-8 text-white max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:text-6xl text-4xl font-bold tracking-tight"
        >
          {title}
        </motion.h1>
        
        {/* Breadcrumb Navigation */}
        {items && (
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-center text-sm lg:text-base text-gray-200"
          >
            {items?.map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.link}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
                {/* Only show arrow if it's not the last item */}
                {index < items.length - 1 && (
                  <FaChevronRight className="mx-3 text-xs text-gray-400" />
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}

export default Breadcrumb;
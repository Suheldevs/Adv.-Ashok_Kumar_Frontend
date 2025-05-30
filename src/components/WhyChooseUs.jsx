import { Award, Scale, Users, Shield, Clock, Heart } from 'lucide-react'
import React from 'react'

function WhyChooseUs() {
  const goldTheme = "#ebb661";
  
  const features = [
    {
      icon: <Award size={40} />,
      title: "Judicial Excellence",
      description: "With over 33 years in the judiciary, bringing unparalleled insights and expertise to each case."
    },
    {
      icon: <Users size={40} />,
      title: "Client-Centric Approach", 
      description: "We stand with our clients as allies, providing guidance and support throughout every step."
    },
    {
      icon: <Scale size={40} />,
      title: "Accessible Justice",
      description: "Quality legal representation available to everyone, regardless of financial circumstance."
    },
    {
      icon: <Shield size={40} />,
      title: "Proven Track Record",
      description: "Consistent success in complex legal matters with a reputation for thorough preparation."
    },
    {
      icon: <Clock size={40} />,
      title: "Timely Resolution",
      description: "Efficient case handling that saves valuable time and reduces unnecessary court proceedings."
    },
    {
      icon: <Heart size={40} />,
      title: "Compassionate Service",
      description: "Understanding the human side of legal issues with empathy and professional care."
    }
  ];

  return (
    <section className="relative py-14 px-4 md:px-8 bg-gradient-to-br from-neutral-50/95 to-white/95">
      <div className="container lg:px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 relative inline-block text-neutral-800">
            <span className="relative play z-10">Why Choose Us</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-opacity-30 " style={{ backgroundColor: goldTheme }}></span>
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto text-lg  leading-relaxed">
            With decades of judicial experience and a commitment to accessible justice,
            we provide exceptional legal services tailored to your unique needs.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group border border-neutral-300 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 "
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: goldTheme }}
                >
                  {feature.icon}
                </div>
                <div 
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: goldTheme }}
                ></div>
              </div>
              
              {/* Content */}
              <h3 className="lg:text-2xl text-xl font-bold mb-4 text-neutral-800 group-hover:text-neutral-900 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Decorative line */}
              <div className="mt-6 h-1 w-0 group-hover:w-12 rounded-full transition-all duration-500" style={{ backgroundColor: goldTheme }}></div>
            </div>
          ))}
        </div>
        
        {/* Quote Section */}
        <div className="relative">
          <div 
            className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-10 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <Scale size={256} className="text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/6 mb-8 lg:mb-0 flex justify-center">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-white/20"
                    style={{ backgroundColor: goldTheme }}
                  >
                    <Award size={40} className="text-white" />
                  </div>
                </div>
                <div className="lg:w-5/6 lg:pl-10 text-center lg:text-left">
                  <blockquote className="text-xl lg:text-2xl italic text-white/90 leading-relaxed mb-6">
                    "I believe that if a person receives the right legal advice at the right time, their case won't be stretched unnecessarily in court. It can be resolved efficiently, reducing pressure on all parties while saving valuable time and money."
                  </blockquote>
                  <p className="text-lg font-semibold text-white z-50 flex items-center justify-center lg:justify-start">
                    <span className="w-12 h-0.5 mr-4 rounded-full" style={{ backgroundColor: goldTheme }}></span>
                    <strong className='text-white'>Retd. Judge Ashok Kumar</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
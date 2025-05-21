import { Award, Scale, Users } from 'lucide-react'
import React from 'react'

function WhyChooseUs() {
     const goldTheme = "#ebb661";
  return (
    <div>
           <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">Why Choose Us</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-opacity-40" style={{ backgroundColor: goldTheme }}></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              With decades of judicial experience and a commitment to accessible justice,
              we provide exceptional legal services tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <img src="https://picsum.photos/400/320?random=9" alt="Experience" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award size={64} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: goldTheme }}>Judicial Excellence</h3>
                <p className="text-gray-600 mb-4">
                  With over 33 years in the judiciary, Judge Ashok Kumar brings unparalleled insights and expertise to each case, ensuring thorough legal representation.
                </p>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Former High Court Judge</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Profound understanding of law</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Respected legal authority</span>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 bg-opacity-30"></div>
                <img src="https://picsum.photos/400/320?random=3" alt="Professional Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users size={64} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: goldTheme }}>Client-Centered Approach</h3>
                <p className="text-gray-600 mb-4">
                  We don't just represent clients—we stand with them as allies, providing guidance and support throughout every step of the legal process.
                </p>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Compassionate consultation</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Transparent communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Dedicated personal attention</span>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 bg-opacity-30"></div>
                <img src="https://picsum.photos/400/320?random=2" alt="Affordable Justice" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Scale size={64} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: goldTheme }}>Accessible Justice</h3>
                <p className="text-gray-600 mb-4">
                  We believe that quality legal representation should be available to everyone, regardless of financial circumstance or social background.
                </p>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Affordable fee structure</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Timely case resolution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldTheme }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Commitment to justice for all</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial/Quote */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: goldTheme }}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src="https://picsum.photos/200/200?random=2" alt="Justice Symbol" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <blockquote className="text-lg italic text-gray-600">
                  "I believe that if a person receives the right legal advice at the right time, their case won't be stretched unnecessarily in court. It can be resolved efficiently, reducing pressure on all parties while saving valuable time and money."
                </blockquote>
                <p className="mt-4 font-semibold" style={{ color: goldTheme }}>— Retd. Judge Ashok Kumar</p>
              </div>
            </div>
          </div>
          
        
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUs
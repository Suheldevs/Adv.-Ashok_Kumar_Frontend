import React from 'react';
import { BookOpen, Scale, Clock, Phone, Mail, Award, Users, Building, Shield } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutUs() {
  const goldTheme = "#ebb661";
  
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative py-16 px-4 md:px-8 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span>
            <span style={{ color: goldTheme }}> Judge Ashok Kumar</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Over 33 years of judicial experience now dedicated to providing accessible legal counsel at Lucknow High Court
          </p>
          <div className="flex items-center space-x-2">
            <Scale style={{ color: goldTheme }} size={28} />
            <span className="text-sm md:text-base font-medium">Justice For All India</span>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src="/api/placeholder/400/320" alt="Judge Ashok Kumar" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold" style={{ color: goldTheme }}>Retd. Judge Ashok Kumar</h3>
                <p className="text-gray-600">Advocate, Lucknow High Court</p>
                <div className="mt-4 flex items-center">
                  <Award size={18} style={{ color: goldTheme }} />
                  <span className="ml-2 text-gray-700">33+ Years in Judiciary</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-6">
              <span className="border-b-4 pb-2" style={{ borderColor: goldTheme }}>Legal Expertise & Mission</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With more than 33 years of service in the Judiciary, Mr. Ashok Kumar has dedicated himself to helping people navigate complex legal challenges. He believes that timely and accurate legal advice can significantly reduce case duration, saving clients both time and money while minimizing stress.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Working alongside a professional team, Mr. Kumar approaches each case not only as an advocate but as a trusted ally standing with clients throughout their legal journey. His mission is to make quality legal services accessible to every section of society at the most affordable cost possible.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gray-100" style={{ color: goldTheme }}>
                  <Clock size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Efficient Resolution</h4>
                  <p className="text-gray-600">Focused on timely case completion to reduce client burden</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gray-100" style={{ color: goldTheme }}>
                  <Users size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Client Partnership</h4>
                  <p className="text-gray-600">Working as a friend and ally throughout legal proceedings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 pb-2" style={{ borderColor: goldTheme }}>Areas of Practice</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" style={{ backgroundColor: `${goldTheme}20` }}>
                <Scale size={24} style={{ color: goldTheme }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Criminal & Civil Cases</h3>
              <p className="text-gray-600">Comprehensive representation for all criminal and civil legal matters</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" style={{ backgroundColor: `${goldTheme}20` }}>
                <Users size={24} style={{ color: goldTheme }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Matters</h3>
              <p className="text-gray-600">Sensitive handling of domestic violence and family-related legal issues</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" style={{ backgroundColor: `${goldTheme}20` }}>
                <Building size={24} style={{ color: goldTheme }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service & Writ Petitions</h3>
              <p className="text-gray-600">Expert guidance on service matters and writ petition procedures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Section */}

   <WhyChooseUs/>

  {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>33+</div>
              <p className="text-gray-600">Years in Judiciary</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>100s</div>
              <p className="text-gray-600">Cases Resolved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>24/7</div>
              <p className="text-gray-600">Client Support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>100%</div>
              <p className="text-gray-600">Client Dedication</p>
            </div>
          </div>
      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span style={{ color: goldTheme }}>Get in Touch</span>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            For any legal query or to schedule a consultation, feel free to contact us anytime. We're here to help with your legal needs.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center">
              <Phone size={24} style={{ color: goldTheme }} />
              <div className="ml-3 text-left">
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="font-medium">7844830212, 9453578200</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail size={24} style={{ color: goldTheme }} />
              <div className="ml-3 text-left">
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="font-medium">justiceforallindia25@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='h-2 w-full bg-white'></div>
    </div>
  );
}
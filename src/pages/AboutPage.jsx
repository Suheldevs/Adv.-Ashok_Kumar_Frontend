import React from "react";
import {
  BookOpen,
  Scale,
  Clock,
  Phone,
  Mail,
  Award,
  Users,
  Building,
  Shield,
} from "lucide-react";
import { FileText, Building2, Heart, Home } from "lucide-react";
import WhyChooseUs from "../components/WhyChooseUs";
import image from "../assets/Home/aboutPage.webp";
import pattern from "../assets/p5.jpg";
import serviceData from "../Data/ServiceData";
import ServiceCard from "../components/ServiceCard";
export default function AboutUs() {
  const goldTheme = "#ebb661";
  return (
    <div className="bg-neutral-100/95">
      {/* Hero Section */}
      <section className="relative py-16 pt-40 px-4 md:px-8 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span>
            <span style={{ color: goldTheme }}> <strong>Retd. Judge Ashok Kumar</strong></span>
          </h1>

          <div className="flex items-center space-x-2">
            <Scale style={{ color: goldTheme }} size={28} />
            <span className="text-sm md:text-base font-medium">
              Justice For All India
            </span>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:gap-12 gap-4">
          <div className="md:w-1/3">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="lg:h-64 bg-neutral-200 flex items-center justify-center">
                <img
                  src={image}
                  alt="Judge Ashok Kumar"
                  className="object-cover lg:h-64"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: goldTheme }}
                >
                  <strong>Retd. Judge Ashok Kumar</strong>
                </h3>
                <p className="text-neutral-600">Advocate, Lucknow High Court</p>
                <div className="mt-4 flex items-center">
                  <Award size={18} style={{ color: goldTheme }} />
                  <span className="ml-2 text-neutral-700">
                    33+ Years in Judiciary
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 mt-8 md:mt-0">
            <h2 className="lg:text-3xl text-2xl font-bold mb-6">
              <span
                className="border-b-4 pb-2"
                style={{ borderColor: goldTheme }}
              >
                Legal Expertise & Mission
              </span>
            </h2>

            <p className="text-neutral-700 text-justify mb-4 lg:mb-6 leading-relaxed">
              With more than 33 years of service in the Judiciary, Mr. Ashok
              Kumar has dedicated himself to helping people navigate complex
              legal challenges. He believes that timely and accurate legal
              advice can significantly reduce case duration, saving clients both
              time and money while minimizing stress.
            </p>

            <p className="text-neutral-700 text-justify mb-4 lg:mb-6 leading-relaxed">
              Working alongside a professional team, Mr. Kumar approaches each
              case not only as an advocate but as a trusted ally standing with
              clients throughout their legal journey. His mission is to make
              quality legal services accessible to every section of society at
              the most affordable cost possible.
            </p>

            <p className="text-neutral-700 text-justify mb-4 lg:mb-6 leading-relaxed">
              His commitment to ethical practices and continuous legal education
              ensures that every client receives up-to-date advice grounded in
              both legal precedent and practical wisdom. This approach fosters
              trust, transparency, and long-term relationships with those he
              serves.
            </p>

            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-neutral-100" style={{ color: goldTheme }}>
                  <Clock size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Efficient Resolution</h4>
                  <p className="text-neutral-600">Focused on timely case completion to reduce client burden</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-neutral-100" style={{ color: goldTheme }}>
                  <Users size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Client Partnership</h4>
                  <p className="text-neutral-600">Working as a friend and ally throughout legal proceedings</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 lg:px-8 px-4">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center border border-gray-200">
          <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>
            33+
          </div>
          <p className="text-neutral-600">Years in Judiciary</p>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center border border-gray-200">
          <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>
            450+
          </div>
          <p className="text-neutral-600">Cases Resolved</p>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center border border-gray-200">
          <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>
            24/7
          </div>
          <p className="text-neutral-600">Client Support</p>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center border border-gray-200">
          <div className="text-4xl font-bold mb-2" style={{ color: goldTheme }}>
            100%
          </div>
          <p className="text-neutral-600">Client Dedication</p>
        </div>
      </div>
      {/* Areas of Practice */}
      <section className="py-16 px-4 md:px-12 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="lg:text-3xl text-2xl font-bold text-center mb-10">
            <span
              className="border-b-4 pb-2"
              style={{ borderColor: goldTheme }}
            >
              Areas of Practice
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
            {serviceData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div 
              className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" 
              style={{ backgroundColor: `${goldTheme}20` }}
            >
              <Scale size={24} style={{ color: goldTheme }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Court</h3>
            <p className="text-neutral-600">
              Comprehensive family law services including matrimonial disputes, custody matters, and domestic relations
            </p>
          </div>
         
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div 
              className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" 
              style={{ backgroundColor: `${goldTheme}20` }}
            >
              <Shield size={24} style={{ color: goldTheme }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Criminal Lawyer</h3>
            <p className="text-neutral-600">
              Expert defense representation for criminal cases, bail applications, and criminal litigation
            </p>
          </div>
         
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div 
              className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" 
              style={{ backgroundColor: `${goldTheme}20` }}
            >
              <FileText size={24} style={{ color: goldTheme }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Civil Law Disputes</h3>
            <p className="text-neutral-600">
              Resolution of civil disputes, contract disputes, property matters, and civil litigation services
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div 
              className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" 
              style={{ backgroundColor: `${goldTheme}20` }}
            >
              <Building2 size={24} style={{ color: goldTheme }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Corporate Lawyer</h3>
            <p className="text-neutral-600">
              Corporate legal services, business compliance, contracts, mergers, and commercial law matters
            </p>
          </div>
         
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div 
              className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" 
              style={{ backgroundColor: `${goldTheme}20` }}
            >
              <Heart size={24} style={{ color: goldTheme }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Divorce Lawyer</h3>
            <p className="text-neutral-600">
              Sensitive handling of divorce proceedings, alimony, child custody, and marital dispute resolution
            </p>
          </div>
         
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div 
              className="mb-4 rounded-full w-12 h-12 flex items-center justify-center" 
              style={{ backgroundColor: `${goldTheme}20` }}
            >
              <Home size={24} style={{ color: goldTheme }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Lawyer</h3>
            <p className="text-neutral-600">
              Real estate law, property disputes, documentation, registration, and property transaction guidance
            </p>
          </div>
        </div> */}
        </div>
      </section>

      {/* Why Choose Us - Enhanced Section */}
      <div className="">
        <WhyChooseUs />
      </div>

      {/* Contact CTA */}
      <section className="relative z-10 py-10 lg:py-16 xl:py-20 px-4 md:px-8  text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${pattern})`, opacity: 1, backgroundPosition:'top' }}
        ></div>

        <div className="absolute z-[-1] inset-0 bg-neutral-950/70"></div>

        <div className="max-w-6xl  mx-auto text-center">
          <h2 className="lg:text-4xl text-2xl font-bold mb-4">
            <span style={{ color: goldTheme }}>Get a Free Consultation</span>
          </h2>
          <p className="lg:text-lg text-base mb-10 max-w-2xl mx-auto">
            For any legal query or to schedule a consultation, feel free to
            contact us anytime. We're here to help with your legal needs.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="ml-3 text-left">
              {/* <p className=" text-neutral-400">Call Us</p> */}
              <a
                href="tel:7844830212"
                className="font-medium text-2xl flex items-center gap-2 tracking-wide border border-[#ebb661] rounded-xl px-4 py-2 shadow-md hover:shadow-lg hover:border-[#fdff9f] transition"
              >
                <Phone size={34} style={{ color: goldTheme }} /> +91-7844830212
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="h-1 w-full bg-white"></div>
    </div>
  );
}

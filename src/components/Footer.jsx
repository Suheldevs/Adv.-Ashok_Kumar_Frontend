import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo(2).png";
import serviceData from "../Data/ServiceData";
import { Link } from "react-router-dom";
import cclogo from "../assets/cclogo-suhel.webp";
import { FaXTwitter } from "react-icons/fa6";
import pattern from "../assets/p1.webp";
import InquiryModal from "./InquiryModal";
import { useState } from "react";
export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const currentYear = new Date().getFullYear();
  const goldColor = "#ebb661";
  return (
    <>
      <InquiryModal isOpen={isModalOpen} closeModal={closeModal} />
      <footer className="relative bg-neutral-950/95 overflow-hidden w-full text-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center "
          style={{
            backgroundImage: `url('${pattern}')`,
            zIndex: -1,
            opacity: 1,
          }}
        ></div>
        {/* Main Footer */}
        <div className="px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="w-full flex flex-col items-center">
              <Link
                to="/"
                aria-label="Logo"
                className="border p-4 rounded-2xl border-neutral-500 backdrop-blur-2xl bg-black"
              >
                <img src={logo} className="lg:h-24 h-24" alt="Logo" />
              </Link>
              <div className="flex space-x-3 mt-3">
                <a
                  aria-label="Facebook"
                  target="_blank"
                  href="https://www.facebook.com/people/RetdJudge-Ashok-Kumar/pfbid0L8V9WY5cwsKtLfKzB6xhNS3f6iwRZqsu3m8FL5ZwZCWwUXEoeoXroEdW8TdYR6ZTl/?sk=about"
                  className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
                >
                  <Facebook size={18} />
                </a>
                <a
                  aria-label="Twitter"
                  target="_blank"
                  href="https://x.com/RetdJudgeAshokK"
                  className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
                >
                  <FaXTwitter size={18} />
                </a>
                <a
                  aria-label="Linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/retd-judge-ashok-kumar-advocate-high-court-882621258/"
                  className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  aria-label="Youtube"
                  target="_blank"
                  href="https://www.youtube.com/channel/UChYcMgKaKiYQPtOCSADyKUQ"
                  className="bg-neutral-800 hover:bg-neutral-600 transition-colors p-2 rounded-full"
                >
                  <Youtube size={18} />
                </a>
              </div>
              <button
                aria-label="Book Consultation"
                className="px-6 py-2 mt-3 cursor-pointer text-neutral-900 font-semibold rounded-md"
                onClick={openModal}
                style={{ backgroundColor: goldColor }}
              >
                BOOK CONSULTATION
              </button>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-xl play  font-semibold mb-4 tracking-wide">
                Practice Areas
              </h3>
              {/* <div className="h-1 w-12 bg-amber-600 mb-4"></div> */}
              <ul className="space-y-2 ">
                {serviceData?.slice(0, 6).map((area, index) => (
                  <li
                    key={index}
                    className="flex items-center group hover:translate-x-1"
                  >
                    <ArrowRight
                      size={16}
                      className="text-[#ebb661] mr-2 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <Link
                      to={`/services/${area.slug}`}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl play tracking-wide font-semibold mb-4">
                Contact Information
              </h3>
              {/* <div className="h-1 w-12 bg-amber-600 mb-4"></div> */}
              <ul className="space-y-4">
                <li className="flex items-start hover:translate-x-1 group">
                  <MapPin
                    size={20}
                    className="text-[#ebb661] mt-1 mr-3 flex-shrink-0"
                  />
                  <a
                    href="https://maps.app.goo.gl/iv7kN1KGFdnksnV66"
                    target="_black"
                    className="text-neutral-400 group-hover:text-neutral-200"
                  >
                    3/141, Vibhav Khand -3, Vibhav Khand, Gomti Nagar, Lucknow,
                    Uttar Pradesh 226010
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone
                    size={20}
                    className="text-[#ebb661] mr-3 flex-shrink-0"
                  />
                  <a
                    target="_blank"
                    href="tel:7844830212"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    7844830212
                  </a>
                  ,
                  <a
                    target="_blank"
                    href="tel:7007285938"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    &nbsp; 7007285938
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail
                    size={20}
                    className="text-[#ebb661] mr-3 flex-shrink-0"
                  />
                  <a
                    href="mailto:justiceforallindia25@gmail.com"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    justiceforallindia25@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Clock
                    size={20}
                    className="text-[#ebb661] mr-3 flex-shrink-0"
                  />
                  <span className="text-neutral-400">
                    Mon - Sun: 8:00 AM - 11:30 PM
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl play tracking-wide font-semibold mb-4">
                Our Location
              </h3>
              {/* <div className="h-1 w-12 bg-amber-600 mb-4"></div> */}
              <div className="">
                <iframe
                  className="h-48 lg:w-64 w-full"
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1779.6247460399977!2d81.0196432!3d26.8638133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b1668345a3%3A0xafe19173615e503d!2sRetd%20Judge%20Ashok%20Kumar%2C%20Advocate%20Highcourt%20And%20District%20Court%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1747898940602!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-700">
          <div className="container mx-auto lg:px-10 px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-neutral-400 lg:text-sm text-xs mb-4 md:mb-0 flex lg:flex-row flex-col justify-center items-center gap-1">
                <div>
                  © {currentYear} <strong>Retd. Judge Ashok Kumar</strong>. All
                  rights reserved. ||{" "}
                </div>
                <div className="justify-center items-center flex gap-2">
                  <div>Designed By</div>
                  <Link
                    aria-label="Code Crafter"
                    to="https://www.codecrafter.co.in/"
                    target="_blank"
                  >
                    <img
                      src={cclogo}
                      className="lg:w-28 md:w-20 w-20 transition transform hover:scale-105"
                      alt="CodeCrafter Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex lg:space-x-6 space-x-3">
                <Link
                  to="/privacy-policy"
                  className="text-neutral-400 hover:text-white text-xs lg:text-sm transition-colors"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/disclaimer"
                  className="text-neutral-400 hover:text-white text-xs lg:text-sm transition-colors"
                >
                  Legal Disclaimer
                </Link>

                <a
                  target="_blank"
                  href="https://retdjudgeashokkumaradvocate.com/admin"
                  className="text-neutral-400 hover:text-white text-xs lg:text-sm transition-colors hover:underline"
                >
                  Admin Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

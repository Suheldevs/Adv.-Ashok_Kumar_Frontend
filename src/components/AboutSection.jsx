import {
  ArrowRight,
  MapPin,
  Globe,
  Phone,
  Award,
  CheckCircle,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/Home/about.jpg";
import pattern from "../assets/p2.webp";
export default function AboutSection() {
  const goldColor = "#ebb661";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-10 md:py-12 lg:py-14 bg-white/95">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center "
        style={{ backgroundImage: `url('${pattern}')`, zIndex: -1, opacity: 1 }}
      ></div>
      <div className="container mx-auto px-4">
        {/* Main Headline */}
        <div className="">
          <h2 className="text-2xl max-w-4xl md:text-5xl play font-bold text-neutral-900 lg:mb-4 mb-2">
            More Than Just Lawyers
            <span className="block">—Your Legal Partners</span>
          </h2>
          <div className="flex lg:flex-row flex-col gap-10 w-full">
            <div className="lg:w-8/12 w-full text-justify">
              <p className="  text-neutral-600 text-base lg:text-lg">
                With more than 38 years of service in the Judiciary, <strong>Retd. Judge Ashok Kumar</strong> has dedicated himself to helping people navigate complex
                legal challenges. He believes that timely and accurate legal
                advice can significantly reduce case duration, saving clients
                both time and money while minimizing stress. Working alongside a
                professional team, <strong>Retd. Judge Ashok Kumar</strong> approaches each case not only as an
                advocate but as a trusted ally standing with clients throughout
                their legal journey. His mission is to make quality legal
                services accessible to every section of society at the most
                affordable cost possible.
              </p>

              <div className="grid grid-cols-1 mt-6 lg:grid-cols-3 gap-8 items-center">
                {/* Stat 1 */}
                <div className="border border-neutral-300 p-3 rounded-xl bg-white/90">
                  <h3
                    className="text-4xl lg:text-6xl font-bold mb-2"
                    style={{ color: goldColor }}
                  >
                    38+
                  </h3>
                  <div className="w-20 h-1 bg-neutral-300 mb-3"></div>
                  <p className="text-neutral-700 font-medium">
                    Years of Legal Experience
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="border border-neutral-300 p-3 rounded-xl bg-white/90">
                  <h3
                    className="text-4xl lg:text-6xl font-bold mb-2"
                    style={{ color: goldColor }}
                  >
                    99.9%
                  </h3>
                  <div className="w-20 h-1 bg-neutral-300 mb-3"></div>
                  <p className="text-neutral-700 font-medium">
                    Solved Legal Matters
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="border border-neutral-300 p-3 rounded-xl bg-white/90">
                  <h3
                    className="text-4xl lg:text-6xl font-bold mb-2"
                    style={{ color: goldColor }}
                  >
                    96%
                  </h3>
                  <div className="w-20 h-1 bg-neutral-300 mb-3"></div>
                  <p className="text-neutral-700 font-medium">
                    Client Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 w-full">
              <div className="space-y-6">
                {/* Features */}
                <div className="lg:mb-8 mb-4">
                  <div className="flex items-start mb-2 lg:mb-4">
                    <CheckCircle
                      size={20}
                      style={{ color: goldColor }}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <p className="text-neutral-700">Expert Legal Advice</p>
                  </div>
                  <div className="flex items-start mb-2 lg:mb-4">
                    <CheckCircle
                      size={20}
                      style={{ color: goldColor }}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <p className="text-neutral-700">Personalized Attention</p>
                  </div>
                  <div className="flex items-start mb-2 lg:mb-4">
                    <CheckCircle
                      size={20}
                      style={{ color: goldColor }}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <p className="text-neutral-700">
                      Transparent Communication
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle
                      size={20}
                      style={{ color: goldColor }}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <p className="text-neutral-700">Result-Oriented Approach</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-neutral-200">
                  <div className="flex items-start lg:mb-4 mb-2">
                    <MapPin
                      size={20}
                      style={{ color: goldColor }}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <a
                    aria-label='Google map'
                      href="https://maps.app.goo.gl/iv7kN1KGFdnksnV66"
                      target="_blank"
                      className="text-neutral-700"
                    >
                      3/141, Vibhav Khand -3, Vibhav Khand, Gomti Nagar,
                      Lucknow, Uttar Pradesh 226010
                    </a>
                  </div>

                  <div className="flex items-start">
                    <Phone
                      size={20}
                      style={{ color: goldColor }}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <a
                      href="tel:7844830212"
                      className="text-neutral-700 hover:text-neutral-900"
                    >
                      +91-7844830212
                    </a>
                  </div>
                  <div className=" flex lg:mt-6 mt-4">
                    <Link
                    aria-label="About us"
                      to="/about"
                      className="inline-flex bg-neutral-800 items-center px-6 py-3 rounded-md text-white font-medium transition-all duration-300 hover:shadow-lg"
                    >
                      Discover more
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

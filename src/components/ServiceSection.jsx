import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const goldColor = "#ebb661";
  
  const services = [
    "Criminal to Civil Cases",
    "Domestic Violence to Family Matters",
    "Service Matter to Writ Petition",
    "Property Disputes & Documentation",
    "Employment Law & Labor Rights",
    "Consumer Protection Cases",
    "Legal Documentation & Contracts",
    "Court Marriage & Divorce Cases"
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - About Services */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="w-24 h-1 mb-10" style={{ backgroundColor: goldColor }}></div>
            </div>
            
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
              Expert Legal Solutions for Complex Challenges
            </h3>
            
            <div className="space-y-6 text-gray-600">
              <p>
                <strong>For More than 33 years of service in Judiciary</strong>, Mr. Ashok Kumar has decided to help people in legal services by giving the knowledge he had earned in this field for more than three decades of his life.
              </p>
              
              <p>
                As he believes if a person gets a right advice on right time than his case won't be stretched for long in court, it can finish it in less time, which will give less pressure to the concerned parties and his time and money will be saved.
              </p>
              
              <p>
                So with a professional team by his side he is solving cases everyday, not only as an advocate but also as their friend working side by side. As he is on a mission to help people on complex legal process with the cheapest cost possible.
              </p>
              
              <p>
                Our approach is client-focused, result-oriented, and based on decades of practical courtroom experience. We pride ourselves on transparent communication, ethical practice, and dedication to seeking justice for our clients regardless of the complexity of their case.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 mt-8" style={{ borderColor: goldColor }}>
                <h4 className="font-bold text-gray-900 mb-2">Need Legal Assistance?</h4>
                <p className="text-gray-600 mb-4">
                  If you have a doubt or an query on any legal process or need our service, feel free to contact any time:
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 mr-2">Phone:</span>
                    <a href="tel:+917844830212" className="text-gray-700 hover:text-gray-900">7844830212, 9453578200</a>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 mr-2">Email:</span>
                    <a href="mailto:justiceforallindia25@gmail.com" className="text-gray-700 hover:text-gray-900">justiceforallindia25@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Services List */}
          <div className="lg:col-span-6">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Legal Services We Provide
              </h3>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 py-4 group hover:border-gray-400 transition-colors duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-12 mr-4 group-hover:h-16 transition-all duration-300 rounded-r" style={{ backgroundColor: goldColor }}></div>
                      <span className="text-gray-800 font-medium">{service}</span>
                    </div>
                    <div 
                      className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-white"
                      style={{ backgroundColor: "#f8f8f8", color: goldColor, groupHoverBackgroundColor: goldColor }}
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <a 
                  href="#consultations" 
                  className="inline-flex items-center px-6 py-3 text-white font-medium transition-all duration-300 hover:opacity-90 rounded"
                  style={{ backgroundColor: goldColor }}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
            
            {/* Testimonial Box */}
            <div className="mt-8 p-6 bg-gray-900 rounded-lg text-white">
              <div className="flex items-start mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M10 11L7 14L10 17" stroke={goldColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11L11 14L14 17" stroke={goldColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="italic opacity-90">
                  When I thought my case was hopeless, Mr. Ashok Kumar provided clear direction and expert guidance. His decades of judicial experience made all the difference.
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-1 mr-3" style={{ backgroundColor: goldColor }}></div>
                <p className="font-semibold text-sm">Rajesh Sharma, Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
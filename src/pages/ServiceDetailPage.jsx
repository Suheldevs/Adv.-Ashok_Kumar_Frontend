import React from "react";
import { 
  ArrowLeft, 
  Check, 
  ChevronRight, 
  Phone, 
  Calendar, 
  Clock, 
  Mail,
  Scale,
  Heart,
  ScrollText,
  Home,
  Briefcase,
  ShoppingBag,
  FileText,
  Users
} from "lucide-react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

// Service data (same as in the services page)
const services = [
  {
    id: 1,
    title: "Criminal to Civil Cases",
    slug: "criminal-civil-cases",
    icon: <Scale size={24} />,
    description: "Expert legal representation for both criminal and civil cases, ensuring your rights are protected through every step of the legal process.",
    fullDescription: "Our experienced attorneys provide comprehensive legal representation for both criminal and civil cases. We understand that facing legal challenges can be overwhelming, which is why we offer personalized strategies tailored to your specific situation. Our team handles everything from misdemeanors to felonies in criminal law, and from small claims to complex litigation in civil matters. We thoroughly investigate each case, develop strong defense strategies, and work tirelessly to protect your rights and interests throughout the legal process.",
    image: "/api/placeholder/1200/600",
    features: ["Criminal defense", "Civil litigation", "Court representation", "Legal consultation", "Case evaluation"],
    faqs: [
      {
        question: "What is the difference between a criminal and civil case?",
        answer: "Criminal cases involve violations of law that are prosecuted by the government, while civil cases are disputes between individuals or entities seeking compensation or specific performance rather than criminal penalties."
      },
      {
        question: "How long does a typical criminal case take?",
        answer: "The duration varies significantly depending on case complexity, from a few months for minor offenses to over a year for serious felonies."
      },
      {
        question: "Do I need a lawyer for a small civil dispute?",
        answer: "While not always required, having legal representation even in small civil matters can significantly improve your chances of a favorable outcome and ensure your rights are protected."
      }
    ]
  },
  {
    id: 2,
    title: "Domestic Violence to Family Matters",
    slug: "domestic-violence-family-matters",
    icon: <Heart size={24} />,
    description: "Compassionate legal support for sensitive family issues including domestic violence cases, child custody, and other family law matters.",
    fullDescription: "Our family law practice provides compassionate and effective legal support for a wide range of family matters, with special sensitivity to domestic violence cases. We understand the emotional complexities involved in family legal disputes and offer a supportive environment where clients can discuss their concerns confidentially. Our attorneys are experienced in handling restraining orders, child custody arrangements, divorce proceedings, and other family law matters. We prioritize the safety and well-being of our clients and their children while working toward fair and sustainable legal solutions.",
    image: "/api/placeholder/1200/600",
    features: ["Restraining orders", "Child custody", "Alimony cases", "Family counseling", "Legal protection"],
    faqs: [
      {
        question: "How can I obtain a restraining order?",
        answer: "The process typically involves filing a petition with the court, attending a hearing, and presenting evidence of the need for protection. Our attorneys can guide you through this process and provide representation at hearings."
      },
      {
        question: "What factors determine child custody decisions?",
        answer: "Courts primarily consider the best interests of the child, which includes factors such as parental capability, home stability, the child's relationship with each parent, and sometimes the child's preferences depending on their age."
      },
      {
        question: "Can domestic violence affect divorce proceedings?",
        answer: "Yes, documented domestic violence can significantly impact divorce outcomes, including asset division, spousal support, and especially child custody arrangements."
      }
    ]
  },
  {
    id: 3,
    title: "Service Matter to Writ Petition",
    slug: "service-matter-writ-petition",
    icon: <ScrollText size={24} />,
    description: "Specialized expertise in service matters and writ petitions, helping you navigate complex administrative and constitutional legal challenges.",
    fullDescription: "Our specialized legal team excels in handling service matters and writ petitions, offering expert guidance through complex administrative and constitutional legal challenges. We represent clients in disputes involving government services, employment matters, and administrative decisions. Our attorneys are well-versed in constitutional law and have extensive experience filing and arguing writ petitions before various courts. We meticulously prepare each case, conducting thorough research and developing compelling legal arguments to challenge unlawful, arbitrary, or unconstitutional actions by government bodies or officials.",
    image: "/api/placeholder/1200/600",
    features: ["Writ petitions", "Constitutional matters", "Service disputes", "Government appeals", "Administrative law"],
    faqs: [
      {
        question: "What is a writ petition?",
        answer: "A writ petition is a formal written request to a court to exercise its extraordinary jurisdiction to issue an order directing a person, organization, or government body to take or refrain from taking a specific action."
      },
      {
        question: "How long does the writ petition process take?",
        answer: "The timeline varies considerably depending on the nature of the case and court workload, but typically ranges from several months to over a year for complex matters."
      },
      {
        question: "What types of service matters do you handle?",
        answer: "We handle a wide range of service matters including government employment disputes, promotion issues, disciplinary proceedings, retirement benefits, and challenges to administrative orders or circulars."
      }
    ]
  },
  {
    id: 4,
    title: "Property Disputes & Documentation",
    slug: "property-disputes-documentation",
    icon: <Home size={24} />,
    description: "Comprehensive legal services for property-related disputes, transactions, and documentation to protect your real estate investments.",
    fullDescription: "Our property law practice offers comprehensive legal services covering all aspects of real estate transactions and disputes. We handle property documentation, title verification, boundary disputes, lease agreements, and property litigation. Our attorneys conduct thorough due diligence to identify and address potential issues before they become problems. We represent clients in negotiations, mediations, and court proceedings related to property matters. Our goal is to protect your real estate investments and ensure all transactions are legally sound, with proper documentation that safeguards your interests now and in the future.",
    image: "/api/placeholder/1200/600",
    features: ["Property litigation", "Title verification", "Real estate contracts", "Boundary disputes", "Property documentation"],
    faqs: [
      {
        question: "What documents should I review before purchasing property?",
        answer: "Essential documents include title deeds, property tax receipts, encumbrance certificates, approved building plans, and any relevant court orders or legal notices concerning the property."
      },
      {
        question: "How do I resolve a boundary dispute with my neighbor?",
        answer: "Start with open communication and consider mediation. If that fails, legal options include boundary determination suits, injunctions, or other civil remedies depending on the specific circumstances."
      },
      {
        question: "What is title verification and why is it important?",
        answer: "Title verification is the process of confirming the legal ownership of a property and ensuring there are no encumbrances or disputes. It's crucial because it protects buyers from future legal challenges to ownership and reveals any restrictions or liabilities attached to the property."
      }
    ]
  },
  {
    id: 5,
    title: "Employment Law & Labor Rights",
    slug: "employment-law-labor-rights",
    icon: <Briefcase size={24} />,
    description: "Dedicated advocacy for employment law matters and labor rights, representing both employers and employees in workplace legal issues.",
    fullDescription: "Our employment law practice provides dedicated advocacy for both employers and employees in a wide range of workplace legal matters. We help clients navigate complex employment regulations, draft and review employment contracts, handle discrimination claims, and represent parties in wrongful termination cases. Our attorneys are well-versed in labor laws and workers' rights, providing guidance on workplace safety, wage disputes, and collective bargaining issues. We work to prevent employment disputes through proper documentation and policies while offering strong representation when litigation becomes necessary.",
    image: "/api/placeholder/1200/600",
    features: ["Unfair dismissal", "Workplace discrimination", "Wage disputes", "Labor contracts", "Workplace safety"],
    faqs: [
      {
        question: "What constitutes wrongful termination?",
        answer: "Wrongful termination occurs when an employee is fired for illegal reasons such as discrimination, retaliation for reporting illegal activities, or in violation of employment contracts or labor laws."
      },
      {
        question: "How should employers handle workplace discrimination complaints?",
        answer: "Employers should take all complaints seriously, conduct thorough and impartial investigations, maintain confidentiality, take appropriate corrective action, and document the entire process carefully."
      },
      {
        question: "What should be included in an employment contract?",
        answer: "A comprehensive employment contract should include job responsibilities, compensation and benefits, work schedule, duration of employment, grounds for termination, confidentiality clauses, non-compete agreements if applicable, and dispute resolution procedures."
      }
    ]
  },
  {
    id: 6,
    title: "Consumer Protection Cases",
    slug: "consumer-protection-cases",
    icon: <ShoppingBag size={24} />,
    description: "Zealous representation for consumer rights violations, helping clients seek compensation for defective products and services.",
    fullDescription: "Our consumer protection practice is dedicated to defending the rights of consumers who have experienced issues with products or services. We handle cases involving defective products, false advertising, unfair business practices, and violations of consumer protection laws. Our attorneys help clients seek appropriate remedies, which may include compensation for damages, replacement of defective products, or specific performance of service agreements. We represent individuals in consumer forums, negotiations with businesses, and litigation when necessary to ensure fair treatment and appropriate resolution of consumer grievances.",
    image: "/api/placeholder/1200/600",
    features: ["Product liability", "Service complaints", "Compensation claims", "False advertising", "Consumer counseling"],
    faqs: [
      {
        question: "What should I do if I've purchased a defective product?",
        answer: "Document the defect, report it to the seller/manufacturer immediately, keep all receipts and correspondence, and consult with a consumer rights attorney if the issue isn't resolved satisfactorily."
      },
      {
        question: "How long do I have to file a consumer complaint?",
        answer: "Limitation periods vary by jurisdiction and type of claim, but generally range from 1-3 years from the date of purchase or discovery of the issue. It's advisable to act promptly."
      },
      {
        question: "What compensation can I seek in a consumer case?",
        answer: "Depending on the circumstances, you may be entitled to refunds, replacement products, repair costs, compensation for damages caused by the defective product, and in some cases, additional damages for significant inconvenience or distress."
      }
    ]
  },
  {
    id: 7,
    title: "Legal Documentation & Contracts",
    slug: "legal-documentation-contracts",
    icon: <FileText size={24} />,
    description: "Professional drafting and review of legal documents and contracts to ensure your interests are protected in all agreements.",
    fullDescription: "Our legal documentation service provides professional drafting, review, and management of various legal documents and contracts. We ensure that all agreements properly reflect your intentions while protecting your legal interests. Our attorneys have extensive experience creating clear, comprehensive contracts for business transactions, employment relationships, property matters, and personal arrangements. We identify potential issues and ambiguities, advise on legal implications, and suggest modifications to strengthen your position. Our goal is to create documents that prevent disputes through clarity and thoroughness while providing strong legal protection if disagreements arise.",
    image: "/api/placeholder/1200/600",
    features: ["Contract drafting", "Document review", "Legal agreements", "Terms and conditions", "Legal compliance"],
    faqs: [
      {
        question: "Why should I have a lawyer review contracts before signing?",
        answer: "Legal review ensures you understand all obligations and rights, identifies unfavorable terms, reveals hidden liabilities, verifies compliance with current laws, and can save significant money and stress by preventing future disputes."
      },
      {
        question: "What makes a contract legally binding?",
        answer: "A legally binding contract requires offer and acceptance, intention to create legal relations, consideration (something of value exchanged), legal capacity of the parties, and lawful purpose and terms."
      },
      {
        question: "How often should business contracts be reviewed and updated?",
        answer: "Business contracts should be reviewed annually, after significant changes in business operations or relationships, when relevant laws change, or when disputes arise from contract interpretation."
      }
    ]
  },
  {
    id: 8,
    title: "Court Marriage & Divorce Cases",
    slug: "court-marriage-divorce-cases",
    icon: <Users size={24} />,
    description: "Supportive legal guidance through court marriages and divorce proceedings, ensuring fair outcomes in marital disputes.",
    fullDescription: "Our family law practice provides supportive legal guidance for court marriages and divorce proceedings. We understand that these matters involve significant personal and emotional considerations, and we approach each case with sensitivity and respect. For court marriages, we assist with all necessary documentation and legal requirements to ensure a smooth process. In divorce cases, we help clients navigate either mutual consent or contested proceedings, addressing issues such as asset division, alimony, child custody, and maintenance. Our attorneys strive to achieve fair and sustainable outcomes while minimizing conflict and emotional strain whenever possible.",
    image: "/api/placeholder/1200/600",
    features: ["Court marriage", "Divorce proceedings", "Asset division", "Mutual consent", "Contested divorces"],
    faqs: [
      {
        question: "What is the difference between mutual consent divorce and contested divorce?",
        answer: "In mutual consent divorce, both spouses agree to dissolution of marriage and related terms. Contested divorce occurs when spouses disagree on either the divorce itself or key terms such as asset division, alimony, or child custody."
      },
      {
        question: "How are assets divided in a divorce?",
        answer: "Asset division varies by jurisdiction, but generally courts consider factors such as financial contributions, non-financial contributions to the family, marriage duration, future financial needs, and care responsibilities for children."
      },
      {
        question: "What are the legal requirements for court marriage?",
        answer: "Requirements typically include age eligibility (usually 18+ for both parties), free consent of both individuals, proper documentation including identity proof and residence certificates, and completing the waiting period and registration process as required by local laws."
      }
    ]
  }
];

// Component to display service features
const FeatureList = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <div className="bg-amber-100 rounded-full p-1 mr-3">
            <Check size={16} className="text-amber-600" />
          </div>
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
};

// Component to display FAQ items
const FAQSection = ({ faqs }) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main ServiceDetail Component
const ServiceDetail = () => {
  const { slug } = useParams();

  // Find the service by slug
  const service = services.find(s => s.slug === slug);

  // If service is not found or page is loading
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 border-4 border-t-amber-500 border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
     <Breadcrumb
        title="Our Legal Services"
        items={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
        ]}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <button 
                onClick={() => router.back()} 
                className="flex items-center text-white mb-6 hover:text-amber-300 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Services
              </button>
              <div 
                className="inline-block p-2 rounded-full mb-4"
                style={{ backgroundColor: "rgba(235, 182, 97, 0.2)" }}
              >
                <div className="bg-amber-50 p-2 rounded-full" style={{ borderColor: "#ebb661" }}>
                  <div className="text-amber-600">
                    {service.icon}
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-amber-100 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview</h2>
              <div className="w-20 h-1 mb-6" style={{ backgroundColor: "#ebb661" }}></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Services Include</h3>
              <FeatureList features={service.features} />
            </div>

            {/* FAQ Section */}
            <FAQSection faqs={service.faqs} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Need Assistance?</h3>
              <p className="text-gray-600 mb-6">
                Our legal experts are ready to help you with your case. Schedule a consultation today.
              </p>
              <a 
                href="/contact" 
                className="block w-full py-3 px-4 rounded-md font-medium text-white text-center transition-colors duration-300 mb-4"
                style={{ backgroundColor: "#ebb661" }}
              >
                Contact Us
              </a>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Phone size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us at</p>
                    <p className="font-medium text-gray-800">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Mail size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us at</p>
                    <p className="font-medium text-gray-800">info@legalpractice.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Clock size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Hours</p>
                    <p className="font-medium text-gray-800">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Related Services</h3>
              <div className="space-y-4">
                {services
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map(relatedService => (
                    <div key={relatedService.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <a 
                        href={`/services/${relatedService.slug}`}
                        className="flex items-center group"
                      >
                        <div className="bg-amber-50 p-2 rounded-full mr-3">
                          <div className="text-amber-600">
                            {relatedService.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 group-hover:text-amber-600 transition-colors">
                            {relatedService.title}
                          </h4>
                          <p className="text-sm text-gray-500 line-clamp-1">
                            {relatedService.description.substring(0, 60)}...
                          </p>
                        </div>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-amber-600 transition-colors" />
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Appointment Card */}
            <div className="bg-amber-50 rounded-xl shadow-sm p-8 mt-8 border border-amber-100">
              <div className="text-center">
                <Calendar size={32} className="mx-auto text-amber-600 mb-3" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Book a Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Schedule a meeting with our experienced attorneys to discuss your legal needs.
                </p>
                <a 
                  href="/appointment" 
                  className="block w-full py-3 px-4 rounded-md font-medium text-white text-center transition-colors duration-300"
                  style={{ backgroundColor: "#ebb661" }}
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials/Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our legal team is committed to providing you with the highest quality legal representation for your {service.title.toLowerCase()} needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact" 
                className="px-8 py-3 rounded-md font-medium text-white transition-colors duration-300"
                style={{ backgroundColor: "#ebb661" }}
              >
                Contact Us Today
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Explore All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceDetail;
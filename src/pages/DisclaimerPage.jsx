import { ShieldAlert, AlertTriangle, Scale, FileText, Users, Eye, Globe, AlertCircle } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { FaExclamationTriangle } from "react-icons/fa";

const Disclaimer = () => {
  const sections = [
    {
      icon: AlertTriangle,
      title: "No Attorney-Client Relationship",
      content: [
        "By accessing this website, you acknowledge that you are visiting on your own accord to learn more about Retd. Judge Ashok Kumar for informational purposes only.",
        "There has been no solicitation, invitation, advertisement, or inducement of any kind from Retd. Judge Ashok Kumar, Advocate High Court Lucknow, or any team members to establish an Attorney-Client relationship through this website.",
        "Merely browsing this website, downloading materials, or contacting us does not create an attorney-client relationship.",
        "No confidential or privileged relationship is established by accessing or using this website."
      ]
    },
    {
      icon: Scale,
      title: "Legal Service Limitations",
      content: [
        "This website is not intended as a source of advertising, solicitation, or legal advice under the Bar Council of India rules.",
        "The content provided is for general informational purposes and should not be construed as legal advice applicable to specific situations.",
        "Legal advice can only be provided after proper consultation, case evaluation, and formal engagement of legal services.",
        "Each legal matter is unique and requires individual assessment by qualified legal professionals.",
        "No legal representation is implied or guaranteed through website interaction."
      ]
    },
    {
      icon: FileText,
      title: "Content Accuracy and Reliability",
      content: [
        "While this website has been prepared with due care and professional attention, we do not guarantee the absolute accuracy or completeness of all content.",
        "Legal information may become outdated due to changes in laws, regulations, or judicial interpretations.",
        "Users are strongly advised to cross-reference information with current legal sources, official publications, and recent court decisions.",
        "Typographical errors, grammatical inconsistencies, or inadvertent mistakes may occur despite our best efforts.",
        "This website should be used as a starting point for legal research, not as a definitive legal resource."
      ]
    },
    {
      icon: FaExclamationTriangle,
      title: "User Responsibility and Risk",
      content: [
        "Any reliance on information provided on this website is solely at the user's own risk and discretion.",
        "Users must exercise independent judgment and seek professional legal counsel for their specific legal matters.",
        "We disclaim all liability for decisions made based on information obtained from this website.",
        "Users are responsible for verifying the current status of laws, regulations, and legal precedents.",
        "No warranty is provided regarding the suitability of information for particular legal purposes."
      ]
    },
    {
      icon: Users,
      title: "Professional Standards and Ethics",
      content: [
        "All content and services comply with the professional conduct rules of the Bar Council of India.",
        "Legal opinions, case summaries, and legal commentary are provided from a professional perspective but may not apply to every situation.",
        "Ethical guidelines for legal practitioners are strictly followed in all website content and communications.",
        "Professional confidentiality standards apply to any formal consultations or legal engagements.",
        "We maintain the highest standards of professional integrity in all our legal practice activities."
      ]
    },
    {
      icon: Globe,
      title: "Third-Party Content and External Links",
      content: [
        "This website may contain links to external legal resources, government websites, court databases, or professional publications.",
        "We are not responsible for the accuracy, content, or availability of third-party websites or resources.",
        "External links are provided for convenience and do not constitute endorsement of the linked content.",
        "Users should review the terms of use and disclaimers of any external websites they visit.",
        "Third-party content may have different accuracy standards and update frequencies."
      ]
    },
    {
      icon: Eye,
      title: "Jurisdictional Limitations",
      content: [
        "This website primarily focuses on Indian law and legal practice within the jurisdiction of Indian courts.",
        "Legal information may not be applicable to other jurisdictions or international legal matters.",
        "Users seeking legal advice for matters outside Indian jurisdiction should consult appropriate local legal professionals.",
        "Court procedures, legal precedents, and statutory interpretations are specific to Indian legal system.",
        "Cross-border legal matters require specialized expertise in multiple jurisdictions."
      ]
    },
    {
      icon: ShieldAlert,
      title: "Limitation of Liability",
      content: [
        "Retd. Judge Ashok Kumar and associated parties shall not be held liable for any direct, indirect, incidental, or consequential damages arising from website use.",
        "This includes but is not limited to financial losses, legal consequences, or missed opportunities resulting from reliance on website content.",
        "Users acknowledge that legal matters involve inherent risks and uncertainties that cannot be eliminated through website disclaimers.",
        "Professional indemnity and liability protections apply only to formal legal engagements with proper retainer agreements.",
        "This disclaimer is governed by Indian law and subject to the jurisdiction of competent Indian courts."
      ]
    }
  ];

  return (
    <>
      <Breadcrumb
        title="Legal Disclaimer"
        items={[
          { label: "Home", link: "/" },
          { label: "Legal Disclaimer", link: "/disclaimer" },
        ]}
      />
      
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-neutral-50 to-white p-8 rounded-2xl border-l-4 mb-12" style={{ borderColor: '#ebb661' }}>
            <div className="flex items-start space-x-4">
              
              <div>
                <p className="text-neutral-700 text-lg leading-relaxed mb-4">
                  This disclaimer governs your use of <strong>retdjudgeashokkumaradvocate.com</strong> 
                  and establishes important legal boundaries regarding the information and services 
                  provided by <strong>Retd. Judge Ashok Kumar</strong>, Advocate High Court, Lucknow.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Please read this disclaimer carefully before using this website. By continuing to 
                  browse or use this website, you acknowledge that you have read, understood, and 
                  agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ebb661', opacity: 1 }}>
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">
                          {index + 1}. {section.title}
                        </h2>
                        <div className="space-y-3">
                          {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-neutral-700 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Notice */}
          <div className="mt-16 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-8 h-8 mt-1" style={{ color: '#ebb661' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Important Legal Notice</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  This disclaimer is an integral part of using this website and accessing any legal 
                  information or services. It is designed to protect both users and legal practitioners 
                  while maintaining professional standards required by the Bar Council of India.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For specific legal advice tailored to your situation, please schedule a formal 
                  consultation through the appropriate legal channels.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
            <p className="text-neutral-600 text-sm">
              <strong>Last Updated:</strong> May 2025 | 
              <strong className="ml-2">Governing Law:</strong> Indian Legal System | 
              <strong className="ml-2">Professional Standards:</strong> Bar Council of India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
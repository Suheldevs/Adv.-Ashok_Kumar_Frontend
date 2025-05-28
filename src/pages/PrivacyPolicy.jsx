import { FileText, Shield, Eye, Lock, Globe, Scale, Mail, Calendar } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "No Personal Data Collection",
      content: [
        "This website operates on a strict no-data-collection policy. We do not collect, store, process, or retain any personal information from our visitors.",
        "You can browse our website completely anonymously without creating accounts, providing email addresses, or sharing any identifiable information.",
        "We believe in your right to privacy and have designed our website to respect this fundamental principle."
      ]
    },
    {
      icon: Globe,
      title: "Cookies and Tracking",
      content: [
        "Our website does not use cookies, web beacons, pixels, or any other tracking technologies.",
        "We do not employ analytics tools that track user behavior, location, or browsing patterns.",
        "No session data is stored on your device or our servers.",
        "Third-party advertising networks and social media tracking are not implemented on our platform."
      ]
    },
    {
      icon: Shield,
      title: "Information We Don't Collect",
      content: [
        "Personal identifiers (names, addresses, phone numbers, email addresses)",
        "Financial information (credit card details, bank information)",
        "Technical data (IP addresses, browser fingerprints, device information)",
        "Usage analytics (page views, time spent, click patterns)",
        "Location data (GPS coordinates, approximate location)",
        "Demographic information (age, gender, interests)"
      ]
    },
    {
      icon: Globe,
      title: "Third-Party Services and Links",
      content: [
        "Our website may contain links to external legal resources, government websites, or professional networks.",
        "We are not responsible for the privacy practices of these third-party websites.",
        "Each external website has its own privacy policy and data collection practices.",
        "We recommend reviewing the privacy policies of any external sites you visit through our links.",
        "These third parties may collect data independently of our website."
      ]
    },
    {
      icon: Lock,
      title: "Security Measures",
      content: [
        "Despite not collecting personal data, we maintain robust security protocols to protect our website.",
        "We use SSL encryption to secure all communications between your browser and our servers.",
        "Regular security audits are conducted to identify and address potential vulnerabilities.",
        "Our hosting infrastructure employs industry-standard security measures.",
        "We monitor for suspicious activity and potential security threats."
      ]
    },
    {
      icon: Scale,
      title: "Legal Compliance and Jurisdiction",
      content: [
        "This website operates under Indian jurisdiction and complies with the Information Technology Act, 2000.",
        "As we don't collect personal data, GDPR compliance requirements are naturally met.",
        "We adhere to the Digital Personal Data Protection Act, 2023 principles.",
        "Legal consultations and advice provided through this platform follow Bar Council of India guidelines.",
        "Any disputes related to privacy will be governed by Indian law and jurisdiction of Lucknow courts."
      ]
    },
    {
      icon: Mail,
      title: "Communication and Inquiries",
      content: [
        "When you contact us through provided contact methods, standard communication privacy applies.",
        "Legal consultations are protected under attorney-client privilege as per Indian law.",
        "We maintain confidentiality of all professional communications.",
        "Contact information is used solely for responding to your specific inquiries.",
        "No marketing communications or newsletters are sent unless explicitly requested."
      ]
    },
    {
      icon: Calendar,
      title: "Policy Updates and Changes",
      content: [
        "This privacy policy may be updated periodically to reflect changes in legal requirements or website functionality.",
        "Any significant changes will be prominently displayed on this page.",
        "The 'Last Updated' date at the bottom indicates when the most recent changes were made.",
        "Continued use of the website after policy updates constitutes acceptance of the revised terms.",
        "We encourage periodic review of this policy to stay informed about our privacy practices."
      ]
    }
  ];

  return (
    <>
      <Breadcrumb
        title="Privacy Policy"
        items={[
          { label: "Home", link: "/" },
          { label: "Privacy Policy", link: "/privacy-policy" },
        ]}
      />
      
      <div className="min-h-screen bg-white">
       

        {/* Introduction */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-neutral-50 to-white p-8 rounded-2xl border-l-4 mb-12" style={{ borderColor: '#ebb661' }}>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Our Commitment to Privacy
              </h2>
              <p className="text-neutral-700 text-lg leading-relaxed mb-4">
                This Privacy Policy governs the website <strong>retdjudgeashokkumaradvocate.com</strong>, 
                operated by <strong>Retd. Judge Ashok Kumar</strong>, Advocate High Court, Lucknow. 
                We are committed to protecting your privacy and maintaining the confidentiality that 
                is fundamental to the legal profession.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                As a legal practice with deep respect for privacy rights, we have designed our website 
                to operate with minimal data collection, ensuring your browsing experience remains 
                private and secure.
              </p>
            </div>

            {/* Policy Sections */}
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
                          <h3 className="text-xl font-bold text-neutral-900 mb-4">
                            {index + 1}. {section.title}
                          </h3>
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

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
              <p className="text-neutral-600 text-sm">
                <strong>Last Updated:</strong> May 2025 | 
                <strong className="ml-2">Governing Law:</strong> Indian Jurisdiction | 
                <strong className="ml-2">Court:</strong> Lucknow High Court
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
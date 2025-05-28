// import { 
//   Scale, 
//   Heart, 
//   ScrollText, 
//   Home, 
//   Briefcase, 
//   ShoppingBag, 
//   FileText, 
//   Users,
//   ChevronRight,
//   Search,
//   Phone
// } from "lucide-react";

// import img1 from '../assets/service/1.webp'
// import img2 from '../assets/service/2.webp'
// import img3 from '../assets/service/3.webp'
// import img4 from '../assets/service/4.webp'
// import img5 from '../assets/service/5.webp'
// import img6 from '../assets/service/6.webp'
// import img7 from '../assets/service/7.webp'
// import img8 from '../assets/service/8.webp'

// const serviceData = [
//   {
//     id: 1,
//     title: "Criminal to Civil Cases",
//     slug: "criminal-civil-cases",
//     foter:"Civil Litigation",
//     icon: <Scale size={24} />,
//     description: "Expert legal representation for both criminal and civil cases, ensuring your rights are protected through every step of the legal process.",
//     image: img1,
//     fullDescription: "Our experienced attorneys provide comprehensive legal representation for both criminal and civil cases. We understand that facing legal challenges can be overwhelming, which is why we offer personalized strategies tailored to your specific situation. Our team handles everything from misdemeanors to felonies in criminal law, and from small claims to complex litigation in civil matters. We thoroughly investigate each case, develop strong defense strategies, and work tirelessly to protect your rights and interests throughout the legal process.",
//     features: ["Criminal defense", "Civil litigation", "Court representation", "Legal consultation", "Case evaluation"],
//     faqs: [
//       {
//         question: "What is the difference between a criminal and civil case?",
//         answer: "Criminal cases involve violations of law that are prosecuted by the government, while civil cases are disputes between individuals or entities seeking compensation or specific performance rather than criminal penalties."
//       },
//       {
//         question: "How long does a typical criminal case take?",
//         answer: "The duration varies significantly depending on case complexity, from a few months for minor offenses to over a year for serious felonies."
//       },
//       {
//         question: "Do I need a lawyer for a small civil dispute?",
//         answer: "While not always required, having legal representation even in small civil matters can significantly improve your chances of a favorable outcome and ensure your rights are protected."
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: "Domestic Violence to Family Matters",
//     slug: "domestic-violence-family-matters",
//     foter:"Family Law",
//     icon: <Heart size={24} />,
//     description: "Compassionate legal support for sensitive family issues including domestic violence cases, child custody, and other family law matters.",
//     image: img2,
//     fullDescription: "Our family law practice provides compassionate and effective legal support for a wide range of family matters, with special sensitivity to domestic violence cases. We understand the emotional complexities involved in family legal disputes and offer a supportive environment where clients can discuss their concerns confidentially. Our attorneys are experienced in handling restraining orders, child custody arrangements, divorce proceedings, and other family law matters. We prioritize the safety and well-being of our clients and their children while working toward fair and sustainable legal solutions.",
//     features: ["Restraining orders", "Child custody", "Alimony cases", "Family counseling", "Legal protection"],
//     faqs: [
//       {
//         question: "How can I obtain a restraining order?",
//         answer: "The process typically involves filing a petition with the court, attending a hearing, and presenting evidence of the need for protection. Our attorneys can guide you through this process and provide representation at hearings."
//       },
//       {
//         question: "What factors determine child custody decisions?",
//         answer: "Courts primarily consider the best interests of the child, which includes factors such as parental capability, home stability, the child's relationship with each parent, and sometimes the child's preferences depending on their age."
//       },
//       {
//         question: "Can domestic violence affect divorce proceedings?",
//         answer: "Yes, documented domestic violence can significantly impact divorce outcomes, including asset division, spousal support, and especially child custody arrangements."
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: "Service Matter to Writ Petition",
//     slug: "service-matter-writ-petition",
//     foter:"Writ Petition",
//     icon: <ScrollText size={24} />,
//     description: "Specialized expertise in service matters and writ petitions, helping you navigate complex administrative and constitutional legal challenges.",
//     fullDescription: "Our specialized legal team excels in handling service matters and writ petitions, offering expert guidance through complex administrative and constitutional legal challenges. We represent clients in disputes involving government services, employment matters, and administrative decisions. Our attorneys are well-versed in constitutional law and have extensive experience filing and arguing writ petitions before various courts. We meticulously prepare each case, conducting thorough research and developing compelling legal arguments to challenge unlawful, arbitrary, or unconstitutional actions by government bodies or officials.",
//     image: img3,
//     features: ["Writ petitions", "Constitutional matters", "Service disputes", "Government appeals", "Administrative law"],
//     faqs: [
//       {
//         question: "What is a writ petition?",
//         answer: "A writ petition is a formal written request to a court to exercise its extraordinary jurisdiction to issue an order directing a person, organization, or government body to take or refrain from taking a specific action."
//       },
//       {
//         question: "How long does the writ petition process take?",
//         answer: "The timeline varies considerably depending on the nature of the case and court workload, but typically ranges from several months to over a year for complex matters."
//       },
//       {
//         question: "What types of service matters do you handle?",
//         answer: "We handle a wide range of service matters including government employment disputes, promotion issues, disciplinary proceedings, retirement benefits, and challenges to administrative orders or circulars."
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: "Property Disputes & Documentation",
//     slug: "property-disputes-documentation",
//     foter:"Property Law",
//     icon: <Home size={24} />,
//     description: "Comprehensive legal services for property-related disputes, transactions, and documentation to protect your real estate investments.",
//     fullDescription: "Our property law practice offers comprehensive legal services covering all aspects of real estate transactions and disputes. We handle property documentation, title verification, boundary disputes, lease agreements, and property litigation. Our attorneys conduct thorough due diligence to identify and address potential issues before they become problems. We represent clients in negotiations, mediations, and court proceedings related to property matters. Our goal is to protect your real estate investments and ensure all transactions are legally sound, with proper documentation that safeguards your interests now and in the future.",
//     image: img4,
//     features: ["Property litigation", "Title verification", "Real estate contracts", "Boundary disputes", "Property documentation"],
//     faqs: [
//       {
//         question: "What documents should I review before purchasing property?",
//         answer: "Essential documents include title deeds, property tax receipts, encumbrance certificates, approved building plans, and any relevant court orders or legal notices concerning the property."
//       },
//       {
//         question: "How do I resolve a boundary dispute with my neighbor?",
//         answer: "Start with open communication and consider mediation. If that fails, legal options include boundary determination suits, injunctions, or other civil remedies depending on the specific circumstances."
//       },
//       {
//         question: "What is title verification and why is it important?",
//         answer: "Title verification is the process of confirming the legal ownership of a property and ensuring there are no encumbrances or disputes. It's crucial because it protects buyers from future legal challenges to ownership and reveals any restrictions or liabilities attached to the property."
//       }
//     ]
//   },
//   {
//     id: 5,
//     title: "Employment Law & Labor Rights",
//     slug: "employment-law-labor-rights",
//     foter:"Corporate Law",
//     icon: <Briefcase size={24} />,
//     description: "Dedicated advocacy for employment law matters and labor rights, representing both employers and employees in workplace legal issues.",
//     fullDescription: "Our employment law practice provides dedicated advocacy for both employers and employees in a wide range of workplace legal matters. We help clients navigate complex employment regulations, draft and review employment contracts, handle discrimination claims, and represent parties in wrongful termination cases. Our attorneys are well-versed in labor laws and workers' rights, providing guidance on workplace safety, wage disputes, and collective bargaining issues. We work to prevent employment disputes through proper documentation and policies while offering strong representation when litigation becomes necessary.",
//     image: img5,
//     features: ["Unfair dismissal", "Workplace discrimination", "Wage disputes", "Labor contracts", "Workplace safety"],
//     faqs: [
//       {
//         question: "What constitutes wrongful termination?",
//         answer: "Wrongful termination occurs when an employee is fired for illegal reasons such as discrimination, retaliation for reporting illegal activities, or in violation of employment contracts or labor laws."
//       },
//       {
//         question: "How should employers handle workplace discrimination complaints?",
//         answer: "Employers should take all complaints seriously, conduct thorough and impartial investigations, maintain confidentiality, take appropriate corrective action, and document the entire process carefully."
//       },
//       {
//         question: "What should be included in an employment contract?",
//         answer: "A comprehensive employment contract should include job responsibilities, compensation and benefits, work schedule, duration of employment, grounds for termination, confidentiality clauses, non-compete agreements if applicable, and dispute resolution procedures."
//       }
//     ]
//   },
//   {
//     id: 6,
//     title: "Consumer Protection Cases",
//     slug: "consumer-protection-cases",
//     foter:"Consumer Cases",
//     icon: <ShoppingBag size={24} />,
//     description: "Zealous representation for consumer rights violations, helping clients seek compensation for defective products and services.",
//     fullDescription: "Our consumer protection practice is dedicated to defending the rights of consumers who have experienced issues with products or services. We handle cases involving defective products, false advertising, unfair business practices, and violations of consumer protection laws. Our attorneys help clients seek appropriate remedies, which may include compensation for damages, replacement of defective products, or specific performance of service agreements. We represent individuals in consumer forums, negotiations with businesses, and litigation when necessary to ensure fair treatment and appropriate resolution of consumer grievances.",
//     image:img6,
//     features: ["Product liability", "Service complaints", "Compensation claims", "False advertising", "Consumer counseling"],
//     faqs: [
//       {
//         question: "What should I do if I've purchased a defective product?",
//         answer: "Document the defect, report it to the seller/manufacturer immediately, keep all receipts and correspondence, and consult with a consumer rights attorney if the issue isn't resolved satisfactorily."
//       },
//       {
//         question: "How long do I have to file a consumer complaint?",
//         answer: "Limitation periods vary by jurisdiction and type of claim, but generally range from 1-3 years from the date of purchase or discovery of the issue. It's advisable to act promptly."
//       },
//       {
//         question: "What compensation can I seek in a consumer case?",
//         answer: "Depending on the circumstances, you may be entitled to refunds, replacement products, repair costs, compensation for damages caused by the defective product, and in some cases, additional damages for significant inconvenience or distress."
//       }
//     ]
//   },
//   {
//     id: 7,
//     title: "Legal Documentation & Contracts",
//     slug: "legal-documentation-contracts",
//     foter:"Property Law",
//     icon: <FileText size={24} />,
//     description: "Professional drafting and review of legal documents and contracts to ensure your interests are protected in all agreements.",
//     fullDescription: "Our legal documentation service provides professional drafting, review, and management of various legal documents and contracts. We ensure that all agreements properly reflect your intentions while protecting your legal interests. Our attorneys have extensive experience creating clear, comprehensive contracts for business transactions, employment relationships, property matters, and personal arrangements. We identify potential issues and ambiguities, advise on legal implications, and suggest modifications to strengthen your position. Our goal is to create documents that prevent disputes through clarity and thoroughness while providing strong legal protection if disagreements arise.",
//     image: img7,
//     features: ["Contract drafting", "Document review", "Legal agreements", "Terms and conditions", "Legal compliance"],
//     faqs: [
//       {
//         question: "Why should I have a lawyer review contracts before signing?",
//         answer: "Legal review ensures you understand all obligations and rights, identifies unfavorable terms, reveals hidden liabilities, verifies compliance with current laws, and can save significant money and stress by preventing future disputes."
//       },
//       {
//         question: "What makes a contract legally binding?",
//         answer: "A legally binding contract requires offer and acceptance, intention to create legal relations, consideration (something of value exchanged), legal capacity of the parties, and lawful purpose and terms."
//       },
//       {
//         question: "How often should business contracts be reviewed and updated?",
//         answer: "Business contracts should be reviewed annually, after significant changes in business operations or relationships, when relevant laws change, or when disputes arise from contract interpretation."
//       }
//     ]
//   },
//   {
//     id: 8,
//     title: "Court Marriage & Divorce Cases",
//     slug: "court-marriage-divorce-cases",
//     foter:"Civil Litigation",
//     icon: <Users size={24} />,
//     description: "Supportive legal guidance through court marriages and divorce proceedings, ensuring fair outcomes in marital disputes.",
//     fullDescription: "Our family law practice provides supportive legal guidance for court marriages and divorce proceedings. We understand that these matters involve significant personal and emotional considerations, and we approach each case with sensitivity and respect. For court marriages, we assist with all necessary documentation and legal requirements to ensure a smooth process. In divorce cases, we help clients navigate either mutual consent or contested proceedings, addressing issues such as asset division, alimony, child custody, and maintenance. Our attorneys strive to achieve fair and sustainable outcomes while minimizing conflict and emotional strain whenever possible.",
//     image: img8,
//     features: ["Court marriage", "Divorce proceedings", "Asset division", "Mutual consent", "Contested divorces"],
//     faqs: [
//       {
//         question: "What is the difference between mutual consent divorce and contested divorce?",
//         answer: "In mutual consent divorce, both spouses agree to dissolution of marriage and related terms. Contested divorce occurs when spouses disagree on either the divorce itself or key terms such as asset division, alimony, or child custody."
//       },
//       {
//         question: "How are assets divided in a divorce?",
//         answer: "Asset division varies by jurisdiction, but generally courts consider factors such as financial contributions, non-financial contributions to the family, marriage duration, future financial needs, and care responsibilities for children."
//       },
//       {
//         question: "What are the legal requirements for court marriage?",
//         answer: "Requirements typically include age eligibility (usually 18+ for both parties), free consent of both individuals, proper documentation including identity proof and residence certificates, and completing the waiting period and registration process as required by local laws."
//       }
//     ]
//   }
// ];

// export default serviceData



// import { 
//   Scale, 
//   Heart, 
//   ScrollText, 
//   Home, 
//   Briefcase, 
//   ShoppingBag, 
//   FileText, 
//   Users,
// } from "lucide-react";

// import img1 from '../assets/service/1.webp'
// import img2 from '../assets/service/2.webp'
// import img3 from '../assets/service/3.webp'
// import img4 from '../assets/service/4.webp'
// import img5 from '../assets/service/5.webp'
// import img6 from '../assets/service/6.webp'
// import img7 from '../assets/service/7.webp'
// import img8 from '../assets/service/8.webp'

// const serviceData = [
//   {
//     id: 1,
//     title: "Family Court",
//     icon: <Heart size={24} />,
//     image: img2,
//     description: "Compassionate legal support for sensitive family issues including domestic violence cases, child custody, and other family law matters.",
  
//   },
//   {
//     id: 2,
//     title: "Criminal Lawyer",
//     icon: <Scale size={24} />,
//     description: "Expert legal representation for both criminal and civil cases, ensuring your rights are protected through every step of the legal process.",
//     image: img1,
//   },
//   {
//     id: 4,
//     title: "Civil Law Disputes",
//     icon: <Home size={24} />,
//     description: "Comprehensive legal services for property-related disputes, transactions, and documentation to protect your real estate investments.",
//     image: img4,
   
//   },
//   {
//     id: 5,
//     title: "Corporate Lawyer",
//     icon: <Briefcase size={24} />,
//     description: "Dedicated advocacy for employment law matters and labor rights, representing both employers and employees in workplace legal issues.",
//     image: img5,
   
//   },
//   {
//     id: 7,
//     title: "Divorce Lawyer",
//     icon: <Users size={24} />,
//     description: "Supportive legal guidance through court marriages and divorce proceedings, ensuring fair outcomes in marital disputes.",
//     image: img8,
//   },
//   {
//     id: 8,
//     title: "Property Lawyer",
//     icon: <FileText size={24} />,
//     description: "Professional drafting and review of legal documents and contracts to ensure your interests are protected in all agreements.",
//     image: img7,
//   }
// ];

// export default serviceData





import {
  Scale,
  Heart,
  Home,
  Briefcase,
  FileText,
  Users,
} from "lucide-react";

import img1 from "../assets/service/1.webp";
import img2 from "../assets/service/2.webp";
import img4 from "../assets/service/4.webp";
import img5 from "../assets/service/5.webp";
import img7 from "../assets/service/7.webp";
import img8 from "../assets/service/8.webp";

const serviceData = [
  {
    id: 1,
    title: "Family Court",
    icon: <Heart size={24} />,
    image: img2,
    description:
      "Compassionate legal support for sensitive family issues including domestic violence cases, child custody, and other family law matters.",
    slug: "family-court",
    fullDescription:
      "We provide legal services in family matters such as domestic violence, custody, and more. Our aim is to support families through compassionate and effective legal care.",
    features: ["Domestic violence", "Child custody", "Alimony", "Court marriage", "Family mediation"],
    faqs: [
      {
        question: "Do you handle child custody cases?",
        answer: "Yes, we provide complete support and representation in child custody cases based on the best interest of the child."
      },
      {
        question: "Can I get legal help for domestic violence?",
        answer: "Absolutely. We help clients file for protection and represent them throughout the legal process."
      }
    ]
  },
  {
    id: 2,
    title: "Criminal Lawyer",
    icon: <Scale size={24} />,
    image: img1,
    description:
      "Expert legal representation for both criminal and civil cases, ensuring your rights are protected through every step of the legal process.",
    slug: "criminal-lawyer",
    fullDescription:
      "We offer strong representation in criminal law cases, ensuring due process and the protection of your constitutional rights in all phases of your legal matter.",
    features: ["Bail support", "Trial defense", "FIR quashing", "Anticipatory bail", "Appeals"],
    faqs: [
      {
        question: "Can I apply for anticipatory bail?",
        answer: "Yes, our team can help you file a petition for anticipatory bail and represent you in court."
      },
      {
        question: "Do you handle criminal appeals?",
        answer: "Yes, we take on appeals and revisional matters across various courts."
      }
    ]
  },
  {
    id: 4,
    title: "Civil Law Disputes",
    icon: <Home size={24} />,
    image: img4,
    description:
      "Comprehensive legal services for property-related disputes, transactions, and documentation to protect your real estate investments.",
    slug: "civil-law-disputes",
    fullDescription:
      "Our civil law team offers end-to-end services in property matters, tenant disputes, partition suits, and more, focusing on timely and just outcomes.",
    features: ["Property disputes", "Contract enforcement", "Injunctions", "Document vetting", "Partition suits"],
    faqs: [
      {
        question: "Do you handle property dispute cases?",
        answer: "Yes, we assist in all types of civil property disputes including title suits, encroachments, and tenancy matters."
      },
      {
        question: "What documents are required for a civil case?",
        answer: "It depends on the case type, but generally ownership proofs, agreements, and identity proofs are needed."
      }
    ]
  },
  {
    id: 5,
    title: "Corporate Lawyer",
    icon: <Briefcase size={24} />,
    image: img5,
    description:
      "Dedicated advocacy for employment law matters and labor rights, representing both employers and employees in workplace legal issues.",
    slug: "corporate-lawyer",
    fullDescription:
      "Our corporate legal services help businesses with compliance, labor laws, dispute resolution, and contracts to ensure smooth operations and legal safety.",
    features: ["Employment law", "Business compliance", "HR policy", "M&A support", "Labor disputes"],
    faqs: [
      {
        question: "Can you help with drafting employee contracts?",
        answer: "Yes, we create comprehensive, legally sound contracts tailored for your organization."
      },
      {
        question: "What if my company is facing a labor dispute?",
        answer: "We represent both employers and employees in resolving labor-related issues legally and effectively."
      }
    ]
  },
  {
    id: 7,
    title: "Divorce Lawyer",
    icon: <Users size={24} />,
    image: img8,
    description:
      "Supportive legal guidance through court marriages and divorce proceedings, ensuring fair outcomes in marital disputes.",
    slug: "divorce-lawyer",
    fullDescription:
      "We help clients navigate court marriages, divorce filings, mutual consent divorces, and legal separation with dignity and minimal conflict.",
    features: ["Mutual divorce", "Contested divorce", "Court marriage", "Child custody", "Maintenance"],
    faqs: [
      {
        question: "How long does a mutual divorce take?",
        answer: "It usually takes 6 months if both parties agree and necessary paperwork is submitted."
      },
      {
        question: "Do you assist in NRI divorce cases?",
        answer: "Yes, we handle NRI divorce and family law cases involving cross-border issues."
      }
    ]
  },
  {
    id: 8,
    title: "Property Lawyer",
    icon: <FileText size={24} />,
    image: img7,
    description:
      "Professional drafting and review of legal documents and contracts to ensure your interests are protected in all agreements.",
    slug: "property-lawyer",
    fullDescription:
      "We provide specialized services in property documentation, lease agreements, due diligence, and registration to ensure smooth property transactions.",
    features: ["Sale deed", "Title check", "Agreement drafting", "Registry support", "Lease documents"],
    faqs: [
      {
        question: "Can you verify property ownership?",
        answer: "Yes, we conduct thorough due diligence to verify property title and ownership history."
      },
      {
        question: "Do you help with property registration?",
        answer: "Yes, we assist with drafting, stamp duty calculation, and registration at sub-registrar offices."
      }
    ]
  },
];

export default serviceData;

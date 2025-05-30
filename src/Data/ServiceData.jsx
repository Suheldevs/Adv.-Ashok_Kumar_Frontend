import { Scale, Heart, Home, Briefcase, FileText, Users } from "lucide-react";

import img1 from "../assets/service/1.webp";
import img2 from "../assets/service/2.webp";
import img4 from "../assets/service/4.webp";
import img5 from "../assets/service/5.webp";
import img7 from "../assets/service/7.webp";
import img8 from "../assets/service/8.webp";

const serviceData = [
  {
    id: 2,
    title: "Criminal Law",
    slog: "Criminal Law Solutions by Retd. Judge Ashok Kumar",
    icon: <Scale size={24} />,
    icon2: "👨‍⚖",
    image: img1,
    description:
      "With decades of judicial experience, Retd. Judge Ashok Kumar offers strong and fair defense in criminal cases including bail, trials, FIR quashing, and more.",
    slug: "criminal-lawyer",
    fullDescription:
      "With decades of judicial experience and an unwavering commitment to justice, Retd. Judge Ashok Kumar now offers expert criminal legal services to ensure every client receives a strong and fair defense under the law.",

    features: [
      {
        title: "Bail & Anticipatory Bail",
        icon: "🔍",
        detail:
          "Quick legal action for securing regular and anticipatory bail in criminal cases, ensuring timely protection of your rights.",
      },
      {
        title: "Criminal Trial Representation",
        icon: "⚖",
        detail:
          "Expert defense and prosecution representation in Sessions Courts and High Courts for a wide range of criminal offences.",
      },
      {
        title: "FIR Quashing",
        icon: "🚔",
        detail:
          "Legal assistance for quashing false or baseless FIRs to prevent unnecessary harassment and legal trouble.",
      },
      {
        title: "Defense in IPC Offences",
        icon: "🛡",
        detail:
          "Robust representation in cases involving serious charges under the Indian Penal Code, including assault, theft, cheating, and more.",
      },
      {
        title: "White-Collar Crimes",
        icon: "👥",
        detail:
          "Legal support in economic offences such as fraud, embezzlement, forgery, cybercrime, and corporate criminal liability.",
      },
      {
        title: "Criminal Appeals & Revisions",
        icon: "💼",
        detail:
          "Filing and arguing criminal appeals, revisions, and review petitions in higher courts with precision and judicial insight.",
      },
      {
        title: "NDPS & POCSO Cases",
        icon: "🚨",
        detail:
          "Specialized defense in sensitive cases under the Narcotic Drugs and Psychotropic Substances Act and the Protection of Children from Sexual Offences Act.",
      },
      {
        title: "Preventive Detention Matters",
        icon: "🔒",
        detail:
          "Challenging preventive detention orders and safeguarding constitutional rights through writ petitions and legal remedies.",
      },
    ],

    whyChoose: [
      "35+ years of judicial and legal experience",
      "Deep understanding of courtroom procedures and legal interpretation",
      "Trusted advisor with an ethical and client-focused approach",
      "Strong network within the legal fraternity for strategic case handling",
    ],

    faqs: [
      {
        question: "Can I apply for anticipatory bail?",
        answer:
          "Yes, our team can help you file a petition for anticipatory bail and represent you in court.",
      },
      {
        question: "Do you handle criminal appeals?",
        answer:
          "Yes, we take on appeals and revisional matters across various courts.",
      },
    ],
  },
  {
    id: 4,
    title: "Civil Law Disputes",
    icon: <Home size={24} />,
    icon2: "⚖️",
    slog: "Expert Legal Solutions by Retd. Judge Ashok Kumar",
    image: img4,
    description:
      "With judicial expertise, Retd. Judge Ashok Kumar provides strategic and ethical civil law solutions covering property, contract, inheritance, and more.",
    slug: "civil-law-disputes",

    fullDescription:
      "With a distinguished judicial career and deep legal insight, Retd. Judge Ashok Kumar offers trusted legal counsel and representation in a wide spectrum of civil law matters. His experience ensures a methodical, strategic, and client-first approach to resolving disputes efficiently and lawfully.",

    features: [
      {
        title: "Property & Land Disputes",
        icon: "🏠",
        detail:
          "Expert handling of title disputes, partition suits, property possession claims, encroachments, and adverse possession matters.",
      },
      {
        title: "Inheritance & Succession",
        icon: "📜",
        detail:
          "Legal advice and representation in inheritance disputes, will contestation, probate applications, and succession certificate proceedings.",
      },
      {
        title: "Breach of Contract",
        icon: "🤝",
        detail:
          "Filing or defending civil suits involving contract breaches, agreements violations, and damages claims.",
      },
      {
        title: "Recovery of Money",
        icon: "🧾",
        detail:
          "Legal action for recovery of unpaid dues, dishonoured cheques, and financial claims under contractual obligations.",
      },
      {
        title: "Tenant-Landlord Disputes",
        icon: "🏢",
        detail:
          "Resolution of rent control matters, eviction suits, and lease agreement conflicts under tenancy laws.",
      },
      {
        title: "Injunctions & Stay Orders",
        icon: "🚧",
        detail:
          "Urgent reliefs through temporary/permanent injunctions and stay orders to protect your legal rights and property.",
      },
      {
        title: "Declaration & Specific Performance",
        icon: "📝",
        detail:
          "Filing suits for declaration of legal rights and enforcement of contracts through specific performance orders.",
      },
      {
        title: "Civil Appeals & Revisions",
        icon: "🏛",
        detail:
          "Expert drafting and argument in appellate and revision matters before civil and high courts.",
      },
    ],

    whyChoose: [
      "Extensive knowledge of civil procedure and trial strategy",
      "Judicial background brings balance, foresight, and precision",
      "Ethical, solution-oriented approach focused on long-term results",
      "Personalized attention and clear legal advice at every stage",
    ],

    faqs: [
      {
        question: "Do you handle property dispute cases?",
        answer:
          "Yes, we assist in all types of civil property disputes including title suits, encroachments, and tenancy matters.",
      },
      {
        question: "What documents are required for a civil case?",
        answer:
          "It depends on the case type, but generally ownership proofs, agreements, and identity proofs are needed.",
      },
    ],
  },
  {
    id: 1,
    title: "Divorce & Family Law",
    icon: <Heart size={24} />,
    icon2: "💔",
    slog: "Dignified Legal Solutions by Retd. Judge Ashok Kumar",
    image: img2,
    description:
      "Dignified legal solutions in family matters by Retd. Judge Ashok Kumar. Expertise in divorce, custody, alimony, and domestic violence cases.",
    slug: "family-law",
    fullDescription:
      "Navigating family disputes requires not just legal expertise, but also empathy and discretion. With decades of experience in the judiciary, Retd. Judge Ashok Kumar offers sensitive and strategic legal support in all areas of divorce and family law, ensuring your rights and dignity are preserved at every step.",

    features: [
      {
        title: "Mutual & Contested Divorce",
        icon:'⚖️',
        detail:
          "Assistance in filing and representing both mutual consent divorces and contested divorce cases on grounds such as cruelty, adultery, desertion, and mental illness.",
      },
      {
        title: "Child Custody & Visitation",
        icon:'👨‍👩‍👧',
        detail:
          "Legal representation in custody battles, child visitation rights, joint parenting plans, and guardianship matters — always prioritizing the welfare of the child.",
      },
      {
        title: "Maintenance & Alimony",
        icon:'💰',
        detail:
          "Filing and defending maintenance and alimony claims for spouses and children, ensuring fair financial support and compliance with court directives.",
      },
      {
        title: "Property & Marital Asset Division",
        icon:'🏡',
        detail:
          "Equitable distribution of jointly owned property, investments, and other marital assets during separation or divorce proceedings.",
      },
      {
        title: "Domestic Violence & Protection Orders",
        icon:'🚨',
        detail:
          "Legal support for victims of domestic violence, including filing for protection orders, residence orders, and relief under the Protection of Women from Domestic Violence Act, 2005.",
      },
      {
        title: "Annulment & Legal Separation",
        icon:'🧾',
        detail:
          "Advisory and legal filing in cases of void or voidable marriages, including annulment petitions and legal separation proceedings.",
      },
      {
        title: "Mediation & Settlement Agreements",
        icon:'🤝',
        detail:
          "Encouraging amicable resolution of family disputes through mediation, helping parties avoid lengthy litigation and emotional strain.",
      },
    ],

    whyChoose: [
      "Over 35 years of legal and judicial experience in family law",
      "Former judge with deep insight into court procedures and rulings",
      "Compassionate and non-judgmental legal approach",
      "Complete confidentiality and ethical legal practice",
      "Trusted advisor for families during emotionally challenging times",
    ],

    faqs: [
      {
        question: "Who will handle my case?",
        answer:
          "Your case will be personally overseen by Retd. Judge Ashok Kumar, who brings over 35 years of legal and judicial experience in family law.",
      },
      {
        question: "What types of divorce do you handle?",
        answer:
          "We assist in both mutual consent divorces and contested divorce cases based on grounds such as cruelty, adultery, desertion, and mental illness.",
      },
      {
        question: "Do you provide support for child custody issues?",
        answer:
          "Yes. We represent clients in custody battles, joint parenting plans, and guardianship matters, with the child's welfare as the priority.",
      },
      {
        question: "Is mediation an option in family disputes?",
        answer:
          "Absolutely. We encourage amicable resolution through mediation to avoid emotional strain and prolonged litigation.",
      },
      {
        question: "What makes Judge Ashok Kumar's approach unique?",
        answer:
          "His compassionate, discreet, and deeply experienced approach ensures dignity, confidentiality, and strong representation in emotionally challenging cases.",
      },
    ],
  },
  {
    id: 8,
    title: "Property Law",
    icon: <FileText size={24} />,
    icon2: "🏠",
    slog: "Trusted Legal Counsel in Property Matters by Retd. Judge Ashok Kumar",
    image: img7,
    description:
      "Trusted legal counsel for property transactions, documentation, disputes, and inheritance matters, ensuring clarity and protection for your real estate interests.",
    slug: "property-lawyer",

    fullDescription:
      "With decades of experience as a former judge, Retd. Judge Ashok Kumar brings unmatched legal clarity and credibility to the complex world of property law. Whether you are facing ownership disputes, boundary issues, or legal documentation concerns, his counsel ensures your rights are protected with precision and integrity.",

    features: [
      {
        title: "Title Verification & Due Diligence",
        icon:'📜',
        detail:
          "Thorough examination of property documents to confirm clear title, ownership history, and encumbrance status before purchase or transfer.",
      },
      {
        title: "Property Disputes & Litigation",
        icon:'🏘',
        detail:
          "Representation in civil courts for disputes involving ownership, possession, partition, succession, and boundary disagreements.",
      },
      {
        title: "Ancestral Property & Partition",
        icon:'👨‍👩‍👧‍👦',
        detail:
          "Expert handling of joint family property partition suits and resolution of inheritance conflicts among legal heirs.",
      },
      {
        title: "Sale Deed, Lease & Agreement Drafting",
        icon:'📄',
        detail:
          "Drafting and vetting of property-related legal documents – including sale deeds, gift deeds, lease agreements, and power of attorney.",
      },
      {
        title: "Landlord-Tenant Disputes",
        icon:'⚖️',
        detail:
          "Legal remedies for eviction, non-payment of rent, unauthorized occupation, and breach of rental agreements under tenancy laws.",
      },
      {
        title: "Mutation, Registration & Stamp Duty",
        icon:'🧾',
        detail:
          "Assistance with property registration, mutation processes, and advice on applicable stamp duties and local registration laws.",
      },
      {
        title: "Possession & Injunction Matters",
        icon:'🛡',
        detail:
          "Legal action to reclaim possession or seek injunctions in cases of trespass, illegal occupation, or encroachment.",
      },
      {
        title: "Property Appeals & Revisions",
        icon:'🏛',
        detail:
          "Filing appeals and revisions in higher courts against property judgments or lower court decisions.",
      },
    ],

    whyChoose: [
      "Former civil court judge with deep domain knowledge in property law",
      "Precise document analysis and strong litigation strategies",
      "Ethical, transparent, and client-centric legal practice",
      "Proven track record in high-stakes and complex property cases",
    ],

    faqs: [
      {
        question: "Can you verify property ownership?",
        answer:
          "Yes, we conduct thorough due diligence to verify property title and ownership history.",
      },
      {
        question: "Do you help with property registration?",
        answer:
          "Yes, we assist with drafting, stamp duty calculation, and registration at sub-registrar offices.",
      },
    ],
  },

  {
    id: 5,
    title: "Corporate & Business Law",
    icon: <Briefcase size={24} />,
    icon2: "🏢",
    slog: "Strategic Corporate Law Solutions by Retd. Judge Ashok Kumar",
    image: img5,
    description:
      "Strategic legal counsel for businesses and professionals in compliance, contracts, labor laws, and dispute resolution with judicial insight.",
    slug: "corporate-business-law",

    fullDescription:
      "With unmatched judicial experience and a sharp understanding of commercial law, Retd. Judge Ashok Kumar now offers tailored legal services to companies, startups, and business professionals. His approach is rooted in legal precision, business practicality, and absolute confidentiality.",

    features: [
      {
        title: "Company Law Advisory",
        icon:'📄',
        detail:
          "Expert guidance on compliance with the Companies Act, 2013 – including incorporation, board governance, shareholder rights, and regulatory filings.",
      },
      {
        title: "Contract Drafting & Negotiation",
        icon:'🤝',
        detail:
          "Drafting, vetting, and negotiating various commercial agreements – including joint ventures, NDAs, vendor contracts, service agreements, and MoUs.",
      },
      {
        title: "Corporate Compliance & Regulatory Matters",
        icon:'🔍',
        detail:
          "Ensuring adherence to statutory and regulatory requirements including SEBI, RBI, MCA filings, FDI compliance, and CSR obligations.",
      },
      {
        title: "Commercial Dispute Resolution",
        icon:'⚖️',
        detail:
          "Representation in civil courts, commercial courts, and arbitration proceedings related to business disputes and contractual breaches.",
      },
      {
        title: "Banking & Financial Litigation",
        icon:'🏦',
        detail:
          "Handling cases involving loan defaults, guarantee enforcement, recovery proceedings, and disputes under the SARFAESI Act or Insolvency & Bankruptcy Code (IBC).",
      },
      {
        title: "Intellectual Property (IP) Protection",
        icon:'🔐',
        detail:
          "Legal advisory on trademark, copyright, and patent registration, protection, and infringement litigation.",
      },
      {
        title: "Mergers, Acquisitions & Corporate Restructuring",
        icon:'🧾',
        detail:
          "Legal due diligence, transaction documentation, and compliance support for mergers, acquisitions, and restructuring.",
      },
      {
        title: "Risk Management & Legal Audit",
        icon:'🛡',
        detail:
          "Identifying legal risks and conducting internal legal audits to ensure policy adherence and reduce exposure.",
      },
    ],

    whyChoose: [
      "Judicial authority with a deep grasp of corporate litigation and governance",
      "Clear, risk-averse legal strategies aligned with your business goals",
      "Transparent counsel with high ethical standards and confidentiality",
      "Ideal for startups, SMEs, and large enterprises seeking legal reliability",
    ],

    faqs: [
      {
        question: "Can you help with drafting employee contracts?",
        answer:
          "Yes, we create comprehensive, legally sound contracts tailored for your organization.",
      },
      {
        question: "What if my company is facing a labor dispute?",
        answer:
          "We represent both employers and employees in resolving labor-related issues legally and effectively.",
      },
    ],
  },
  {
    id: 7,
    title: "Document Drafting & Legal Opinions",
    icon: <Users size={24} />,
    icon2: "📝",
    slog: "Accurate Legal Drafting by Retd. Judge Ashok Kumar",
    image: img8,
    description:
      "Precise legal drafting and expert opinions from Retd. Judge Ashok Kumar to ensure your documents are valid, enforceable, and fully compliant with the law.",
    slug: "document-drafting-opinions",

    fullDescription:
      "With his vast experience as a former judge and legal expert, Retd. Judge Ashok Kumar offers accurate and enforceable drafting of legal documents along with case-specific legal opinions. Every document is prepared with attention to legal precision, protecting your interests and avoiding future disputes.",

    features: [
      {
        title: "Legal Document Drafting",
        icon:'📄',
        detail:
          "Drafting of sale deeds, gift deeds, agreements, MoUs, lease & rental agreements, wills, affidavits, and power of attorney documents.",
      },
      {
        title: "Legal Notices & Replies",
        icon:'🧾',
        detail:
          "Drafting of demand notices, breach notices, and replies for civil, matrimonial, and commercial disputes Notice for recovery, termination, defamation, and tenant eviction.",
      },
      {
        title: "Expert Legal Opinions",
        icon:'📚',
        detail:
          "Case-specific legal opinions based on document review, applicable laws, and precedents. Written legal opinions for use in court, business transactions, or personal legal decisions.",
      },
      {
        title: "Court Documentation & Filing",
        icon:'🏛',
        detail:
          "Drafting petitions, plaints, replies, affidavits, rejoinders, and appeals for court filing across various jurisdictions.",
      },
    ],

    whyChoose: [
      "Judicial-level clarity and attention to detail in drafting",
      "Legally sound, enforceable documents tailored to client needs",
      "Timely delivery and full confidentiality",
      "Reliable legal opinions based on law, logic, and decades of courtroom experience",
    ],

    faqs: [
      {
        question: "Do you draft all types of legal agreements?",
        answer:
          "Yes, we draft sale deeds, MoUs, NDAs, rental agreements, wills, affidavits, and more tailored to your specific needs.",
      },
      {
        question: "Can I get a legal opinion on a property or contract?",
        answer:
          "Absolutely. We provide expert legal opinions after reviewing relevant documents, laws, and precedents.",
      },
    ],
  },
];

export default serviceData;

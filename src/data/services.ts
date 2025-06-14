export interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export const services: ServiceDetail[] = [
  {
    id: 1,
    title: "Criminal Defense",
    description: "Representation in criminal cases with a focus on protecting your rights.",
    details: [
      "Handling all types of criminal cases from minor offenses to serious crimes",
      "Bail applications and anticipatory bail",
      "Trial representation and cross-examination of witnesses",
      "Building strong defense strategies",
      "Protection of fundamental rights during proceedings"
    ],
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Family Law",
    description: "Expert advice on divorce, child custody, and alimony matters.",
    details: [
      "Divorce proceedings and mutual consent divorce",
      "Child custody, visitation rights, and support",
      "Alimony and maintenance disputes",
      "Domestic violence cases and protection",
      "Marriage registration and prenuptial agreements"
    ],
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Property Disputes",
    description: "Legal support for property-related conflicts and documentation.",
    details: [
      "Title disputes and ownership conflicts",
      "Landlord-tenant disputes",
      "Property registration and transfer issues",
      "Boundary disputes and encroachment matters",
      "Joint family property division"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Civil Litigation",
    description: "Representation in civil cases involving disputes between individuals and organizations.",
    details: [
      "Contract disputes and breaches",
      "Consumer complaints and protection",
      "Recovery of money and damages",
      "Injunctions and specific performance",
      "Appeals in civil matters"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Corporate Law",
    description: "Legal support for businesses, from startups to established corporations.",
    details: [
      "Company incorporation and compliance",
      "Contract drafting and negotiations",
      "Mergers and acquisitions",
      "Corporate governance and advisory",
      "Business dispute resolution"
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Documentation",
    description: "Professional drafting and vetting of legal documents and agreements.",
    details: [
      "Drafting and review of contracts",
      "Will preparation and execution",
      "Power of Attorney documentation",
      "Affidavits and legal notices",
      "Partnership and shareholder agreements"
    ],
    image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export interface ExpertiseArea {
  area: string;
  details: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    area: "Civil Litigation",
    details: "Handling contract disputes, property matters, and consumer rights cases."
  },
  {
    area: "Criminal Defense",
    details: "Representing clients in criminal proceedings with a focus on due process and rights protection."
  },
  {
    area: "Family Law",
    details: "Managing divorce, child custody, alimony, and domestic relations cases with sensitivity."
  },
  {
    area: "Arbitration",
    details: "Providing specialized arbitration services to help resolve disputes outside the traditional court system."
  },
  {
    area: "Alternative Dispute Resolution",
    details: "Facilitating efficient and cost-effective dispute resolution through mediation and negotiation."
  },
  {
    area: "Constitutional Law",
    details: "Addressing matters related to fundamental rights and constitutional provisions."
  }
];

export interface WhyChooseItem {
  title: string;
  description: string;
  delay: number;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Experienced Advocate",
    description: "Three years of practice at the Calcutta High Court, with a track record of successful cases across West Bengal.",
    delay: 100
  },
  {
    title: "Client-Focused Legal Services",
    description: "Your needs and objectives are my priority. I ensure personalized attention to every legal case in Kolkata and Howrah.",
    delay: 200
  },
  {
    title: "Specialized Legal Expertise",
    description: "Expert in civil and criminal matters, arbitration, and Alternative Dispute Resolution (ADR) across West Bengal courts.",
    delay: 300
  }
];

export interface ServicePreview {
  title: string;
  description: string;
  link: string;
}

export const servicesPreviews: ServicePreview[] = [
  {
    title: "Civil Litigation",
    description: "Expert representation in all types of civil disputes and proceedings in Calcutta High Court and district courts.",
    link: "/services#civil"
  },
  {
    title: "Criminal Defense",
    description: "Strong defense strategies and representation in criminal cases with a focus on protecting your rights across West Bengal courts.",
    link: "/services#criminal"
  },
  {
    title: "Arbitration & ADR",
    description: "Specialized services for resolving disputes outside the traditional court system in Kolkata and throughout West Bengal.",
    link: "/services#arbitration"
  }
];

export interface LegalProcess {
  step: string;
  description: string;
  position: "left" | "right";
}

export const legalProcessSteps: LegalProcess[] = [
  {
    step: "Initial Consultation",
    description: "We discuss your case in detail, assess the legal issues, and outline potential approaches.",
    position: "left"
  },
  {
    step: "Case Analysis",
    description: "I conduct thorough research and analysis to understand all aspects of your legal situation.",
    position: "right"
  },
  {
    step: "Strategy Development",
    description: "Together, we develop a tailored legal strategy that aligns with your goals and priorities.",
    position: "left"
  },
  {
    step: "Implementation",
    description: "I execute the agreed strategy, handling all necessary documentation and representation.",
    position: "right"
  },
  {
    step: "Resolution",
    description: "We work toward a favorable resolution, whether through negotiation, settlement, or court judgment.",
    position: "left"
  }
];
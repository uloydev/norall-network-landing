// Services page content

export interface Service {
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  icon: 'search' | 'shield' | 'handshake' | 'landmark';
  imagePosition: 'left' | 'right';
}

export interface Stakeholder {
  title: string;
  description: string;
  image: string;
  icon: 'building' | 'recycle' | 'heart' | 'globe';
}

export const servicesPageData = {
  seo: {
    title: 'Our Services - Norall Network',
    description: 'End-to-end solutions from emerging tech scouting to large-scale European deployment. Catalyzing green innovation.',
  },
  hero: {
    badge: 'END-TO-END SOLUTIONS',
    title: 'Catalyzing',
    titleHighlight: 'Green Innovation',
    subtitle: 'From emerging tech scouting to large-scale European deployment. We bridge the gap between concept and infrastructure.',
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
  services: [
    {
      title: 'Technology Scouting & Evaluation',
      category: 'Discovery',
      description: 'We leverage a global network to identify high-potential environmental technologies from emerging economies. Our rigor goes beyond surface level—assessing technical viability, environmental impact, and scalability for the European context.',
      features: ['Global market scanning', 'Technical due diligence', 'Scalability assessment'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      icon: 'search' as const,
      imagePosition: 'left' as const,
    },
    {
      title: 'Technical Validation & EU Readiness',
      category: 'Compliance',
      description: 'Bridging the regulatory gap. We support lifecycle assessment, regulatory alignment, and compliance preparation to ensure technologies meet stringent European environmental, safety, and public procurement standards.',
      features: ['EU Regulatory Alignment', 'Lifecycle Assessment (LCA)', 'Safety & Procurement Standards'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      icon: 'shield' as const,
      imagePosition: 'right' as const,
    },
    {
      title: 'Demonstration & Deployment',
      category: 'Integration',
      description: 'We don\'t just validate; we implement. Building strategic partnerships to enable pilot projects, demonstration facilities, and early deployment within public municipalities and industrial infrastructure.',
      features: ['Pilot Project Management', 'Municipal Partnerships', 'Infrastructure Integration'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      icon: 'handshake' as const,
      imagePosition: 'left' as const,
    },
    {
      title: 'Alignment with Donors',
      category: 'Scalability',
      description: 'Aligning technologies with donor priorities, public funding mechanisms, and climate finance frameworks. We ensure financial sustainability to support long-term scalability.',
      features: ['Grant & Funding Alignment', 'Climate Finance Structuring', 'Donor Reporting'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
      icon: 'landmark' as const,
      imagePosition: 'right' as const,
    },
  ] as Service[],
  impact: {
    title: 'Creating Measurable Value',
    description: 'Our systematic approach reduces operational risk for European stakeholders while accelerating the adoption of proven solutions.',
    highlight: 'reduces operational risk',
  },
  stakeholders: {
    sectionTitle: 'Who We Work With',
    sectionSubtitle: 'Collaborating across sectors to drive systemic change.',
    badge: 'Ecosystem',
    items: [
      {
        title: 'Public Sector',
        description: 'Integrating validated solutions into public infrastructure and municipal planning.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        icon: 'building' as const,
      },
      {
        title: 'Waste Operators',
        description: 'Optimizing circularity through advanced technology adoption and process efficiency.',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop',
        icon: 'recycle' as const,
      },
      {
        title: 'Healthcare',
        description: 'Deploying safe, compliant environmental waste solutions for hospital systems.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
        icon: 'heart' as const,
      },
      {
        title: 'Donors',
        description: 'Structuring finance for scalable, high-impact projects globally.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
        icon: 'globe' as const,
      },
    ] as Stakeholder[],
  },
  cta: {
    title: 'Ready to Collaborate?',
    description: 'Norall Network welcomes dialogue with infrastructure owners, public entities, and technology developers seeking to bridge the gap between innovation and implementation.',
    highlight: 'bridge the gap',
    buttonText: 'Get in touch',
    buttonLink: '/',
  },
};

// About page content

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface MissionPillar {
  icon: 'zap' | 'target' | 'sparkles';
  title: string;
  description: string;
}

export interface GridImage {
  src: string;
  alt: string;
  rounded: string;
  overlay: string;
}

export const aboutPageData = {
  seo: {
    title: 'About Us - Norall Network',
    description: 'Norall Network AS is a Norwegian climate-tech platform focused on identifying, refining, and scaling green technologies from emerging economies for integration into the European market.',
  },
  hero: {
    badge: 'EST. AKERSHUS, NORWAY',
    title: 'About',
    titleHighlight: 'Us',
    description: 'Norall Network AS is a Norwegian climate-tech platform focused on identifying, refining, and scaling green technologies from emerging economies for integration into the European market.',
    quote: {
      text: 'We operate at the intersection of innovation, regulation, and impact—ensuring promising environmental solutions meet EU standards for sustainability, safety, and measurable outcomes.',
      author: {
        name: 'The Norall Team',
        location: 'Oslo, Norway',
        avatar: 'N',
      },
    },
  },
  process: {
    title: 'What does Norall Network do?',
    subtitle: 'We build the infrastructure for innovation transfer.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description: 'Advancing Green Technologies from Discovery to Deployment through rigorous scouting in emerging markets.',
      },
      {
        number: '02',
        title: 'Validation',
        description: 'Enabling the transition from emerging innovation to EU-Ready solutions through compliance and standardization.',
      },
      {
        number: '03',
        title: 'Impact',
        description: 'Building pathways from innovation to scalable environmental impact in European infrastructure.',
      },
    ] as ProcessStep[],
  },
  globalToLocal: {
    title: 'From Global Innovation to',
    titleHighlight: 'Local Impact',
    content: [
      'Technology transfer has traditionally moved from North to South. Norall Network advances a complementary model—where innovations originating in emerging markets are refined and scaled for deployment in Europe.',
      'This two-way approach allows proven ideas to generate impact where regulatory ambition and infrastructure capacity are highest.',
    ],
    quote: 'Bridging Global South innovation with European regulatory, environmental, and infrastructure standards.',
    cta: {
      text: 'Explore our Services',
      link: '/services',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop',
        alt: 'Sustainability',
        rounded: 'rounded-tl-3xl rounded-br-xl',
        overlay: 'bg-blue-900/10',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        alt: 'Modern City',
        rounded: 'rounded-tr-3xl rounded-bl-xl',
        overlay: 'bg-primary-900/10',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        alt: 'Business Meeting',
        rounded: 'rounded-bl-3xl rounded-tr-xl',
        overlay: 'bg-blue-900/10',
      },
      {
        src: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop',
        alt: 'Industrial',
        rounded: 'rounded-br-3xl rounded-tl-xl',
        overlay: 'bg-primary-900/10',
      },
    ] as GridImage[],
  },
  mission: {
    badge: 'Core Values',
    title: 'OUR MISSION',
    pillars: [
      {
        icon: 'zap' as const,
        title: 'Innovation from Emerging Economies',
        description: 'Breakthrough environmental technologies originating in Southeast Asia, Africa, and Latin America.',
      },
      {
        icon: 'target' as const,
        title: 'Validation & EU Readiness',
        description: 'Technical refinement, lifecycle assessment, and regulatory alignment to meet European standards.',
      },
      {
        icon: 'sparkles' as const,
        title: 'Deployment with Local Impact',
        description: 'Real-world implementation within European public infrastructure, delivering measurable environmental outcomes.',
      },
    ] as MissionPillar[],
  },
};

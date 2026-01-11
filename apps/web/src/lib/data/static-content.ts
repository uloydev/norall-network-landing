// Static content for the landing page
// This replaces the dynamic Strapi CMS data

export const staticLandingPage = {
  seo: {
    metaTitle: 'Norall Network - Zero-Emission Solutions',
    metaDescription: 'Identifying and preparing breakthrough green technologies for the European market.',
    keywords: 'zero emission, circular economy, technology transfer, plasma technology, waste management, Norway, clean technology',
    ogType: 'website',
  },
  hero: {
    title: 'Zero-Emission Solutions for a Circular Future',
    tags: ['Based in Norway',' Certifying Quality'],
    subtitle: 'Identifying and preparing breakthrough green technologies for the European market—bridging global innovation with European climate ambition.',
    description: '',
    backgroundStyle: 'gradient-dark',
    featureCards: [
      {
        id: 1,
        title: 'Global Innovation Sourcing',
        description: 'Identifying breakthrough green technologies from emerging economies.',
        icon: 'globe',
      },
      {
        id: 2,
        title: 'EU Regulatory Readiness',
        description: 'Preparing solutions to meet European sustainability and safety standards.',
        icon: 'shield',
      },
      {
        id: 3,
        title: 'Zero-Emission Focus',
        description: 'Advancing non-incineration technologies for a circular future.',
        icon: 'leaf',
      },
    ],
    primaryCta: {
      text: 'Explore our Technology',
      url: '#technology',
      variant: 'primary',
    },
  },
  sections: [
    {
      __component: 'sections.process-steps-section',
      title: 'Rethinking Technology Transfer',
      description: 'For decades, technology transfer has followed a one-way path—from North to South. Norall Network is building a two-way model, identifying breakthrough green technologies from emerging economies and preparing them for integration into the European market. By combining local innovation with regulatory readiness, we unlock scalable climate solutions while advancing circular resilience across borders.',
      videoUrl: null,
      processSteps: {
        data: [
          {
            id: 1,
            attributes: {
              title: 'Identify',
              color: 'light',
              order: 1,
            },
          },
          {
            id: 2,
            attributes: {
              title: 'Refine',
              color: 'medium',
              order: 2,
            },
          },
          {
            id: 3,
            attributes: {
              title: 'EU-Ready',
              color: 'dark',
              order: 3,
            },
          },
          {
            id: 4,
            attributes: {
              title: 'Scale',
                color: 'primary',
              order: 4,
            },
          },
        ],
      },
      problems: {
        data: [
          {
            id: 1,
            attributes: {
              title: 'Fossil-based emissions',
              description: 'from combustion',
            },
          },
          {
            id: 2,
            attributes: {
              title: 'Non-recyclable',
              description: 'bottom ash and residues',
            },
          },
          {
            id: 3,
            attributes: {
              title: 'Increasing regulatory and',
              description: 'procurement pressure',
            },
          },
        ],
      },
    },
    {
      __component: 'sections.problem-section',
      title: 'Why Norway Needs a',
      highlightedTitle: 'Clean Alternative',
      description: 'For decades, technology transfer has followed a one-way path—from North to South. Norall Network is building a two-way model, identifying breakthrough green technologies from emerging economies and preparing them for integration into the European market. By combining local innovation with regulatory readiness, we unlock scalable climate solutions while advancing circular resilience across borders.',
      image: null,
      problems: {
        data: [
          {
            id: 1,
            attributes: {
              title: 'Technology Dependence',
              description: 'Norway continues to rely on incineration and landfilling to manage hazardous and non-recyclable waste, despite its advanced waste management infrastructure.',
              order: 1,
            },
          },
          {
            id: 2,
            attributes: {
              title: 'Climate and Circularity Impact',
              description: 'These methods generate fossil-based emissions and non-recyclable residues, conflicting with long-term climate and circular economy goals.',
              order: 2,
            },
          },
          {
            id: 3,
            attributes: {
              title: 'Transition Imperative',
              description: 'Tightening regulations and net-zero targets require a shift toward clean, emission-free waste treatment technologies.',
              order: 3,
            },
          },
        ],
      },
    },
    {
      __component: 'sections.solution-grid-section',
      title: 'Our',
      highlightedTitle: 'Solution',
      description: 'A high-temperature plasma system that destroys hazardous waste at the ionic level—recovering clean energy while eliminating emissions and non-recyclable residues.',
      solutionFeatures: {
        data: [
          {
            id: 1,
            attributes: {
              title: 'Ionic-Level Decomposition',
              description: 'Waste is broken down at the ionic level using high-temperature plasma—not burned. This eliminates hazardous compounds without combustion, smoke, or secondary pollutants.',
              icon: 'atom',
            },
          },
          {
            id: 2,
            attributes: {
              title: 'Up to 94% Waste Volume Reduction',
              description: 'The plasma process dramatically reduces waste volume, minimizing transport, storage, and long-term disposal needs while maximizing material transformation.',
              icon: 'download',
            },
          },
          {
            id: 3,
            attributes: {
              title: 'No Bottom Ash, No Landfill Dependency',
              description: 'Unlike incineration, the system produces no bottom ash or non-recyclable residues, removing reliance on landfilling and permanent storage.',
              icon: 'trash',
            },
          },
          {
            id: 4,
            attributes: {
              title: 'Clean Energy Recovery',
              description: 'Recoverable energy is generated during the process, supporting energy efficiency and reducing dependency on external fossil-based power sources.',
              icon: 'lightning',
            },
          },
          {
            id: 5,
            attributes: {
              title: 'Zero-Emission Treatment Pathway',
              description: 'The closed plasma system avoids fossil combustion and significantly reduces greenhouse gas emissions—supporting net-zero and climate procurement criteria.',
              icon: 'cloud',
            },
          },
          {
            id: 6,
            attributes: {
              title: 'EU-Ready & Scalable Infrastructure',
              description: 'Designed for regulatory alignment, modular deployment, and replication—making it suitable for hospitals, recycling hubs, ports, and public sector facilities.',
              icon: 'check',
            },
          },
        ],
      },
    },
    {
      __component: 'sections.gallery-section',
      title: 'Norall',
      highlightedTitle: 'Gallery',
      description: 'A visual overview of the technologies, systems, and contexts shaping our work across borders.',
      subtitle: 'A visual overview of the technologies, systems, and contexts shaping our work across borders.',
      galleryItems: {
        data: [
          {
            id: 1,
            attributes: {
              title: 'Advanced Thermal Plasma Technology',
              description: 'High-temperature plasma system that decomposes hazardous waste at the ionic level without combustion.',
              cardStyle: 'colored-background',
              cardType: 'large',
              backgroundColor: 'dark',
              textColor: 'white',
              image: null,
              order: 1,
            },
          },
          {
            id: 2,
            attributes: {
              title: 'Hazardous & Medical Waste Challenge',
              description: 'Industrial and medical waste treatment still relies heavily on incineration, generating emissions and residual waste.',
              cardStyle: 'colored-background',
              cardType: 'small',
              backgroundColor: 'secondary',
              textColor: 'white',
              image: null,
              order: 2,
            },
          },
          {
            id: 3,
            attributes: {
              title: 'Scalable Public Infrastructure',
              description: 'EU-ready, modular systems designed for hospitals, recycling hubs, ports, and public sector facilities.',
              cardStyle: 'colored-background',
              cardType: 'small',
              backgroundColor: 'secondary',
              textColor: 'white',
              image: null,
              order: 3,
            },
          },
          {
            id: 4,
            attributes: {
              title: 'Advanced Thermal Plasma Technology',
              description: 'High-temperature plasma system that decomposes hazardous waste at the ionic level without combustion.',
              cardStyle: 'colored-background',
              cardType: 'large',
              backgroundColor: 'dark',
              textColor: 'white',
              image: null,
              order: 4,
            },
          },
          {
            id: 5,
            attributes: {
              title: 'Hazardous & Medical Waste Challenge',
              description: 'Industrial and medical waste treatment still relies heavily on incineration, generating emissions and residual waste.',
              cardStyle: 'colored-background',
              cardType: 'small',
              backgroundColor: 'secondary',
              textColor: 'white',
              image: null,
              order: 5,
            },
          },
          {
            id: 6,
            attributes: {
              title: 'Scalable Public Infrastructure',
              description: 'EU-ready, modular systems designed for hospitals, recycling hubs, ports, and public sector facilities.',
              cardStyle: 'colored-background',
              cardType: 'small',
              backgroundColor: 'secondary',
              textColor: 'white',
              image: null,
              order: 6,
            },
          },
        ],
      },
    },
    {
      __component: 'sections.contact-form-section',
      title: 'What can',
      highlightedTitle: 'we help',
      titleSuffix: 'you with?',
      description: 'We welcome inquiries from partners, public institutions, and organizations interested in clean waste solutions and cross-border collaboration.',
    },
  ],
};

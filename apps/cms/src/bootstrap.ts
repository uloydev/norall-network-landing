export default async ({ strapi }: { strapi: any }) => {
  // Check if data already exists
  const existingSteps = await strapi.db.query('api::process-step.process-step').findMany({ limit: 1 });
  
  if (existingSteps && existingSteps.length > 0) {
    console.log('✅ Seed data already exists, skipping...');
    return;
  }

  console.log('🌱 Seeding collection data...');

  try {
    // Create Process Steps
    const processSteps = await Promise.all([
      strapi.entityService.create('api::process-step.process-step', {
        data: {
          title: 'Identify',
          order: 1,
          color: 'light',
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::process-step.process-step', {
        data: {
          title: 'Refine',
          order: 2,
          color: 'medium',
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::process-step.process-step', {
        data: {
          title: 'EU-Ready',
          order: 3,
          color: 'dark',
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::process-step.process-step', {
        data: {
          title: 'Scale',
          order: 4,
          color: 'primary',
          publishedAt: new Date(),
        },
      }),
    ]);

    // Create Problem Items
    const problemItems = await Promise.all([
      strapi.entityService.create('api::problem-item.problem-item', {
        data: {
          title: 'Technology Dependence',
          description: 'Norway continues to rely on incineration and landfilling to manage hazardous and non-recyclable waste, despite its advanced waste management infrastructure.',
          icon: 'check',
          order: 1,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::problem-item.problem-item', {
        data: {
          title: 'Climate and Circularity Impact',
          description: 'These methods generate fossil-based emissions and non-recyclable residues, conflicting with long-term climate and circular economy goals.',
          icon: 'check',
          order: 2,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::problem-item.problem-item', {
        data: {
          title: 'Transition Imperative',
          description: 'Tightening regulations and net-zero targets require a shift toward clean, emission-free waste treatment technologies.',
          icon: 'check',
          order: 3,
          publishedAt: new Date(),
        },
      }),
    ]);

    // Create Solution Features
    const solutionFeatures = await Promise.all([
      strapi.entityService.create('api::solution-feature.solution-feature', {
        data: {
          title: 'Ionic-Level Decomposition',
          description: 'Waste is broken down at the ionic level using high-temperature plasma—not burned. This eliminates hazardous compounds without combustion, smoke, or secondary pollutants.',
          icon: 'atom',
          backgroundColor: 'white',
          order: 1,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::solution-feature.solution-feature', {
        data: {
          title: 'Up to 94% Waste Volume Reduction',
          description: 'The plasma process dramatically reduces waste volume, minimizing transport, storage, and long-term disposal needs while maximizing material transformation.',
          icon: 'recycle',
          backgroundColor: 'white',
          order: 2,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::solution-feature.solution-feature', {
        data: {
          title: 'No Bottom Ash, No Landfill Dependency',
          description: 'Unlike incineration, the system produces no bottom ash or non-recyclable residues, removing reliance on landfilling and permanent storage.',
          icon: 'shield',
          backgroundColor: 'white',
          order: 3,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::solution-feature.solution-feature', {
        data: {
          title: 'Clean Energy Recovery',
          description: 'Recoverable energy is generated during the process, supporting energy efficiency and reducing dependency on external fossil-based power sources.',
          icon: 'energy',
          backgroundColor: 'white',
          order: 4,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::solution-feature.solution-feature', {
        data: {
          title: 'Zero-Emission Treatment Pathway',
          description: 'The closed plasma system avoids fossil combustion and significantly reduces greenhouse gas emissions—supporting net-zero and climate procurement criteria.',
          icon: 'cloud',
          backgroundColor: 'white',
          order: 5,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::solution-feature.solution-feature', {
        data: {
          title: 'EU-Ready & Scalable Infrastructure',
          description: 'Designed for regulatory alignment, modular deployment, and replication—making it suitable for hospitals, recycling hubs, ports, and public sector facilities.',
          icon: 'globe',
          backgroundColor: 'white',
          order: 6,
          publishedAt: new Date(),
        },
      }),
    ]);

    // Create Gallery Items
    const galleryItems = await Promise.all([
      strapi.entityService.create('api::gallery-item.gallery-item', {
        data: {
          title: 'Advanced Thermal Plasma Technology',
          description: 'High-temperature plasma system that decomposes hazardous waste at the ionic level without combustion.',
          cardStyle: 'colored-background',
          backgroundColor: 'dark',
          order: 1,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::gallery-item.gallery-item', {
        data: {
          title: 'Hazardous & Medical Waste Challenge',
          description: 'Industrial and medical waste treatment still relies heavily on incineration, generating emissions and residual waste.',
          cardStyle: 'colored-background',
          backgroundColor: 'secondary',
          order: 2,
          publishedAt: new Date(),
        },
      }),
      strapi.entityService.create('api::gallery-item.gallery-item', {
        data: {
          title: 'Scalable Public Infrastructure',
          description: 'EU-ready, modular systems designed for hospitals, recycling hubs, ports, and public sector facilities.',
          cardStyle: 'colored-background',
          backgroundColor: 'secondary',
          order: 3,
          publishedAt: new Date(),
        },
      }),
    ]);

    console.log('✅ Collection data seeded successfully!');
    console.log('📊 Created:');
    console.log(`   - ${processSteps.length} Process Steps`);
    console.log(`   - ${problemItems.length} Problem Items`);
    console.log(`   - ${solutionFeatures.length} Solution Features`);
    console.log(`   - ${galleryItems.length} Gallery Items`);
    console.log('');
    console.log('📝 Next: Create your Landing Page via Strapi admin:');
    console.log('   http://localhost:1337/cms/admin/content-manager/singleType/api::landing-page.landing-page');
    console.log('   Then select the items from these collections in each section!');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    throw error;
  }
};

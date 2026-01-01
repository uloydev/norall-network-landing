import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService!.findMany('api::landing-page.landing-page', {
      populate: {
        hero: {
          populate: {
            tags: true,
            featureCards: true,
            primaryCta: true,
            secondaryCta: true,
            backgroundImage: true,
          },
        },
        sections: {
          populate: {
            processSteps: true,
            problems: true,
            solutionFeatures: true,
            galleryItems: true,
            image: true,
            testimonials: {
              populate: ['avatar'],
            },
            primaryCta: true,
            secondaryCta: true,
          },
        },
        seo: {
          populate: ['metaImage'],
        },
      },
    });
    return entity;
  },
}));

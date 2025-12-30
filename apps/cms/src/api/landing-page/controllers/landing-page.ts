import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService!.findMany('api::landing-page.landing-page', {
      populate: {
        hero: {
          populate: {
            primaryCta: true,
            secondaryCta: true,
            image: true,
          },
        },
        sections: {
          populate: {
            features: true,
            testimonials: {
              populate: ['avatar'],
            },
            button: true,
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

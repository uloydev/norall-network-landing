import type { PageServerLoad } from './$types';
import { staticLandingPage } from '$lib/data/static-content';

export const load: PageServerLoad = async () => {
  // Return static content instead of fetching from Strapi
  return {
    landingPage: staticLandingPage,
  };
};

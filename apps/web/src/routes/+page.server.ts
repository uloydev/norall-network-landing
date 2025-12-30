import type { PageServerLoad } from './$types';
import { fetchFromCMS } from '$lib/api/cms';
import type { LandingPage } from '$lib/types/cms';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  try {
    // Strapi single types return data directly (not wrapped in { data: ... })
    const landingPage = await fetchFromCMS<LandingPage>('/landing-page?populate=deep');
    
    if (!landingPage || !landingPage.hero) {
      // Return empty/default data if content doesn't exist yet
      return {
        landingPage: {
          hero: {
            title: 'Welcome to Noral',
            subtitle: 'Getting Started',
            description: 'Create your landing page content in Strapi CMS admin panel.',
          },
          sections: [],
        },
      };
    }

    return {
      landingPage,
    };
  } catch (err: any) {
    console.error('Error loading landing page:', err);
    
    // Return default content instead of throwing error
    return {
      landingPage: {
        hero: {
          title: 'Welcome to Noral',
          subtitle: 'Setup Required',
          description: 'Please create landing page content in Strapi CMS at http://localhost:1337/admin',
        },
        sections: [],
      },
    };
  }
};

import type { PageServerLoad } from './$types';
import { fetchFromCMS } from '$lib/api/cms';
import type { LandingPage } from '$lib/types/cms';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  try {
    // Build explicit populate query for hero nested components
    const populateQuery = [
      'populate[hero][populate][tags][populate]=*',
      'populate[hero][populate][featureCards][populate]=*',
      'populate[hero][populate][primaryCta][populate]=*',
      'populate[hero][populate][secondaryCta][populate]=*',
      'populate[hero][populate][backgroundImage][populate]=*',
      'populate[sections][populate]=*',
      'populate[seo][populate]=*'
    ].join('&');
    
    // Fetch landing page structure with properly populated hero
    const landingPage = await fetchFromCMS<any>(`/landing-page?${populateQuery}`);
    
    // Fetch all collection data separately (with error handling for 403)
    const fetchCollection = async (endpoint: string) => {
      try {
        return await fetchFromCMS<any>(endpoint);
      } catch (err: any) {
        console.warn(`Failed to fetch ${endpoint}: ${err.message}`);
        console.warn('Make sure the endpoint is public in Strapi: Settings > Roles > Public > Enable "find"');
        return { data: [] }; // Return empty data structure
      }
    };
    
    const [processSteps, problems, solutionFeatures, galleryItems] = await Promise.all([
      fetchCollection('/process-steps?populate=*'),
      fetchCollection('/problem-items?populate=*'),
      fetchCollection('/solution-features?populate=*'),
      fetchCollection('/gallery-items?populate=*')
    ]);
    
    // Manually attach collection data to sections that need them
    if (landingPage.sections) {
      landingPage.sections = landingPage.sections.map((section: any) => {
        if (section.__component === 'sections.process-steps-section') {
          return { ...section, processSteps };
        } else if (section.__component === 'sections.problem-section') {
          return { ...section, problems };
        } else if (section.__component === 'sections.solution-grid-section') {
          return { ...section, solutionFeatures };
        } else if (section.__component === 'sections.gallery-section') {
          return { ...section, galleryItems };
        }
        return section;
      });
    }
    
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

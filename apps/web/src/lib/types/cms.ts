export interface Button {
  text: string;
  url: string;
  variant: 'primary' | 'secondary' | 'outline';
  openInNewTab: boolean;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  metaImage?: {
    url: string;
    alternativeText?: string;
  };
  canonicalURL?: string;
}

export interface Hero {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: Button;
  secondaryCta?: Button;
  image?: {
    url: string;
    alternativeText?: string;
  };
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string;
  order: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar?: {
    url: string;
    alternativeText?: string;
  };
  rating: number;
  order: number;
}

export interface FeaturesSection {
  __component: 'sections.features-section';
  title: string;
  subtitle?: string;
  features: Feature[];
}

export interface TestimonialsSection {
  __component: 'sections.testimonials-section';
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export interface CTASection {
  __component: 'sections.cta-section';
  title: string;
  description?: string;
  button: Button;
  backgroundColor: 'primary' | 'secondary' | 'dark' | 'light';
}

export type Section = FeaturesSection | TestimonialsSection | CTASection;

export interface LandingPage {
  hero: Hero;
  sections?: Section[];
  seo?: SEO;
}

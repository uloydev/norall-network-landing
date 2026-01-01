import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsContactFormSection extends Schema.Component {
  collectionName: 'components_sections_contact_forms';
  info: {
    displayName: 'Contact Form Section';
    description: 'Contact form with customizable fields';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 150;
      }>;
    subtitle: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    submitButtonText: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Attribute.DefaultTo<'Get Started'>;
    successMessage: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Attribute.DefaultTo<"Thank you for your message. We'll get back to you soon!">;
    showNameField: Attribute.Boolean & Attribute.DefaultTo<true>;
    showEmailField: Attribute.Boolean & Attribute.DefaultTo<true>;
    showPhoneField: Attribute.Boolean & Attribute.DefaultTo<true>;
    showServiceField: Attribute.Boolean & Attribute.DefaultTo<true>;
    showMessageField: Attribute.Boolean & Attribute.DefaultTo<true>;
    backgroundColor: Attribute.Enumeration<['white', 'light', 'background']> &
      Attribute.DefaultTo<'background'>;
  };
}

export interface SectionsCtaSection extends Schema.Component {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CTA Section';
    description: 'Call-to-action section to drive conversions (signup, contact, etc.)';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 150;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    button: Attribute.Component<'shared.button'> & Attribute.Required;
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'dark', 'light', 'gradient']> &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['compact', 'medium', 'large']> & Attribute.DefaultTo<'medium'>;
  };
}

export interface SectionsFeaturesSection extends Schema.Component {
  collectionName: 'components_sections_features_sections';
  info: {
    displayName: 'Features Section';
    description: 'Showcase product/service features with icons and descriptions';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 100;
      }>;
    subtitle: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    features: Attribute.Relation<'sections.features-section', 'oneToMany', 'api::feature.feature'>;
    layout: Attribute.Enumeration<['grid-2', 'grid-3', 'grid-4', 'list']> &
      Attribute.DefaultTo<'grid-3'>;
  };
}

export interface SectionsGallerySection extends Schema.Component {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery Section';
    description: 'Image gallery grid with titles and descriptions';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 100;
      }>;
    subtitle: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    galleryItems: Attribute.Relation<
      'sections.gallery-section',
      'oneToMany',
      'api::gallery-item.gallery-item'
    >;
    layout: Attribute.Enumeration<['grid-2', 'grid-3', 'grid-4', 'masonry']> &
      Attribute.DefaultTo<'grid-3'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero Section';
    description: 'Main hero/banner section with gradient background, tags, and feature cards';
    icon: 'star';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 200;
      }>;
    subtitle: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    tags: Attribute.Component<'shared.tag', true>;
    primaryCta: Attribute.Component<'shared.button'>;
    secondaryCta: Attribute.Component<'shared.button'>;
    featureCards: Attribute.Component<'shared.feature-card', true> &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 4;
        },
        number
      >;
    backgroundStyle: Attribute.Enumeration<
      ['gradient-blue', 'gradient-dark', 'solid-primary', 'solid-dark', 'image']
    > &
      Attribute.DefaultTo<'gradient-blue'>;
    backgroundImage: Attribute.Media<'images'>;
    videoUrl: Attribute.String;
    textAlignment: Attribute.Enumeration<['left', 'center']> & Attribute.DefaultTo<'left'>;
  };
}

export interface SectionsProblemSection extends Schema.Component {
  collectionName: 'components_sections_problems';
  info: {
    displayName: 'Problem Section';
    description: "Section highlighting problems or challenges (e.g., 'Why Norway Needs a Clean Alternative')";
    icon: 'discuss';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 200;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 1000;
      }>;
    problems: Attribute.Relation<
      'sections.problem-section',
      'oneToMany',
      'api::problem-item.problem-item'
    >;
    image: Attribute.Media<'images'>;
    imagePosition: Attribute.Enumeration<['left', 'right']> & Attribute.DefaultTo<'right'>;
  };
}

export interface SectionsProcessStepsSection extends Schema.Component {
  collectionName: 'components_sections_process_steps';
  info: {
    displayName: 'Process Steps Section';
    description: 'Horizontal bar showing process steps (Identify \u2192 Refine \u2192 EU-Ready \u2192 Scale)';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 200;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1000;
      }>;
    processSteps: Attribute.Relation<
      'sections.process-steps-section',
      'oneToMany',
      'api::process-step.process-step'
    >;
    videoUrl: Attribute.String;
    videoPlaceholder: Attribute.Media<'images'>;
  };
}

export interface SectionsSolutionGridSection extends Schema.Component {
  collectionName: 'components_sections_solution_grids';
  info: {
    displayName: 'Solution Grid Section';
    description: 'Grid layout showcasing solution features with icons and descriptions';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 100;
      }>;
    subtitle: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    solutionFeatures: Attribute.Relation<
      'sections.solution-grid-section',
      'oneToMany',
      'api::solution-feature.solution-feature'
    >;
    layout: Attribute.Enumeration<['grid-2', 'grid-3', 'grid-4']> & Attribute.DefaultTo<'grid-3'>;
    cardStyle: Attribute.Enumeration<['elevated', 'flat', 'bordered']> &
      Attribute.DefaultTo<'elevated'>;
  };
}

export interface SectionsTestimonialsSection extends Schema.Component {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
    description: 'Display customer testimonials and reviews for social proof';
    icon: 'quote';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 100;
      }>;
    subtitle: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    testimonials: Attribute.Relation<
      'sections.testimonials-section',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    layout: Attribute.Enumeration<['carousel', 'grid-2', 'grid-3']> &
      Attribute.DefaultTo<'carousel'>;
    showRatings: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: 'Reusable button/link component for CTAs';
    icon: 'cursor';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 50;
      }>;
    url: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary', 'outline', 'ghost']> &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['small', 'medium', 'large']> & Attribute.DefaultTo<'medium'>;
    openInNewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    ariaLabel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedFeatureCard extends Schema.Component {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'Feature Card';
    description: 'Small feature card with icon, title, and description (for hero section)';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 100;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    icon: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO Metadata';
    description: 'Search engine optimization and social media sharing metadata';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    keywords: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    metaImage: Attribute.Media<'images'>;
    canonicalURL: Attribute.String;
    ogType: Attribute.Enumeration<['website', 'article', 'product']> &
      Attribute.DefaultTo<'website'>;
    noIndex: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedTag extends Schema.Component {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
    description: "Small tag or badge (e.g., 'Based in Norway', 'Certifying Quality')";
    icon: 'label';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 50;
      }>;
    variant: Attribute.Enumeration<['default', 'outline', 'solid']> &
      Attribute.DefaultTo<'default'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.contact-form-section': SectionsContactFormSection;
      'sections.cta-section': SectionsCtaSection;
      'sections.features-section': SectionsFeaturesSection;
      'sections.gallery-section': SectionsGallerySection;
      'sections.hero': SectionsHero;
      'sections.problem-section': SectionsProblemSection;
      'sections.process-steps-section': SectionsProcessStepsSection;
      'sections.solution-grid-section': SectionsSolutionGridSection;
      'sections.testimonials-section': SectionsTestimonialsSection;
      'shared.button': SharedButton;
      'shared.feature-card': SharedFeatureCard;
      'shared.seo': SharedSeo;
      'shared.tag': SharedTag;
    }
  }
}

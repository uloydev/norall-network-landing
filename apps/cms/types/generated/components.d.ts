import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsCtaSection extends Schema.Component {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CTA Section';
    description: 'Call-to-action section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    button: Attribute.Component<'shared.button'> & Attribute.Required;
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'dark', 'light']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface SectionsFeaturesSection extends Schema.Component {
  collectionName: 'components_sections_features_sections';
  info: {
    displayName: 'Features Section';
    description: 'Section displaying features';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    features: Attribute.Relation<'sections.features-section', 'oneToMany', 'api::feature.feature'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: 'Hero section component';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    description: Attribute.Text;
    primaryCta: Attribute.Component<'shared.button'>;
    secondaryCta: Attribute.Component<'shared.button'>;
    image: Attribute.Media<'images'>;
  };
}

export interface SectionsTestimonialsSection extends Schema.Component {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
    description: 'Section displaying testimonials';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    testimonials: Attribute.Relation<
      'sections.testimonials-section',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: 'Button component';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary', 'outline']> &
      Attribute.DefaultTo<'primary'>;
    openInNewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    description: 'SEO meta information';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    keywords: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.cta-section': SectionsCtaSection;
      'sections.features-section': SectionsFeaturesSection;
      'sections.hero': SectionsHero;
      'sections.testimonials-section': SectionsTestimonialsSection;
      'shared.button': SharedButton;
      'shared.seo': SharedSeo;
    }
  }
}

<script lang="ts">
  import type { PageData } from './$types';
  import Hero from '$components/sections/Hero.svelte';
  import TestimonialsSection from '$components/sections/TestimonialsSection.svelte';
  import CTASection from '$components/sections/CTASection.svelte';
  import ProcessStepsSection from '$components/sections/ProcessStepsSection.svelte';
  import ProblemSection from '$components/sections/ProblemSection.svelte';
  import SolutionGridSection from '$components/sections/SolutionGridSection.svelte';
  import GallerySection from '$components/sections/GallerySection.svelte';
  import ContactFormSection from '$components/sections/ContactFormSection.svelte';

  export let data: PageData;

  const { landingPage } = data;
  
  // Debug logging
  console.log('Landing Page Data:', landingPage);
  console.log('Sections:', landingPage.sections);
</script>

<svelte:head>
  {#if landingPage.seo}
    <title>{landingPage.seo.metaTitle}</title>
    <meta name="description" content={landingPage.seo.metaDescription} />
    {#if landingPage.seo.keywords}
      <meta name="keywords" content={landingPage.seo.keywords} />
    {/if}
    {#if landingPage.seo.canonicalURL}
      <link rel="canonical" href={landingPage.seo.canonicalURL} />
    {/if}
    {#if landingPage.seo.noIndex}
      <meta name="robots" content="noindex, nofollow" />
    {/if}
    
    <!-- Open Graph -->
    <meta property="og:title" content={landingPage.seo.metaTitle} />
    <meta property="og:description" content={landingPage.seo.metaDescription} />
    <meta property="og:type" content={landingPage.seo.ogType || 'website'} />
    {#if landingPage.seo.metaImage}
      <meta property="og:image" content={landingPage.seo.metaImage.url} />
    {/if}
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={landingPage.seo.metaTitle} />
    <meta name="twitter:description" content={landingPage.seo.metaDescription} />
    {#if landingPage.seo.metaImage}
      <meta name="twitter:image" content={landingPage.seo.metaImage.url} />
    {/if}
  {:else}
    <title>Welcome</title>
  {/if}
</svelte:head>

<!-- Hero Section -->
<Hero hero={landingPage.hero} />

<!-- Dynamic Sections -->
{#if landingPage.sections}
  {#each landingPage.sections as section}
    {#if section.__component === 'sections.process-steps-section'}
      <ProcessStepsSection {section} />
    {:else if section.__component === 'sections.problem-section'}
      <ProblemSection {section} />
    {:else if section.__component === 'sections.solution-grid-section'}
      <SolutionGridSection {section} />
    {:else if section.__component === 'sections.testimonials-section'}
      <TestimonialsSection {section} />
    {:else if section.__component === 'sections.gallery-section'}
      <GallerySection {section} />
    {:else if section.__component === 'sections.contact-form-section'}
      <ContactFormSection {section} />
    {:else if section.__component === 'sections.cta-section'}
      <CTASection {section} />
    {/if}
  {/each}
{/if}

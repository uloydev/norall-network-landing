<script lang="ts">
  import type { PageData } from './$types';
  import Hero from '$components/sections/Hero.svelte';
  import FeaturesSection from '$components/sections/FeaturesSection.svelte';
  import TestimonialsSection from '$components/sections/TestimonialsSection.svelte';
  import CTASection from '$components/sections/CTASection.svelte';

  export let data: PageData;

  const { landingPage } = data;
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
    
    <!-- Open Graph -->
    <meta property="og:title" content={landingPage.seo.metaTitle} />
    <meta property="og:description" content={landingPage.seo.metaDescription} />
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
    {#if section.__component === 'sections.features-section'}
      <FeaturesSection {section} />
    {:else if section.__component === 'sections.testimonials-section'}
      <TestimonialsSection {section} />
    {:else if section.__component === 'sections.cta-section'}
      <CTASection {section} />
    {/if}
  {/each}
{/if}

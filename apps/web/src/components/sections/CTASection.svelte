<script lang="ts">
  import type { CTASection } from '$lib/types/cms';
  import Container from '$components/ui/Container.svelte';
  import Button from '$components/ui/Button.svelte';

  export let section: CTASection;

  const bgClasses = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-800',
    dark: 'bg-secondary-900',
    light: 'bg-secondary-50',
  };

  const textClasses = {
    primary: 'text-white',
    secondary: 'text-white',
    dark: 'text-white',
    light: 'text-secondary-900',
  };

  const descriptionClasses = {
    primary: 'text-primary-100',
    secondary: 'text-secondary-300',
    dark: 'text-secondary-300',
    light: 'text-secondary-600',
  };
</script>

<section class="{bgClasses[section.backgroundColor]} py-16 md:py-20">
  <Container>
    <div class="text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl {textClasses[section.backgroundColor]}">
        {section.title}
      </h2>
      {#if section.description}
        <p class="mx-auto mb-8 max-w-2xl text-lg {descriptionClasses[section.backgroundColor]}">
          {section.description}
        </p>
      {/if}
      <div class="flex justify-center">
        <Button button={section.button} size="lg" />
      </div>
    </div>
  </Container>
</section>

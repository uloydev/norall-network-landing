<script lang="ts">
  import type { FeaturesSection } from '$lib/types/cms';
  import Container from '$components/ui/Container.svelte';
  import Section from '$components/ui/Section.svelte';

  export let section: FeaturesSection;
</script>

<Section>
  <Container>
    <div class="text-center">
      <h2 class="mb-4 text-3xl font-bold text-secondary-900 md:text-4xl lg:text-5xl">
        {section.title}
      </h2>
      {#if section.subtitle}
        <p class="mx-auto mb-16 max-w-3xl text-lg text-secondary-600">
          {section.subtitle}
        </p>
      {/if}
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each section.features as feature}
        <div class="rounded-xl border border-secondary-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
          {#if feature.icon}
            <div class="mb-4 text-4xl">{feature.icon}</div>
          {/if}
          <h3 class="mb-3 text-xl font-semibold text-secondary-900">
            {feature.title}
          </h3>
          <p class="text-secondary-600">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </Container>
</Section>

<script lang="ts">
  import type { Hero } from '$lib/types/cms';
  import { getMediaUrl } from '$lib/api/cms';
  import Container from '$components/ui/Container.svelte';
  import Button from '$components/ui/Button.svelte';

  export let hero: Hero;
</script>

<section class="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
  <Container>
    <div class="grid gap-12 py-20 md:grid-cols-2 md:py-28 lg:gap-16 lg:py-36">
      <!-- Text Content -->
      <div class="flex flex-col justify-center">
        {#if hero.subtitle}
          <p class="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-600">
            {hero.subtitle}
          </p>
        {/if}
        
        <h1 class="mb-6 text-4xl font-bold leading-tight text-secondary-900 md:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        
        {#if hero.description}
          <p class="mb-8 text-lg text-secondary-600 md:text-xl">
            {hero.description}
          </p>
        {/if}
        
        <div class="flex flex-wrap gap-4">
          {#if hero.primaryCta}
            <Button button={hero.primaryCta} size="lg" />
          {/if}
          {#if hero.secondaryCta}
            <Button button={hero.secondaryCta} size="lg" />
          {/if}
        </div>
      </div>

      <!-- Image -->
      {#if hero.image}
        <div class="relative flex items-center justify-center">
          <div class="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[500px]">
            <img
              src={getMediaUrl(hero.image.url)}
              alt={hero.image.alternativeText || hero.title}
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      {/if}
    </div>
  </Container>
</section>

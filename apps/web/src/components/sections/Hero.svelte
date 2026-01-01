<script lang="ts">
  import type { Hero } from '$lib/types/cms';
  import { getMediaUrl } from '$lib/api/cms';
  import Container from '$components/ui/Container.svelte';
  import Button from '$components/ui/Button.svelte';

  export let hero: Hero;

  const backgroundStyles = {
    'gradient-blue': 'bg-gradient-to-br from-secondary-600 via-secondary-700 to-primary-800',
    'gradient-dark': 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
    'solid-primary': 'bg-primary-500',
    'solid-dark': 'bg-gray-900',
    image: '',
  };

  const iconMap: Record<string, string> = {
    globe: '🌍',
    shield: '🛡️',
    leaf: '🍃',
    energy: '⚡',
    recycle: '♻️',
    atom: '⚛️',
    cloud: '☁️',
    rocket: '🚀',
    star: '⭐',
    heart: '❤️',
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return '⚡';
    return iconMap[iconName] || '⚡';
  };

  const bgClass = backgroundStyles[hero.backgroundStyle || 'gradient-blue'];
  const textClass =
    hero.backgroundStyle === 'gradient-blue' ||
    hero.backgroundStyle === 'gradient-dark' ||
    hero.backgroundStyle === 'solid-primary' ||
    hero.backgroundStyle === 'solid-dark'
      ? 'text-white'
      : 'text-gray-900';
  const isLight =
    hero.backgroundStyle !== 'gradient-blue' &&
    hero.backgroundStyle !== 'gradient-dark' &&
    hero.backgroundStyle !== 'solid-primary' &&
    hero.backgroundStyle !== 'solid-dark';

  console.log('Hero data:', hero);
  console.log('Feature cards:', hero.featureCards);
</script>

<section class="relative overflow-hidden min-h-screen bg-slate-800 " class:text-white={!isLight}>
  {#if hero.backgroundStyle === 'image' && hero.backgroundImage}
    <div class="absolute inset-0 z-0">
      <img
        src={getMediaUrl(hero.backgroundImage.url)}
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>
  {/if}

  <Container maxWidth="tailwind" additionalClasses="h-full min-h-screen">
    <div
      class="w-full h-full min-h-screen z-10 flex flex-col justify-center items-center py-12 md:py-0 md:gap-y-24 {hero.textAlignment === 'center'
        ? 'text-center'
        : ''}"
    >
      <!-- Main Content -->
      <div
        class="max-w-full w-full flex flex-col md:flex-row gap-y-8 md:gap-x-20 {hero.textAlignment === 'center'
          ? 'mx-auto'
          : ''}"
      >
        <div class="flex-grow">
          <h1 class="mb-4 md:mb-6 text-3xl sm:text-4xl font-medium leading-tight md:text-5xl lg:text-6xl {textClass}">
            {hero.title}
          </h1>
          <!-- Tags -->
          {#if hero.tags && hero.tags.length > 0}
              <span class="text-xs font-light bg-white/25 px-6 md:px-8 py-1 rounded-full inline-block">{@html hero.tags.map(tag => tag.text).join(" &middot; ")}</span>
          {/if}
        </div>
        <div class="md:max-w-md lg:max-w-lg xl:max-w-full">
          {#if hero.subtitle}
            <p class="mb-6 md:mb-8 text-base md:text-lg lg:text-xl {isLight ? 'text-gray-600' : 'text-white/90'}">
              {hero.subtitle}
            </p>
          {/if}

          <!-- CTA Buttons -->
          {#if hero.primaryCta || hero.secondaryCta}
            <div
              class="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 {hero.textAlignment === 'center'
                ? 'justify-center'
                : ''}"
            >
              {#if hero.primaryCta}
                <Button button={hero.primaryCta} size="sm" additionalClasses="border border-white rounded-full bg-white text-black px-8 md:px-12 hover:text-white hover:bg-primary-900 transition-all duration-500 text-sm md:text-base" />
              {/if}
              {#if hero.secondaryCta}
                <Button button={hero.secondaryCta} size="sm" additionalClasses="border border-white rounded-full bg-white text-black px-8 md:px-12 hover:text-white hover:bg-primary-900 transition-all duration-500 text-sm md:text-base" />
              {/if}
            </div>
          {/if}
        </div>
      </div>

      <!-- Feature Cards -->
      {#if hero.featureCards && hero.featureCards.length > 0}
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-x-8 md:gap-y-6 max-w-full mt-8 md:mt-16 {hero.textAlignment === 'center'
            ? 'mx-auto'
            : ''}"
        >
          {#each hero.featureCards as card}
            <div
              class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all flex flex-col justify-center items-start gap-y-12 md:gap-y-20"
            >
              <h3 class="text-3xl sm:text-4xl md:text-5xl font-normal mb-2 text-white">
                {card.title}
              </h3>
              {#if card.description}
                <p class="text-sm md:text-base text-white/80">
                  {card.description}
                </p>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </Container>
</section>

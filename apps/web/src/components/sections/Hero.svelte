<script lang="ts">
  import { onMount } from 'svelte';
  import type { Hero } from '$lib/types/cms';
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
  
  let visibleCards: boolean[] = [];
  let showLeftContent = false;
  let showRightContent = false;
  let hasAnimated = false;
  let cardsElement: HTMLElement;
  let heroElement: HTMLElement;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            startAnimationSequence();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroElement) {
      observer.observe(heroElement);
    }
    
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  });
  
  function startAnimationSequence() {
    // Step 1: Show left content (title and tags)
    setTimeout(() => {
      showLeftContent = true;
    }, 800);
    
    // Step 2: Show right content (subtitle and CTA)
    setTimeout(() => {
      showRightContent = true;
    }, 1600);
    
    // Step 3: Show feature cards one by one
    setTimeout(() => {
      animateCards();
    }, 2400);
  }
  
  function animateCards() {
    if (!hero.featureCards || hero.featureCards.length === 0) return;
    
    visibleCards = new Array(hero.featureCards.length).fill(false);
    
    hero.featureCards.forEach((_, index) => {
      setTimeout(() => {
        visibleCards[index] = true;
        visibleCards = [...visibleCards];
      }, index * 700);
    });
  }
</script>

<style>
  @keyframes sphereMove {
    0% {
      transform: translate(30vw, 100vh);
    }
    50% {
      transform: translate(0, 50vh);
    }
    100% {
      transform: translate(-30vw, 100vh);
    }
  }
  
  .animated-sphere {
    animation: sphereMove 20s ease-in-out infinite alternate;
  }
</style>

<section class="relative overflow-hidden min-h-screen bg-black pt-28" class:text-white={!isLight}>
  <!-- Animated Sphere Background -->
  <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div 
      class="animated-sphere absolute w-[150vh] h-[150vh] rounded-full blur-[250px] opacity-70 bottom-0 right-0"
      style="background: radial-gradient(circle, #FFFFFF 0%, #48ffff 40%, #007bff 70%);"
    ></div>
  </div>

  <Container maxWidth="tailwind" additionalClasses="h-full min-h-screen">
    <div
      bind:this={heroElement}
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
        <div class="flex-grow transition-all duration-700 {showLeftContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}">
          <h1 class="mb-4 md:mb-6 text-3xl sm:text-4xl font-medium leading-tight md:text-5xl lg:text-6xl {textClass}">
            {hero.title}
          </h1>
          <!-- Tags -->
          {#if hero.tags && hero.tags.length > 0}
              <span class="text-xs font-light bg-white/25 px-6 md:px-8 py-1 rounded-full inline-block">{@html hero.tags.join(" &middot; ")}</span>
          {/if}
        </div>
        <div class="md:max-w-md lg:max-w-lg xl:max-w-full transition-all duration-700 {showRightContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}">
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
          bind:this={cardsElement}
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-x-8 md:gap-y-6 max-w-full mt-8 md:mt-16 {hero.textAlignment === 'center'
            ? 'mx-auto'
            : ''}"
        >
          {#each hero.featureCards as card, index}
            <div
              class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-500 flex flex-col justify-center items-start gap-y-12 md:gap-y-20 {visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
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

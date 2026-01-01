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
    'image': ''
  };
  
  const iconMap: Record<string, string> = {
    'globe': '🌍',
    'shield': '🛡️',
    'leaf': '🍃',
    'energy': '⚡',
    'recycle': '♻️',
    'atom': '⚛️',
    'cloud': '☁️',
    'rocket': '🚀',
    'star': '⭐',
    'heart': '❤️',
  };
  
  const getIcon = (iconName?: string) => {
    if (!iconName) return '⚡';
    return iconMap[iconName] || '⚡';
  };
  
  const bgClass = backgroundStyles[hero.backgroundStyle || 'gradient-blue'];
  const textClass = (hero.backgroundStyle === 'gradient-blue' || hero.backgroundStyle === 'gradient-dark' || hero.backgroundStyle === 'solid-primary' || hero.backgroundStyle === 'solid-dark') ? 'text-white' : 'text-gray-900';
  const isLight = hero.backgroundStyle !== 'gradient-blue' && hero.backgroundStyle !== 'gradient-dark' && hero.backgroundStyle !== 'solid-primary' && hero.backgroundStyle !== 'solid-dark';
  
  console.log('Hero data:', hero);
  console.log('Feature cards:', hero.featureCards);
</script>

<section class="relative overflow-hidden {bgClass}" class:text-white={!isLight}>
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
  
  <Container>
    <div class="relative z-10 py-20 md:py-28 lg:py-36 {hero.textAlignment === 'center' ? 'text-center' : ''}">
      <!-- Tags -->
      {#if hero.tags && hero.tags.length > 0}
        <div class="flex gap-3 mb-6 {hero.textAlignment === 'center' ? 'justify-center' : ''}">
          {#each hero.tags as tag}
            <span class="px-4 py-1.5 rounded-full text-sm font-medium 
              {tag.variant === 'solid' ? 'bg-white/20 text-white' : 'border border-white/30 text-white'}">
              {tag.text}
            </span>
          {/each}
        </div>
      {/if}
      
      <!-- Main Content -->
      <div class="max-w-4xl {hero.textAlignment === 'center' ? 'mx-auto' : ''}">
        <h1 class="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl {textClass}">
          {hero.title}
        </h1>
        
        {#if hero.subtitle}
          <p class="mb-8 text-lg md:text-xl {isLight ? 'text-gray-600' : 'text-white/90'}">
            {hero.subtitle}
          </p>
        {/if}
        
        <!-- CTA Buttons -->
        {#if hero.primaryCta || hero.secondaryCta}
          <div class="flex flex-wrap gap-4 mb-12 {hero.textAlignment === 'center' ? 'justify-center' : ''}">
            {#if hero.primaryCta}
              <Button button={hero.primaryCta} size="lg" />
            {/if}
            {#if hero.secondaryCta}
              <Button button={hero.secondaryCta} size="lg" />
            {/if}
          </div>
        {/if}
      </div>

      <!-- Feature Cards -->
      {#if hero.featureCards && hero.featureCards.length > 0}
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mt-16 {hero.textAlignment === 'center' ? 'mx-auto' : ''}">
          {#each hero.featureCards as card}
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div class="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <span class="text-2xl">{getIcon(card.icon)}</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">
                {card.title}
              </h3>
              {#if card.description}
                <p class="text-white/80">
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

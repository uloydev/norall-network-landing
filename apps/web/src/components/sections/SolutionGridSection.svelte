<script lang="ts">
  import ScrollReveal from '$components/ui/ScrollReveal.svelte';
  import ScrollRevealStagger from '$components/ui/ScrollRevealStagger.svelte';
  
  export let section: any;
  
  const layout = section.layout || 'grid-2';
  const gridColsMap: Record<string, string> = {
    'grid-2': 'md:grid-cols-2',
    'grid-3': 'md:grid-cols-3',
    'grid-4': 'md:grid-cols-4'
  };
  const gridCols = gridColsMap[layout] || 'md:grid-cols-2';
  
  const cards = section.solutionFeatures?.data || [];
  $: sortedCards = cards.slice().sort((a: any, b: any) => a.attributes.order - b.attributes.order);
  
  // Icon mapping based on feature icon field
  function getIcon(iconName: string) {
    const icons: Record<string, string> = {
      'atom': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
      'download': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>`,
      'trash': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>`,
      'lightning': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
      'cloud': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>`,
      'check': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
    };
    return icons[iconName] || icons['lightning'];
  }
</script>

<section class="py-20 bg-white">
  <div class="container mx-auto px-4 ">
    <ScrollReveal animation="fade-up" duration="700">
      <h2 class="text-5xl md:text-6xl font-bold text-center mb-6">
        Our <span class="text-secondary-600">Solution</span>
      </h2>
    </ScrollReveal>
    
    {#if section.subtitle}
      <ScrollReveal animation="fade-up" duration="700" delay="100">
        <p class="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          {section.subtitle}
        </p>
      </ScrollReveal>
    {/if}

    {#if section.solutionFeatures?.data}
      <ScrollRevealStagger itemCount={cards.length} staggerDelay={300} animation="fade-up" let:getItemClass>
        <div class="grid {gridCols} gap-y-10 gap-x-20 mx-auto">
          {#each sortedCards as feature, index}
            <div 
              class="bg-white px-10 py-12 pl-16 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 relative {getItemClass(index)}"
            >
              {#if feature.attributes.icon}
                <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-black text-white flex items-center justify-center shadow-lg">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {@html getIcon(feature.attributes.icon)}
                  </svg>
                </div>
              {/if}
              
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  {feature.attributes.title}
                </h3>
                
                <p class="text-gray-600 leading-relaxed">
                  {feature.attributes.description}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </ScrollRevealStagger>
    {/if}
  </div>
</section>

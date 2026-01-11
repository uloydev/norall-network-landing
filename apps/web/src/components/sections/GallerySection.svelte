<script lang="ts">
  import ScrollReveal from '$components/ui/ScrollReveal.svelte';
  import ScrollRevealStagger from '$components/ui/ScrollRevealStagger.svelte';
  
  export let section: any;
  
  const cards = section.galleryItems?.data || [];
  $: sortedCards = cards.slice().sort((a: any, b: any) => a.attributes.order - b.attributes.order);
</script>

<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <ScrollReveal animation="fade-up" duration="700">
      <h2 class="text-5xl md:text-6xl font-bold text-center mb-6">
        Norall <span class="text-secondary-600">Gallery</span>
      </h2>
    </ScrollReveal>
    
    {#if section.subtitle}
      <ScrollReveal animation="fade-up" duration="700" delay="100">
        <p class="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          {section.subtitle}
        </p>
      </ScrollReveal>
    {/if}

    {#if section.galleryItems?.data}
      <ScrollRevealStagger itemCount={cards.length} staggerDelay={300} animation="scale" let:getItemClass>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
          {#each sortedCards as item, index}
            <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 aspect-square {getItemClass(index)}">
            {#if item.attributes.cardStyle === 'image' && item.attributes.image?.data}
              <div class="h-full relative">
                <img
                  src={item.attributes.image.data.attributes.url}
                  alt={item.attributes.title || 'Gallery image'}
                  class="w-full h-full object-cover"
                />
                {#if item.attributes.title || item.attributes.description}
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div class="text-white">
                      {#if item.attributes.title}
                        <h3 class="text-xl md:text-2xl font-bold mb-2">{item.attributes.title}</h3>
                      {/if}
                      {#if item.attributes.description}
                        <p class="text-white/90 text-sm md:text-base">{item.attributes.description}</p>
                      {/if}
                    </div>
                  </div>
                {/if}
              </div>
            {:else if item.attributes.cardStyle === 'text-overlay' && item.attributes.image?.data}
              <div class="h-full relative">
                <img
                  src={item.attributes.image.data.attributes.url}
                  alt={item.attributes.title || 'Gallery image'}
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                  <div class="text-white">
                    {#if item.attributes.title}
                      <h3 class="text-2xl md:text-3xl font-bold mb-3">{item.attributes.title}</h3>
                    {/if}
                    {#if item.attributes.description}
                      <p class="text-white/90 text-base md:text-lg leading-relaxed">{item.attributes.description}</p>
                    {/if}
                  </div>
                </div>
              </div>
            {:else if item.attributes.cardStyle === 'colored-background'}
              <div 
                class="h-full flex items-center justify-center p-8 text-center
                  {item.attributes.backgroundColor === 'primary' ? 'bg-primary-500 text-white' : ''}
                  {item.attributes.backgroundColor === 'secondary' ? 'bg-secondary-500 text-white' : ''}
                  {item.attributes.backgroundColor === 'accent' ? 'bg-accent-500 text-white' : ''}
                  {item.attributes.backgroundColor === 'light' ? 'bg-blue-100 text-gray-900' : ''}
                  {item.attributes.backgroundColor === 'dark' ? 'bg-gray-900 text-white' : ''}
                  {item.attributes.backgroundColor === 'blue' ? 'bg-blue-600 text-white' : ''}
                  {item.attributes.backgroundColor === 'black' ? 'bg-black text-white' : ''}
                "
              >
                <div>
                  {#if item.attributes.title}
                    <h3 class="text-2xl md:text-3xl font-bold mb-3">{item.attributes.title}</h3>
                  {/if}
                  {#if item.attributes.description}
                    <p class="text-base md:text-lg opacity-90 leading-relaxed">{item.attributes.description}</p>
                  {/if}
                </div>
              </div>
            {:else}
              <!-- Skeleton for missing image -->
              <div class="h-full bg-gray-200 animate-pulse flex items-center justify-center">
                <svg class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
              </div>
            {/if}
          </div>
        {/each}
        </div>
      </ScrollRevealStagger>
    {/if}
  </div>
</section>

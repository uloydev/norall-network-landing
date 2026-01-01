<script lang="ts">
  export let section: any;
  
  const layout = section.layout || 'grid-3';
  const gridCols = {
    'grid-2': 'md:grid-cols-2',
    'grid-3': 'md:grid-cols-3',
    'grid-4': 'md:grid-cols-4',
    'masonry': 'md:columns-3'
  }[layout] || 'md:grid-cols-3';
</script>

<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    {#if section.title}
      <h2 class="text-4xl font-bold text-center mb-6">
        {section.title}
      </h2>
    {/if}
    
    {#if section.subtitle}
      <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
        {section.subtitle}
      </p>
    {/if}

    {#if section.galleryItems?.data}
      <div class="{layout === 'masonry' ? `${gridCols} gap-6` : `grid ${gridCols} gap-6`} max-w-7xl mx-auto">
        {#each section.galleryItems.data.sort((a, b) => a.attributes.order - b.attributes.order) as item}
          <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow {layout === 'masonry' ? 'break-inside-avoid mb-6' : ''}">
            {#if item.attributes.cardStyle === 'image' && item.attributes.image?.data}
              <div class="aspect-[4/3] relative">
                <img
                  src={item.attributes.image.data.attributes.url}
                  alt={item.attributes.title}
                  class="w-full h-full object-cover"
                />
              </div>
              {#if item.attributes.title || item.attributes.description}
                <div class="p-6 bg-white">
                  {#if item.attributes.title}
                    <h3 class="text-xl font-bold mb-2">{item.attributes.title}</h3>
                  {/if}
                  {#if item.attributes.description}
                    <p class="text-gray-600">{item.attributes.description}</p>
                  {/if}
                </div>
              {/if}
            {:else if item.attributes.cardStyle === 'text-overlay' && item.attributes.image?.data}
              <div class="aspect-[4/3] relative">
                <img
                  src={item.attributes.image.data.attributes.url}
                  alt={item.attributes.title}
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div class="text-white">
                    {#if item.attributes.title}
                      <h3 class="text-2xl font-bold mb-2">{item.attributes.title}</h3>
                    {/if}
                    {#if item.attributes.description}
                      <p class="text-white/90">{item.attributes.description}</p>
                    {/if}
                  </div>
                </div>
              </div>
            {:else if item.attributes.cardStyle === 'colored-background'}
              <div 
                class="aspect-[4/3] flex items-center justify-center p-8 text-center
                  {item.attributes.backgroundColor === 'primary' ? 'bg-primary-500 text-white' : ''}
                  {item.attributes.backgroundColor === 'secondary' ? 'bg-secondary-500 text-white' : ''}
                  {item.attributes.backgroundColor === 'accent' ? 'bg-accent-500 text-white' : ''}
                  {item.attributes.backgroundColor === 'light' ? 'bg-background-500 text-gray-900' : ''}
                  {item.attributes.backgroundColor === 'dark' ? 'bg-gray-900 text-white' : ''}
                "
              >
                <div>
                  {#if item.attributes.title}
                    <h3 class="text-2xl font-bold mb-3">{item.attributes.title}</h3>
                  {/if}
                  {#if item.attributes.description}
                    <p class="text-lg opacity-90">{item.attributes.description}</p>
                  {/if}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

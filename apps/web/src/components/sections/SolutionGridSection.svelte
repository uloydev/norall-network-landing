<script lang="ts">
  export let section: any;
  
  const layout = section.layout || 'grid-3';
  const gridCols = {
    'grid-2': 'md:grid-cols-2',
    'grid-3': 'md:grid-cols-3',
    'grid-4': 'md:grid-cols-4'
  }[layout] || 'md:grid-cols-3';
</script>

<section class="py-20 bg-gradient-to-b from-background-500 to-white">
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

    {#if section.solutionFeatures?.data}
      <div class="grid {gridCols} gap-6 max-w-7xl mx-auto">
        {#each section.solutionFeatures.data.sort((a, b) => a.attributes.order - b.attributes.order) as feature}
          <div 
            class="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow
              {feature.attributes.backgroundColor === 'white' ? 'bg-white' : ''}
              {feature.attributes.backgroundColor === 'light' ? 'bg-background-500' : ''}
              {feature.attributes.backgroundColor === 'primary' ? 'bg-primary-500 text-white' : ''}
              {feature.attributes.backgroundColor === 'secondary' ? 'bg-secondary-500 text-white' : ''}
              {feature.attributes.backgroundColor === 'accent' ? 'bg-accent-500 text-white' : ''}
            "
          >
            {#if feature.attributes.icon}
              <div class="w-14 h-14 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                <span class="text-2xl">⚡</span>
              </div>
            {/if}
            
            <h3 class="text-xl font-bold mb-3">
              {feature.attributes.title}
            </h3>
            
            <p class="{feature.attributes.backgroundColor?.includes('primary') || feature.attributes.backgroundColor?.includes('secondary') ? 'text-white/90' : 'text-gray-600'}">
              {feature.attributes.description}
            </p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

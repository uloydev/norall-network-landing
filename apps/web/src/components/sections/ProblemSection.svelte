<script lang="ts">
  import ScrollReveal from '$components/ui/ScrollReveal.svelte';
  import ScrollRevealStagger from '$components/ui/ScrollRevealStagger.svelte';
  
  export let section: any;
  
  const imagePosition = section.imagePosition || 'right';
  const problems = section.problems?.data || [];
  $: sortedProblems = problems.slice().sort((a: any, b: any) => a.attributes.order - b.attributes.order);
</script>

<ScrollReveal animation="fade-up" duration="1000">
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <!-- Content Side -->
      <div class:order-2={imagePosition === 'left'}>
        <!-- {#if section.title}
          <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {section.title}
          </h2>
        {/if} -->

        <h2 class="text-4xl md:text-6xl font-medium mb-6 leading-tight">
            Why Norway Needs a 
            <p class="font-bold">Clean Alternative</p>
          </h2>
        
        {#if section.description}
          <p class="text-base md:text-lg text-gray-600 mb-12 leading-relaxed">
            {section.description}
          </p>
        {/if}

        {#if section.problems?.data}
          <ScrollRevealStagger itemCount={problems.length} staggerDelay={500} animation="fade-left" let:getItemClass>
            <div class="space-y-8">
              {#each sortedProblems as problem, index}
                <div class="flex items-start gap-6 transition-all duration-700 {getItemClass(index)}">
                  <div class="flex-shrink-0 w-20 h-20 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-md">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                      {problem.attributes.title}
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      {problem.attributes.description}
                    </p>
                  </div>
                </div>
              {/each}
            </div>
          </ScrollRevealStagger>
        {/if}
      </div>

      <!-- Image Side -->
      <div class:order-1={imagePosition === 'left'}>
        {#if section.image?.data}
          <img
            src={section.image.data.attributes.url}
            alt={section.title || 'Section image'}
            class="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
        {:else}
          <!-- Skeleton placeholder for missing image -->
          <div class="w-full aspect-[4/5] bg-gray-200 animate-pulse rounded-2xl shadow-xl flex items-center justify-center">
            <svg class="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
            </svg>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
</ScrollReveal>

<script lang="ts">
  export let section: any;
  
  const imagePosition = section.imagePosition || 'right';
</script>

<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Content Side -->
      <div class:order-2={imagePosition === 'left'}>
        {#if section.title}
          <h2 class="text-4xl font-bold mb-6">
            {section.title}
          </h2>
        {/if}
        
        {#if section.description}
          <p class="text-lg text-gray-600 mb-8">
            {section.description}
          </p>
        {/if}

        {#if section.problems?.data}
          <div class="space-y-6">
            {#each section.problems.data.sort((a, b) => a.attributes.order - b.attributes.order) as problem}
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-500 flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-primary-700 mb-2">
                    {problem.attributes.title}
                  </h3>
                  <p class="text-gray-600">
                    {problem.attributes.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Image Side -->
      <div class:order-1={imagePosition === 'left'}>
        {#if section.image?.data}
          <img
            src={section.image.data.attributes.url}
            alt={section.title || 'Section image'}
            class="w-full h-auto rounded-lg shadow-xl"
          />
        {/if}
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  export let section: any;
  
  console.log('ProcessStepsSection received:', section);
  console.log('ProcessSteps data:', section.processSteps);
</script>

<section class="bg-background-500 py-16">
  <div class="container mx-auto px-4">
    {#if section.title}
      <h2 class="text-4xl font-bold text-center mb-6">
        {section.title}
      </h2>
    {/if}
    
    {#if section.description}
      <p class="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
        {section.description}
      </p>
    {/if}

    {#if section.processSteps?.data}
      <div class="flex flex-wrap justify-center gap-0 max-w-5xl mx-auto mb-12">
        {#each section.processSteps.data.sort((a, b) => a.attributes.order - b.attributes.order) as step}
          <div 
            class="flex-1 min-w-[150px] px-8 py-6 text-center font-semibold text-lg
              {step.attributes.color === 'light' ? 'bg-background-300 text-gray-700' : ''}
              {step.attributes.color === 'medium' ? 'bg-accent-500 text-white' : ''}
              {step.attributes.color === 'dark' ? 'bg-secondary-500 text-white' : ''}
              {step.attributes.color === 'primary' ? 'bg-primary-500 text-white' : ''}
            "
          >
            {step.attributes.title}
          </div>
        {/each}
      </div>
    {/if}

    {#if section.videoUrl || section.videoPlaceholder?.data}
      <div class="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        {#if section.videoUrl}
          <div class="aspect-video bg-black">
            <iframe
              src={section.videoUrl}
              class="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Video"
            ></iframe>
          </div>
        {:else if section.videoPlaceholder?.data}
          <img
            src={section.videoPlaceholder.data.attributes.url}
            alt="Video placeholder"
            class="w-full h-auto"
          />
        {/if}
      </div>
    {/if}
  </div>
</section>

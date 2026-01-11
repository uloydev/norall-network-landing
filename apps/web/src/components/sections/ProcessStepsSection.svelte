<script lang="ts">
  import { onMount } from 'svelte';
  export let section: any;

  console.log('ProcessStepsSection received:', section);
  console.log('ProcessSteps data:', section.processSteps);
  
  let visibleSteps: boolean[] = [];
  let hasAnimated = false;
  let stepsContainer: HTMLElement;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateSteps();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (stepsContainer) {
      observer.observe(stepsContainer);
    }
    
    return () => {
      if (stepsContainer) {
        observer.unobserve(stepsContainer);
      }
    };
  });
  
  function animateSteps() {
    if (!section.processSteps?.data) return;
    
    const steps = section.processSteps.data;
    visibleSteps = new Array(steps.length).fill(false);
    
    steps.forEach((_, index) => {
      setTimeout(() => {
        visibleSteps[index] = true;
        visibleSteps = [...visibleSteps]; // Trigger reactivity
      }, index * 1000); // 1000ms delay between each step
    });
  }
</script>

<section class="py-16">
  <div>
    <div class="container mx-auto">
      {#if section.title}
        <h2 class="text-6xl font-bold text-center mb-6 max-w-4xl mx-auto">
          {section.title}
        </h2>
      {/if}

      {#if section.description}
        <p class="text-lg text-gray-600 text-center mx-auto mb-12 mt-8">
          {section.description}
        </p>
      {/if}
    </div>

    {#if section.processSteps?.data}
      <div bind:this={stepsContainer} class="flex flex-wrap justify-center gap-0 w-full mx-auto mb-12">
        {#each section.processSteps.data.sort((a, b) => a.attributes.order - b.attributes.order) as step, index}
          <div
            class="flex-1 min-w-[150px] px-8 py-12 text-center font-medium text-xl transition-all duration-500 ease-out origin-left
              {step.attributes.color === 'light' ? 'bg-gray-200 text-gray-700' : ''}
              {step.attributes.color === 'medium' ? 'bg-accent-500 text-gray-700' : ''}
              {step.attributes.color === 'dark' ? 'bg-secondary-600 text-white' : ''}
              {step.attributes.color === 'primary' ? 'bg-primary-700 text-white' : ''}
              {visibleSteps[index] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            "
          >
            {step.attributes.title}
          </div>
        {/each}
      </div>
    {/if}

    <div class="container mx-auto rounded-3xl overflow-hidden shadow-lg">
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
      {:else}
        <div class="aspect-video bg-gray-300 animate-pulse flex items-center justify-center">
          <svg class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </div>
      {/if}
      
      <!-- Black placeholder section below video -->
      <div class="bg-black text-white py-12 px-8">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          
            <!-- Default placeholder if no problems data -->
            <div class="flex flex-col items-center text-center px-6">
              <svg class="w-16 h-16 text-white mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
              <p class="text-lg">Fossil-based emissions</p>
              <p class="text-lg">from combustion</p>
            </div>
            <div class="flex flex-col items-center text-center px-6 md:border-l-2 md:border-white/60">
              <svg class="w-16 h-16 text-white mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2 2v6h8V8H6zm10 2a1 1 0 100 2v-2z" />
              </svg>
              <p class="text-lg">Non-recyclable</p>
              <p class="text-lg">bottom ash and residues</p>
            </div>
            <div class="flex flex-col items-center text-center px-6 md:border-l-2 md:border-white/60">
              <svg class="w-16 h-16 text-white mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2 2v6h8V8H6zm10 2a1 1 0 100 2v-2z" />
              </svg>
              <p class="text-lg">Increasing regulatory and</p>
              <p class="text-lg">procurement pressure</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>

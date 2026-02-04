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
              {step.attributes.color === 'light' ? 'bg-background-300 text-accent-500' : ''}
              {step.attributes.color === 'medium' ? 'bg-accent-300 text-accent-700' : ''}
              {step.attributes.color === 'dark' ? 'bg-secondary-600 text-white' : ''}
              {step.attributes.color === 'primary' ? 'bg-secondary-500 text-black' : ''}
              {visibleSteps[index] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            "
          >
            {step.attributes.title}
          </div>
        {/each}
      </div>
    {/if}

  </div>
</section>

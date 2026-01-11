<script lang="ts">
  import { onMount } from 'svelte';
  
  export let threshold: number = 0.1;
  export let staggerDelay: number = 150;
  export let itemCount: number = 0;
  export let animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' = 'fade-up';
  
  let isVisible = false;
  let visibleItems: boolean[] = [];
  let element: HTMLElement;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            isVisible = true;
            animateItems();
          }
        });
      },
      { threshold }
    );
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });
  
  function animateItems() {
    visibleItems = new Array(itemCount).fill(false);
    
    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        visibleItems[i] = true;
        visibleItems = [...visibleItems];
      }, i * staggerDelay);
    }
  }
  
  $: animationClasses = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-down': 'opacity-100 translate-y-0',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'scale': 'opacity-100 scale-100'
  };
  
  $: hiddenClasses = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-down': 'opacity-0 -translate-y-8',
    'fade-left': 'opacity-0 -translate-x-8',
    'fade-right': 'opacity-0 translate-x-8',
    'scale': 'opacity-0 scale-95'
  };
  
  // Reactive function that returns class based on current visibleItems state
  $: getItemClass = (index: number) => {
    return visibleItems[index] ? animationClasses[animation] : hiddenClasses[animation];
  };
</script>

<div bind:this={element}>
  <slot {getItemClass} {visibleItems} />
</div>

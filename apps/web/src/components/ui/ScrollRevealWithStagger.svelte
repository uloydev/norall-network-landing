<script lang="ts">
  import { onMount } from 'svelte';
  
  export let threshold: number = 0.1;
  export let revealDuration: string = '1000';
  export let revealAnimation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none' = 'fade-up';
  export let staggerDelay: number = 150;
  export let itemCount: number = 0;
  export let itemAnimation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' = 'fade-up';
  export let itemDuration: string = '700';
  
  let isVisible = false;
  let visibleItems: boolean[] = [];
  let element: HTMLElement;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            isVisible = true;
            // Wait for reveal animation to complete, then start stagger
            setTimeout(() => {
              animateItems();
            }, parseInt(revealDuration));
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
  
  export function isItemVisible(index: number): boolean {
    return visibleItems[index] || false;
  }
  
  export function getItemClass(index: number): string {
    const visible = visibleItems[index];
    const animationClasses = {
      'fade-up': visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      'fade-down': visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
      'fade-left': visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
      'fade-right': visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
      'scale': visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    };
    return animationClasses[itemAnimation];
  }
  
  $: revealClasses = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
    'fade-down': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12',
    'fade-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    'fade-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    'scale': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    'none': isVisible ? 'opacity-100' : 'opacity-0'
  };
</script>

<div
  bind:this={element}
  class="transition-all duration-{revealDuration} {revealClasses[revealAnimation]}"
>
  <slot {getItemClass} {isItemVisible} itemDuration={itemDuration} />
</div>

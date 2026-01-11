<script lang="ts">
  import { onMount } from 'svelte';
  
  export let threshold: number = 0.1;
  export let duration: string = '700';
  export let delay: string = '0';
  export let animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none' = 'fade-up';
  export let once: boolean = true;
  
  let isVisible = false;
  let element: HTMLElement;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            isVisible = false;
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
  
  $: animationClasses = {
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
  class="transition-all duration-{duration} delay-{delay} {animationClasses[animation]}"
>
  <slot />
</div>

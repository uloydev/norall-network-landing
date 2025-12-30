<script lang="ts">
  export let padding: 'sm' | 'md' | 'lg' = 'lg';
  
  const paddingClasses = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-16 md:py-24 lg:py-32',
  };
</script>

<section class="{paddingClasses[padding]}">
  <slot />
</section>

<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';
  import Container from '$components/ui/Container.svelte';
  import logoImg from '$lib/assets/logo.png';
  
  let mobileMenuOpen = false;
  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        scrolled = window.scrollY > heroBottom - 112; // 112 = h-28 (navbar height)
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  $: isActive = (path: string): boolean => {
    return $page.url.pathname === path;
  };
</script>

<nav class="fixed top-0 z-50 w-full transition-all duration-500 {scrolled || mobileMenuOpen ? 'bg-primary-500 shadow-lg' : 'bg-transparent'}">
  <Container maxWidth="tailwind">
    <div class="flex items-center justify-between h-20 md:h-24">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2 md:space-x-3 group overflow-hidden" on:click={() => mobileMenuOpen = false}>
        <img src={logoImg} alt="Norall Logo" class="h-6 md:h-8 w-auto flex-shrink-0" />
        <span class="text-base md:text-xl font-medium text-white whitespace-nowrap {scrolled ? 'max-w-xs' : 'max-w-0'} group-hover:max-w-xs transition-all duration-500 ease-in-out overflow-hidden">Norall Network</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8 flex-grow justify-center">
        <a href="/" class="relative text-white transition-all hover:font-bold duration-300">
          <span class="relative z-10 {isActive('/') ? 'font-bold' : ''}">Home</span>
          <span class="absolute bottom-[-8px] left-0 h-0.5 bg-white transition-all duration-500 ease-out {isActive('/') ? 'w-full opacity-100' : 'w-0 opacity-0'}"></span>
        </a>
        <a href="/about" class="relative text-white transition-all hover:font-bold duration-300">
          <span class="relative z-10 {isActive('/about') ? 'font-bold' : ''}">About Us</span>
          <span class="absolute bottom-[-8px] left-0 h-0.5 bg-white transition-all duration-500 ease-out {isActive('/about') ? 'w-full opacity-100' : 'w-0 opacity-0'}"></span>
        </a>
        <a href="/services" class="relative text-white transition-all hover:font-bold duration-300">
          <span class="relative z-10 {isActive('/services') ? 'font-bold' : ''}">Our Services</span>
          <span class="absolute bottom-[-8px] left-0 h-0.5 bg-white transition-all duration-500 ease-out {isActive('/services') ? 'w-full opacity-100' : 'w-0 opacity-0'}"></span>
        </a>
      </div>
      
      <div class="hidden md:flex items-center justify-center">
        <a 
          href="#contact" 
          class="px-12 py-2 border border-white bg-white text-black rounded-full hover:bg-secondary-500 hover:text-black transition-all duration-500 text-sm"
        >
          Contact Us
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-white/20" transition:slide={{ duration: 300 }}>
        <div class="flex flex-col space-y-4">
          <a href="/" class="text-white transition-all hover:font-bold duration-300 {isActive('/') ? 'font-bold' : ''}" on:click={() => mobileMenuOpen = false}>Home</a>
          <a href="/about" class="text-white transition-all hover:font-bold duration-300 {isActive('/about') ? 'font-bold' : ''}" on:click={() => mobileMenuOpen = false}>About Us</a>
          <a href="/services" class="text-white transition-all hover:font-bold duration-300 {isActive('/services') ? 'font-bold' : ''}" on:click={() => mobileMenuOpen = false}>Our Services</a>
          <a 
            href="#contact" 
            class="px-12 py-2 border border-white bg-white text-black rounded-full hover:bg-secondary-500 hover:text-black transition-all duration-500 text-sm text-center"
            on:click={() => mobileMenuOpen = false}
          >
            Contact Us
          </a>
        </div>
      </div>
    {/if}
  </Container>
</nav>

<script lang="ts">
  import Container from '$components/ui/Container.svelte';
import logoImg from '$lib/assets/logo.png';
  let mobileMenuOpen = false;
</script>

<nav class="bg-transparent bg-primary-400 shadow-sm fixed top-0 z-50 w-full">
  <Container maxWidth="tailwind">
    <div class="flex items-center justify-between h-28">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3 group overflow-hidden">
        <img src={logoImg} alt="Norall Logo" class="h-8 w-auto flex-shrink-0" />
        <span class="text-xl font-medium text-white whitespace-nowrap max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out overflow-hidden">Norall Network</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8 flex-grow justify-center">
        <a href="#about" class="text-white transition-all hover:font-bold duration-300">About</a>
        <a href="#technology" class="text-white transition-all hover:font-bold duration-300">Technology</a>
        <a href="#solution" class="text-white transition-all hover:font-bold duration-300">Solution</a>
        <a href="#contact" class="text-white transition-all hover:font-bold duration-300">Contact</a>
      </div>
      
      <div class="flex items-center justify-center">
        <a 
          href="#contact" 
          class="px-12 py-2 border border-white bg-white text-black rounded-full hover:bg-primary-900 hover:text-white transition-all duration-500 text-sm"
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
      <div class="md:hidden py-4 border-t border-white/20">
        <div class="flex flex-col space-y-4">
          <a href="#about" class="text-white transition-all hover:font-bold duration-300">About</a>
          <a href="#technology" class="text-white transition-all hover:font-bold duration-300">Technology</a>
          <a href="#solution" class="text-white transition-all hover:font-bold duration-300">Solution</a>
          <a href="#contact" class="text-white transition-all hover:font-bold duration-300">Contact</a>
          <a 
            href="#contact" 
            class="px-12 py-2 border border-white bg-white text-black rounded-full hover:bg-primary-900 hover:text-white transition-all duration-500 text-sm text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    {/if}
  </Container>
</nav>

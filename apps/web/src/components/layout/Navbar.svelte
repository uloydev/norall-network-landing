<script lang="ts">
  let mobileMenuOpen = false;
</script>

<nav class="bg-white shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-primary-600">Norall</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#about" class="text-gray-700 hover:text-primary-600 transition-colors">About</a>
        <a href="#technology" class="text-gray-700 hover:text-primary-600 transition-colors">Technology</a>
        <a href="#solution" class="text-gray-700 hover:text-primary-600 transition-colors">Solution</a>
        <a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
        <a 
          href="#contact" 
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Get Started
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
      <div class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-4">
          <a href="#about" class="text-gray-700 hover:text-primary-600 transition-colors">About</a>
          <a href="#technology" class="text-gray-700 hover:text-primary-600 transition-colors">Technology</a>
          <a href="#solution" class="text-gray-700 hover:text-primary-600 transition-colors">Solution</a>
          <a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
          <a 
            href="#contact" 
            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

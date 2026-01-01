<script lang="ts">
  import '../app.css';
  import Navbar from '$components/layout/Navbar.svelte';
  import Footer from '$components/layout/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  
  <main class="flex-grow">
    <slot />
  </main>
  
  <Footer />
</div>

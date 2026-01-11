<script lang="ts">
  import ScrollReveal from '$components/ui/ScrollReveal.svelte';
  
  export let section: any;
  
  let formData = {
    fullName: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  };
  
  let isSubmitting = false;
  let isSuccess = false;
  let error = '';
  
  async function handleSubmit(e: Event) {
    e.preventDefault();
    isSubmitting = true;
    error = '';
    
    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      isSuccess = true;
      formData = {
        fullName: '',
        email: '',
        telephone: '',
        service: '',
        message: ''
      };
    } catch (err) {
      error = 'Failed to send message. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-16 mx-auto items-center">
      <!-- Left Side - Text -->
      <ScrollReveal animation="fade-left" duration="700">
        <div class="flex flex-col justify-center">
          <h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            What can <span class="text-secondary-600">we help</span> you with?
          </h2>
        
        {#if section.subtitle}
          <p class="text-base md:text-lg text-gray-600 leading-relaxed">
            {section.subtitle}
          </p>
        {/if}
      </div>
      </ScrollReveal>

      <!-- Right Side - Form -->
      <ScrollReveal animation="fade-right" duration="700" delay="200">
        <div class="bg-white rounded-3xl shadow-xl p-10 md:p-12">
        {#if isSuccess}
          <div class="text-center py-8">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p class="text-lg text-gray-700">
              {section.successMessage || 'Thank you for your message. We\'ll get back to you soon!'}
            </p>
          </div>
        {:else}
          <form on:submit={handleSubmit} class="space-y-8">
            <div class="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                bind:value={formData.fullName}
                placeholder="Full name"
                required
                class="w-full pb-3 border-0 border-b-2 border-gray-500 focus:border-secondary-600 outline-none transition-colors text-gray-700 placeholder-gray-400"
              />
              <input
                type="email"
                bind:value={formData.email}
                placeholder="Email"
                required
                class="w-full pb-3 border-0 border-b-2 border-gray-500 focus:border-secondary-600 outline-none transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <input
                type="tel"
                bind:value={formData.telephone}
                placeholder="Telephone"
                class="w-full pb-3 border-0 border-b-2 border-gray-500 focus:border-secondary-600 outline-none transition-colors text-gray-700 placeholder-gray-400"
              />
              <input
                type="text"
                bind:value={formData.service}
                placeholder="Service"
                class="w-full pb-3 border-0 border-b-2 border-gray-500 focus:border-secondary-600 outline-none transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            <textarea
              bind:value={formData.message}
              placeholder="Message"
              rows="4"
              required
              class="w-full pb-3 border-0 border-b-2 border-gray-500 focus:border-secondary-600 outline-none transition-colors text-gray-700 placeholder-gray-400 resize-none"
            ></textarea>

            {#if error}
              <p class="text-red-600 text-sm">{error}</p>
            {/if}

            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full bg-primary-700 hover:bg-secondary-950 text-white font-semibold py-6 px-8 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Sending...' : (section.submitButtonText || 'Get Started')}
            </button>
          </form>
        {/if}
      </div>
      </ScrollReveal>
    </div>
  </div>
</section>

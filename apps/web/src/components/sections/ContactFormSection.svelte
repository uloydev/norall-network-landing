<script lang="ts">
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

<section class="py-20 {section.backgroundColor === 'white' ? 'bg-white' : section.backgroundColor === 'light' ? 'bg-gray-50' : 'bg-background-500'}">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <!-- Left Side - Text -->
      <div class="flex flex-col justify-center">
        {#if section.title}
          <h2 class="text-4xl font-bold mb-6">
            {section.title}
          </h2>
        {/if}
        
        {#if section.subtitle}
          <p class="text-lg text-gray-600">
            {section.subtitle}
          </p>
        {/if}
      </div>

      <!-- Right Side - Form -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
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
          <form on:submit={handleSubmit} class="space-y-6">
            {#if section.showNameField !== false}
              <div class="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  bind:value={formData.fullName}
                  placeholder="Full name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                {#if section.showEmailField !== false}
                  <input
                    type="email"
                    bind:value={formData.email}
                    placeholder="Email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                {/if}
              </div>
            {:else if section.showEmailField !== false}
              <input
                type="email"
                bind:value={formData.email}
                placeholder="Email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            {/if}

            {#if section.showPhoneField !== false || section.showServiceField !== false}
              <div class="grid md:grid-cols-2 gap-4">
                {#if section.showPhoneField !== false}
                  <input
                    type="tel"
                    bind:value={formData.telephone}
                    placeholder="Telephone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                {/if}
                {#if section.showServiceField !== false}
                  <input
                    type="text"
                    bind:value={formData.service}
                    placeholder="Service"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                {/if}
              </div>
            {/if}

            {#if section.showMessageField !== false}
              <textarea
                bind:value={formData.message}
                placeholder="Message"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
              ></textarea>
            {/if}

            {#if error}
              <p class="text-red-600 text-sm">{error}</p>
            {/if}

            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : (section.submitButtonText || 'Get Started')}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>

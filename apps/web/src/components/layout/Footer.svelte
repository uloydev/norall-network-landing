<script lang="ts">
  import logoImg from '$lib/assets/logo.png';
  
  let email = '';
  let isSubmitting = false;
  let isSuccess = false;
  
  async function handleSubscribe(e: Event) {
    e.preventDefault();
    isSubmitting = true;
    
    try {
      // TODO: Implement newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      isSuccess = true;
      email = '';
      setTimeout(() => isSuccess = false, 3000);
    } catch (err) {
      console.error('Subscription failed:', err);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<footer class="bg-black text-white">
  <div class="container mx-auto px-4 py-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
      <!-- Company Info & Social -->
      <div>
        <div class="flex items-center space-x-3 mb-8">
          <img src={logoImg} alt="Norall Logo" class="h-8 w-auto" />
          <h3 class="text-xl font-semibold">Norall Network</h3>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet neque tortor.
        </p>
        
        <!-- Social Links -->
        <div class="flex space-x-3">
          <a href="#" class="w-12 h-12 border-2 border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all" aria-label="Twitter">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" class="w-12 h-12 border-2 border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all" aria-label="Instagram">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" class="w-12 h-12 border-2 border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all" aria-label="Facebook">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="#" class="w-12 h-12 border-2 border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all" aria-label="YouTube">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-semibold text-xl mb-8">Quick Links</h4>
        <ul class="space-y-3">
          <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#service" class="text-gray-400 hover:text-white transition-colors">Service</a></li>
          <li><a href="#technology" class="text-gray-400 hover:text-white transition-colors">Technology</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-semibold text-xl mb-8">Contact Us</h4>
        <ul class="space-y-4 text-gray-400">
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <a href="mailto:info@norallnetwork.no" class="hover:text-white transition-colors">info@norallnetwork.no</a>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Norall Network<br/>Oslo, Norway</span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <a href="tel:4514845939" class="hover:text-white transition-colors">451-484-5939</a>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h4 class="font-semibold text-xl mb-8">Newsletter</h4>
        <form on:submit={handleSubscribe} class="relative">
          <input
            type="email"
            bind:value={email}
            placeholder="Enter your email"
            required
            disabled={isSubmitting || isSuccess}
            class="w-full px-6 py-6 pr-36 text-gray-900 rounded-xl outline-none placeholder-gray-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            class="absolute right-0 top-0 bottom-0 px-8 py-6 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-e-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Sending...' : isSuccess ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  </div>
</footer>

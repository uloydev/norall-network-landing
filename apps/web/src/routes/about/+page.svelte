<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>About Us - Norall Network</title>
  <meta name="description" content="Learn about Norall Network's mission to bridge global innovation with European climate ambition through breakthrough green technologies." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-secondary-600 via-secondary-700 to-primary-800 text-white py-32">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">About Norall Network</h1>
      <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
        Bridging global innovation with European climate ambition through breakthrough green technologies.
      </p>
    </div>
  </div>
</section>

<!-- Mission Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            For decades, technology transfer has followed a one-way path—from North to South. Norall Network is building a two-way model, identifying breakthrough green technologies from emerging economies and preparing them for integration into the European market.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            By combining local innovation with regulatory readiness, we unlock scalable climate solutions while advancing circular resilience across borders.
          </p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-secondary-50 rounded-3xl p-12 shadow-xl">
          <div class="space-y-8">
            <div>
              <div class="text-5xl font-bold text-secondary-600 mb-2">15+</div>
              <div class="text-gray-700">Years of Experience</div>
            </div>
            <div>
              <div class="text-5xl font-bold text-secondary-600 mb-2">50+</div>
              <div class="text-gray-700">Technologies Evaluated</div>
            </div>
            <div>
              <div class="text-5xl font-bold text-secondary-600 mb-2">10+</div>
              <div class="text-gray-700">Countries Partnered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Our Values</h2>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div class="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Global Innovation</h3>
          <p class="text-gray-600 leading-relaxed">
            We seek breakthrough technologies from around the world, particularly from emerging economies where innovation often outpaces market access.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div class="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Regulatory Excellence</h3>
          <p class="text-gray-600 leading-relaxed">
            We ensure every technology meets European regulatory standards, making market entry seamless and sustainable.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div class="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Climate Impact</h3>
          <p class="text-gray-600 leading-relaxed">
            Zero-emission solutions are at the heart of what we do. We prioritize technologies that eliminate fossil fuel dependency and advance circularity.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Team Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Our Approach</h2>
      <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
        We combine technical expertise, regulatory knowledge, and market intelligence to bridge the gap between innovation and deployment.
      </p>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Technology Identification</h3>
            <p class="text-gray-600 leading-relaxed">
              We scout emerging markets for breakthrough green technologies with proven track records and scalability potential.
            </p>
          </div>
        </div>

        <div class="flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Technical Validation</h3>
            <p class="text-gray-600 leading-relaxed">
              Rigorous assessment of performance, safety, and environmental impact to ensure technologies meet European standards.
            </p>
          </div>
        </div>

        <div class="flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Regulatory Preparation</h3>
            <p class="text-gray-600 leading-relaxed">
              We prepare comprehensive documentation and compliance pathways for seamless EU market entry.
            </p>
          </div>
        </div>

        <div class="flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Market Integration</h3>
            <p class="text-gray-600 leading-relaxed">
              Strategic partnerships with public institutions and private sector stakeholders to scale deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-secondary-600 via-secondary-700 to-primary-800 text-white">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
      <p class="text-xl text-white/90 mb-8 leading-relaxed">
        Whether you're an innovator with breakthrough technology or an organization seeking sustainable solutions, we'd love to hear from you.
      </p>
      <a 
        href="/#contact" 
        class="inline-block px-12 py-4 bg-white text-secondary-700 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl"
      >
        Get in Touch
      </a>
    </div>
  </div>
</section>

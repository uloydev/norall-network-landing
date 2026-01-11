<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Our Services - Norall Network</title>
  <meta name="description" content="Discover Norall Network's comprehensive services in technology scouting, regulatory compliance, and market integration for green technologies." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-secondary-600 via-secondary-700 to-primary-800 text-white py-32">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
      <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
        Comprehensive solutions for bringing breakthrough green technologies to the European market.
      </p>
    </div>
  </div>
</section>

<!-- Main Services Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What We Offer</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          End-to-end support for technology transfer, from initial identification to full market deployment.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="space-y-16">
        <!-- Technology Scouting -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <div class="bg-gradient-to-br from-blue-50 to-secondary-50 rounded-3xl p-12 shadow-xl h-full flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-gray-900">Technology Scouting</h3>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <h3 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Global Innovation Discovery</h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              We identify breakthrough green technologies from emerging economies, focusing on solutions that address critical environmental challenges while offering proven performance.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Market intelligence and technology mapping</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Due diligence and performance verification</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Scalability and market fit assessment</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Regulatory Compliance -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">EU Regulatory Compliance</h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              We prepare comprehensive compliance documentation and certification pathways to meet European environmental, safety, and quality standards.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">CE marking and product certification</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Environmental impact assessments</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Regulatory liaison and approval support</span>
              </li>
            </ul>
          </div>
          <div>
            <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 shadow-xl h-full flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-gray-900">Regulatory Compliance</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Validation -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 shadow-xl h-full flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-gray-900">Technical Validation</h3>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <h3 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Performance Verification</h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Comprehensive technical assessment to ensure technologies meet European performance benchmarks and operational requirements.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Independent testing and certification</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Lifecycle analysis and carbon footprint assessment</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Pilot deployment and field testing</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Market Integration -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Market Integration</h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Strategic partnerships and deployment support to ensure successful market entry and scaling across European markets.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Stakeholder engagement and partnership development</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Public procurement guidance and support</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Funding and financing strategy</span>
              </li>
            </ul>
          </div>
          <div>
            <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 shadow-xl h-full flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-gray-900">Market Integration</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Our Process</h2>
      <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
        A systematic approach to bringing breakthrough technologies to market.
      </p>

      <div class="relative">
        <!-- Timeline line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary-200"></div>

        <div class="space-y-12">
          <!-- Step 1 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="md:text-right">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Discovery & Assessment</h3>
              <p class="text-gray-600">
                Initial technology identification, market analysis, and feasibility study.
              </p>
            </div>
            <div class="md:flex md:justify-start">
              <div class="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                1
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="md:flex md:justify-end order-2 md:order-1">
              <div class="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
            </div>
            <div class="order-1 md:order-2">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Technical Validation</h3>
              <p class="text-gray-600">
                Comprehensive testing, performance verification, and documentation.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="md:text-right">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Regulatory Preparation</h3>
              <p class="text-gray-600">
                Compliance documentation, certification support, and approval processes.
              </p>
            </div>
            <div class="md:flex md:justify-start">
              <div class="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="md:flex md:justify-end order-2 md:order-1">
              <div class="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                4
              </div>
            </div>
            <div class="order-1 md:order-2">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Market Deployment</h3>
              <p class="text-gray-600">
                Partnership development, pilot projects, and full-scale implementation.
              </p>
            </div>
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
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
      <p class="text-xl text-white/90 mb-8 leading-relaxed">
        Whether you're developing breakthrough technology or seeking sustainable solutions, our team is ready to help you navigate the path to European markets.
      </p>
      <a 
        href="/#contact" 
        class="inline-block px-12 py-4 bg-white text-secondary-700 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl"
      >
        Contact Our Team
      </a>
    </div>
  </div>
</section>

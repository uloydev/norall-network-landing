<script lang="ts">
  import ScrollReveal from '$components/ui/ScrollReveal.svelte';
  import { aboutPageData } from '$lib/data/about-content';
  
  const { seo, hero, process, globalToLocal, mission } = aboutPageData;
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
</svelte:head>

<style>
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.15; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 10s ease-in-out infinite;
  }
</style>

<div class="bg-white min-h-screen overflow-x-hidden">
  
  <!-- 1. HERO SECTION -->
  <section class="relative py-32 lg:py-48 bg-primary-900 text-white overflow-hidden">
    <!-- Abstract Background Pattern -->
    <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
      <svg class="w-full h-full text-blue-500 transform scale-150 translate-x-1/4 -translate-y-1/4 animate-pulse-slow" viewBox="0 0 292 288" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.5 144C72.5 104.5 104.5 72.5 144 72.5C183.5 72.5 215.5 104.5 215.5 144" stroke="currentColor" stroke-width="20" stroke-linecap="round" class="opacity-30"/>
        <path d="M219.5 144C219.5 183.5 187.5 215.5 148 215.5C108.5 215.5 76.5 183.5 76.5 144" stroke="currentColor" stroke-width="20" stroke-linecap="round" class="opacity-30"/>
        <path d="M144 288L144 216" stroke="currentColor" stroke-width="20" stroke-linecap="round"/>
        <path d="M144 72L144 0" stroke="currentColor" stroke-width="20" stroke-linecap="round"/>
        <circle cx="144" cy="144" r="40" stroke="currentColor" stroke-width="10" class="opacity-50"/>
      </svg>
    </div>
    <div class="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-5 pointer-events-none">
      <svg class="w-full h-full text-white transform -rotate-45 -translate-x-1/4 translate-y-1/4" viewBox="0 0 292 288" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.5 144C72.5 104.5 104.5 72.5 144 72.5C183.5 72.5 215.5 104.5 215.5 144" stroke="currentColor" stroke-width="20" stroke-linecap="round" class="opacity-30"/>
        <path d="M219.5 144C219.5 183.5 187.5 215.5 148 215.5C108.5 215.5 76.5 183.5 76.5 144" stroke="currentColor" stroke-width="20" stroke-linecap="round" class="opacity-30"/>
        <path d="M144 288L144 216" stroke="currentColor" stroke-width="20" stroke-linecap="round"/>
        <path d="M144 72L144 0" stroke="currentColor" stroke-width="20" stroke-linecap="round"/>
        <circle cx="144" cy="144" r="40" stroke="currentColor" stroke-width="10" class="opacity-50"/>
      </svg>
    </div>

    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal animation="fade-right" duration="1000">
          <div class="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider mb-6">
            {hero.badge}
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {hero.title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{hero.titleHighlight}</span>
          </h1>
          <div class="h-1 w-24 bg-blue-500 mb-8 rounded-full"></div>
          <p class="text-xl text-gray-300 leading-relaxed font-light max-w-lg">
            {hero.description}
          </p>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-left" duration="1000" delay="200">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative">
            <!-- Decorative Quote Mark -->
            <div class="absolute -top-6 -left-2 text-6xl text-blue-500 opacity-50 font-serif">"</div>
            <p class="text-lg text-gray-300 leading-relaxed italic relative z-10">
              {hero.quote.text}
            </p>
            <div class="mt-8 flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">{hero.quote.author.avatar}</div>
              <div>
                <div class="font-bold text-white text-lg">{hero.quote.author.name}</div>
                <div class="text-sm text-blue-300">{hero.quote.author.location}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>

  <!-- 2. THE PROCESS (1-2-3) - Horizontal Pathway -->
  <section class="py-24 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-6 md:px-8">
      <ScrollReveal animation="fade-up" duration="1000">
        <div class="text-center mb-20">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{process.title}</h2>
          <p class="text-gray-500 max-w-2xl mx-auto text-lg">{process.subtitle}</p>
        </div>
      </ScrollReveal>

      <div class="relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-1 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 z-0"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 gap-x-20">
          <!-- Step 1 -->
          <ScrollReveal animation="fade-up" duration="1000" delay="100">
            <div class="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
              <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-blue-50 transition-colors border-4 border-gray-50 shadow-md group-hover:border-blue-100 relative">
                <span class="text-5xl font-bold text-gray-400 group-hover:text-blue-500 transition-colors absolute">{process.steps[0].number}</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">{process.steps[0].title}</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                {process.steps[0].description}
              </p>
            </div>
          </ScrollReveal>

          <!-- Step 2 -->
          <ScrollReveal animation="fade-up" duration="1000" delay="200">
            <div class="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
              <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-blue-50 transition-colors border-4 border-gray-50 shadow-md group-hover:border-blue-100 relative">
                <span class="text-5xl font-bold text-gray-400 group-hover:text-blue-500 transition-colors absolute">{process.steps[1].number}</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">{process.steps[1].title}</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                {process.steps[1].description}
              </p>
            </div>
          </ScrollReveal>

          <!-- Step 3 -->
          <ScrollReveal animation="fade-up" duration="1000" delay="300">
            <div class="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
              <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-blue-50 transition-colors border-4 border-gray-50 shadow-md group-hover:border-blue-100 relative">
                <span class="text-5xl font-bold text-gray-400 group-hover:text-blue-500 transition-colors absolute">{process.steps[2].number}</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">{process.steps[2].title}</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                {process.steps[2].description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. GLOBAL TO LOCAL (Split Layout with Grid) -->
  <section class="container mx-auto py-0 bg-white">
    <div class="flex flex-col lg:flex-row min-h-[600px]">
      
      <!-- Left: Content -->
      <div class="w-full lg:w-1/2 px-6 md:px-16 py-24 flex flex-col justify-center bg-white order-2 lg:order-1">
        <ScrollReveal animation="fade-right" duration="1000">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {globalToLocal.title} <br/>
            <span class="text-blue-600">{globalToLocal.titleHighlight}</span>
          </h2>
          
          <div class="space-y-8 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              {globalToLocal.content[0]}
            </p>
            <div class="p-8 bg-gray-50 border-l-4 border-blue-500 rounded-r-xl shadow-sm">
              <p class="text-blue-900 font-medium italic text-xl">
                "{globalToLocal.quote}"
              </p>
            </div>
            <p>
              {globalToLocal.content[1]}
            </p>
          </div>

          <div class="mt-12">
            <a href="{globalToLocal.cta.link}" class="group inline-flex items-center gap-3 px-8 py-4 bg-primary-900 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-1000 shadow-lg hover:shadow-blue-500/30">
              {globalToLocal.cta.text}
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <!-- Right: Visual Grid -->
      <div class="w-full lg:w-1/2 relative min-h-[500px] lg:h-auto order-1 lg:order-2 bg-gray-100">
        <div class="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2">
          {#each globalToLocal.images as image, idx}
            <ScrollReveal animation="fade-up" duration="1000" delay="{String(idx * 100)}">
              <div class="relative w-full h-full overflow-hidden {image.rounded} group">
                <img src="{image.src}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="{image.alt}" />
                <div class="absolute inset-0 {image.overlay} group-hover:bg-transparent transition-colors"></div>
              </div>
            </ScrollReveal>
          {/each}
        </div>
        
        <!-- Center Floating Logo Overlay -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div class="bg-white/95 backdrop-blur-xl p-8 rounded-full shadow-2xl border border-gray-100">
            <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. MISSION STATEMENT -->
  <section class="py-32 px-6 md:px-8 bg-primary-900 text-white relative overflow-hidden">
    <!-- Animated Background Blob -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <ScrollReveal animation="fade-up" duration="1000">
        <div class="flex flex-col items-center mb-20">
          <span class="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4">{mission.badge}</span>
          <h2 class="text-center text-4xl md:text-6xl font-bold tracking-tight">{mission.title}</h2>
          <div class="w-20 h-1 bg-blue-500 mt-6 rounded-full"></div>
        </div>
      </ScrollReveal>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each mission.pillars as pillar, idx}
          <ScrollReveal animation="fade-up" duration="1000" delay="{String((idx + 1) * 100)}">
            <div class="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-1000 hover:-translate-y-2 h-full flex flex-col items-center text-center group">
              <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {#if pillar.icon === 'zap'}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  {:else if pillar.icon === 'target'}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  {:else if pillar.icon === 'sparkles'}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  {/if}
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p class="text-gray-400 text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </ScrollReveal>
        {/each}
      </div>
    </div>
  </section>

</div>

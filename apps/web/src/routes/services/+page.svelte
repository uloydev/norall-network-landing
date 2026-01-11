<script lang="ts">
  import ScrollReveal from '$components/ui/ScrollReveal.svelte';
  import ScrollRevealStagger from '$components/ui/ScrollRevealStagger.svelte';
  import { servicesPageData } from '$lib/data/services-content';
  
  let serviceImagesLoaded: boolean[] = [];
  let stakeholderImagesLoaded: boolean[] = [];
  
  const { seo, hero, services, impact, stakeholders, cta } = servicesPageData;
  
  function handleImageLoad(imageElement: Event, arrayType: 'service' | 'stakeholder', idx: number) {
    const img = imageElement.currentTarget as HTMLImageElement;
    if (arrayType === 'service') {
      serviceImagesLoaded[idx] = true;
      serviceImagesLoaded = serviceImagesLoaded;
    } else {
      stakeholderImagesLoaded[idx] = true;
      stakeholderImagesLoaded = stakeholderImagesLoaded;
    }
  }
  
  function checkImageLoaded(node: HTMLImageElement, params: { type: 'service' | 'stakeholder', idx: number }) {
    if (node.complete && node.naturalHeight !== 0) {
      // Image is already loaded (cached)
      if (params.type === 'service') {
        serviceImagesLoaded[params.idx] = true;
        serviceImagesLoaded = serviceImagesLoaded;
      } else {
        stakeholderImagesLoaded[params.idx] = true;
        stakeholderImagesLoaded = stakeholderImagesLoaded;
      }
    }
  }
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
</svelte:head>

<style>
  @keyframes kenBurns {
    0% { transform: scale(1); }
    100% { transform: scale(1.15); }
  }
  .animate-ken-burns {
    animation: kenBurns 20s ease-out infinite alternate;
  }
</style>

<!-- Hero Section with Dynamic Background -->
<section class="relative min-h-screen flex items-center overflow-hidden">
  <!-- Background Image with Zoom Animation -->
  <div class="absolute inset-0 z-0">
    <img 
      src={hero.backgroundImage}
      alt="Global Network Connectivity" 
      class="w-full h-full object-cover animate-ken-burns"
    />
    <!-- Enhanced Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
    <div class="absolute inset-0 bg-primary-900/30" />
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
    <ScrollReveal animation="fade-up" duration="1000">
      <div class="max-w-3xl">
        <span class="inline-block py-2 px-5 rounded-full bg-secondary-500/50 border border-primary-400/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
          {hero.badge}
        </span>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
          {hero.title}<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300">{hero.titleHighlight}</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
          {hero.subtitle}
        </p>
      </div>
    </ScrollReveal>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce pointer-events-none">
    <span class="text-white/50 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
    <div class="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
  </div>
</section>

<!-- Core Service Areas - Alternating Layout -->
<section class="py-24 bg-white overflow-hidden">
  <div class="container mx-auto px-6 md:px-8 space-y-32">
    {#each services as service, idx}
      <div class="flex flex-col {service.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24">
        <!-- Image Side -->
        <ScrollReveal animation={service.imagePosition === 'right' ? 'fade-right' : 'fade-left'} duration="1000">
          <div class="relative group rounded-3xl shadow-2xl shadow-blue-900/10 aspect-[4/3] transform transition-transform duration-700">
            <!-- Skeleton Loader -->
            {#if !serviceImagesLoaded[idx]}
              <div class="absolute  inset-0 bg-gray-200 animate-pulse flex items-center justify-center rounded-3xl">
                <svg class="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
              </div>
            {/if}
            <div class="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10 rounded-3xl"/>
            <img 
              src={service.image}
              alt={service.title}
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700  rounded-3xl {serviceImagesLoaded[idx] ? '' : 'opacity-0'}"
              on:load={(e) => handleImageLoad(e, 'service', idx)}
              use:checkImageLoaded={{ type: 'service', idx }}
            />
            <!-- Floating Icon Card -->
            <div class="absolute {service.imagePosition === 'right' ? '-bottom-6 -left-6 md:bottom-8 md:-left-8' : '-bottom-6 -right-6 md:bottom-8 md:-right-8'} bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] z-20 border border-gray-50">
              {#if service.icon === 'search'}
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              {:else if service.icon === 'shield'}
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              {:else if service.icon === 'handshake'}
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              {:else if service.icon === 'landmark'}
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              {/if}
            </div>
          </div>
        </ScrollReveal>
        
        <!-- Content Side -->
        <ScrollReveal animation={service.imagePosition === 'right' ? 'fade-left' : 'fade-right'} duration="1000" delay="200">
          <div class="{service.imagePosition === 'right' ? 'md:pr-4' : 'md:pl-4'}">
            <h3 class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">{service.category}</h3>
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              {service.description}
            </p>
            <ul class="space-y-4">
              {#each service.features as feature}
                <li class="flex items-center gap-3 text-gray-700 font-medium group">
                  <div class="p-1 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <svg class="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    {/each}
  </div>
</section>

<!-- Impact Section -->
<section class="relative py-32 px-6 md:px-8 bg-primary-900 text-white overflow-hidden">
  <!-- Animated Background -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15),transparent_70%)]"></div>
  <div class="absolute top-0 left-0 w-full h-full opacity-20 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"></div>
  
  <div class="relative z-10 max-w-5xl mx-auto text-center">
    <ScrollReveal animation="fade-up" duration="1000">
      <div class="inline-flex items-center justify-center p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10 backdrop-blur-sm animate-pulse">
        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h2 class="text-3xl md:text-6xl font-bold mb-8 leading-tight">{impact.title}</h2>
      <p class="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
        Our systematic approach <span class="text-white font-medium border-b-2 border-blue-500">{impact.highlight}</span> for European stakeholders while accelerating the adoption of proven solutions.
      </p>
    </ScrollReveal>
  </div>
</section>

<!-- Who We Work With -->
<section class="py-24 px-6 md:px-8 bg-gray-50 overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <ScrollReveal animation="fade-up" duration="1000">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 class="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">{stakeholders.badge}</h2>
          <h3 class="text-4xl md:text-5xl font-bold text-gray-900">{stakeholders.sectionTitle}</h3>
        </div>
        <p class="text-gray-500 mt-4 md:mt-0 max-w-md text-lg md:text-right">
          {stakeholders.sectionSubtitle}
        </p>
      </div>
    </ScrollReveal>
    
    <ScrollRevealStagger itemCount={stakeholders.items.length} staggerDelay={100} animation="fade-up" let:getItemClass>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each stakeholders.items as stakeholder, idx}
          <div class="group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 relative transform hover:-translate-y-2 {getItemClass(idx)}">
            <div class="h-64 overflow-hidden relative">
              <!-- Skeleton Loader -->
              {#if !stakeholderImagesLoaded[idx]}
                <div class="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
                  <svg class="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                  </svg>
                </div>
              {/if}
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10"/>
              <div class="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"/>
              <img 
                src={stakeholder.image}
                alt={stakeholder.title}
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 {stakeholderImagesLoaded[idx] ? '' : 'opacity-0'}"
                on:load={(e) => handleImageLoad(e, 'stakeholder', idx)}
                use:checkImageLoaded={{ type: 'stakeholder', idx }}
              />
              <div class="absolute bottom-4 left-4 z-20 text-white">
                {#if stakeholder.icon === 'building'}
                  <svg class="text-blue-400 w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                {:else if stakeholder.icon === 'recycle'}
                  <svg class="text-blue-400 w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                {:else if stakeholder.icon === 'heart'}
                  <svg class="text-blue-400 w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                {:else if stakeholder.icon === 'globe'}
                  <svg class="text-blue-400 w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                {/if}
                <h4 class="text-xl font-bold">{stakeholder.title}</h4>
              </div>
            </div>
            <div class="p-6">
              <p class="text-sm text-gray-600 leading-relaxed">{stakeholder.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </ScrollRevealStagger>
  </div>
</section>

<!-- Closing CTA -->
<section class="py-24 px-6 md:px-8 bg-white relative overflow-hidden">
  <div class="max-w-4xl mx-auto text-center relative z-10">
    <ScrollReveal animation="fade-up" duration="1000">
      <h2 class="text-3xl md:text-4xl text-gray-900 font-bold mb-8">{cta.title}</h2>
      <p class="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-light">
        "{cta.description.split(cta.highlight)[0]}<span class="text-blue-600 font-medium">{cta.highlight}</span>{cta.description.split(cta.highlight)[1]}"
      </p>
      <a href={cta.buttonLink} class="inline-flex items-center gap-2 text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 hover:text-blue-800 hover:border-blue-800 transition-colors cursor-pointer group">
        {cta.buttonText}
        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
    </ScrollReveal>
  </div>
</section>

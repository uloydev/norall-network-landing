<script lang="ts">
  import type { TestimonialsSection } from '$lib/types/cms';
  import { getMediaUrl } from '$lib/api/cms';
  import Container from '$components/ui/Container.svelte';
  import Section from '$components/ui/Section.svelte';

  export let section: TestimonialsSection;
</script>

<Section>
  <div class="bg-secondary-50 py-16 md:py-24">
    <Container>
      <div class="text-center">
        <h2 class="mb-4 text-3xl font-bold text-secondary-900 md:text-4xl lg:text-5xl">
          {section.title}
        </h2>
        {#if section.subtitle}
          <p class="mx-auto mb-16 max-w-3xl text-lg text-secondary-600">
            {section.subtitle}
          </p>
        {/if}
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each section.testimonials as testimonial}
          <div class="rounded-xl bg-white p-8 shadow-sm">
            <!-- Stars -->
            <div class="mb-4 flex gap-1">
              {#each Array(testimonial.rating) as _}
                <svg class="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              {/each}
            </div>

            <!-- Content -->
            <p class="mb-6 text-secondary-700">"{testimonial.content}"</p>

            <!-- Author -->
            <div class="flex items-center gap-4">
              {#if testimonial.avatar}
                <img
                  src={getMediaUrl(testimonial.avatar.url)}
                  alt={testimonial.avatar.alternativeText || testimonial.name}
                  class="h-12 w-12 rounded-full object-cover"
                />
              {:else}
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
              {/if}
              <div>
                <div class="font-semibold text-secondary-900">{testimonial.name}</div>
                {#if testimonial.role || testimonial.company}
                  <div class="text-sm text-secondary-600">
                    {testimonial.role}{testimonial.role && testimonial.company ? ' at ' : ''}{testimonial.company}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </Container>
  </div>
</Section>

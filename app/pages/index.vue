<script setup lang="ts">
definePageMeta({
  layout: false
})

useSeoMeta({
  title: 'NLFTs - Streamlined Communication for Iterating Fast',
  description: 'Acme is an installable, self-hosted team chat system. You can have several paragraphs in here and the thing will wrap gracefully.',
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})

const navLinks = [
  { label: 'Features', to: '#features' },
  { label: 'Pricing', to: '#pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'Changelog', to: '/changelog' }
]

const companies = [
  { name: 'Proline', icon: 'i-lucide-zap' },
  { name: 'hues', icon: 'i-lucide-droplets' },
  { name: 'Greenish', icon: 'i-lucide-leaf' },
  { name: 'Cloud', icon: 'i-lucide-cloud' },
  { name: 'Volume', icon: 'i-lucide-music' },
  { name: 'PinPoint', icon: 'i-lucide-map-pin' }
]
</script>

<template>
  <div class="min-h-screen bg-black text-white selection:bg-purple-500/30">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              a
            </div>
            Acme
          </NuxtLink>

          <div class="hidden items-center gap-6 md:flex">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.label"
              :to="link.to"
              class="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <UButton
            variant="ghost"
            color="neutral"
            class="hidden font-semibold md:flex"
          >
            Log In
          </UButton>
          <UButton
            class="rounded-full bg-purple-600 px-6 py-2 font-bold text-white hover:bg-purple-700"
          >
            Get Started Today
          </UButton>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="relative overflow-hidden px-6 pt-12 pb-32 md:pt-16 md:pb-48">
        <div class="mx-auto max-w-4xl text-center">
          <!-- Avatars / Social Proof -->
          <div class="mb-8 flex flex-col items-center justify-center gap-3">
            <div class="flex -space-x-3 overflow-hidden">
              <UAvatar
                v-for="i in 3"
                :key="i"
                :src="`https://i.pravatar.cc/100?u=${i}`"
                size="sm"
                class="ring-2 ring-black"
              />
            </div>
            <p class="text-sm font-medium text-neutral-400">
              1,254 happy customers
            </p>
          </div>

          <!-- Hero Headline -->
          <h1 class="mx-auto max-w-3xl text-5xl font-extrabold tracking-tighter sm:text-7xl">
            Streamlined Communication for <span class="text-neutral-500">Iterating Fast</span>
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Acme is an installable, self-hosted team chat system. You can have several paragraphs in here and the thing will wrap gracefully.
          </p>

          <!-- Action Buttons -->
          <div class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <UButton
              variant="outline"
              size="lg"
              class="w-full border-white/10 px-8 font-bold sm:w-auto"
            >
              Request Demo
            </UButton>
            <UButton
              size="lg"
              class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 px-10 font-bold text-white hover:brightness-110 sm:w-auto"
            >
              Get Started for Free
            </UButton>
          </div>
        </div>

        <!-- Modern Background: Dots and Diagonal Beams -->
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <!-- Subtle Glows -->
          <div class="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
          <div class="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
          
          <!-- Dot Pattern -->
          <div class="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px]" />
          
          <!-- Diagonal Beams SVG -->
          <svg class="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0)" />
                <stop offset="50%" stop-color="rgba(139, 92, 246, 0.3)" />
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0)" />
              </linearGradient>
            </defs>
            <line x1="-10%" y1="20%" x2="110%" y2="120%" stroke="url(#beam-grad)" stroke-width="0.5" />
            <line x1="10%" y1="-10%" x2="130%" y2="110%" stroke="url(#beam-grad)" stroke-width="0.5" />
            <line x1="-30%" y1="60%" x2="130%" y2="180%" stroke="url(#beam-grad)" stroke-width="0.5" />
            <line x1="50%" y1="-20%" x2="150%" y2="80%" stroke="url(#beam-grad)" stroke-width="0.5" />
          </svg>
        </div>
      </section>

      <!-- Logo Cloud -->
      <section class="border-y border-white/5 bg-neutral-950/50 py-16">
        <div class="mx-auto max-w-7xl px-6 text-center">
          <p class="mb-12 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Join 4,000+ companies already growing
          </p>
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-12">
            <div
              v-for="company in companies"
              :key="company.name"
              class="flex items-center justify-center gap-2 text-neutral-400 grayscale transition-all hover:grayscale-0 hover:text-white"
            >
              <UIcon :name="company.icon" class="h-6 w-6" />
              <span class="text-xl font-bold tracking-tight">{{ company.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="px-6 py-24 md:py-32">
        <div class="mx-auto max-w-7xl">
          <div class="mb-20 text-center">
            <span class="inline-flex items-center rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neutral-400 ring-1 ring-white/10">
              Communication
            </span>
            <h2 class="mt-6 text-4xl font-bold tracking-tighter sm:text-6xl">
              Enhanced Team Communication
            </h2>
            <p class="mx-auto mt-6 max-w-3xl text-lg text-neutral-400 md:text-xl">
              Simplify team discussions and collaboration with our efficient messaging features, enabling swift decision-making and project progress tracking.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <!-- Feature Card 1 -->
            <div class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-8 transition-all hover:border-purple-500/30">
              <h3 class="text-2xl font-bold">Real-Time Messaging</h3>
              <p class="mt-4 text-neutral-400">
                Instantly connect with your team across channels and private messages. Stay in sync with zero latency.
              </p>
              <div class="mt-8 flex h-48 items-center justify-center rounded-2xl bg-neutral-900 border border-white/5">
                <UIcon name="i-lucide-message-square" class="h-16 w-16 text-purple-500 opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
            </div>

            <!-- Feature Card 2 -->
            <div class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-8 transition-all hover:border-indigo-500/30">
              <h3 class="text-2xl font-bold">Collaborative Workspace</h3>
              <p class="mt-4 text-neutral-400">
                Bring all your tools into one place. Shared documents, integrated apps, and streamlined workflows.
              </p>
              <div class="mt-8 flex h-48 items-center justify-center rounded-2xl bg-neutral-900 border border-white/5">
                <UIcon name="i-lucide-layout" class="h-16 w-16 text-indigo-500 opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Simple Footer -->
    <footer class="border-t border-white/10 bg-black py-12">
      <div class="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p class="text-sm text-neutral-500">
          © 2026 Acme Community. All rights reserved.
        </p>
        <div class="flex gap-6">
          <NuxtLink to="#" class="text-sm text-neutral-400 hover:text-white">Privacy</NuxtLink>
          <NuxtLink to="#" class="text-sm text-neutral-400 hover:text-white">Terms</NuxtLink>
          <NuxtLink to="#" class="text-sm text-neutral-400 hover:text-white">Twitter</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Minor optimizations for performance */
.tracking-tighter {
  letter-spacing: -0.04em;
}
</style>

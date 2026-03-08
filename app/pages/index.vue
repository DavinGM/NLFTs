<script setup lang="ts">
definePageMeta({
  layout: false
})

useSeoMeta({
  title: 'NLFTs Community - Next-Level Frameworks & Tech Stack',
  description: 'NLFTs (Next-Level Frameworks & Tech Stack) is a collaborative community for modern developers to explore cutting-edge technologies and best practices.',
  ogTitle: 'NLFTs Community - Next-Level Frameworks & Tech Stack',
  ogDescription: 'Collaborative hub for modern tech stacks, frameworks, and developer experience.',
  ogImage: '/seo/main.png',
  twitterImage: '/seo/main.png',
  twitterCard: 'summary_large_image',
  ogSiteName: 'NLFTs Community'
})

const sponsors = [
  { name: 'FTs Project', icon: 'i-lucide-boxes' },
  { name: 'Asia Code 2022', icon: 'i-lucide-code-2' },
  { name: 'Grantara Indonesia', icon: 'i-lucide-mountain' },
  { name: 'Ryn Verse', icon: 'i-lucide-layers' }
]

const memberAvatars = [
  'https://avatars.githubusercontent.com/u/228851591?v=4',
  'https://avatars.githubusercontent.com/u/228840381?v=4',
  'https://avatars.githubusercontent.com/u/228839961?v=4',
  'https://avatars.githubusercontent.com/u/225441519?v=4',
  'https://avatars.githubusercontent.com/u/204519754?v=4',
  'https://avatars.githubusercontent.com/u/232498781?v=4'
]
</script>

<template>
  <div class="min-h-screen text-white selection:bg-purple-500/30">
    <main>
      <!-- Hero Section -->
      <section class="relative overflow-hidden px-6 pt-12 pb-32 md:pt-16 md:pb-48">
        <div class="mx-auto max-w-4xl text-center">
          <!-- Avatars / Social Proof -->
          <div class="mb-8 flex flex-col items-center justify-center gap-3">
            <div class="flex -space-x-3 overflow-hidden">
              <img
                v-for="(avatar, index) in memberAvatars"
                :key="index"
                :src="avatar"
                class="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-neutral-800"
                alt="Member Avatar"
              />
            </div>
            <p class="text-sm font-medium text-neutral-400">
              67 Members only
            </p>
          </div>

          <!-- Hero Headline -->
          <h1 class="mx-auto max-w-3xl text-5xl font-extrabold tracking-tighter sm:text-7xl">
            present yourself for <span class="text-indigo-500">DX</span> to all  <span class="text-neutral-500">Developers</span>
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            <span class="font-bold">NLFTs</span> adalah perusahaan berbasis komunitas yang berfokus pada eksplorasi teknologi terbaru, praktik terbaik pemrograman, dan membangun proyek sumber terbuka. Kami percaya bahwa <span class="font-bold" >Kolaborasi</span> adalah kunci <span class="font-bold">inovasi</span>.
          </p>

          <!-- Action Buttons -->
          <div class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <UButton
              variant="outline"
              size="lg"
              class="w-full border-white/10 px-8 font-bold sm:w-auto"
            >
              Request Invite
            </UButton>
            <UButton
              to="https://nlfts.dev/discord"
              size="lg"
              class="w-full bg-linear-to-r from-purple-600 to-indigo-600 px-10 font-bold text-white hover:brightness-110 sm:w-auto"
            >
              Join Discord
            </UButton>
          </div>
        </div>
      </section>

      <section class="border-y border-white/5 bg-neutral-950/50 py-16 relative overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 text-center">
          <p class="mb-12 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Didukung oleh Sponsor Kami
          </p>
          
          <div class="relative">
            <!-- Fade Effects -->
            <div class="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-neutral-950 to-transparent z-10 hidden md:block" />
            <div class="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-neutral-950 to-transparent z-10 hidden md:block" />
            
            <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-24">
              <div
                v-for="sponsor in sponsors"
                :key="sponsor.name"
                class="flex items-center justify-center gap-3 text-neutral-400 grayscale transition-all duration-300 hover:grayscale-0 hover:text-white hover:scale-110"
              >
                <UIcon :name="sponsor.icon" class="h-6 w-6 text-indigo-400" />
                <span class="text-xl font-bold tracking-tight">{{ sponsor.name }}</span>
              </div>
              
              <!-- Placeholder for overflow effect if > 4, currently empty as we have 4 -->
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="px-6 py-24 md:py-32">
        <div class="mx-auto max-w-7xl">
          <div class="mb-20 text-center">
            <span class="inline-flex items-center rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neutral-400 ring-1 ring-white/10">
              Komunitas
            </span>
            <h2 class="mt-6 text-4xl font-bold tracking-tighter sm:text-6xl">
              Komunikasi Tim yang Ditingkatkan
            </h2>
            <p class="mx-auto mt-6 max-w-3xl text-lg text-neutral-400 md:text-xl">
              Sederhanakan diskusi tim dan kolaborasi dengan fitur perpesanan kami yang efisien, memungkinkan pengambilan keputusan yang cepat dan pelacakan kemajuan proyek.
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
          © 2024 NLFTs Community. All rights reserved.
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

<script setup lang="ts">
const projects = [
  {
    title: 'Jurnalistik',
    description: 'Website resmi Jurnalistik SMK Assalaam Bandung yang dibangun dengan Nuxt Content v4 dan GSAP .',
    image: '/showcase/jurnalistik.png',
    tech: ['Nuxt 4', 'GSAP', 'Nuxt UI', 'vue-pixel'],
    link: 'https://github.com/NLFTs/Jurnalistik',
    demo: 'https://jurnalistik.nlfts.dev',
    status: 'Released',
    contributors: [
      'https://avatars.githubusercontent.com/u/228851591?v=4',
      'https://avatars.githubusercontent.com/u/204519754?s=130&v=4',
      'https://avatars.githubusercontent.com/u/228840381?s=130&v=4'
    ]
  },
//   {
//     title: 'NLFTs UI Kit',
//     description: 'Koleksi komponen UI premium yang dirancang khusus untuk ekosistem framework NLFTs.',
//     image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop',
//     tech: ['Vue 3', 'Radix Vue', 'GSAP'],
//     link: '#',
//     status: 'In Progress',
//     contributors: [
//       'https://avatars.githubusercontent.com/u/228332586?s=130&v=4',
//       'https://avatars.githubusercontent.com/u/182593937?s=130&v=4'
//     ]
//   },
//   {
//     title: 'Starter Template',
//     description: 'Template dasar untuk memulai proyek Next-Level dengan struktur folder yang sudah terstandarisasi.',
//     image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
//     tech: ['TypeScript', 'Eslint', 'Vitest'],
//     link: '#',
//     status: 'BETA',
//     contributors: [
//       'https://avatars.githubusercontent.com/u/232498018?s=130&v=4',
//       'https://avatars.githubusercontent.com/u/218329504?v=4'
//     ]
//   }
]

useSeoMeta({
  title: 'Showcase - NLFTs Community',
  description: 'Eksplorasi proyek-proyek inovatif yang sedang dibangun oleh komunitas NLFTs.'
})
</script>

<template>
  <UContainer class="py-24 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

    <div class="mb-20">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
        <UIcon name="i-lucide-rocket" class="w-3.5 h-3.5" />
        Innovation Lab
      </div>
      <h1 class="text-4xl sm:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
        PROJECT <br />
        <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">SHOWCASE</span>
      </h1>
      <p class="text-neutral-400 max-w-2xl text-xl leading-relaxed">
        Koleksi karya eksploratif, framework modern, dan alat bantu pengembang yang lahir dari kolaborasi komunitas NLFTs.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="group relative"
      >
        <!-- Card Container -->
        <div class="relative bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group-hover:-translate-y-2">
          
          <!-- Image Section -->
          <div class="relative h-56 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            
            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <UBadge
                :color="project.status === 'Released' ? 'green' : project.status === 'In Progress' ? 'orange' : 'neutral'"
                variant="subtle"
                class="rounded-full px-3 py-1 backdrop-blur-md border border-white/10"
              >
                {{ project.status }}
              </UBadge>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in project.tech" 
                :key="tag"
                class="text-[10px] font-bold uppercase tracking-widest text-blue-400/80"
              >
                #{{ tag }}
              </span>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-neutral-400 text-sm leading-relaxed mb-8 line-clamp-3">
              {{ project.description }}
            </p>

            <div class="flex items-center justify-between mt-auto">
              <div class="flex items-center gap-2">
                <UButton
                  :to="project.link"
                  target="_blank"
                  label="GitHub"
                  variant="solid"
                  color="neutral"
                  size="xs"
                  class="rounded-full px-4 font-bold"
                  icon="i-simple-icons-github"
                />
                <UButton
                  v-if="project.demo"
                  :to="project.demo"
                  target="_blank"
                  label="Live Demo"
                  variant="solid"
                  color="primary"
                  size="xs"
                  class="rounded-full px-4 font-bold glow-on-hover"
                  icon="i-lucide-external-link"
                />
              </div>
              
              <div class="flex -space-x-2">
                <UAvatar
                  v-for="(avatar, idx) in project.contributors"
                  :key="idx"
                  :src="avatar"
                  size="xs"
                  class="ring-2 ring-neutral-900"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Background Glow on Hover -->
        <div class="absolute -inset-px bg-linear-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-[25px] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="mt-32 border-t border-white/5 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 class="text-2xl font-bold text-white mb-2">Punya Proyek Luar Biasa?</h2>
        <p class="text-neutral-500">Daftarkan proyek Anda untuk ditampilkan di showcase komunitas NLFTs.</p>
      </div>
      <UButton
        to="https://github.com/nlfts"
        size="xl"
        color="neutral"
        variant="outline"
        label="Submit Project via GitHub"
        class="rounded-full px-8 border-white/10 hover:bg-white/5 font-bold"
        icon="i-simple-icons-github"
      />
    </div>
  </UContainer>
</template>

<style scoped>
.glow-on-hover:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.leading-zero {
  line-height: 0.9;
}
</style>

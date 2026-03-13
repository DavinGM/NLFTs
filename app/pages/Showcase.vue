<script setup lang="ts">
import { projects } from '~/lib/showcase'

useSeoMeta({
  title: 'Showcase — NLFTs Community',
  description: 'Explore premium projects and digital experiences built by the NLFTs community.'
})

const stats = [
  { value: '#1', label: 'Tech Community', detail: 'West Java' },
  { value: '12+', label: 'Active Projects', detail: 'Open Source' },
  { value: '2.4K', label: 'Monthly Traffic', detail: 'Unique Visitors' }
]

const brands = [
  { name: 'LOUIS VUITTON', icon: 'i-simple-icons-louisvuitton' },
  { name: 'BLIZZARD', icon: 'i-simple-icons-blizzard' },
  { name: 'VANS', icon: 'i-simple-icons-vans' },
  { name: 'GUCCI', icon: 'i-simple-icons-gucci' },
  { name: 'NIKE', icon: 'i-simple-icons-nike' },
  { name: 'ADIDAS', icon: 'i-simple-icons-adidas' }
]
</script>

<template>
  <div class="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-hidden relative">
    <!-- Premium Vector Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-linear-to-b from-indigo-600/10 via-transparent to-transparent opacity-50" />
      <svg class="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <UContainer class="relative z-10 pt-20 pb-24">
      <!-- Hero Section -->
      <div class="text-center max-w-4xl mx-auto mb-24">
        <h1 class="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.85] animate-fade-in group">
          Real-world Applications <br> 
          <span class="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-500 group-hover:hue-rotate-90 transition-all duration-1000">built with NLFTs</span>
        </h1>
        <p class="text-neutral-500 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Eksplorasi website, aplikasi, dan pengalaman digital luar biasa yang dibuat oleh para pengembang dan tim di seluruh dunia.
        </p>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-40 px-6">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center text-center group">
          <span class="text-4xl md:text-6xl font-black text-emerald-400 mb-2 tracking-tighter group-hover:text-white transition-colors">
            {{ stat.value }}
          </span>
          <span class="text-xs font-black uppercase tracking-[0.3em] text-neutral-500 mb-1">{{ stat.label }}</span>
          <span class="text-[10px] uppercase tracking-widest text-neutral-700 font-bold">{{ stat.detail }}</span>
        </div>
      </div>

      <!-- Brand Logos Strip -->
      <div class="relative mb-40">
        <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div class="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        
        <div class="py-12 overflow-hidden px-4">
          <p class="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600 text-center mb-10">
            Trusted and used by community innovators worldwide
          </p>
          <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <div v-for="brand in brands" :key="brand.name" class="flex items-center gap-3 group px-4">
               <span class="text-xl font-black tracking-tighter text-neutral-400 group-hover:text-white transition-colors">{{ brand.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="group relative h-full"
        >
          <a :href="project.demo || project.link" target="_blank" class="block h-full card-premium">
            <!-- Project Image Wrapper -->
            <div class="relative aspect-video overflow-hidden bg-neutral-900">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              
              <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">
                    {{ project.status }}
                  </span>
                  <h3 class="text-2xl font-black tracking-tighter text-white">{{ project.title }}</h3>
                </div>
                <div class="w-10 h-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-500">
                  <UIcon name="i-lucide-arrow-up-right" class="w-5 h-5" />
                </div>
              </div>
            </div>

            <!-- Project Details -->
            <div class="p-8 border-t border-white/5 bg-neutral-950/50 backdrop-blur-2xl">
              <p class="text-neutral-500 text-sm leading-relaxed mb-8 line-clamp-2 italic">
                "{{ project.description }}"
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="t in project.tech.slice(0, 3)" 
                    :key="t"
                    class="text-[9px] font-black uppercase tracking-widest text-neutral-400"
                  >
                    {{ t }}
                  </span>
                </div>
                <!-- Mini Avatars -->
                <div class="flex -space-x-1.5">
                  <img 
                    v-for="(avatar, i) in project.contributors.slice(0, 3)" 
                    :key="i"
                    :src="avatar"
                    class="w-5 h-5 rounded-full border border-black"
                  />
                </div>
              </div>
            </div>
          </a>
          <!-- Card Outer Glow -->
          <div class="absolute -inset-px rounded-[2rem] bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-all duration-500 pointer-events-none -z-10 blur-xl" />
        </div>
      </div>
      
      <!-- Bottom CTA Section -->
      <div class="mt-48 text-center bg-linear-to-b from-indigo-600/5 via-transparent to-transparent rounded-[3rem] p-16 border border-white/5 relative overflow-hidden">
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
        
        <h2 class="text-4xl font-black tracking-tighter text-white mb-6">Build your future with us.</h2>
        <p class="text-neutral-500 mb-10 max-w-lg mx-auto leading-relaxed">
          Punya proyek inovatif? Daftarkan karya Anda hari ini dan jadilah bagian dari ekosistem pengembang modern.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <UButton 
            to="https://github.com/nlfts"
            size="xl"
            label="Submit via GitHub"
            class="rounded-full px-10 font-bold bg-white text-black hover:bg-neutral-200 transition-colors"
            icon="i-simple-icons-github"
          />
          <UButton 
            to="/Confirm"
            variant="outline"
            size="xl"
            label="Documentation"
            class="rounded-full px-10 font-bold border-white/10 hover:bg-white/5"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.card-premium {
  @apply relative overflow-hidden rounded-4xl border border-white/5 bg-neutral-950 transition-all duration-500;
}

.card-premium:hover {
  @apply border-indigo-500/30 -translate-y-2;
  box-shadow: 0 30px 60px -15px rgba(79, 70, 229, 0.15);
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
</style>

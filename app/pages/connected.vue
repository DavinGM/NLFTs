<script setup lang="ts">
const socialLinks = [
  {
    name: 'Discord',
    description: 'Gabung di server pusat komunitas untuk diskusi teknis, tanya jawab, dan networking real-time.',
    icon: 'i-simple-icons-discord',
    color: 'blue',
    link: '/connected/discord',
    label: 'Join Server',
    status: 'Online'
  },
  {
    name: 'GitHub',
    description: 'Kontribusi langsung ke repositori open-source kami. Fork, kembangkan, dan kirim Pull Request.',
    icon: 'i-simple-icons-github',
    color: 'neutral',
    link: '/connected/github',
    label: 'Start Contributing',
    status: 'Public'
  },
  {
    name: 'WhatsApp',
    description: 'Grup khusus untuk informasi cepat, pengumuman event, dan diskusi ringan antar anggota.',
    icon: 'i-simple-icons-whatsapp',
    color: 'green',
    link: '/connected/whatsapp',
    label: 'Join Group',
    status: 'Active'
  },
  {
    name: 'Newsletter',
    description: 'Dapatkan update mingguan mengenai teknologi terbaru, artikel blog, dan rilis framework.',
    icon: 'i-lucide-mail',
    color: 'indigo',
    link: '#',
    label: 'Subscribe',
    status: 'Weekly'
  }
]

useSeoMeta({
  title: 'Connected - NLFTs Community',
  description: 'Terhubung dengan ekosistem NLFTs melalui berbagai platform komunikasi kami.'
})
</script>

<template>
  <UContainer class="py-24 relative overflow-hidden min-h-[calc(100vh-64px)] flex flex-col justify-center">
    <!-- Premium background glow -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] -z-10 animate-pulse" style="animation-delay: 2s" />
    
    <div class="max-w-5xl mx-auto w-full">
      <div class="text-center mb-20 px-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6 mx-auto">
          <UIcon name="i-lucide-network" class="w-3.5 h-3.5" />
          Community Hub
        </div>
        <h1 class="text-6xl sm:text-8xl font-black tracking-tighter text-white mb-8 leading-none">
          STAY <span class="text-transparent bg-clip-text bg-linear-to-b from-white to-white/30">SYNCED</span>
        </h1>
        <p class="text-neutral-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Hubungkan visi Anda dengan ribuan pengembang lainnya melalui infrastruktur komunitas NLFTs yang terintegrasi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div
          v-for="platform in socialLinks"
          :key="platform.name"
          class="connected-card group relative"
        >
          <!-- Outer Border Glow -->
          <div class="absolute -inset-0.5 bg-linear-to-br from-white/10 to-transparent rounded-[32px] opacity-20 group-hover:opacity-100 group-hover:from-blue-500/30 transition-all duration-500" />
          
          <!-- Card Body -->
          <NuxtLink 
            :to="platform.link"
            class="relative flex flex-col h-full bg-neutral-950/80 backdrop-blur-3xl rounded-[30px] p-8 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-1"
          >
            <!-- Background Accent -->
            <div 
              class="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"
              :class="`bg-${platform.color}-500`"
            />

            <div class="flex items-center justify-between mb-10">
              <div 
                class="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-blue-500/50 group-hover:scale-110 transition-all duration-500"
                :class="`text-${platform.color}-500 group-hover:text-${platform.color}-400`"
              >
                <UIcon :name="platform.icon" class="w-8 h-8" />
              </div>
              
              <div class="flex flex-col items-end gap-1">
                <UBadge variant="subtle" color="neutral" class="rounded-full px-3 py-0.5 text-[9px] font-black tracking-widest uppercase bg-white/5 border-white/10">
                  {{ platform.status }}
                </UBadge>
                <div class="flex items-center gap-1.5 opacity-40">
                  <span class="w-1 h-1 rounded-full bg-current" />
                  <span class="text-[8px] font-bold uppercase tracking-tighter">Verified Node</span>
                </div>
              </div>
            </div>

            <div class="flex-1">
              <h3 class="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                {{ platform.name }}
              </h3>
              
              <p class="text-neutral-500 text-sm leading-relaxed font-medium mb-10 group-hover:text-neutral-400 transition-colors">
                {{ platform.description }}
              </p>
            </div>

            <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-blue-500/80 transition-colors">
                {{ platform.label }}
              </span>
              <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                <UIcon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            <!-- Spotlight effect -->
            <div class="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Footer Badges -->
      <div class="mt-24 flex flex-wrap justify-center gap-4 px-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <div 
          v-for="brand in ['X', 'Instagram', 'LinkedIn', 'YouTube']" 
          :key="brand"
          class="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer group"
        >
          <UIcon :name="`i-simple-icons-${brand.toLowerCase()}`" class="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
          <span class="text-[10px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{{ brand }}</span>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.bg-radial-gradient {
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 80%);
}

.connected-card {
  perspective: 1000px;
}

.text-glow {
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

/* Fallback colors for dynamic class if needed */
.bg-blue-500 { background-color: rgb(59 130 246); }
.bg-green-500 { background-color: rgb(34 197 94); }
.bg-indigo-500 { background-color: rgb(99 102 241); }

.text-blue-500 { color: rgb(59 130 246); }
.text-green-500 { color: rgb(34 197 94); }
.text-indigo-500 { color: rgb(99 102 241); }
</style>


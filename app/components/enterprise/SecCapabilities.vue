<script setup lang="ts">
defineProps<{
  metrics: Array<{ value: string; label: string }>
}>()
</script>

<template>
  <section id="output" class="py-24 md:py-32 px-6 border-t border-white/5 scroll-mt-32">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16">
        <p class="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-4">Kapasitas</p>
        <h2 class="text-4xl sm:text-5xl font-black tracking-tighter text-white max-w-2xl">
          Arsitektur Sistem,<br/>Bukan Hanya Layanan.
        </h2>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

        <!-- Cell A - Large: Architecture Diagram -->
        <div class="md:col-span-2 relative rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-all duration-500"/>
          <div class="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
            <svg class="w-full h-full" viewBox="0 0 600 300" fill="none">
              <defs>
                <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#6366f1"/>
                  <stop offset="100%" stop-color="#a855f7"/>
                </linearGradient>
              </defs>
              <!-- System nodes -->
              <circle cx="80" cy="150" r="24" stroke="#6366f1" stroke-width="1.5"/>
              <circle cx="220" cy="80" r="16" stroke="#6366f1" stroke-width="1"/>
              <circle cx="220" cy="220" r="16" stroke="#a855f7" stroke-width="1"/>
              <circle cx="360" cy="150" r="30" stroke="#6366f1" stroke-width="1.5"/>
              <circle cx="500" cy="100" r="14" stroke="#a855f7" stroke-width="1"/>
              <circle cx="500" cy="200" r="14" stroke="#6366f1" stroke-width="1"/>
              <!-- Connections -->
              <line x1="104" y1="150" x2="204" y2="88" stroke="#6366f1" stroke-width="0.8"/>
              <line x1="104" y1="150" x2="204" y2="212" stroke="#a855f7" stroke-width="0.8"/>
              <line x1="236" y1="80" x2="330" y2="145" stroke="#6366f1" stroke-width="0.8"/>
              <line x1="236" y1="220" x2="330" y2="158" stroke="#a855f7" stroke-width="0.8"/>
              <line x1="390" y1="140" x2="486" y2="106" stroke="#6366f1" stroke-width="0.8"/>
              <line x1="390" y1="160" x2="486" y2="194" stroke="#6366f1" stroke-width="0.8"/>
              <text x="64" y="155" fill="#6366f1" font-size="8" font-family="monospace">SVC</text>
              <text x="344" y="155" fill="#6366f1" font-size="8" font-family="monospace">CORE</text>
            </svg>
          </div>
          <div>
            <div class="inline-flex items-center gap-2 text-indigo-400 mb-4">
              <UIcon name="i-lucide-cpu" class="w-5 h-5"/>
              <span class="text-xs font-bold uppercase tracking-widest">Arsitektur Sistem</span>
            </div>
            <h3 class="text-3xl font-black tracking-tighter text-white">Dirancang untuk<br/>Menjangkau Indefinit.</h3>
          </div>
          <p class="text-neutral-500 text-sm max-w-sm">Microservices, monorepos, atau modular monoliths — dirancang untuk menjangkau indefinite growth trajectory, bukan template umum.</p>
        </div>

        <!-- Cell B - Metrics -->
        <div class="rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-500">
          <div class="flex items-center gap-2 text-purple-400 mb-6">
            <UIcon name="i-lucide-zap" class="w-5 h-5"/>
            <span class="text-xs font-bold uppercase tracking-widest">Performa</span>
          </div>
          <div class="grid grid-cols-2 gap-4 flex-1">
            <div v-for="m in metrics" :key="m.label" class="flex flex-col justify-center p-4 rounded-2xl bg-white/3 border border-white/5 group-hover:border-indigo-500/20 transition-colors">
              <span class="text-3xl font-black tracking-tighter text-indigo-400">{{ m.value }}</span>
              <span class="text-[11px] font-medium text-neutral-500 mt-1">{{ m.label }}</span>
            </div>
          </div>
        </div>

        <!-- Cell C - Design Precision -->
        <div class="rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 flex flex-col justify-between group hover:border-indigo-500/30 transition-all duration-500">
          <div class="flex items-center gap-2 text-indigo-400 mb-6">
            <UIcon name="i-lucide-pen-tool" class="w-5 h-5"/>
            <span class="text-xs font-bold uppercase tracking-widest">Presisi Desain</span>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 200 140" fill="none" class="w-full opacity-50 group-hover:opacity-80 transition-opacity">
              <rect x="20" y="10" width="160" height="120" rx="12" stroke="#6366f1" stroke-width="1"/>
              <rect x="35" y="30" width="55" height="40" rx="6" stroke="url(#strokeGrad)" stroke-width="1.2" fill="#6366f1" fill-opacity="0.08"/>
              <rect x="110" y="30" width="55" height="40" rx="6" stroke="#a855f7" stroke-width="1" fill="#a855f7" fill-opacity="0.05"/>
              <rect x="35" y="85" width="130" height="10" rx="4" fill="#6366f1" fill-opacity="0.15"/>
              <rect x="35" y="102" width="80" height="8" rx="4" fill="#6366f1" fill-opacity="0.08"/>
            </svg>
          </div>
          <p class="text-neutral-500 text-sm">UI sistem yang pixel-perfect dengan token desain yang dapat diukur dan transfer Figma.</p>
        </div>

        <!-- Cell D - Scalability -->
        <div class="md:col-span-2 rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 flex items-center gap-10 group hover:border-purple-500/30 transition-all duration-500 overflow-hidden relative">
          <div class="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-600/8 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/15 transition-all duration-500"/>
          <div class="flex-1">
            <div class="flex items-center gap-2 text-purple-400 mb-4">
              <UIcon name="i-lucide-trending-up" class="w-5 h-5"/>
              <span class="text-xs font-bold uppercase tracking-widest">Skalabilitas</span>
            </div>
            <h3 class="text-3xl font-black tracking-tighter text-white mb-4">Infrastruktur yang<br/>berfungsi dengan Anda.</h3>
            <p class="text-neutral-500 text-sm max-w-sm">Dari 10 hingga 10 juta pengguna — sistem kami telah divalidasi pada skala sebelum Anda membutuhkannya.</p>
          </div>
          <div class="hidden md:block shrink-0">
            <svg viewBox="0 0 200 120" fill="none" class="w-48 opacity-40 group-hover:opacity-70 transition-opacity">
              <polyline points="10,100 50,80 90,55 130,30 170,10 190,5" stroke="url(#strokeGrad)" stroke-width="1.5" fill="none"/>
              <circle cx="50" cy="80" r="3" fill="#6366f1"/>
              <circle cx="90" cy="55" r="3" fill="#6366f1"/>
              <circle cx="130" cy="30" r="3" fill="#a855f7"/>
              <circle cx="170" cy="10" r="3" fill="#a855f7"/>
              <line x1="10" y1="105" x2="190" y2="105" stroke="#6366f1" stroke-width="0.5" opacity="0.3"/>
            </svg>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

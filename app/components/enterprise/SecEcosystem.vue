<script setup lang="ts">
defineProps<{
  ecosystem: Array<{ label: string; icon: string; desc: string }>
}>()
</script>

<template>
  <section id="ecosystem" class="py-24 md:py-32 px-6 border-t border-white/5 scroll-mt-32">
    <div class="mx-auto max-w-7xl">
      <div class="text-center mb-20">
        <p class="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-4">Ecosystem</p>
        <h2 class="text-4xl sm:text-5xl font-black tracking-tighter text-white">
          One System.<br/>Complete Coverage.
        </h2>
      </div>

      <!-- SVG Connection Map -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Center node - hidden on mobile -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
          <div class="w-20 h-20 rounded-full bg-linear-to-br from-indigo-600 to-purple-600 items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)]">
            <UIcon name="i-lucide-cpu" class="w-8 h-8 text-white"/>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in ecosystem"
            :key="item.label"
            class="group relative rounded-2xl border border-white/8 bg-white/2 backdrop-blur-sm p-6 hover:border-indigo-500/40 hover:bg-white/5 transition-all duration-300"
            :class="i === 0 ? 'md:col-start-1' : ''"
          >
            <!-- Connection line hint -->
            <div class="absolute inset-x-0 -bottom-3 h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <UIcon :name="item.icon" class="w-5 h-5 text-indigo-400"/>
            </div>
            <h3 class="text-sm font-bold text-white mb-2">{{ item.label }}</h3>
            <p class="text-xs text-neutral-600 leading-relaxed group-hover:text-neutral-500 transition-colors">{{ item.desc }}</p>
            <!-- Connecting SVG line to "center" (visual only) -->
            <svg class="absolute -bottom-px right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-30 transition-opacity" width="2" height="40" viewBox="0 0 2 40">
              <line x1="1" y1="0" x2="1" y2="40" stroke="#6366f1" stroke-width="1" stroke-dasharray="4 4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  ecosystem: Array<{ label: string; icon: string; desc: string }>
}>()

const techStack = [
  { icon: 'i-simple-icons-nuxtdotjs', color: 'text-green-400' },
  { icon: 'i-simple-icons-vuedotjs', color: 'text-emerald-500' },
  { icon: 'i-simple-icons-react', color: 'text-sky-400' },
  { icon: 'i-simple-icons-nextdotjs', color: 'text-white' },
  { icon: 'i-simple-icons-laravel', color: 'text-red-500' },
  { icon: 'i-simple-icons-flutter', color: 'text-blue-400' },
  { icon: 'i-simple-icons-kotlin', color: 'text-purple-500' },
  { icon: 'i-simple-icons-vitedotjs', color: 'text-yellow-400' },
  { icon: 'i-simple-icons-github', color: 'text-slate-400' }
]
</script>

<template>
  <section id="ecosystem" class="sec-ecosystem relative py-24 md:py-48 px-6 overflow-hidden bg-[#050506]">
    
    <!-- ─── BACKGROUND ARCHITECTURE ─── -->
    <div class="absolute inset-0 pointer-events-none select-none">
      <div class="dot-grid-large absolute inset-0 opacity-[0.05]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/5 rounded-full blur-[160px]"></div>
    </div>

    <div class="mx-auto max-w-7xl relative z-10">
      
      <!-- Section Header (Semantic & Grand) -->
      <div class="text-center mb-32">
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">Technology Integration Standard</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
          The <span class="text-indigo-500">Global</span> Stack <br class="hidden md:block">
          One Seamless System.
        </h2>
        <p class="text-neutral-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
          We leverage the world's most advanced frameworks to build 
          production-ready systems. From <span class="text-white font-medium">Nuxt</span> to <span class="text-white font-medium">Laravel</span>, 
          our ecosystem is engineered for absolute performance.
        </p>
      </div>

      <!-- ─── TECH CONSTELLATION DIAGRAM ─── -->
      <div class="relative max-w-6xl mx-auto min-h-[600px] flex items-center justify-center">
        
        <!-- SVG Connections (Grand & Detailed) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#4F46E5" stop-opacity="0" />
              <stop offset="50%" stop-color="#6366F1" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#4F46E5" stop-opacity="0" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <!-- Outer Orbit Ring -->
          <circle cx="600" cy="300" r="280" stroke="white" stroke-width="0.5" stroke-dasharray="4 12" opacity="0.1" />
          
          <!-- Connections to Primary Nodes -->
          <g class="flow-lines" filter="url(#glow)">
            <!-- Left Side -->
            <path d="M 600 300 C 500 300, 400 100, 200 100" stroke="url(#orbitGrad)" stroke-width="1" fill="none" class="animate-flow" />
            <path d="M 600 300 C 500 300, 400 300, 200 300" stroke="url(#orbitGrad)" stroke-width="1" fill="none" class="animate-flow" style="animation-delay: -1s" />
            <path d="M 600 300 C 500 300, 400 500, 200 500" stroke="url(#orbitGrad)" stroke-width="1" fill="none" class="animate-flow" style="animation-delay: -2s" />
            
            <!-- Right Side -->
            <path d="M 600 300 C 700 300, 800 100, 1000 100" stroke="url(#orbitGrad)" stroke-width="1" fill="none" class="animate-flow" style="animation-delay: -0.5s" />
            <path d="M 600 300 C 700 300, 800 300, 1000 300" stroke="url(#orbitGrad)" stroke-width="1" fill="none" class="animate-flow" style="animation-delay: -1.5s" />
            <path d="M 600 300 C 700 300, 800 500, 1000 500" stroke="url(#orbitGrad)" stroke-width="1" fill="none" class="animate-flow" style="animation-delay: -2.5s" />
          </g>
        </svg>

        <!-- Orbiting Tech Mini-Icons -->
        <div class="absolute inset-0 pointer-events-none hidden lg:block">
          <div v-for="(tech, i) in techStack" :key="i" class="tech-orbit-item absolute" :style="{ 
            left: `${50 + 35 * Math.cos((i * 40 * Math.PI) / 180)}%`,
            top: `${50 + 35 * Math.sin((i * 40 * Math.PI) / 180)}%`,
            animationDelay: `${i * -2}s`
          }">
            <div class="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <UIcon :name="tech.icon" class="w-4 h-4" :class="tech.color" />
            </div>
          </div>
        </div>

        <!-- Nodes Interface -->
        <div class="relative w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 lg:px-12">
          
          <!-- Left Column (Points 1-3) -->
          <div class="flex flex-col gap-16 md:gap-40 w-full md:w-auto justify-center">
            <div v-for="(item, i) in ecosystem.slice(0, 3)" :key="item.label" class="group relative flex items-center md:flex-row-reverse gap-6">
              <div class="node-main shrink-0 w-16 h-16 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] flex items-center justify-center transition-all group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                <UIcon :name="item.icon" class="w-7 h-7 text-neutral-400 group-hover:text-indigo-400" />
              </div>
              <div class="text-left md:text-right">
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{{ item.label }}</h3>
                <p class="text-xs text-neutral-500 max-w-[200px] leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Central Core (Grand Version) -->
          <div class="relative z-20 order-first md:order-none">
            <div class="core-grand relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#0a0a0c] border border-white/[0.1] flex items-center justify-center">
              <!-- Geometric Layers -->
              <div class="absolute inset-2 rounded-full border border-indigo-500/20 animate-spin-slow"></div>
              <div class="absolute inset-6 rounded-full border border-purple-500/10 animate-spin-reverse"></div>
              
              <!-- Content -->
              <div class="relative flex flex-col items-center">
                <div class="logo-placeholder mb-2">
                  <UIcon name="i-lucide-box" class="w-12 h-12 text-indigo-500" />
                </div>
                <span class="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-white">Platform</span>
              </div>
              
              <!-- Scanning Aura -->
              <div class="absolute inset-0 rounded-full bg-indigo-500/5 blur-[40px] animate-pulse"></div>
            </div>
          </div>

          <!-- Right Column (Points 4-6) -->
          <div class="flex flex-col gap-16 md:gap-40 w-full md:w-auto justify-center">
            <div v-for="(item, i) in ecosystem.slice(3, 6)" :key="item.label" class="group relative flex items-center gap-6">
              <div class="node-main shrink-0 w-16 h-16 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] flex items-center justify-center transition-all group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                <UIcon :name="item.icon" class="w-7 h-7 text-neutral-400 group-hover:text-indigo-400" />
              </div>
              <div class="text-left">
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{{ item.label }}</h3>
                <p class="text-xs text-neutral-500 max-w-[200px] leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.dot-grid-large {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
  background-size: 64px 64px;
  mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
}

.animate-flow {
  stroke-dasharray: 20, 40;
  stroke-dashoffset: 200;
  animation: flow 8s linear infinite;
}

@keyframes flow {
  to { stroke-dashoffset: 0; }
}

.core-grand {
  box-shadow: 
    0 0 80px -20px rgba(79, 70, 229, 0.5),
    inset 0 0 20px rgba(255,255,255,0.05);
}

.animate-spin-slow {
  animation: spin 30s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.tech-orbit-item {
  animation: orbit 40s linear infinite;
  transform-origin: center center;
}

@keyframes orbit {
  from { transform: rotate(0deg) translate(-50%, -50%); }
  to { transform: rotate(360deg) translate(-50%, -50%); }
}

/* Ensure the icon doesn't rotate with the container */
.tech-orbit-item > div {
  animation: counter-orbit 40s linear infinite;
}

@keyframes counter-orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@media (max-width: 768px) {
  .node-main {
    width: 64px;
    height: 64px;
    border-radius: 12px;
  }
}
</style>

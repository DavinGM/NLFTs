<template>
  <section class="sec-hero relative flex flex-col items-center justify-start px-6 overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-[#050506] min-h-[85vh]">
    
    <!-- ─── ELEGANT BACKGROUND (VITE/VERCEL AESTHETIC) ─── -->
    <div class="absolute inset-0 pointer-events-none select-none">
      <!-- Fine Dot Grid -->
      <div class="dot-grid absolute inset-0 opacity-[0.15]"></div>
      
      <!-- Sophisticated Vector Motifs -->
      <div class="vector-overlay absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-20">
          <path d="M-100 200L1540 500" stroke="url(#lineGrad)" stroke-width="0.5" />
          <path d="M1540 100L-100 400" stroke="url(#lineGrad)" stroke-width="0.5" />
          <circle cx="720" cy="300" r="400" stroke="url(#circleGrad)" stroke-width="0.5" />
          <defs>
            <linearGradient id="lineGrad" x1="-100" y1="200" x2="1540" y2="500" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#4F46E5" stop-opacity="0" />
              <stop offset="0.5" stop-color="#4F46E5" stop-opacity="0.5" />
              <stop offset="1" stop-color="#4F46E5" stop-opacity="0" />
            </linearGradient>
            <radialGradient id="circleGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 300) rotate(90) scale(400)">
              <stop offset="0.7" stop-color="#4F46E5" stop-opacity="0" />
              <stop offset="1" stop-color="#4F46E5" stop-opacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <!-- Subtle Ambient Glows -->
      <div class="glow-top absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 blur-[120px]"></div>
    </div>

    <!-- ─── REFINED CONTENT AREA ─── -->
    <div class="relative z-10 container mx-auto flex flex-col items-center">
      
      <!-- Balanced Heading -->
      <div class="text-center max-w-4xl mb-8">
        <h1 class="hero-title text-white">
          <span class="block text-xs md:text-sm font-semibold text-indigo-400/80 uppercase tracking-[.5em] mb-4">Engineering Excellence</span>
          <span class="main-text block leading-[1.1] tracking-[-0.03em]">
            Scaling the <br class="hidden md:block">
            <span class="gradient-text">Digital Standard.</span>
          </span>
        </h1>
      </div>

      <!-- Purposeful Copy -->
      <div class="max-w-xl text-center mb-10">
        <p class="hero-lead text-neutral-400 text-base md:text-lg leading-relaxed font-normal">
          Merancang infrastruktur berkinerja tinggi untuk tim yang menuntut keandalan. 
          Kami menghilangkan kompleksitas dan hutang teknis dengan sistem kode modular
          yang siap produksi.
        </p>
      </div>

      <!-- Precise Actions -->
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <NuxtLink 
          to="#cta" 
          class="btn-primary group relative px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-md transition-all flex items-center gap-2"
        >
          Mulai Bangun Bisnis Anda
          <UIcon name="i-lucide-chevron-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </NuxtLink>
        <NuxtLink 
          to="#output" 
          class="btn-secondary px-8 py-3.5 bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] text-white text-sm font-semibold rounded-md transition-all"
        >
          Hubungi Penyedia Layanan
        </NuxtLink>
      </div>

    </div>

    <!-- ─── TECHNICAL METRICS BAR (ELEGANT) ─── -->
    <div class="absolute bottom-10 inset-x-0 flex justify-center pointer-events-none">
      <div class="flex items-center gap-12 px-8 py-3 border-t border-white/[0.05]">
        <div class="flex flex-col items-center">
          <span class="text-[9px] uppercase tracking-[.2em] text-neutral-600 font-bold mb-1">Arsitektur</span>
          <span class="text-[11px] font-mono text-neutral-400">Monolit yang Dapat Diperluas</span>
        </div>
        <div class="w-px h-6 bg-white/[0.05]"></div>
        <div class="flex flex-col items-center">
          <span class="text-[9px] uppercase tracking-[.2em] text-neutral-600 font-bold mb-1">Performa</span>
          <span class="text-[11px] font-mono text-neutral-400">P99 &lt; 50ms</span>
        </div>
        <div class="w-px h-6 bg-white/[0.05]"></div>
        <div class="flex flex-col items-center">
          <span class="text-[9px] uppercase tracking-[.2em] text-neutral-600 font-bold mb-1">SLA</span>
          <span class="text-[11px] font-mono text-neutral-400">99.99% Uptime</span>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.dot-grid {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(circle at 50% 30%, black, transparent 70%);
}

.main-text {
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  font-weight: 800;
}

.gradient-text {
  background: linear-gradient(to right, #fff 20%, #818cf8 50%, #fff 80%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 12s linear infinite;
}

@keyframes shine {
  to { background-position: 200% center; }
}

.btn-primary {
  box-shadow: 0 4px 15px -5px rgba(79, 70, 229, 0.4);
}

.hero-lead {
  text-wrap: balance;
}

@media (max-width: 768px) {
  .main-text {
    font-size: 3rem;
  }
}
</style>

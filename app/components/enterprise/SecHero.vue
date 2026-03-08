<template>
  <section class="relative flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32 scroll-mt-20">
    <!-- SVG "The Core" geometric composition -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-10">
        <defs>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6366f1"/>
            <stop offset="100%" stop-color="#a855f7"/>
          </linearGradient>
        </defs>
        <!-- Outer ring -->
        <circle cx="450" cy="450" r="420" stroke="url(#strokeGrad)" stroke-width="1" stroke-dasharray="8 16"/>
        <!-- Mid ring -->
        <circle cx="450" cy="450" r="300" stroke="url(#strokeGrad)" stroke-width="1.5"/>
        <!-- Inner ring -->
        <circle cx="450" cy="450" r="160" stroke="url(#strokeGrad)" stroke-width="1" stroke-dasharray="4 8"/>
        <!-- Hexagon grid lines -->
        <line x1="450" y1="30" x2="450" y2="870" stroke="url(#strokeGrad)" stroke-width="0.5" stroke-dasharray="2 12"/>
        <line x1="30" y1="450" x2="870" y2="450" stroke="url(#strokeGrad)" stroke-width="0.5" stroke-dasharray="2 12"/>
        <line x1="150" y1="150" x2="750" y2="750" stroke="url(#strokeGrad)" stroke-width="0.5" stroke-dasharray="2 12"/>
        <line x1="750" y1="150" x2="150" y2="750" stroke="url(#strokeGrad)" stroke-width="0.5" stroke-dasharray="2 12"/>
        <!-- Pentagon structure -->
        <polygon points="450,130 760,330 650,690 250,690 140,330" stroke="url(#strokeGrad)" stroke-width="1" fill="none"/>
        <!-- Corner dots -->
        <circle cx="450" cy="130" r="4" fill="#6366f1"/>
        <circle cx="760" cy="330" r="4" fill="#6366f1"/>
        <circle cx="650" cy="690" r="4" fill="#a855f7"/>
        <circle cx="250" cy="690" r="4" fill="#a855f7"/>
        <circle cx="140" cy="330" r="4" fill="#6366f1"/>
        <!-- Core dot -->
        <circle cx="450" cy="450" r="10" fill="url(#strokeGrad)" opacity="0.8"/>
      </svg>
    </div>

    <!-- Glow blobs -->
    <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"/>
    <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none"/>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-black uppercase tracking-[0.25em] text-indigo-400 mb-10">
        <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"/>
        Enterprise Software House
      </div>
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-8">
        Engineering the<br/>
        <span class="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400">
          Digital Standard.
        </span>
      </h1>
      <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
        High-performance infrastructure and bespoke code architecture.<br/>
        Built for teams that refuse to compromise.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#cta"
          class="group px-8 py-4 rounded-full font-bold text-base text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition-all shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)]"
        >
          Start the Build
          <span class="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a href="#output" class="px-8 py-4 rounded-full font-bold text-base text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white transition-all">
          View Capabilities
        </a>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
      <span class="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
      <div class="w-px h-10 bg-linear-to-b from-neutral-500 to-transparent"/>
    </div>
  </section>
</template>

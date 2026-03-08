<template>
  <section id="cta" class="py-24 md:py-32 px-6 relative overflow-hidden border-t border-white/5 scroll-mt-32">
    <!-- Background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"/>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-purple-600/8 rounded-full blur-[80px] pointer-events-none"/>

    <!-- SVG subtle grid background -->
    <div class="absolute inset-0 pointer-events-none opacity-5">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6366f1" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative z-10 text-center max-w-3xl mx-auto">
      <p class="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-6">Ready?</p>
      <h2 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-none">
        Start the Build.
      </h2>
      <p class="text-xl text-neutral-500 mb-12 leading-relaxed">
        Bring your specs. We'll architect the rest. No agency fluff — just engineering.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://nlfts.dev/discord"
          target="_blank"
          class="group px-10 py-5 rounded-full font-black text-lg text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition-all shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:shadow-[0_0_80px_rgba(99,102,241,0.6)]"
        >
          Open a Channel
          <span class="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="https://nlfts.dev/email"
          class="px-10 py-5 rounded-full font-bold text-base text-neutral-400 border border-white/10 hover:border-white/25 hover:text-white transition-all"
        >
          Send a Brief
        </a>
      </div>
    </div>
  </section>
</template>

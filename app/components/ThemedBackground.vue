<template>
  <div class="fixed inset-0 -z-50 overflow-hidden bg-black pointer-events-none">
    <!-- Base Layer: Noise Texture -->
    <svg class="absolute inset-0 h-full w-full opacity-[0.15] filter grayscale" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>

    <!-- Layer 1: Abstract Glows (Muted Colors) -->
    <div class="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] rounded-full bg-indigo-900/10 blur-[120px]" />
    <div class="absolute top-[20%] -right-[10%] h-[60%] w-[60%] rounded-full bg-slate-900/10 blur-[100px]" />
    <div class="absolute -bottom-[10%] left-[20%] h-[50%] w-[50%] rounded-full bg-emerald-900/5 blur-[120px]" />

    <!-- Layer 2: Subtle Dot Pattern -->
    <div class="absolute inset-0 opacity-[0.2]" :style="{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px' }" />

    <!-- Layer 3: Abstract Diagonal Beams (Varied) -->
    <svg class="absolute inset-0 h-full w-full opacity-[0.25]" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beam-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="transparent" />
          <stop offset="50%" stop-color="rgba(99, 102, 241, 0.2)" />
          <stop offset="100%" stop-color="transparent" />
        </linearGradient>
        <linearGradient id="beam-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="transparent" />
          <stop offset="50%" stop-color="rgba(148, 163, 184, 0.15)" />
          <stop offset="100%" stop-color="transparent" />
        </linearGradient>
      </defs>
      <!-- Several randomized diagonal paths -->
      <path d="M-100,200 L1100,800" stroke="url(#beam-1)" stroke-width="1" fill="none" />
      <path d="M200,-100 L800,1100" stroke="url(#beam-2)" stroke-width="0.5" fill="none" />
      <path d="M-200,600 L1200,900" stroke="url(#beam-1)" stroke-width="2" fill="none" opacity="0.4" />
      <path d="M500,-200 L1500,800" stroke="url(#beam-2)" stroke-width="1" fill="none" />
      
      <!-- Subtle curved elements for variance -->
      <path d="M0,0 Q500,500 1000,0" stroke="rgba(255,255,255,0.03)" stroke-width="1" fill="none" />
      <path d="M0,1000 Q500,500 1000,1000" stroke="rgba(255,255,255,0.03)" stroke-width="1" fill="none" />
    </svg>

    <!-- Layer 4: Interactive/Animated Glow (Optional hint for depth) -->
    <div class="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/60" />
  </div>
</template>

<script setup lang="ts">
// Minimal logic needed for background
</script>

<style scoped>
/* Ensure the background stays behind everything */
div {
  will-change: transform;
}
</style>

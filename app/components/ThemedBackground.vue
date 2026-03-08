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

    <!-- Layer 1: Abstract Glows (Muted) -->
    <div class="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] rounded-full bg-neutral-900/10 blur-[120px]" />
    <div class="absolute top-[20%] -right-[10%] h-[60%] w-[60%] rounded-full bg-neutral-900/10 blur-[100px]" />
    <div class="absolute -bottom-[10%] left-[20%] h-[50%] w-[50%] rounded-full bg-neutral-900/5 blur-[120px]" />

    <!-- Layer 2: Subtle Dot Pattern -->
    <div class="absolute inset-0 opacity-[0.2]" :style="{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px' }" />

    <!-- Layer 4: Simple Fade -->
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

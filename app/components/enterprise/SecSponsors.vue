<script setup lang="ts">
defineProps<{
  sponsors: Array<{ name: string; icon: string }>
}>()
</script>

<template>
  <section class="py-24 px-6 border-t border-white/5">
    <div class="mx-auto max-w-7xl">
      <p class="text-center text-[10px] font-black uppercase tracking-[0.3em] text-neutral-700 mb-10">Backed by</p>
      <div class="flex flex-wrap items-center justify-center gap-10">
        <div
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          class="flex items-center gap-3 opacity-30 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
        >
          <UIcon :name="sponsor.icon" class="w-5 h-5 text-indigo-400"/>
          <span class="text-sm font-bold text-neutral-300 tracking-tight">{{ sponsor.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

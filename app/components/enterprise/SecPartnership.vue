<script setup lang="ts">
defineProps<{
  partnershipPoints: Array<{ icon: string; title: string; body: string }>
}>()
</script>

<template>
  <section id="partnership" class="py-24 md:py-32 px-6 border-t border-white/5 scroll-mt-32">
    <div class="mx-auto max-w-7xl">
      <div class="grid md:grid-cols-2 gap-16 items-start">
        <div class="sticky top-24">
          <p class="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-4">Kemitraan Strategis</p>
          <h2 class="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-6 leading-tight">
            ROI dari<br/>Membangun yang Benar.
          </h2>
          <p class="text-neutral-500 text-lg leading-relaxed">
            Pilih mitra teknis yang tepat bukan biaya — ini adalah investasi yang memberikan ROI terbesar. Berikut adalah alasan mengapa tim memilih NLFTs Company
          </p>
        </div>
        <div class="flex flex-col gap-10">
          <div
            v-for="point in partnershipPoints"
            :key="point.title"
            class="group flex gap-6 pb-10 border-b border-white/5 last:border-0 last:pb-0"
          >
            <div class="shrink-0 w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all">
              <UIcon :name="point.icon" class="w-5 h-5 text-indigo-400"/>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">{{ point.title }}</h3>
              <p class="text-neutral-500 leading-relaxed text-sm">{{ point.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

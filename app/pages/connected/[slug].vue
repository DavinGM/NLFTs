<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// Ambil parameter slug dari URL jika ada (misal: discord, whatsapp)
const target = route.params.slug as string
const countdown = ref(3)

// Mapping redirect link
const redirectMap: Record<string, string> = {
  'discord': 'https://nlfts.dev/connected/discord',
  'whatsapp': 'https://chat.whatsapp.com/EXAMPLE_LINK', // Ganti dengan link asli
  'github': 'https://github.com/nlfts'
}

const targetUrl = computed(() => redirectMap[target] || '/')

onMounted(() => {
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      window.location.href = targetUrl.value
    }
  }, 1000)
})

useSeoMeta({
  title: 'Redirecting... - NLFTs Community',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <div class="fixed inset-0 bg-black z-100 flex flex-col items-center justify-center overflow-hidden">
    <!-- Cyber Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div class="grid-overlay" />
    </div>

    <div class="relative z-10 flex flex-col items-center text-center px-4">
      <!-- Loading Animation -->
      <div class="relative w-32 h-32 mb-12">
        <div class="absolute inset-0 border-4 border-blue-500/20 rounded-full" />
        <div class="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin" />
        <div class="absolute inset-4 border-2 border-indigo-500/20 rounded-full" />
        <div class="absolute inset-4 border-2 border-b-indigo-500 rounded-full animate-spin-reverse" />
        
        <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-3xl font-black text-white tabular-nums">{{ countdown }}</span>
        </div>
      </div>

      <div class="space-y-4">
        <h1 class="text-2xl font-black tracking-[0.3em] text-white uppercase italic">
            SECURE REDIRECTING
        </h1>
        <div class="flex items-center justify-center gap-3">
            <span class="h-px w-8 bg-linear-to-r from-transparent to-blue-500" />
            <p class="text-blue-400 font-bold text-xs uppercase tracking-widest animate-pulse">
                Auto Redirecting to {{ target || 'Community' }}
            </p>
            <span class="h-px w-8 bg-linear-to-l from-transparent to-blue-500" />
        </div>
      </div>

      <!-- Tech data stream decoration -->
      <div class="mt-16 flex flex-col gap-2 opacity-30">
        <div class="text-[10px] font-mono text-blue-500 uppercase tracking-tighter">Initializing secure bridge... DONE</div>
        <div class="text-[10px] font-mono text-blue-500 uppercase tracking-tighter">Routing to {{ targetUrl }}... READY</div>
        <div class="text-[10px] font-mono text-blue-500 uppercase tracking-tighter">Redirecting in {{ countdown }}s</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-spin-reverse {
  animation: spin-reverse 1.5s linear infinite;
}

@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
}

.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>

<script setup lang="ts">
import SecHero from '~/components/enterprise/SecHero.vue'
import SecCapabilities from '~/components/enterprise/SecCapabilities.vue'
import SecEcosystem from '~/components/enterprise/SecEcosystem.vue'
import SecPartnership from '~/components/enterprise/SecPartnership.vue'
import SecCTA from '~/components/enterprise/SecCTA.vue'
import SecSponsors from '~/components/enterprise/SecSponsors.vue'

useSeoMeta({
  title: 'NLFTs Company — Engineering the Digital Standard',
  description: 'Enterprise-grade software architecture, bespoke code, and high-performance infrastructure. Built for teams that demand precision.',
  ogTitle: 'NLFTs Company — Engineering the Digital Standard',
  ogDescription: 'Enterprise software house. Scalability, performance, and design precision.',
  ogImage: '/seo/main.png',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

const sponsors = [
  { name: 'FTs Project', icon: 'i-lucide-boxes' },
  { name: 'Asia Code 2022', icon: 'i-lucide-code-2' },
  { name: 'Grantara Indonesia', icon: 'i-lucide-mountain' },
  { name: 'Ryn Verse', icon: 'i-lucide-layers' }
]

const ecosystem = [
  { label: 'Frontend Mastery', icon: 'i-simple-icons-nuxtdotjs', desc: 'Nuxt, Vue 3, React, Next.js' },
  { label: 'Backend Engineering', icon: 'i-simple-icons-laravel', desc: 'Laravel, Java, Go, Node.js' },
  { label: 'Mobile Excellence', icon: 'i-simple-icons-flutter', desc: 'Flutter, Kotlin, Swift' },
  { label: 'System Architecture', icon: 'i-simple-icons-github', desc: 'CI/CD, GitHub Actions, Docker' },
  { label: 'Build Precision', icon: 'i-simple-icons-vite', desc: 'Vite, Webpack, Turbo' },
  { label: 'Cloud Systems', icon: 'i-lucide-cloud', desc: 'AWS, GCP, Azure, Vercel' }
]

const metrics = [
  { value: '<50ms', label: 'API Response' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '100+', label: 'Components' },
  { value: 'A+', label: 'Perf Score' },
]

const partnershipPoints = [
  { icon: 'i-lucide-trending-up', title: 'Mempercepat Waktu Peluncuran Produk ke Pasar', body: 'Kirim produk siap produksi dalam hitungan minggu, bukan kuartal. Templat arsitektur kami menghilangkan kode berulang dan mempercepat siklus pengembangan Anda.' },
  { icon: 'i-lucide-lock', title: 'Mengurangi Teknik Debt', body: 'Setiap sistem yang kami kirimkan didokumentasikan, diuji, dan dibangun untuk mengembangkan — tidak hanya untuk hari ini, tetapi untuk 5 tahun ke depan.' },
  { icon: 'i-lucide-dollar-sign', title: 'ROI dari Teknik', body: 'Investasi dalam infrastruktur yang mengkomposisi. Pelanggan kami konsisten melaporkan peningkatan produktivitas 3x dalam dua kuartal pertama.' },
]
</script>

<template>
  <div class="bg-[#050505] text-white font-sans min-h-screen overflow-x-hidden selection:bg-indigo-500/30">
    <SecHero />
    <SecCapabilities :metrics="metrics" />
    <SecEcosystem :ecosystem="ecosystem" />
    <SecPartnership :partnershipPoints="partnershipPoints" />
    <SecCTA />
    <SecSponsors :sponsors="sponsors" />
  </div>
</template>

<style scoped>
/* Geist font for premium tech feel */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

div {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
</style>

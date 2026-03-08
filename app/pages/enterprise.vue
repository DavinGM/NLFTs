<script setup lang="ts">
import SectionA from '~/components/enterprise/SectionA.vue'
import SectionB from '~/components/enterprise/SectionB.vue'
import SectionC from '~/components/enterprise/SectionC.vue'
import SectionD from '~/components/enterprise/SectionD.vue'
import SectionE from '~/components/enterprise/SectionE.vue'
import SectionF from '~/components/enterprise/SectionF.vue'

useSeoMeta({
  title: 'NLFTs.inc — Engineering the Digital Standard',
  description: 'Enterprise-grade software architecture, bespoke code, and high-performance infrastructure. Built for teams that demand precision.',
  ogTitle: 'NLFTs.inc — Engineering the Digital Standard',
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
  { label: 'Cloud Infrastructure', icon: 'i-lucide-cloud', desc: 'Auto-scaling, multi-region deployment.' },
  { label: 'Security Hardening', icon: 'i-lucide-shield', desc: 'Zero-trust architecture by default.' },
  { label: 'UI/UX Engineering', icon: 'i-lucide-layers', desc: 'Design systems that scale with products.' },
  { label: 'Backend Systems', icon: 'i-lucide-server', desc: 'High-throughput APIs & data pipelines.' },
  { label: 'Observability', icon: 'i-lucide-activity', desc: 'Full-stack monitoring & tracing.' },
  { label: 'Edge Network', icon: 'i-lucide-globe', desc: 'Sub-50ms global response times.' }
]

const metrics = [
  { value: '<50ms', label: 'API Response' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '100+', label: 'Components' },
  { value: 'A+', label: 'Perf Score' },
]

const partnershipPoints = [
  { icon: 'i-lucide-trending-up', title: 'Faster Time-to-Market', body: 'Ship production-ready products in weeks, not quarters. Our architecture templates eliminate boilerplate and accelerate your build cycle.' },
  { icon: 'i-lucide-lock', title: 'Reduce Technical Debt', body: 'Every system we deliver is documented, tested, and built to evolve — not just for today, but for the next 5 years.' },
  { icon: 'i-lucide-dollar-sign', title: 'Engineering ROI', body: 'Invest in infrastructure that compounds. Our clients consistently report 3x productivity gains within the first two quarters.' },
]
</script>

<template>
  <div class="bg-[#050505] text-white font-sans min-h-screen overflow-x-hidden selection:bg-indigo-500/30">
    <SectionA />
    <SectionB :metrics="metrics" />
    <SectionC :ecosystem="ecosystem" />
    <SectionD :partnershipPoints="partnershipPoints" />
    <SectionE />
    <SectionF :sponsors="sponsors" />
  </div>
</template>

<style scoped>
/* Geist font for premium tech feel */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

div {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
</style>

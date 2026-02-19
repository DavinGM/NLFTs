<script setup lang="ts">
const teams = [
  {
    user: 'Davin Gahisan',
    action: 'Frontend Engginer |',
    target: 'NLFTs Company',
    time: '8m ago',
    type: 'Frontend',
    avatar: 'https://avatars.githubusercontent.com/u/228851591?v=4',
    github: 'https://github.com/DavinGM',
    website: 'https://davingm.com'
  },
  {
    user: 'Fakhri',
    action: 'Backend |',
    target: 'FTs Project',
    time: '15m ago',
    type: 'Backend',
    avatar: 'https://avatars.githubusercontent.com/u/228840381?s=130&v=4',
    github: 'https://github.com/Fakhri-8G',
    website: ''
  },
  {
    user: 'Nairha Az-zara',
    action: 'Frontend Devloper |',
    target: 'NLFTs Company',
    time: '24m ago',
    type: 'Frontend',
    avatar: 'https://avatars.githubusercontent.com/u/204519754?s=130&v=4',
    github: 'https://github.com/nairhacan',
    website: 'https://nairha.vercel.app'
  },
  {
    user: 'Miftah',
    action: 'Linux Enggier |',
    target: 'FTs Project',
    time: '32m ago',
    type: 'Linux',
    avatar: 'https://avatars.githubusercontent.com/u/232498018?s=130&v=4',
    github: 'https://github.com/MiftahAja',
    website: ''
  },
  {
    user: 'Rehan Ramdhan',
    action: 'Quality Assurance |',
    target: 'FTs Project',
    time: '45m ago',
    type: 'deployments',
    avatar: 'https://avatars.githubusercontent.com/u/218329504?v=4',
    github: 'https://github.com/Rehan-Ramadhan',
    website: ''
  },
  {
    user: 'Haitsam Haidar',
    action: 'Linux Enggier |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Linux',
    avatar: 'https://avatars.githubusercontent.com/u/232498781?s=130&v=4',
    github: 'https://github.com/kksam-ctruk',
    website: ''
  },
  {
    user: 'Hanif',
    action: 'Full Stack Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Full Stack',
    avatar: 'https://avatars.githubusercontent.com/u/232500114?s=130&v=4',
    github: 'https://github.com/kaaviangi-d3ath',
    website: ''
  },
  {
    user: 'Nafis',
    action: 'Frontend Engginer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Frontend',
    avatar: 'https://avatars.githubusercontent.com/u/182593937?s=130&v=4',
    github: 'https://github.com/MuhammadNafeezKh',
    website: 'https://tokitanf-porto.vercel.app'
  },
  {
    user: 'Kaka Viangi',
    action: 'Frontend |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Frontend',
    avatar: 'https://avatars.githubusercontent.com/u/228332586?s=130&v=4',
    github: 'https://github.com/kakaviangi',
    website: 'https://destkaa.vercel.app'
  },
  {
    user: 'Marsha Bara',
    action: 'Game Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Game Dev',
    avatar: 'https://avatars.githubusercontent.com/u/228843429?s=96&v=4',
    github: 'https://github.com/Barabr0',
    website: ''
  },
  {
    user: 'Ahamd',
    action: 'Frontend Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Frontend',
    avatar: 'https://avatars.githubusercontent.com/u/225441519?s=96&v=4',
    github: 'https://github.com/Maruu-glitc',
    website: ''
  },
  {
    user: 'Naufal',
    action: 'Full Stack Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Full Stack',
    avatar: 'https://avatars.githubusercontent.com/u/249846662?s=96&v=4',
    github: 'https://github.com/Naufal678',
    website: ''
  },
  {
    user: 'Raka Muhammad Al-Fatir',
    action: 'Full Stack Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Full Stack',
    avatar: 'https://avatars.githubusercontent.com/u/232498504?s=96&v=4',
    github: 'https://github.com/rakamuhammadalfathir-pixel',
    website: ''
  },
  {
    user: 'Reihan',
    action: 'Game Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Game',
    avatar: 'https://avatars.githubusercontent.com/u/202130049?s=96&v=4',
    github: 'https://github.com/Vahllzzzz',
    website: 'https://vahllzzzz.vercel.app'
  },
  {
    user: 'fransiska',
    action: 'Frontend Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Frontend',
    avatar: 'https://avatars.githubusercontent.com/u/201906707?v=4',
    github: 'https://github.com/fransiska-lenggu',
    website: ''
  },
  {
    user: 'Ilman91',
    action: 'Backend Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Backend',
    avatar: 'https://avatars.githubusercontent.com/u/228839961?v=4',
    github: 'https://github.com/Ilman91',
    website: 'https://ilmanwrites.vercel.app'
  },
  {
    user: 'hinotokenzi',
    action: 'Frontend Developer |',
    target: 'FTs Project',
    time: '52m ago',
    type: 'Frontend',
    avatar: 'https://avatars.githubusercontent.com/u/245082232?v=4',
    github: 'https://github.com/cryptdefender',
    website: ''
  }
]

useSeoMeta({
  title: 'Our Teams - NLFTs Community',
  description: 'Kenali para kolaborator hebat di balik NLFTs Community.'
})
</script>

<template>
  <UContainer class="py-24 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-b from-blue-500/10 to-transparent blur-3xl -z-10" />
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10" />
    <div class="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl -z-10" />

    <div class="text-center mb-20">
      <h2 class="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">
        Kolaborator & Kontributor
      </h2>
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
        Meet Our <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Teams</span>
      </h1>
      <p class="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Wadah bagi para inovator yang berdedikasi membangun ekosistem framework masa depan. Kenali orang-orang hebat yang membuat NLFTs tetap hidup dan berkembang.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      <UCard
        v-for="member in teams"
        :key="member.user"
        class="group relative overflow-hidden bg-neutral-900/40 backdrop-blur-xl border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 ring-1 ring-white/5"
        :ui="{ body: { padding: 'p-0' } }"
      >
        <div class="flex flex-col p-6 h-full">
          <div class="flex items-start justify-between mb-6">
            <UAvatar
              :src="member.avatar"
              :alt="member.user"
              size="xl"
              class="ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300"
            />
            <UBadge
              variant="subtle"
              :color="member.type === 'Frontend' ? 'blue' : member.type === 'Backend' ? 'indigo' : 'neutral'"
              class="capitalize px-3 py-1 rounded-full font-medium"
            >
              {{ member.type }}
            </UBadge>
          </div>

          <div class="flex-1">
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
              {{ member.user }}
            </h3>
            <p class="text-neutral-400 text-sm font-medium mb-2">
              {{ member.action }} <span class="text-blue-500/80">{{ member.target }}</span>
            </p>
            <div class="flex items-center gap-2 text-xs text-neutral-500">
              <UIcon name="i-lucide-clock" class="w-3 h-3" />
              <span>Active {{ member.time }}</span>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <UButton
                :to="member.github"
                target="_blank"
                icon="i-simple-icons-github"
                color="neutral"
                variant="ghost"
                class="rounded-full hover:bg-white/5 active:scale-90 transition-all"
                aria-label="GitHub Profile"
              />
              <UButton
                v-if="member.website"
                :to="member.website"
                target="_blank"
                icon="i-lucide-globe"
                color="neutral"
                variant="ghost"
                class="rounded-full hover:bg-white/5 active:scale-90 transition-all"
                aria-label="Personal Website"
              />
            </div>
            <UButton
              variant="link"
              color="primary"
              class="text-xs p-0 group/link"
              label="Lihat Profil"
              trailing-icon="i-lucide-arrow-right"
              :ui="{ trailingIcon: 'group-hover/link:translate-x-1 transition-transform' }"
            />
          </div>
        </div>

        <!-- Hover visual effect -->
        <div class="absolute inset-0 bg-linear-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </UCard>
    </div>

    <!-- Bottom CTA -->
    <div class="mt-24 text-center p-12 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-md">
      <h3 class="text-2xl font-bold text-white mb-4">Ingin Menjadi Bagian Dari Kami?</h3>
      <p class="text-neutral-400 mb-8 max-w-lg mx-auto">Kami selalu terbuka untuk kolaborator baru yang bersemangat dalam membangun teknologi masa depan.</p>
      <UButton
        to="https://nlfts.dev/connected/discord"
        size="xl"
        label="Gabung di Discord"
        class="rounded-full px-10 glow-blue font-bold"
        trailing-icon="i-lucide-message-square"
      />
    </div>
  </UContainer>
</template>

<style scoped>
.glow-blue {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}
.glow-blue:hover {
  box-shadow: 0 0 35px rgba(59, 130, 246, 0.6);
}
</style>

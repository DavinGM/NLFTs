<script setup lang="ts">
interface TeamMember {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  blog: string
  email: string
  socials: Array<{ provider: string, url: string }>
  has_sponsors: boolean
  sponsor_url: string
}

const { data: teams, pending, error } = useLazyFetch<TeamMember[]>('/api/teams')

useSeoMeta({
  title: 'Our Teams - NLFTs Community',
  description: 'Kenali para kolaborator hebat di balik NLFTs Community.'
})

const getProviderIcon = (provider: string) => {
  switch (provider.toLowerCase()) {
    case 'github': return 'i-simple-icons-github'
    case 'twitter': return 'i-simple-icons-x'
    case 'linkedin': return 'i-simple-icons-linkedin'
    case 'website': return 'i-lucide-globe'
    default: return 'i-lucide-link'
  }
}
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

    <!-- Skeleton Loading -->
    <div v-if="pending && !teams" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard v-for="i in 6" :key="i" class="bg-neutral-900/40 border-white/5 overflow-hidden ring-1 ring-white/5" :ui="{ body: 'p-6' }">
        <div class="flex items-start justify-between mb-6">
          <div class="h-24 w-24 rounded-full bg-neutral-800 animate-pulse" />
          <div class="h-6 w-20 rounded-full bg-neutral-800 animate-pulse" />
        </div>
        <div class="space-y-3">
          <div class="h-6 w-3/4 bg-neutral-800 animate-pulse rounded" />
          <div class="h-4 w-1/2 bg-neutral-800 animate-pulse rounded" />
          <div class="h-12 w-full bg-neutral-800 animate-pulse rounded" />
        </div>
      </UCard>
    </div>

    <div v-else-if="error" class="text-center py-20">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
        <UIcon name="i-lucide-alert-circle" class="w-8 h-8 text-red-500" />
      </div>
      <h3 class="text-xl font-bold text-white mb-2">Gagal memuat data tim</h3>
      <p class="text-red-400/80 max-w-sm mx-auto mb-8">Terjadi kesalahan saat mengambil informasi dari GitHub. Silakan muat ulang halaman.</p>
      <UButton color="neutral" variant="solid" label="Coba Lagi" icon="i-lucide-refresh-cw" @click="() => refreshNuxtData()" />
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      <UCard
        v-for="member in teams"
        :key="member.login"
        class="group relative overflow-hidden bg-neutral-900/40 backdrop-blur-xl border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 ring-1 ring-white/5"
        :ui="{ body: 'p-0' }"
      >
        <div class="flex flex-col p-6 h-full">
          <div class="flex items-start justify-between mb-6">
            <NuxtImg
              :src="member.avatar_url"
              :alt="member.name"
              width="96"
              height="96"
              loading="lazy"
              class="h-24 w-24 rounded-full ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300 bg-neutral-800 object-cover"
            />
            <div class="flex flex-col items-end gap-2">
              <UBadge
                variant="subtle"
                color="primary"
                class="capitalize px-3 py-1 rounded-full font-medium"
              >
                Contributor
              </UBadge>
              <UButton
                v-if="member.has_sponsors"
                :to="member.sponsor_url"
                target="_blank"
                size="xs"
                color="primary"
                variant="subtle"
                icon="i-lucide-heart"
                label="Sponsor"
                class="rounded-full font-bold"
              />
            </div>
          </div>

          <div class="flex-1">
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
              {{ member.name }}
            </h3>
            <p class="text-neutral-400 text-sm font-medium mb-4">
              @{{ member.login }}
            </p>
            <p v-if="member.bio" class="text-neutral-500 text-sm line-clamp-2 mb-4 italic leading-relaxed">
              "{{ member.bio }}"
            </p>
          </div>

          <div class="mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UButton
                :to="member.html_url"
                target="_blank"
                icon="i-simple-icons-github"
                color="neutral"
                variant="ghost"
                class="rounded-full hover:bg-white/5 p-2 transition-colors"
                aria-label="GitHub Profile"
              />
              <UButton
                v-if="member.blog"
                :to="member.blog.startsWith('http') ? member.blog : 'https://' + member.blog"
                target="_blank"
                icon="i-lucide-globe"
                color="neutral"
                variant="ghost"
                class="rounded-full hover:bg-white/5 p-2 transition-colors"
                aria-label="Website"
              />
              <UButton
                v-for="social in member.socials"
                :key="social.url"
                :to="social.url"
                target="_blank"
                :icon="getProviderIcon(social.provider)"
                color="neutral"
                variant="ghost"
                class="rounded-full hover:bg-white/5 p-2 transition-colors"
                :aria-label="social.provider"
              />
            </div>
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
        to="https://nlfts.dev/discord"
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

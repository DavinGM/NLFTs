<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()

const navLinks = [
  { label: 'Docs', to: '/getting-started' },
  { label: 'Teams', to: '/Teams' },
  { label: 'Showcase', to: '/Showcase' },
  { label: 'Enterprise', to: '#' },
  { label: 'Connected', to: '/connected' }
]

const signInWithGitHub = async () => {
  if (!process.client) return
  
  // Open centered popup
  const w = 600
  const h = 700
  const left = (window.screen.width / 2) - (w / 2)
  const top = (window.screen.height / 2) - (h / 2)
  
  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: useRuntimeConfig().public.siteUrl + '/confirm',
      skipBrowserRedirect: true
    }
  })

  if (error) {
    console.error('Error signing in:', error.message)
    return
  }

  if (data?.url) {
    window.open(
      data.url, 
      'GitHub Login', 
      `width=${w},height=${h},top=${top},left=${left},scrollbars=yes,status=yes`
    )
  }
}

// Listen for message from popup
if (process.client) {
  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return
    if (event.data === 'github-login-success') {
      // User is logged in, reload to sync state immediately
      window.location.reload()
    }
  })
}

const signOut = async () => {
  const { error } = await client.auth.signOut()
  if (error) console.error('Error signing out:', error.message)
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            N
          </div>
          NLFTs
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-6 md:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <ClientOnly>
          <template v-if="!user">
            <UButton
              variant="ghost"
              color="neutral"
              class="hidden font-semibold md:flex"
              @click="signInWithGitHub"
            >
              Log In
            </UButton>
            <UButton
              class="rounded-full bg-purple-600 px-6 py-2 font-bold text-white hover:bg-purple-700"
              @click="signInWithGitHub"
            >
              Get Started Today
            </UButton>
          </template>
          
          <template v-else>
            <div class="flex items-center gap-3">
              <span class="hidden text-sm font-medium text-neutral-400 lg:block">
                {{ user.user_metadata?.full_name || user.email }}
              </span>
              <UPopover>
              <img
                v-if="user?.user_metadata?.avatar_url"
                :src="user.user_metadata.avatar_url"
                :alt="user.user_metadata.full_name || 'User'"
                class="h-8 w-8 cursor-pointer rounded-full ring-2 ring-white/10 bg-neutral-800 object-cover"
              />
              <div v-else class="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full bg-neutral-800 ring-2 ring-white/10 text-[10px] font-bold text-white uppercase">
                {{ (user?.user_metadata?.full_name || user?.email || 'U').charAt(0) }}
              </div>
                <template #content>
                  <div class="flex min-w-[160px] flex-col gap-1 p-2 border border-white/10 rounded-xl bg-black">
                    <div class="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Account
                    </div>
                    <UButton
                      icon="i-lucide-log-out"
                      variant="ghost"
                      color="neutral"
                      class="justify-start text-red-500 hover:text-red-400 hover:bg-red-500/10"
                      @click="signOut"
                    >
                      Log Out
                    </UButton>
                  </div>
                </template>
              </UPopover>
            </div>
          </template>

          <template #fallback>
            <div class="h-10 w-32 animate-pulse rounded-full bg-white/5" />
          </template>
        </ClientOnly>
        
        <!-- Mobile Menu Button -->
        <ClientOnly>
          <UPopover class="md:hidden">
            <UButton
              icon="i-lucide-menu"
              variant="ghost"
              color="neutral"
              class="md:hidden"
            />
            <template #content>
              <div class="p-4 bg-black border border-white/10 rounded-xl min-w-[200px] flex flex-col gap-2">
                <NuxtLink
                  v-for="link in navLinks"
                  :key="link.label"
                  :to="link.to"
                  class="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg"
                >
                  {{ link.label }}
                </NuxtLink>
              </div>
            </template>
          </UPopover>
        </ClientOnly>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.tracking-tighter {
  letter-spacing: -0.04em;
}
</style>

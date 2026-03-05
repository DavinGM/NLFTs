<script setup lang="ts">
const navLinks = [
  { label: 'Docs', to: '/getting-started' },
  { label: 'Teams', to: '/Teams' },
  { label: 'Showcase', to: '/Showcase' },
  { label: 'Enterprise', to: '#' },
  { label: 'Connected', to: '/connected' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            a
          </div>
          Acme
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
        <UButton
          variant="ghost"
          color="neutral"
          class="hidden font-semibold md:flex"
        >
          Log In
        </UButton>
        <UButton
          class="rounded-full bg-purple-600 px-6 py-2 font-bold text-white hover:bg-purple-700"
        >
          Get Started Today
        </UButton>
        
        <!-- Mobile Menu Button (Placeholder for consistency with Nuxt UI if needed, otherwise hidden in desktop) -->
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
      </div>
    </nav>
  </header>
</template>

<style scoped>
.tracking-tighter {
  letter-spacing: -0.04em;
}
</style>

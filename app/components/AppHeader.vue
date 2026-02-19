<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="header?.to || '/'"
  >
    <UNavigationMenu
      :items="[
        { label: 'Docs', to: '/getting-started', icon: 'i-lucide-book' },
        { label: 'Teams', to: '/Teams', icon: 'i-lucide-users' },
        { label: 'Showcase', to: '/Showcase', icon: 'i-lucide-layout' },
        { label: 'Connected', to: '/connected', icon: 'i-lucide-share-2' }
      ]"
      variant="link"
      class="hidden lg:flex justify-center"
    />

    <template
      v-if="header?.logo?.dark || header?.logo?.light || header?.title"
      #title
    >
      <UColorModeImage
        v-if="header?.logo?.dark || header?.logo?.light"
        :light="header?.logo?.light!"
        :dark="header?.logo?.dark!"
        :alt="header?.logo?.alt"
        class="h-6 w-auto shrink-0"
      />

      <span v-else-if="header?.title">
        {{ header.title }}
      </span>
    </template>

    <template
      v-else
      #left
    >
      <NuxtLink :to="header?.to || '/'">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UNavigationMenu
        :items="[
          { label: 'Docs', to: '/getting-started', icon: 'i-lucide-book' },
          { label: 'Teams', to: '/Teams', icon: 'i-lucide-users' },
          { label: 'Showcase', to: '/Showcase', icon: 'i-lucide-layout' },
          { label: 'Connected', to: '/connected', icon: 'i-lucide-share-2' }
        ]"
        orientation="vertical"
        class="lg:hidden border-b border-white/5 pb-4 mb-4"
      />
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>

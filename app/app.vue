<script setup lang="ts">
const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData(() => queryCollectionNavigation('docs'))
const { data: files } = await useAsyncData(() => queryCollectionSearchSections('docs'))

const { isOpen: isContentSearchModalOpen, toggle } = useSearch()

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      toggle()
    }
  }
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <div class="relative min-h-screen">
    <NuxtLoadingIndicator />
    <ThemedBackground />
    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter v-if="$route.meta.layout !== false" />

    <ClientOnly>
      <LazyUContentSearch
        v-model:open="isContentSearchModalOpen"
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </div>
</template>

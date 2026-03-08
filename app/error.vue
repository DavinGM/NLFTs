<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <ClientOnly>
      <AppHeader />

      <UError :error="error" />

      <AppFooter />

      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
      
      <template #fallback>
        <div class="min-h-screen flex items-center justify-center bg-black">
          <div class="animate-pulse flex flex-col items-center gap-4">
            <div class="h-12 w-48 bg-white/5 rounded-lg" />
            <div class="h-4 w-32 bg-white/5 rounded-lg" />
          </div>
        </div>
      </template>
    </ClientOnly>
  </UApp>
</template>

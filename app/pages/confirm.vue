<script setup lang="ts">
const user = useSupabaseUser()

// Watch for user state and redirect to home once logged in
watch(user, () => {
  if (process.client && user.value) {
    if (window.opener) {
      window.opener.postMessage('github-login-success', window.location.origin)
      window.close()
    } else {
      return navigateTo('/')
    }
  }
}, { immediate: true })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4 text-white">
    <UIcon name="i-lucide-loader-2" class="h-8 w-8 animate-spin text-purple-500" />
    <p class="text-sm font-medium text-neutral-400">
      Mengarahkan Anda kembali...
    </p>
  </div>
</template>

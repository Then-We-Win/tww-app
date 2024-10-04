<script setup>
const settings = inject('settings')
</script>

<template>
  <NuxtLink
    to="/"
    class="ltablet:flex hidden items-center gap-2 lg:flex"
    aria-label="Go to Tairo homepage"
  >
    <!-- <img
      :src="settings.app.logo"
      :alt="settings.app.name"
      class="max-h-[50px] w-auto"
    > -->
  </NuxtLink>
</template>

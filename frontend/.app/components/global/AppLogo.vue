<script setup>
const settings = inject('settings')
</script>

<template>
  <NuxtLink
    to='/'
    class="ltablet:flex hidden items-center gap-2 lg:flex"
    aria-label="Go to Tairo homepage"
  >
    <img
      :src="settings.app.logo"
      :alt="settings.app.name"
      class="max-h-[60px] w-auto "
    >
    <div style="color: white; font-weight: 900; font-size: 1.5rem ">Then We Win</div>
  </NuxtLink>
</template>

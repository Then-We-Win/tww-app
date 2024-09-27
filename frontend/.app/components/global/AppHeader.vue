<script setup>

const settings = inject('settings')
const strings = inject('strings')
</script>

<template>
  <div
    class="ltablet:z-30 border-muted-200 dark:border-muted-800 dark:bg-muted-950 relative flex h-16 w-full items-center justify-between border-b bg-white px-4 lg:z-30"
    :class="settings.menu.mobile.open ? 'z-20' : 'z-30'"
  >
    <div
      class="flex w-1/2 items-center gap-2 sm:w-1/5"
    >
      <!-- Hamburger -->
      <button
        class="ltablet:hidden relative flex size-10 items-center justify-center lg:hidden"
        @click="settings.menu.mobile.open = !settings.menu.mobile.open"
      >
        <div
          class="start-6 top-1/2 block w-4 -translate-x-1/2 -translate-y-1/2"
        >
          <span
            class="text-primary-500 absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out"
            :class="settings.menu.mobile.open ? 'rotate-45' : '-translate-y-2'"
          />
          <span
            class="text-primary-500 absolute block h-0.5 w-5 bg-current transition duration-500 ease-in-out"
            :class="settings.menu.mobile.open ? 'opacity-0' : ''"
          />
          <span
            class="text-primary-500 absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out"
            :class="settings.menu.mobile.open ? '-rotate-45' : 'translate-y-2'"
          />
        </div>
      </button>
      <AppLogo />
    </div>
    <!-- Search -->
    <!-- <div
      class="ltablet:max-w-sm mx-auto hidden max-w-xs grow sm:block lg:max-w-xl"
    >
      <BaseInput
        v-model="settings.search.messages"
        rounded="lg"
        icon="lucide:search"
        :placeholder="strings.app.search.placeholder"
        :classes="{
          input: '!h-11 !ps-11',
          icon: '!h-11 !w-11',
        }"
      />
    </div> -->
    <div class="flex w-1/2 items-center justify-end gap-4 sm:w-1/5">
      <!-- <DemoThemeSwitch /> -->
      <BaseThemeToggle />
      <AppHeaderUser horizontal />
    </div>
  </div>
</template>

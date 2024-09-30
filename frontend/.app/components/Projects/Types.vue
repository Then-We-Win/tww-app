<script setup>
const emit = defineEmits(['project'])
const messageLoading = ref(false)

function handleClick(link) {
  emit('project', link)
}

const settings = inject('settings')
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <NuxtLink
      v-for="link in settings.projects.types"
      :key="link.title"
      class="dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-5 transition-all duration-300 hover:shadow-xl"
      @click="handleClick(link)"
    >
      <div class="text-center">
        <div class="mb-2">
          <BaseIconBox
            color="none"
            class="bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white"
          >
            <Icon :name="link.icon" />
          </BaseIconBox>
        </div>
        <p
          class="text-muted-600 dark:text-muted-200 font-sans text-sm font-medium"
        >
          {{ link.title }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
console.log('Page: index.vue')
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: 'sk-proj-Db1zlswVmOG5WVmjBAhhT3BlbkFJt4FMAXDmgKP1uEtUC3FT', dangerouslyAllowBrowser: true })
const isModalOpen = ref(false)
const apiToken = '8uh6zJGcRIonFcjwVCxmZp15oynli05U'

definePageMeta({
  title: 'Messaging',
  layout: 'empty',
  preview: {
    title: 'Messaging app',
    description: 'For projects and chats',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-messaging-2.png',
    srcDark: '/img/screens/dashboards-messaging-2-dark.png',
    order: 26,
    new: true,
  },
})
const settings = inject('settings')
const projects = inject('projects')
const state = inject('state')
const dialogOpen = ref(false)
console.log('Page: index.vue', projects, state, settings)
</script>

<template>
  <div class="text-muted-800 h-screen antialiased">
    <AppHeader />
    <!-- Wrapper -->
    <div
      v-if="state.profileEdit === true"
      class="relative z-20 h-[calc(100dvh_-_64px)] w-full flex-row overflow-x-hidden"
    >
      <SettingsNav />
    </div>
    <div
      v-else
      class="relative z-20 flex h-[calc(100dvh_-_64px)] w-full flex-row overflow-x-hidden"
    >
      <ProjectsSidebar />
      <ProjectsChat />
      <ProjectsDocument />
    </div>
    <ProjectsDialogNew />
  </div>
</template>

<script setup>
const state = inject('state')
const platform = inject('platform')
const strings = inject('strings')
function closeDialog() {
  state.value.modals.newProject = false
}
async function handleCreateProject(projectSettings) {
  console.log('Create project')
  closeDialog()
  const newItem = await platform.create('projects', {
    id: '',
    name: projectSettings?.template?.title || 'New Project',
    status: '',
    sort: 0,
    settings: {
      template: projectSettings,
    },
    messages: [],
    history: {},
    content: '',
  })
}
</script>

<template>
  <TairoModal
    :open="state.modals.newProject"
    size="2xl"
    @close="closeDialog"
  >
    <template #header>
      <!-- Modal header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <div>
        <BaseHeading
          as="h2"
          size="2xl"
          weight="medium"
        >
        {{ strings.projects.new.dialog.title }}
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-200 mb-3">
          {{ strings.projects.new.dialog.subtitle }}
                </BaseParagraph>
      </div>
        <BaseButtonClose @click="closeDialog" />
      </div>
    </template>

    <!-- Modal body -->
    <div class="px-4 md:px-6">
      <ProjectsTypes rounded="lg" @project="handleCreateProject" />
    </div>

    <template #footer>
      <!-- Modal footer -->
      <div class="p-4 md:p-6" />
    </template>
  </TairoModal>
</template>

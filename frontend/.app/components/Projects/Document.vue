<script setup>
// import TipTapEditor from './TipTapEditor.vue'

const state = inject('state')
const projects = inject('projects')
const platform = inject('platform')
const loading = ref(false)
const selectedProject = inject('selectedProject')
const documentHistory = ref([])

function handleInput(input) {
  console.log('Updating field', this.selectedProject[input])
  console.log('selectedProject', selectedProject.value)
  console.log('projects', projects)
}

function handleSave() {
  console.log('Saving project', this.selectedProject);
  console.log('Project name', this.selectedProject.name);
  console.log('Project contents', this.selectedProject.content);

  const selectedProjectId = this.selectedProject.id;
  const project = projects.value.find(p => p.id === selectedProjectId);

  if (project) {
    console.log('Selected Project:', project);
    
    // Update the platform with the selected project
    platform.update('projects', selectedProjectId, project);
    console.log('Project updated successfully');
  } else {
    console.log('Project not found');
  }
}

</script>

<template>
  <div
    class="dark:bg-muted-950 hidden w-80 shrink-0 basis-1/3 flex-col bg-white py-4 pe-8 ps-4 lg:flex"
  >
    <div class="relative flex w-full flex-col">
      <!-- Loader -->
      <ProjectsDocumentLoading v-if="loading"/>
      <!-- Component -->
      <div v-if="selectedProject">
        <div>
          <div class="flex w-full items-center justify-end gap-2 mb-3">
              <!-- <BaseButtonIcon
                rounded="full"
                size="sm"
                data-nui-tooltip-position="left"
                data-nui-tooltip="Delete project"
                @click=""
              >
                <Icon
                  name="ph:trash-duotone"
                  class="size-5"
                />
              </BaseButtonIcon> -->
              <BaseButtonIcon
                rounded="full"
                size="sm"
                data-nui-tooltip-position="left"
                data-nui-tooltip="Save project"
                @click="handleSave()"
              >
                <Icon
                  name="ph:floppy-disk-back-duotone"
                  class="size-5"
                />
              </BaseButtonIcon>
            </div>
          Title
          <BaseInput
            v-model.trim="selectedProject.name"
            rounded="sm"
            :classes="{
              input: 'pe-10',
            }"
            placeholder="Write a message..."
            @update:model-value="handleInput('name')"
          />
        </div>
        <ProjectsDocumentHistory class="pt-3"/>
        <!-- Editor -->
        <ProjectsDocumentEditor class="pt-3"/>
      </div>
    </div>
  </div>
</template>

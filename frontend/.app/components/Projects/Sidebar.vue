<script setup>
import { VueDraggableNext } from 'vue-draggable-next'
import { ref, computed, inject, onMounted } from 'vue'
import { createItem, readItems, updateItem, deleteItem } from '@directus/sdk'

const mobileOpen = ref(false)
const projects = inject('projects')
const folders = inject('folders')
const state = inject('state')
const isModalOpen = ref(false)
const modalCase = ref('')
const modalText = ref('')
const modalId = ref(null)
const client = useNuxtApp().$client

const onEnd = async (event) => {
  console.log('What:', event.item.id)
  console.log('From:', event.from.id)
  console.log('To:', event.to.id)
  const result = await client.request(updateItem('projects', event.item.id, { folder: event.to.id }))
  // TODO: Remove once the websocket subscriptions are restored
  const index = projects.value.findIndex(obj => obj.id === event.item.id)
  // const foo = setTimeout(() => { projects.value[index].folder = event.to.id }, 1000)
  console.log(result, index)
}

function handleFolderAction(action) {
  console.log(action, modalText.value, modalId.value)
  isModalOpen.value = false
  if (action === 'newFolder') {
    client.request(createItem('folders', { title: modalText.value }))
  } else if (action === 'removeFolder') {
    client.request(deleteItem('folders', modalId.value))
  } else if (action === 'renameFolder') {
    client.request(updateItem('folders', modalId.value, { title: modalText.value }))
  }
}

console.log('First project:', projects.value[0].name)

const filterProjectsBySelectedBrand = computed(() =>
  projects.value.filter((project) => project.brand.id === state.value.selectedBrand)
)

const filterProjectsById = (folderId) => {
  return computed(() => projects.value.filter((project) =>
    project.folder && project.folder.id === folderId
  ))
}

function closeModal() {
  isModalOpen.value = false
}

function openModal(action, id) {
  modalText.value = ''
  modalCase.value = action
  modalId.value = id
  isModalOpen.value = true
}

const filterProjectsWithNoFolder = computed(() =>
  projects.value.filter(project => !project.folder)
)

onMounted(() => {
  const elements = document.querySelectorAll('.nui-accordion-detail')

  elements.forEach((element) => {
    element.addEventListener('dragover', function (event) {
      event.preventDefault()
    })

    element.addEventListener('dragenter', function () {
      element.setAttribute('open', '')
    })

    element.addEventListener('dragleave', function () {
      element.removeAttribute('open')
    })
  })
})
</script>

<template>
  <!-- Projects sidebar-->
  <div
    class="ltablet:static ltablet:py-4 dark:bg-muted-900 ltablet:dark:bg-muted-950 lg:dark:bg-muted-950 fixed start-0 top-0 z-30 flex h-full w-72 shrink-0 flex-col bg-white ps-4 transition-transform duration-300 lg:static lg:py-4"
    :class="
      state.menu.mobile.open
        ? 'translate-x-0'
        : '-translate-x-full ltablet:translate-x-0 lg:translate-x-0'
    "
  >
    <!-- Mobile header -->
    <div
      class="ltablet:hidden flex h-16 items-center justify-between pe-4 lg:hidden"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
        aria-label="Go to Tairo homepage"
      >
        <TairoLogo class="text-muted-800 h-9 dark:text-white" />
        <TairoLogoText class="text-muted-800 h-3 dark:text-white" />
      </NuxtLink>
      <BaseButtonClose
        color="muted"
        rounded="lg"
        @click="state.menu.mobile.open = false"
      />
    </div>
    <div class="ltablet:pe-0 flex h-full flex-col pe-2 lg:pe-0">
      <!--New project -->
      <div class="mb-5 mt-1 flex h-20 flex-col items-center justify-center gap-2 pe-2">
        <ProjectsButtonNew @click="state.modals.newProject=true" />
        <ProjectsButtonNewFolder @click="openModal('newFolder')" />
      </div>

      <!-- Projects list -->
      <div
        class="nui-slimscroll flex h-[calc(100dvh_-_160px)] flex-col space-y-1 overflow-y-auto pe-2"
      >
        <!-- Folders -->
        <BaseAccordion
          :items="folders"
          action="chevron"
          class="mb-4"
        >
          <template #accordion-item-content="{ item }">

            <!-- Folder items -->
            <draggable
              :id="item.id"
              v-model="filterProjectsById(item.id).value"
              :group="{ name: 'projects', pull: true, put: true }"
              item-key="id"
              @end="onEnd"
            >
              <template #item="{ element, index }">
                <button
                  :id="element.id"
                  class="flex w-full items-center gap-2 rounded-xl p-2 transition-colors duration-200 ease-in-out"
                  :class="
                    state.projects.selected === element.id
                      ? 'bg-primary-500/10'
                      : 'hover:bg-muted-100 dark:hover:bg-muted-900'
                  "
                  @click.prevent="state.projects.selected = element.id"
                >
                  <BaseText
                    size="sm"
                    style="margin: 10px"
                    :class="
                      state.projects.selected === element.id
                        ? 'text-primary-500'
                        : 'text-muted-500 dark:text-muted-400'
                    "
                  >
                    {{ element.name }}
                  </BaseText>
                  <span
                    class="bg-primary-500 me-3 ms-auto block size-2 rounded-full transition-opacity duration-300"
                    :class="
                      state.projects.selected === element.id
                        ? 'opacity-100'
                        : 'opacity-0'
                    "
                  />
                </button>
              </template>
            </draggable>

            <div v-if="filterProjectsById(item.id).value.length === 0">
              This folder is empty
            </div>

            <!-- Edit buttons -->
            <div class="flex w-full items-center justify-start gap-1">
              <BaseButtonIcon
                rounded="full"
                size="sm"
                class="mt-3"
                data-nui-tooltip-position="right"
                data-nui-tooltip="Delete folder"
                @click="openModal('removeFolder', item.id)"
              >
                <Icon
                  name="ph:trash-duotone"
                  class="size-5"
                />
              </BaseButtonIcon>
              <BaseButtonIcon
                rounded="full"
                size="sm"
                class="mt-3"
                data-nui-tooltip-position="right"
                data-nui-tooltip="Rename folder"
                @click="openModal('renameFolder', item.id)"
              >
                <Icon
                  name="ph:pencil-line-duotone"
                  class="size-5"
                />
              </BaseButtonIcon>
            </div>
          </template>
        </BaseAccordion>

        <!-- Folderless -->
        <draggable
          v-model="filterProjectsWithNoFolder"
          :group="{ name: 'projects', pull: true, put: true }"
          item-key="id"
          @end="onEnd($event, 'folderless')"
        >
          <template #item="{ element }">
            <button
              class="flex w-full items-center gap-2 rounded-xl p-2 transition-colors duration-200 ease-in-out"
              :class="
                state.projects.selected === element.id
                  ? 'bg-primary-500/10'
                  : 'hover:bg-muted-100 dark:hover:bg-muted-900'
              "
              @click.prevent="state.projects.selected = element.id"
            >
              <BaseText
                size="sm"
                style="margin: 10px"
                :class="
                  state.projects.selected === element.id
                    ? 'text-primary-500'
                    : 'text-muted-500 dark:text-muted-400'
                "
              >
                {{ element.name }}
              </BaseText>
              <span
                class="bg-primary-500 me-3 ms-auto block size-2 rounded-full transition-opacity duration-300"
                :class="
                  state.projects.selected === element.id
                    ? 'opacity-100'
                    : 'opacity-0'
                "
              />
            </button>
          </template>
        </draggable>
      </div>
    </div>

    <!-- Edit folders -->
    <TairoModal
      :open="isModalOpen"
      size="sm"
      @close="closeModal"
    >
      <template #header>
        <!-- Header -->
        <div class="flex w-full items-center justify-between p-4 md:p-6">
          <h3 v-if="modalCase === 'newFolder'" class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
            Add new folder
          </h3>
          <h3 v-else-if="modalCase === 'removeFolder'" class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
            Delete folder
          </h3>
          <h3 v-else-if="modalCase === 'renameFolder'" class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
            Rename folder
          </h3>
        </div>
      </template>

      <!-- Body -->
      <div class="p-4 md:p-6">
        <div class="mx-auto w-full max-w-xs">
          <div v-if="modalCase === 'newFolder'">
            <BaseInput
              v-model="modalText"
              rounded="md"
              placeholder="Folder name"
            />
          </div>
          <div v-else-if="modalCase === 'removeFolder'" class="flex flex-col items-center justify-center">
            <Icon name="ph:warning-duotone" class="text-danger-500 block size-12 mb-3" />
            <span>Are you sure you want to delete this?</span>
          </div>
          <div v-if="modalCase === 'renameFolder'">
            <BaseInput
              v-model="modalText"
              rounded="md"
              placeholder="Folder name"
            />
          </div>
        </div>
      </div>

      <template #footer>
        <!-- Footer -->
        <div class="p-4 md:p-6">
          <div v-if="modalCase !== 'removeFolder'" class="flex gap-x-2">
            <BaseButton @click="closeModal">
              Cancel
            </BaseButton>

            <BaseButton
              color="primary"
              variant="solid"
              @click="handleFolderAction(modalCase)"
            >
              Accept
            </BaseButton>
          </div>
          <div v-else class="flex gap-x-2">
            <BaseButton @click="closeModal">
              No
            </BaseButton>

            <BaseButton
              color="primary"
              variant="solid"
              @click="handleFolderAction(modalCase)"
            >
              Yes
            </BaseButton>
          </div>
        </div>
      </template>
    </TairoModal>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const settings = inject('settings')
const user = inject('user')
const userValue = user.value
console.log('AVATAR', user.value.avatar.filename_disk)
const isInstruction = computed(() => {
  return props.item.text.includes(settings.projects.isInstruction)
})
</script>

<template>
  <div>
    <div class="shrink-0">
      <BaseAvatar
        :src="settings.app.api.assets + userValue.avatar.filename_disk"
        size="xs"
      />
    </div>
    <div class="flex max-w-md flex-col">
      <div
        class="text-muted-800 dark:text-muted-200 rounded-xl p-4 bg-primary-500/20 rounded-se-none"
      >
        <p class="font-sans text-sm">
          {{ item.text }}
        </p>
      </div>
      <!-- <div
        class="text-muted-400 mt-1 font-sans text-xs"
      >
        {{ item.time }}
      </div> -->
      <div
        v-if="item.attachments.length > 0"
        class="mt-2 space-y-2"
      >
        <template
          v-for="(attachment, idx) in item.attachments"
          :key="idx"
        >
          <div
            v-if="attachment.type === 'image'"
            class="dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2 ms-auto"
          >
            <img
              :src="attachment.image"
              :alt="attachment.text"
              class="rounded-xl"
            >
          </div>
          <NuxtLink
            v-else-if="attachment.type === 'link'"
            :to="attachment.url"
            class="dark:bg-muted-950 block max-w-xs rounded-2xl bg-white p-2 ms-auto"
          >
            <img
              :src="attachment.image"
              :alt="attachment.text"
              class="rounded-xl"
            >
            <div class="px-1 py-2">
              <p
                class="text-muted-800 dark:text-muted-100 font-sans"
              >
                {{
                  attachment.url?.replace(/(^\w+:|^)\/\//, '')
                }}
              </p>
              <p class="text-muted-400 font-sans text-xs">
                {{ attachment.text }}
              </p>
            </div>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

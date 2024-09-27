<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const settings = inject('settings')
const user = inject('user')

const ai = computed(() => {
  let obj = props.item.text
  try {
    obj = JSON.parse(obj)
  } catch (e) {
    // Supress error
  }
  return obj
})
</script>

<template>
  <div>
    <div class="shrink-0">
      <BaseAvatar
        :src="settings.app.icon"
        size="xs"
      />
    </div>
    <div class="flex max-w-md flex-col">
      <div
        class="text-muted-800 dark:text-muted-200 rounded-xl p-4 bg-muted-200 dark:bg-muted-950 rounded-ss-none"
      >
      <p v-if="ai.response" class="font-sans text-sm">
        {{ ai.response }}
        <BaseButtonIcon size="sm" rounded="lg" data-nui-tooltip-position="right" data-nui-tooltip="Intellecto made a revision">
            <Icon name="ph:pencil-duotone" class="size-5" />
        </BaseButtonIcon>
        </p>
        <p v-else class="font-sans text-sm">
          {{ item.text }}
        </p>
      </div>
        <!-- <BaseButtonGroup>
          <BaseButtonIcon size="sm" rounded="lg" data-nui-tooltip-position="right" data-nui-tooltip="I love this!">
            <Icon name="ph:thumbs-up" class="size-5" />
          </BaseButtonIcon>

          <BaseButtonIcon size="sm" data-nui-tooltip-position="right" data-nui-tooltip="I don't like this!">
            <Icon name="ph:thumbs-down" class="size-5" />
          </BaseButtonIcon>

          <BaseButtonIcon size="sm" data-nui-tooltip-position="right" data-nui-tooltip="Settings">
            <Icon name="ph:gear-six-duotone" class="size-5" />
          </BaseButtonIcon>

          <BaseButtonIcon size="sm" rounded="lg" data-nui-tooltip-position="right" data-nui-tooltip="This is perfect!">
            <Icon name="ph:heart-duotone" class="size-5" />
          </BaseButtonIcon>
        </BaseButtonGroup> -->
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
            class="dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2"
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
            class="dark:bg-muted-950 block max-w-xs rounded-2xl bg-white p-2"
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

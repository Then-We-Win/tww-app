<script setup>
const emit = defineEmits(['click'])
const strings = inject('strings')
</script>

<template>
  <BaseButton
    rounded="full"
    color="primary"
    variant="outline"
    class="w-full"
    @click="emit('click')"
  >
    <Icon
      v-if="strings.projects.newFolder.button.icon"
      :name="strings.projects.newFolder.button.icon"
      class="size-4"
    />
    <span>{{ strings.projects.newFolder.button.text }}</span>
  </BaseButton>
</template>

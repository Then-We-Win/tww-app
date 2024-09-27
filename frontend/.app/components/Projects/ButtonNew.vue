<script setup>
const emit = defineEmits(['click'])
const strings = inject('strings')
</script>

<template>
  <BaseButton
    rounded="full"
    color="primary"
    class="w-full"
    @click="emit('click')"
  >
    <Icon v-if="strings.projects.new.button.icon" :name="strings.projects.new.button.icon" class="size-4" />
    <span>{{ strings.projects.new.button.text }}</span>
  </BaseButton>
</template>

<script setup>
const selectedProject = inject('selectedProject')
</script>

<template>
  <div>
    Contents
    <BaseTextarea
      v-model.trim="selectedProject.content"
      autogrow
      rounded="sm"
      :classes="{
        input: 'pe-10',
      }"
      placeholder="Write a message..."
      @update:model-value="selectedProject.content"
    />
  </div>
</template>

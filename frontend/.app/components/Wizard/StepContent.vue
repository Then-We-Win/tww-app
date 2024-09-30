<script setup>
const props = defineProps(['formContents'])
</script>

<template>
  <div v-for="item in formContents" :key="item.question">
    <p class="text-muted-800 dark:text-muted-300">
      {{ item.question }}
    </p>
    <BaseInput
      v-if="item.fieldType === 'text'"
      rounded="md"
      placeholder="Type your answer"
      class="w-100 mb-5 mt-1"
    />
    <BaseTextarea
      v-if="item.fieldType === 'textarea'"
      rounded="md"
      placeholder="Write a message..."
      color-focus
      class="w-100 mb-5 mt-1"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const item = ref(props.item)
</script>

<template>
<div>
  <div
    class="absolute inset-0 flex items-center"
    aria-hidden="true"
  >
    <div
      class="border-muted-300/50 dark:border-muted-800 w-full border-t"
    />
  </div>
  <div class="relative flex justify-center">
    <span
      class="bg-muted-100 dark:bg-muted-900 text-muted-400 px-3 font-sans text-xs uppercase"
    >
      {{ item.text }}
    </span>
  </div>
</div>
</template>

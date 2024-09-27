<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <ProjectsChatMessageAI :item="item" v-if="item.type === 'received'"/>
    <ProjectsChatMessageHuman :item="item" v-else />
  </div>
</template>

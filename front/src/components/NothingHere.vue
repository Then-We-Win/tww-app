<template>
  <q-page class="column justify-center">
    <div class="text-center">
      <img class="w-150" :src="image || `../statics/weed.png`" />
      <div class="text-h5 q-py-sm text-center">{{ text || $t('nothingHere') }}</div>
    </div>
    
  </q-page>
</template>

<script>
export default {
  name: "NothingHere",
  props: ["text", "image"],
};
</script>

<style scoped>
.w-150{
  width: 9.375rem;
}
</style>
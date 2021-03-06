<template>
  <q-page class="column justify-center">
    <div class="text-center col-4">
      <img class="w-150" :src="image || `../statics/weed.png`" />
    </div>
    <div class="text-h5 q-py-sm text-center">{{ text || $t('nothingHere') }}</div>
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
<template>
  <q-page class="column justify-center">
    <div class="text-center ">
      <img style="width: 150px" :src="image || $t('defaultImageForNothingHereCmp')" />
    </div>
    <div class="text-h5 q-py-sm text-center">{{ text || $t('defaultTextForNothingHereCmp') }}</div>
  </q-page>
</template>

<script>
export default {
  name: "NothingHere",
  props: ["text", "image"],
};
</script>

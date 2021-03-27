<template>
  <div class="q-ml-xl q-pl-lg q-pr-sm">
    <div class="inline-block ">
      <div class="text-h4 text-weight-light q-mb-sm">
        {{ title }}
      </div>
      <div class="text-grey q-ma-none">
        <slot name="description"></slot>
      </div>
    </div>
    <div
      @click="$router.replace('/all-campaign')"
      class="inline-block float-right cursor-pointer q-pb-md q-mr-xl"
    >
      View all
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="row q-ml-xl q-mb-md q-px-lg justify-between items-center">
    <div class="col-10">
      <div class="text-h4 text-weight-light q-mb-sm">
        {{ title }}
      </div>
      <div class="text-grey q-ma-none">
        <slot name="description"></slot>
      </div>
    </div>
    <div
      @click="$router.replace('/campaigns')"
      class="cursor-pointer q-px-md col-2 text-right"
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

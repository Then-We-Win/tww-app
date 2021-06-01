<template>
  <div class="row q-mb-md q-px-sm justify-between items-center">
    <div class="col-9">
      <div
        :class="
          $q.screen.gt.md
            ? 'text-h4 text-weight-light q-mb-sm q-px-xs'
            : 'text-h6 text-weight-light q-mb-sm q-px-xs'
        "
      >
        {{ title }}
      </div>
      <div class="text-grey q-ma-none">
        <slot name="description"></slot>
      </div>
    </div>
    <div
      @click="$router.replace('/campaigns')"
      :class="
        $q.screen.gt.md
          ? 'cursor-pointer q-px-md col-3 text-right'
          : 'cursor-pointer q-py-sm q-pr-md col-3 bg-grey-4 text-center text-caption '
      "
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

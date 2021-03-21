<template>
  <div class="q-py-md">
    <q-input
      standout="big-teal"
      v-model="comment_box"
      outlined
      clearable
      type="textarea"
      label="Comment"
    />
    <div class="row q-pt-sm justify-end">
      <q-btn no-caps class="item-end" color="grey-3" text-color="grey-6" outline label="Submit Comment" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment_box: '',
    }
  }

}
</script>

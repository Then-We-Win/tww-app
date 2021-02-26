<template>
  <div class="q-py-xl">
    <div class="row justify-between">
      <div>
        <q-btn
          no-caps
          unelevated
          color="grey"
          icon="keyboard_arrow_left"
          label="Back"
          @click="$router.go(-1)"
        />
      </div>
      <div class="q-gutter-md row justify-end">
        <q-btn
          no-caps
          outline
          color="grey"
          icon="add_circle"
          label="Create Post"
        />
        <q-btn
          no-caps
          unelevated
          color="grey"
          label="Publish"
        />
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'campaign_question',

}
</script>

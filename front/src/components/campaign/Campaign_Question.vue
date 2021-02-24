<template>
  <div class="q-py-xl">
    <div class="row">
      <div class="col-3 col-md-8">
        <q-btn
          no-caps
          flat
          color="grey"
          icon="keyboard_arrow_left"
          label="Back"
          @click="$router.go(-1)"
        />
      </div>
      <div class="col-9 col-md-4">
        <div class="q-gutter-md">
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

  </div>
</template>

<script>

export default {
  name: 'campaign_question',

}
</script>

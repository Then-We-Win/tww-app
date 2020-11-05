<template>
  <q-card class="my-card" style="max-width: 200px">
    <img :src="object.image">
    <q-card-section>
      <div class="text-h6">{{object.name}}</div>
      <q-rating size="24px" v-model="object.rating" :max="5" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ['object'],
  mounted () {
  }
}
</script>

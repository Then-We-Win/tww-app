<template>
  <q-card class="my-card" style="max-width: 300px; height: 300px">
    <img v-if="object.image" :src="object.image.src" style="max-height:150px;">
    <q-card-section>
      <div class="text-h6">{{object.title}}</div>
      <div>{{object.vendor}}</div>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
        <q-btn flat round color="primary" icon="info" />
      </q-card-actions>
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

<style scoped lang="stylus">
  .my-card
    margin 10px
</style>

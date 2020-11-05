<template>
  <q-card class="my-card" style="max-width: 300px; height: 300px">
    <img v-if="object.image" :src="object.image.src" style="max-height:150px;">
    <q-card-section>
      <div class="text-h6">{{object.title}}</div>
      <div>{{object.vendor}}</div>
      <div>
        Variants: {{object.variants.length}}
        (Stock:
        <span v-for="(variant, index) in object.variants" :key="variant.id">
          {{variant.inventory_quantity}}<span v-show="index + 1 < object.variants.length">,</span>
        </span>)
      </div>
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

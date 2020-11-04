<template>
<div class="fit">
  <campaign-preview :campaigns="campaigns" v-model="showModal" />
  <q-img class="img-size cursor-pointer" :src='campaigns.img' spinner-color='primary' @click="openModal()">
    <div class='absolute-bottom row justify-between'>
      <div>{{ campaigns.articles + ' Articles'}}</div>
      <div>{{ campaigns.supporters.length + ' Supporters'}}</div>
    </div>
  </q-img>
  <div class="text-subtitle2 q-pt-md">{{campaigns.title}}</div>
</div>
</template>

<script>
import { reactorMixin } from '../../common'

export default {
  props: [ 'campaigns', 'volunteer' ],
  mixins: [reactorMixin],
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang='stylus' scoped>
.img-size
  height 75%
  max-height 200px
  max-width 100%

.q-img__content > div
  // background rgba(0,0,0,0.0)
  padding-bottom 5px
  padding-top 5px
  padding-left 10px
  padding-right 10px

// .q-img {
//   -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
//   filter: grayscale(100%);
// }
// .q-img:hover {
//   filter: none;
//   -webkit-filter: none;
// }
</style>

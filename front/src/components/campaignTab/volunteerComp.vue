<template>
<div>
  <avatar :avatar='info.avatar' :name="info.user" class="row justify-center" :info="info" :clickable='true'/>
  <div class="column q-col-gutter-sm">
    <div>
      <div class="text-subtitle2 text-center">{{ info.user }}</div>
      <div class="text-grey-6 text-center">{{ info.posts + ' ' + $t('app.common.posts') }}</div>
      <div class="text-grey-6 text-center">{{ info.followers + ' ' + $t('app.common.followers') }}</div>
    </div>
  </div>
</div>
</template>

<script>
import { reactorMixin } from '../../common'

export default {
  props: [ 'info' ],
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
</style>

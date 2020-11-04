<template>
  <div class='row q-col-gutter-xl items-baseline'>
    <div class='col-8 column q-gutter-y-lg'>
      <about/>
      <comment-list/>
    </div>
    <organizers class='col' :id="id" :campaigns='campaigns'/>
  </div>
</template>

<script>
import campaigns from '../campaignTab/infoDummy'
import about from './about'
import organizers from './organizers'
export default {
  data () {
    return {
      campaigns: campaigns,
      id: this.$route.params.id
    }
  },
  components: {
    about, organizers
  }
}
</script>

<style lang='stylus' scoped>
.textPad
  padding-top 7px
</style>

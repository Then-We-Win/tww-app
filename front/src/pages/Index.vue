<template>
  <q-page :class="$q.screen.lt.sm ? 'q-px-none' : 'page-padding'">
    <div>
      <tabs :tabs="tabItems"/>
    </div>
  </q-page>
</template>

<script>
export default {
  props: [ 'tab' ],
  data () {
    return {
      tabItems: [
        { name: 'wall', label: this.$t('app.tabs.wall'), component: 'wall-tab' },
        { name: 'campaign', label: this.$t('app.tabs.campaign'), component: 'campaign' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.page-padding
  padding-left 60px
  padding-right 60px

</style>

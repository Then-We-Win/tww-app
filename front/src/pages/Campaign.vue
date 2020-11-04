<template>
  <div>
    <q-img :ratio='16/9' :src='campaigns[id - 1].img' />
    <q-page :class="$q.screen.lt.sm ? 'q-px-none' : 'page-padding'" class='q-pt-lg'>
      <div class='row q-pb-lg'>
        <q-btn flat icon='keyboard_arrow_left' :label="this.$t('app.buttons.back')" size='sm' to='/' />
        <q-space />
        <div class='row q-gutter-sm'>
          <q-btn color='grey-9' :label="this.$t('app.buttons.support')" size='sm' />
          <q-btn flat color='grey-6' icon='mdi-facebook' size='sm' />
          <q-btn flat color='grey-6' icon='mdi-twitter' size='sm' />
          <q-btn flat color='grey-6' icon='mdi-linkedin' size='sm' />
          <q-btn flat color='grey-6' icon='more_vert' size='sm' />
        </div>
      </div>
      <tabs class='col-8' :tabs='tabItems' />
    </q-page>
  </div>
</template>

<script>
import campaigns from '../components/campaignTab/infoDummy'
export default {
  props: ['id'],
  data () {
    return {
      campaigns: campaigns,
      tabItems: [
        { name: 'about', label: this.$t('app.tabs.about'), component: 'about-campaign' },
        { name: 'to-do', label: this.$t('app.tabs.todo'), component: '' },
        { name: 'news', label: this.$t('app.tabs.news'), component: 'wall-list' },
        { name: 'community', label: this.$t('app.tabs.community'), component: 'wall-list' }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.q-img
  height 350px

.page-padding
  padding-left 60px
  padding-right 60px
</style>

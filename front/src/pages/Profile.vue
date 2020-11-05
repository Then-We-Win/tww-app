<template>
  <div>
    <q-img :ratio='16/9' :src='profileImg' />
    <q-page class='page-pad row q-gutter-x-xl'>

      <div class='move-up column col-3'>
        <avatar :avatar="volunteer[id - 1].avatar" :name="volunteer[id - 1].user"/>
        <div class='text-h5 q-pb-sm'>{{ volunteer[id - 1].user }}</div>
        <div class='text-grey-6'>
          <div class='q-pb-sm'>{{ '@' + volunteer[id - 1].handle }}</div>
          <div class='q-pb-md'>{{ volunteer[id - 1].desc }}</div>
          <div class='row q-pb-sm'>
            <div>
              <q-icon name='room' size='20px'/> <b>{{ volunteer[id - 1].location }}</b>
            </div>
          </div>
          <div class='q-pb-md'>
            <q-icon name='event_note' size='20px'/> {{ volunteer[id - 1].account_created }}
          </div>
          <q-btn align="left" flat dense class='full-width' icon='keyboard_arrow_left' :label="this.$t('app.buttons.back')" size='sm' to='/' />
        </div>
      </div>

      <div class='column no-wrap col'>
        <div class='q-pb-xl q-pt-lg row q-col-gutter-md text-caption text-grey-6'>
          <div class='row'><b class='q-pr-sm'>{{ volunteer[id - 1].posts }}</b>{{ $t('app.common.posts') }}</div>
          <div class='row'><b class='q-pr-sm'>{{ volunteer[id - 1].followers }}</b>{{ $t('app.common.followers') }}</div>
          <div class='row'><b class='q-pr-sm'>{{ volunteer[id - 1].following }}</b>{{ $t('app.common.following') }}</div>
          <q-space/>
          <div class='row q-gutter-x-sm move-small'>
            <q-btn :label="this.$t('app.buttons.chat')" size='sm' outline/>
            <q-btn :label="this.$t('app.buttons.follow')" size='sm' outline/>
          </div>
        </div>
        <tabs class='col-8' :tabs='tabItems' />
      </div>

    </q-page>
  </div>
</template>

<script>
import volunteer from '../components/users/users.json'
export default {
  props: ['id'],
  data () {
    return {
      volunteer: volunteer,
      tabItems: [
        { name: 'campaigns', label: this.$t('app.tabs.campaigns'), component: 'campaign-list' },
        { name: 'supporting-campaigns', label: this.$t('app.tabs.supCamp'), component: '' }
      ]
    }
  },
  computed: {
    profileImg () {
      let prof = this.volunteer[this.id - 1].bg_img
      if (!prof) {
        prof = '../statics/profile/profileImg.jpg'
      }
      return prof
    }
  }
}
</script>

<style lang='stylus' scoped>
.q-img
  height 350px
.move-up
  margin-top -90px
.move-small
  margin-top -3px
/deep/.avatar
  border-radius 5%
.page-pad
  padding-left 100px
  padding-right 100px
.q-btn
  align-items start
</style>

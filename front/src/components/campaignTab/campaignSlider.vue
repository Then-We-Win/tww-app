<template>
  <div>
    <div class='row no-wrap q-col-gutter-x-md' v-if="campaignPage.id !== 'vs'">
      <div v-for='(items, index) in campaignLength' :key='index' class='col'>
        <campaign-comp :campaigns='campaigns[index]' />
      </div>
    </div>
    <div class='row no-wrap q-col-gutter-x-lg' v-else>
      <div v-for='(items, index) in usersLength' :key='index' class='col'>
        <volunteer-comp :info='usersLength[index]' />
      </div>
    </div>
  </div>
</template>

<script>
import campaigns from '../campaignTab/infoDummy'
import users from '../users/users.json'
// import axios from 'axios'
import _ from 'lodash'
// let baseURL = ''

export default {
  props: ['campaignPage'],
  data () {
    return {
      campaigns: campaigns,
      users: users,
      // users: [],
      slicer: []
    }
  },
  computed: {
    campaignLength () {
      let e = campaigns.length
      let f = e
      if (this.$q.screen.lt.sm) {
        e = 1
      } else if (this.$q.screen.lt.md) {
        e < 3 ? (e = f) : (e = 3)
      } else if (this.$q.screen.gt.lg) {
        e < 5 ? (e = f) : (e = 5)
      }
      return e
    },
    usersLength () {
      let e

      if (this.$q.screen.lt.md) {
        e = _.pick(this.users, '0')
      } else if (this.$q.screen.md) {
        e = _.pick(this.users, '0', '1', '2', '3')
      } else if (this.$q.screen.gt.md) {
        e = _.pick(this.users, '0', '1', '2', '3', '4', '5')
      }
      return e
    }
  }
  // async created () {
  //   try {
  //     const res = await axios.get(baseURL)
  //     this.users = res.data
  //   } catch (e) {
  //     console.log('Error: ', e)
  //   }
  // }
}
</script>

<style lang='stylus'></style>

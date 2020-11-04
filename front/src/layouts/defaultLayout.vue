<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar class='q-pa-sm' :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'">
        <img :class="$q.dark.isActive ? 'logo-img' : null" class="img-size cursor-pointer" :src="logo" @click='$router.push("/")'/>
        <q-input class="search-width" outlined v-model="text" placeholder="Search" dense>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:append>
            <q-icon name="filter_list" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <q-space />

        <div class="row no-wrap q-px-lg q-gutter-md">
          <q-btn class="text-grey-6" flat square dense icon="chat_bubble_outline" />

          <q-btn class="text-grey-6" flat square dense icon="notifications">
            <q-menu>
              <q-list separator style='max-width: 300px'>
                <div v-for='(items,index) in activityLength' :key='index'>
                  <user-list :info='items'/>
                </div>
              </q-list>
              <q-btn flat class='full-width' label='View All'/>
            </q-menu>
          </q-btn>

          <avatar-mini name="Angel Steele" icon="true" />
        </div>
      </q-toolbar>
      <q-separator :class="$q.dark.isActive ? 'bg-grey-6' : 'bg-grey-4'" />
    </q-header>

    <q-page-container>
      <router-view />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="grey-6" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import logo from '../statics/logo/logo.svg'
import feed from '../components/userList/feedDummy.json'
export default {
  data () {
    return {
      feed: feed,
      logo: logo,
      slice: 5,
      text: ''
    }
  },
  watch: {
    '$q.dark.isActive' (val) {
      console.log(val ? 'On dark mode' : 'On light mode')
    }
  },
  computed: {
    activityLength () {
      let e = this.feed
      let f = e.length
      e.length < this.slice ? (e.length = f) : (e.length = this.slice)
      return e
    }
  }
}
</script>

<style lang="stylus">
.q-layout__shadow:after
  box-shadow: 0 0 0px 0px rgb(224, 224, 224, 0), 0 0px 0px rgb(224, 224, 224, 0)

.q-field--outlined .q-field__control
  // background: rgb(242, 242, 242, 0.05)

.q-field--dense .q-field__control, .q-field--dense .q-field__marginal
  height: 35px

.search-width
  width: 600px

.img-size
  height: 50px
  max-width: 50px
  padding-right: 8px

.logo-img
  filter invert(1)
</style>

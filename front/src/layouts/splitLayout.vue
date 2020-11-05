<template>
  <q-layout view="hHr LpR lFf">
    <q-drawer
      side="right"
      :width="setWidth()"
      :breakpoint="0"
      overlay
      no-swipe-open
      no-swipe-close
      persistent
      v-model="drawer"
    >
    <router-view></router-view>
    </q-drawer>

    <q-page-container :style="randBg" class="background"></q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: true
    }
  },
  computed: {
    randBg () {
      let imgs = ['login1.jpg', 'login2.jpg']
      let img = 'statics/login/' + imgs[Math.floor(Math.random() * imgs.length)]
      return 'background-image: url(' + img + ')'
    }
  },
  methods: {
    setWidth () {
      let size = this.$q.screen.width * 0.5
      return size
    }
  }
}
</script>

<style lang="stylus" scoped>
.background
  width 100vw
  height 100vh
  overflow hidden
  object-fit cover
  padding 80px
  background-position-x center
  background-position-y center
  background-size cover
  background-repeat-x no-repeat
  background-repeat-y no-repeat
  background-attachment fixed
  background-origin initial
  background-clip initial
  background-color initial

/deep/.q-drawer
  background rgba(97, 97, 97, 0.9)

</style>

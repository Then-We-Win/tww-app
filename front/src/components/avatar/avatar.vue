<template>
  <div :class="clickable ? 'cursor-pointer' : null" @click='toProfile(info)'>
    <div v-if="!icon" class="avatar" :class="$q.dark.isActive ? 'avatar-border-dark' : 'avatar-border-white'" :style="style">
      <template v-if='!avatar'>
        <table>
          <tr>
            <td>{{initials}}</td>
          </tr>
        </table>
      </template>
      <template v-else>
        <img class='fit' :src='avatar'>
      </template>
    </div>
    <div v-else class="avatar avatar-icon" :style="style">
      <template v-if='!avatar'>
        <table>
          <tr>
            <td>{{initials}}</td>
          </tr>
        </table>
      </template>
      <template v-else>
        <img :src='avatar'>
      </template>
    </div>
  </div>
</template>

<script>
import common from '../../common'
export default {
  props: ['name', 'icon', 'size', 'info', 'clickable', 'avatar'],
  data () {
    return {}
  },
  methods: {
    toProfile (e) {
      if (!e) {
        console.log('No items')
      } else {
        this.$router.push({ path: `/profile/${e.id}` })
      }
    }
  },
  computed: {
    // Compute initials from full name
    initials () {
      var words = this.name.split(/[\s-]+/)
      var intls = ''
      for (var i = 0; i < words.length; i++) {
        intls += words[i].substr(0, 1).toUpperCase()
      }
      if (intls.length > 2) {
        intls = intls.substr(0, 2)
      }
      return intls
    },
    style () {
      const name = this.name
      // Material Design 500s other than red, yellow, brown, grey and blue grey
      let colors = ['E91E63', '9C27B0', '673AB7', '3F51B5', '2196F3', '03A9F4', '00BCD4', '009688', '4CAF50', '8BC34A', 'CDDC39', 'FFC107', 'FF9800', 'FF5722']
      let color = '#' + colors[common.hashInt(name, colors.length - 1)]
      if (this.size) {
        return {
          'background-color': color,
          'width': this.size + 'px !important',
          'height': this.size + 'px !important',
          'font-size': this.size / 2.75 + 'px !important'
        }
      } else {
        return {
          'background-color': color
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.avatar
  width 140px
  height 140px
  border-radius 50%
  overflow hidden
  object-fit cover
  position: relative
  display: inline-block
  background-color: black
  color: white
  font-size: 50px
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  background-image: none
.avatar-icon
  width 24px
  height 24px
  border 0px
  font-size 10px
  border-radius 0%
.avatar table
  width: 100%
  height: 100%
  text-align: center
  vertical-align: middle
  margin: 0
  padding: 0
.avatar-border-white
  border: 5px solid white
.avatar-border-dark
  border: 5px solid $dark
</style>

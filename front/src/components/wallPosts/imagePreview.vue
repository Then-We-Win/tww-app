<template>
  <q-dialog full-height v-model='value' persistent @hide='onHide' :maximized="true">
    <q-card class='fit'>
      <q-img contain :src='posts' class='fit'>
        <div class='full-width'>
          <q-btn icon='keyboard_backspace' flat align='left' class='full-width' @click='onHide()' />
        </div>
      </q-img>
      <template v-if='title'>
       <div class="bg-color absolute-bottom text-subtitle1 text-center q-pa-md">
          <div class='text-h6 q-pb-md ellipsis'>{{title}}</div>
          <div class='ellipsis-2-lines'>{{desc}}</div>
        </div>
      </template>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ['value', 'posts', 'title', 'desc', 'slide'],
  data () {
    return {
    }
  },
  methods: {
    onOk () {
      this.$emit('input', false)
    },
    onHide () {
      this.$emit('input', false)
    }
  },
  computed: {
    maxToggle () {
      let max
      this.$q.screen.lt.sm ? max = true : max = false
      return max
    }
  }
}
</script>

<style lang='stylus' scoped>
.q-img__content > div
  padding 0px
.bg-color
  color white
  background-color rgba(0,0,0,0.47)
.q-card
  background rgba(0,0,0,0.47)
</style>

<template>
  <div>
    <q-toolbar>
      <q-btn align="left" flat icon='keyboard_arrow_left' :label="this.$t('app.buttons.back')" size='sm' to='/' />
      <q-separator vertical inset />
      <q-toolbar-title>
        {{post[id-1].title}}
      </q-toolbar-title>
    </q-toolbar>
    <q-page :class="$q.screen.lt.sm ? 'q-px-md' : 'page-padding'" class='q-pt-lg column q-gutter-y-lg'>
    <wall-posts :posts='post[id-1]'/>
    <comment-list/>
    </q-page>
  </div>
</template>

<script>
import post from '../components/wallPosts/postDummy'
export default {
  props: ['id'],
  data () {
    return {
      post: post
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

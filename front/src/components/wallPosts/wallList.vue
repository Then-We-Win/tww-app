<template>
<div class='col-9'>
  <div v-for='(items, index) in posts' :key='index'>
    <wall-posts :posts='items' class='q-pb-md' />
  </div>
</div>
</template>

<script>
import postDummy from './postDummy'
export default {
  data () {
    return {
      posts: postDummy
    }
  }
}
</script>

<style lang='stylus' scoped></style>

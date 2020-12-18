<template>
  <q-page class="q-pa-md bg-white">
    <div class="row q-col-gutter-md">
      <div class="col-md-8 offset-md-2">
        <post-header />
        <q-separator />
      </div>
      
    </div>
  </q-page>
</template>

<script>
import PostHeader from '../components/wall/Header';
    export default {
        name: "Wall",
        components: {
          PostHeader
        },
        data() {
            return {
                posts: []
            }
        }
    }
</script>

<style scoped>
.bg {
  background-color: #ffffff;
}
</style>

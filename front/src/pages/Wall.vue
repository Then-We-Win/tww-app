<template>
  <q-page class="q-pa-md bg-white">
    <div class="row q-col-gutter-md">
      <div class="row col-md-8 offset-md-2">
        <div class="col">
          <post-header />
          <q-separator />
          <post-create class="my-4" />
          <post-list />
        </div>
        <div class="col-4 q-pa-md q-ml-md">
          <wall-side-bar />
        </div>
      </div>
      
    </div>
  </q-page>
</template>

<script>
import PostHeader from '../components/wall/Header';
import PostCreate from '../components/wall/PostCreate';
import PostList from '../components/wall/PostList';
import WallSideBar from '../components/wall/SideBar';


    export default {
        name: "Wall",
        components: {
          PostHeader,
          PostCreate,
          PostList,
          WallSideBar
                
        }
    }
</script>

<style scoped>
.bg {
  background-color: #ffffff;
}
</style>

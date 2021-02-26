<template>
  <div class="q-pa-md bg-white">
    <div class="row">
      <div class="row">
        <div class="col">
          <post-create class="my-4" />
          <post-list />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import PostCreate from './PostCreate';
import PostList from './PostList';

    export default {
        name: "Wall",
        components: {
          PostCreate,
          PostList,
        }
    }
</script>

<style scoped>
.bg {
  background-color: #ffffff;
}
</style>

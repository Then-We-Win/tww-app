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
import PostCreate from './post-create';
import PostList from './post-list';

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

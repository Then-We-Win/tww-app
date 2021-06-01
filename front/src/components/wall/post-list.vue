<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <q-list>
      <post-list-item
        v-for="(item, index) in posts"
        :key="index"
        :post="item"
        :index="index"
      />
    </q-list>
  </div>
</template>

<script>
import PostListItem from "./post-list-item";

export default {
  name: "PostList",
  props: ["posts"],
  components: {
    PostListItem,
  },
};
</script>

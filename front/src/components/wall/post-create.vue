<template>
  <div>
    <q-input filled v-model="postText" placeholder="Create a Post"
        v-on:keyup.enter="savePost">
      <template v-slot:prepend>
          <q-icon name="description" />
      </template>
      <template v-slot:append>
         <q-separator vertical />
          <q-btn round dense flat icon="camera_alt" class="q-mx-sm" />
           <q-separator vertical />
          <q-btn round dense flat icon="videocam" />
        </template>

    </q-input>
  </div>
</template>

<script>
export default {
  name: "PostCreate",
  data() {
    return {
        postText: ""
    }
  },
  methods: {
    savePost() {
      let post = this.postText;
      if (post != null && post.trim().length > 0) {
        this.$emit('savePost', post);
        this.postText = "";
      } else {
        // Wall: standard error messages
        alert("Please enter a post details");
      }
    }
  }
}
</script>
<style scoped>

</style>
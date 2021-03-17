<template>
  <div>
    <div class="row">
      <div class="full-width" @click="showEditor = !showEditor">
        <q-input
          filled
          :disable="showEditor"
          placeholder="What's on your mind?"
        >
          <template v-slot:prepend>
            <q-avatar size="5vh">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>

      <div class="q-my-sm full-width" v-if="showEditor">
        <q-editor
          v-model="postText"
          @click="postText = ''"
          v-on:keyup.enter="savePost"
          min-height="5rem"
          :toolbar="[['bold', 'italic', 'strike', 'underline']]"
        />
        <q-separator class="q-mb-xs full-width" />
        <div class="row">
          <div class="col-4 flex">
            <q-btn round dense flat icon="camera_alt" />
            <q-separator vertical class="q-mx-sm" />
            <q-btn round dense flat icon="videocam" />
          </div>
          <div class="col-8">
            <q-btn
              unelevated
              rounded
              color="grey-6"
              label="Post"
              class="float-right"
              @click="savePost"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCreate",
  data() {
    return {
      postText: "",
      showEditor: false,
    };
  },
  methods: {
    savePost() {
      let post = this.postText;
      if (post != null && post.trim().length > 0) {
        this.$emit("savePost", post);
        this.postText = "";
      } else {
        // Wall: standard error messages
        alert("Please enter a post details");
      }
    },
  },
};
</script>
<style scoped></style>

<template>
  <div>
    <div class="row">
      <div class="col-1">
        <q-avatar size="5vh">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </div>
      <div class="col-11">
        <q-input
          v-if="!showEditor"
          placeholder="What's on your mind?"
          @click="showEditor = !showEditor"
        >
        </q-input>
        <div
          class="full-width"
          :class="showEditor ? 'q-my-none' : 'q-my-sm'"
          v-if="showEditor"
        >
          <q-editor
            v-model="post.contents.text"
            min-height="5rem"
            :toolbar="[['bold', 'italic', 'strike', 'underline']]"
          />
          <q-separator class="q-mb-xs full-width" />
          <div class="row">
            <div class="col-8 flex">
              <div>
                <q-file dense borderless use-chips v-model="post.contents.imgs">
                  <template v-slot:append>
                    <q-icon
                      name="camera_alt"
                      class="cursor-pointer	"
                      @click.stop
                    />
                  </template>
                </q-file>
              </div>
              <q-separator vertical class="q-mx-sm" />
              <q-btn round dense flat icon="videocam" class="text-grey-6" />
            </div>
            <div class="col-4">
              <q-btn
                unelevated
                rounded
                color="grey-6"
                label="Post"
                class="float-right"
                @click="savePost()"
              />
            </div>
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
      post: {
        id: null,
        title: "",
        status: "Published",
        contents: {
          text: "",
          imgs: null,
          videoUrl: "",
          link: null,
          likes: "0",
          comments: "0",
        },
        likedPost: false,
        category: "",
        modifiedBy: "",
        dateModified: "",
        dateCreated: this.getCurrentDate(),
        userId: "",
        userDetails: {
          userName: "Mrs. Wick",
          avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
        },
        campaign: "",
      },
      showEditor: false,

    };
  },
  methods: {
    savePost() {
      this.post.id =  this.getID();
      const postData = JSON.parse(JSON.stringify(this.post));
      if (this.post.contents.text != "") {
        this.$emit("save-post", postData);
        this.post.contents.text = ''
      } else {
        // Wall: standard error messages
        this.$q.notify({
          type: "negative",
          message: `Please enter a post details`,
        });
      }
    },
    getID() {
      return Math.random()
        .toString(36).substr(2, 6);
    },
    getCurrentDate() {
      let date = new Date();
      let options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return `${date.toLocaleTimeString("en-us", options)}`;
    },
  },
};
</script>
<style scoped></style>

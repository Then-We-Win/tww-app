<template>
  <div class="">
    <div class="row q-pa-sm">
      <div class="flex items-start">
        <q-item-section avatar>
          <q-avatar size="5vh">
            <img :src="avatar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-weight-medium text-grey-8 text-subtitle1">{{
            name
          }}</q-item-label>
          <q-item-label caption class="text-weight-medium"
            >@{{ username }}</q-item-label
          >
          <q-item-label caption class="text-weight-medium q-py-sm">{{
            time
          }}</q-item-label>

          <div class="q-py-sm">
            <p class="text-grey">{{ comment }}</p>
            <q-btn
              outline
              padding="none"
              size="md"
              flat
              no-caps
              @click="showComment = !showComment"
              label="Reply"
            />
            <div v-if="showComment" class="q-my-sm ">
              <q-editor
                v-model="commentText"
                @click="commentText = ''"
                min-height="5rem"
                :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
              <q-btn
                class="q-my-sm float-right	"
                outline
                color="grey-3"
                text-color="grey-6"
                size="md"
                label="Reply"
              />
            </div>
          </div>
        </q-item-section>
      </div>
    </div>
    <q-separator class="q-my-sm" />
  </div>
</template>

<script>
export default {
  props: ["name", "username", "avatar", "time", "comment"],
  data() {
    return {
      commentText: "",
      showComment: false,
      commentData : {
        id: null,
        name: "John Wick",
        username: "john.wick",
        avatar:
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        comment:
          "",
        time: this.getCurrentDate(),
      }
    };
  },
  methods: {
    saveComment() {
      this.setUserInfo()
      this.commentData.id = this.getID()
      this.commentData.comment = this.commentText
      const comment = JSON.parse(JSON.stringify( this.commentData));
      if (this.commentText != "") {
        this.$emit("save-comment", comment);
        this.commentText = ''
      } else {
        // Wall: standard error messages
        this.$q.notify({
          type: "negative",
          message: `Please enter a comment`,
        });
      }
      
    },
    getID() {
      return Math.random()
        .toString(36)
        .substr(2, 6);
    },
    setUserInfo(){
      this.commentData.name = this.$store.state.user.name ? this.$store.state.user.name : this.$store.state.user.username
      this.commentData.avatar = this.$store.state.user.avatar ? this.$store.state.user.avatar : 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
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
  }
};
</script>

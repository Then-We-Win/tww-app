<template>
  <div>
    <div class="row">
      <div class="col-1">
        <q-avatar size="5vh">
          <img :src="post.userDetails.avatar" />
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
            <div class="full-width flex">
              <div class="full-width">
                <q-uploader
                  @added="addFile"
                  @removed="removedFile"
                  @rejected="onFileReject"
                  label="Add files"
                  ref="uploader"
                  color="grey-6"
                  hide-upload-btn
                  multiple
                  :max-files="4"
                  accept=".jpg, .png, image/*"
                  class="full-width"
                >
                  <template v-slot:list="scope">
                    <q-list separator>
                      <q-item v-for="file in scope.files" :key="file.name">
                        <q-item-section>
                          <q-item-label class="full-width ellipsis">
                            {{ file.name }}
                          </q-item-label>

                          <q-item-label caption>
                            Status: {{ file.__status }}
                          </q-item-label>

                          <q-item-label caption>
                            {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                          </q-item-label>
                        </q-item-section>

                        <q-item-section
                          v-if="file.__img"
                          thumbnail
                          class="gt-xs"
                        >
                          <img :src="file.__img.src" />
                        </q-item-section>

                        <q-item-section top side>
                          <q-btn
                            class="gt-xs"
                            size="12px"
                            flat
                            dense
                            round
                            icon="delete"
                            @click="scope.removeFile(file)"
                          />
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </template>
                </q-uploader>
              </div>
              <!--camera_alt <q-separator vertical class="q-mx-sm" />
              <q-btn round dense flat icon="videocam" class="text-grey-6" /> -->
            </div>
            <div class="q-my-sm">
              <q-btn
                outline
                color="grey-6"
                label="Post"
                class="float-left q-px-sm"
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
      fileList: [],
      user: this.$store.state.user,
      post: {
        id: null,
        title: "",
        status: "Published",
        contents: {
          text: "",
          imgs: [],
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
          fullName: "",
          userName: "",
          email: '',
          avatar: '',
        },
        campaign: "",
      },
      showEditor: false,
      
    };
  },
  created(){
    this.setUserInfo()
  },
  methods: {
    savePost() {
      this.post.id = this.getID();
      this.addFilesBeforeUpload()
      const postData = JSON.parse(JSON.stringify(this.post));
      if (this.post.contents.text != "") {
        this.$emit("save-post", postData);
        this.post.contents.text = "";
        this.post.contents.imgs = [];
        this.$refs.uploader.reset();
      } else {
        // Wall: standard error messages
        this.$q.notify({
          type: "negative",
          message: `Please enter a post details`,
        });
      }
    },
    setUserInfo(){
      if(this.user){
        this.post.userDetails.fullName = this.user.name
        this.post.userDetails.avatar = this.user.avatar ? this.user.avatar : 'https://cdn.quasar.dev/img/boy-avatar.png'
        this.post.userDetails.userName = this.user.username
        this.post.userDetails.email = this.user.email
      }
    },
    addFilesBeforeUpload(){
      this.fileList.map( item => {
        const path = (window.URL || window.webkitURL).createObjectURL(item);
        this.post.contents.imgs.push(path);
      })
    },
    addFile(file) {
      //this.fileList = file
      this.fileList = this.$refs.uploader.files;
    },
    removedFile(file){
       this.fileList = this.$refs.uploader.files;
    },
    onFileReject(rejectedEntries){
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation`
      })
    },
    getID() {
      return Math.random()
        .toString(36)
        .substr(2, 6);
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

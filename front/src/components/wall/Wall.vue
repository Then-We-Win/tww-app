<template>
  <div class="q-pa-md bg-white">
    <div class="row">
      <div class="row">
        <div class="col">
          <post-create class="my-4" @save-post="savePostData" />
          <post-list :posts="posts" />
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
  },
  data() {
    return {
      posts: [
        {
          id: this.getID(),
          title: "",
          status: "Published",
          contents: {
            text: "",
            imgs: [],
            videoUrl: "",
            link: {
              title: "GetUp! Action for USA!",
              url: "https://www.linkurl.com",
            },
            likes: "10.2K",
            comments: "1K",
          },
          likedPost: false,
          category: "",
          modifiedBy: "",
          dateModified: "",
          dateCreated: "Sat, Aug 31 . 9:30 AM",
          userId: "",
          userDetails: {
            userName: "Mrs. Wick",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
          },
          campaign: "",
        },
        {
          id: this.getID(),
          title: "GetUp! Action for USA!",
          status: "Published",
          contents: {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgs: ["https://placeimg.com/500/300/nature"],
            videoUrl: "",
            likes: "15.2K",
            comments: "1.2K",
          },
          likedPost: false,
          category: "",
          modifiedBy: "",
          dateModified: "",
          dateCreated: "Sat, Aug 31 . 9:30 AM",
          userId: "",
          userDetails: {
            userName: "Mrs. Wick",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
          },
          campaign: "",
        },
        {
          id: this.getID(),
          title: "Demo post",
          status: "Published",
          contents: {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgs: [],
            videoUrl: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
            likes: "5.2K",
            comments: "1K",
          },
          likedPost: false,
          category: "",
          modifiedBy: "",
          dateModified: "",
          dateCreated: "Sat, Aug 31 . 9:30 AM",
          userId: "",
          userDetails: {
            userName: "Mrs. Wick",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
          },
          campaign: "",
        },
        {
          id: this.getID(),
          title: "Fossil free world",
          status: "Published",
          contents: {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgs: [
              "https://placeimg.com/500/300/any",
              "https://placeimg.com/500/300/arch",
              "https://placeimg.com/500/300/nature",
              "https://placeimg.com/500/300/tech",
            ],
            videoUrl: "",
            likes: "30.2K",
            comments: "4K",
          },
          likedPost: false,
          category: "",
          modifiedBy: "",
          dateModified: "",
          dateCreated: "Sat, Aug 31 . 9:30 AM",
          userId: "",
          userDetails: {
            userName: "Winston",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          },
          campaign: "",
        },
        {
          id: this.getID(),
          title: "",
          status: "Published",
          contents: {
            text: "",
            imgs: [],
            videoUrl: "",
            audio: {
              title: "Audio Title",
              description: "Audio Description",
            },
            likes: "15.2K",
            comments: "1.2K",
          },
          likedPost: false,
          category: "",
          modifiedBy: "",
          dateModified: "",
          dateCreated: "Sat, Aug 31 . 9:30 AM",
          userId: "",
          userDetails: {
            userName: "Mrs. Wick",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
          },
          campaign: "",
        },
        {
          id: this.getID(),
          title: "GetUp! Action for USA!",
          status: "Published",
          contents: {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgs: [],
            videoUrl: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
            likes: "5.2K",
            comments: "1K",
          },
          likedPost: false,
          category: "",
          modifiedBy: "",
          dateModified: "",
          dateCreated: "Sat, Aug 31 . 9:30 AM",
          userId: "",
          userDetails: {
            userName: "Mrs. Wick",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
          },
          campaign: "",
        },
      ],
    };
  },
  methods: {
    savePostData(val) {
      this.posts.unshift(val);
    },
    //Returns a random ID to the caller
    getID() {
      return Math.random()
        .toString(16)
        .slice(2);
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: #ffffff;
}
</style>

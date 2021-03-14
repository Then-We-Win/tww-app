<template>
  <div class="row">
    <div class="col-12 q-py-lg">
      <div class="flex">
        <q-item-section avatar>
          <q-avatar>
            <img :src="post.userDetails.avatar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-weight-bold text-grey-8">{{
            post.userDetails.userName
          }}</q-item-label>
          <q-item-label caption class="text-weight-medium">{{
            post.dateCreated
          }}</q-item-label>
        </q-item-section>
        <q-icon flat dense name="fas fa-ellipsis-h" size="xs" class="text-grey-8 cursor-pointer">
          <q-popup-proxy>
            <q-banner>
              <q-list>
                <q-item clickable v-ripple>
                  <q-icon color="primary" name="report_problem" size="sm" />
                  <q-item-section class="q-mx-sm">
                    <span class="text-grey-8 text-body2">Report post</span>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="items-center">
                  <q-icon color="primary" name="block" size="sm" />
                  <q-item-section class="q-mx-sm">
                    <span class="text-grey-8 text-body2"> Block user</span>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-banner>
          </q-popup-proxy>
        </q-icon>
      </div>
      <div class="q-my-sm">
        <h4 v-if="post.title" class="text-h6 text-grey-8 q-my-md">
          {{ post.title }}
        </h4>
        <p v-if="post.contents.text" class="q-my-xs text-grey-6">
          {{ post.contents.text }}
        </p>
        <div v-if="post.contents.link" class="bg-grey-3 flex q-my-md">
          <q-btn flat icon="link" class="q-mx-sm text-h6 text-grey-8" />
          <q-separator vertical />
          <div class="q-pa-md">
            <strong class="text-h6 text-grey-8 q-my-md">{{
              post.contents.link.title
            }}</strong>
            <p class="q-my-sm">
              <a
                class="text-subtitle2 text-grey-6"
                :href="post.contents.link.url"
                target="_blank"
              >
                {{ post.contents.link.url }}</a
              >
            </p>
          </div>
        </div>
        <div v-if="post.contents.imgs" class="q-my-md row">
          <q-img
            class="col"
            v-for="img in post.contents.imgs"
            :key="img"
            :src="img"
            :ratio="16 / 9"
          />
        </div>
        <q-video
          class="q-my-md"
          v-if="post.contents.videoUrl"
          :src="post.contents.videoUrl"
        />
        <div v-if="post.contents.audio" class="bg-grey-3 flex q-my-md">
          <q-btn flat icon="play_circle" class="q-mx-sm text-h6 text-grey-8" />
          <q-separator vertical />
          <div class="q-pa-md">
            <strong class="text-h6 text-grey-8 q-my-md">{{
              post.contents.audio.title
            }}</strong>
            <p class="q-my-sm">
              <small class="text-subtitle2 text-grey-6">
                {{ post.contents.audio.description }}</small
              >
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-start">
        <div class="items-center">
          <q-icon
            :name="post.likedPost ? 'fas fa-heart' : 'far fa-heart'"
            class="cursor-pointer text-red"
            size="xs"
            @click="post.likedPost = !post.likedPost"
          >
            <q-tooltip transition-show="flip-right" transition-hide="flip-left">
              {{ post.likedPost ? "Dislike" : "Like" }}
            </q-tooltip>
          </q-icon>
          <strong class="text-grey-8 q-ml-sm">{{ post.contents.likes }}</strong>
          <small class="q-px-sm text-grey-6 text-weight-bold">Likes</small>
        </div>
        <div
          class="q-px-sm q-ml-lg items-center cursor-pointer"
          @click="showComment = !showComment"
        >
          <strong class="text-grey-8">{{ post.contents.comments }}</strong>
          <small class="q-px-sm text-grey-6 text-weight-bold">Comments</small>
        </div>
      </div>
      <div class="full-width q-my-md" v-if="showComment">
        <q-editor
          v-model="commentText"
          @click="commentText = ''"
          min-height="5rem"
          :toolbar="[
            ['bold', 'italic', 'strike', 'underline']
          ]"
        />
        <q-btn
          class="q-my-sm float-right	"
          rounded
          color="grey-3" text-color="black"
          size="md"
          label="Submit Comment"
        />
      </div>
    </div>
    <q-separator class="h-1" />
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: ["post", "index"],
  data() {
    return {
      showComment: false,
      commentText: "Leave a comment",
    };
  },
};
</script>

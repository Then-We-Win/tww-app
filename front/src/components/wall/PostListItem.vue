<template>
  <div class="row">
    <div class="col-12 q-py-lg">
      <div class="flex">
        <q-item-section avatar>
          <q-avatar size="5vh">
            <img :src="post.userDetails.avatar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-weight-bold text-grey-8">{{post.userDetails.userName}}</q-item-label>
          <q-item-label caption class="text-weight-medium">{{post.dateCreated}}</q-item-label>
        </q-item-section>
        <q-btn flat icon="more_vert" class="q-mx-sm text-grey-8" />
        
      </div>
      <div class="q-my-md">
        <h4 v-if="post.title" class="text-h6 text-grey-8 q-my-md">{{ post.title }}</h4>
        <p v-if="post.contents.text" class="q-my-xs text-grey-6">{{ post.contents.text }}</p>
        <div v-if="post.contents.link" class="bg-grey-3 flex q-my-md">
          <q-btn flat icon="link" class="q-mx-sm text-h6 text-grey-8" />
          <q-separator vertical />
          <div class="q-pa-md">
            <strong class="text-h6 text-grey-8 q-my-md">{{post.contents.link.title}}</strong>
            <p class="q-my-sm"><a class="text-subtitle2 text-grey-6" :href="post.contents.link.url" target="_blank"> {{ post.contents.link.url }}</a></p>
          </div>
          
        </div>
        <div v-if="post.contents.imgs" class="q-my-md row">
          <q-img
          class="col q-mx-xs"
          v-for="img in post.contents.imgs"
          :key="img"
          :src="img"
          :ratio="16/9"
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
            <strong class="text-h6 text-grey-8 q-my-md">{{post.contents.audio.title}}</strong>
            <p class="q-my-sm"><small class="text-subtitle2 text-grey-6" > {{ post.contents.audio.description }}</small></p>
          </div>
          
        </div>
      </div>
      <div class="flex">
        <div class="flex">
            <strong class="text-grey-8">{{post.contents.likes}}</strong>
            <p class="q-px-sm"><small  class=" text-grey-6  text-weight-bold">Likes</small></p>
        </div>
        <div class="flex q-px-sm q-ml-lg">
            <strong class="text-grey-8">{{post.contents.comments}}</strong>
            <p class="q-px-sm "><small class=" text-grey-6  text-weight-bold">Comments</small></p>
        </div>
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
    return {};
  },
};
</script>

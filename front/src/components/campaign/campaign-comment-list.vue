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
                min-height="5rem"
                :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
              <q-btn
                class="q-my-sm float-right	"
                rounded
                color="grey-3"
                text-color="black"
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
    };
  },
};
</script>

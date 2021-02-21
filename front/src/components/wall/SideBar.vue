<template>
  <div id="WallSideBar">
    <q-list dense padding class="rounded-borders">
      <q-item clickable v-ripple v-for="(link, index) in links" :key="index" class="q-my-sm">
        <q-item-section avatar>
          <q-icon class="text-grey-6" :name="link.icon" />
        </q-item-section>
        <q-item-section class="text-subtitle2 text-weight-bold text-grey-8">
          {{ link.name }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "WallSideBar",
  data() {
    return {
      links: [
        {
          name: "News Feed",
          icon: "text_snippet",
        },
        {
          name: "Messenger",
          icon: "chat",
        },
        {
          name: "Task List",
          icon: "list",
        },
      ],
    };
  },
};
</script>

<style scoped></style>

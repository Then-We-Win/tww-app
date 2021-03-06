<template>
  <q-list>
    <div v-if="!messages">
      <nothing-here :text="text" :image="imgUrl" />
    </div>
    <div v-else>
      <q-item
        v-for="msg in messages"
        :key="msg.id"
        v-on:click="selectUser(msg.id)"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="msg.avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ msg.name }}</q-item-label>
          <q-item-label caption lines="1">{{ msg.lastMsg }}</q-item-label>
        </q-item-section>

        <q-item-section side style="font-size:12px">
          {{ msg.time }}
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
import NothingHere from "../NothingHere";
export default {
  components: { NothingHere },
  name: "MessagesUserList",
  props: ["messages"],
  methods: {
    selectUser: function(userId) {
      //console.log("Key is " + userId);
      this.$emit("selectUser", userId);
    },
  },
};
</script>

<style scoped></style>

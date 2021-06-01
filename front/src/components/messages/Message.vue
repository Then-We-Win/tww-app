<template>
  <div id="msgMsgs" class="row justify-center">
    <div style="width: 100%" v-for="msg in thread.msgs" :key="msg.id">
      <q-chat-message
        :avatar="msg.fromId == myId ? thread.myAvatar : thread.theirAvatar"
        :text="[msg.message]"
        :sent="msg.fromId == myId ? true : false"
        :stamp="msg.when"
      />
    </div>
    <div
      v-bind:class="{ hidden: thread.msgs.length > 0 }"
      class="center"
      style="width: 600px; height: 100px;"
    >
      <h6>No messages</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessagesMessage",
  props: ["myId", "thread"]
};
</script>

<style lang="scss">
#msgMsgs .q-message-text-content {
  max-width: 500px;
}
#msgMsgs .q-message-text {
  color: $grey-4;
}
#msgMsgs .q-message-text--sent {
  background-color: white;
  border: $grey-4 1px solid;
}
#msgMsgs .q-message-avatar {
  height: 42px;
  width: 42px;
  min-width: 0px;
}
</style>

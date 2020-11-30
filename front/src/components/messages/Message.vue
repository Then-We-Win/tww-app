<template>
    <div id="msgMsgs" class="row justify-center">
      <div style="width: 100%" v-for="msg in thread.msgs" :key="msg.id">
        <q-chat-message 
          :avatar="msg.fromId==99 ? thread.myAvatar: thread.theirAvatar"
          :text="[msg.message]"
          :sent="msg.fromId==99?true:false"
          :stamp="msg.when"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: 'MessagesMessage',
  props: ['thread']
}
</script>

<style lang="scss">
  #msgMsgs .q-message-text-content {
    max-width: 500px
  }
  #msgMsgs .q-message-text {
    color: $grey-4
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
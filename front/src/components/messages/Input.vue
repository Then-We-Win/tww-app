<template>
  <div>
    <q-input filled v-model="msgText" placeholder="Enter a message here"
        v-on:keyup.enter="sendMsg">
      <template v-slot:append>
        <span class="text-h6 cursor-pointer" v-on:click="sendMsg">Send</span>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "MessagesInput",
  data() {
    return {
        msgText: ""
    }
  },
  methods: {
    sendMsg() {
      let msg = this.msgText;
      if (msg != null && msg.trim().length > 0) {
        this.$emit('sendMsg', msg);
        this.msgText = "";
      } else {
        // TODO: standard error messages
        alert("Please enter a message to send");
      }
    }
  }
}
</script>

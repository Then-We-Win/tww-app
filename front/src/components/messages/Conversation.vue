<template>
  <div>
    <div id="wrap-cnvrstn" v-bind:class="{hidden:!isActive}">
      <messages-subheader v-bind:user="selUser"></messages-subheader>
      <messages-message v-bind:thread="currentThread" class="q-pa-md"></messages-message>
      <messages-input v-on:sendMsg="sendMessage" class="q-pa-md"></messages-input>
    </div>
    <div id="no-cnvrstn" v-bind:class="{hidden:isActive}" class="center" style="width: 600px; height: 300px;">
        <h6>Select a user to open/start a conversation</h6>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import MessagesSubheader from './SubHeader';
  import MessagesMessage from './Message';
  import MessagesInput from './Input';

  // We're using sample data here. TODO: Model will provide the data from the DB
  import * as myData from '../../model/messages.js';

  import TimeSince from "../../mixins/TimeSince";

  export default {
    name: "MessagesConversation",
    components: {
          MessagesSubheader,
          MessagesMessage,
          MessagesInput
    },
    props: ['selUser'],
    mixins: [TimeSince],
    data() {
      return {
        isActive: true,
        newMsgIdx: 1000,    // just using a dummy index counter here
        conversations: myData.sampleData.conversations,
        currentThread: {
          theirAvatar: this.selUser.avatar,
          // this is our currently logged in user (dummy user here) 
          // TODO: the current user's info will come from the DB or the header, 
          // which may be another props for this component
          myAvatar: "https://cdn.quasar.dev/img/avatar4.jpg",
          msgs: this.getMsgThread(this.selUser, myData.sampleData.conversations)
        }
      }
    },
    watch: { 
      selUser: function(newUser, oldUser) {
        // console.log('DEBUG: selected user changed: ', newUser.id, ' | was: ', oldUser.id)
        // console.log('newUser is ' + newUser)
        if (typeof newUser.id == 'undefined') {   // can't seem to test for undefined on newUser object
          this.isActive = false;
        } else {
          this.isActive = true;
          let msgThread = this.getMsgThread(newUser, this.conversations);
          this.currentThread.msgs = msgThread;
          this.currentThread.theirAvatar = newUser.avatar;
        }
      }
    },

    methods: {
      //TODO: Controller to read message thread from the DB
      getMsgThread(user, allConv) {
        //console.log("DEBUG: getMsgThread for " + user.id)
        let msgThread = [];
        for (let item of allConv) {
          if (item.fromId==user.id || item.toId==user.id) {
            //console.log("DEBUG: conversation found, id = " + item.id);
            msgThread.push(item);
          }
        }
        // B. format the message createDate to display the time since, e.g. "5 mins ago"
        for (let item of msgThread) {
          // NOTE: date strings should be in this format: '02 Dec 2020 16:16:27 GMT-0800';
          let dateObj = new Date(item.createDate);
          item.when = this.getTimeSince(dateObj);
        }
        return msgThread;
      },

      //TODO: Controller to send this message (e.g. save action in DB & send email/text or mobile notification)
      sendMessage(msgText) {
        //console.log ("DEBUG: Sending Message... ");
        this.newMsgIdx = this.newMsgIdx + 1;
        let conv = {
          id: this.newMsgIdx,
          fromId: 99,                         // this is our currently logged in user (dummy user here)
          toId: this.selUser.id,
          message: msgText,
          createDate: new Date(),
          metaData: 'Some meta data here'
        }
        this.conversations.push(conv);
        // update the page/view
        this.currentThread.msgs = this.getMsgThread(this.selUser, this.conversations);
      },
    }
  }
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <div>
    <div id="wrap-cnvrstn" v-bind:class="{ hidden: !isActive }">
      <messages-subheader v-bind:user="selUser" />
      <messages-message
        v-bind:myId="myId"
        v-bind:thread="currentThread"
        class="q-pa-md"
      />
      <messages-input v-on:sendMsg="sendMessage" class="q-pa-md" />
    </div>
    <div id="no-cnvrstn" v-bind:class="{ hidden: isActive }" class="flex flex-center">
      <h6>Select a user to open/start a conversation</h6>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MessagesSubheader from "./sub-header";
import MessagesMessage from "./Message";
import MessagesInput from "./Input";

// We're using sample data here. TODO: Model will provide the data from the DB
import * as myData from "../../model/messages.js";

import TimeSince from "../../mixins/time-since";

export default {
  name: "MessagesConversation",
  components: {
    MessagesSubheader,
    MessagesMessage,
    MessagesInput
  },
  props: ["selUser"],
  mixins: [TimeSince],
  data() {
    return {
      info: null,
      useApi: false, // NOTE: the REST API web service must be running
      apiUrl: "http://localhost:1337/", // TODO: this should be global for the project
      loading: true, // TODO: use a spinning icon to show "loading..."
      myId: 6, // just a dummy logged in user here, John Doe. TODO: get current logged in user

      isActive: true,
      newMsgIdx: 1000, // just using a dummy index counter here
      conversations: myData.sampleData.conversations,
      currentThread: {
        theirAvatar: this.selUser.avatar,
        // this is our currently logged in user (dummy user here)
        // TODO: the current user's info will come from the DB or the header,
        // which may be another props for this component
        myAvatar: "https://cdn.quasar.dev/img/avatar4.jpg",
        msgs: this.getMsgThread(
          this.selUser.id,
          myData.sampleData.conversations
        )
      }
    };
  },
  watch: {
    selUser: function(newUser) {
      // console.log('DEBUG: selected user changed: ', newUser.id, ' | was: ', oldUser.id)
      if (typeof newUser.id == "undefined") {
        // can't seem to test for undefined on newUser object
        this.isActive = false;
      } else {
        this.isActive = true;
        if (this.useApi) {
          this.apiMsgThread(this.myId, newUser.id).then(msgThread => {
            //console.log('DEBUG: msgThread is ' + msgThread)
            this.currentThread.msgs = this.formatMsgs(msgThread);
            this.currentThread.theirAvatar = newUser.avatar;
          });
        } else {
          let msgThread = this.getMsgThread(newUser.id, this.conversations);
          //console.log('DEBUG: msgThread is ' + msgThread)
          this.currentThread.msgs = this.formatMsgs(msgThread);
          this.currentThread.theirAvatar = newUser.avatar;
        }
      }
    }
  },

  methods: {
    apiMsgThread(myUserId, withUserId) {
      // TODO: implement paging
      let limit = 10;
      let beforeDate = null;

      // GET /messages/thread/:user/:with/:_limit/:_before
      let url =
        this.apiUrl +
        "messages/thread/" +
        myUserId +
        "/" +
        withUserId +
        "/" +
        limit +
        "/" +
        beforeDate;
      // console.log('DEBUG: api is ' + url)   // e.g. 'http://localhost:1337/messages/thread/6/1/10/null'
      this.loading = true;

      return axios
        .get(url)
        .then(response => {
          let json = JSON.stringify(response.data);
          //console.log('DEBUG: data is ' + json)
          let objects = JSON.parse(json);
          return objects;
        })
        .catch(error => {
          console.log(error);
          alert(error); // TBD: standard error handling
        })
        .finally(() => (this.loading = false));
    },

    getMsgThread(userId, allConv) {
      //console.log("DEBUG: getMsgThread for " + userId)
      let msgThread = [];
      for (let item of allConv) {
        if (item.fromId == userId || item.toId == userId) {
          //console.log("DEBUG: conversation found, id = " + item.id);
          msgThread.push(item);
        }
      }
      return msgThread;
    },

    // TODO: put the most recent message at the bottom (not the top), add a scroll bar,
    //       on scroll up load more messages from the DB.
    formatMsgs(msgThread) {
      // format the message createDate to display the time since, e.g. "5 mins ago"
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
        fromId: this.myId,
        toId: this.selUser.id,
        message: msgText,
        createDate: new Date(),
        metaData: "Some meta data here"
      };
      this.conversations.push(conv);
      // update the page/view
      this.currentThread.msgs = this.getMsgThread(
        this.selUser.id,
        this.conversations
      );
    }
  }
};
</script>

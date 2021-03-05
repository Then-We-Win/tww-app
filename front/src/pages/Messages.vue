<template>
  <q-page class="q-pa-md">
    <page-header text="Messages"></page-header>
    <div v-if="!userList">
      <NothingHere :text="text" :image="imgUrl" />
    </div>
    <div v-else>
      <div class="row q-mt-md">
        <div class="q-pa-sm" style="width:300px">
          <search-page v-on:doSearch="search4user"></search-page>
          <messages-user-list
            v-bind:messages="subUserList"
            v-on:selectUser="openMsgThread"
          ></messages-user-list>
        </div>
        <div class="q-pa-sm" style="max-width:700px">
          <messages-conversation
            v-bind:selUser="selectedUser"
          ></messages-conversation>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import pageHeader from "../components/pageHeader";
import searchPage from "../components/searchPage";
import MessagesUserList from "../components/messages/UserList";
import MessagesConversation from "../components/messages/Conversation";
import NothingHere from "../components/NothingHere";

// We're using sample data here. TODO: Model will provide the data from the DB
import * as myData from "../model/messages.js";

import TimeSince from "../mixins/TimeSince";

export default {
  name: "Messages",
  components: {
    pageHeader,
    searchPage,
    MessagesUserList,
    MessagesConversation,
    NothingHere
  },
  mixins: [TimeSince],
  data() {
    return {
      userList: myData.sampleData.messages,
      subUserList: this.formatData(myData.sampleData.messages),
      selectedUser: myData.sampleData.messages[0],
      text: '',
      imgUrl: ''
    };
  },

  methods: {
    formatData: function(users) {
      for (let item of users) {
        let dateObj = new Date(item.lastMsgDate);
        item.time = this.getTimeShort(dateObj);
      }
      return users;
    },

    search4user: function(userName) {
      //TODO: Controller to search DB for user to message, with userName like " + userName
      this.selectedUser = "";
      if (userName.trim().length == 0) {
        this.subUserList = this.formatData(this.userList);
      } else {
        let subList = [];
        for (let item of this.userList) {
          let dataName = item.name.toLowerCase();
          let searchName = userName.toLowerCase();
          if (dataName.indexOf(searchName) >= 0) {
            this.subList.push(item);
          }
        }
        this.subUserList = this.formatData(subList);
      }
    },

    openMsgThread: function(userId) {
      //TODO: Controller to read from DB and get the message thread for userId = " + userId
      for (let item of this.userList) {
        if (item.id == userId) {
          this.selectedUser = item;
        }
      }
    },
  },
};
</script>

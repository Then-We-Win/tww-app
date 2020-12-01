<template>
  <div class="q-pa-md q-px-xl">
    <messages-header></messages-header>
    <div class="row q-mt-md">
      <div class="q-pa-sm" style="width:300px">
        <messages-search v-on:doSearch="search4user"></messages-search>
        <messages-user-list v-bind:messages="subUserList" v-on:selectUser="openMsgThread"></messages-user-list>
      </div>
      <div class="q-pa-sm" style="max-width:700px">
        <messages-conversation v-bind:selUser="selectedUser"></messages-conversation>
      </div>
    </div>
  </div>
</template>

<script>
  import MessagesHeader from '../components/messages/Header';
  import MessagesSearch from '../components/messages/Search';
  import MessagesUserList from '../components/messages/UserList';
  import MessagesConversation from '../components/messages/Conversation';

  // We're using sample data here. TODO: Model will provide the data from the DB
  import * as myData from '../model/messages.js';

  export default {
    name: "Messages",
    components: {
      MessagesHeader,
      MessagesSearch,
      MessagesUserList,
      MessagesConversation
    },
    data() {
      return {
        userList: myData.sampleData.messages,
        subUserList: myData.sampleData.messages,
        selectedUser: myData.sampleData.messages[0]
      }
    },
    methods: {
      search4user: function (userName) {
        //TODO: Controller to search DB for user to message, with userName like " + userName
        this.selectedUser = "";
        if (userName.trim().length == 0) {
          this.subUserList = this.userList;
        } else {
          this.subUserList = [];
          for (let item of this.userList) {
            let dataName = item.name.toLowerCase();
            let searchName = userName.toLowerCase();
            if (dataName.indexOf(searchName) >= 0) {
              this.subUserList.push(item);
            }
          }
        }
      },
      openMsgThread: function (userId) {
        //TODO: Controller to read from DB and get the message thread for userId = " + userId
        for (let item of this.userList) {
          if (item.id == userId) {
            this.selectedUser = item;
          }
        }
      }
    }
  }
</script>

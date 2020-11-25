<!-- TODO: issue #5 container for components -->
<template>
  <div class="q-pa-md q-pl-xl q-pr-xl">
    <messages-header></messages-header>
    <div class="q-mt-md" style="width:300px">
      <messages-search v-on:doSearch="search4user"></messages-search>
      <messages-user-list v-bind:messages="userList" v-on:selectUser="openMsgThread"></messages-user-list>
    </div>
  </div>
</template>

<script>
  import MessagesHeader from '../components/messages/Header';
  import MessagesSearch from '../components/messages/Search';
  import MessagesUserList from '../components/messages/UserList';

  // We're using sample data here. TODO: Model will provide the data from the DB
  import * as myData from '../model/messages.js';

  export default {
    name: "Messages",
    components: {
      MessagesHeader,
      MessagesSearch,
      MessagesUserList
    },
    data() {
      return {
        userList: myData.sampleData.messages
      }
    },
    methods: {
      search4user: function (userName) {
        console.log("TODO: Controller to search DB for user to message, with userName like " + userName);
      },
      openMsgThread: function (userId) {
        console.log("TODO: Controller to read from DB and get the message thread for userId = " + userId);
      }
    }
  }
</script>

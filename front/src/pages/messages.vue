<template>
  <q-page class="q-pa-md">
    <page-header :text="$t('pages.messages.title')"></page-header>
    <div class="row q-col-gutter-md q-mt-md">
      <div class="q-pa-sm col-md-4 col-12">
        <search-page v-on:doSearch="search4user"></search-page>
        <messages-user-list v-bind:messages="subUserList" v-on:selectUser="openMsgThread"></messages-user-list>
      </div>
      <div class="q-pa-sm col-md-8 col-12">
        <messages-conversation v-bind:selUser="selectedUser"></messages-conversation>
      </div>
    </div>
  </q-page>
</template>

<script>
  import PageHeader from '../components/page-header';
  import SearchPage from '../components/search-page';
  import MessagesUserList from '../components/messages/user-list';
  import MessagesConversation from '../components/messages/Conversation';

  // We're using sample data here. TODO: Model will provide the data from the DB
  import * as myData from '../model/messages.js';

  import TimeSince from "../mixins/time-since";

  export default {
    name: "conversations",
    components: {
      PageHeader,
      SearchPage,
      MessagesUserList,
      MessagesConversation
    },
    mixins: [TimeSince],
    data() {
      return {
        userList: myData.sampleData.messages,
        subUserList: this.formatData(myData.sampleData.messages),
        selectedUser: myData.sampleData.messages[0]
      }
    },
    
    methods: {
      formatData: function(users) {
        for (let item of users) {
          let dateObj = new Date(item.lastMsgDate);
          item.time = this.getTimeShort(dateObj);
        }
        return users;
      },

      search4user: function (userName) {
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

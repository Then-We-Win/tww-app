<template>
  <div class="rounded-borders">
      <q-input filled type="search" label="Search Users" standout bottom-slots
          v-model="username" v-on:change="doSearch">
        <template v-slot:prepend>
          <q-icon name="search"/>
        </template>
        <template v-slot:append>
          <q-icon name="filter_list" v-on:click="showHistory"/>
        </template>
      </q-input>
  </div>
</template>

<script>
  export default {
    name: "MessagesSearch",
    data() {
      return {
        username: "",
        history: []
      }
    },
    methods: {
      doSearch: function () {
        let user = this.username;
        if (user != null && user.trim().length > 0) {
          this.history.push(user);
        }
        // allow empty string to signal clearing the search results
        this.$emit('doSearch', user);
      },
      showHistory () {
        console.log("Is this button to show the Search History? " + this.history);
      }
    }
  }
</script>

<template>
  <div>
      <q-input filled type="search" label="Search" class="no-round" standout bottom-slots
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
    name: "searchPage",
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

<style lang="stylus"  scoped>

/deep/ .no-round 
  border-radius: 0px 0px 0 0 !important;

</style>
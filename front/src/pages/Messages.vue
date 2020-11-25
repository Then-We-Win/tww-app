<!-- TODO: issue #5 container for components 
  The layout needs to be done and responsive.
-->
<template>
  <div class="q-pa-md q-pl-xl q-pr-xl">
    <messages-header></messages-header>
    <div class="q-mt-md" style="width:300px">
      <messages-search v-on:doSearch="search4user"></messages-search>
    </div>
  </div>
</template>

<script>
  import MessagesHeader from '../components/messages/Header';
  import MessagesSearch from '../components/messages/Search';

  export default {
    name: "Messages",
    components: {
      MessagesHeader,
      MessagesSearch
    },
    methods: {
      search4user: function (usrnm) {
        console.log("TODO: Controller to search DB for user to message, with username like: " + usrnm);
      }
    }
  }
</script>

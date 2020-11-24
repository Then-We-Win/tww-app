<template>
  <q-page class="q-pa-sm">
    <messages-header></messages-header>
  </q-page>
</template>

<script>
  import MessagesHeader from '../components/messages/Header';

  export default {
    name: "Messages",
    components: {
      MessagesHeader
    }
  }
</script>

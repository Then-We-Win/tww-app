<template>
  <div id="msgHeader">
    <q-toolbar class="text-primary">
      <q-toolbar-title>
        {{text}}
      </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
  export default {
    name: "pageHeader",
    props: ['text'],
  }
</script>

<style scoped>
#msgHeader .q-toolbar {
    min-height: 0;
}
</style>
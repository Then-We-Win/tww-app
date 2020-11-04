<template>
  <div id="q-app">
    <router-view v-if="$config.loaded" />
    <div v-else class="column items-center fixed-center">
      <q-spinner
        color="primary"
        size="8rem"
        :thickness="5"
        style="margin: 1rem"
      />
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('config/hydrate')
  }
}
</script>

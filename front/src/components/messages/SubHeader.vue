<template>
                <q-item id="msgSubHeader" class="row">
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="user.avatar">
                    </q-avatar>
                  </q-item-section>

                  <q-item-section style="min-width: 500px">
                    <q-item-label>{{ user.name }}</q-item-label>
                    <q-item-label caption lines="1">{{ user.title }}</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    {{user.status}}
                  </q-item-section>
                </q-item>
</template>

<script>
  export default {
    name: "MessagesSubheader",
    props: ['user']
  }
</script>

<style lang="scss">
  #msgSubHeader {
    background-color: $grey-4;
  }
</style>
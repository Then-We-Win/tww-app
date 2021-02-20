<template>
  <q-header style="    border-bottom: 1px solid  #dad8d8;"  class="bg-white q-pa-sm">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-toolbar-title
        v-if="$q.screen.gt.xs"
        shrink
        class="row items-center no-wrap"
      >
        <img :src="settings.logo.wide" @click="$bus.emit('route', '')" />
      </q-toolbar-title>


      <q-input
        dense
        standout="bg-primary"
        v-model="search"
        placeholder="Search here"
        style="width:45%"
      >
        <template v-slot:prepend>
          <q-icon v-if="search === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="search = ''"
          />
        </template>
          <template v-slot:append>
          <q-icon name="filter_list"  />
        </template>
      </q-input>
      <q-space />
      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat color="grey-8" icon="textsms">

          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="notifications">

          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>

</template>
<script>
export default {
  name: "todo-header",
  data() {
    return {
      search: "",
      settings: this.$store.state.app.settings
    };
  }
};
</script>

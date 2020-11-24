<template>
  <div class="q-pa-md q-pl-xl">
    <q-toolbar>
      <q-breadcrumbs class="1-pd-sm" style="font-size: 12px">
        <a class="cursor-pointer" @click="$router.go(-1)">
          <q-breadcrumbs-el label="Back" icon="keyboard_arrow_left" />
        </a>
      </q-breadcrumbs>
    </q-toolbar>
    <q-toolbar class="text-primary">
      <q-toolbar-title>
        Messages
      </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
  export default {
    name: "MessagesHeader"
  }
</script>

<style scoped>
.q-toolbar {
    min-height: 0;
}
</style>
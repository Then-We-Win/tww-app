<template>
  <q-input
    dense
    standout="bg-primary"
    v-model="search"
    placeholder="Search Tasks"
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

  </q-input>
</template>
<script>
export default {
  data(){
    return{
      search: "",
    }
  }
}
</script>

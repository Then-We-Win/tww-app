<template>
  <div id="wallHeader">
    <q-tabs
      v-model="tab"
      dense
      align="left"
      :breakpoint="0"
    >
      <q-tab name="wall"> <span class="font-medium text-base capitalize text-grey-8" >Wall</span> </q-tab>
      <q-tab name="campaign"><span class="font-medium text-base text-grey-6 capitalize" >Campaign</span></q-tab>
    </q-tabs>
  </div>
</template>

<script>
export default {
  name: "PostHeader",
  data() {
    return {
      tab: "wall",
    };
  },
};
</script>

<style scoped>

</style>

<template>
  <q-btn
    @click="create()"
    class="text-black float-right bg-grey-3"
    outlined
    padding="8px 40px"
    unelevated
    no-caps
    label="Create Task"
  />
</template>
<script>
export default {
  props: ["createTask"],
  methods: {
    create() {
      this.createTask();
    },
  },
};
</script>

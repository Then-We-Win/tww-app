<template>
  <q-btn
    @click="create()"
    class="text-black float-right bg-grey-3"
    outlined
    padding="8px 40px"
    unelevated
    no-caps
    label="Create To Do"
  />
</template>
<script>
export default {
  props: ["createTodo"],
  methods: {
    create() {
      this.createTodo();
    },
  },
};
</script>

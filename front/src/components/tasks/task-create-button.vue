<template>
  <q-btn @click="create()" class="text-black float-right" style="background: #F2F2F2" rounded padding='8px 40px' unelevated  no-caps label='Create Task'/>
</template>
<script>
export default {
  props: ['createTodo'],
  methods: {
    create(){
      this.createTodo()
    }
  },
}
</script>

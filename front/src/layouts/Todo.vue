<template>
<q-layout view="hHh Lpr fFf" class="bg-grey-1">
  <todo-header></todo-header>


</q-layout>
</template>

<script>
import Todo from '../components/Todo.vue';
import TodoHeader from '../components/todo/todo-header.vue';


    export default {
  components: { Todo, TodoHeader },
        name: "TreeTable",

    }
</script>

<style scoped>

</style>

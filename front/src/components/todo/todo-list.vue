<template>
  <div class="row">
    <div class="flex column items-end">
      <div class="flex full-width q-pt-sm items-center justify-between">
        <search-page></search-page>
        <todo-create-button :createTodo='createTodo'></todo-create-button>
      </div>
      <q-list padding>
        <todo-task :editTodo='editTodo' :todo="todo" :index=index v-for="(todo, index) in todos" :key="index"></todo-task>
      </q-list>
    </div>

  </div>
</template>
<script>
import TodoCreateButton from './todo-create-button.vue'
import searchPage from '../searchPage.vue'
import TodoTask from './todo-task.vue'
export default {
  props: ['todos', 'createTodo', 'editTodo'],
  data(){
    return {

    }
  },
  components:{
    searchPage, TodoTask, TodoCreateButton
  },
}
</script>

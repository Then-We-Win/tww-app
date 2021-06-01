<template>
  <div class="row">
    <div class="flex column items-end">
      <div class="flex full-width q-pt-sm items-center justify-between">
        <search-page></search-page>
        <task-create-button :createTodo='createTodo'></task-create-button>
      </div>
      <q-list padding>
        <task-task :editTodo='editTodo' :todo="todo" :index=index v-for="(todo, index) in todos" :key="index"></task-task>
      </q-list>
    </div>

  </div>
</template>
<script>
import TaskCreateButton from './task-create-button.vue'
import SearchPage from '../search-page.vue'
import TaskTask from './task-task.vue'
export default {
  props: ['todos', 'createTodo', 'editTodo'],
  data(){
    return {

    }
  },
  components:{
    SearchPage, TaskTask, TaskCreateButton
  },
}
</script>

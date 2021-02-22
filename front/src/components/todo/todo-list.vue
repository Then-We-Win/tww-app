<template>
  <div class="row">
    <div class="flex column items-center">
      <div v-if="!$q.screen.gt.sm" class="flex">
         <q-item active clickable v-ripple>
          <q-item-section class="text-weight-bold">
            Current
          </q-item-section>
          <q-item-section side>
            1
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            Done
          </q-item-section>
          <q-item-section side>
            12
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            Archive
          </q-item-section>
          <q-item-section side>
            24
          </q-item-section>
        </q-item>
      </div>
    </div>
    <div class="offset-lg-2 offset-md-2  col-lg-6 col-md-6 col-sm-12 col-xs-12 flex column items-end q-gutter-y-lg" :class="$q.screen.lt.md ? 'q-px-md' : 'q-pr-xl '">
      <todo-create-button :createTodo='createTodo'></todo-create-button>
      <div class="flex full-width items-center justify-between">
        <p class="text-h5 text-weight-thin q-pl-xs q-mb-none">To Do List</p>
        <todo-search></todo-search>
      </div>
      <q-list padding>
        <todo-task :editTodo='editTodo' :todo="todo" :index=index v-for="(todo, index) in todos" :key="index"></todo-task>
      </q-list>
    </div>

  </div>
</template>
<script>
import TodoCreateButton from './todo-create-button.vue'
import TodoSearch from './todo-search.vue'
import TodoTask from './todo-task.vue'
export default {
  props: ['todos', 'createTodo', 'editTodo'],
  data(){
    return {

    }
  },
  components:{
    TodoSearch, TodoTask, TodoCreateButton
  },
}
</script>

<template>
  <q-page class="q-pa-md">
    <page-header text="My assigned tasks"></page-header>
    <task-list :editTodo='editTodo' :createTodo='createTodo' :todos='todos' v-if="!edit_todo && !new_todo" class="q-pa-sm q-mt-sm full-width"></task-list>
    <task-new :saveTodo='saveTodo' :showTodoLandingPage='showTodoLandingPage' v-if="new_todo"></task-new>
    <task-edit :saveEdit='saveEdit' :showTodoLandingPage='showTodoLandingPage' :todo='to_edit_todo' v-if="edit_todo"></task-edit>
  </q-page>
</template>

<script>
import TaskList from 'components/tasks/task-list.vue'
import TaskNew from 'components/tasks/task-new.vue'
import TaskEdit from 'components/tasks/task-edit.vue'
import pageHeader from '../components/page-header.vue'

export default {
  components: { TaskList, TaskNew, TaskEdit, pageHeader },
  name: "TreeTable",
  data(){
    return {
      edit_todo: false,
      new_todo: false,
      to_edit_todo: null,
      edit_index: null,
      todos: [
        {
          completed: false,
          title: "Create a Todo List",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.",
        },
        {
          completed: false,
          title: "Visit TV Anchor",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.",
        },
        {
          completed: false,
          title: "Share campaigns to social media",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.",
        },
        {
          completed: false,
          title: "Create a Todo List",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.",
        },
        {
          completed: false,
          title: "Create a Todo List",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.",
        },
      ],
    };
  },
  methods: {
    createTodo() {
      this.new_todo = true;
    },
    showTodoLandingPage() {
      this.new_todo = false;
      this.edit_todo = false;
    },
    saveTodo(todo) {
      this.todos.unshift(todo);
      this.new_todo = false;
    },
    editTodo(index) {
      this.edit_index = index;
      this.to_edit_todo = this.todos[index];
      this.edit_todo = true;
    },
    saveTodo(todo){
      this.todos.unshift(task)
      this.new_todo = false
    },
    saveEdit(todo) {
      this.todos[this.edit_index] = todo;
      this.edit_todo = false;
    },
    saveEdit(todo){
      this.todos[this.edit_index] = task
      this.edit_todo = false
    }
  },
};
</script>

<style scoped></style>

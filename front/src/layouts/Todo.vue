<template>
<q-layout view="hHh Lpr fFf" class="">
  <todo-header></todo-header>
  <div class="q-mt-xl q-pt-xl">
    <todo-list :todos='todos' v-if="!edit_todo && !new_todo" class="full-width"></todo-list>
    <todo-new v-if="new_todo"></todo-new>
    <todo-edit :todo='to_edit_todo' v-if="edit_todo"></todo-edit>
  </div>
</q-layout>
</template>

<script>
import Todo from '../components/Todo.vue';
import TodoHeader from '../components/todo/todo-header.vue';
import TodoCreateButton from '../components/todo/todo-create-button.vue'
import TodoList from '../components/todo/todo-list.vue'
import TodoNew from '../components/todo/todo-new.vue'
import TodoEdit from '../components/todo/todo-edit.vue'

export default {
  components: { Todo, TodoHeader, TodoCreateButton, TodoList, TodoNew, TodoEdit },
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
              title: 'Task Item 1',
              date: '4:12pm, 12th December to 12:00pm, 14th Decemeber',
              task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.'
          },
          {
              completed: false,
              title: 'Task Item 2',
              date: '4:12pm, 12th December to 12:00pm, 14th Decemeber',
              task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.'
          },
          {
              completed: false,
              title: 'Task Item 3',
              date: '4:12pm, 12th December to 12:00pm, 14th Decemeber',
              task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.'
          },
          {
              completed: false,
              title: 'Task Item 4',
              date: '4:12pm, 12th December to 12:00pm, 14th Decemeber',
              task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.'
          },
          {
              completed: false,
              title: 'Task Item 5',
              date: '4:12pm, 12th December to 12:00pm, 14th Decemeber',
              task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.'
          },
      ]
    }
  },
  created(){
    this.$root.$on('CREATE NEW', ()=>{
      this.new_todo = true
    })
    this.$root.$on('LANDING PAGE', ()=>{
      this.new_todo = false
      this.edit_todo = false
    })
    this.$root.$on('ADD TODO', (todo)=>{
      this.todos.unshift(todo)
      this.new_todo = false
    })
    this.$root.$on('EDIT TODO', (index)=>{
      this.edit_index = index
      this.to_edit_todo = this.todos[index]
      this.edit_todo = true
    })
    this.$root.$on('SAVE EDIT', (todo)=>{
      this.todos[this.edit_index] = todo
      this.edit_todo = false
    })
  }
}
</script>

<style scoped>

</style>

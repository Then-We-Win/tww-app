<template>
  <div>
    <div class="row">
      <div class="col-6 col-md-6">
        <div class="q-pt-md sidebar_headings">To Do List</div>
      </div>
      <div class="col-6 col-md-6 row justify-end">
        <div class="q-pt-md sidebar_headings">
          <q-btn
            no-caps
            size=".8rem"
            color="grey"
            flat
            padding="none"
            label="View All"
          />
        </div>
      </div>
    </div>
    <todo-task
      :todo="todo"
      v-for="(todo, index) in todos"
      :key="index"
    ></todo-task>
  </div>
</template>

<script>
import TodoTask from "../../components/todo/todo-task.vue";

export default {
  components: {
    TodoTask,
  },
  name: "Todo",
  data() {
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
            "",
        },
        {
          completed: false,
          title: "Visit TV Anchor",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "",
        },
        {
          completed: false,
          title: "Share campaigns to social media",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "",
        },
        {
          completed: false,
          title: "Create a Todo List",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "",
        },
        {
          completed: false,
          title: "Create a Todo List",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            " ",
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
    saveEdit(todo) {
      this.todos[this.edit_index] = todo;
      this.edit_todo = false;
    },
  },
};
</script>

<style scoped></style>

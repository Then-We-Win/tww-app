<template>
  <q-page class="q-pa-md">
    <page-header text="My assigned tasks"></page-header>
    <task-list
      :editTask="editTask"
      :createTask="createTask"
      :tasks="tasks"
      v-if="!edit_task && !new_task"
      class="q-pa-sm q-mt-sm full-width"
    ></task-list>
    <task-new
      :saveTask="saveTask"
      :showTaskLandingPage="showTaskLandingPage"
      v-if="new_task"
    ></task-new>
    <task-edit
      :saveEdit="saveEdit"
      :showTaskLandingPage="showTaskLandingPage"
      :task="to_edit_task"
      v-if="edit_task"
    ></task-edit>
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
      edit_task: false,
      new_task: false,
      to_edit_task: null,
      edit_index: null,
      tasks: [
        {
          completed: false,
          title: "Create a Task List",
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
          title: "Create a Task List",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.",
        },
        {
          completed: false,
          title: "Create a Task List",
          date: "4:12pm, 12th December to 12:00pm, 14th Decemeber",
          task:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et imperdiet augue, nec tincidunt dolor. Praesent ut faucibus magna. Pellentesque ultricies odio eu massa accumsan element quis dolor aliquam pellentesque. Mauris eget.",
        },
      ],
    };
  },
  methods: {
    createTask() {
      this.new_task = true;
    },
    showTaskLandingPage() {
      this.new_task = false;
      this.edit_task = false;
    },
    saveTask(task) {
      this.tasks.unshift(task);
      this.new_task = false;
    },
    editTask(index) {
      this.edit_index = index;
      this.to_edit_task = this.tasks[index];
      this.edit_task = true;
    },
    saveTask(task){
      this.tasks.unshift(task)
      this.new_task = false
    },
    saveEdit(task) {
      this.tasks[this.edit_index] = task;
      this.edit_task = false;
    },
  },
};
</script>

<style scoped></style>

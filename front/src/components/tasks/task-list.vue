<template>
  <div class="row">
    <div class="flex column items-end">
      <div class="flex full-width q-pt-sm items-center justify-between">
        <search-page></search-page>
        <task-create-button :createTask='createTask'></task-create-button>
      </div>
      <q-list padding>
        <task-task :editTask='editTask' :task="task" :index=index v-for="(task, index) in tasks" :key="index"></task-task>
      </q-list>
    </div>

  </div>
</template>
<script>
import TaskCreateButton from './task-create-button.vue'
import SearchPage from '../search-page.vue'
import TaskTask from './task-task.vue'
export default {
  props: ['tasks', 'createTask', 'editTask'],
  data(){
    return {

    }
  },
  components:{
    SearchPage, TaskTask, TaskCreateButton
  },
}
</script>

<template>
  <span>
    <q-list bordered class="bg-white text-black">
      <q-item v-for="task in tasks" :key="task.id">
        <q-item-section avatar>
          <q-checkbox
            :id="task.id"
            v-model="task.completed"
            color="primary"
          />
        </q-item-section>
        <q-item-section class="text-body1 text-wrap"
                        :style="task.completed?{'textDecoration':'line-through'}:{}">

          <q-item-label>{{ task.task }}</q-item-label>
          <q-item-label caption class="text-grey-8">{{ task.task_desc }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn icon="chat" round flat></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </span>
</template>

<script>
    export default {
        name: "Task",
        data() {
            return {
                tasks: [
                    {
                        id: 1,
                        completed: false,
                        task: 'Task Item 1',
                        task_desc: 'Task Item 1 Desc'
                    },
                    {
                        id: 2,
                        completed: false,
                        task: 'Task Item 2',
                        task_desc: 'Task Item 2 Desc'
                    },
                    {
                        id: 3,
                        completed: false,
                        task: 'Task Item 3',
                        task_desc: 'Task Item 3 Desc'
                    },
                    {
                        id: 4,
                        completed: false,
                        task: 'Task Item 4',
                        task_desc: 'Task Item 4 Desc'
                    },
                    {
                        id: 5,
                        completed: false,
                        task: 'Task Item 5',
                        task_desc: 'Task Item 5 Desc'
                    },
                    {
                        id: 6,
                        completed: false,
                        task: 'Task Item 6',
                        task_desc: 'Task Item 6 Desc'
                    },
                    {
                        id: 7,
                        completed: false,
                        task: 'Task Item 7',
                        task_desc: 'Task Item 7 Desc'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>

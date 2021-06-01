<template>
  <div>
    <q-item class="q-pl-none q-mb-md">
      <q-item-section avatar top>
        <q-checkbox
          :id="task.id"
          v-model="task.completed"
          color="primary"
        />
      </q-item-section>

      <q-item-section class="text-body1 text-wrap q-mt-sm" :class="task.completed?'text-strike	':''">
        <q-item-label class="text-h6">{{ task.title}}</q-item-label>
        <q-item-label caption class="text-grey-6 q-pt-xs">{{ task.date}}</q-item-label>
        <p class="text-justify text-body2 q-my-md text-grey-8 text-weight-regular">
          {{ task.task }}
        </p>
        <div class="flex q-mt-sm q-gutter-x-md items-center">
          <q-avatar size='sm'>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="">
          </q-avatar>
          <q-avatar size='sm'>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="">
          </q-avatar>
          <p class="cursor-pointer text-caption text-weight-bold q-mb-none">Assign Users</p>
        </div>
      </q-item-section>

      <q-item-section side top v-if="editTask"> 
        <q-btn @click="edit()" class="text-black text-body2" flat label='edit'/>
      </q-item-section>

    </q-item>
  </div>
</template>
<script>
export default {
  props: ['task', 'index', 'editTask'],
  data() {
    return {

    }
  },
  methods: {
    edit(){
      this.editTask(this.index)
    }
  },
}
</script>

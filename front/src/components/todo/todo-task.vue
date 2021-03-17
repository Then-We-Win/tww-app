<template>
  <div>
    <q-item class="q-pl-none q-mb-md">
      <q-item-section avatar top>
        <q-checkbox
          :id="todo.id"
          v-model="todo.completed"
          color="primary"
        />
      </q-item-section>

      <q-item-section class="text-body1 text-wrap" :class="todo.completed?'text-strike	':''">
        <q-item-label class="text-h6">{{ todo.title}}</q-item-label>
        <q-item-label caption class="text-grey-8 q-pt-xs">{{ todo.date}}</q-item-label>
        <q-item-label class="text-justify q-pt-md">{{todo.task}}</q-item-label>
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

      <q-item-section side top v-if="editTodo"> 
        <q-btn @click="edit()" class="text-black text-weight-light" flat label='edit'/>
      </q-item-section>

    </q-item>
  </div>
</template>
<script>
export default {
  props: ['todo', 'index', 'editTodo'],
  data() {
    return {

    }
  },
  methods: {
    edit(){
      this.editTodo(this.index)
    }
  },
}
</script>

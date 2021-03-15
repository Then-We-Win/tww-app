<template>
  <div
    class=" full-width"
    :class="$q.screen.lt.sm ? 'q-ma-sm' : 'q-ma-xl q-px-xl'"
  >
    <div
      class=""
      :class="$q.screen.lt.sm ? 'q-ma-sm q-px-sm' : 'q-ma-xl q-px-xl'"
    >
      <p @click="goBack()" class="text-grey-8 text-h6 cursor-pointer">
        <q-icon name="navigate_before" />Back
      </p>
      <p class="text-h3 text-weight-light">Add To Do</p>
      <div class="q-mt-xl">
        <q-form ref="add_form" class="row q-col-gutter-x-md q-col-gutter-y-lg">
          <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <p class="text-h6 text-weight-light">Task Name</p>
            <q-input
              v-model="todo.title"
              filled
              label="Task Name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <p class="text-h6 text-weight-light">Date And Time</p>
            <q-input
              v-model="todo.date"
              filled
              label="Date And Time"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
              S
            />
          </div>
          <div class="col-12">
            <p class="text-h6 text-weight-light">Details</p>
            <q-input
              v-model="todo.task"
              label="Details"
              filled
              type="textarea"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <p class="text-h6 text-weight-light">Assign To User</p>
            <q-select
              filled
              v-model="selected_users"
              multiple
              :options="all_users"
              label="Select Users"
            >
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="scope.opt.avatar" alt="" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ scope.opt.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
          <div class="col-12">
            <div class="flex justify-end q-gutter-x-md">
              <q-btn
                size="lg"
                @click="goBack()"
                class="q-mt-xl text-black float-right"
                style="background: #F2F2F2"
                rounded
                padding="8px 40px"
                unelevated
                no-caps
                label="Cancel"
              />
              <q-btn
                size="lg"
                @click="save()"
                class="q-mt-xl text-white float-right"
                style="background: #4F4F4F"
                rounded
                padding="8px 40px"
                unelevated
                no-caps
                label="Save"
              />
            </div>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["showTodoLandingPage", "saveTodo"],
  data() {
    return {
      todo: {
        completed: false,
        title: "",
        date: "",
        task: "",
      },
      all_users: [
        {
          label: "User One",
          value: "User One",
          avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
        },
        {
          label: "User One",
          value: "User Two",
          avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
        },
        {
          label: "User One",
          value: "User Three",
          avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
        },
      ],
      selected_users: null,
    };
  },
  methods: {
    goBack() {
      this.showTodoLandingPage();
    },
    save() {
      this.$refs.add_form.validate().then((success) => {
        if (success) {
          this.saveTodo(this.todo);
        }
      });
    },
  },
};
</script>

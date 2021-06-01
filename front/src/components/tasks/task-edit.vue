<template>
  <div
    class="full-width"
    :class="$q.screen.lt.sm || $route.name == 'campaign' ? 'q-ma-sm' : 'q-ma-xl q-px-xl'"
  >
    <div
      class=""
      :class="$q.screen.lt.sm || $route.name == 'campaign' ? 'q-ma-sm q-px-sm' : 'q-ma-xl q-px-xl'"
    >
      <p @click="goBack()" class="text-grey-8 q-my-md cursor-pointer">
        <q-icon name="navigate_before" />Back
      </p>
      <p class="text-h4 text-weight-light">Edit Task</p>
      <div class="q-mt-sm">
        <q-form ref="add_form" class="row q-col-gutter-x-md q-col-gutter-y-xs">
          <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <p class="text-body1 text-weight-light">Task Name</p>
            <q-input
              v-model="task.title"
              filled
              label="Task Name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <p class="text-body1 text-weight-light">Date And Time</p>
            <q-input
              v-model="task.date"
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
            <p class="text-body1 text-weight-light">Details</p>
            <q-input
              v-model="task.task"
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
            <p class="text-body1 text-weight-light">Assign To User</p>
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
                class="q-mt-xl text-black float-right bg-grey-3"
                padding="8px 40px"
                unelevated
                no-caps
                label="Cancel"
              />
              <q-btn
                size="lg"
                @click="save()"
                class="q-mt-xl text-white float-right bg-grey-8"
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
  props: ["task", "showTaskLandingPage", "saveEdit"],
  data() {
    return {
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
      this.showTaskLandingPage();
    },
    save() {
      this.$refs.add_form.validate().then((success) => {
        if (success) {
          this.saveEdit(this.task);
        }
      });
    },
  },
};
</script>

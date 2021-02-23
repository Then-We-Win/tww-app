<template>
  <div class="row items-center justify-end">
    <template v-if="mutableRegisterPage">
      <span class="text-grey-9">{{ switchButtonText.loginText }}</span>
      <q-btn
        flat
        no-caps
        color="primary"
        label="Log In"
        class="q-ml-sm"
        @click="switchPage"
      />
    </template>

    <template v-else>
      <span class="text-grey-9">{{ switchButtonText.registerText }}</span>
      <q-btn
        flat
        no-caps
        color="primary"
        label="Sign up"
        class="q-ml-sm"
        @click="switchPage"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'QAuthorizationSwitchButton',
  props: {
    switchButtonText: Object,
    registerPage: Boolean
  },
  data () {
    return {
      mutableRegisterPage: this.registerPage
      // registerPage: false
    }
  },
  methods: {
    switchPage () {
      this.$emit('switchPage', this.mutableRegisterPage = !this.mutableRegisterPage)
    }
  }
}
</script>

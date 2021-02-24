<template>
  <q-form
    @submit="handleLogin"
    class="q-gutter-md q-mt-md"
  >
    <q-input
      filled
      type="email"
      :value="emailLogin"
      @input="$emit('update:email-login', $event)"
      label="Email"
      lazy-rules
      :rules="[
        val => val !== null && val !== '' || 'Please, type your email'
      ]"
    />

    <q-input
      filled
      type="password"
      :value="passwordLogin"
      @input="$emit('update:password-login', $event)"
      label="Password"
      lazy-rules
      :rules="[
        val => val !== null && val !== '' || 'Please, type your password'
      ]"
    />
    <div class="row justify-center">
      <q-btn
        label="Sign In"
        type="submit"
        no-caps
        style="background: #188cc1; color: white"
      />
    </div>
  </q-form>
</template>

<script>

import props from '../mixins/props'
export default {
  name: 'QAuthorizationLoginForm',
  props: {
    ...props.login
  },
  methods: {
    handleLogin () {
      this.$emit('handleLogin', {
        emailLogin: this.emailLogin,
        passwordLogin: this.passwordLogin
      })
    }
  }
}
</script>

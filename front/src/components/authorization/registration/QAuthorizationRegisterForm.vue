<template>
  <q-form
    @submit="onSubmitRegister"
    class="q-gutter-md q-mt-md"
  >
    <div class="row no-wrap">
      <q-input
        filled
        :value="registerFormFirstName"
        @input="$emit('update:register-form-first-name', $event)"
        label="First Name"
        lazy-rules
        class="col-6 q-pr-md"
        :rules="[ val => val && val.length > 0 || 'Please provide your first name']"
      />

      <q-input
        filled
        :value="registerFormLastName"
        @input="$emit('update:register-form-last-name', $event)"
        label="Last Name"
        lazy-rules
        class="col-6 q-pl-md"
        :rules="[
          val => val !== null && val !== '' || 'Please provide your last name'
        ]"
      />
    </div>

    <q-input
      filled
      type="email"
      :value="registerFormEmail"
      @input="$emit('update:register-form-email', $event)"
      label="Email"
      lazy-rules
      :rules="[
        val => val && val.length > 0 || 'The email field must be a valid email'
      ]"
    />

    <q-input
      filled
      type="password"
      :value="registerFormPassword"
      @input="$emit('update:register-form-password', $event)"
      label="Choose a Password"
      lazy-rules
      :rules="[
        val => val !== null && val !== '' || 'The password field is required'
      ]"
    />
    <div class="row justify-center">
      <q-btn
        label="Submit"
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
  name: 'QAuthorizationRegisterForm',
  props: {
    ...props.registration
  },
  methods: {
    onSubmitRegister () {
      this.$emit('onSubmitRegister', {
        firstName: this.registerFormFirstName,
        lastName: this.registerFormLastName,
        email: this.registerFormEmail,
        password: this.registerFormPassword
      })
    }
  }
}
</script>


export default {
  computed: {
    $_registrationProps () {
      return {
        'register-form-first-name': this.registerFormFirstName,
        'register-form-last-name': this.registerFormLastName,
        'register-form-email': this.registerFormEmail,
        'register-form-password': this.registerFormPassword
      }
    }
  },
  created () {
    this.$_registrationEvents = {
      'update:register-form-first-name': val => this.$emit('update:register-form-first-name', val),
      'update:register-form-last-name': val => this.$emit('update:register-form-last-name', val),
      'update:register-form-email': val => this.$emit('update:register-form-email', val),
      'update:register-form-password': val => this.$emit('update:register-form-password', val)
    }
  }
}


export default {
  computed: {
    $_loginProps () {
      return {
        'email-login': this.emailLogin,
        'password-login': this.passwordLogin
      }
    }
  },
  created () {
    this.$_loginEvents = {
      'update:email-login': val => this.$emit('update:email-login', val),
      'update:password-login': val => this.$emit('update:password-login', val)
    }
  }
}

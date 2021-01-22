<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <QAuthorization style="width: 100%"
          :company-info="companyInfo"
          :tag-line="tagLine"
          :email-login.sync="credentials.identifier"
          :password-login.sync="credentials.password"
          :register-page-description="registerPageDescription"
          :reviews-slide="reviewsSlide"
          :show-right-side="showRightSide"
          :privacy-text="privacyText"
          :slide="slideNumber"
          :switch-button-text="switchButtonText"
          @onSubmitRegister="onSubmitRegister"
          @handleLogin="handleLogin"
          :register-form-first-name.sync="registerFormFirstName"
          :register-form-last-name.sync="registerFormLastName"
          :register-form-email.sync="registerFormEmail"
          :register-form-password.sync="registerFormPassword"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import QAuthorization from '../components/authorization/QAuthorization'
export default {
  components: {
    QAuthorization
  },
  data () {
    return {
      companyInfo: {
        logo: 'statics/logo.png',
        name: 'Hope'
      },
      tagLine: {
        main: 'Tagline goes here',
        caption: 'Really long, but not too long message saying why you should create an account'
      },
      registerFormFirstName: '',
      registerFormLastName: '',
      registerFormEmail: '',
      registerFormPassword: '',
      credentials: {
        identifier: 'authenticated@test.com',
        password: 'password'
      },
      registerPageDescription: {
        main: 'Start your journey',
        caption: 'First month free. No credit card required, no software to download.'
      },
      slideNumber: 0,
      reviewsSlide: [
        {
          avatar: 'https://cdn.quasar.dev/img/avatar.png',
          text: "Wow, what a UI! I can't believe how attractive this is. You get a $5,000,000 raise",
          name: 'Really important person',
          company: 'Hope'
        },
        {
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          text: "This is a cost effective solution that's already saved me thousands.",
          name: 'Really important person 2',
          company: 'Some company'
        },
        {
          avatar: 'https://cdn.quasar.dev/img/avatar.png',
          text: "Wow, what a UI! I can't believe how attractive this is. You get a $5,000,000 raise",
          name: 'Really important person 3',
          company: 'Some other company'
        }
      ],
      showRightSide: true,
      privacyText: 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.',
      switchButtonText: {
        loginText: 'Already awesome?',
        registerText: 'Not a member?'
      }
    }
  },
  methods: {
    onSubmitRegister (data) {
      // this.debug('Submitted Register Data', data)
      this.registerFormFirstName = data.registerFormFirstName
      this.registerFormLastName = data.registerFormLastName
      this.registerFormEmail = data.registerFormEmail
      this.registerFormPassword = data.registerFormPassword
    },
    handleLogin (data) {
      this.$auth.login(this.credentials.identifier, this.credentials.password)
        .then(result => {
          console.log('Login error...', JSON.parse(JSON.stringify(result)))
          this.$store.commit('replaceUser', result)
          // this.debug('Login success', result)
          this.$q.notify({ type: 'positive', message: 'Login successful' })
          const nextPage = (localStorage.getItem('pathToLoadAfterLogin') && localStorage.getItem('pathToLoadAfterLogin') !== 'login') ? localStorage.getItem('pathToLoadAfterLogin') : 'home'
          localStorage.removeItem('pathToLoadAfterLogin')
          this.$router.push({ name: nextPage })
        })
        .catch(result => {
          console.log('Login error', result)
          // const err = result.response.status
          // const message = this.$te(`login.errors.${err}`) ? this.$t(`login.errors.${err}`) : this.$t('login.errors.default')
          // this.$q.notify({ type: 'negative', message })
        })
    }
  }
}
</script>

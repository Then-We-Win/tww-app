<template>
  <div class="row no-wrap text-black">
    <q-page
      padding
      class="row"
      :style="{ width: (breakPoint || !showRightSide) ? '100%' : '50%'}"
    >
      <div class="full-width">
        <QAuthorizationSwitchButton
          @switchPage="changePage"
          :switch-button-text="switchButtonText"
          :register-page="registerPage"
        />
        <div class="row flex-center q-authorization__section-wrapper">
          <div
            class="q-authorization__form-wrapper"
            :style="{ width: breakPoint ? '90%' : '80%'}"
          >
            <div class="row justify-center items-center q-mb-lg">
              <div class="q-mr-sm">
                <q-img
                  :src="companyInfo.logo"
                  style="width: 150px"
                  contain
                />
              </div>
            </div>
            <!-- Register page -->
            <div v-if="registerPage">
              <QAuthorizationRegisterPage
                :register-page-description="registerPageDescription"
                :privacy-text="privacyText"
                @onSubmitRegister="onSubmitRegister"
                v-on="$_registrationEvents"
                v-bind="$_registrationProps"
              />
            </div>

            <!-- Login Page -->
            <div v-else>
              <QAuthorizationLoginForm
                v-on="$_loginEvents"
                v-bind="$_loginProps"
                @handleLogin="handleLogin"
              />
            </div>
          </div>
        </div>
      </div>
    </q-page>

    <q-page
      padding
      class="row flex-center q-authorization__secondary-section"
      :style="{ display: breakPoint ? 'none' : ''}"
      v-if="showRightSide"
    >
      <div>
        <div class="q-authorization__readable-length">
          <div class="text-h4 text-white">
            {{ tagLine.main }}
          </div>
          <div class="text-body1 text-grey-3">
            {{ tagLine.caption }}
          </div>
        </div>

        <div class="row justify-end">
          <QAuthorizationSlider
            :slide="slide"
            :reviews-slide="reviewsSlide"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import QAuthorizationSwitchButton from './QAuthorizationSwitchButton'
import QAuthorizationRegisterPage from './registration/QAuthorizationRegisterPage'
import QAuthorizationLoginForm from './login/QAuthorizationLoginForm'
import QAuthorizationSlider from './QAuthorizationSlider'
import RegistrationMixin from './mixins/registration'
import LoginMixin from './mixins/login'
import props from './mixins/props'
export default {
  name: 'QAuthorization',
  mixins: [RegistrationMixin, LoginMixin],
  props: {
    companyInfo: Object,
    tagLine: Object,
    registerPageDescription: Object,
    slide: Number,
    reviewsSlide: Array,
    showRightSide: Boolean,
    privacyText: String,
    switchButtonText: Object,
    ...props.login,
    ...props.registration
  },
  components: { QAuthorizationSwitchButton, QAuthorizationRegisterPage, QAuthorizationLoginForm, QAuthorizationSlider },
  data () {
    return {
      registerPage: false
    }
  },
  methods: {
    changePage (data) {
      this.registerPage = data
    },
    onSubmitRegister (data) {
      this.$emit('onSubmitRegister', data)
    },
    handleLogin (data) {
      this.$emit('handleLogin', data)
    }
  },
  computed: {
    breakPoint () {
      return this.$q.screen.width < 1040
    }
  }
}
</script>

<style lang="stylus">
.q-authorization {
  &__section-wrapper {
    height: 95%;
  }

  &__form-wrapper {
    max-width: 35rem;
  }

  &__secondary-section {
    width: 50%;
    background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  }

  &__readable-length {
    max-width: 80%;
  }
}
</style>

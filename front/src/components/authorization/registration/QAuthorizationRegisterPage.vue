<template>
  <div>
    <!-- Desription -->
    <div class="text-h3 text-blue-grey-10">
      {{ registerPageDescription.main }}
    </div>
    <div class="text-subtitle1 text-grey-8 q-mt-md">
      {{ registerPageDescription.caption }}
    </div>

    <!-- Register form -->
    <QAuthorizationRegisterForm
      v-on="$_registrationEvents"
      v-bind="$_registrationProps"
      @onSubmitRegister="onSubmitRegister"
    />
    <div class="text-caption text-grey-5 q-authorization__recaptcha-warning">
      {{ privacyText }}
    </div>
  </div>
</template>

<script>
import QAuthorizationRegisterForm from './QAuthorizationRegisterForm'
import RegistrationMixin from '../mixins/registration'
import props from '../mixins/props'
export default {
  name: 'QAuthorizationRegisterPage',
  mixins: [RegistrationMixin],
  props: {
    registerPageDescription: Object,
    privacyText: String,
    ...props.registration
  },
  components: { QAuthorizationRegisterForm },
  data () {
    return {
    }
  },
  methods: {
    onSubmitRegister (data) {
      this.$emit('onSubmitRegister', data)
    }
  }
}
</script>

<style lang="stylus">
.q-authorization {
  &__recaptcha-warning {
    margin-top: 50px;
    width: 50%;
  }
}
</style>

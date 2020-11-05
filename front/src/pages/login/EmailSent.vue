<template>
  <div class="drawer-content column justify-center q-pa-md">
    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn round color="white" size="lg" flat icon="arrow_back" @click="$router.push('/login')" />
    </q-page-sticky>
    <div>
      <div class="title">Email Sent</div>
      <div class="intro">We've sent a password reset link to your email. Please check your inbox.</div>
      <div class="column">
        <div class="q-pt-lg">
          <q-btn flat no-caps class="sign-in full-width" @click="$router.push('/sign-in')">Sign in</q-btn>
          <div class="text-center field-text q-pt-md" @click="$router.push('/forgot-password')">
            <u>Resend link again</u>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ph: ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.drawer-content
  height 100%
  width 55%
  padding-top 100px
  margin auto

.title
  font-weight 800
  font-size 2.5em
  color white
  padding-bottom 20px

.intro
  font-size 1em
  color #b7b7b7
  padding-bottom 24px

.field-text
  font-size 1em
  color #b7b7b7

/deep/ .q-btn
  border-radius 15px
  padding 10px 0px 10px 0px

.field-box
  border-radius 15px

/deep/.q-field__control
  height 45px
  border-radius 10px

.sign-in
  color #333333
  background-color white

</style>

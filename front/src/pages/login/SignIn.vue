<template>
  <div class="drawer-content column justify-center q-pa-md">
    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn round color="white" size="lg" flat icon="arrow_back" @click="$router.push('/login')" />
    </q-page-sticky>
    <div>
      <div class="title">Sign In</div>
      <div
        class="intro"
      >Welcome to Then We Win, lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt distinctio explicabo aperiam laborum voluptatem officia praesentium nisi cum? Aperiam.</div>
      <div class="column">
        <div>
          <div class="field-text q-pb-sm q-pt-md">Username/Email ID</div>
          <q-input
            v-model="ph"
            filled
            bg-color="white"
            placeholder="john.wick@gmail.com"
            stack-label
          />
        </div>
        <div>
          <div class="field-text q-pb-sm q-pt-md">Password</div>
          <q-input v-model="ph" filled bg-color="white" placeholder="*******" stack-label />
        </div>
        <div class="q-pt-lg">
          <q-btn flat no-caps class="sign-in full-width" @click="$router.push('/two-fa')">Sign in</q-btn>
          <div class="text-center field-text q-pt-md cursor-pointer" @click="$router.push('/forgot-password')">
            <u>Forgot Password?</u>
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

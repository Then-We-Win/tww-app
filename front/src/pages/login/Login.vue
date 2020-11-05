<template>
  <div class="drawer-content column justify-center q-pa-md">
    <div class="title">Then We Win</div>
    <div
      class="intro"
    >Welcome to Then We Win, lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt distinctio explicabo aperiam laborum voluptatem officia praesentium nisi cum? Aperiam.</div>
    <div class="column">
      <q-btn flat no-caps class="sign-in full-width" @click="$router.push('/sign-in')">Sign in</q-btn>
      <q-btn flat no-caps class="sign-up full-width" @click="$router.push('/sign-up')">Sign up</q-btn>
    </div>
  </div>
</template>

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

/deep/ .q-btn
  border-radius 15px
  padding 10px 0px 10px 0px

.sign-in
  background-color #828282
  color white
  margin-bottom 10px

.sign-up
  color #333333
  background-color white

</style>

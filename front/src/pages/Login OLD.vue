<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="../statics/logo.png">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Log in</div>
              {{errorMsg}}
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="credentials.identifier" label="Username" lazy-rules />
              <q-input type="password" filled v-model="credentials.password" label="Password" lazy-rules />
              <div>
                <q-btn label="Login" @click="$bus.emit('login', credentials)" type="button" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    events: {
      loggedIn () {
        this.$bus.emit('route', '')
      },
      loginFailed (errorMsg) {
        this.errorMsg = errorMsg
      }
    },
    data() {
      return {
        settings: this.$store.state.app.settings,
        errorMsg: '',
        credentials: {
          user: 'demo',
          pass: '123'
        }
      }
    },
  }
</script>

<style>
  .bg-image {
   background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
  }
</style>

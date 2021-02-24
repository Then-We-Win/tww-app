<template>
  <div id="q-app">
    <template v-if="$store.state.system.loaded">
      <router-view />
    </template>
    <template v-else>
      <inner-loading :showing="true" />
    </template>
  </div>
</template>

<script>
import innerLoading from 'components/InnerLoading.vue'
export default {
  name: 'App',
  components: { innerLoading },
  events: {
    // Handles all login attempts..
    'app.login' (credentials) {
      this.$auth.login(credentials.identifier, credentials.password)
        .then(result => {
          this.$store.commit('replaceUser', result)
          console.log('Login success', result)
          this.$q.notify({ type: 'positive', message: 'Login successful' })
          const nextPage = (localStorage.getItem('pathToLoadAfterLogin') && localStorage.getItem('pathToLoadAfterLogin') !== 'login') ? localStorage.getItem('pathToLoadAfterLogin') : 'home'
          localStorage.removeItem('pathToLoadAfterLogin')
          this.$router.push({ name: nextPage })
        })
        .catch(result => {
          console.log('Login error', JSON.parse(JSON.stringify(result)))
          this.$q.notify({ type: 'negative', message: 'Cannot log in' })
        })
      
    },
    // Handles all logout attempts...
    'app.logout' () {
      this.$auth.logout()
    },
    // Handles all routing...
    'app.route' (name) {
      console.log(`Routing to "${name}"`)
      if (this.$route.name !== name) this.$router.push({ name })
    }
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    console.log('hydrate')
     this.$auth.loginUsingJWT()
      .then(result => {
        this.$store.commit('replaceUser', result)
        console.log('Logged in via JWT', result)
      })
      .catch(e => {
        console.log('Couldn\'t login via JWT:', e)
      })
      .finally(() => {
        this.$store.commit('replaceApp', {
          loaded: true,
          settings: {
            logo: {
              wide: '../statics/logo40.png',
              square: ''
            },
          menu: {
            links: [
              {icon: 'home', text: 'Home', color: 'text-grey-8', action: 'app.route', payload: 'home'},
              {icon: 'message', text: 'Messages', color: 'text-grey-8', action: 'app.route', payload: 'conversations'},
              {icon: 'library_add_check', text: 'Tasks', color: 'text-grey-8', action: 'app.route', payload: 'todo'},
              {type: 'separator'},
              {icon: 'live_help', text: 'Help', color: 'text-grey-8', action: 'app.route', payload: 'invite'},
              {icon: 'book', text: 'Learn', color: 'text-grey-8', action: 'app.route', payload: 'learn'},
              {type: 'separator'},
              {icon: 'logout', text: 'Logout', color: 'text-grey-8', action: 'app.logout'}
            ]
          }
          }
        })
        this.$store.commit('loaded', true)
        this.$router.push({ name: 'home' })
        console.log('LOADED', this.$app, this.$user, this.$ee, this.$store.state)
        this.loading = false
        console.log('test?', this.$store.state.app.settings.logo, this.$app)
      })
  }
}
</script>

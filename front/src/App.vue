<template>
  <div id="q-app">
    <div v-if="loading">Loading, please wait...</div>
    <router-view v-else />
  </div>
</template>

<script>
export default {
  name: 'App',
  events: {
    // Handles all login attempts..
    login (credentials) {
      // TODO: get this user record from the database...
      const user = {
        loggedIn: true,
        user: 'demo',
        pass: '123',
        name: {
          first: 'Charlie',
          last: 'Vounteer'
        },
        conversations: [
          { from: { id: 8723, name: { first: 'Another', last: 'Volunteer' }}, message: 'Hello!' },
          { from: { id: 8723, name: { first: 'Another', last: 'Volunteer' }}, message: 'Hello!' }
        ],
        updates: [
          { type: 'system', payload: { text: 'Then We Win Website released', image: '', contents: '' }}
        ],
        campaigns: [
          { id: 1, slug: 'truth-in-broadcasting' }
        ]
      }
      // TODO: This is a fake/demo login process... replace it.
      if (user.user === credentials.user && user.pass === credentials.pass) {
        this.$store.commit('replaceUser', user)
        this.$bus.emit('loggedIn')
      } else {
        this.$bus.emit('loginFailed', 'Invalid Username/Password')
      }
      
    },
    // Handles all logout attempts...
    logout () {
      this.$store.commit('replaceUser', { loggedIn: false })
      window.location.reload()
    },
    // Handles all routing...
    route (e) {
      console.log(`Routing to "${e}"`)
      this.$router.push({ path: '/' + e })
    }
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    console.log('app')
      this.$store.commit('replaceApp', {
        loaded: true,
        settings: {
          logo: {
            wide: '../statics/logo40.png',
            square: ''
          },
         menu: {
          links: [
            {icon: 'home', text: 'Home', color: 'text-grey-8', action: 'route', payload: 'home'},
            {icon: 'message', text: 'Messages', color: 'text-grey-8', action: 'route', payload: 'conversations'},
            {icon: 'library_add_check', text: 'Tasks', color: 'text-grey-8', action: 'route', payload: 'todo'},
            {type: 'separator'},
            {icon: 'live_help', text: 'Help', color: 'text-grey-8', action: 'route', payload: 'invite'},
            {icon: 'book', text: 'Learn', color: 'text-grey-8', action: 'route', payload: 'learn'},
            {type: 'separator'},
            {icon: 'logout', text: 'Logout', color: 'text-grey-8', action: 'logout'}
          ]
         }
        }
      })
      console.log('LOADED', this.$app, this.$user, this.$ee, this.$store.state)
      this.loading = false
      console.log('test?', this.$store.state.app.settings.logo, this.$app)
  }
}
</script>

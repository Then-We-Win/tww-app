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
    this.$auth.loginUsingJWT()
    .then(result => {
      this.$store.commit('replaceUser', result)
      this.debug('Logged in via JWT', result)
    })
    .catch(e => {
      this.debug('Couldn\'t login via JWT:', e)
    })
    .finally(() => {
      this.$auth.hydrate(settings.sourcesync.slug)
        .then(result => {
          // If the user has some settings related to this app, apply them...
          if (this.$store.state.user.role) {
            const userAppSettings = JSON.parse(JSON.stringify(
              this.$store.state.user.settings.apps.settings[settings.sourcesync.slug]
            ))
            this.debug(`user settings for this app (${settings.sourcesync.slug})`, userAppSettings)
            // Merge respective user app settings into the application state...
            result = this.$ee.util.merge(result, { settings: userAppSettings })
          }
          this.$store.commit('replaceApp', result)
          this.debug('Application state loaded', result)
          this.$store.commit('loaded', true)
          this.$router.push({ name: 'home' })
        })
    })
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
            {icon: 'add', text: 'Add', type: 'button', action: 'route', payload: 'new' },
            {icon: 'move_to_inbox', text: 'Campaign Home', color: 'text-red', action: 'route', payload: 'home'},
            {icon: 'group', text: 'People', color: 'text-green', action: 'route', payload: 'people'},
            {icon: 'message', text: 'Conversations', color: 'text-indigo-8', action: 'route', payload: 'conversations'},
            {icon: 'flag', text: 'Updates', color: 'text-orange', action: 'route', payload: 'updates'},
            {icon: 'forum', text: 'Tasks', color: 'text-teal', action: 'route', payload: 'tasks'},
            {type: 'separator'},
            {icon: 'person_add', text: 'Invite', color: 'text-blue', action: 'route', payload: 'invite'},
            {type: 'separator'},
            {icon: 'label', text: 'Resoruces', color: 'text-indigo-8', action: 'route', payload: 'resources'},
            {icon: 'book', text: 'Learn', color: 'text-brown-8', action: 'route', payload: 'learn'},
            {icon: 'logout', text: 'Logout', color: 'text-red', action: 'logout'}
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

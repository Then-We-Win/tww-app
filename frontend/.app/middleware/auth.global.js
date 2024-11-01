import { createDirectus, graphql, authentication, realtime, rest } from '@directus/sdk'

// Create a reactive auth state
const useAuthState = () => useState('auth', () => ({
  isAuthenticated: false,
  user: null
}))

function getSettings() {
  let settings
  const baseSettings = { username: '', password: '' }

  function resetSettings() {
    settings = JSON.stringify(baseSettings)
    window.localStorage.setItem('userSettings', settings)
  }

  if (!window.localStorage.userSettings) resetSettings()
  
  try {
    settings = JSON.parse(window.localStorage.userSettings)
  } catch (e) {
    resetSettings()
    return baseSettings
  }

  if ((!settings.username || !settings.password) && Object.keys(settings).length !== 2) {
    resetSettings()
    return baseSettings
  }
  return settings
}

export default defineNuxtRouteMiddleware(async (to) => {
  const { public: config } = useRuntimeConfig()
  const nuxtApp = useNuxtApp()
  const authState = useAuthState()

  // Skip middleware if going to login page
  if (to.path === '/login') {
    return
  }

  // Create Directus client if it doesn't exist
  if (!nuxtApp.$client) {
    const client = createDirectus(`${config.PROTOCOL}${config.API}`)
      .with(graphql())
      .with(rest())
      .with(authentication())
      .with(realtime())
    nuxtApp.provide('client', client)
  }

  // If already authenticated, allow navigation
  if (authState.value.isAuthenticated) {
    return
  }

  const userSettings = getSettings()

  try {
    const auth = await nuxtApp.$client.login(userSettings.username, userSettings.password)
    nuxtApp.provide('auth', auth)
    authState.value.isAuthenticated = true
    authState.value.user = auth.user
    console.log('Authenticated')
  } catch (e) {
    console.log('Authentication failed', e)
    if (to.path !== '/login') {
      return navigateTo('/login')
    }
  }
})
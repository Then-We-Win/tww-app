import { createDirectus, graphql, authentication, realtime, rest } from '@directus/sdk'

function getSettings () {
  let settings
  const baseSettings = { username: '', password: '' } // Default settings

  function resetSettings () {
    //settings = btoa(JSON.stringify(baseSettings))
    settings = JSON.stringify(baseSettings)
    window.localStorage.setItem('userSettings', settings)
  }

  // Make sure settings exists...
  if (!window.localStorage.userSettings) resetSettings()
  // Get settings...
  //settings = JSON.parse(atob(window.localStorage.userSettings))
  try {
    settings = JSON.parse(window.localStorage.userSettings)
  } catch (e) {
    resetSettings()
    return baseSettings
  }
  // If the settings don't only contain username and password, reset them...
  if ((!settings.username || !settings.password) && Object.keys(settings).length !== 2) {
    resetSettings()
    return baseSettings
  }
  return settings
}

export default defineNuxtRouteMiddleware(async (to) => {
  const { public: config } = useRuntimeConfig()
  const nuxtApp = useNuxtApp()
  const client = createDirectus(`${config.PROTOCOL}${config.API}`).with(graphql()).with(rest()).with(authentication()).with(realtime())
  if (!nuxtApp.$client) nuxtApp.provide('client', client)
    console.log('going to', to)
  if (to.name === 'login') return
  const userSettings = getSettings()

  try {
    const auth = await client.login(userSettings.username, userSettings.password)
    nuxtApp.provide('auth', auth)
    if (!nuxtApp.$client) console.log('Authenticated')
  } catch (e) {
    console.log('Authentication failed', e)
    return navigateTo('/login')
  }
})

import { readMe } from '@directus/sdk'
export default defineNuxtRouteMiddleware(async (to) => {
  const nuxtApp = useNuxtApp()
  const client = nuxtApp.$client
  let result
  let me
  console.log('state global going to', to)
  if (to.name === 'login') {
    result = await client.query(`
      query {
        settings {
          settings
          strings
        }
      }
    `)
    result.brands = []
    result.folders = []
    result.projects = []
    result.onboarding_steps = []
    me = {}
  } else {
    result = await client.query(`
      query {
        projects {
          id
          settings
          messages
          history
          content
          name
          status
          folder {
            id
          }
          folders {
            id
          }
        }
        folders {
          id
          title
        }
        brands {
          id
          name
          logo {
            filename_disk
          }
          settings
        }
        settings {
          settings
          strings
        }
        onboarding_steps {
          step
          title
          description
          form_contents
        }
      }
    `)
    me = await client.request(readMe({ fields: ['*.*']}))
    console.log('me', me)
    /*
    delete me.password
    delete me.access_token
    delete me.token
    delete me.tfa_secret
    delete me.provider
    delete me.role
    delete me.external_identifier
    delete me.auth_data
    delete me.status
    delete me.theme_dark
    delete me.theme_dark_overrides
    delete me.theme_light
    delete me.theme_light_overrides
    */
  }
  // const result = await client.request(readItems('projects', {}))
  const user = useState('me', () => me)
  const data = useState('data', () => result)
  const brand = useState('brand', () => result.brands && result.brands.length > 0 ? result.brands[0] : null)
  console.log('state global', me, result, brand)
})

<script setup>
import { createClient } from 'graphql-ws'
import { updateMe, createItem, updateItem } from '@directus/sdk'

console.log("app.vue")
const app = useAppConfig()
const config = useRuntimeConfig()
const API = config.public.API
const nuxtApp = useNuxtApp()
const client = nuxtApp.$client
const WS = 'ws'
// global meta information can be added to the head
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.tairo?.title}`
      : `${app.tairo?.title}`
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png',
    },
  ],
})

const auth = nuxtApp.$auth
const user = useState('me')
const appData = useState('data')
const gql = createClient({
  url: `${WS}${API}/graphql`,
  keepAlive: 30000,
  connectionParams: async () => {
    return { access_token: auth.access_token }
  },
})

const route = useRoute()

const settings = ref({})
const strings = ref({})
const brands = ref([])
const projects = ref([])
const folders = ref([])
const onboardingSteps = ref([])
settings.value = appData.value.settings.settings
strings.value = appData.value.settings.strings
brands.value = appData.value.brands
projects.value = appData.value.projects
folders.value = appData.value.folders
onboardingSteps.value = appData.value.onboarding_steps

// Let the application update user settings...
const updateUser = async (key, value) => {
  console.log('Updating user')
  let updateUser = user.value
  delete updateUser.id
  delete updateUser.last_access
  delete updateUser.last_page
  const result = await client.request(updateMe(updateUser))
}

// console.log('Settings:', JSON.stringify(settings.value, null, 2))
// console.log('Strings:', JSON.stringify(strings.value, null, 2))
// console.log('Brands:', JSON.stringify(brands.value, null, 2))
// console.log('Projects:', JSON.stringify(projects.value, null, 2))

// Provide settings, strings and user to the application...

const state = ref({
  modals: {
    newProject: false,
  },
  menu: {
    mobile: {
      open: false,
    },
  },
  projects: {
    selected: '',
    chat: {
      responding: false,
    },
  },
  profileEdit: false,
  selectedBrand: '',
})

// This is used by ProjectPageChat and ProjectPageDocument
const selectedProject = computed(() => {
  if (!state.value.projects.selected) state.value.projects.selected = projects.value[0].id
  return projects.value.find(
    project => project.id === state.value.projects.selected,
  )
})

const selectedBrand = computed(() => {
  if (!state.value.selectedBrand) state.value.selectedBrand = brands.value[0].id
  return brands.value.find(
    brand => brand.id === state.value.selectedBrand,
  )
})

provide('selectedProject', selectedProject)
provide('selectedBrand', selectedBrand)
provide('state', state)
provide('settings', settings)
provide('strings', strings)
provide('brands', brands)
provide('projects', projects)
provide('folders', folders)
provide('onboardingSteps', onboardingSteps)
provide('user', user)
provide('updateUser', updateUser)

const platform = {
  create: async function (collection, item) {
    return await client.request(createItem(collection, item))
  },
  update: async function (collection, id, item) {
    return await client.request(updateItem(collection, id, item))
  },
}

provide('platform', platform)

// Replace an item in an array by its id
function replaceItemById(items, id, newContent) {
  for (let i = 0; i < items.value.length; i++) {
    if (items.value[i].id === id) {
      items.value[i] = { ...items.value[i], ...newContent }
      break
    }
  }
}

// Remove an item from an array by its id
function removeItemById(items, id) {
  const index = items.value.findIndex(item => item.id === id)
  if (index !== -1) {
    items.value.splice(index, 1)
  }
}

// TODO: roll up the 3 subscriptions into one...
// Loop through each settings.value.subscriptions and subscribe to each

const subscriptionStrategies = {
  projects: {
    next: ({ data }) => {
      console.log('Projects changed:', data)
      const change = {
        id: data.projects_mutated.key,
        data: data.projects_mutated.data,
        event: data.projects_mutated.event,
      }
      if (change.event === 'delete') {
        removeItemById(projects, change.id)
      }
      else if (change.event === 'create') {
        projects.value.push(change.data)
      }
      else {
        console.log('replacing')
        replaceItemById(projects, change.id, change.data)
      }
      console.log('Project change:', change)
    },
  },
  brands: {
    next: ({ data }) => {
      const change = {
        id: data.brands_mutated.key,
        data: data.brands_mutated.data,
        event: data.brands_mutated.event,
      }
      if (change.event === 'delete') {
        removeItemById(brands, change.id)
      }
      else if (change.event === 'create') {
        brands.value.push(change.data)
      }
      else {
        replaceItemById(brands, change.id, change.data)
      }
      console.log('Brands change:', change)
    },
  },
  settings: {
    next: ({ data }) => {
      console.log('Settings changed:', data.settings_mutated.data.settings)
      settings.value = data.settings_mutated.data.settings
      strings.value = data.settings_mutated.data.strings
    },
  },
  default: {
    next: ({ data }) => {
      console.log('WARN: Nothing changed:', data)
    },
    error: (err) => {
      console.log('Subscription error:', err)
    },
  },
}

Object.keys(settings.value.subscriptions).forEach((key) => {
  gql.subscribe({ query: settings.value.subscriptions[key] }, {
    next: subscriptionStrategies[key].next || subscriptionStrategies.default.next,
    error: subscriptionStrategies[key].error || subscriptionStrategies.default.error,
  })
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

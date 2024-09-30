<template>
  <div>Loading...</div>
</template>

<script setup>
console.log('pages/auth/callback.vue')
import { useRoute, useRouter } from 'vue-router'
// import { useAuthStore } from '~/store/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const token = route.query.token

if (token) {
  authStore.handleOAuthCallback(token).then(() => {
    router.push('/')
  })
}
else {
  router.push('/login')
}
</script>

<script setup>
const settings = inject('settings')
const authState = useState('auth')
const router = useRouter()

const handleNavigation = async () => {
  try {
    if (!authState.value?.isAuthenticated) {
      await navigateTo('/login')
      return
    }
    await navigateTo('/layouts/form-4')
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>

<template>
  <div
    @click="handleNavigation"
    class="ltablet:flex hidden items-center gap-2 lg:flex cursor-pointer"
  >
    <img
      :src="settings.app.logo"
      :alt="settings.app.name"
      class="max-h-[60px] w-auto"
    >
    <div style="color: white; font-weight: 900; font-size: 1.5rem">Then We Win</div>
  </div>
</template>
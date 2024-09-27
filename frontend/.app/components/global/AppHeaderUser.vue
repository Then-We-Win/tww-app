<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useRouter } from 'vue-router'

console.log('AppHeaderUser.vue')

const user = inject('user') as Ref<any>
const userValue = user.value
const settings = inject('settings') as Ref<any>
const state = inject('state') as Ref<any>
const brands = inject('brands') as Ref<any[]>
const selectedBrand = inject('selectedBrand')
console.log('Starting Brand:', selectedBrand.value.name)

const router = useRouter()

const handleLogout = async () => {
  localStorage.removeItem("userSettings")
  router.push('/login')
}

const handleBrandChange = (brand: any) => {
  state.value.brand = brand
  localStorage.setItem('brand', JSON.stringify(brand))
  console.log('Switching brand to', state.value.brand)
  router.push('/')
}
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <Menu
      v-slot="{ close }"
      as="div"
      class="relative z-20 size-9 text-left"
    >
      <MenuButton as="template">
        <button
          type="button"
          class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
        >
          <div
            class="relative inline-flex size-9 items-center justify-center rounded-full"
          >
            <img
              :src="settings.app.api.assets + userValue.avatar.filename_disk"
              class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
              alt=""
            >
          </div>
        </button>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
      <MenuItems
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-0 top-10 mt-2 w-60 origin-bottom-right rounded-md border bg-white text-left shadow-lg focus:outline-none"
        >
          <div class="bg-muted-50 dark:bg-muted-700/40 p-6">
            <div class="flex items-center">
              <div
                class="relative inline-flex size-14 items-center justify-center rounded-full"
              >
                <img
                  :src="settings.app.api.assets + userValue.avatar.filename_disk"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                >
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-medium dark:text-white"
                >
                  {{ user.first_name }} {{ user.last_name }}
                </h6>
                <p class="text-muted-400 font-sans text-xs">
                  {{ user.title }}
                </p>
              </div>
            </div>
          </div>
          <div class="px-6 py-1.5 mt-3">
            <BaseButton
                rounded="lg"
                class="w-full"
                @click="state.profileEdit = true"
                @click.passive="close"
              >
                Manage Account
              </BaseButton>
          </div>
          <div class="px-6 py-1.5">
            <h6
                class="font-heading text-muted-800 mt-2 mb-2 text-sm font-medium dark:text-white"
              >
              My brands
            </h6>
            <MenuItem 
              v-slot="{ active }" 
              as="div"
              v-for="brand in brands"
              :key="brand.id"
            >
              <NuxtLink
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active || (state.brand && state.brand.id === brand.id)
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
                @click="handleBrandChange(brand)"
                @click.passive="close"
              >
                <div
                  class="relative inline-flex size-9 items-center justify-center rounded-full"
                >
                  <img
                    :src="settings.app.api.assets + brand.logo.filename_disk"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  >
                </div>
                <div class="ms-2">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    {{ brand.name }}
                  </h6>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>

          <div class="px-6 pb-6 pt-2">
            <BaseButton
              rounded="lg"
              class="w-full"
              @click="handleLogout"
              @click.passive="close"
            >
              Logout
            </BaseButton>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>

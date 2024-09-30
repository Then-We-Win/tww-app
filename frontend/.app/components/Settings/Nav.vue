<script setup lang="ts">
const user = inject('user')
const userValue = user.value
const settings = inject('settings')

const page = ref('account')

const links = [
  {
    name: 'Account',
    icon: 'ph:user-duotone',
    to: 'account',
  }
  // {
  //   name: 'Brand',
  //   icon: 'ph:buildings-duotone',
  //   to: 'brand',
  // },
  // {
  //   name: 'Documents',
  //   icon: 'ph:files-duotone',
  //   to: 'documents',
  // },
]
</script>

<template>
  <div class="overflow-hidden">
    <div class="grid gap-8 sm:grid-cols-12">
      <div class="col-span-12 p-2 sm:col-span-3">
        <div class="flex w-full items-center gap-2 pl-4 pt-4">
          <BaseAvatar
            :src="settings.app.api.assets + userValue.avatar.filename_disk"
            size="md"
          />
          <div class="">
            <BaseHeading
              tag="h2"
              size="md"
              weight="medium"
              lead="none"
            >
              {{ user.first_name }}
              {{ user.last_name }}
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              {{ user.title }}
            </BaseParagraph>
          </div>
        </div>
        <div class="mt-8 max-w-[260px] pl-4">
          <ul class="space-y-1 font-sans text-sm">
            <li v-for="link in links" :key="link.name">
              <NuxtLink
                exact-active-class="!text-primary-500 !bg-primary-500/10"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                @click="page = link.to"
              >
                <Icon :name="link.icon" class="size-4" />
                <span>{{ link.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-12 p-5 sm:col-span-9">
        <SettingsAccount v-if="page === 'account'" />
        <SettingsBrand v-if="page === 'brand'" />
        <SettingsDocuments v-if="page === 'documents'" />
      </div>
    </div>
  </div>
</template>

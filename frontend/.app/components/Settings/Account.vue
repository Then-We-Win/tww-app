<script setup lang="ts">
const user = inject('user')
const userValue = user.value
const settings = inject('settings')
const state = inject('state')
const strings = inject('strings')
const brands = inject('brands')
const updateUser = inject('updateUser')
</script>

<template>
  <BaseCard>
    <div class="flex items-center justify-between p-4">
      <div>
        <BaseHeading
          tag="h2"
          size="sm"
          weight="medium"
          lead="normal"
          class="uppercase tracking-wider"
        >
          General info
        </BaseHeading>
        <BaseText size="xs" class="text-muted-400">
          Edit your account's general information.
        </BaseText>
      </div>
      <div class="flex items-center gap-2">
        <BaseButton class="w-24" @click="state.profileEdit = false">
          Back
        </BaseButton>
        <BaseButton
          type="submit"
          color="primary"
          class="w-24"
          @click="updateUser"
        >
          Update
        </BaseButton>
      </div>
    </div>
    <div class="p-4">
      <div class="mx-auto max-w-lg space-y-12 py-8">
        <TairoFormGroup
          label="Profile picture"
          sublabel="This is how others will recognize you"
        >
          <div
            class="relative flex flex-col items-center justify-center gap-4"
          >
            <div class="flex items-center">
              <div
                class="relative inline-flex size-16 items-center justify-center rounded-full"
              >
                <img
                  :src="settings.app.api.assets + userValue.avatar.filename_disk"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                >
              </div>
            </div>
          </div>
        </TairoFormGroup>

        <TairoFormGroup
          label="Profile Info"
          sublabel="Others diserve to know you more"
        >
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 sm:col-span-6">
              <BaseInput
                v-model="user.first_name"
                type="text"
                icon="ph:user-duotone"
                placeholder="First name"
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <BaseInput
                v-model="user.last_name"
                type="text"
                icon="ph:user-duotone"
                placeholder="Last name"
              />
            </div>
          </div>
        </TairoFormGroup>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
const user = inject('user')
const settings = inject('settings')
const strings = inject('strings')
const brands = inject('brands')
const updateUser = inject('updateUser')
const onboardingSteps = inject('onboardingSteps')
</script>

<template>
  <div
    v-for="item in onboardingSteps"
    :key="item.step"
    class="mx-auto mt-6 w-full max-w-6xl px-4"
  >
    <div class="mb-10">
      <BaseHeading
        tag="h1"
        size="2xl"
        class="text-muted-800 dark:text-white"
      >
        <span>{{ item.title }}</span>
      </BaseHeading>
    </div>
    <WizardStepContent :form-contents="item.form_contents" />
  </div>
</template>

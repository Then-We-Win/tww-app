<script setup lang="ts">
import type { Project, ProjectStepData, ProjectType } from '../../types'
import { useRoute } from 'vue-router'

definePageMeta({
  title: 'Wizard — Step 1',
  preview: {
    title: 'Wizard — Step 1',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizards', 'forms'],
    src: '/img/screens/wizard-1.png',
    srcDark: '/img/screens/wizard-1-dark.png',
    order: 30,
  },
})
useHead({
  title: 'Project type',
})

const route = useRoute()
const stepId = route.params.step
const onboardingSteps = inject('onboardingSteps')

const formContents = computed(() => {
  return onboardingSteps.value.find(step => step.step == stepId).form_contents
})

const {
  getNextStep,
  data: project,
  handleSubmit,
  goToStep,
} = useMultiStepForm<Project, ProjectStepData>()

function onSelectType(type: ProjectType) {
  // const next = getNextStep()
  // if (next) {
  project.value.type = type
  handleSubmit()
  // goToStep(next)
  // }
}
</script>

<template>
  <div>
    <WizardStepTitle />
    <div class="mx-auto w-full max-w-6xl px-4">
      <WizardStepContent :form-contents="formContents" />
    </div>
    <div class="mt-5 flex items-center justify-center">
      <BaseButton
        v-if="stepId == 1"
        :to="getNextStep()?.to"
        color="primary"
        rounded="lg"
        class="w-36"
        @click.prevent="() => onSelectType('design')"
      >
        <span>
          Continue
        </span>
      </BaseButton>
    </div>
  </div>
</template>
